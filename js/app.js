    const I18N = {
      zh: {
        lang: 'zh-CN',
        // 基础界面
        pageTitle: '917869-进阶版',
        title: '🎮 数字合成游戏',
        moves: '总步数',
        time: '总用时',
        newGame: '新游戏',
        pause: '暂停',
        continue: '继续',
        settings: '设置',
        close: '关闭',
        ariaGrid: '4 × 4 数字合成棋盘',
        ariaGridCell: '第 {row} 行第 {col} 列：{value}',
        ariaGridEmpty: '空',
        ariaGridTier1: '二星',
        ariaGridTier2: '三星',
        gridStatus: '棋盘已更新。{count} 个棋子。{tiles}',

        // 设置面板
        settingsTitle: '设置',
        language: '语言',
        languageDesc: '选择显示语言。',
        qualityMode: '画质模式',
        qualityModeDesc: '手动选择背景光效与动画等级。棋子移动、合成和胜利反馈在各档位都会保留。',
        qualityPerformance: '性能模式',
        qualityBalanced: '平衡模式',
        qualityHigh: '高画质',
        ariaQualityMode: '画质模式',
        performanceMode: '性能模式',
        performanceModeDesc: '关闭背景光效、粒子和高级动画，提升低配置设备流畅度。',
        autoSave: '自动保存',
        autoSaveDesc: '仅同一设备、同一浏览器有效。会在每次有效操作后自动写入本地存档。',
        archiveCode: '归档码',
        archiveCodeDesc: '导出后会自动复制；也可以把归档码粘贴回这里再导入。',
        exportWithQuality: '导出时包含画质设置',
        resetGame: '重置游戏',
        resetGameDesc: '清除本机全部游戏数据：存档、成就、本地排行榜、公告已读状态与所有设置。操作不可撤销，建议先导出归档码备份。',
        exportSave: '导出存档',
        importSave: '导入存档',
        settingsHint: '导入会覆盖当前棋盘与进度；自动保存关闭时，刷新页面将不会自动恢复新进度。',

        // 状态消息
        autoSaveEnabled: '自动保存已开启',
        autoSaveDisabled: '自动保存已关闭',
        localPlayer: '\u672c\u5730\u73a9\u5bb6',
        emptyCell: '\u7a7a',
        ariaStageStats: '\u9636\u6bb5\u7edf\u8ba1',
        ariaPause: '\u6682\u505c\u63d0\u793a',
        ariaLeaderboardStage: '\u6392\u884c\u699c\u9636\u6bb5',
        ariaLeaderboardMetric: '\u6392\u884c\u699c\u6307\u6807',
        perfModeEnabled: '性能模式已开启',
        perfModeDisabled: '性能模式已关闭',
        qualityModeChanged: '画质模式已切换为：{mode}',
        exportSuccess: '归档码已导出并复制到剪贴板',
        exportFailed: '导出失败，请检查浏览器权限',
        importSuccess: '导入成功',
        importFailed: '导入失败',
        pasteArchiveFirst: '请先粘贴归档码',
        archiveFormatError: '存档格式不正确',
        archiveContentInvalid: '存档内容无效',
        unsupportedVersion: '不支持的存档版本',
        loadSaveSuccess: '已恢复本地存档',

        // 暂停面板
        pauseTitle: '⏸ 游戏已暂停',
        pauseCurrentMoves: '当前步数',
        pauseUsedTime: '已用时间',
        pauseTip1: '别偷看啦，棋盘会害羞的。\n给它一点神秘感，胜利会更有仪式感。',
        pauseTip2: '暂停不是投降，是给大脑偷偷充电。\n但偷看会把灵感吓跑哦。',
        pauseTip3: '玩累了？先休息一下。\n等你回来，数字还会乖乖在原地等你。',
        pauseTip4: '你现在看到的每一格，都是"未知"。\n别急，让它们继续保持神秘。',
        pauseNote: '暂停中棋盘已上锁，先休息一下再继续吧。',
        resumeGame: '继续游戏',

        // 游戏规则
        rulesTitle: '📜 游戏规则',
        rulesGenerate: '随机生成 6, 7, 8',
        rulesHorizontal: '7→8=78, 13↔78=91, 6↔9=69, 91↔1=9',
        rulesVertical: '7→6=1, 6→7=13, 8→7=1, 13↔78=91, 91↔1=9',
        rulesVanish: '1,6,7,8,9 间未定义组合碰撞消失',
        rulesStage: '第一阶段=普通 91/78/69，通关第一阶段后可合成二阶 91/78/69，第二阶段达成后继续完成第三阶段取得胜利。',
        rulesGenerateLabel: '生成:',
        rulesHorizontalLabel: '横向合成:',
        rulesVerticalLabel: '竖向合成:',
        rulesVanishLabel: '消失:',
        rulesStageLabel: '阶段:',

        // 无障碍标签
        ariaOpenSettings: '打开设置',
        ariaViewAnnouncements: '查看公告',
        ariaViewAchievements: '查看成就',
        ariaViewLeaderboard: '查看排行榜',
        ariaViewEasterEggs: '查看彩蛋结局',
        archiveCodePlaceholder: '917869:v1:...',

        // 阶段统计
        currentGameStats: '当前游戏统计',
        stage1: '⭐ 第一阶段',
        stage2: '⭐⭐ 第二阶段',
        stage3: '⭐⭐⭐ 第三阶段',
        stageGoalNormal: '目标：普通 91、78、69',
        stageGoalTier2: '目标：一排二星 91、78、69',
        stageGoalTier3: '目标：一排三星 91、78、69',
        stageGoalEasterStage2: '目标：一排二星 {value}',
        stageGoalEasterFinal: '目标：一排三星 {value}',
        settlementStage1Title: '第一阶段完成',
        settlementStage2Title: '第二阶段完成',
        settlementStage3Title: '第三阶段完成',
        settlementFinalTitle: '全部维度完成',
        statusPending: '○ 未开始',
        statusActive: '⏳ 进行中',
        statusDone: '✔ 已完成',

        // 结算与评分
        settlementStageKicker: '阶段结算',
        settlementFinalKicker: '最终结算',
        settlementScore: '阶段评分',
        settlementTotalScore: '总成绩',
        settlementTime: '本阶段用时',
        settlementMoves: '本阶段步数',
        settlementTotalTime: '总用时',
        settlementTotalMoves: '总步数',
        settlementStageHeader: '阶段',
        settlementScoreHeader: '评分',
        settlementTimeHeader: '用时',
        settlementMovesHeader: '步数',
        settlementContinue: '继续挑战',
        settlementNewGame: '再来一局',
        settlementLeaderboard: '查看排行榜',
        settlementScoreFormula: '评分由步数效率（70%）与用时效率（30%）组成。暂停和画质模式不影响评分。',
        settlementStage1Subtitle: '第一阶段目标已达成。新的合成能力已经解锁。',
        settlementStage2Subtitle: '第二阶段目标已达成。继续完成最后的维度。',
        settlementStage3Subtitle: '第三阶段目标已达成。',
        settlementFinalSubtitle: '三重维度全部完成，下面是本局的完整表现。',
        settlementUnlock1: '已解锁：二阶 91、78、69',
        settlementUnlock2: '已解锁：三阶 91、78、69',
        settlementEvaluationExcellent: '超越维度',
        settlementEvaluationHigh: '高效通关',
        settlementEvaluationStable: '稳定通关',
        settlementEvaluationComplete: '完成挑战',
        settlementEvaluationExcellentNote: '三个阶段都保持了较高效率。',
        settlementEvaluationHighNote: '步数与用时控制得很出色。',
        settlementEvaluationStableNote: '节奏稳定，顺利完成了挑战。',
        settlementEvaluationCompleteNote: '完成比速度更重要，你做到了。',
        settlementEvaluationRule: '总分达到 90 分且每阶段不低于 80 分时，评价为“超越维度”。',
        settlementStageExcellent: '卓越表现',
        settlementStageHigh: '高效推进',
        settlementStageStable: '稳步推进',
        settlementStageComplete: '完成阶段',
        settlementStageEvaluationNote: '阶段评分仅反映本阶段的步数与用时效率。',
        easterSettlementKicker: '彩蛋结局',
        easterSettlementTitle: '{value} 彩蛋完成',
        easterSettlementSubtitle: '你完成了一条隐藏的数字路线。',
        easterSettlementStatusLabel: '结局状态',
        easterSettlementComplete: '彩蛋已记录',
        easterSettlementNoLeaderboard: '彩蛋排行榜将在后续版本加入。',
        easterSettlementRecorded: '已记录到彩蛋结局页面。',
        easterEggTriggered: '彩蛋触发：{value} 路线，二星合成已解锁。',
        easterEggStage2Complete: '{value} 路线第二阶段完成，三星目标已解锁。',
        easterEggDiscoveryKicker: '🥚 发现彩蛋',
        easterEggDiscoveryTitle: '发现 {value} 彩蛋',
        easterEggDiscoverySubtitle: '你排出了四个普通 {value}。',
        easterEggDiscoveryDifficulty: '难度：{difficulty}',
        easterEggDiscoveryUnlock: '已解锁二星 {value} 合成',
        easterEggDiscoveryStage2: '第二阶段：一排二星 {value}',
        easterEggDiscoveryFinal: '最终目标：一排三星 {value}',
        easterEggDiscoveryNote: '棋盘会保持当前状态。点击继续挑战后，开始这条隐藏路线。',
        easterEggDiscoveryContinue: '继续挑战',

        gameOver: '💀 游戏结束！无法继续移动',

        // 成就
        achievementsTitle: '🏆 成就回响',
        achievementUnlocked: '🏆 成就已解锁',
        normalAchievements: '常规成就',
        hiddenAchievements: '隐藏成就',
        hiddenAchievementsCount: '隐藏成就（{unlocked}/{total}）',
        hiddenNote: '尚未发现隐藏成就。隐藏成就只有在解锁后才会显现。',
        unlocked: '已解锁',
        locked: '未解锁',

        // 彩蛋结局
        easterEggsTitle: '🥚 彩蛋结局',
        easterEggsSummaryUnknown: '已发现 {count}/？',
        easterEggsSummaryComplete: '已发现 {count}/4',
        easterEggsDifficultyLabel: '难度：{difficulty}',
        easterEggsDifficulty: { easy: '入门 · I', medium: '进阶 · II', hard: '极限 · III' },
        easterEggsTrigger: '触发：横向排出四个普通 {value}',
        easterEggsStage2: '第二阶段：一排四个二星 {value}',
        easterEggsFinal: '最终目标：一排四个三星 {value}',
        easterEggsCompletedAt: '完成于：{date}',
        easterEggs: {
          '13': { title: '13 的另一条路' },
          '78': { title: '78 的另一条路' },
          '91': { title: '91 的隐藏维度' },
          '69': { title: '69 的终极回响' }
        },

        // 公告
        announcementsTitle: '📢 公告',
        announcementTypes: {
          update: '版本更新',
          feature: '新功能',
          notice: '通知',
          event: '限时活动'
        },
        clickForDetail: '点击查看详情 ›',
        backToAnnouncements: '返回公告',
        pinnedContent: '置顶内容',
        noAnnouncements: '暂无公告。',

        // 排行榜
        leaderboardTitle: '🏅 排行榜',
        leaderboardPlayers: {
          developer: '开发者',
          testerAlpha: '测试员 Alpha',
          xuanYuChen: '陈炫聿',
          testerBeta: '测试员 Beta',
          testerGamma: '测试员 Gamma'
        },
        leaderboardTitles: {
          ruleMaker: '规则缔造者',
          speedrunKing: '速通王',
          ruleObserver: '规则观察者',
          numberMaster91: '91大神',
          advancedPlayer: '进阶者',
          advancedWalker: '高阶行者',
          endgamePlayer: '终局者'
        },
        stage1Tab: '第一阶段',
        stage2Tab: '第二阶段',
        stage3Tab: '第三阶段',
        finalTab: '最终通关',
        movesRank: '步数榜',
        timeRank: '时间榜',
        officialRecords: '官方记录',
        localRecords: '本地记录',
        stageNote: '阶段榜单取最佳记录，不一定来自同一局游戏。',
        noOfficialRecords: '当前规则版本暂无官方记录。',
        noLocalRecords: '完成挑战后，本地成绩会显示在这里。',
        stepsUnit: '步',

        // 新手指引
        tutorialBtn: '新手指引',
        tutorialSkip: '跳过指引',
        tutorialNext: '下一步',
        tutorialStart: '开始游戏',

        // 性能提示
        perfHintLabel: '⚡ 性能提示',
        perfHintTitle: '检测到画面不太流畅',
        perfHintDesc: '当前平均帧率偏低。开启性能模式会关闭背景光效与粒子动画，棋子的移动和合成反馈仍会保留。',
        perfHintDescDynamic: '当前平均帧率约 {fps} FPS，画面可能不够流畅。开启性能模式会关闭背景光效与粒子动画，棋子的移动和合成反馈仍会保留。',
        perfHintEnable: '开启性能模式',
        perfHintDismiss: '保持现状',

        // 重置确认
        resetConfirmTitle: '⚠️ 确认重置游戏？',
        resetWarning: '以下数据将被<strong>永久删除</strong>，无法恢复：',
        resetItem1: '当前棋盘与游戏进度',
        resetItem2: '全部成就解锁记录',
        resetItem3: '本地排行榜成绩',
        resetItem4: '阶段统计与用时记录',
        resetItem5: '公告已读状态、新手指引记录',
        resetItem6: '画质模式、自动保存等全部设置',
        resetNote: '只是想重开一局？请改用棋盘下方的「新游戏」。<br />重置后页面会重新载入，并再次显示免责声明与新手指引。',
        resetCancel: '取消',
        resetConfirm: '确认重置',

        // 免责声明
        disclaimerTitle: '欢迎来到《917869小游戏》！',
        disclaimerIntro: '在您按下"开始"之前，请阅读以下"用户协议"：',
        disclaimerSubtitle: '免责声明',
        disclaimerContent: '欢迎体验《917869小游戏》。为保障您的权益，请在进入游戏前仔细阅读本声明：',
        disclaimerPoint1: '本游戏为独立开发的娱乐作品，所有内容均为虚构，仅供休闲娱乐。',
        disclaimerPoint2: '游戏中出现的人物、名称、事件、组织等如有与现实相似之处，纯属巧合。<strong>请勿将游戏内容与现实人物、事件进行关联或对号入座。</strong>',
        disclaimerPoint3: '<strong>请勿对游戏内容进行过度解读。</strong> 本作不包含任何现实隐喻、政治暗示或阴谋论。开发者不对玩家基于游戏内容产生的任何主观联想、推测或引申含义负责。',
        disclaimerPoint4: '本游戏旨在提供轻松的娱乐体验。请合理安排游戏时间，避免沉迷。因游玩本游戏引起的任何现实纠纷、心理不适或财产损失，开发者不承担任何法律责任。',
        disclaimerNote: '继续游戏即视为您已阅读、理解并同意本声明的全部内容。请先完整阅读 5 秒。',
        disclaimerNoteReady: '继续游戏即视为您已阅读、理解并同意本声明的全部内容。现在可以进入游戏，或选择退出。',
        disclaimerAccept: '同意并进入游戏',
        disclaimerExit: '退出游戏',
        disclaimerExitTitle: '您已退出《917869小游戏》',
        disclaimerExitContent: '感谢您的阅读。如需继续体验，请重新打开本页面。',

        resetPartialFail: '部分数据清除失败，请检查浏览器存储权限后重试',


        // 成就文案
        achievements: {
          first_move: { title: '第一声回响', description: '完成第一次有效移动' },
          merge_13: { title: '13 的诞生', description: '首次通过 7 + 6 合成 13' },
          merge_78: { title: '78 初现', description: '首次合成 78' },
          merge_69: { title: '69 之门', description: '首次合成 69' },
          merge_91: { title: '91 合成', description: '首次合成 91' },
          split_91_to_9: { title: '91分解', description: '首次把 91 和 1 合成出 9' },
          vanish_9: { title: '我的9呢？！', description: '首次让 9 未发生合成而是消失' },
          row_trio_t0: { title: '三数成列', description: '首次在同一横排完成 91、78、69' },
          merge_91_t1: { title: '91Ⅱ', description: '首次获得 91Ⅱ' },
          merge_78_t1: { title: '78Ⅱ', description: '首次获得 78Ⅱ' },
          merge_69_t1: { title: '69Ⅱ', description: '首次获得 69Ⅱ' },
          row_trio_t1: { title: '二阶三连', description: '在同一横排完成 91Ⅱ、78Ⅱ、69Ⅱ' },
          merge_91_t2: { title: '91Ⅲ', description: '首次获得 91Ⅲ' },
          merge_78_t2: { title: '78Ⅲ', description: '首次获得 78Ⅲ' },
          merge_69_t2: { title: '69Ⅲ', description: '首次获得 69Ⅲ' },
          row_trio_t2: { title: '数字的终极意义', description: '在同一横排完成 91Ⅲ、78Ⅲ、69Ⅲ' },
          escape_full_board: { title: '绝处逢生', description: '棋盘无空格时完成有效移动，并在本次移动后清理出至少 3 个空格' },
          multi_merge_move: { title: '一气呵成', description: '单次移动中完成 2 次或以上合成' },
          merge_and_vanish: { title: '双重回响', description: '单次有效移动中同时发生合成和消失' },
          merge_streak_3: { title: '连续反应', description: '连续 3 次有效移动都至少发生一次合成' },
          triple_vanish_move: { title: '真干净', description: '单次移动中发生 3 次或以上消失事件' },
          invalid_5: { title: '不动如山', description: '连续 5 次输入无效方向，棋盘状态没有改变' },
          cube_sequence: { title: '魔方', description: '连续依次完成上、左、下、右四次有效移动' },
          vanish_100: { title: '棋盘清理大师', description: '累计发生 100 次消失' },
          two_fates: { title: '两种命运', description: '同一局中让一个 9 合成、另一个 9 消失' },
          row_917813: { title: '数学题', description: '985x985-211x211-7891=??????' }
        },

        // 公告文案
        announcements: {
          'announcement-github-repo': {
            title: 'GitHub 仓库地址',
            summary: 'https://github.com/Steven-king123/917869-Casualgames.git',
            content: 'GitHub 仓库地址：https://github.com/Steven-king123/917869-Casualgames.git'
          },
          'announcement-community-group': {
            title: '交流反馈 Q 群',
            summary: '交流反馈 Q 群：1061312672',
            content: '交流反馈 Q 群：1061312672'
          },
          'announcement-0.6.5': {
            title: '0.6.5 版本更新公告',
            summary: '新增性能模式',
            content: `新增性能模式，在低性能设备上建议开启，以提供更流畅的游戏体验。`
          },
          'announcement-0.6.0': {
            title: '0.6.0 版本更新公告',
            summary: '新增排行榜',
            content: `新增排行榜，分为官方排行榜和本地排行榜，如想上官方榜，请加Q群反馈游戏昵称和成绩截图，官方榜单只在此处维护；本地成绩由 Leaderboard 独立保存，不进入游戏存档。`
          },
          'announcement-0.5.0-changelog': {
            title: '更新日志（0.5.0 版本及以前）',
            summary: '公告、成就、阶段统计、存档与三阶段玩法等历史更新汇总。',
            content: `更新日志（0.5.0版本及以前）

    [0.5.0] - 2026-07-12

    新增 · 公告系统
    - 新增公告栏入口、公告列表、类型、版本号和日期显示
    - 支持未读提示，阅读状态独立保存且不影响游戏存档
    - 支持公告详情和置顶内容扩展

    ---

    [0.4.1] - 2026-07-12

    新增 · 成就系统
    - 正式加入普通成就和隐藏成就
    - 支持首次合成、阶段排列、特殊碰撞等成就
    - 支持游戏内解锁提示、成就查看界面和解锁时间记录
    ---

    [0.4.0] - 2026-07-11

    新增 · 阶段统计系统
    - 新增第一、第二、第三阶段统计
    - 记录各阶段完成时间和移动步数
    - 支持开始、进行中、完成状态，以及暂停、恢复和存档恢复

    优化 · 计时、动画与动态光效
    - 优化游戏与阶段计时逻辑、暂停处理和存档恢复同步
    - 优化生成、移动、合成、消失和高阶数字升级动画及状态同步
    - 优化背景光效、数字发光、升级反馈、胜利效果和不同设备表现

    修复
    - 修复流光边框、动画状态重置、阶段切换同步、计时统计不一致和部分刷新流程异常

    ---

    [0.2.0] - 2026-07-04

    新增 · 存档系统
    - 新增自动存档，支持导入、导出存档字符串和完整恢复游戏进度
    - 存档仅在当前设备、当前浏览器中有效

    ---

    [0.1.0] - 2026-07-03

    这是《917869》第一版完整玩法更新。

    新增 · 进阶玩法
    - 游戏由一次通关改为三阶段成长玩法
    - 第一阶段完成普通 91、78、69 排列，第二阶段解锁高阶数字，第三阶段完成最终挑战
    - 新增 Tier 系统、多阶段胜利流程和游戏阶段状态管理

    新增 · 暂停功能
    - 暂停期间停止计时，支持恢复游戏

    优化 · 刷新逻辑
    - 重构刷新流程，提高状态恢复稳定性并优化重新开始体验

    ---

    [0.0.1] - 2026-06-28

    新增 · 基础玩法与规则系统
    - 完成 4×4 棋盘、四方向移动、随机生成、游戏结束和胜利检测
    - 采用规则表驱动碰撞系统，支持方向性合成和移动方块发起碰撞
    - 修复传统 2048 算法无法满足本游戏规则的问题

    新增 · UI、动画与操作体验
    - 重新设计玻璃拟态界面，优化布局、滑动、合成、消失、生成动画与光效
    - 支持鼠标滚轮、触屏滑动、键盘控制以及 PC 与移动端浏览器

    新增 · 文档与修复
    - 新增 README、游戏介绍、操作和规则说明
    - 修复游戏规则、页面名称、UI 显示及多项已知 Bug

    ---

    [0.0.0] - 2026-06-27

    实验版本
    - 完成游戏原型、基础 UI、基础控制、数字生成和方向碰撞系统

    ---

    [Pre-Alpha] - 2026-06-26

    项目创建。
    - Initial Commit
    - 初始游戏框架
    - HTML、CSS、JavaScript 基础结构

    ---

    当前版本概况
    - 单 HTML 原生架构，自定义数字合成规则与规则表驱动系统
    - Tile 与 Renderer 分离，具备独立动画系统、三阶段玩法、阶段统计、成就、公告
    - 支持暂停、自动存档、存档导入导出、触屏、键盘、鼠标与动态背景光效`
          }
        },

        // 新手指引
        tutorialSteps: {
          0: { title: '棋子会滑到底', tip: '滑动时棋子会朝那个方向一路滑到尽头，不会停在半路。' },
          1: { title: '横向合成：7 撞 8 = 78', tip: '让 7 主动撞向 8，合成 78。\n规则表写作 7→8=78，箭头指向被撞的那一个。' },
          2: { title: '没有规则就一起消失', tip: '6 和 7 横向相撞没有对应规则，两颗会同时消失。\n1、6、7、8、9 之间的未定义组合都是这样。' },
          3: { title: '换个方向，结果就变了', tip: '同样是 6 和 7，改成竖向、让 6 撞向 7，就能合成 13。\n方向决定结果，这是本作和 2048 最大的区别。' },
          4: { title: '顺序也有讲究', tip: '还是竖向，但这次换成 7 撞向 6，结果变成 1。\n谁主动撞过去，结果就不一样。8 撞 7 同样得到 1。' },
          5: { title: '核心目标：91', tip: '13 撞向 78 得到 91。这条规则横向竖向都成立。\n91 是通关的关键，也是后面所有变化的起点。' },
          6: { title: '91 会被 1 分解', tip: '91 和 1 相撞会变成 9，代价是失去一个 91。\n听起来是亏的，但 9 是造出 69 的唯一材料。' },
          7: { title: '最后一块：69', tip: '9 和 6 横向相撞得到 69，这条规则不分先后顺序。\n所以 69 的完整链路是：91 → 9 → 69。' },
          8: { title: '凑出第一排', tip: '通关条件是让 91、78、69 排在同一横排。\n现在向左滑：13 会撞上 78 变成 91，后面的 78 和 69 原地不动。' },
          9: { title: '第一阶段就是这样通关的', tip: '接下来棋盘会随机生成 6、7、8，你要自己把它们排成这一排。\n忘了规则可以随时点右上角的 🎓 重看，规则表也一直在棋盘下方。' }
        },
        tutorialGestures: {
          left: { text: '向左滑动' },
          right: { text: '向右滑动' },
          up: { text: '向上滑动' },
          down: { text: '向下滑动' }
        }
      },
      en: {
        lang: 'en',
        // Basic UI
        pageTitle: '917869 - Advanced',
        title: '🎮 Number Merge Game',
        moves: 'Total Moves',
        time: 'Total Time',
        newGame: 'New Game',
        pause: 'Pause',
        continue: 'Resume',
        settings: 'Settings',
        close: 'Close',
        ariaGrid: '4 × 4 number merge board',
        ariaGridCell: 'Row {row}, column {col}: {value}',
        ariaGridEmpty: 'empty',
        ariaGridTier1: 'two-star',
        ariaGridTier2: 'three-star',
        gridStatus: 'Board updated. {count} tiles. {tiles}',

        // Settings Panel
        settingsTitle: 'Settings',
        language: 'Language',
        languageDesc: 'Choose your display language.',
        qualityMode: 'Quality Mode',
        qualityModeDesc: 'Choose the background effects and animation level. Tile movement, merging and victory feedback remain available in every mode.',
        qualityPerformance: 'Performance',
        qualityBalanced: 'Balanced',
        qualityHigh: 'High Quality',
        ariaQualityMode: 'Quality mode',
        performanceMode: 'Performance Mode',
        performanceModeDesc: 'Disable background effects, particles and advanced animations to improve fluidity on low-end devices.',
        autoSave: 'Auto Save',
        autoSaveDesc: 'Only valid for the same device and browser. Automatically writes local save after each valid operation.',
        archiveCode: 'Archive Code',
        archiveCodeDesc: 'The code will be copied automatically after export; you can also paste it back here to import.',
        exportWithQuality: 'Include quality settings when exporting',
        resetGame: 'Reset Game',
        resetGameDesc: 'Clear all game data on this device: saves, achievements, local leaderboard, announcement read status and all settings. This operation is irreversible. It is recommended to export the archive code for backup first.',
        exportSave: 'Export Save',
        importSave: 'Import Save',
        settingsHint: 'Importing will overwrite the current board and progress; when auto-save is off, refreshing the page will not automatically restore new progress.',

        // Status Messages
        autoSaveEnabled: 'Auto-save enabled',
        autoSaveDisabled: 'Auto-save disabled',
        localPlayer: 'Local Player',
        emptyCell: 'Empty',
        ariaStageStats: 'Stage statistics',
        ariaPause: 'Pause prompt',
        ariaLeaderboardStage: 'Leaderboard stage',
        ariaLeaderboardMetric: 'Leaderboard metric',
        perfModeEnabled: 'Performance mode enabled',
        perfModeDisabled: 'Performance mode disabled',
        qualityModeChanged: 'Quality mode switched to: {mode}',
        exportSuccess: 'Archive code exported and copied to clipboard',
        exportFailed: 'Export failed, please check browser permissions',
        importSuccess: 'Import successful',
        importFailed: 'Import failed',
        pasteArchiveFirst: 'Please paste the archive code first',
        archiveFormatError: 'Archive format is incorrect',
        archiveContentInvalid: 'Archive content is invalid',
        unsupportedVersion: 'Unsupported save version',
        loadSaveSuccess: 'Local save restored',

        // Pause Panel
        pauseTitle: '⏸ Game Paused',
        pauseCurrentMoves: 'Current Moves',
        pauseUsedTime: 'Time Used',
        pauseTip1: 'Don\'t peek! The board is shy.\nGive it some mystery, victory will be more ceremonial.',
        pauseTip2: 'Pausing is not surrender, it\'s giving your brain a secret recharge.\nBut peeking will scare away inspiration.',
        pauseTip3: 'Tired of playing? Take a break.\nWhen you come back, the numbers will still be waiting for you.',
        pauseTip4: 'Every cell you see now is "unknown".\nDon\'t rush, let them stay mysterious.',
        pauseNote: 'The board is locked while paused. Take a rest before continuing.',
        resumeGame: 'Resume Game',

        // Game Rules
        rulesTitle: '📜 Game Rules',
        rulesGenerate: 'Randomly generate 6, 7, 8',
        rulesHorizontal: '7→8=78, 13↔78=91, 6↔9=69, 91↔1=9',
        rulesVertical: '7→6=1, 6→7=13, 8→7=1, 13↔78=91, 91↔1=9',
        rulesVanish: 'Undefined combinations between 1,6,7,8,9 vanish on collision',
        rulesStage: 'Stage 1 = normal 91/78/69. After clearing Stage 1, you can merge tier-2 91/78/69. Complete Stage 2 and then finish Stage 3 to win.',
        rulesGenerateLabel: 'Spawn:',
        rulesHorizontalLabel: 'Horizontal merge:',
        rulesVerticalLabel: 'Vertical merge:',
        rulesVanishLabel: 'Vanish:',
        rulesStageLabel: 'Stages:',

        // Aria labels
        ariaOpenSettings: 'Open settings',
        ariaViewAnnouncements: 'View announcements',
        ariaViewAchievements: 'View achievements',
        ariaViewLeaderboard: 'View leaderboard',
        ariaViewEasterEggs: 'View Easter Egg Endings',
        archiveCodePlaceholder: '917869:v1:...',

        // Stage Statistics
        currentGameStats: 'Current Game Stats',
        stage1: '⭐ Stage 1',
        stage2: '⭐⭐ Stage 2',
        stage3: '⭐⭐⭐ Stage 3',
        stageGoalNormal: 'Goal: normal 91, 78, 69',
        stageGoalTier2: 'Goal: a row of tier-2 91, 78, 69',
        stageGoalTier3: 'Goal: a row of tier-3 91, 78, 69',
        stageGoalEasterStage2: 'Goal: a row of tier-2 {value}',
        stageGoalEasterFinal: 'Goal: a row of tier-3 {value}',
        settlementStage1Title: 'Stage 1 Complete',
        settlementStage2Title: 'Stage 2 Complete',
        settlementStage3Title: 'Stage 3 Complete',
        settlementFinalTitle: 'All Dimensions Complete',
        statusPending: '○ Not Started',
        statusActive: '⏳ In Progress',
        statusDone: '✔ Completed',

        // Settlement and scoring
        settlementStageKicker: 'STAGE SETTLEMENT',
        settlementFinalKicker: 'FINAL SETTLEMENT',
        settlementScore: 'Stage Score',
        settlementTotalScore: 'Total Score',
        settlementTime: 'Stage Time',
        settlementMoves: 'Stage Moves',
        settlementTotalTime: 'Total Time',
        settlementTotalMoves: 'Total Moves',
        settlementStageHeader: 'Stage',
        settlementScoreHeader: 'Score',
        settlementTimeHeader: 'Time',
        settlementMovesHeader: 'Moves',
        settlementContinue: 'Continue Challenge',
        settlementNewGame: 'Play Again',
        settlementLeaderboard: 'View Leaderboard',
        settlementScoreFormula: 'Score = move efficiency (70%) + time efficiency (30%). Pauses and quality mode do not affect the score.',
        settlementStage1Subtitle: 'The first stage is complete. New merge abilities are unlocked.',
        settlementStage2Subtitle: 'The second stage is complete. Continue into the final dimension.',
        settlementStage3Subtitle: 'The third stage is complete.',
        settlementFinalSubtitle: 'All three dimensions are complete. Here is your full run performance.',
        settlementUnlock1: 'Unlocked: Tier-2 91, 78, 69',
        settlementUnlock2: 'Unlocked: Tier-3 91, 78, 69',
        settlementEvaluationExcellent: 'Beyond Dimensions',
        settlementEvaluationHigh: 'Efficient Clear',
        settlementEvaluationStable: 'Steady Clear',
        settlementEvaluationComplete: 'Challenge Complete',
        settlementEvaluationExcellentNote: 'You maintained high efficiency across all three stages.',
        settlementEvaluationHighNote: 'Your moves and time were both very efficient.',
        settlementEvaluationStableNote: 'A steady pace carried you through the challenge.',
        settlementEvaluationCompleteNote: 'Finishing matters more than speed. You made it.',
        settlementEvaluationRule: 'A total score of 90+ with no stage below 80 earns “Beyond Dimensions.”',
        settlementStageExcellent: 'Excellent Pace',
        settlementStageHigh: 'Efficient Progress',
        settlementStageStable: 'Steady Progress',
        settlementStageComplete: 'Stage Complete',
        settlementStageEvaluationNote: 'Stage scoring reflects only move and time efficiency for this stage.',
        easterSettlementKicker: 'EASTER EGG ENDING',
        easterSettlementTitle: '{value} Easter Egg Complete',
        easterSettlementSubtitle: 'You completed a hidden number route.',
        easterSettlementStatusLabel: 'Ending Status',
        easterSettlementComplete: 'Ending Recorded',
        easterSettlementNoLeaderboard: 'Easter egg leaderboards will be added in a later version.',
        easterSettlementRecorded: 'Recorded on the Easter Egg Endings page.',
        easterEggTriggered: 'Easter egg triggered: the {value} route is open. Tier-2 merging unlocked.',
        easterEggStage2Complete: 'The {value} route Stage 2 is complete. Tier-3 goal unlocked.',
        easterEggDiscoveryKicker: '🥚 EASTER EGG DISCOVERED',
        easterEggDiscoveryTitle: '{value} Easter Egg Discovered',
        easterEggDiscoverySubtitle: 'You lined up four normal {value} tiles.',
        easterEggDiscoveryDifficulty: 'Difficulty: {difficulty}',
        easterEggDiscoveryUnlock: 'Tier-2 {value} merging unlocked',
        easterEggDiscoveryStage2: 'Stage 2: line up four tier-2 {value} tiles',
        easterEggDiscoveryFinal: 'Final goal: line up four tier-3 {value} tiles',
        easterEggDiscoveryNote: 'The board will keep its current state. Click Continue to begin this hidden route.',
        easterEggDiscoveryContinue: 'Continue Challenge',

        gameOver: '💀 Game Over! No valid moves',

        // Achievements
        achievementsTitle: '🏆 Achievement Echo',
        achievementUnlocked: '🏆 Achievement Unlocked',
        normalAchievements: 'Normal Achievements',
        hiddenAchievements: 'Hidden Achievements',
        hiddenAchievementsCount: 'Hidden Achievements ({unlocked}/{total})',
        hiddenNote: 'No hidden achievements discovered yet. Hidden achievements only appear after being unlocked.',
        unlocked: 'Unlocked',
        locked: 'Locked',

        // Easter egg endings
        easterEggsTitle: '🥚 Easter Egg Endings',
        easterEggsSummaryUnknown: 'Discovered {count}/?',
        easterEggsSummaryComplete: 'Discovered {count}/4',
        easterEggsDifficultyLabel: 'Difficulty: {difficulty}',
        easterEggsDifficulty: { easy: 'Beginner · I', medium: 'Advanced · II', hard: 'Extreme · III' },
        easterEggsTrigger: 'Trigger: line up four normal {value} tiles horizontally',
        easterEggsStage2: 'Stage 2: line up four tier-2 {value} tiles',
        easterEggsFinal: 'Final goal: line up four tier-3 {value} tiles',
        easterEggsCompletedAt: 'Completed: {date}',
        easterEggs: {
          '13': { title: 'Another Path for 13' },
          '78': { title: 'Another Path for 78' },
          '91': { title: '91 Hidden Dimension' },
          '69': { title: 'Ultimate Echo of 69' }
        },

        // Announcements
        announcementsTitle: '📢 Announcements',
        announcementTypes: {
          update: 'Update',
          feature: 'Feature',
          notice: 'Notice',
          event: 'Event'
        },
        clickForDetail: 'Click for details ›',
        backToAnnouncements: 'Back to Announcements',
        pinnedContent: 'Pinned Content',
        noAnnouncements: 'No announcements.',

        // Leaderboard
        leaderboardTitle: '🏅 Leaderboard',
        leaderboardPlayers: {
          developer: 'Developer',
          testerAlpha: 'Tester Alpha',
          xuanYuChen: 'Xuan-Yu Chen',
          testerBeta: 'Tester Beta',
          testerGamma: 'Tester Gamma'
        },
        leaderboardTitles: {
          ruleMaker: 'Rule Maker',
          speedrunKing: 'Speedrun King',
          ruleObserver: 'Rule Observer',
          numberMaster91: '91 Master',
          advancedPlayer: 'Advanced Player',
          advancedWalker: 'Tier Walker',
          endgamePlayer: 'Endgame Player'
        },
        stage1Tab: 'Stage 1',
        stage2Tab: 'Stage 2',
        stage3Tab: 'Stage 3',
        finalTab: 'Final Clear',
        movesRank: 'Moves',
        timeRank: 'Time',
        officialRecords: 'Official Records',
        localRecords: 'Local Records',
        stageNote: 'Stage leaderboards take the best record, not necessarily from the same game.',
        noOfficialRecords: 'No official records for the current rule version.',
        noLocalRecords: 'Your records will appear here after completing challenges.',
        stepsUnit: 'steps',

        // Tutorial
        tutorialBtn: 'Tutorial',
        tutorialSkip: 'Skip',
        tutorialNext: 'Next',
        tutorialStart: 'Start Game',

        // Performance Hint
        perfHintLabel: '⚡ Performance Hint',
        perfHintTitle: 'Low Frame Rate Detected',
        perfHintDesc: 'Average frame rate is low. Enabling performance mode will disable background effects and particle animations. Tile movements and merge feedback will still be retained.',
        perfHintDescDynamic: 'Average frame rate is about {fps} FPS, which may feel less smooth. Enabling performance mode will disable background effects and particle animations. Tile movements and merge feedback will still be retained.',
        perfHintEnable: 'Enable Performance Mode',
        perfHintDismiss: 'Keep As Is',

        // Reset Confirmation
        resetConfirmTitle: '⚠️ Confirm Game Reset?',
        resetWarning: 'The following data will be <strong>permanently deleted</strong> and cannot be recovered:',
        resetItem1: 'Current board and game progress',
        resetItem2: 'All achievement unlock records',
        resetItem3: 'Local leaderboard scores',
        resetItem4: 'Stage statistics and time records',
        resetItem5: 'Announcement read status, tutorial records',
        resetItem6: 'Quality mode, auto-save and all settings',
        resetNote: 'Just want to start a new game? Please use "New Game" below the board instead.<br />After reset, the page will reload and show the disclaimer and tutorial again.',
        resetCancel: 'Cancel',
        resetConfirm: 'Confirm Reset',

        // Disclaimer
        disclaimerTitle: 'Welcome to 917869 Game!',
        disclaimerIntro: 'Before you press "Start", please read the following "User Agreement":',
        disclaimerSubtitle: 'Disclaimer',
        disclaimerContent: 'Welcome to 917869 Game. To protect your rights, please read this disclaimer carefully before entering the game:',
        disclaimerPoint1: 'This game is an independently developed entertainment work. All content is fictional and for recreational purposes only.',
        disclaimerPoint2: 'Any similarities between characters, names, events, organizations in the game and reality are purely coincidental. <strong>Please do not associate game content with real people or events.</strong>',
        disclaimerPoint3: '<strong>Please do not over-interpret game content.</strong> This work does not contain any real-world metaphors, political implications or conspiracy theories. The developer is not responsible for any subjective associations, speculations or extended meanings players derive from the game content.',
        disclaimerPoint4: 'This game aims to provide a relaxing entertainment experience. Please manage your game time reasonably and avoid addiction. The developer assumes no legal responsibility for any real-world disputes, psychological discomfort or property loss caused by playing this game.',
        disclaimerNote: 'Continuing to play means you have read, understood and agreed to all the contents of this statement. Please read for 5 seconds first.',
        disclaimerNoteReady: 'Continuing to play means you have read, understood and agreed to all the contents of this statement. You can now enter the game or choose to exit.',
        disclaimerAccept: 'Agree and Enter Game',
        disclaimerExit: 'Exit Game',
        disclaimerExitTitle: 'You have exited 917869 Game',
        disclaimerExitContent: 'Thank you for reading. If you want to continue, please reopen this page.',

        resetPartialFail: 'Some data failed to clear, please check browser storage permissions and try again',


        // Achievement copy
        achievements: {
          first_move: { title: 'First Echo', description: 'Complete your first valid move' },
          merge_13: { title: 'Birth of 13', description: 'First merge 13 via 7 + 6' },
          merge_78: { title: '78 Emerges', description: 'First merge 78' },
          merge_69: { title: 'Gate of 69', description: 'First merge 69' },
          merge_91: { title: '91 Formed', description: 'First merge 91' },
          split_91_to_9: { title: '91 Split', description: 'First merge 91 and 1 into 9' },
          vanish_9: { title: 'Where\'s My 9?!', description: 'First time a 9 vanishes instead of merging' },
          row_trio_t0: { title: 'Trio in a Row', description: 'First time 91, 78, 69 line up in the same row' },
          merge_91_t1: { title: '91 II', description: 'First obtain 91 II' },
          merge_78_t1: { title: '78 II', description: 'First obtain 78 II' },
          merge_69_t1: { title: '69 II', description: 'First obtain 69 II' },
          row_trio_t1: { title: 'Tier-2 Trio', description: 'Line up 91 II, 78 II, 69 II in the same row' },
          merge_91_t2: { title: '91 III', description: 'First obtain 91 III' },
          merge_78_t2: { title: '78 III', description: 'First obtain 78 III' },
          merge_69_t2: { title: '69 III', description: 'First obtain 69 III' },
          row_trio_t2: { title: 'Ultimate Meaning of Numbers', description: 'Line up 91 III, 78 III, 69 III in the same row' },
          escape_full_board: { title: 'Narrow Escape', description: 'Make a valid move on a full board and clear at least 3 cells' },
          multi_merge_move: { title: 'Chain Reaction', description: 'Complete 2 or more merges in a single move' },
          merge_and_vanish: { title: 'Double Echo', description: 'Merge and vanish happen in the same valid move' },
          merge_streak_3: { title: 'Consecutive Reaction', description: '3 consecutive valid moves each with at least one merge' },
          triple_vanish_move: { title: 'Spotless', description: '3 or more vanish events in a single move' },
          invalid_5: { title: 'Unmoving Mountain', description: '5 consecutive invalid directions with no board change' },
          cube_sequence: { title: 'Rubik\'s Cube', description: 'Complete valid moves up, left, down, right in sequence' },
          vanish_100: { title: 'Board Cleanup Master', description: 'Accumulate 100 vanish events' },
          two_fates: { title: 'Two Fates', description: 'In the same game, have one 9 merge and another 9 vanish' },
          row_917813: { title: 'Math Problem', description: '985x985-211x211-7891=??????' }
        },

        // Announcement copy
        announcements: {
          'announcement-github-repo': {
            title: 'GitHub Repository',
            summary: 'https://github.com/Steven-king123/917869-Casualgames.git',
            content: 'GitHub repository: https://github.com/Steven-king123/917869-Casualgames.git'
          },
          'announcement-community-group': {
            title: 'Feedback QQ Group',
            summary: 'Feedback QQ Group: 1061312672',
            content: 'Feedback QQ Group: 1061312672'
          },
          'announcement-0.6.5': {
            title: 'v0.6.5 Update Notice',
            summary: 'Added Performance Mode',
            content: 'Added Performance Mode. Recommended for low-performance devices to provide a smoother gameplay experience.'
          },
          'announcement-0.6.0': {
            title: 'v0.6.0 Update Notice',
            summary: 'Added Leaderboard',
            content: 'Added a Leaderboard with both official and local rankings. To get on the official board, join the QQ group and submit your in-game nickname and a screenshot of your score; the official board is only maintained here. Local scores are saved independently by the Leaderboard module and are not part of the game save.'
          },
          'announcement-0.5.0-changelog': {
            title: 'Changelog (v0.5.0 and earlier)',
            summary: 'Summary of historical updates: announcements, achievements, stage statistics, saves, and the three-stage gameplay.',
            content: `Changelog (v0.5.0 and earlier)

    [0.5.0] - 2026-07-12

    Added · Announcement System
    - Added announcement entry, list, type, version and date display
    - Supports unread indicators; read status is saved independently and does not affect the game save
    - Supports announcement details and pinned content

    ---

    [0.4.1] - 2026-07-12

    Added · Achievement System
    - Officially added normal and hidden achievements
    - Supports achievements for first merges, stage line-ups, special collisions, etc.
    - Supports in-game unlock toasts, an achievement viewer, and unlock timestamps
 supports unlocking, resetting and inspecting state

    ---

    [0.4.0] - 2026-07-11

    Added · Stage Statistics System
    - Added statistics for Stage 1, 2 and 3
    - Records completion time and move count for each stage
    - Supports not-started, in-progress and completed states, plus pause, resume and save restoration

    Improved · Timing, Animation and Dynamic Lighting
    - Improved game/stage timing logic, pause handling and save-restore sync
    - Improved spawn, move, merge, vanish and tier-up animations and state sync
    - Improved background lighting, tile glow, upgrade feedback, victory effects and cross-device behavior

    Fixed
    - Fixed the flowing border, animation state resets, stage transition sync, timing inconsistencies and some refresh-flow issues

    ---

    [0.2.0] - 2026-07-04

    Added · Save System
    - Added auto-save, support for importing/exporting save strings and fully restoring game progress
    - Saves are only valid on the current device and browser

    ---

    [0.1.0] - 2026-07-03

    This is the first complete gameplay update for 917869.

    Added · Advanced Gameplay
    - Changed the game from a single clear to a three-stage progression
    - Stage 1 forms normal 91/78/69, Stage 2 unlocks higher-tier numbers, Stage 3 completes the final challenge
    - Added the Tier system, multi-stage victory flow and game stage state management

    Added · Pause Feature
    - Timer stops while paused; supports resuming the game

    Improved · Refresh Logic
    - Refactored the refresh flow to improve state-restoration stability and the restart experience

    ---

    [0.0.1] - 2026-06-28

    Added · Core Gameplay and Rule System
    - Completed the 4×4 board, four-directional movement, random spawning, game-over and victory detection
    - Adopted a rule-table-driven collision system supporting directional merges and mover-initiated collisions
    - Fixed an issue where the traditional 2048 algorithm could not satisfy this game's rules

    Added · UI, Animation and Interaction
    - Redesigned the glassmorphism UI, improved layout, swipe, merge, vanish, spawn animations and lighting
    - Supports mouse wheel, touch swipe, keyboard control, and PC/mobile browsers

    Added · Documentation and Fixes
    - Added README, game introduction, controls and rules documentation
    - Fixed game rules, page title, UI display and several known bugs

    ---

    [0.0.0] - 2026-06-27

    Experimental version
    - Completed the game prototype, basic UI, basic controls, number spawning and directional collision system

    ---

    [Pre-Alpha] - 2026-06-26

    Project created.
    - Initial Commit
    - Initial game framework
    - HTML, CSS, JavaScript base structure

    ---

    Current Version Overview
    - Single-HTML native architecture with custom number-merge rules and a rule-table-driven system
    - Tile and Renderer are separated, with an independent animation system, three-stage gameplay, stage statistics, achievements, announcements
    - Supports pause, auto-save, save import/export, touch, keyboard, mouse and dynamic background lighting`
          }
        },

        // Tutorial steps
        tutorialSteps: {
          0: { title: 'Tiles Slide All the Way', tip: 'When you swipe, tiles slide in that direction all the way to the edge — they never stop halfway.' },
          1: { title: 'Horizontal Merge: 7 hits 8 = 78', tip: 'Let 7 actively hit 8 to merge into 78.\nThe rule table reads 7→8=78 — the arrow points to the one being hit.' },
          2: { title: 'No Rule Means They Both Vanish', tip: '6 and 7 colliding horizontally has no matching rule, so both vanish together.\nAny undefined combination among 1, 6, 7, 8, 9 works this way.' },
          3: { title: 'Change the Direction, Change the Result', tip: 'Same 6 and 7, but this time vertically with 6 hitting 7 — it merges into 13 instead.\nDirection determines the result. That\'s the biggest difference from 2048.' },
          4: { title: 'Order Matters Too', tip: 'Still vertical, but now 7 hits 6 — the result becomes 1.\nWhoever hits first changes the outcome. 8 hitting 7 also gives 1.' },
          5: { title: 'Core Goal: 91', tip: '13 hitting 78 gives 91. This rule holds both horizontally and vertically.\n91 is the key to clearing the stage, and the starting point for everything that follows.' },
          6: { title: '91 Can Be Split by 1', tip: '91 colliding with 1 turns into 9, at the cost of losing a 91.\nSounds like a loss, but 9 is the only ingredient for making 69.' },
          7: { title: 'The Last Piece: 69', tip: '9 and 6 colliding horizontally gives 69 — this rule works either way round.\nSo the full chain for 69 is: 91 → 9 → 69.' },
          8: { title: 'Line Up the First Row', tip: 'The clear condition is getting 91, 78, 69 lined up in the same row.\nNow swipe left: 13 will hit 78 and become 91, while the 78 and 69 behind it stay put.' },
          9: { title: 'That\'s How Stage 1 Is Cleared', tip: 'From here the board will randomly spawn 6, 7, 8 — you\'ll need to line them up yourself.\nForgot a rule? Tap 🎓 in the top right anytime to review, and the rule table is always below the board.' }
        },

        // Tutorial gestures
        tutorialGestures: {
          left: { text: 'Swipe Left' },
          right: { text: 'Swipe Right' },
          up: { text: 'Swipe Up' },
          down: { text: 'Swipe Down' }
        }
      }
    };

    let currentLanguage = 'zh';
    const LANGUAGE_STORAGE_KEY = '917869-language';

    function t(key) {
      const keys = key.split('.');
      let value = I18N[currentLanguage];
      for (const k of keys) {
        if (value && typeof value === 'object') value = value[k];
        else return key;
      }
      return value !== undefined ? value : key;
    }

    function setLanguage(lang, persist = true) {
      if (!I18N[lang]) return false;
      currentLanguage = lang;
      document.documentElement.lang = I18N[lang].lang;
      if (persist && !gameResetting) {
        try { localStorage.setItem(LANGUAGE_STORAGE_KEY, lang); } catch (_) {}
      }
      applyI18n();
      return true;
    }

    function loadPersistedLanguage() {
      try {
        const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (stored && I18N[stored]) return stored;
      } catch (_) {}
      return 'zh';
    }

    function applyI18n() {
      document.title = t('pageTitle');

      // 应用所有带 data-i18n 的元素
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) el.textContent = t(key);
      });

      // 应用 data-i18n-html (支持 HTML 标签)
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (key) el.innerHTML = t(key);
      });

      // 应用 placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key) el.placeholder = t(key);
      });

      // 应用 aria-label
      document.querySelectorAll('[data-i18n-attr-aria-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-attr-aria-label');
        if (key) el.setAttribute('aria-label', t(key));
      });

      updateLanguageButtons();
      updateQualityModeUI();

      // 重新渲染动态内容
      if (achievementsModal?.classList.contains('active')) renderAchievementList();
      if (announcementsModal?.classList.contains('active')) renderAnnouncementList();
      if (leaderboardModal?.classList.contains('active')) Leaderboard.render();
      if (easterEggsModal?.classList.contains('active')) renderEasterEggList();
      if (easterEggDiscoveryActive && easterEggDiscoveryId) renderEasterEggDiscovery(easterEggDiscoveryId);
      if (tutorialActive) renderTutorialCard();
      if (typeof updateGridAccessibility === 'function') updateGridAccessibility();
      if (pauseBtn) pauseBtn.textContent = gamePaused ? t('continue') : t('pause');
      updatePausePanel();
      updateSettlementLanguage();
      if (typeof renderStageGoals === 'function') renderStageGoals();
      if (StageStatistics) StageStatistics.renderAll();
    }

    function updateLanguageButtons() {
      if (langToggleBtn) {
        langToggleBtn.textContent = currentLanguage === 'zh' ? 'English' : '中文';
      }
    }

    function toggleLanguage() {
      setLanguage(currentLanguage === 'zh' ? 'en' : 'zh');
    }



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



    const ACHIEVEMENT_IDS = new Set(ACHIEVEMENTS.map((item) => item.id));
    let achievementState = createDefaultAchievementState();
    let achievementToastQueue = [];
    let achievementToastPlaying = false;
    let runAchievementState = createDefaultRunAchievementState();
    // 彩蛋永久记录由 ui.js 负责规范化和保存；这里保持初始化不依赖后续脚本。
    let easterEggState = { completed: [], completedAt: {} };
    let easterEggId = null;
    let easterEggDiscoveryId = null;

    let board = [];
    let moves = 0;
    let gameOver = false;
    let gameWon = false;
    let isAnimating = false;
    let tileIdSeq = 1;
    let gameTimer = null;
    let gamePaused = false;
    let elapsedBeforePause = 0;
    let gameStartAt = 0;
    let finalElapsedSeconds = null;
    let gameStage = 0;
    let unlockedTier = 0;
    let lastSpawnValue = null;
    let spawnValueStreak = 0;

    const tiles = new Map();
    const tilePool = [];
    let cellRects = [];
    let mouseLightInitialized = false;

    const gridEl = document.getElementById('grid');
    const gridStatusEl = document.getElementById('gridStatus');
    const gameContainer = document.getElementById('gameContainer');
    const msgEl = document.getElementById('message');
    const movesEl = document.getElementById('moves');
    const maxTileEl = document.getElementById('maxTile');
    const pauseOverlay = document.getElementById('pauseOverlay');
    const pauseMovesEl = document.getElementById('pauseMoves');
    const pauseTimeEl = document.getElementById('pauseTime');
    const pauseTipEl = document.getElementById('pauseTip');
    const pauseBtn = document.getElementById('pauseBtn');
    const resumeBtn = document.getElementById('resumeBtn');
    const newGameBtn = document.getElementById('newGameBtn');
    const mouseAmbient = document.getElementById('mouseAmbient');
    const ambientParticles = document.getElementById('ambientParticles');
    const victoryLayer = document.getElementById('victoryLayer');
    const settlementModal = document.getElementById('settlementModal');
    const settlementKicker = document.getElementById('settlementKicker');
    const settlementTitle = document.getElementById('settlementTitle');
    const settlementSubtitle = document.getElementById('settlementSubtitle');
    const settlementScoreLabel = document.getElementById('settlementScoreLabel');
    const settlementScore = document.getElementById('settlementScore');
    const settlementScoreSuffix = document.getElementById('settlementScoreSuffix');
    const settlementEvaluation = document.getElementById('settlementEvaluation');
    const settlementEvaluationNote = document.getElementById('settlementEvaluationNote');
    const settlementTimeLabel = document.getElementById('settlementTimeLabel');
    const settlementMovesLabel = document.getElementById('settlementMovesLabel');
    const settlementTime = document.getElementById('settlementTime');
    const settlementMoves = document.getElementById('settlementMoves');
    const settlementUnlock = document.getElementById('settlementUnlock');
    const settlementStageList = document.getElementById('settlementStageList');
    const settlementStageRows = document.getElementById('settlementStageRows');
    const settlementFormula = document.getElementById('settlementFormula');
    const settlementContinueBtn = document.getElementById('settlementContinueBtn');
    const settlementNewGameBtn = document.getElementById('settlementNewGameBtn');
    const settlementLeaderboardBtn = document.getElementById('settlementLeaderboardBtn');
    const easterEggDiscoveryModal = document.getElementById('easterEggDiscoveryModal');
    const easterEggDiscoveryKicker = document.getElementById('easterEggDiscoveryKicker');
    const easterEggDiscoveryTitle = document.getElementById('easterEggDiscoveryTitle');
    const easterEggDiscoverySubtitle = document.getElementById('easterEggDiscoverySubtitle');
    const easterEggDiscoveryDifficulty = document.getElementById('easterEggDiscoveryDifficulty');
    const easterEggDiscoveryUnlock = document.getElementById('easterEggDiscoveryUnlock');
    const easterEggDiscoveryStage2 = document.getElementById('easterEggDiscoveryStage2');
    const easterEggDiscoveryFinal = document.getElementById('easterEggDiscoveryFinal');
    const easterEggDiscoveryContinueBtn = document.getElementById('easterEggDiscoveryContinueBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsModal = document.getElementById('settingsModal');
    const langToggleBtn = document.getElementById('langToggleBtn');
    const qualityModeRange = document.getElementById('qualityModeRange');
    const qualityModeValue = document.getElementById('qualityModeValue');
    const autoSaveToggle = document.getElementById('autoSaveToggle');
    const exportQualityModeToggle = document.getElementById('exportQualityModeToggle');
    const saveTextarea = document.getElementById('saveTextarea');
    const exportSaveBtn = document.getElementById('exportSaveBtn');
    const importSaveBtn = document.getElementById('importSaveBtn');
    const closeSettingsBtn = document.getElementById('closeSettingsBtn');
    const settingsStatus = document.getElementById('settingsStatus');
    const archiveStatus = document.getElementById('archiveStatus');
    const announcementsBtn = document.getElementById('announcementsBtn');
    const announcementUnreadBadge = document.getElementById('announcementUnreadBadge');
    const announcementsModal = document.getElementById('announcementsModal');
    const announcementList = document.getElementById('announcementList');
    const closeAnnouncementsBtn = document.getElementById('closeAnnouncementsBtn');
    const announcementDetailModal = document.getElementById('announcementDetailModal');
    const announcementDetailTitle = document.getElementById('announcementDetailTitle');
    const announcementDetailMeta = document.getElementById('announcementDetailMeta');
    const announcementDetailContent = document.getElementById('announcementDetailContent');
    const closeAnnouncementDetailBtn = document.getElementById('closeAnnouncementDetailBtn');
    const achievementsBtn = document.getElementById('achievementsBtn');
    const achievementsModal = document.getElementById('achievementsModal');
    const achievementList = document.getElementById('achievementList');
    const achievementSummary = document.getElementById('achievementSummary');
    const achievementToastLayer = document.getElementById('achievementToastLayer');
    const closeAchievementsBtn = document.getElementById('closeAchievementsBtn');
    const easterEggsBtn = document.getElementById('easterEggsBtn');
    const easterEggsModal = document.getElementById('easterEggsModal');
    const easterEggsList = document.getElementById('easterEggsList');
    const easterEggsSummary = document.getElementById('easterEggsSummary');
    const closeEasterEggsBtn = document.getElementById('closeEasterEggsBtn');
    const leaderboardBtn = document.getElementById('leaderboardBtn');
    const leaderboardModal = document.getElementById('leaderboardModal');
    const leaderboardContent = document.getElementById('leaderboardContent');
    const closeLeaderboardBtn = document.getElementById('closeLeaderboardBtn');
    const stageGoal1 = document.getElementById('stageGoal1');
    const stageGoal2 = document.getElementById('stageGoal2');
    const stageGoal3 = document.getElementById('stageGoal3');
    const startupDisclaimerModal = document.getElementById('startupDisclaimerModal');
    const startupDisclaimerNote = document.getElementById('startupDisclaimerNote');
    const acceptDisclaimerBtn = document.getElementById('acceptDisclaimerBtn');
    const exitDisclaimerBtn = document.getElementById('exitDisclaimerBtn');
    const perfHint = document.getElementById('perfHint');
    const perfHintAcceptBtn = document.getElementById('perfHintAcceptBtn');
    const perfHintDismissBtn = document.getElementById('perfHintDismissBtn');
    const resetGameBtn = document.getElementById('resetGameBtn');
    const resetConfirmModal = document.getElementById('resetConfirmModal');
    const cancelResetGameBtn = document.getElementById('cancelResetGameBtn');
    const confirmResetGameBtn = document.getElementById('confirmResetGameBtn');
    const tutorialBtn = document.getElementById('tutorialBtn');
    const tutorialCard = document.getElementById('tutorialCard');
    const tutorialStepEl = document.getElementById('tutorialStep');
    const tutorialTitleEl = document.getElementById('tutorialTitle');
    const tutorialTipEl = document.getElementById('tutorialTip');
    const tutorialProgressBar = document.getElementById('tutorialProgressBar');
    const tutorialGesture = document.getElementById('tutorialGesture');
    const tutorialArrow = document.getElementById('tutorialArrow');
    const tutorialGestureText = document.getElementById('tutorialGestureText');
    const tutorialNextBtn = document.getElementById('tutorialNextBtn');
    const tutorialSkipBtn = document.getElementById('tutorialSkipBtn');

    // 统一管理需要独占键盘焦点的浮层。具体业务模块只负责注册关闭回调，
    // 这样 Escape、Tab 循环、背景 inert 和关闭后的焦点恢复不会各自分叉。
    const ModalManager = (() => {
      const stack = [];
      const registrations = new Map();
      const inertElements = new Set();
      const focusableSelector = [
        'a[href]', 'area[href]', 'button:not([disabled])',
        'input:not([disabled])', 'select:not([disabled])',
        'textarea:not([disabled])', '[contenteditable="true"]',
        '[tabindex]:not([tabindex="-1"])'
      ].join(',');
      const modalSelector = '.settings-modal, .settlement-modal, .easter-egg-discovery-modal, .pause-overlay';

      function register(modal, options = {}) {
        if (!modal) return;
        registrations.set(modal, {
          onClose: typeof options.onClose === 'function' ? options.onClose : null,
          escape: options.escape !== false
        });
      }

      function getPanel(modal) {
        return modal?.querySelector('[role="dialog"], [role="alertdialog"], .settings-panel, .settlement-panel, .easter-egg-discovery-panel, .pause-panel') || modal;
      }

      function getFocusable(modal) {
        return [...modal.querySelectorAll(focusableSelector)].filter((el) => {
          return isUsableFocusTarget(el);
        });
      }

      function isUsableFocusTarget(element) {
        if (!element?.isConnected || element.disabled || element.hidden) return false;
        if (element.closest('[hidden], [inert]')) return false;
        return element.getClientRects().length > 0;
      }

      function setInert(element, value) {
        if (!element || element === document.body) return;
        element.inert = value;
        if (value) element.setAttribute('inert', '');
        else element.removeAttribute('inert');
        if (value) inertElements.add(element);
        else inertElements.delete(element);
      }

      function updateBackground() {
        const top = stack[stack.length - 1]?.modal || null;
        for (const element of [...inertElements]) setInert(element, false);
        if (!top) return;
        let node = top;
        while (node && node !== document.body) {
          const parent = node.parentElement;
          if (!parent) break;
          for (const sibling of [...parent.children]) if (sibling !== node) setInert(sibling, true);
          node = parent;
        }

        for (const entry of stack) {
          const underneath = entry.modal !== top;
          entry.modal.setAttribute('aria-hidden', underneath ? 'true' : 'false');
          setInert(entry.modal, underneath);
        }
      }

      function focusModal(modal, preferred) {
        const panel = getPanel(modal);
        const target = isUsableFocusTarget(preferred) && modal.contains(preferred)
          ? preferred
          : getFocusable(modal)[0] || panel;
        if (!target) return;
        if (target === panel && !panel.hasAttribute('tabindex')) panel.setAttribute('tabindex', '-1');
        requestAnimationFrame(() => {
          if (isUsableFocusTarget(target)) target.focus({ preventScroll: true });
        });
      }

      function show(modal, trigger = null, options = {}) {
        if (!modal) return;
        const existing = stack.find((entry) => entry.modal === modal);
        if (existing) {
          existing.trigger = trigger || existing.trigger;
          updateBackground();
          focusModal(modal, options.focus);
          return;
        }
        stack.push({
          modal,
          trigger: isUsableFocusTarget(trigger) ? trigger : null,
          previousFocus: isUsableFocusTarget(document.activeElement) ? document.activeElement : null
        });
        modal.classList.add('active');
        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        updateBackground();
        focusModal(modal, options.focus);
      }

      function hide(modal, options = {}) {
        if (!modal) return;
        const index = stack.findIndex((entry) => entry.modal === modal);
        const entry = index >= 0 ? stack.splice(index, 1)[0] : null;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        setInert(modal, false);
        updateBackground();

        if (!options.skipFocus) {
          const previous = stack[stack.length - 1];
          const target = isUsableFocusTarget(entry?.trigger)
            ? entry.trigger
            : isUsableFocusTarget(entry?.previousFocus) && !modal.contains(entry.previousFocus)
              ? entry.previousFocus
            : previous ? getFocusable(previous.modal)[0] : null;
          if (target) {
            requestAnimationFrame(() => {
              if (isUsableFocusTarget(target)) target.focus({ preventScroll: true });
              else if (previous) focusModal(previous.modal);
            });
          }
        }
      }

      function requestClose(modal) {
        const registration = registrations.get(modal);
        if (registration?.onClose) registration.onClose();
        else if (registration?.escape !== false) hide(modal);
      }

      function onKeydown(event) {
        const entry = stack[stack.length - 1];
        if (!entry) return;
        const modal = entry.modal;
        if (event.key === 'Escape') {
          if (registrations.get(modal)?.escape === false) return;
          event.preventDefault();
          event.stopPropagation();
          requestClose(modal);
          return;
        }
        if (event.key !== 'Tab') return;

        const focusable = getFocusable(modal);
        if (!focusable.length) {
          event.preventDefault();
          focusModal(modal);
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!modal.contains(document.activeElement)) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }

      document.addEventListener('keydown', onKeydown, true);
      return {
        register,
        show,
        hide,
        requestClose,
        hasOpen: () => stack.length > 0
      };
    })();
    function registerManagedModals() {
      ModalManager.register(startupDisclaimerModal, { escape: false });
      ModalManager.register(settingsModal, { onClose: closeSettingsModal });
      ModalManager.register(resetConfirmModal, { onClose: closeResetConfirm });
      ModalManager.register(achievementsModal, { onClose: closeAchievementsModal });
      ModalManager.register(easterEggsModal, { onClose: closeEasterEggsModal });
      ModalManager.register(leaderboardModal, { onClose: () => Leaderboard.close() });
      ModalManager.register(announcementsModal, { onClose: closeAnnouncementsModal });
      ModalManager.register(announcementDetailModal, { onClose: closeAnnouncementDetail });
      ModalManager.register(settlementModal, { onClose: () => closeSettlement('continue') });
      ModalManager.register(easterEggDiscoveryModal, { onClose: closeEasterEggDiscovery });
      ModalManager.register(pauseOverlay, { onClose: resumeGame });
      ModalManager.register(perfHint, { onClose: hidePerfHint });
    }

    const SAVE_STORAGE_KEY = '917869-save';
    const AUTO_SAVE_STORAGE_KEY = '917869-autoSave';
    const PERFORMANCE_MODE_STORAGE_KEY = '917869-performanceMode';
    const QUALITY_MODE_STORAGE_KEY = '917869-qualityMode';
    const ACHIEVEMENT_STORAGE_KEY = '917869-achievements';
    const EASTER_EGG_STORAGE_KEY = '917869-easter-eggs';
    const PERF_HINT_SHOWN_KEY = '917869-perfHintShown';
    const TUTORIAL_SEEN_KEY = '917869-tutorialSeen';
    const SAVE_MAGIC = '917869:v1:';
    const STARTUP_DISCLAIMER_SECONDS = 5;

    // 低帧率检测：采样窗口内平均帧率低于阈值即提示一次。
    const PERF_SAMPLE_DELAY = 2500;
    const PERF_SAMPLE_DURATION = 3000;
    const PERF_FPS_THRESHOLD = 32;
    const PERF_HINT_AUTO_HIDE = 15000;

    let autoSaveEnabled = true;
    let qualityMode = 2;
    let performanceMode = false;
    let gameState = null;
    let startupDisclaimerTimer = null;
    let startupBootResolved = false;
    let perfHintAutoHideTimer = null;
    let tutorialActive = false;
    let tutorialStepIndex = 0;
    let tutorialSnapshot = null;
    let tutorialAdvancing = false;
    let gameResetting = false;
    let settlementActive = false;
    let settlementKind = null;
    let settlementResolver = null;
    let settlementSnapshot = null;
    let settlementFrozenElapsed = null;
    let easterEggDiscoveryActive = false;
    let easterEggDiscoveryResolver = null;

    // 初版评分基准，后续可根据实际通关数据校准。
    const SCORE_REFERENCES = Object.freeze({
      stage1: { targetMoves: 45, maxMoves: 120, targetTime: 180, maxTime: 600 },
      stage2: { targetMoves: 70, maxMoves: 160, targetTime: 240, maxTime: 900 },
      stage3: { targetMoves: 100, maxMoves: 240, targetTime: 360, maxTime: 1200 }
    });



    function loadReadAnnouncementIds() {
      try {
        const raw = JSON.parse(localStorage.getItem(ANNOUNCEMENT_READ_KEY) || '[]');
        return new Set(Array.isArray(raw) ? raw.filter((id) => typeof id === 'string') : []);
      } catch (_) {
        return new Set();
      }
    }

    let readAnnouncementIds = loadReadAnnouncementIds();

    function saveReadAnnouncementIds() {
      if (gameResetting) return;
      try { localStorage.setItem(ANNOUNCEMENT_READ_KEY, JSON.stringify([...readAnnouncementIds])); } catch (_) {}
    }

    function getUnreadAnnouncements() { return ANNOUNCEMENTS.filter((item) => !readAnnouncementIds.has(item.id)); }

    function updateAnnouncementUnreadBadge() {
      const count = getUnreadAnnouncements().length;
      if (announcementsBtn) announcementsBtn.classList.toggle('has-unread', count > 0);
      if (announcementUnreadBadge) announcementUnreadBadge.textContent = count > 9 ? '9+' : String(count);
    }

    function setDisclaimerButtonsEnabled(enabled, secondsLeft = 0) {
      const suffix = enabled ? '' : currentLanguage === 'en' ? ` (${secondsLeft})` : `（${secondsLeft}）`;
      if (acceptDisclaimerBtn) {
        acceptDisclaimerBtn.disabled = !enabled;
        acceptDisclaimerBtn.textContent = `${t('disclaimerAccept')}${suffix}`;
      }
    }

    // 免责声明是进入游戏前的法律闸门，任何浮层/教学都不得在它之上或之下抢先出现。
    function isStartupDisclaimerOpen() {
      return !!startupDisclaimerModal && startupDisclaimerModal.classList.contains('active');
    }

    function hideStartupDisclaimer() {
      if (!startupDisclaimerModal) return;
      ModalManager.hide(startupDisclaimerModal);
    }

    function exitGameFromDisclaimer() {
      hideStartupDisclaimer();
      document.body.innerHTML = `<div style="min-height:100vh;display:grid;place-items:center;padding:24px;color:#f5f7ff;text-align:center;"><div><h1 style="margin-bottom:12px;font-size:28px;">${t('disclaimerExitTitle')}</h1><p style="color:#b6bee0;font-size:15px;line-height:1.8;">${t('disclaimerExitContent')}</p></div></div>`;
      try { window.close(); } catch (_) {}
    }

    function showStartupDisclaimer() {
      return new Promise((resolve) => {
        if (!startupDisclaimerModal) {
          resolve('accept');
          return;
        }

        let remaining = STARTUP_DISCLAIMER_SECONDS;
        startupBootResolved = false;
        ModalManager.show(startupDisclaimerModal, null, { focus: exitDisclaimerBtn });
        if (startupDisclaimerNote) startupDisclaimerNote.textContent = t('disclaimerNote');
        setDisclaimerButtonsEnabled(false, remaining);

        const cleanup = () => {
          if (startupDisclaimerTimer) {
            clearInterval(startupDisclaimerTimer);
            startupDisclaimerTimer = null;
          }
        };

        const finish = (action) => {
          if (startupBootResolved) return;
          startupBootResolved = true;
          cleanup();
          resolve(action);
        };

        const accept = () => {
          hideStartupDisclaimer();
          finish('accept');
        };

        const exit = () => {
          finish('exit');
          exitGameFromDisclaimer();
        };

        acceptDisclaimerBtn?.addEventListener('click', accept, { once: true });
        exitDisclaimerBtn?.addEventListener('click', exit, { once: true });

        startupDisclaimerTimer = setInterval(() => {
          remaining -= 1;
          if (remaining > 0) {
            setDisclaimerButtonsEnabled(false, remaining);
            return;
          }
          cleanup();
          setDisclaimerButtonsEnabled(true, 0);
          if (startupDisclaimerNote) startupDisclaimerNote.textContent = t('disclaimerNoteReady');
        }, 1000);
      });
    }

    function escapeAnnouncementHtml(value) {
      const node = document.createElement('div');
      node.textContent = String(value ?? '');
      return node.innerHTML;
    }

    function renderAnnouncementList() {
      if (!announcementList) return;
      const renderItem = (item) => {
        const unread = !readAnnouncementIds.has(item.id);
        const type = t(`announcementTypes.${item.type}`) || t('announcementTypes.notice');
        const meta = [item.version, item.date].filter(Boolean).join(' · ');
        const title = announcementText(item.id, 'title');
        const summary = announcementText(item.id, 'summary');
        const content = announcementText(item.id, 'content');
        const hasMore = String(content || '').length > String(summary || '').length;
        return `<article class="announcement-item ${unread ? 'unread' : ''}" data-announcement-id="${escapeAnnouncementHtml(item.id)}" tabindex="0" role="button"><div class="announcement-header"><div class="announcement-title">${escapeAnnouncementHtml(title)}</div><span class="announcement-type">${escapeAnnouncementHtml(type)}</span></div>${meta ? `<div class="announcement-meta">${escapeAnnouncementHtml(meta)}</div>` : ''}<div class="announcement-content">${escapeAnnouncementHtml(summary || content)}</div>${hasMore ? `<div class="announcement-more">${escapeAnnouncementHtml(t('clickForDetail'))}</div>` : ''}</article>`;
      };
      const pinned = ANNOUNCEMENTS.filter((item) => item.pinned);
      const regular = ANNOUNCEMENTS.filter((item) => !item.pinned);
      announcementList.innerHTML = `${pinned.length ? `<div class="announcement-section-title">${t('pinnedContent')}</div>${pinned.map(renderItem).join('')}` : ''}${regular.map(renderItem).join('') || `<div class="announcement-content">${t('noAnnouncements')}</div>`}`;
      announcementList.querySelectorAll('.announcement-item').forEach((itemEl) => {
        const open = () => openAnnouncementDetail(itemEl.dataset.announcementId, itemEl);
        itemEl.addEventListener('click', open);
        itemEl.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
        });
      });
    }

    function openAnnouncementsModal() {
      if (!announcementsModal) return;
      renderAnnouncementList();
      ModalManager.show(announcementsModal, announcementsBtn);
    }

    function closeAnnouncementsModal() {
      ModalManager.hide(announcementsModal);
    }

    function openAnnouncementDetail(id, trigger = null) {
      const item = ANNOUNCEMENTS.find((entry) => entry.id === id);
      if (!item || !announcementDetailModal) return;
      if (announcementDetailTitle) announcementDetailTitle.textContent = announcementText(item.id, 'title');
      if (announcementDetailMeta) announcementDetailMeta.textContent = [item.version, item.date].filter(Boolean).join(' · ');
      if (announcementDetailContent) announcementDetailContent.textContent = announcementText(item.id, 'content');
      readAnnouncementIds.add(item.id);
      saveReadAnnouncementIds();
      updateAnnouncementUnreadBadge();
      renderAnnouncementList();
      const currentTrigger = [...(announcementList?.querySelectorAll('.announcement-item') || [])]
        .find((entry) => entry.dataset.announcementId === id);
      ModalManager.show(announcementDetailModal, currentTrigger || announcementsBtn, { focus: closeAnnouncementDetailBtn });
    }

    function closeAnnouncementDetail() {
      ModalManager.hide(announcementDetailModal);
    }

    function createDefaultAchievementState() {
      return { unlocked: [], progress: {}, stats: { totalMoves: 0, totalMerges: 0, vanishCount: 0, maxTier: 0 }, unlockedAt: {} };
    }

    function createDefaultRunAchievementState() {
      return { invalidStreak: 0, mergeMoveStreak: 0, cubeProgress: 0, nineMerged: false, nineVanished: false };
    }

    function normalizeAchievementState(raw) {
      const base = createDefaultAchievementState();
      const legacyUnlocked = Array.isArray(raw) ? raw : (Array.isArray(raw?.unlocked) ? raw.unlocked : []);
      base.unlocked = [...new Set(legacyUnlocked.filter((id) => ACHIEVEMENT_IDS.has(id)))];
      if (raw && !Array.isArray(raw) && typeof raw === 'object') {
        base.progress = raw.progress && typeof raw.progress === 'object' ? { ...raw.progress } : {};
        base.unlockedAt = raw.unlockedAt && typeof raw.unlockedAt === 'object' ? { ...raw.unlockedAt } : {};
        const stats = raw.stats && typeof raw.stats === 'object' ? raw.stats : {};
        for (const key of Object.keys(base.stats)) base.stats[key] = Math.max(0, Number(stats[key]) || 0);
      }
      return base;
    }

    function mergeAchievementStates(...sources) {
      const merged = createDefaultAchievementState();
      for (const source of sources) {
        if (!source) continue;
        const state = normalizeAchievementState(source);
        for (const id of state.unlocked) {
          if (!merged.unlocked.includes(id)) merged.unlocked.push(id);
          const unlockedAt = Number(state.unlockedAt[id]) || 0;
          const currentAt = Number(merged.unlockedAt[id]) || 0;
          if (unlockedAt && (!currentAt || unlockedAt < currentAt)) merged.unlockedAt[id] = unlockedAt;
        }
        merged.progress = { ...merged.progress, ...state.progress };
        for (const key of Object.keys(merged.stats)) merged.stats[key] = Math.max(merged.stats[key], state.stats[key]);
      }
      return merged;
    }

    function loadPermanentAchievementState() {
      try {
        const raw = localStorage.getItem(ACHIEVEMENT_STORAGE_KEY);
        return raw === null ? null : normalizeAchievementState(JSON.parse(raw));
      } catch (error) {
        console.warn('读取永久成就记录失败', error);
        return null;
      }
    }

    function savePermanentAchievementState() {
      if (gameResetting) return false;
      try {
        localStorage.setItem(ACHIEVEMENT_STORAGE_KEY, JSON.stringify(achievementState));
        return true;
      } catch (error) {
        console.warn('保存永久成就记录失败', error);
        return false;
      }
    }

    function achievementText(id, field) {
      return t(`achievements.${id}.${field}`);
    }

    function renderAchievementList() {
      if (!achievementList) return;
      const unlocked = new Set(achievementState.unlocked);
      const normal = ACHIEVEMENTS.filter((item) => !item.hidden);
      const hidden = ACHIEVEMENTS.filter((item) => item.hidden);
      const hiddenUnlocked = hidden.filter((item) => unlocked.has(item.id));
      achievementSummary.textContent = `${t('normalAchievements')} ${normal.filter((item) => unlocked.has(item.id)).length} / ${normal.length}`;
      const renderItem = (item) => {
        const done = unlocked.has(item.id);
        const date = done && achievementState.unlockedAt[item.id]
          ? new Date(achievementState.unlockedAt[item.id]).toLocaleString(currentLanguage === 'en' ? 'en-US' : 'zh-CN') : '';
        return `<div class="achievement-item ${done ? 'unlocked' : ''}"><div class="achievement-icon">${item.icon}</div><div><div class="achievement-name">${done ? t('unlocked') : t('locked')} · ${achievementText(item.id, 'title')}</div><div class="achievement-description">${achievementText(item.id, 'description')}</div>${date ? `<div class="achievement-date">${date}</div>` : ''}</div></div>`;
      };
      const hiddenHeading = t('hiddenAchievementsCount')
        .replace('{unlocked}', String(hiddenUnlocked.length))
        .replace('{total}', String(hidden.length));
      achievementList.innerHTML = `<div class="achievement-section-title">${t('normalAchievements')}</div>${normal.map(renderItem).join('')}<div class="achievement-section-title">${hiddenHeading}</div>${hiddenUnlocked.length ? hiddenUnlocked.map(renderItem).join('') : `<div class="achievement-hidden-note">${t('hiddenNote')}</div>`}`;
    }

    function queueAchievementToast(item) {
      achievementToastQueue.push(item);
      playNextAchievementToast();
    }

    function playNextAchievementToast() {
      if (achievementToastPlaying || !achievementToastQueue.length || !achievementToastLayer) return;
      achievementToastPlaying = true;
      const item = achievementToastQueue.shift();
      const toast = document.createElement('div');
      toast.className = 'achievement-toast';
      toast.innerHTML = `<div class="achievement-toast-label">${t('achievementUnlocked')}</div><div class="achievement-toast-title">${achievementText(item.id, 'title')}</div><div class="achievement-toast-desc">${achievementText(item.id, 'description')}</div>`;
      achievementToastLayer.replaceChildren(toast);
      setTimeout(() => {
        toast.remove();
        achievementToastPlaying = false;
        playNextAchievementToast();
      }, 3250);
    }

    function unlockAchievement(id, showToast = true, persist = true) {
      if (!ACHIEVEMENT_IDS.has(id) || achievementState.unlocked.includes(id)) return false;
      achievementState.unlocked.push(id);
      achievementState.unlockedAt[id] = Date.now();
      const item = ACHIEVEMENTS.find((entry) => entry.id === id);
      if (showToast && item) queueAchievementToast(item);
      markAchievementStateDirty({ ui: true });
      if (persist && achievementBatchDepth === 0) flushAchievementState();
      return true;
    }

    function emitAchievementEvent(type, payload = {}) {
      const stats = achievementState.stats;
      if (type === 'move') {
        stats.totalMoves += 1;
        unlockAchievement('first_move');
      } else if (type === 'merge') {
        stats.totalMerges += 1;
        stats.maxTier = Math.max(stats.maxTier, Number(payload.tier) || 0);
        if (payload.value === 13 && payload.from?.[0] === 7 && payload.from?.[1] === 6) unlockAchievement('merge_13');
        if (payload.value === 78 && payload.tier === 0) unlockAchievement('merge_78');
        if (payload.value === 69 && payload.tier === 0) unlockAchievement('merge_69');
        if (payload.value === 91 && payload.tier === 0) unlockAchievement('merge_91');
        if (payload.value === 9 && payload.from?.includes(91) && payload.from?.includes(1)) unlockAchievement('split_91_to_9');
        if ([91, 78, 69].includes(payload.value) && payload.tier === 1) unlockAchievement(`merge_${payload.value}_t1`);
        if ([91, 78, 69].includes(payload.value) && payload.tier === 2) unlockAchievement(`merge_${payload.value}_t2`);
      } else if (type === 'vanish') {
        stats.vanishCount += 1;
        if (payload.values?.includes(9)) unlockAchievement('vanish_9');
      } else if (type === 'boardCheck') {
        if (hasHorizontalPattern(board, WIN_PATTERN, 0)) unlockAchievement('row_trio_t0');
        if (hasHorizontalPattern(board, WIN_PATTERN, 1)) unlockAchievement('row_trio_t1');
        if (hasHorizontalPattern(board, WIN_PATTERN, 2)) unlockAchievement('row_trio_t2');
        // 91、78、13 同排即可，不限阶级。
        for (let t = 0; t <= MAX_TIER; t++) {
          if (hasHorizontalPattern(board, RIDDLE_PATTERN, t)) {
            unlockAchievement('row_917813');
            break;
          }
        }
      }
      markAchievementStateDirty();
    }

    function countBoardEmpties(boardData = board) {
      let count = 0;
      for (let r = 0; r < GRID_SIZE; r++) for (let c = 0; c < GRID_SIZE; c++) if (!boardData[r][c]) count += 1;
      return count;
    }

    function recordInvalidAchievementInput() {
      runAchievementState.invalidStreak += 1;
      if (runAchievementState.invalidStreak >= 5) unlockAchievement('invalid_5');
    }

    function recordValidDirection(direction) {
      runAchievementState.invalidStreak = 0;
      const sequence = ['up', 'left', 'down', 'right'];
      const expected = sequence[runAchievementState.cubeProgress];
      if (direction === expected) runAchievementState.cubeProgress += 1;
      else runAchievementState.cubeProgress = direction === sequence[0] ? 1 : 0;
      if (runAchievementState.cubeProgress === sequence.length) {
        unlockAchievement('cube_sequence');
        runAchievementState.cubeProgress = 0;
      }
    }

    function evaluateMoveAchievements(direction, events, emptyBefore, emptyAfter) {
      const mergeEvents = events.filter((event) => event.type === 'merge');
      const vanishEvents = events.filter((event) => event.type === 'vanish');
      recordValidDirection(direction);
      if (emptyBefore === 0 && emptyAfter >= 3) unlockAchievement('escape_full_board');
      if (mergeEvents.length >= 2) unlockAchievement('multi_merge_move');
      if (mergeEvents.length && vanishEvents.length) unlockAchievement('merge_and_vanish');
      if (vanishEvents.length >= 3) unlockAchievement('triple_vanish_move');

      runAchievementState.mergeMoveStreak = mergeEvents.length ? runAchievementState.mergeMoveStreak + 1 : 0;
      if (runAchievementState.mergeMoveStreak >= 3) unlockAchievement('merge_streak_3');

      if (mergeEvents.some((event) => event.fromValues?.includes(9))) runAchievementState.nineMerged = true;
      if (vanishEvents.some((event) => event.values?.includes(9))) runAchievementState.nineVanished = true;
      if (runAchievementState.nineMerged && runAchievementState.nineVanished) unlockAchievement('two_fates');
      if (achievementState.stats.vanishCount >= 100) unlockAchievement('vanish_100');
    }

    function openAchievementsModal() { renderAchievementList(); ModalManager.show(achievementsModal, achievementsBtn); }
    function closeAchievementsModal() { ModalManager.hide(achievementsModal); }


    function createDefaultEasterEggState() {
      return { completed: [], completedAt: {}, records: {} };
    }

    function normalizeEasterEggState(raw) {
      const base = createDefaultEasterEggState();
      const completed = Array.isArray(raw) ? raw : (Array.isArray(raw?.completed) ? raw.completed : []);
      base.completed = [...new Set(completed.map(String).filter((id) => EASTER_EGG_IDS.has(id)))];
      if (raw && !Array.isArray(raw) && typeof raw === 'object' && raw.completedAt && typeof raw.completedAt === 'object') {
        for (const id of base.completed) {
          const timestamp = Number(raw.completedAt[id]);
          if (Number.isFinite(timestamp) && timestamp > 0) base.completedAt[id] = timestamp;
        }
      }
      if (raw && !Array.isArray(raw) && typeof raw === 'object' && raw.records && typeof raw.records === 'object') {
        for (const id of base.completed) {
          const record = raw.records[id];
          if (!record || typeof record !== 'object') continue;
          base.records[id] = {
            time: Math.max(0, Math.floor(Number(record.time) || 0)),
            moves: Math.max(0, Math.floor(Number(record.moves) || 0)),
            completedAt: Number(record.completedAt) > 0 ? Number(record.completedAt) : (base.completedAt[id] || 0)
          };
        }
      }
      return base;
    }

    function mergeEasterEggStates(...sources) {
      const merged = createDefaultEasterEggState();
      for (const source of sources) {
        const state = normalizeEasterEggState(source);
        for (const id of state.completed) {
          if (!merged.completed.includes(id)) merged.completed.push(id);
          const timestamp = Number(state.completedAt[id]) || 0;
          const current = Number(merged.completedAt[id]) || 0;
          if (timestamp && (!current || timestamp < current)) merged.completedAt[id] = timestamp;
          if (state.records[id]) {
            const record = state.records[id];
            const currentRecord = merged.records[id];
            if (!currentRecord || (record.completedAt && (!currentRecord.completedAt || record.completedAt < currentRecord.completedAt))) {
              merged.records[id] = { ...record };
            }
          }
        }
      }
      merged.completed.sort((a, b) => [...EASTER_EGG_IDS].indexOf(a) - [...EASTER_EGG_IDS].indexOf(b));
      return merged;
    }

    function loadPermanentEasterEggState() {
      try {
        const raw = localStorage.getItem(EASTER_EGG_STORAGE_KEY);
        return raw === null ? null : normalizeEasterEggState(JSON.parse(raw));
      } catch (error) {
        console.warn('读取永久彩蛋记录失败', error);
        return null;
      }
    }

    let achievementBatchDepth = 0;
    let achievementStateDirty = false;
    let achievementUiDirty = false;

    function refreshAchievementUIIfVisible() {
      if (achievementsModal?.classList.contains('active')) renderAchievementList();
    }

    function markAchievementStateDirty({ ui = false } = {}) {
      achievementStateDirty = true;
      if (ui) achievementUiDirty = true;
    }

    function flushAchievementState() {
      if (!achievementStateDirty) return false;
      syncGameState();
      savePermanentAchievementState();
      if (achievementUiDirty) refreshAchievementUIIfVisible();
      achievementStateDirty = false;
      achievementUiDirty = false;
      return true;
    }

    function beginAchievementBatch() {
      achievementBatchDepth += 1;
    }

    function endAchievementBatch() {
      achievementBatchDepth = Math.max(0, achievementBatchDepth - 1);
      if (achievementBatchDepth === 0) flushAchievementState();
    }

    function savePermanentEasterEggState() {
      if (gameResetting) return false;
      try {
        localStorage.setItem(EASTER_EGG_STORAGE_KEY, JSON.stringify(easterEggState));
        return true;
      } catch (error) {
        console.warn('保存永久彩蛋记录失败', error);
        return false;
      }
    }

    function easterEggText(id, field) {
      return t(`easterEggs.${id}.${field}`);
    }

    function renderEasterEggsAccess() {
      const visible = easterEggState.completed.length > 0;
      if (easterEggsBtn) easterEggsBtn.hidden = !visible;
      document.body.classList.toggle('easter-eggs-visible', visible);
    }

    function renderEasterEggList() {
      if (!easterEggsList || !easterEggsSummary) return;
      const completed = new Set(easterEggState.completed);
      const count = completed.size;
      easterEggsSummary.textContent = t(count === EASTER_EGG_TOTAL ? 'easterEggsSummaryComplete' : 'easterEggsSummaryUnknown').replace('{count}', String(count));
      easterEggsList.innerHTML = [...EASTER_EGG_IDS].filter((id) => completed.has(id)).map((id) => {
        const route = EASTER_EGG_ROUTES[id];
        const date = easterEggState.completedAt[id] ? new Date(easterEggState.completedAt[id]).toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 'zh-CN') : '';
        const difficulty = t(`easterEggsDifficulty.${route.difficulty}`);
        const segments = Array.from({ length: 3 }, (_, index) => `<span class="easter-egg-difficulty-segment ${index < route.difficultyLevel ? 'active' : ''}"></span>`).join('');
        return `<article class="easter-egg-item difficulty-${route.difficulty}">
          <div class="easter-egg-item-head"><div class="easter-egg-number">${route.value}</div><div><div class="easter-egg-name">${escapeAnnouncementHtml(easterEggText(id, 'title'))}</div><div class="easter-egg-difficulty">${escapeAnnouncementHtml(difficulty)}</div></div></div>
          <div class="easter-egg-difficulty-bar" aria-label="${escapeAnnouncementHtml(t('easterEggsDifficultyLabel').replace('{difficulty}', difficulty))}">${segments}</div>
          <div class="easter-egg-route"><div><strong>${escapeAnnouncementHtml(t('easterEggsTrigger').replace('{value}', String(route.value)))}</strong></div><div>${escapeAnnouncementHtml(t('easterEggsStage2').replace('{value}', String(route.value)))}</div><div>${escapeAnnouncementHtml(t('easterEggsFinal').replace('{value}', String(route.value)))}</div></div>
          ${date ? `<div class="easter-egg-date">${escapeAnnouncementHtml(t('easterEggsCompletedAt').replace('{date}', date))}</div>` : ''}
        </article>`;
      }).join('');
    }

    function openEasterEggsModal() {
      if (!easterEggsModal || !easterEggState.completed.length) return;
      renderEasterEggList();
      ModalManager.show(easterEggsModal, easterEggsBtn);
    }

    function closeEasterEggsModal() {
      ModalManager.hide(easterEggsModal);
    }

    function completeEasterEgg(id, record = {}) {
      if (!EASTER_EGG_IDS.has(id)) return false;
      if (!easterEggState.completed.includes(id)) {
        easterEggState.completed.push(id);
        easterEggState.completedAt[id] = Date.now();
        easterEggState.records[id] = {
          time: Math.max(0, Math.floor(Number(record.time) || 0)),
          moves: Math.max(0, Math.floor(Number(record.moves) || 0)),
          completedAt: easterEggState.completedAt[id]
        };
        easterEggState = mergeEasterEggStates(easterEggState);
        savePermanentEasterEggState();
      }
      renderEasterEggsAccess();
      renderEasterEggList();
      syncGameState();
      return true;
    }

    function renderStageGoals() {
      const route = easterEggId && EASTER_EGG_ROUTES[easterEggId];
      if (stageGoal1) stageGoal1.textContent = t('stageGoalNormal');
      if (stageGoal2) stageGoal2.textContent = route ? t('stageGoalEasterStage2').replace('{value}', String(route.value)) : t('stageGoalTier2');
      if (stageGoal3) stageGoal3.textContent = route ? t('stageGoalEasterFinal').replace('{value}', String(route.value)) : t('stageGoalTier3');
    }

    function renderEasterEggDiscovery(id) {
      const route = EASTER_EGG_ROUTES[id];
      if (!route) return false;
      const difficulty = t(`easterEggsDifficulty.${route.difficulty}`);
      if (easterEggDiscoveryKicker) easterEggDiscoveryKicker.textContent = t('easterEggDiscoveryKicker');
      if (easterEggDiscoveryTitle) easterEggDiscoveryTitle.textContent = t('easterEggDiscoveryTitle').replace('{value}', String(route.value));
      if (easterEggDiscoverySubtitle) easterEggDiscoverySubtitle.textContent = t('easterEggDiscoverySubtitle').replace('{value}', String(route.value));
      if (easterEggDiscoveryDifficulty) easterEggDiscoveryDifficulty.textContent = t('easterEggDiscoveryDifficulty').replace('{difficulty}', difficulty);
      if (easterEggDiscoveryUnlock) easterEggDiscoveryUnlock.textContent = t('easterEggDiscoveryUnlock').replace('{value}', String(route.value));
      if (easterEggDiscoveryStage2) easterEggDiscoveryStage2.textContent = t('easterEggDiscoveryStage2').replace('{value}', String(route.value));
      if (easterEggDiscoveryFinal) easterEggDiscoveryFinal.textContent = t('easterEggDiscoveryFinal').replace('{value}', String(route.value));
      return true;
    }

    function showEasterEggDiscovery(id) {
      if (!EASTER_EGG_IDS.has(id) || !easterEggDiscoveryModal) return Promise.resolve('continue');
      easterEggDiscoveryId = id;
      easterEggDiscoveryActive = true;
      renderEasterEggDiscovery(id);
      ModalManager.show(easterEggDiscoveryModal, null, { focus: easterEggDiscoveryContinueBtn });
      syncGameState();
      if (autoSaveEnabled) saveToLocalStorage();
      return new Promise((resolve) => { easterEggDiscoveryResolver = resolve; });
    }

    function closeEasterEggDiscovery() {
      if (!easterEggDiscoveryActive) return;
      easterEggDiscoveryActive = false;
      ModalManager.hide(easterEggDiscoveryModal);
      easterEggDiscoveryId = null;
      syncGameState();
      if (autoSaveEnabled) saveToLocalStorage();
      const resolve = easterEggDiscoveryResolver;
      easterEggDiscoveryResolver = null;
      if (resolve) resolve('continue');
    }

    let tileLayer;
    let flashLayer;

    let touchStartX = 0;
    let touchStartY = 0;
    let touchLastY = 0;
    let touchStartTime = 0;
    let touchAxis = 'undecided';
    let isScrollMode = false;
    let touchActive = false;

    const PAUSE_TIP_KEYS = ['pauseTip1', 'pauseTip2', 'pauseTip3', 'pauseTip4'];

    function stopTimer() {
      if (gameTimer !== null) {
        clearInterval(gameTimer);
        gameTimer = null;
      }
    }

    function syncTimerDisplay() {
      const elapsed = currentElapsedSeconds();
      const formatted = formatTime(elapsed);
      maxTileEl.textContent = formatted;
      if (pauseTimeEl) pauseTimeEl.textContent = formatted;
    }

    function startTimer(resetElapsed = false) {
      stopTimer();
      if (resetElapsed) elapsedBeforePause = 0;
      if (resetElapsed) finalElapsedSeconds = null;
      gameStartAt = Date.now();
      syncTimerDisplay();
      if (gameWon) return;
      gameTimer = setInterval(() => {
        if (!gamePaused) {
          syncTimerDisplay();
          if (StageStatistics) StageStatistics.tickActive();
        }
      }, 1000);
    }

    function setPauseVisible(visible, restoreFocus = false) {
      if (!pauseOverlay) return;
      if (visible) ModalManager.show(pauseOverlay, pauseBtn, { focus: resumeBtn });
      else ModalManager.hide(pauseOverlay, { skipFocus: !restoreFocus });
      gameContainer?.classList.toggle('pause-active', visible);
      if (pauseBtn) pauseBtn.textContent = visible ? t('continue') : t('pause');
    }

    function updatePausePanel() {
      if (pauseMovesEl) pauseMovesEl.textContent = String(moves);
      syncTimerDisplay();
      if (pauseTipEl) {
        const tipIndex = (moves + elapsedBeforePause) % PAUSE_TIP_KEYS.length;
        pauseTipEl.textContent = t(PAUSE_TIP_KEYS[tipIndex]);
      }
    }

    function pauseGame() {
      if (gamePaused || gameOver || gameWon || isAnimating || tutorialActive || settlementActive || easterEggDiscoveryActive) return;
      elapsedBeforePause += Math.floor((Date.now() - gameStartAt) / 1000);
      gamePaused = true;
      stopTimer();
      // 通知阶段统计：固化当前已用时间，暂停阶段计时
      if (StageStatistics) StageStatistics.onPause();
      updatePausePanel();
      setPauseVisible(true);
    }

    function resumeGame() {
      if (!gamePaused) return;
      gamePaused = false;
      setPauseVisible(false, true);
      // 通知阶段统计：重置 startAt，恢复阶段计时
      if (StageStatistics) StageStatistics.onResume();
      startTimer(false);
    }

    function togglePause() {
      if (gamePaused) resumeGame();
      else pauseGame();
    }

    function formatTime(totalSeconds) {
      const m = Math.floor(totalSeconds / 60);
      const s = totalSeconds % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function deepClone(value) {
      return value == null ? value : JSON.parse(JSON.stringify(value));
    }

    function encodeUtf8Base64(text) {
      const bytes = new TextEncoder().encode(text);
      let binary = '';
      for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
      return btoa(binary);
    }

    function decodeUtf8Base64(base64) {
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return new TextDecoder().decode(bytes);
    }

    function normalizeSaveString(raw) {
      if (typeof raw !== 'string') return '';
      return raw.trim().replace(/\s+/g, '');
    }

    function getBoardSnapshot() {
      return board.map((row, r) => row.map((id, c) => {
        if (!id) return null;
        const tile = tiles.get(id);
        if (!tile) return null;
        return {
          value: tile.value,
          tier: tile.tier,
          row: r,
          col: c
        };
      }));
    }

    function getGameState({ includeAppearance = true } = {}) {
      const elapsed = currentElapsedSeconds();

      return {
        version: 1,
        board: getBoardSnapshot(),
        stage: gameStage,
        unlockedTier,
        easterEggId,
        easterEggDiscoveryId,
        moves,
        timer: elapsed,
        finalTime: finalElapsedSeconds,
        stageStats: StageStatistics ? deepClone(StageStatistics.exportData()) : (deepClone(gameState?.stageStats) || {}),
        achievements: deepClone(achievementState),
        easterEggs: deepClone(easterEggState),
        settings: {
          autoSave: autoSaveEnabled,
          ...(includeAppearance ? { qualityMode, performanceMode: qualityMode === 0 } : {})
        },
        seed: Number(gameState?.seed) || 0,
        game: {
          over: gameOver,
          won: gameWon
        }
      };
    }

    function syncGameState() {
      gameState = getGameState();
      return gameState;
    }

    function setSettingsStatus(text, type = '') {
      if (!settingsStatus) return;
      settingsStatus.textContent = text || '';
      settingsStatus.style.color = type === 'error' ? '#ffb3b3' : type === 'success' ? '#b7ffd6' : 'rgba(255, 255, 255, 0.75)';
    }

    function setArchiveStatus(text, type = '') {
      if (!archiveStatus) return;
      archiveStatus.textContent = text || '';
      archiveStatus.style.color = type === 'error' ? '#ffb3b3' : type === 'success' ? '#b7ffd6' : 'rgba(255, 255, 255, 0.75)';
    }

    function setAutoSaveEnabled(enabled, persist = true) {
      autoSaveEnabled = !!enabled;
      if (autoSaveToggle) autoSaveToggle.checked = autoSaveEnabled;
      if (persist) {
        try { localStorage.setItem(AUTO_SAVE_STORAGE_KEY, autoSaveEnabled ? '1' : '0'); } catch (_) {}
      }
      syncGameState();
      setSettingsStatus(t(autoSaveEnabled ? 'autoSaveEnabled' : 'autoSaveDisabled'), 'success');
    }






    function qualityModeKey(mode = qualityMode) {
      return mode === 0 ? 'qualityPerformance' : mode === 1 ? 'qualityBalanced' : 'qualityHigh';
    }

    function parseQualityMode(value) {
      if (typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= 2) {
        return value;
      }
      if (typeof value === 'string' && ['0', '1', '2'].includes(value)) {
        return Number(value);
      }
      return null;
    }

    function updateQualityModeUI() {
      if (qualityModeRange) {
        qualityModeRange.value = String(qualityMode);
        qualityModeRange.style.setProperty('--quality-progress', `${(qualityMode / 2) * 100}%`);
      }
      if (qualityModeValue) {
        qualityModeValue.textContent = t(qualityModeKey());
      }
}

    function setQualityMode(mode, persist = true, announce = true) {
      const parsedMode = parseQualityMode(mode);
      qualityMode = parsedMode === null ? 2 : parsedMode;
      performanceMode = qualityMode === 0;
      document.body.classList.toggle('performance-mode', qualityMode === 0);
      document.body.classList.toggle('balanced-mode', qualityMode === 1);
      if (qualityMode !== 0) {
        initParticles?.();
        initMouseLight?.();
      }
      updateQualityModeUI();
      if (persist) {
        try {
          localStorage.setItem(QUALITY_MODE_STORAGE_KEY, String(qualityMode));
          localStorage.setItem(PERFORMANCE_MODE_STORAGE_KEY, qualityMode === 0 ? '1' : '0');
        } catch (_) {}
      }
      syncGameState();
      if (announce) {
        setSettingsStatus(t('qualityModeChanged').replace('{mode}', t(qualityModeKey())), 'success');
      }
    }

    function setPerformanceMode(enabled, persist = true, announce = true) {
      setQualityMode(enabled ? 0 : 2, persist, announce);
    }

    function loadPersistedQualityModeSetting() {
      try {
        const quality = localStorage.getItem(QUALITY_MODE_STORAGE_KEY);
        if (quality !== null && ['0', '1', '2'].includes(quality)) {
          return { exists: true, value: Number(quality) };
        }
        const stored = localStorage.getItem(PERFORMANCE_MODE_STORAGE_KEY);
        if (stored === '1') return { exists: true, value: 0 };
        if (stored === '0') return { exists: true, value: 2 };
      } catch (_) {}
      return { exists: false, value: 2 };
    }

    function isPerfHintShown() {
      try { return localStorage.getItem(PERF_HINT_SHOWN_KEY) === '1'; } catch (_) { return false; }
    }

    function markPerfHintShown() {
      try { localStorage.setItem(PERF_HINT_SHOWN_KEY, '1'); } catch (_) {}
    }

    function clearPerfHintShown() {
      try { localStorage.removeItem(PERF_HINT_SHOWN_KEY); } catch (_) {}
    }

    function hidePerfHint() {
      if (!perfHint) return;
      perfHint.classList.remove('visible');
      ModalManager.hide(perfHint);
      if (perfHintAutoHideTimer) {
        clearTimeout(perfHintAutoHideTimer);
        perfHintAutoHideTimer = null;
      }
    }

    // 棋盘并非视口居中（左侧还有阶段统计卡片），浮动面板需对齐 .game-container 的中轴。
    function alignToBoardCenter(el) {
      if (!el || !gameContainer) return;
      const rect = gameContainer.getBoundingClientRect();
      if (!rect.width) return;

      const center = rect.left + rect.width / 2;
      const half = el.offsetWidth / 2;
      const margin = 14;
      const minLeft = half + margin;
      const maxLeft = window.innerWidth - half - margin;
      // 视口比面板还窄时无法两侧留白，退回视口居中。
      const left = maxLeft < minLeft ? window.innerWidth / 2 : Math.max(minLeft, Math.min(center, maxLeft));
      el.style.left = `${left}px`;
    }

    function syncPerfHintPosition() {
      alignToBoardCenter(perfHint);
    }
    function showPerfHint(fps, persist = true) {
      if (!perfHint) return;
      // 免责声明期间不弹，否则会在声明背后透出一块模糊色块。
      if (isStartupDisclaimerOpen()) return;
      // 无论玩家如何选择，提醒都只出现一次。
      if (persist) markPerfHintShown();
      const desc = document.getElementById('perfHintDesc');
      if (desc) desc.textContent = t('perfHintDescDynamic').replace('{fps}', fps);
      syncPerfHintPosition();
      perfHint.classList.add('visible');
      ModalManager.show(perfHint, null, { focus: perfHintAcceptBtn });
      if (perfHintAutoHideTimer) clearTimeout(perfHintAutoHideTimer);
      perfHintAutoHideTimer = setTimeout(hidePerfHint, PERF_HINT_AUTO_HIDE);
    }

    function bindPerfHintUI() {
      if (perfHintAcceptBtn) {
        perfHintAcceptBtn.addEventListener('click', () => {
          setQualityMode(0, true);
          if (autoSaveEnabled) saveToLocalStorage();
          hidePerfHint();
        });
      }
      if (perfHintDismissBtn) perfHintDismissBtn.addEventListener('click', hidePerfHint);

    }

    // 启动后采样一段时间的平均帧率，过低时提示开启性能模式。
    function monitorFrameRate() {
      if (performanceMode || isPerfHintShown()) return;

      setTimeout(() => {
        // 指引卡片和性能提示都停在底部，指引期间不检测，结束后再重新采样。
        if (performanceMode || isPerfHintShown() || tutorialActive) return;

        let frames = 0;
        let start = 0;
        let hiddenDuringSample = document.hidden;

        const sample = (now) => {
          if (document.hidden) hiddenDuringSample = true;
          if (!start) start = now;
          frames += 1;
          const elapsed = now - start;
          if (elapsed < PERF_SAMPLE_DURATION) {
            requestAnimationFrame(sample);
            return;
          }
          // 页面切到后台时 rAF 会被节流，采样结果不可信，直接放弃本次检测。
          if (hiddenDuringSample || performanceMode || isPerfHintShown() || tutorialActive) return;
          const fps = Math.round((frames * 1000) / elapsed);
          if (fps > 0 && fps < PERF_FPS_THRESHOLD) showPerfHint(fps);
        };

        requestAnimationFrame(sample);
      }, PERF_SAMPLE_DELAY);
    }



    // ── 新手指引 ──────────────────────────────────
    function isTutorialSeen() {
      try { return localStorage.getItem(TUTORIAL_SEEN_KEY) === '1'; } catch (_) { return false; }
    }

    function markTutorialSeen() {
      try { localStorage.setItem(TUTORIAL_SEEN_KEY, '1'); } catch (_) {}
    }

    function clearTutorialSeen() {
      try { localStorage.removeItem(TUTORIAL_SEEN_KEY); } catch (_) {}
    }

    function tutorialSetBoard(spec) {
      clearBoardDataOnly();
      if (!Array.isArray(spec)) return;
      for (let r = 0; r < GRID_SIZE; r++) {
        const row = Array.isArray(spec[r]) ? spec[r] : [];
        for (let c = 0; c < GRID_SIZE; c++) {
          const value = Number(row[c]) || 0;
          if (!ALLOWED_VALUES.has(value)) continue;
          const tile = buildTile(r, c, value, 0);
          board[r][c] = tile.id;
        }
      }
      updateGridAccessibility();
    }

    function tutorialCurrentStep() {
      return TUTORIAL_STEPS[tutorialStepIndex] || null;
    }

    function renderTutorialCard() {
      const step = tutorialCurrentStep();
      if (!step || !tutorialCard) return;

      const total = TUTORIAL_STEPS.length;
      if (tutorialStepEl) tutorialStepEl.textContent = `${tutorialStepIndex + 1} / ${total}`;
      if (tutorialTitleEl) tutorialTitleEl.textContent = tutorialStepText(tutorialStepIndex, 'title');
      if (tutorialTipEl) tutorialTipEl.textContent = tutorialStepText(tutorialStepIndex, 'tip');
      if (tutorialProgressBar) tutorialProgressBar.style.width = `${((tutorialStepIndex + 1) / total) * 100}%`;

      const arrowInfo = TUTORIAL_GESTURE_ARROWS[step.allow];
      if (tutorialGesture) tutorialGesture.hidden = !arrowInfo;
      if (arrowInfo) {
        if (tutorialArrow) {
          tutorialArrow.textContent = arrowInfo.arrow;
          tutorialArrow.style.setProperty('--arrow-dx', arrowInfo.dx);
          tutorialArrow.style.setProperty('--arrow-dy', arrowInfo.dy);
        }
        if (tutorialGestureText) tutorialGestureText.textContent = tutorialGestureLabel(step.allow);
      }

      const isLast = tutorialStepIndex === total - 1;
      if (tutorialNextBtn) {
        tutorialNextBtn.hidden = !step.info;
        tutorialNextBtn.textContent = isLast ? t('tutorialStart') : t('tutorialNext');
      }
      if (tutorialSkipBtn) tutorialSkipBtn.hidden = !!step.info;

      alignToBoardCenter(tutorialCard);
    }

    function applyTutorialStep() {
      const step = tutorialCurrentStep();
      if (!step) return;
      if (step.board) tutorialSetBoard(step.board);
      renderTutorialCard();
    }

    function tutorialAllows(direction) {
      const step = tutorialCurrentStep();
      return !!step && step.allow === direction;
    }

    function tutorialNudge() {
      if (!tutorialCard) return;
      tutorialCard.classList.remove('nudge');
      void tutorialCard.offsetWidth;
      tutorialCard.classList.add('nudge');
      tutorialCard.addEventListener('animationend', () => tutorialCard.classList.remove('nudge'), { once: true });
    }

    async function advanceTutorial() {
      if (!tutorialActive || tutorialAdvancing) return;
      tutorialAdvancing = true;
      try {
        const finished = tutorialCurrentStep();
        // 凑出第一排时借用通关光效收个尾，但不触发真正的阶段结算。
        if (finished?.celebrate) await playVictoryAura(1200);

        if (tutorialStepIndex >= TUTORIAL_STEPS.length - 1) {
          endTutorial();
          return;
        }
        // 让玩家先看清上一步的结果，再切换到下一步的棋盘。
        await waitAnimation(finished?.celebrate ? 240 : 720);
        if (!tutorialActive) return;
        tutorialStepIndex += 1;
        applyTutorialStep();
      } finally {
        tutorialAdvancing = false;
      }
    }

    function startTutorial() {
      if (tutorialActive || isAnimating) return;
      // 免责声明未处理完时绝不抢占，否则教学卡片会压在法律声明上。
      if (isStartupDisclaimerOpen()) return;

      // 用存档机制快照当前进度，指引结束后原样还原，计时与统计都不受影响。
      try { tutorialSnapshot = serializeGameState(); } catch (_) { tutorialSnapshot = null; }

      tutorialActive = true;
      tutorialStepIndex = 0;
      tutorialAdvancing = false;
      document.body.classList.add('tutorial-running');

      stopTimer();
      gamePaused = false;
      setPauseVisible(false);
      if (pauseBtn) pauseBtn.disabled = true;
      gameOver = false;
      gameWon = false;
      finalElapsedSeconds = null;
      gameStage = 0;
      unlockedTier = 0;
      easterEggId = null;
      easterEggDiscoveryId = null;
      clearMessage();

      applyTutorialStep();
      if (tutorialCard) {
        tutorialCard.classList.add('visible');
        tutorialCard.setAttribute('aria-hidden', 'false');
      }
    }

    function endTutorial() {
      if (!tutorialActive) return;

      tutorialActive = false;
      tutorialAdvancing = false;
      markTutorialSeen();
      document.body.classList.remove('tutorial-running');
      if (pauseBtn) pauseBtn.disabled = false;
      if (tutorialCard) {
        tutorialCard.classList.remove('visible');
        tutorialCard.setAttribute('aria-hidden', 'true');
      }

      // 还原进入指引前的棋盘、计时与阶段统计；快照缺失时退回新开一局。
      let restored = false;
      if (tutorialSnapshot) {
        try {
          applyGameState(parseGameStateSave(tutorialSnapshot));
          restored = true;
        } catch (error) {
          console.warn('新手指引结束后还原进度失败', error);
        }
      }
      tutorialSnapshot = null;
      if (!restored) newGame();
      else persistIfNeeded();

      monitorFrameRate();
    }

    function bindTutorialUI() {
      if (tutorialBtn) tutorialBtn.addEventListener('click', startTutorial);
      if (tutorialSkipBtn) tutorialSkipBtn.addEventListener('click', endTutorial);
      if (tutorialNextBtn) {
        tutorialNextBtn.addEventListener('click', () => {
          if (tutorialStepIndex >= TUTORIAL_STEPS.length - 1) endTutorial();
          else {
            tutorialStepIndex += 1;
            applyTutorialStep();
          }
        });
      }
    }

    // ── 重置游戏 ──────────────────────────────────
    const RESET_STORAGE_PREFIX = '917869-';

    // 显式列出已知键，再按前缀兜底扫描，避免以后新增键时漏清。
    function collectGameStorageKeys() {
      const keys = new Set([
        SAVE_STORAGE_KEY,
        AUTO_SAVE_STORAGE_KEY,
        PERFORMANCE_MODE_STORAGE_KEY,
        QUALITY_MODE_STORAGE_KEY,
        ACHIEVEMENT_STORAGE_KEY,
        PERF_HINT_SHOWN_KEY,
        TUTORIAL_SEEN_KEY,
        ANNOUNCEMENT_READ_KEY,
        LEADERBOARD_STORAGE_KEY,
        DISCLAIMER_SEEN_KEY
      ]);
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith(RESET_STORAGE_PREFIX)) keys.add(key);
        }
      } catch (_) {}
      return [...keys];
    }

    function openResetConfirm() {
      if (!resetConfirmModal) return;
      ModalManager.show(resetConfirmModal, resetGameBtn, { focus: cancelResetGameBtn });
    }

    function closeResetConfirm() {
      if (!resetConfirmModal) return;
      ModalManager.hide(resetConfirmModal);
    }

    function performGameReset() {
      // 先上锁并关掉自动保存，防止清除过程中又有数据被写回去。
      gameResetting = true;
      autoSaveEnabled = false;
      stopTimer();

      let failed = 0;
      for (const key of collectGameStorageKeys()) {
        try { localStorage.removeItem(key); } catch (_) { failed += 1; }
      }

      if (failed) {
        gameResetting = false;
        autoSaveEnabled = loadPersistedAutoSaveSetting();
        closeResetConfirm();
        setSettingsStatus(t('resetPartialFail'), 'error');
        return;
      }

      // 重新载入是最可靠的还原方式：内存状态、UI 和一次性流程都会重新初始化。
      location.reload();
    }

    function bindResetGameUI() {
      if (resetGameBtn) resetGameBtn.addEventListener('click', openResetConfirm);
      if (cancelResetGameBtn) cancelResetGameBtn.addEventListener('click', closeResetConfirm);
      if (confirmResetGameBtn) confirmResetGameBtn.addEventListener('click', performGameReset);
      if (resetConfirmModal) {
        resetConfirmModal.addEventListener('click', (e) => {
          if (e.target === resetConfirmModal) closeResetConfirm();
        });
      }
    }



    function refreshSettingsUI() {
      updateQualityModeUI();
      if (autoSaveToggle) autoSaveToggle.checked = autoSaveEnabled;
      if (saveTextarea && settingsModal?.classList.contains('active')) {
        saveTextarea.value = serializeGameState();
      }
    }

    function serializeState(state) {
      return SAVE_MAGIC + encodeUtf8Base64(JSON.stringify(state));
    }

    function serializeGameState({ includeAppearance = true } = {}) {
      const state = getGameState({ includeAppearance });
      if (includeAppearance) gameState = state;
      return serializeState(state);
    }

    function parseGameStateSave(saveText) {
      const normalized = normalizeSaveString(saveText);
      if (!normalized.startsWith(SAVE_MAGIC)) throw new Error(t('archiveFormatError'));
      const payload = normalized.slice(SAVE_MAGIC.length);
      const json = decodeUtf8Base64(payload);
      const parsed = JSON.parse(json);
      if (!parsed || typeof parsed !== 'object') throw new Error(t('archiveContentInvalid'));
      return parsed;
    }

    function sanitizeGameState(raw) {
      if (!raw || typeof raw !== 'object') throw new Error(t('archiveContentInvalid'));
      if (Number(raw.version) !== 1) throw new Error(`${t('unsupportedVersion')}: ${raw.version}`);

      const sanitizedBoard = Array.from({ length: GRID_SIZE }, () => Array.from({ length: GRID_SIZE }, () => null));
      const srcBoard = Array.isArray(raw.board) ? raw.board : [];

      for (let r = 0; r < GRID_SIZE; r++) {
        const srcRow = Array.isArray(srcBoard[r]) ? srcBoard[r] : [];
        for (let c = 0; c < GRID_SIZE; c++) {
          const cell = srcRow[c];
          if (cell === null || cell === undefined) continue;
          if (typeof cell === 'number' && ALLOWED_VALUES.has(cell)) {
            sanitizedBoard[r][c] = { value: cell, tier: 0 };
            continue;
          }
          if (typeof cell === 'object' && ALLOWED_VALUES.has(Number(cell.value))) {
            const tier = Math.max(0, Math.min(MAX_TIER, Number(cell.tier) || 0));
            sanitizedBoard[r][c] = { value: Number(cell.value), tier };
          }
        }
      }

      return {
        version: 1,
        board: sanitizedBoard,
        stage: Math.max(0, Math.min(2, Number(raw.stage) || 0)),
        unlockedTier: Math.max(0, Math.min(2, Number(raw.unlockedTier) || 0)),
        easterEggId: EASTER_EGG_IDS.has(String(raw.easterEggId)) ? String(raw.easterEggId) : null,
        easterEggDiscoveryId: EASTER_EGG_IDS.has(String(raw.easterEggDiscoveryId)) ? String(raw.easterEggDiscoveryId) : null,
        moves: Math.max(0, Number(raw.moves) || 0),
        timer: Math.max(0, Number(raw.timer) || 0),
        finalTime: raw.finalTime !== null && raw.finalTime !== undefined && Number.isFinite(Number(raw.finalTime))
          ? Math.max(0, Number(raw.finalTime))
          : null,
        stageStats: (raw.stageStats && typeof raw.stageStats === 'object' && !Array.isArray(raw.stageStats)) ? raw.stageStats : {},
        achievements: normalizeAchievementState(raw.achievements),
        easterEggs: normalizeEasterEggState(raw.easterEggs),
        settings: sanitizeSaveSettings(raw.settings),
        seed: Number(raw.seed) || 0,
        game: (raw.game && typeof raw.game === 'object') ? raw.game : {}
      };
    }

    function sanitizeSaveSettings(raw) {
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
      const settings = {};
      if (typeof raw.autoSave === 'boolean') settings.autoSave = raw.autoSave;

      const qualityModeValue = parseQualityMode(raw.qualityMode);
      if (qualityModeValue !== null) settings.qualityMode = qualityModeValue;
      if (typeof raw.performanceMode === 'boolean') settings.performanceMode = raw.performanceMode;


      return settings;
    }

    function applySavedSettings(settings, persist = false) {
      const savedSettings = settings && typeof settings === 'object' ? settings : {};
      if (typeof savedSettings.autoSave === 'boolean') {
        setAutoSaveEnabled(savedSettings.autoSave, persist);
      }

      const savedQualityMode = parseQualityMode(savedSettings.qualityMode);
      if (savedQualityMode !== null) {
        setQualityMode(savedQualityMode, persist, false);
      } else if (typeof savedSettings.performanceMode === 'boolean') {
        setPerformanceMode(savedSettings.performanceMode, persist, false);
      }

    }

    function prepareImportedState(state) {
      const settings = { ...(state.settings || {}) };
      if (typeof settings.autoSave !== 'boolean') settings.autoSave = autoSaveEnabled;
      if (parseQualityMode(settings.qualityMode) === null) {
        if (typeof settings.performanceMode === 'boolean') {
          settings.qualityMode = settings.performanceMode ? 0 : 2;
        } else {
          settings.qualityMode = qualityMode;
          settings.performanceMode = qualityMode === 0;
        }
      }
      return { ...state, settings };
    }

    function applyGameState(rawState) {
      const state = sanitizeGameState(rawState);

      clearMessage();
      initBoard();
      resetSpawnHistory();
      gameStage = state.stage;
      unlockedTier = state.unlockedTier;
      easterEggId = state.easterEggId;
      easterEggDiscoveryId = state.easterEggDiscoveryId;
      moves = state.moves;
      gameOver = !!state.game.over;
      gameWon = !!state.game.won;
      finalElapsedSeconds = state.finalTime;
      hideSettlement();
      runAchievementState = createDefaultRunAchievementState();
      achievementState = mergeAchievementStates(state.achievements, loadPermanentAchievementState());
      savePermanentAchievementState();
      refreshAchievementUIIfVisible();
      easterEggState = mergeEasterEggStates(state.easterEggs, loadPermanentEasterEggState());
      savePermanentEasterEggState();
      renderEasterEggsAccess();
      renderEasterEggList();
      renderStageGoals();
      if (!easterEggDiscoveryId) {
        easterEggDiscoveryActive = false;
        ModalManager.hide(easterEggDiscoveryModal, { skipFocus: true });
      }

      clearBoardDataOnly();
      for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
          const cell = state.board[r][c];
          if (!cell) continue;
          const tile = buildTile(r, c, cell.value, cell.tier);
          board[r][c] = tile.id;
        }
      }
      updateGridAccessibility();

      movesEl.textContent = String(moves);
      elapsedBeforePause = state.timer || 0;
      startTimer(false);
      syncTimerDisplay();
      // 恢复阶段统计数据（在 moves 已经就位之后调用）
      if (StageStatistics) {
        if (state.stageStats && typeof state.stageStats === 'object' && Object.keys(state.stageStats).length > 0) {
          StageStatistics.importData(state.stageStats);
        } else {
          StageStatistics.syncFromGameState();
        }
        // 兼容结算卡片打开期间保存的“下一阶段待开始”状态。
        StageStatistics.syncFromGameState();
      }
      syncGameState();
      return state;
    }

    function saveToLocalStorage() {
      if (!autoSaveEnabled) return false;
      // 指引使用的是脚本棋盘，绝不能覆盖玩家真实存档。
      if (tutorialActive) return false;
      // 重置进行中：任何写入都会让刚清掉的数据复活。
      if (gameResetting) return false;
      try {
        localStorage.setItem(SAVE_STORAGE_KEY, serializeGameState());
        return true;
      } catch (error) {
        console.warn('自动保存失败', error);
        return false;
      }
    }

    function exportSave() {
      const includeAppearance = exportQualityModeToggle?.checked !== false;
      const save = serializeGameState({ includeAppearance });
      if (saveTextarea) saveTextarea.value = save;
      return save;
    }

    async function copyTextToClipboard(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      if (saveTextarea) {
        saveTextarea.focus();
        saveTextarea.select();
        const ok = document.execCommand('copy');
        saveTextarea.setSelectionRange(0, 0);
        return ok;
      }
      return false;
    }

    function openSettingsModal() {
      if (!settingsModal) return;
      ModalManager.show(settingsModal, settingsBtn);
      if (saveTextarea) saveTextarea.value = serializeGameState();
      setSettingsStatus('');
      setArchiveStatus('');
    }

    function closeSettingsModal() {
      if (!settingsModal) return;
      ModalManager.hide(settingsModal);
    }

    async function importSaveFromText(text) {
      const parsed = parseGameStateSave(text);
      const importedState = prepareImportedState(sanitizeGameState(parsed));
      const rollbackSave = serializeGameState();
      let previousStoredSave = null;

      try {
        previousStoredSave = localStorage.getItem(SAVE_STORAGE_KEY);
        localStorage.setItem(SAVE_STORAGE_KEY, serializeState(importedState));
      } catch (error) {
        throw new Error(t('importFailed'));
      }

      try {
        const state = applyGameState(importedState);
        finalElapsedSeconds = state.finalTime;
        applySavedSettings(state.settings, true);
        syncGameState();
        localStorage.setItem(SAVE_STORAGE_KEY, serializeGameState());
        refreshSettingsUI();
        setArchiveStatus(t('importSuccess'), 'success');
        return state;
      } catch (error) {
        try {
          if (previousStoredSave === null) localStorage.removeItem(SAVE_STORAGE_KEY);
          else localStorage.setItem(SAVE_STORAGE_KEY, previousStoredSave);
          const rollbackState = parseGameStateSave(rollbackSave);
          applyGameState(rollbackState);
          applySavedSettings(rollbackState.settings, false);
        } catch (rollbackError) {
          console.warn('导入存档回滚失败', rollbackError);
        }
        throw error;
      }
    }

    function loadPersistedAutoSaveSetting() {
      try {
        const stored = localStorage.getItem(AUTO_SAVE_STORAGE_KEY);
        if (stored === '0') return false;
        if (stored === '1') return true;
      } catch (_) {}
      return true;
    }

    function loadSavedGameFromStorage() {
      try {
        const raw = localStorage.getItem(SAVE_STORAGE_KEY);
        if (!raw) return false;
        const parsed = parseGameStateSave(raw);
        const state = applyGameState(parsed);
        finalElapsedSeconds = state.finalTime ?? finalElapsedSeconds;
        applySavedSettings(state.settings, false);
        refreshSettingsUI();
        setSettingsStatus(t('loadSaveSuccess'), 'success');
        return true;
      } catch (error) {
        console.warn('读取本地存档失败', error);
        return false;
      }
    }

    function bindSaveSystemUI() {
      if (settingsBtn) settingsBtn.addEventListener('click', openSettingsModal);
      if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', closeSettingsModal);
      if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
          if (e.target === settingsModal) closeSettingsModal();
        });
      }
      if (announcementsBtn) announcementsBtn.addEventListener('click', openAnnouncementsModal);
      if (closeAnnouncementsBtn) closeAnnouncementsBtn.addEventListener('click', closeAnnouncementsModal);
      if (announcementsModal) announcementsModal.addEventListener('click', (e) => { if (e.target === announcementsModal) closeAnnouncementsModal(); });
      if (closeAnnouncementDetailBtn) closeAnnouncementDetailBtn.addEventListener('click', closeAnnouncementDetail);
      if (announcementDetailModal) announcementDetailModal.addEventListener('click', (e) => { if (e.target === announcementDetailModal) closeAnnouncementDetail(); });
      if (achievementsBtn) achievementsBtn.addEventListener('click', openAchievementsModal);
      if (closeAchievementsBtn) closeAchievementsBtn.addEventListener('click', closeAchievementsModal);
      if (achievementsModal) achievementsModal.addEventListener('click', (e) => { if (e.target === achievementsModal) closeAchievementsModal(); });
      if (easterEggsBtn) easterEggsBtn.addEventListener('click', openEasterEggsModal);
      if (closeEasterEggsBtn) closeEasterEggsBtn.addEventListener('click', closeEasterEggsModal);
      if (easterEggsModal) easterEggsModal.addEventListener('click', (e) => { if (e.target === easterEggsModal) closeEasterEggsModal(); });
      if (easterEggDiscoveryContinueBtn) easterEggDiscoveryContinueBtn.addEventListener('click', closeEasterEggDiscovery);
      if (leaderboardBtn) leaderboardBtn.addEventListener('click', Leaderboard.open);
      if (closeLeaderboardBtn) closeLeaderboardBtn.addEventListener('click', Leaderboard.close);
      if (leaderboardModal) leaderboardModal.addEventListener('click', (e) => { if (e.target === leaderboardModal) Leaderboard.close(); });
      document.querySelectorAll('[data-leaderboard-stage]').forEach((button) => button.addEventListener('click', () => Leaderboard.select(button.dataset.leaderboardStage)));
      document.querySelectorAll('[data-leaderboard-metric]').forEach((button) => button.addEventListener('click', () => Leaderboard.select(undefined, button.dataset.leaderboardMetric)));
      if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
      updateLanguageButtons();

      if (autoSaveToggle) {
        autoSaveToggle.addEventListener('change', () => {
          setAutoSaveEnabled(autoSaveToggle.checked, true);
          if (autoSaveEnabled) saveToLocalStorage();
        });
      }

      if (qualityModeRange) {
        qualityModeRange.addEventListener('input', () => {
          setQualityMode(Number(qualityModeRange.value), true);
          if (autoSaveEnabled) saveToLocalStorage();
        });
      }


      if (exportSaveBtn) {
        exportSaveBtn.addEventListener('click', async () => {
          try {
            const save = exportSave();
            await copyTextToClipboard(save);
            setArchiveStatus(t('exportSuccess'), 'success');
          } catch (error) {
            console.warn('导出存档失败', error);
            setArchiveStatus(t('exportFailed'), 'error');
          }
        });
      }

      if (importSaveBtn) {
        importSaveBtn.addEventListener('click', async () => {
          try {
            const text = saveTextarea ? saveTextarea.value : '';
            if (!normalizeSaveString(text)) throw new Error(t('pasteArchiveFirst'));
            await importSaveFromText(text);
          } catch (error) {
            console.warn('导入存档失败', error);
            setArchiveStatus(error?.message || t('importFailed'), 'error');
          }
        });
      }
    }

    function persistIfNeeded() {
      syncGameState();
      return saveToLocalStorage();
    }



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



    function isInteractiveKeyTarget(target) {
      return target instanceof Element && !!target.closest(
        'input, textarea, select, button, [contenteditable="true"], [role="button"], [role="slider"]'
      );
    }

    function hasBlockingDialogOpen() {
      return ModalManager.hasOpen();
    }

    function showAnimationError(error, context) {
      console.error(`${context}执行失败`, error);
      showMessage(
        currentLanguage === 'en'
          ? 'An animation error occurred. Please try again.'
          : '动画执行异常，请重试或重新开始游戏。',
        'info'
      );
    }

    async function move(direction) {
      if (gameOver || gameWon || isAnimating || gamePaused || settlementActive || easterEggDiscoveryActive) return;
      // 指引中只放行当前步骤要求的方向，其余输入抖一下卡片提示。
      if (tutorialActive) {
        if (tutorialAdvancing) return;
        if (!tutorialAllows(direction)) {
          tutorialNudge();
          return;
        }
      }

      const emptyBefore = countBoardEmpties();
      const result = simulateMove(direction);
      if (!result.changed) {
        if (!tutorialActive) recordInvalidAchievementInput();
        return;
      }

      isAnimating = true;

      try {
        clearMessage();

        const events = result.events;
        const moveTargets = result.moveTargets;

        await animateMove(moveTargets);
        await waitAnimation(IMPACT_DELAY);

        const vanishIds = [];
        const impactPoints = [];
        const mergeEvents = [];

        for (const ev of events) {
          if (ev.type === 'vanish') {
            vanishIds.push(...ev.ids);
            impactPoints.push(ev.to);
          } else if (ev.type === 'merge') {
            vanishIds.push(...ev.ids);
            impactPoints.push(ev.to);
            mergeEvents.push(ev);
          }
        }

        const upgradeEvents = mergeEvents.filter((ev) => ev.isUpgrade);
        if (upgradeEvents.length) {
          await animateUpgradePreMerge(upgradeEvents);
        }

        await animateVanish(vanishIds, impactPoints);

        board = result.nextBoard;
        clearBoardIds(vanishIds);
        for (const id of [...new Set(vanishIds)]) destroyTile(id);

        const spawned = [];
        for (const ev of mergeEvents) {
          const merged = buildTile(ev.to.row, ev.to.col, ev.value, ev.tier);
          merged.isUpgrade = !!ev.isUpgrade;
          board[ev.to.row][ev.to.col] = merged.id;
          spawned.push(merged);
        }

        await animateSpawn(spawned);

        // 指引接管：不生成随机棋子、不计步、不记成就、不写存档，直接进入下一步。
        if (tutorialActive) {
          // 让快照缺失时 endTutorial() 仍能按原流程启动备用新游戏。
          isAnimating = false;
          await advanceTutorial();
          return;
        }

        const emptyAfterResolution = countBoardEmpties();
        const randomTile = addRandomTile();
        if (randomTile) await animateSpawn([randomTile]);

        beginAchievementBatch();
        try {
          for (const ev of events) {
            if (ev.type === 'merge') emitAchievementEvent('merge', { value: ev.value, tier: ev.tier, from: ev.fromValues });
            else if (ev.type === 'vanish') emitAchievementEvent('vanish', { values: ev.values });
          }

          evaluateMoveAchievements(direction, events, emptyBefore, emptyAfterResolution);

          moves += 1;
          movesEl.textContent = String(moves);
          emitAchievementEvent('move', { direction });
          emitAchievementEvent('boardCheck');
        } finally {
          endAchievementBatch();
        }

        const easterTrigger = detectEasterEggTrigger(board);
        if (easterTrigger) {
          await celebrateEasterEggStart(easterTrigger);
        }

        const stageResult = easterTrigger ? 0 : checkWin(board);
        if (stageResult === 4) {
          await celebrateEasterEggStage2();
          checkGameOver();
        } else if (stageResult === 5) {
          await celebrateEasterEggFinal();
        } else if (stageResult === 1 || stageResult === 2) {
          await celebrateMilestone(stageResult);
          checkGameOver();
        } else if (stageResult === 3) {
          await celebrateAscended();
        } else {
          checkGameOver();
        }

        updateGridAccessibility();

        persistIfNeeded();
      } catch (error) {
        showAnimationError(error, '移动流程');
      } finally {
        isAnimating = false;
      }
    }

    async function newGame() {
      if (isAnimating || tutorialActive || settlementActive || easterEggDiscoveryActive) return;

      isAnimating = true;
      try {
        hideSettlement();
        gamePaused = false;
        elapsedBeforePause = 0;
        finalElapsedSeconds = null;
        resetSpawnHistory();
        setPauseVisible(false);
        stopTimer();

        initBoard();
        moves = 0;
        gameOver = false;
        gameWon = false;
        gameStage = 0;
        unlockedTier = 0;
        easterEggId = null;
        easterEggDiscoveryId = null;
        renderStageGoals();
        runAchievementState = createDefaultRunAchievementState();
        clearMessage();
        StageStatistics.reset();

        startTimer(true);

        const init = [addRandomTile(), addRandomTile(), addRandomTile()].filter(Boolean);
        await animateSpawn(init);

        movesEl.textContent = '0';
        syncTimerDisplay();
        updateGridAccessibility();
        persistIfNeeded();
      } catch (error) {
        showAnimationError(error, '新游戏流程');
      } finally {
        isAnimating = false;
      }
    }

    const DISCLAIMER_SEEN_KEY = '917869-disclaimerSeen';

    async function boot() {
      setLanguage(loadPersistedLanguage(), false);
      registerManagedModals();

      const disclaimerSeen = localStorage.getItem(DISCLAIMER_SEEN_KEY);
      if (!disclaimerSeen) {
        const disclaimerAction = await showStartupDisclaimer();
        if (disclaimerAction === 'exit') return;
        try { localStorage.setItem(DISCLAIMER_SEEN_KEY, '1'); } catch (_) {}
      } else {
        hideStartupDisclaimer();
      }

      const persistedQualityMode = loadPersistedQualityModeSetting();
      setQualityMode(persistedQualityMode.value, false, false);
      initGridVisual();
      autoSaveEnabled = loadPersistedAutoSaveSetting();
      if (autoSaveToggle) autoSaveToggle.checked = autoSaveEnabled;
      bindSaveSystemUI();
      bindSettlementUI();
      bindPerfHintUI();
      bindTutorialUI();
      bindResetGameUI();
      newGameBtn?.addEventListener('click', () => {
        newGame().catch((error) => showAnimationError(error, '新游戏按钮'));
      });
      initBoard();
      gamePaused = false;
      elapsedBeforePause = 0;
      resetSpawnHistory();
      setPauseVisible(false);

      achievementState = mergeAchievementStates(achievementState, loadPermanentAchievementState());
      easterEggState = mergeEasterEggStates(easterEggState, loadPermanentEasterEggState());
      renderEasterEggsAccess();
      renderEasterEggList();
      renderStageGoals();
      updateAnnouncementUnreadBadge();

      const restored = loadSavedGameFromStorage();
      if (!restored) {
        const init = [addRandomTile(), addRandomTile(), addRandomTile()].filter(Boolean);
        await animateSpawn(init);
        startTimer(true);
        moves = 0;
        movesEl.textContent = '0';
        syncTimerDisplay();
        updateGridAccessibility();
        persistIfNeeded();
        StageStatistics.syncFromGameState();
      } else {
        startTimer(false);
        movesEl.textContent = String(moves);
        syncTimerDisplay();
        updateGridAccessibility();
        // applyGameState 已经调用了 importData/syncFromGameState，无需重复
      }

      if (easterEggDiscoveryId) await showEasterEggDiscovery(easterEggDiscoveryId);

      // 首次进入自动播放一次指引；之后只能从 🎓 按钮手动打开。
      if (!isTutorialSeen()) startTutorial();

      monitorFrameRate();
    }

    function resetTouchState() {
      touchActive = false;
      isScrollMode = false;
      touchAxis = 'undecided';
    }

    function onTouchStart(e) {
      if (gamePaused || gameOver || gameWon || isAnimating || settlementActive || e.touches.length !== 1) return;
      if (isStartupDisclaimerOpen()) return;
      const t = e.touches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
      touchLastY = t.clientY;
      touchStartTime = performance.now();
      touchAxis = 'undecided';
      isScrollMode = false;
      touchActive = true;
    }

    function onTouchMove(e) {
      if (gamePaused || !touchActive || gameOver || gameWon || isAnimating || settlementActive || e.touches.length !== 1) return;
      const t = e.touches[0];
      const x = t.clientX;
      const y = t.clientY;
      const dx = x - touchStartX;
      const dy = y - touchStartY;
      const adx = Math.abs(dx);
      const ady = Math.abs(dy);
      const elapsed = performance.now() - touchStartTime;

      if (touchAxis === 'undecided' && (adx > TOUCH_AXIS_THRESHOLD || ady > TOUCH_AXIS_THRESHOLD)) {
        if (adx > ady * TOUCH_AXIS_RATIO) touchAxis = 'horizontal';
        else if (ady > adx * TOUCH_AXIS_RATIO) touchAxis = 'vertical';
      }

      if (!isScrollMode && touchAxis === 'vertical' && elapsed >= LONG_PRESS_SCROLL_DELAY) {
        isScrollMode = true;
      }

      if (isScrollMode) {
        window.scrollBy(0, -(y - touchLastY));
        touchLastY = y;
        e.preventDefault();
        return;
      }

      if (touchAxis === 'horizontal') e.preventDefault();
    }

    function onTouchEnd(e) {
      if (e.changedTouches.length !== 1) return;
      if (!touchActive) {
        resetTouchState();
        return;
      }

      if (gamePaused || gameOver || gameWon || isAnimating || settlementActive || isScrollMode) {
        resetTouchState();
        return;
      }

      const t = e.changedTouches[0];
      const dx = t.clientX - touchStartX;
      const dy = t.clientY - touchStartY;
      if (Math.abs(dx) >= SWIPE_THRESHOLD || Math.abs(dy) >= SWIPE_THRESHOLD) {
        if (Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 'right' : 'left');
        else move(dy > 0 ? 'down' : 'up');
        e.preventDefault();
      }

      resetTouchState();
    }

    function onTouchCancel() { resetTouchState(); }

    function initMouseLight() {
      if (qualityMode === 0 || mouseLightInitialized) return;
      mouseLightInitialized = true;
      let tx = 50, ty = 50, cx = 50, cy = 50, raf = 0;

      const setMouse = (x, y) => {
        if (qualityMode === 0) return;
        tx = Math.max(0, Math.min(100, x));
        ty = Math.max(0, Math.min(100, y));
        gameContainer.style.setProperty('--mouse-intensity', '0.8');
        if (raf) return;

        const loop = () => {
          cx += (tx - cx) * 0.12;
          cy += (ty - cy) * 0.12;
          gameContainer.style.setProperty('--mx-slow-x', `${cx.toFixed(2)}%`);
          gameContainer.style.setProperty('--mx-slow-y', `${cy.toFixed(2)}%`);

          if (Math.abs(tx - cx) < 0.25 && Math.abs(ty - cy) < 0.25) {
            raf = 0;
            return;
          }
          raf = requestAnimationFrame(loop);
        };

        raf = requestAnimationFrame(loop);
      };

      gameContainer.addEventListener('pointermove', (e) => {
        if (qualityMode === 0) return;
        const rect = gameContainer.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMouse(x, y);
      });

      gameContainer.addEventListener('pointerleave', () => {
        gameContainer.style.setProperty('--mouse-intensity', '0');
      });
    }


    function initControls() {
      gridEl.addEventListener('touchstart', onTouchStart, { passive: false });
      gridEl.addEventListener('touchmove', onTouchMove, { passive: false });
      gridEl.addEventListener('touchend', onTouchEnd, { passive: false });
      gridEl.addEventListener('touchcancel', onTouchCancel, { passive: false });

      if (pauseBtn) pauseBtn.addEventListener('click', togglePause);
      if (resumeBtn) resumeBtn.addEventListener('click', resumeGame);

      document.addEventListener('keydown', (e) => {
        if (isAnimating) return;
        if (isInteractiveKeyTarget(e.target) || hasBlockingDialogOpen()) return;
        // initControls 在 boot 等待免责声明期间就已执行，声明未关闭前不接受任何游戏输入。
        if (isStartupDisclaimerOpen()) return;

        if (e.key === ' ' || e.code === 'Space' || e.key === 'p' || e.key === 'P') {
          e.preventDefault();
          togglePause();
          return;
        }

        if (gamePaused || settlementActive) return;

        if (e.key === 'ArrowUp' || e.code === 'KeyW') {
          e.preventDefault();
          move('up');
          return;
        }
        if (e.key === 'ArrowDown' || e.code === 'KeyS') {
          e.preventDefault();
          move('down');
          return;
        }
        if (e.key === 'ArrowLeft' || e.code === 'KeyA') {
          e.preventDefault();
          move('left');
          return;
        }
        if (e.key === 'ArrowRight' || e.code === 'KeyD') {
          e.preventDefault();
          move('right');
          return;
        }
      });

      let resizeRaf = 0;
      const scheduleGridMeasure = () => {
        if (resizeRaf) cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(() => {
          resizeRaf = 0;
          measureCellRects();
          syncPerfHintPosition();
          alignToBoardCenter(tutorialCard);
        });
      };

      window.addEventListener('resize', scheduleGridMeasure, { passive: true });
      if ('ResizeObserver' in window) {
        new ResizeObserver(scheduleGridMeasure).observe(gridEl);
      }

      document.addEventListener('visibilitychange', () => {
        document.body.classList.toggle('effects-paused', document.hidden);
      });
      document.body.classList.toggle('effects-paused', document.hidden);
    }

    // ── StageStatistics 模块 ──────────────────────────────────
    const StageStatistics = (() => {
      const data = {
        stage1: { status: 'pending', moves: 0, time: 0, startAt: 0, startMoves: 0 },
        stage2: { status: 'pending', moves: 0, time: 0, startAt: 0, startMoves: 0 },
        stage3: { status: 'pending', moves: 0, time: 0, startAt: 0, startMoves: 0 }
      };

      const els = {
        item:   [null, document.getElementById('statItem1'),   document.getElementById('statItem2'),   document.getElementById('statItem3')],
        status: [null, document.getElementById('statStatus1'), document.getElementById('statStatus2'), document.getElementById('statStatus3')],
        time:   [null, document.getElementById('statTime1'),   document.getElementById('statTime2'),   document.getElementById('statTime3')],
        moves:  [null, document.getElementById('statMoves1'),  document.getElementById('statMoves2'),  document.getElementById('statMoves3')]
      };

      function fmtTime(s) {
        if (s <= 0 || isNaN(s)) return '--:--';
        const m = Math.floor(s / 60), sec = s % 60;
        return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
      }

      function getElapsed(stageKey) {
        const d = data[stageKey];
        if (d.status !== 'active') return d.time;
        if (d.startAt === 0) return d.time; // 暂停状态：startAt=0，直接返回已固化时间
        return d.time + Math.floor((Date.now() - d.startAt) / 1000);
      }

      function getStageMoves(stageKey) {
        const d = data[stageKey];
        if (d.status === 'pending') return null;
        const current = moves - d.startMoves;
        if (d.status === 'active') return Math.max(0, current);
        return d.moves;
      }

      function renderStage(n) {
        const key = `stage${n}`;
        const d = data[key];
        const statusEl = els.status[n];
        const timeEl = els.time[n];
        const movesEl2 = els.moves[n];
        if (!statusEl) return;

        statusEl.className = 'stage-stat-status ' + d.status;

        if (d.status === 'pending') {
          statusEl.textContent = t('statusPending');
          if (timeEl)   { timeEl.textContent   = '⏱ --:--'; timeEl.className   = 'stage-stat-chip'; }
          if (movesEl2) { movesEl2.textContent = '👣 --';    movesEl2.className = 'stage-stat-chip'; }
        } else if (d.status === 'active') {
          statusEl.textContent = t('statusActive');
          const elapsed = getElapsed(key);
          const mv = getStageMoves(key);
          if (timeEl)   { timeEl.textContent   = `⏱ ${fmtTime(elapsed)}`;          timeEl.className   = 'stage-stat-chip active-chip'; }
          if (movesEl2) { movesEl2.textContent = `👣 ${mv !== null ? mv : '--'}`; movesEl2.className = 'stage-stat-chip active-chip'; }
        } else {
          statusEl.textContent = t('statusDone');
          if (timeEl)   { timeEl.textContent   = `⏱ ${fmtTime(d.time)}`; timeEl.className   = 'stage-stat-chip done-chip'; }
          if (movesEl2) { movesEl2.textContent = `👣 ${d.moves}`;         movesEl2.className = 'stage-stat-chip done-chip'; }
        }
      }

      function triggerAnim(n, type) {
        const item = els.item[n];
        if (!item) return;
        item.classList.remove('anim-activate', 'anim-complete');
        void item.offsetWidth; // reflow to restart animation
        item.classList.add(type === 'active' ? 'anim-activate' : 'anim-complete');
        item.addEventListener('animationend', () => item.classList.remove('anim-activate', 'anim-complete'), { once: true });
      }

      function renderAll() {
        for (let n = 1; n <= 3; n++) renderStage(n);
      }

      function reset() {
        for (let n = 1; n <= 3; n++) {
          data[`stage${n}`] = { status: 'pending', moves: 0, time: 0, startAt: 0, startMoves: 0 };
        }
        renderAll();
        startStage(1);
      }

      function startStage(n) {
        const key = `stage${n}`;
        const prev = data[key].status;
        data[key].status = 'active';
        data[key].startAt = Date.now();
        data[key].startMoves = moves;
        if (prev !== 'active') triggerAnim(n, 'active');
        renderStage(n);
      }

      function completeStage(n) {
        const key = `stage${n}`;
        const d = data[key];
        if (d.status !== 'active') return;
        d.time = d.time + Math.floor((Date.now() - d.startAt) / 1000);
        d.moves = Math.max(0, moves - d.startMoves);
        d.status = 'done';
        triggerAnim(n, 'done');
        renderStage(n);
      }

      function tickActive() {
        for (let n = 1; n <= 3; n++) {
          if (data[`stage${n}`].status === 'active') renderStage(n);
        }
      }

      function syncFromGameState() {
        if (gameWon) {
          for (let n = 1; n <= 3; n++) {
            if (data[`stage${n}`].status === 'active') {
              data[`stage${n}`].status = 'done';
              data[`stage${n}`].time = 0;
              data[`stage${n}`].moves = 0;
            }
          }
        } else if (gameStage === 2) {
          if (data.stage1.status !== 'done') { data.stage1.status = 'done'; data.stage1.time = 0; data.stage1.moves = 0; }
          if (data.stage2.status !== 'done') { data.stage2.status = 'done'; data.stage2.time = 0; data.stage2.moves = 0; }
          if (data.stage3.status === 'pending') { data.stage3.status = 'active'; data.stage3.startAt = Date.now(); data.stage3.startMoves = moves; }
        } else if (gameStage === 1) {
          if (data.stage1.status !== 'done') { data.stage1.status = 'done'; data.stage1.time = 0; data.stage1.moves = 0; }
          if (data.stage2.status === 'pending') { data.stage2.status = 'active'; data.stage2.startAt = Date.now(); data.stage2.startMoves = moves; }
          data.stage3.status = 'pending'; data.stage3.time = 0; data.stage3.moves = 0;
        } else {
          if (data.stage1.status === 'pending') { data.stage1.status = 'active'; data.stage1.startAt = Date.now(); data.stage1.startMoves = moves; }
          data.stage2.status = 'pending'; data.stage2.time = 0; data.stage2.moves = 0;
          data.stage3.status = 'pending'; data.stage3.time = 0; data.stage3.moves = 0;
        }
        renderAll();
      }

      function exportData() {
        const out = {};
        for (let n = 1; n <= 3; n++) {
          const key = `stage${n}`;
          const d = data[key];
          // 若阶段正在进行中，计算截至当前的已用时间（startAt=0 表示已暂停，直接用固化值）
          const elapsed = (d.status === 'active' && d.startAt !== 0)
            ? d.time + Math.floor((Date.now() - d.startAt) / 1000)
            : d.time;
          out[key] = {
            status: d.status,
            moves: d.status === 'active' ? Math.max(0, moves - d.startMoves) : d.moves,
            time: elapsed,
            startMoves: d.startMoves
          };
        }
        return out;
      }

      function importData(raw) {
        if (!raw || typeof raw !== 'object') {
          syncFromGameState();
          return;
        }
        for (let n = 1; n <= 3; n++) {
          const key = `stage${n}`;
          const src = raw[key];
          if (!src || typeof src !== 'object') continue;
          const status = src.status === 'done' ? 'done' : src.status === 'active' ? 'active' : 'pending';
          data[key] = {
            status,
            moves: Math.max(0, Number(src.moves) || 0),
            time: Math.max(0, Number(src.time) || 0),
            startAt: status === 'active' ? Date.now() : 0,
            startMoves: status === 'active' ? Math.max(0, moves - (Math.max(0, Number(src.moves) || 0))) : 0
          };
        }
        renderAll();
      }

      // 暂停时：将所有 active 阶段的已用时间固化到 d.time，停止基于 startAt 的计算
      function onPause() {
        const now = Date.now();
        for (let n = 1; n <= 3; n++) {
          const d = data[`stage${n}`];
          if (d.status === 'active') {
            d.time = d.time + Math.floor((now - d.startAt) / 1000);
            d.startAt = 0; // 标记为已暂停，getElapsed 此时直接返回 d.time
          }
        }
        renderAll();
      }

      // 恢复时：将 startAt 重置为当前时间，继续从 d.time 基准开始累积
      function onResume() {
        const now = Date.now();
        for (let n = 1; n <= 3; n++) {
          const d = data[`stage${n}`];
          if (d.status === 'active') {
            d.startAt = now;
          }
        }
        renderAll();
      }

      // 每秒刷新进行中阶段的计时/步数显示
      return { reset, startStage, completeStage, renderAll, syncFromGameState, exportData, importData, tickActive, onPause, onResume };
    })();

    boot();
    initControls();

