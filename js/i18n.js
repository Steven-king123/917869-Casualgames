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

        // 历史记录
        ariaViewHistory: '查看历史记录',
        historyTitle: '🕘 历史记录',
        historyIntro: '每局会保存最终棋局归档码。复制后可以分享，恢复会覆盖当前棋局。',
        historyEmpty: '还没有历史记录。完成、失败或开始新游戏后，记录会显示在这里。',
        historyCompleted: '已通关',
        historyGameOver: '游戏结束',
        historyAbandoned: '中途放弃',
        historyTotalTime: '总用时：',
        historyTotalMoves: '总步数：',
        historyTotalScore: '总评分：',
        historyCompletedStageScore: '已完成阶段平均分：',
        historyScoreUnsettled: '未结算',
        historyNoCompletedStageData: '暂无已完成阶段评分',
        historyEasterEgg: '{value} 彩蛋路线',
        historyCopy: '复制归档码',
        historyRestore: '恢复此局',
        historyCopySuccess: '历史归档码已复制',
        historyCopyFailed: '复制失败，请检查浏览器权限',
        historyRestoreConfirmTitle: '⚠️ 恢复历史记录？',
        historyRestoreConfirmBody: '恢复后会覆盖当前棋盘和进度，当前未保存的变化将丢失。',
        historyRestoreCancel: '取消',
        historyRestoreConfirm: '确认恢复',
        historyRestoreSuccess: '历史对局已恢复',
        historyRestoreFailed: '恢复失败，历史归档码可能已损坏',
        historyArchiveFormatError: '历史归档码格式不正确',

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
        resetItem6: '历史记录与历史归档码',
        resetItem7: '画质模式、自动保存等全部设置',
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
          'announcement-1.1.0': {
            title: '1.1.0 版本更新公告',
            summary: '新增历史记录与更准确的未完成对局评分',
            content: `本次更新新增历史记录功能：
- 可查看已通关、游戏结束和中途放弃的对局
- 每条记录保存独立的棋局归档码
- 支持复制归档码和恢复历史对局
- 游戏结束和中途放弃使用不同颜色区分
- 未完成阶段不参与历史记录评分，没有完成阶段时显示“未结算”`
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

        // History
        ariaViewHistory: 'View game history',
        historyTitle: '🕘 Game History',
        historyIntro: 'Each run keeps a final board archive. Copy it to share, or restore it to replace the current game.',
        historyEmpty: 'No history yet. Records appear after a clear, game over, or starting a new game.',
        historyCompleted: 'Completed',
        historyGameOver: 'Game Over',
        historyAbandoned: 'Abandoned',
        historyTotalTime: 'Total time: ',
        historyTotalMoves: 'Total moves: ',
        historyTotalScore: 'Total score: ',
        historyCompletedStageScore: 'Completed-stage average: ',
        historyScoreUnsettled: 'Not settled',
        historyNoCompletedStageData: 'No completed-stage score',
        historyEasterEgg: '{value} Easter Egg Route',
        historyCopy: 'Copy Archive',
        historyRestore: 'Restore Game',
        historyCopySuccess: 'History archive copied',
        historyCopyFailed: 'Copy failed, please check browser permissions',
        historyRestoreConfirmTitle: '⚠️ Restore History?',
        historyRestoreConfirmBody: 'This will replace the current board and progress. Unsaved changes will be lost.',
        historyRestoreCancel: 'Cancel',
        historyRestoreConfirm: 'Restore',
        historyRestoreSuccess: 'Historical game restored',
        historyRestoreFailed: 'Restore failed; the history archive may be damaged',
        historyArchiveFormatError: 'History archive format is incorrect',

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
        resetItem6: 'Game history and historical archive codes',
        resetItem7: 'Quality mode, auto-save and all settings',
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
          'announcement-1.1.0': {
            title: 'v1.1.0 Update Notice',
            summary: 'Added game history and more accurate incomplete-run scoring',
            content: `This update adds game history:
- View completed, game-over and abandoned runs
- Keep an independent board archive code for each record
- Copy archive codes and restore historical games
- Use different colors for game over and abandoned runs
- Exclude unfinished stages from history scoring; runs with no completed stage show “Not settled”`
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
      if (historyModal?.classList.contains('active')) History.render();
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

