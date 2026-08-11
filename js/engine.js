    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    function waitAnimation(ms) {
      return new Promise((resolve) => {
        const start = performance.now();
        const tick = (now) => {
          if (now - start >= ms) resolve();
          else requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }

    function runTween(duration, onFrame) {
      return new Promise((resolve, reject) => {
        const start = performance.now();
        const frame = (now) => {
          try {
            const t = Math.min(1, (now - start) / duration);
            onFrame(t);
            if (t < 1) requestAnimationFrame(frame);
            else resolve();
          } catch (error) {
            reject(error);
          }
        };
        requestAnimationFrame(frame);
      });
    }

    function tileRect(row, col) { return cellRects[row * GRID_SIZE + col]; }

    function axisOf(direction) {
      return direction === 'left' || direction === 'right' ? 'horizontal' : 'vertical';
    }

    function getMergeResult(v1, v2, tier, direction) {
      const map = RULE_INDEX[axisOf(direction)]?.[tier];
      return map ? map.get(`${v1},${v2}`) : null;
    }

    function isTierUpgrade(tileA, tileB) {
      if (tileA.tier !== tileB.tier) return false;
      if (tileA.value !== tileB.value) return false;
      const easterUpgrade = easterEggId && EASTER_EGG_ROUTES[easterEggId]?.value === tileA.value;
      if (!UPGRADE_VALUES.has(tileA.value) && !easterUpgrade) return false;
      if (tileA.tier >= MAX_TIER) return false;
      if (tileA.tier >= unlockedTier) return false;
      return true;
    }

    function shouldVanish(v1, v2) { return VANISH_VALUES.has(v1) && VANISH_VALUES.has(v2); }

    function resolveCollision(tileA, tileB, direction) {
      if (!tileA || !tileB) return null;
      if (tileA.tier !== tileB.tier) return { type: "block" };

      const merge = getMergeResult(tileA.value, tileB.value, tileA.tier, direction);
      if (merge) return { type: "merge", value: merge.value, tier: tileA.tier, isUpgrade: false };
      if (isTierUpgrade(tileA, tileB)) return { type: "merge", value: tileA.value, tier: tileA.tier + 1, isUpgrade: true };
      if (shouldVanish(tileA.value, tileB.value)) return { type: "vanish" };
      return { type: "block" };
    }

    function tierMark(tier) {
      if (tier === 1) return '✦✦';
      if (tier === 2) return '✦✦✦';
      return '';
    }

    function updateTileMarkAndValue(tile) {
      tile.el.dataset.value = String(tile.value);
      tile.el.dataset.tier = String(tile.tier);
      tile.el.setAttribute('data-value', String(tile.value));
      tile.el.setAttribute('data-tier', String(tile.tier));
      tile.el._tileMark.textContent = tierMark(tile.tier);
      tile.el._tileNumber.textContent = String(tile.value);
    }

    function initGridVisual() {
      if (gridEl.dataset.ready === '1') return;
      for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        const r = Math.floor(i / GRID_SIZE);
        const c = i % GRID_SIZE;
        cell.dataset.row = String(r);
        cell.dataset.col = String(c);
        gridEl.appendChild(cell);
      }

      tileLayer = document.createElement('div');
      tileLayer.className = 'tile-layer';
      tileLayer.setAttribute('aria-hidden', 'true');
      flashLayer = document.createElement('div');
      flashLayer.className = 'flash-layer';
      flashLayer.setAttribute('aria-hidden', 'true');
      gridEl.appendChild(tileLayer);
      gridEl.appendChild(flashLayer);
      gridEl.dataset.ready = '1';

      measureCellRects();
    }

    function getAccessibleTierLabel(tier) {
      if (tier === 1) return ` ${t('ariaGridTier1')}`;
      if (tier === 2) return ` ${t('ariaGridTier2')}`;
      return '';
    }

    function updateGridAccessibility() {
      if (!gridEl) return;
      const cells = gridEl.querySelectorAll('.cell');
      let tileCount = 0;
      const descriptions = [];
      cells.forEach((cell, index) => {
        const row = Math.floor(index / GRID_SIZE);
        const col = index % GRID_SIZE;
        const tileId = board[row]?.[col];
        const tile = (tileId && tiles.get(tileId)) || [...tiles.values()].find((entry) => entry.active && entry.row === row && entry.col === col) || null;
        const value = tile ? `${tile.value}${getAccessibleTierLabel(tile.tier)}` : t('ariaGridEmpty');
        cell.setAttribute('role', 'gridcell');
        cell.setAttribute('aria-rowindex', String(row + 1));
        cell.setAttribute('aria-colindex', String(col + 1));
        cell.setAttribute('aria-label', t('ariaGridCell')
          .replace('{row}', String(row + 1))
          .replace('{col}', String(col + 1))
          .replace('{value}', value));
        if (tile) {
          tileCount += 1;
          descriptions.push(`${row + 1},${col + 1} ${value}`);
        }
      });
      if (gridStatusEl) {
        gridStatusEl.textContent = t('gridStatus')
          .replace('{count}', String(tileCount))
          .replace('{tiles}', descriptions.join('；'));
      }
    }

    function initBoard() {
      board = Array.from({ length: GRID_SIZE }, () => Array.from({ length: GRID_SIZE }, () => 0));
      tileIdSeq = 1;
      for (const tile of tiles.values()) releaseTileElement(tile.el);
      tiles.clear();
      updateGridAccessibility();
    }

    function clearBoardDataOnly() {
      for (const tile of tiles.values()) releaseTileElement(tile.el);
      tiles.clear();
      for (let r = 0; r < GRID_SIZE; r++) for (let c = 0; c < GRID_SIZE; c++) board[r][c] = 0;
      updateGridAccessibility();
    }

    function measureCellRects() {
      const cells = Array.from(gridEl.querySelectorAll('.cell'));
      const oldRects = cellRects.map((r) => ({ ...r }));
      const gridRect = gridEl.getBoundingClientRect();

      cellRects = cells.map((cell) => {
        const rect = cell.getBoundingClientRect();
        return {
          left: rect.left - gridRect.left,
          top: rect.top - gridRect.top,
          width: rect.width,
          height: rect.height
        };
      });

      for (const tile of tiles.values()) {
        const current = tileRect(tile.row, tile.col);
        if (!current) continue;

        if (oldRects.length) {
          const prev = oldRects[tile.row * GRID_SIZE + tile.col];
          if (prev) {
            tile.x += current.left - prev.left;
            tile.y += current.top - prev.top;
          } else {
            tile.x = current.left;
            tile.y = current.top;
          }
        } else {
          tile.x = current.left;
          tile.y = current.top;
        }

        tile.width = current.width;
        tile.height = current.height;
        tile.fontSize = Math.max(16, Math.floor(current.width * 0.45));
        renderTile(tile);
      }
    }

    function initParticles() {
      if (qualityMode === 0 || !ambientParticles || ambientParticles.childElementCount) return;
      const colors = [
        'rgba(120, 170, 255, ',
        'rgba(178, 126, 255, ',
        'rgba(84, 228, 255, '
      ];

    for (let i = 0; i < 28; i++) {
        const p = document.createElement('span');
        const dx = `${(Math.random() * 300 - 150).toFixed(2)}px`;
        const dy = `${(Math.random() * 280 - 140).toFixed(2)}px`;
      const size = `${(6 + Math.random() * 8).toFixed(2)}px`;
      const alpha = (Math.random() * 0.2 + 0.24).toFixed(3);
      const dur = (10 + Math.random() * 12).toFixed(2);
        const delay = (-Math.random() * Number(dur)).toFixed(2);
        const color = `${colors[Math.floor(Math.random() * colors.length)]}${alpha})`;

        p.className = 'particle';
        p.style.setProperty('--dx', dx);
        p.style.setProperty('--dy', dy);
        p.style.setProperty('--size', size);
        p.style.setProperty('--alpha', alpha);
        p.style.setProperty('--duration', `${dur}s`);
        p.style.setProperty('--delay', `${delay}s`);
        p.style.setProperty('--particle-color', color);
        p.style.left = `${(Math.random() * 100).toFixed(2)}%`;
        p.style.top = `${(Math.random() * 100).toFixed(2)}%`;
        ambientParticles.appendChild(p);
      }
    }

    function createTileElement() {
      const el = document.createElement('div');
      el.innerHTML = '<span class="tile-mark" aria-hidden="true"></span><span class="tile-number"></span>';
      el._tileMark = el.querySelector('.tile-mark');
      el._tileNumber = el.querySelector('.tile-number');
      return el;
    }

    function acquireTileElement() {
      const el = tilePool.pop() || createTileElement();
      if (!tileLayer.contains(el)) tileLayer.appendChild(el);
      el.className = 'tile';
      el.style.display = 'flex';
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.zIndex = '';
      el.style.setProperty('--trail-alpha', '0');
      el.style.setProperty('--trail-scale', '0');
      el.style.setProperty('--trail-rotate', '0deg');
      el._tileMark.textContent = '';
      el._tileNumber.textContent = '';
      el._tileNumber.style.opacity = '1';
      el._tileNumber.style.filter = 'none';
      return el;
    }

    function releaseTileElement(el) {
      el.style.display = 'none';
      el.style.opacity = '0';
      el.style.transform = 'none';
      tilePool.push(el);
    }

    function syncTileVisualGeometry(tile) {
      if (tile.width !== undefined) {
        tile.el.style.width = `${tile.width}px`;
        tile.el.style.height = `${tile.height}px`;
        tile.el.style.fontSize = `${tile.fontSize}px`;
      }
    }

    function renderTile(tile) {
      if (!tile || !tile.active) return;
      tile.el.style.transform = `translate3d(${tile.x}px, ${tile.y}px, 0) scale(${tile.scale}) rotate(${tile.rotation}deg)`;
      tile.el.style.opacity = String(tile.opacity);
      tile.el.style.setProperty('--trail-alpha', String(tile.trailAlpha ?? 0));
      tile.el.style.setProperty('--trail-scale', String(tile.trailScale ?? 0));
      tile.el.style.setProperty('--trail-rotate', `${tile.trailRotate ?? 0}deg`);
      tile.el.style.zIndex = String(2 + tile.row * GRID_SIZE + tile.col);
      syncTileVisualGeometry(tile);
    }

    function buildTile(row, col, value, tier = 0) {
      const rect = tileRect(row, col);
      const el = acquireTileElement();

      const tile = {
        id: tileIdSeq++,
        value,
        tier,
        row,
        col,
        x: rect ? rect.left : 0,
        y: rect ? rect.top : 0,
        width: rect ? rect.width : 0,
        height: rect ? rect.height : 0,
        fontSize: rect ? Math.max(16, Math.floor(rect.width * 0.45)) : 18,
        scale: 1,
        opacity: 1,
        rotation: 0,
        trailAlpha: 0,
        trailScale: 0,
        trailRotate: 0,
        active: true,
        isUpgrade: false,
        el
      };

      updateTileMarkAndValue(tile);
      tiles.set(tile.id, tile);
      renderTile(tile);
      return tile;
    }

    function destroyTile(id) {
      const tile = tiles.get(id);
      if (!tile) return;
      tile.active = false;
      tiles.delete(id);
      releaseTileElement(tile.el);
    }

    function setSpawnState(tile) {
      tile.scale = 0.2;
      tile.opacity = 0;
      tile.rotation = 0;
      tile.trailAlpha = 0;
      tile.trailScale = 0;
      tile.trailRotate = 0;
      renderTile(tile);
    }

    function maxTile() {
      let m = 0;
      for (const tile of tiles.values()) if (tile.active && tile.value > m) m = tile.value;
      return m;
    }

    function resetSpawnHistory() {
      lastSpawnValue = null;
      spawnValueStreak = 0;
    }

    function pickSpawnValue() {
      const values = [6, 7, 8];
      const choice = values[Math.floor(Math.random() * values.length)];

      if (choice === lastSpawnValue && spawnValueStreak >= 5) {
        const alternatives = values.filter((v) => v !== lastSpawnValue);
        const forced = alternatives[Math.floor(Math.random() * alternatives.length)];
        lastSpawnValue = forced;
        spawnValueStreak = 1;
        return forced;
      }

      if (choice === lastSpawnValue) spawnValueStreak += 1;
      else {
        lastSpawnValue = choice;
        spawnValueStreak = 1;
      }

      return choice;
    }

    function addRandomTile() {
      const empties = [];
      for (let r = 0; r < GRID_SIZE; r++) for (let c = 0; c < GRID_SIZE; c++) if (board[r][c] === 0) empties.push({ r, c });
      if (!empties.length) return null;
      const { r, c } = empties[Math.floor(Math.random() * empties.length)];
      const tile = buildTile(r, c, pickSpawnValue(), 0);
      board[r][c] = tile.id;
      return tile;
    }

    function tileAtBoard(boardData, row, col) {
      const id = boardData[row][col];
      return id ? (tiles.get(id) || null) : null;
    }

    function processLine(lineIds, direction) {
      const reverse = direction === 'right' || direction === 'down';
      const ordered = reverse ? [...lineIds].reverse() : [...lineIds];
      const filtered = ordered.filter(Boolean);
      const result = [];
      let i = 0;

      while (i < filtered.length) {
        if (i === filtered.length - 1) {
          result.push({ type: 'keep', id: filtered[i] });
          i += 1;
          continue;
        }

        const aId = filtered[i];
        const bId = filtered[i + 1];
        const first = tiles.get(aId);
        const second = tiles.get(bId);

        if (!first || !second) {
          result.push({ type: 'keep', id: first ? aId : bId });
          i += 1;
          continue;
        }

        const collision = resolveCollision(first, second, direction);
        if (collision.type === 'vanish') {
          result.push({ type: 'vanish', ids: [aId, bId] });
          i += 2;
        } else if (collision.type === 'merge') {
          result.push({ type: 'merge', ids: [aId, bId], value: collision.value, tier: collision.tier, isUpgrade: collision.isUpgrade });
          i += 2;
        } else {
          result.push({ type: 'keep', id: aId });
          i += 1;
        }
      }

      while (result.length < GRID_SIZE) result.push({ type: 'empty' });
      return reverse ? [...result].reverse() : result;
    }

    function simulateMove(direction) {
      const nextBoard = Array.from({ length: GRID_SIZE }, () => Array.from({ length: GRID_SIZE }, () => 0));
      const moveTargets = new Map();
      const events = [];
      let changed = false;

      function keep(id, row, col) {
        const t = tiles.get(id);
        if (!t) return;
        nextBoard[row][col] = id;
        moveTargets.set(id, { row, col });
        if (t.row !== row || t.col !== col) changed = true;
      }

      function merge(ids, row, col, value, tier, isUpgrade, fromTier = 0) {
        const [a, b] = ids;
        const ta = tiles.get(a);
        const tb = tiles.get(b);
        if (ta) ta && (ta.row !== row || ta.col !== col) && (changed = true);
        if (tb) tb && (tb.row !== row || tb.col !== col) && (changed = true);
        if (ta) moveTargets.set(a, { row, col });
        if (tb) moveTargets.set(b, { row, col });
        events.push({
          type: 'merge',
          ids: [a, b],
          to: { row, col },
          value,
          tier,
          isUpgrade,
          fromTier,
          fromValues: [ta?.value, tb?.value]
        });
        changed = true;
      }

      function vanish(ids, row, col) {
        const ta = tiles.get(ids[0]);
        const tb = tiles.get(ids[1]);
        if (ta) ta && (ta.row !== row || ta.col !== col) && (changed = true);
        if (tb) tb && (tb.row !== row || tb.col !== col) && (changed = true);
        if (ta) moveTargets.set(ids[0], { row, col });
        if (tb) moveTargets.set(ids[1], { row, col });
        events.push({ type: 'vanish', ids: [ids[0], ids[1]], to: { row, col }, values: [ta?.value, tb?.value] });
        changed = true;
      }

      if (direction === 'left' || direction === 'right') {
        for (let r = 0; r < GRID_SIZE; r++) {
          const output = processLine([...board[r]], direction);
          for (let c = 0; c < GRID_SIZE; c++) {
            const slot = output[c];
            if (slot.type === 'keep') {
              if (slot.id) keep(slot.id, r, c);
            } else if (slot.type === 'merge') {
              merge(slot.ids, r, c, slot.value, slot.tier, slot.isUpgrade);
            } else if (slot.type === 'vanish') {
              vanish(slot.ids, r, c);
            }
          }
        }
      } else {
        for (let c = 0; c < GRID_SIZE; c++) {
          const line = [board[0][c], board[1][c], board[2][c], board[3][c]];
          const output = processLine(line, direction);
          for (let r = 0; r < GRID_SIZE; r++) {
            const slot = output[r];
            if (slot.type === 'keep') {
              if (slot.id) keep(slot.id, r, c);
            } else if (slot.type === 'merge') {
              merge(slot.ids, r, c, slot.value, slot.tier, slot.isUpgrade);
            } else if (slot.type === 'vanish') {
              vanish(slot.ids, r, c);
            }
          }
        }
      }

      return { changed, nextBoard, moveTargets, events };
    }

    async function animateMove(moveTargets) {
      const tasks = [];

      for (const [id, to] of moveTargets.entries()) {
        const tile = tiles.get(id);
        if (!tile) continue;
        const target = tileRect(to.row, to.col);
        if (!target) continue;

        const fromX = tile.x;
        const fromY = tile.y;
        const toX = target.left;
        const toY = target.top;
        tasks.push({ tile, fromX, fromY, toX, toY, row: to.row, col: to.col });

        if (fromX !== toX || fromY !== toY) {
          const dx = toX - fromX;
          const dy = toY - fromY;
          tile.trailRotate = (Math.atan2(dy, dx) * 180) / Math.PI;
          tasks[tasks.length - 1].hasTrail = true;
        } else {
          tile.trailAlpha = 0;
          tile.trailScale = 0;
        }
      }

      if (!tasks.length) return;

      await runTween(MOVE_DURATION, (raw) => {
        const t = easeOutCubic(raw);
        const trailStrength = Math.sin(raw * Math.PI);
        for (const item of tasks) {
          item.tile.x = item.fromX + (item.toX - item.fromX) * t;
          item.tile.y = item.fromY + (item.toY - item.fromY) * t;
          if (item.hasTrail) {
            item.tile.trailAlpha = 0.22 * trailStrength;
            item.tile.trailScale = 0.95 * trailStrength;
          }
          renderTile(item.tile);
        }
      });

      for (const item of tasks) {
        item.tile.x = item.toX;
        item.tile.y = item.toY;
        item.tile.row = item.row;
        item.tile.col = item.col;
        item.tile.trailAlpha = 0;
        item.tile.trailScale = 0;
        renderTile(item.tile);
      }
    }

    async function animateVanish(ids, points = []) {
      const unique = [...new Set(ids)];
      if (!unique.length) return;

      const victims = unique
        .map((id) => tiles.get(id))
        .filter(Boolean)
        .map((tile) => ({ tile, startScale: tile.scale }));

      spawnImpactFlash(points);

      await runTween(MERGE_DURATION, (raw) => {
        const hold = 0.35;
        const shrink = raw <= hold ? 0 : (raw - hold) / (1 - hold);
        for (const v of victims) {
          v.tile.scale = v.startScale + (0.18 - v.startScale) * shrink;
          v.tile.opacity = 1 - shrink;
          renderTile(v.tile);
        }
      });

      for (const v of victims) {
        v.tile.scale = 0.18;
        v.tile.opacity = 0;
        v.tile.trailAlpha = 0;
        v.tile.trailScale = 0;
        v.tile.trailRotate = 0;
        renderTile(v.tile);
      }
    }

    function valueToGlowColor(value, tier = 0, isUpgrade = false) {
      if (isUpgrade) return 'rgba(255, 223, 110, 0.95)';
      if (tier === 1) {
        return ({
          6: 'rgba(74, 222, 128, 0.62)',
          7: 'rgba(251, 191, 36, 0.62)',
          8: 'rgba(251, 146, 60, 0.62)',
          1: 'rgba(196, 132, 252, 0.62)',
          13: 'rgba(251, 146, 60, 0.62)',
          78: 'rgba(103, 232, 249, 0.7)',
          91: 'rgba(253, 224, 71, 0.72)',
          69: 'rgba(52, 211, 153, 0.7)',
          9: 'rgba(248, 113, 113, 0.62)'
        })[value] || 'rgba(255, 255, 255, 0.6)';
      }
      if (tier === 2) {
        return ({
          6: 'rgba(148, 163, 184, 0.72)',
          7: 'rgba(209, 213, 219, 0.72)',
          8: 'rgba(254, 215, 170, 0.74)',
          1: 'rgba(221, 214, 254, 0.74)',
          13: 'rgba(254, 215, 170, 0.74)',
          78: 'rgba(134, 239, 172, 0.8)',
          91: 'rgba(253, 230, 138, 0.82)',
          69: 'rgba(129, 251, 204, 0.78)',
          9: 'rgba(252, 165, 165, 0.74)'
        })[value] || 'rgba(255, 255, 255, 0.7)';
      }
      return ({
        6: 'rgba(56, 189, 248, 0.55)',
        7: 'rgba(74, 222, 128, 0.55)',
        8: 'rgba(251, 113, 133, 0.55)',
        1: 'rgba(196, 132, 252, 0.55)',
        13: 'rgba(251, 146, 60, 0.55)',
        78: 'rgba(103, 232, 249, 0.6)',
        91: 'rgba(253, 224, 71, 0.6)',
        69: 'rgba(52, 211, 153, 0.6)',
        9: 'rgba(248, 113, 113, 0.55)'
      })[value] || 'rgba(255, 255, 255, 0.5)';
    }

    function spawnLocalGlow(list) {
      const seen = new Set();
      list.forEach((tile) => {
        if (!tile) return;
        const key = `${tile.row}-${tile.col}`;
        if (seen.has(key)) return;
        seen.add(key);

        const rc = tileRect(tile.row, tile.col);
        if (!rc) return;

        const glow = document.createElement('span');
        const size = Math.max(26, rc.width * 0.62) * (tile.isUpgrade ? 1.35 : 1);
        glow.className = 'spawn-glow';
        glow.style.left = `${rc.left + rc.width / 2}px`;
        glow.style.top = `${rc.top + rc.height / 2}px`;
        glow.style.setProperty('--glow-size', `${size}px`);
        glow.style.setProperty('--glow-color', valueToGlowColor(tile.value, tile.tier || 0, !!tile.isUpgrade));
        flashLayer.appendChild(glow);
        glow.addEventListener('animationend', () => glow.remove(), { once: true });
      });
    }

    function spawnUpgradeConvergeBurst(row, col, value, tier) {
      const rc = tileRect(row, col);
      if (!rc) return;

      const cx = rc.left + rc.width / 2;
      const cy = rc.top + rc.height / 2;
      const color = valueToGlowColor(value, tier, true);

      const flash = document.createElement('span');
      flash.className = 'upgrade-converge-flash';
      flash.style.left = `${cx}px`;
      flash.style.top = `${cy}px`;
      flash.style.setProperty('--upgrade-color', color);
      flashLayer.appendChild(flash);
      flash.addEventListener('animationend', () => flash.remove(), { once: true });

      for (let i = 0; i < UPGRADE_PARTICLE_COUNT; i++) {
        const p = document.createElement('span');
        const angle = Math.random() * Math.PI * 2;
        const dist = (rc.width * 0.35) + Math.random() * (rc.width * 0.3);
        const sx = `${(Math.cos(angle) * dist).toFixed(2)}px`;
        const sy = `${(Math.sin(angle) * dist).toFixed(2)}px`;
        const size = `${(3 + Math.random() * 4).toFixed(2)}px`;
        const dur = `${(430 + Math.random() * 260).toFixed(0)}ms`;

        p.className = 'upgrade-converge-spark';
        p.style.left = `${cx}px`;
        p.style.top = `${cy}px`;
        p.style.setProperty('--sx', sx);
        p.style.setProperty('--sy', sy);
        p.style.setProperty('--spark-size', size);
        p.style.setProperty('--spark-color', color);
        p.style.animationDuration = dur;
        flashLayer.appendChild(p);
        p.addEventListener('animationend', () => p.remove(), { once: true });
      }
    }

    async function animateUpgradePreMerge(mergeEvents) {
      if (!mergeEvents.length) return;
      const targets = [];
      const seenTiles = new Set();
      const points = new Map();
      const scaleByTileId = new Map();
      for (const ev of mergeEvents) {
        const pointKey = `${ev.to.row}-${ev.to.col}`;
        if (!points.has(pointKey)) {
          points.set(pointKey, { row: ev.to.row, col: ev.to.col, value: ev.value, tier: ev.tier });
        }
        const targetScale = (ev.tier >= 2) ? 1.35 : 1.25; // 二阶→三阶更明显放大
        for (const id of ev.ids) {
          const tile = tiles.get(id);
          if (tile && !seenTiles.has(id)) {
            seenTiles.add(id);
            targets.push(tile);
          }
          scaleByTileId.set(id, targetScale);
        }
      }
      await runTween(UPGRADE_PRE_MERGE_DURATION, (raw) => {
        const grow = Math.min(1, raw / 0.45);
        for (const tile of targets) {
          const maxScale = scaleByTileId.get(tile.id) || 1.25;
          const amp = maxScale - 1;
          const base = 1 + amp * easeOutCubic(grow);
          const breath = Math.sin(raw * Math.PI * 5) * 0.06 * Math.max(0, (1 - raw));
          tile.scale = base + breath;
          tile.opacity = 1;
          renderTile(tile);
        }
      });
      for (const p of points.values()) {
        spawnUpgradeConvergeBurst(p.row, p.col, p.value, p.tier);
      }
      for (const tile of targets) {
        tile.scale = 1;
        renderTile(tile);
      }
    }

    async function animateUpgradeValueUnlock(tile) {
      const num = tile.el._tileNumber;
      if (!num) return;

      const finalValue = String(tile.value);
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      await runTween(UPGRADE_REVEAL_DURATION, (raw) => {
        const p = Math.min(1, raw);
        const fixed = Math.floor(p * finalValue.length);

        if (fixed >= finalValue.length) {
          num.textContent = finalValue;
          num.style.opacity = '1';
          num.style.filter = 'none';
          return;
        }

        const remain = finalValue.length - fixed;
        let tail = '';
        for (let i = 0; i < remain; i++) {
          tail += chars[Math.floor(Math.random() * chars.length)];
        }

        num.textContent = finalValue.slice(0, fixed) + tail;
        num.style.opacity = (0.55 + 0.45 * p).toFixed(2);
        num.style.filter = `blur(${(1 - p) * 2}px)`;
      });

      num.textContent = finalValue;
      num.style.opacity = '1';
      num.style.filter = 'none';
    }

    async function animateUpgradeElasticLanding(tile) {
      const curve = [1.18, 1.08, 1.14, 1.03, 1.01, 1];
      const seg = curve.length - 1;

      await runTween(UPGRADE_LANDING_DURATION, (raw) => {
        const x = raw * seg;
        const i = Math.min(seg - 1, Math.floor(x));
        const k = x - i;
        tile.scale = curve[i] + (curve[i + 1] - curve[i]) * k;
        renderTile(tile);
      });

      tile.scale = 1;
      renderTile(tile);
    }

    async function animateSpawn(list) {
      const arr = list.filter(Boolean);
      if (!arr.length) return;

      spawnLocalGlow(arr);
      arr.forEach((tile) => {
        const rect = tileRect(tile.row, tile.col);
        tile.width = rect?.width ?? tile.width ?? 0;
        tile.height = rect?.height ?? tile.height ?? 0;
        tile.fontSize = rect
          ? Math.max(16, Math.floor(rect.width * 0.45) + (tile.tier === 2 ? 2 : 0))
          : (tile.fontSize ?? 18);
        setSpawnState(tile);

        if (tile.isUpgrade) {
          const num = tile.el._tileNumber;
          if (num) {
            num.textContent = ''.padStart(Math.max(1, String(tile.value).length), '✦');
            num.style.opacity = '0.82';
            num.style.filter = 'blur(1px)';
          }
        }
      });

      await runTween(SPAWN_DURATION, (raw) => {
        const k = easeOutCubic(raw);
        const scale = 0.2 + 0.8 * k;
        for (const tile of arr) {
          tile.opacity = Math.min(1, k);
          tile.scale = scale;
          renderTile(tile);
        }
      });

      await runTween(170, (raw) => {
        const boost = Math.sin(Math.PI * raw) * 0.14;
        for (const tile of arr) {
          tile.scale = tile.isUpgrade ? 1 + boost : 1;
          tile.opacity = 1;
          renderTile(tile);
        }
      });

      for (const tile of arr) {
        tile.scale = 1;
        tile.opacity = 1;
        tile.trailAlpha = 0;
        tile.trailScale = 0;
        tile.trailRotate = 0;
        renderTile(tile);
      }

      const upgrades = arr.filter((tile) => tile.isUpgrade);
      if (upgrades.length) {
        await Promise.all(upgrades.map((tile) => animateUpgradeValueUnlock(tile)));
        await Promise.all(upgrades.map((tile) => animateUpgradeElasticLanding(tile)));
      }

      for (const tile of arr) {
        tile.isUpgrade = false;
        const num = tile.el._tileNumber;
        if (num) {
          num.style.opacity = '1';
          num.style.filter = 'none';
        }
        renderTile(tile);
      }
    }

    function spawnImpactFlash(points) {
      const seen = new Set();
      points.forEach((p) => {
        if (!p) return;
        const key = `${p.row}-${p.col}`;
        if (seen.has(key)) return;
        seen.add(key);

        const rc = tileRect(p.row, p.col);
        if (!rc) return;

        const flash = document.createElement('span');
        flash.className = 'impact-flash';
        flash.style.left = `${rc.left + rc.width / 2}px`;
        flash.style.top = `${rc.top + rc.height / 2}px`;
        flashLayer.appendChild(flash);
        flash.addEventListener('animationend', () => flash.remove(), { once: true });
      });
    }

    function clearBoardIds(ids) {
      const set = new Set(ids);
      for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
          if (set.has(board[r][c])) board[r][c] = 0;
        }
      }
    }

    function showMessage(text, type) {
      msgEl.textContent = text;
      msgEl.className = `message ${type}`;
    }

    function clearMessage() {
      msgEl.textContent = '';
      msgEl.className = 'message';
    }

    // 独立排行榜接口：未来接入在线服务时可保持 saveRecord/getRecords/render 调用不变。
    const Leaderboard = (() => {
      const STORAGE_KEY = LEADERBOARD_STORAGE_KEY;
      const validCategories = new Set(['stage1', 'stage2', 'stage3', 'final']);
      let selectedCategory = 'stage1';
      let selectedMetric = 'moves';

      function escapeHtml(value) {
        const node = document.createElement('span');
        node.textContent = String(value ?? '');
        return node.innerHTML;
      }

      function compare(metric) {
        return (a, b) => {
          const primary = Number(a[metric]) - Number(b[metric]);
          return primary || Number(a.completedAt) - Number(b.completedAt);
        };
      }

      function readAll() {
        try {
          const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
          if (!Array.isArray(raw)) return [];
          const compacted = compactStoredRecords(raw);
          if (compacted.length < raw.length) {
            try { localStorage.setItem(STORAGE_KEY, JSON.stringify(compacted)); } catch (_) {}
          }
          return compacted;
        } catch (_) {
          return [];
        }
      }

      function normalizeTitles(record) {
        if (Array.isArray(record.titles)) return record.titles.map((t) => String(t).slice(0, 24)).filter(Boolean);
        if (record.title) return [String(record.title).slice(0, 24)];
        return [];
      }

      function normalize(record) {
        if (!record || !validCategories.has(record.category)) return null;
        const time = Math.max(0, Math.floor(Number(record.time)));
        const movesValue = Math.max(0, Math.floor(Number(record.moves)));
        if (!Number.isFinite(time) || !Number.isFinite(movesValue)) return null;
        const isLocalPlayer = record.playerKey === 'localPlayer'
          || !record.playerName
          || record.playerName === I18N.zh.localPlayer
          || record.playerName === I18N.en.localPlayer;
        return {
          id: typeof record.id === 'string' ? record.id : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          category: record.category,
          ruleVersion: typeof record.ruleVersion === 'string' ? record.ruleVersion : LEADERBOARD_RULE_VERSION,
          playerName: String(isLocalPlayer ? t('localPlayer') : record.playerName).slice(0, 24),
          ...(isLocalPlayer ? { playerKey: 'localPlayer' } : {}),
          titles: normalizeTitles(record),
          time,
          moves: movesValue,
          completedAt: Math.max(0, Number(record.completedAt) || Date.now())
        };
      }

      function compactStoredRecords(records) {
        const limited = [];
        for (const category of validCategories) {
          const categoryRecords = records
            .map(normalize)
            .filter((item) => item && item.category === category && item.ruleVersion === LEADERBOARD_RULE_VERSION);
          const keep = new Map();
          for (const metric of ['moves', 'time']) {
            categoryRecords
              .slice()
              .sort(compare(metric))
              .slice(0, LEADERBOARD_STORAGE_LIMIT)
              .forEach((item) => keep.set(item.id, item));
          }
          limited.push(...keep.values());
        }
        return limited;
      }

      function saveRecord(record) {
        const normalized = normalize({ ...record, ruleVersion: LEADERBOARD_RULE_VERSION });
        if (!normalized) return false;
        const all = readAll().filter((item) => item && item.id !== normalized.id);
        all.push(normalized);
        const limited = compactStoredRecords(all);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(limited));
          render();
          return true;
        } catch (error) {
          console.warn('保存排行榜成绩失败', error);
          return false;
        }
      }

      function getRecords(category = selectedCategory, metric = selectedMetric, source = 'local') {
        if (!validCategories.has(category)) return [];
        const records = source === 'official'
          ? (OFFICIAL_LEADERBOARD_RECORDS[category] || []).map((item) => ({
            ...item,
            playerName: item.playerKey ? t(`leaderboardPlayers.${item.playerKey}`) : item.playerName,
            titles: Array.isArray(item.titleKeys)
              ? item.titleKeys.map((key) => t(`leaderboardTitles.${key}`))
              : item.titles,
            category,
            ruleVersion: LEADERBOARD_RULE_VERSION
          }))
          : readAll().map(normalize).filter((item) => item && item.category === category && item.ruleVersion === LEADERBOARD_RULE_VERSION);
        return records.sort(compare(metric)).slice(0, LEADERBOARD_LIMIT);
      }

      function renderList(records, metric, emptyText) {
        if (!records.length) return `<div class="leaderboard-list"><div class="leaderboard-empty">${emptyText}</div></div>`;
        return `<div class="leaderboard-list">${records.map((record, index) => {
          const titles = normalizeTitles(record);
          const titlesHtml = titles.length ? `<span class="leaderboard-titles">${titles.map((t) => `<span class="leaderboard-title-badge">${escapeHtml(t)}</span>`).join('')}</span>` : '';
          return `<div class="leaderboard-row"><span class="leaderboard-rank">${index + 1}</span><span class="leaderboard-player"><span class="leaderboard-player-name">${escapeHtml(record.playerName)}</span>${titlesHtml}</span><strong class="leaderboard-value">${metric === 'time' ? formatTime(record.time) : `${record.moves} ${t('stepsUnit')}`}</strong></div>`;
        }).join('')}</div>`;
      }

      function render() {
        if (!leaderboardContent) return;
        document.querySelectorAll('[data-leaderboard-stage]').forEach((button) => button.classList.toggle('active', button.dataset.leaderboardStage === selectedCategory));
        document.querySelectorAll('[data-leaderboard-metric]').forEach((button) => button.classList.toggle('active', button.dataset.leaderboardMetric === selectedMetric));
        const note = selectedCategory !== 'final' ? `<div class="leaderboard-note">${t('stageNote')}</div>` : '';
        leaderboardContent.innerHTML = `${note}<h3 class="leaderboard-heading">${t('officialRecords')}</h3>${renderList(getRecords(selectedCategory, selectedMetric, 'official'), selectedMetric, t('noOfficialRecords'))}<h3 class="leaderboard-heading">${t('localRecords')}</h3>${renderList(getRecords(selectedCategory, selectedMetric, 'local'), selectedMetric, t('noLocalRecords'))}`;
      }

      function open() {
        render();
        ModalManager.show(leaderboardModal, leaderboardBtn);
      }

      function close() {
        ModalManager.hide(leaderboardModal);
      }

      return { saveRecord, getRecords, render, open, close, select: (category, metric) => {
        if (validCategories.has(category)) selectedCategory = category;
        if (metric === 'time' || metric === 'moves') selectedMetric = metric;
        render();
      }};
    })();

    function currentElapsedSeconds() {
      if (settlementFrozenElapsed !== null) return Math.max(0, Number(settlementFrozenElapsed) || 0);
      if (finalElapsedSeconds !== null) return Math.max(0, Number(finalElapsedSeconds) || 0);

      const base = Math.max(0, Number(elapsedBeforePause) || 0);
      const startAt = Number(gameStartAt);
      if (gamePaused || !Number.isFinite(startAt) || startAt <= 0) return base;

      return base + Math.max(0, Math.floor((Date.now() - startAt) / 1000));
    }

    function scoreEfficiency(actual, target, maximum) {
      const value = Number(actual);
      if (!Number.isFinite(value)) return 0;
      if (value <= target) return 100;
      if (value >= maximum) return 0;
      return Math.round(((maximum - value) / (maximum - target)) * 100);
    }

    function calculateStageScore(stageNumber, stats) {
      const key = `stage${stageNumber}`;
      const ref = SCORE_REFERENCES[key];
      if (!ref || !stats) return 0;
      const movesScore = scoreEfficiency(stats.moves, ref.targetMoves, ref.maxMoves);
      const timeScore = scoreEfficiency(stats.time, ref.targetTime, ref.maxTime);
      return Math.round(movesScore * 0.7 + timeScore * 0.3);
    }

    function getEvaluation(score, stageScores = []) {
      const total = Number(score) || 0;
      if (total >= 90 && stageScores.every((value) => value >= 80)) {
        return { key: 'settlementEvaluationExcellent', note: 'settlementEvaluationExcellentNote' };
      }
      if (total >= 75) return { key: 'settlementEvaluationHigh', note: 'settlementEvaluationHighNote' };
      if (total >= 60) return { key: 'settlementEvaluationStable', note: 'settlementEvaluationStableNote' };
      return { key: 'settlementEvaluationComplete', note: 'settlementEvaluationCompleteNote' };
    }

    function getStageEvaluation(score) {
      if (score >= 90) return 'settlementStageExcellent';
      if (score >= 75) return 'settlementStageHigh';
      if (score >= 60) return 'settlementStageStable';
      return 'settlementStageComplete';
    }

    function getCompletedStageStats() {
      const raw = StageStatistics?.exportData?.() || {};
      return [1, 2, 3].map((number) => {
        const key = `stage${number}`;
        const value = raw[key] || {};
        return {
          number,
          key,
          time: Math.max(0, Math.floor(Number(value.time) || 0)),
          moves: Math.max(0, Math.floor(Number(value.moves) || 0)),
          score: calculateStageScore(number, value)
        };
      });
    }

    function getTotalScore(stageStats) {
      const completed = stageStats.filter((item) => item.time > 0 || item.moves > 0);
      if (!completed.length) return 0;
      return Math.round(completed.reduce((sum, item) => sum + item.score, 0) / completed.length);
    }

    function formatSettlementTime(seconds) {
      const value = Math.max(0, Math.floor(Number(seconds) || 0));
      return formatTime(value);
    }

    function updateSettlementLanguage() {
      if (!settlementActive || !settlementSnapshot) return;
      renderSettlement(settlementSnapshot);
    }

    function renderSettlement(snapshot) {
      if (!settlementModal || !snapshot) return;
      const { kind, level, stats, stageScore, totalScore } = snapshot;
      const final = kind === 'final';
      const easterFinal = kind === 'easter-final';
      const finalLike = final || easterFinal;
      if (easterFinal) {
        const route = EASTER_EGG_ROUTES[snapshot.routeId];
        settlementModal.classList.remove('final-settlement');
        settlementModal.classList.add('easter-settlement');
        if (settlementKicker) settlementKicker.textContent = t('easterSettlementKicker');
        if (settlementTitle) settlementTitle.textContent = t('easterSettlementTitle').replace('{value}', String(route?.value || ''));
        if (settlementSubtitle) settlementSubtitle.textContent = t('easterSettlementSubtitle');
        if (settlementScoreLabel) settlementScoreLabel.textContent = t('easterSettlementStatusLabel');
        if (settlementScore) settlementScore.textContent = '✓';
        if (settlementScoreSuffix) settlementScoreSuffix.hidden = true;
        if (settlementEvaluation) settlementEvaluation.textContent = t('easterSettlementComplete');
        if (settlementEvaluationNote) settlementEvaluationNote.textContent = t('easterSettlementNoLeaderboard');
        if (settlementFormula) settlementFormula.textContent = t('easterSettlementRecorded');
        if (settlementTimeLabel) settlementTimeLabel.textContent = t('settlementTotalTime');
        if (settlementMovesLabel) settlementMovesLabel.textContent = t('settlementTotalMoves');
        if (settlementTime) settlementTime.textContent = formatSettlementTime(snapshot.totalTime);
        if (settlementMoves) settlementMoves.textContent = String(snapshot.totalMoves);
        if (settlementUnlock) settlementUnlock.hidden = true;
        if (settlementStageList) settlementStageList.hidden = true;
        if (settlementContinueBtn) settlementContinueBtn.hidden = true;
        if (settlementNewGameBtn) settlementNewGameBtn.hidden = false;
        if (settlementLeaderboardBtn) settlementLeaderboardBtn.hidden = true;
        return;
      }
      settlementModal.classList.remove('easter-settlement');
      const score = final ? totalScore : stageScore;
      const evaluation = final
        ? getEvaluation(totalScore, stats.map((item) => item.score))
        : { key: getStageEvaluation(stageScore), note: 'settlementStageEvaluationNote' };
      const titleKey = final ? 'settlementFinalTitle' : `settlementStage${level}Title`;
      const subtitleKey = final ? 'settlementFinalSubtitle' : `settlementStage${level}Subtitle`;

      settlementModal.classList.toggle('final-settlement', final);
      if (settlementKicker) settlementKicker.textContent = t(final ? 'settlementFinalKicker' : 'settlementStageKicker');
      if (settlementTitle) settlementTitle.textContent = t(titleKey);
      if (settlementSubtitle) settlementSubtitle.textContent = t(subtitleKey);
      if (settlementScoreLabel) settlementScoreLabel.textContent = t(final ? 'settlementTotalScore' : 'settlementScore');
      if (settlementScore) settlementScore.textContent = String(score);
      if (settlementScoreSuffix) settlementScoreSuffix.hidden = false;
      if (settlementEvaluation) settlementEvaluation.textContent = t(evaluation.key);
      if (settlementEvaluationNote) settlementEvaluationNote.textContent = t(evaluation.note);
      if (settlementFormula) settlementFormula.textContent = t('settlementScoreFormula');

      if (final) {
        if (settlementTimeLabel) settlementTimeLabel.textContent = t('settlementTotalTime');
        if (settlementMovesLabel) settlementMovesLabel.textContent = t('settlementTotalMoves');
        if (settlementTime) settlementTime.textContent = formatSettlementTime(snapshot.totalTime);
        if (settlementMoves) settlementMoves.textContent = String(snapshot.totalMoves);
      } else {
        const current = stats[level - 1];
        if (settlementTimeLabel) settlementTimeLabel.textContent = t('settlementTime');
        if (settlementMovesLabel) settlementMovesLabel.textContent = t('settlementMoves');
        if (settlementTime) settlementTime.textContent = formatSettlementTime(current?.time);
        if (settlementMoves) settlementMoves.textContent = String(current?.moves ?? 0);
      }

      if (settlementUnlock) {
        const unlockKey = level === 1 ? 'settlementUnlock1' : level === 2 ? 'settlementUnlock2' : '';
        settlementUnlock.hidden = final || !unlockKey;
        settlementUnlock.textContent = unlockKey ? t(unlockKey) : '';
      }

      if (settlementStageList) settlementStageList.hidden = !final;
      if (settlementStageRows && final) {
        settlementStageRows.innerHTML = stats.map((item) => `
          <div class="settlement-stage-row">
            <span class="settlement-stage-name">${t(`stage${item.number}`)}</span>
            <span class="settlement-stage-score">${item.score}</span>
            <span>${formatSettlementTime(item.time)}</span>
            <span>${item.moves}</span>
          </div>
        `).join('');
      }

      if (settlementContinueBtn) settlementContinueBtn.hidden = finalLike;
      if (settlementNewGameBtn) settlementNewGameBtn.hidden = !finalLike;
      if (settlementLeaderboardBtn) settlementLeaderboardBtn.hidden = !final;
    }

    function openSettlement(snapshot) {
      if (!settlementModal) return Promise.resolve('continue');
      settlementSnapshot = snapshot;
      settlementActive = true;
      settlementKind = snapshot.kind;
      if (settlementKind === 'stage') {
        elapsedBeforePause = currentElapsedSeconds();
        settlementFrozenElapsed = elapsedBeforePause;
        stopTimer();
        syncTimerDisplay();
      }
      renderSettlement(snapshot);
      ModalManager.show(settlementModal, gridStatusEl, {
        focus: settlementKind === 'final' || settlementKind === 'easter-final' ? settlementNewGameBtn : settlementContinueBtn
      });
      return new Promise((resolve) => { settlementResolver = resolve; });
    }

    function closeSettlement(action = 'continue') {
      if (!settlementActive) return;
      settlementActive = false;
      ModalManager.hide(settlementModal);
      const resolve = settlementResolver;
      settlementResolver = null;
      if (settlementKind === 'stage' && !gameWon) {
        settlementFrozenElapsed = null;
        startTimer(false);
      }
      if (resolve) resolve(action);
    }

    function startNextStageAfterSettlement(level) {
      if (level === 1) {
        StageStatistics.startStage(2);
      } else if (level === 2) {
        StageStatistics.startStage(3);
      }
      persistIfNeeded();
    }

    function hideSettlement() {
      settlementActive = false;
      ModalManager.hide(settlementModal, { skipFocus: true });
      settlementResolver = null;
      settlementSnapshot = null;
      settlementFrozenElapsed = null;
    }

    function bindSettlementUI() {
      settlementContinueBtn?.addEventListener('click', () => closeSettlement('continue'));
      settlementNewGameBtn?.addEventListener('click', () => closeSettlement('newGame'));
      settlementLeaderboardBtn?.addEventListener('click', () => {
        closeSettlement('leaderboard');
        Leaderboard.open();
      });
      settlementModal?.addEventListener('click', (event) => {
        if (event.target === settlementModal && settlementKind !== 'final' && settlementKind !== 'easter-final') closeSettlement('continue');
      });
    }

    async function playVictoryAura(duration = VICTORY_DURATION) {
      gameContainer.classList.add('victoryPulse');
      victoryLayer.classList.add('active');
      await waitAnimation(duration);
      gameContainer.classList.remove('victoryPulse');
      victoryLayer.classList.remove('active');
    }

    async function celebrateMilestone(level) {
      let completedStage = null;
      if (level === 1) {
        if (gameStage >= 1) return;
        gameStage = 1;
        unlockedTier = Math.max(unlockedTier, 1);
        StageStatistics.completeStage(1);
        const stage = StageStatistics.exportData().stage1;
        completedStage = { number: 1, time: stage.time, moves: stage.moves, score: calculateStageScore(1, stage) };
        Leaderboard.saveRecord({ category: 'stage1', time: stage.time, moves: stage.moves });
      } else if (level === 2) {
        if (gameStage >= 2) return;
        gameStage = 2;
        unlockedTier = Math.max(unlockedTier, 2);
        StageStatistics.completeStage(2);
        const stage = StageStatistics.exportData().stage2;
        completedStage = { number: 2, time: stage.time, moves: stage.moves, score: calculateStageScore(2, stage) };
        Leaderboard.saveRecord({ category: 'stage2', time: stage.time, moves: stage.moves });
      }

      renderStageGoals();
      persistIfNeeded();
      await playVictoryAura(VICTORY_DURATION);
      clearMessage();
      const stats = getCompletedStageStats();
      const action = await openSettlement({
        kind: 'stage',
        level,
        stats,
        stageScore: completedStage?.score || 0,
        totalScore: getTotalScore(stats)
      });
      if (action === 'continue') startNextStageAfterSettlement(level);
    }

    async function celebrateEasterEggStart(id) {
      const route = EASTER_EGG_ROUTES[id];
      if (!route || easterEggId || gameStage !== 0) return false;
      easterEggId = id;
      gameStage = 1;
      unlockedTier = Math.max(unlockedTier, 1);
      StageStatistics.completeStage(1);
      StageStatistics.startStage(2);
      renderStageGoals();
      showMessage(t('easterEggTriggered').replace('{value}', String(route.value)), 'success');
      persistIfNeeded();
      await playVictoryAura(VICTORY_DURATION);
      await showEasterEggDiscovery(id);
      return true;
    }

    async function celebrateEasterEggStage2() {
      if (!easterEggId || gameStage !== 1) return false;
      const route = EASTER_EGG_ROUTES[easterEggId];
      gameStage = 2;
      unlockedTier = Math.max(unlockedTier, 2);
      StageStatistics.completeStage(2);
      StageStatistics.startStage(3);
      renderStageGoals();
      showMessage(t('easterEggStage2Complete').replace('{value}', String(route.value)), 'success');
      persistIfNeeded();
      await playVictoryAura(VICTORY_DURATION);
      return true;
    }

    async function celebrateEasterEggFinal() {
      if (!easterEggId || gameWon) return false;
      const routeId = easterEggId;
      const route = EASTER_EGG_ROUTES[routeId];
      finalElapsedSeconds = currentElapsedSeconds();
      gameWon = true;
      StageStatistics.completeStage(3);
      stopTimer();
      completeEasterEgg(routeId, { time: finalElapsedSeconds, moves });
      persistIfNeeded();
      await playVictoryAura(VICTORY_DURATION);
      clearMessage();
      const action = await openSettlement({
        kind: 'easter-final',
        routeId,
        totalTime: finalElapsedSeconds,
        totalMoves: moves
      });
      if (action === 'newGame') {
        isAnimating = false;
        await newGame();
      }
      return !!route;
    }

    async function celebrateAscended() {
      finalElapsedSeconds = currentElapsedSeconds();
      gameWon = true;
      StageStatistics.completeStage(3);
      stopTimer();
      const stage = StageStatistics.exportData().stage3;
      Leaderboard.saveRecord({ category: 'stage3', time: stage.time, moves: stage.moves });
      Leaderboard.saveRecord({
        category: 'final',
        time: finalElapsedSeconds,
        moves
      });
      persistIfNeeded();
      await playVictoryAura(VICTORY_DURATION);
      clearMessage();
      const stats = getCompletedStageStats();
      const action = await openSettlement({
        kind: 'final',
        level: 3,
        stats,
        stageScore: calculateStageScore(3, stage),
        totalScore: getTotalScore(stats),
        totalTime: finalElapsedSeconds,
        totalMoves: moves
      });
      if (action === 'newGame') {
        isAnimating = false;
        await newGame();
      }
    }

    function hasHorizontalPattern(boardData, pattern, tier) {
      for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c <= GRID_SIZE - pattern.length; c++) {
          let ok = true;
          for (let i = 0; i < pattern.length; i++) {
            const tile = tileAtBoard(boardData, r, c + i);
            if (!tile || tile.value !== pattern[i] || tile.tier !== tier) {
              ok = false;
              break;
            }
          }
          if (ok) return true;
        }
      }
      return false;
    }

    function hasEasterEggPattern(boardData, value, tier = 0) {
      return hasHorizontalPattern(boardData, [value, value, value, value], tier);
    }

    function detectEasterEggTrigger(boardData) {
      if (gameStage !== 0 || unlockedTier !== 0 || easterEggId) return null;
      for (const id of EASTER_EGG_IDS) {
        if (hasEasterEggPattern(boardData, EASTER_EGG_ROUTES[id].value, 0)) return id;
      }
      return null;
    }

    function checkWin(boardData) {
      if (easterEggId) {
        const value = EASTER_EGG_ROUTES[easterEggId]?.value;
        if (gameStage === 1 && value !== undefined && hasEasterEggPattern(boardData, value, 1)) return 4;
        if (gameStage === 2 && value !== undefined && hasEasterEggPattern(boardData, value, 2)) return 5;
        return 0;
      }
      if (gameStage === 0 && hasHorizontalPattern(boardData, WIN_PATTERN, 0)) return 1;
      if (gameStage === 1 && hasHorizontalPattern(boardData, WIN_PATTERN, 1)) return 2;
      if (gameStage === 2 && hasHorizontalPattern(boardData, WIN_PATTERN, 2)) return 3;
      return 0;
    }

    function canMoveDirection(direction) {
      return simulateMove(direction).changed;
    }

    function checkGameOver() {
      for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
          if (board[r][c] === 0) return;
        }
      }

      const canMove =
        canMoveDirection('left') ||
        canMoveDirection('right') ||
        canMoveDirection('up') ||
        canMoveDirection('down');

      if (!canMove) {
        gameOver = true;
        showMessage(t('gameOver'), 'info');
      }
    }

