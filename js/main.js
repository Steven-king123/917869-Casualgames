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

        if (historyResumePending) {
          historyResumePending = false;
          historyRecorded = false;
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

      History.recordCurrentGame('abandoned');
      isAnimating = true;
      try {
        hideSettlement();
        gamePaused = false;
        elapsedBeforePause = 0;
        finalElapsedSeconds = null;
        historyRecorded = false;
        historyResumePending = false;
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
        if (hasBlockingDialogOpen()) return;
        // initControls 在 boot 等待免责声明期间就已执行，声明未关闭前不接受任何游戏输入。
        if (isStartupDisclaimerOpen()) return;

        // 暂停不再是全页面模态框，因此保留 Escape 恢复游戏的快捷键。
        if (gamePaused && e.key === 'Escape') {
          e.preventDefault();
          resumeGame();
          return;
        }

        if (isInteractiveKeyTarget(e.target)) return;

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

