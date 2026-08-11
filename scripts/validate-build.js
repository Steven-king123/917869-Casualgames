#!/usr/bin/env node

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const SOURCE_FILES = [
  'js/i18n.js',
  'js/config.js',
  'js/state.js',
  'js/ui.js',
  'js/tutorial.js',
  'js/save.js',
  'js/engine.js',
  'js/main.js'
];
const SINGLE_FILE = path.resolve(PROJECT_ROOT, '917869-advanced.html');

function read(relativePath) {
  return fs.readFileSync(path.resolve(PROJECT_ROOT, relativePath), 'utf8');
}

function extractSingleFilePart(html, tagName) {
  const pattern = new RegExp(`<${tagName}>([\\s\\S]*?)</${tagName}>`);
  const match = html.match(pattern);
  assert(match, `single-file HTML is missing <${tagName}>`);
  return match[1].replace(/^\n/, '').replace(/ {2}$/, '');
}

function collectIds(html) {
  return [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
}

function collectDomReferences(sources) {
  const references = new Set();
  for (const source of sources) {
    for (const match of source.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)) references.add(match[1]);
  }
  return references;
}

function validate() {
  const sources = SOURCE_FILES.map(read);
  const app = read('js/app.js');
  const index = read('index.html');
  const css = read('css/styles.css');
  const singleFile = read('917869-advanced.html');

  sources.forEach((source, index) => new vm.Script(source, { filename: SOURCE_FILES[index] }));
  new vm.Script(app, { filename: 'js/app.js' });
  new vm.Script(extractSingleFilePart(singleFile, 'script'), { filename: SINGLE_FILE });

  assert.equal(app, sources.join('\n\n'), 'js/app.js matches public source files');
  assert.equal(extractSingleFilePart(singleFile, 'style'), css, 'single-file CSS matches css/styles.css');
  assert.equal(extractSingleFilePart(singleFile, 'script'), app, 'single-file JavaScript matches js/app.js');

  const publicText = [index, css, ...sources, app, singleFile].join('\n');
  const forbidden = [
    /DEV_MODE/,
    /DEFAULT_THEME/,
    /AVAILABLE_THEMES/,
    /THEME_STORAGE_KEY/,
    /themeSelect/,
    /theme-liquid-glass/,
    /theme-star-map/,
    /liquid-glass/,
    /star-map/,
    /developerTools/i,
    /devTools/i,
    /dev-overlay/i,
    /dev-editor/i,
    /dev-premium-pulse/i,
    /dev-tools/i,
    /dev-board-data/i,
    /tile-refraction/i,
    /tile-caustic/i,
    /easter-preset-btn/i,
    /DEV_ALLOWED_VALUES/,
    /Developer Mode/i,
    /Developer Options/i,
    /Developer Tools/i,
    /开发者模式/,
    /开发者选项/,
    /开发者工具/,
    /液态玻璃/,
    /星图/,
    /主题设置/,
    /window\.dev/,
    /source:\s*['"]dev['"]/
  ];
  for (const pattern of forbidden) assert(!pattern.test(publicText), `public release contains forbidden content: ${pattern}`);

  assert(!index.includes('onclick='), 'public index has no inline onclick handlers');
  const expectedScripts = SOURCE_FILES.map((file) => `  <script src="${file}"></script>`).join('\n');
  assert(index.includes(expectedScripts), 'public index loads scripts in dependency order');

  const ids = collectIds(index);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  assert.deepEqual([...new Set(duplicates)], [], 'public index contains no duplicate IDs');
  const missing = [...collectDomReferences(sources)].filter((id) => !ids.includes(id));
  assert.deepEqual(missing, [], 'all public getElementById references exist in index.html');

  console.log(`Validated public release: ${ids.length} HTML IDs and ${sources.length} source files.`);
}

try {
  validate();
  console.log('Public release validation passed.');
} catch (error) {
  console.error(`Public release validation failed: ${error.message}`);
  process.exitCode = 1;
}
