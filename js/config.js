    const GRID_SIZE = 4;
    const SWIPE_THRESHOLD = 24;
    const LONG_PRESS_SCROLL_DELAY = 240;
    const TOUCH_AXIS_THRESHOLD = 8;
    const TOUCH_AXIS_RATIO = 1.2;

    const MOVE_DURATION = 220;
    const IMPACT_DELAY = 100;
    const MERGE_DURATION = 180;
    const SPAWN_DURATION = 170;
    const VICTORY_DURATION = 2000;
    const UPGRADE_PRE_MERGE_DURATION = 260;
    const UPGRADE_REVEAL_DURATION = 260;
    const UPGRADE_LANDING_DURATION = 340;
    const UPGRADE_PARTICLE_COUNT = 14;

    const VANISH_VALUES = new Set([1, 6, 7, 8, 9]);
    const UPGRADE_VALUES = new Set([91, 78, 69]);
    const MAX_TIER = 2;
    const ALLOWED_VALUES = new Set([1, 6, 7, 8, 9, 13, 69, 78, 91]);

    const RULES = [
      { direction: "horizontal", from: [8, 7], result: { type: "merge", value: 78 } },
      { direction: "horizontal", from: [78, 13], result: { type: "merge", value: 91 } },
      { direction: "horizontal", from: [13, 78], result: { type: "merge", value: 91 } },
      { direction: "horizontal", from: [9, 6], result: { type: "merge", value: 69 } },
      { direction: "horizontal", from: [6, 9], result: { type: "merge", value: 69 } },
      { direction: "horizontal", from: [1, 91], result: { type: "merge", value: 9 } },
      { direction: "horizontal", from: [91, 1], result: { type: "merge", value: 9 } },
      { direction: "vertical", from: [7, 6], result: { type: "merge", value: 13 } },
      { direction: "vertical", from: [6, 7], result: { type: "merge", value: 1 } },
      { direction: "vertical", from: [7, 8], result: { type: "merge", value: 1 } },
      { direction: "vertical", from: [78, 13], result: { type: "merge", value: 91 } },
      { direction: "vertical", from: [13, 78], result: { type: "merge", value: 91 } },
      { direction: "vertical", from: [91, 1], result: { type: "merge", value: 9 } },
      { direction: "vertical", from: [1, 91], result: { type: "merge", value: 9 } }
    ];

    const RULE_INDEX = { horizontal: [], vertical: [] };
    for (let t = 0; t <= MAX_TIER; t++) {
      RULE_INDEX.horizontal.push(new Map());
      RULE_INDEX.vertical.push(new Map());
    }
    for (const rule of RULES) {
      RULE_INDEX[rule.direction][0].set(`${rule.from[0]},${rule.from[1]}`, rule.result);
      RULE_INDEX[rule.direction][1].set(`${rule.from[0]},${rule.from[1]}`, rule.result);
      RULE_INDEX[rule.direction][2].set(`${rule.from[0]},${rule.from[1]}`, rule.result);
    }

    const WIN_PATTERN = [91, 78, 69];
    // 隐藏成就用：985²-211²-7891 = 917813，对应横排 91、78、13。
    const RIDDLE_PATTERN = [91, 78, 13];

    // 彩蛋路线：只允许在普通第一阶段以四个同值的一阶棋子横向触发。
    const EASTER_EGG_ROUTES = Object.freeze({
      '13': Object.freeze({ id: '13', value: 13, difficulty: 'easy', difficultyLevel: 1 }),
      '78': Object.freeze({ id: '78', value: 78, difficulty: 'easy', difficultyLevel: 1 }),
      '91': Object.freeze({ id: '91', value: 91, difficulty: 'medium', difficultyLevel: 2 }),
      '69': Object.freeze({ id: '69', value: 69, difficulty: 'hard', difficultyLevel: 3 })
    });
    const EASTER_EGG_IDS = new Set(Object.keys(EASTER_EGG_ROUTES));
    const EASTER_EGG_TOTAL = EASTER_EGG_IDS.size;

    // 新手指引脚本：每步直接铺设固定棋盘，不生成随机棋子，一步一条规则。
    const TUTORIAL_STEPS = [
      { board: [[0, 0, 0, 0], [6, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], allow: 'right' },
      { board: [[0, 0, 0, 0], [8, 0, 0, 7], [0, 0, 0, 0], [0, 0, 0, 0]], allow: 'left' },
      { board: [[0, 0, 0, 0], [6, 0, 0, 7], [0, 0, 0, 0], [0, 0, 0, 0]], allow: 'left' },
      { board: [[0, 7, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 6, 0, 0]], allow: 'up' },
      { board: [[0, 0, 6, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 7, 0]], allow: 'up' },
      { board: [[0, 0, 0, 0], [78, 0, 0, 13], [0, 0, 0, 0], [0, 0, 0, 0]], allow: 'left' },
      { board: [[0, 0, 0, 0], [91, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0]], allow: 'left' },
      { board: [[0, 0, 0, 0], [9, 0, 0, 6], [0, 0, 0, 0], [0, 0, 0, 0]], allow: 'left' },
      { board: [[0, 0, 0, 0], [13, 78, 78, 69], [0, 0, 0, 0], [0, 0, 0, 0]], allow: 'left', celebrate: true },
      { info: true }
    ];

    function tutorialStepText(index, field) {
      return t(`tutorialSteps.${index}.${field}`);
    }

    function tutorialGestureLabel(direction) {
      return t(`tutorialGestures.${direction}.text`);
    }

    const TUTORIAL_GESTURE_ARROWS = {
      left: { arrow: '←', dx: '-6px', dy: '0px' },
      right: { arrow: '→', dx: '6px', dy: '0px' },
      up: { arrow: '↑', dx: '0px', dy: '-6px' },
      down: { arrow: '↓', dx: '0px', dy: '6px' }
    };

    // 公告只在此处维护；阅读状态独立存放，不包含在游戏存档中。
    const ANNOUNCEMENTS = [
      { id: 'announcement-github-repo', type: 'notice', pinned: true },
      { id: 'announcement-community-group', type: 'notice', pinned: true },
      { id: 'announcement-1.1.0', version: '1.1.0', date: '2026-08-11', type: 'update' },
      { id: 'announcement-0.6.5', version: '0.6.5', date: '2026-07-12', type: 'update' },
      { id: 'announcement-0.6.0', version: '0.6.0', date: '2026-07-12', type: 'update' },
      { id: 'announcement-0.5.0-changelog', version: '0.5.0', date: '2026-07-12', type: 'update' }
    ];
    const ANNOUNCEMENT_READ_KEY = '917869-announcement-read';

    function announcementText(id, field) {
      const entry = I18N[currentLanguage]?.announcements?.[id];
      const value = entry ? entry[field] : undefined;
      if (value !== undefined) return value;
      const fallback = I18N.zh?.announcements?.[id];
      return fallback ? fallback[field] : '';
    }

    // 官方榜单只在此处维护；本地成绩由 Leaderboard 独立保存，不进入游戏存档。
    const LEADERBOARD_RULE_VERSION = '0.5.0';
    const LEADERBOARD_LIMIT = 10;
    const LEADERBOARD_STORAGE_LIMIT = 20;
    const LEADERBOARD_STORAGE_KEY = '917869-leaderboard-records';
    const OFFICIAL_LEADERBOARD_RECORDS = {
      stage1: [
        { playerKey: 'developer', titleKeys: ['ruleMaker', 'speedrunKing'], time: 63, moves: 40, completedAt: 1782628500000 },
        { playerKey: 'testerAlpha', titleKeys: ['ruleObserver'], time: 89, moves: 69, completedAt: 1783863750000 },
        { playerKey: 'xuanYuChen', titleKeys: ['numberMaster91'], time: 91, moves: 60, completedAt: 1783864697000 }
      ],
      stage2: [
        { playerKey: 'developer', titleKeys: ['ruleMaker'], time: 146, moves: 69, completedAt: 1783863300000 },
        { playerKey: 'testerBeta', titleKeys: ['advancedPlayer'], time: 178, moves: 78, completedAt: 1783863750000 }
      ],
      stage3: [
        { playerKey: 'developer', titleKeys: ['ruleMaker'], time: 364, moves: 182, completedAt: 1783863300000 },
        { playerKey: 'testerGamma', titleKeys: ['advancedWalker'], time: 400, moves: 191, completedAt: 1783863750000  }
      ],
      final: [
        { playerKey: 'developer', titleKeys: ['ruleMaker'], time: 472, moves: 239, completedAt: 1783690200000 },
        { playerKey: 'testerGamma', titleKeys: ['endgamePlayer'], time: 667, moves: 338, completedAt: 1783863750000 }
      ]
    };

    const ACHIEVEMENTS = [
      { id: 'first_move', title: '第一声回响', description: '完成第一次有效移动', icon: '👣' },
      { id: 'merge_13', title: '13 的诞生', description: '首次通过 7 + 6 合成 13', icon: '✨' },
      { id: 'merge_78', title: '78 初现', description: '首次合成 78', icon: '💠' },
      { id: 'merge_69', title: '69 之门', description: '首次合成 69', icon: '🌀' },
      { id: 'merge_91', title: '91 合成', description: '首次合成 91', icon: '🌟' },
      { id: 'split_91_to_9', title: '91分解', description: '首次把 91 和 1 合成出 9', icon: '⚡' },
      { id: 'vanish_9', title: '我的9呢？！', description: '首次让 9 未发生合成而是消失', icon: '❔' },
      { id: 'row_trio_t0', title: '三数成列', description: '首次在同一横排完成 91、78、69', icon: '🏅' },
      { id: 'merge_91_t1', title: '91Ⅱ', description: '首次获得 91Ⅱ', icon: '✦' },
      { id: 'merge_78_t1', title: '78Ⅱ', description: '首次获得 78Ⅱ', icon: '✦' },
      { id: 'merge_69_t1', title: '69Ⅱ', description: '首次获得 69Ⅱ', icon: '✦' },
      { id: 'row_trio_t1', title: '二阶三连', description: '在同一横排完成 91Ⅱ、78Ⅱ、69Ⅱ', icon: '🏆' },
      { id: 'merge_91_t2', title: '91Ⅲ', description: '首次获得 91Ⅲ', icon: '✧' },
      { id: 'merge_78_t2', title: '78Ⅲ', description: '首次获得 78Ⅲ', icon: '✧' },
      { id: 'merge_69_t2', title: '69Ⅲ', description: '首次获得 69Ⅲ', icon: '✧' },
      { id: 'row_trio_t2', title: '数字的终极意义', description: '在同一横排完成 91Ⅲ、78Ⅲ、69Ⅲ', icon: '👑' },
      { id: 'escape_full_board', title: '绝处逢生', description: '棋盘无空格时完成有效移动，并在本次移动后清理出至少 3 个空格', icon: '🌱' },
      { id: 'multi_merge_move', title: '一气呵成', description: '单次移动中完成 2 次或以上合成', icon: '💥' },
      { id: 'merge_and_vanish', title: '双重回响', description: '单次有效移动中同时发生合成和消失', icon: '🔀' },
      { id: 'merge_streak_3', title: '连续反应', description: '连续 3 次有效移动都至少发生一次合成', icon: '🔗' },
      { id: 'triple_vanish_move', title: '真干净', description: '单次移动中发生 3 次或以上消失事件', icon: '🧹' },
      { id: 'invalid_5', title: '不动如山', description: '连续 5 次输入无效方向，棋盘状态没有改变', icon: '🗿', hidden: true },
      { id: 'cube_sequence', title: '魔方', description: '连续依次完成上、左、下、右四次有效移动', icon: '🧊', hidden: true },
      { id: 'vanish_100', title: '棋盘清理大师', description: '累计发生 100 次消失', icon: '🌪️', hidden: true },
      { id: 'two_fates', title: '两种命运', description: '同一局中让一个 9 合成、另一个 9 消失', icon: '⚖️', hidden: true },
      { id: 'row_917813', title: '数学题', description: '985x985-211x211-7891=??????', icon: '🧮', hidden: true }
    ];

