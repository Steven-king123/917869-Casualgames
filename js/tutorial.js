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
        HISTORY_STORAGE_KEY,
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

