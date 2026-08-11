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
    // 当前对局是否已经写入历史，避免结算、失败和重开重复生成记录。
    let historyRecorded = false;
    // 恢复“中途放弃”记录后，第一次有效移动才开启新一轮历史记录。
    let historyResumePending = false;
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
    const historyBtn = document.getElementById('historyBtn');
    const historyModal = document.getElementById('historyModal');
    const historyList = document.getElementById('historyList');
    const historyStatus = document.getElementById('historyStatus');
    const closeHistoryBtn = document.getElementById('closeHistoryBtn');
    const historyRestoreConfirmModal = document.getElementById('historyRestoreConfirmModal');
    const historyRestoreConfirmBody = document.getElementById('historyRestoreConfirmBody');
    const cancelHistoryRestoreBtn = document.getElementById('cancelHistoryRestoreBtn');
    const confirmHistoryRestoreBtn = document.getElementById('confirmHistoryRestoreBtn');
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
    const HISTORY_STORAGE_KEY = '917869-history';
    const HISTORY_SAVE_MAGIC = '917869:history:v1:';
    const HISTORY_LIMIT = 50;
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

