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

    function serializeHistoryState(state) {
      return HISTORY_SAVE_MAGIC + encodeUtf8Base64(JSON.stringify(state));
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

    function parseHistorySave(saveText) {
      const normalized = normalizeSaveString(saveText);
      if (!normalized.startsWith(HISTORY_SAVE_MAGIC)) throw new Error(t('historyArchiveFormatError'));
      const payload = normalized.slice(HISTORY_SAVE_MAGIC.length);
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
        historyResult: ['completed', 'game-over', 'abandoned'].includes(raw.historyResult) ? raw.historyResult : null,
        historyResumePending: raw.historyResumePending === true,
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
      historyRecorded = !!(state.historyResult || gameOver || gameWon);
      historyResumePending = !!state.historyResumePending;
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

    const History = (() => {
      function escapeHtml(value) {
        const node = document.createElement('span');
        node.textContent = String(value ?? '');
        return node.innerHTML;
      }

      function normalize(record) {
        if (!record || typeof record !== 'object' || !['completed', 'game-over', 'abandoned'].includes(record.result)) return null;
        if (typeof record.archiveCode !== 'string' || !record.archiveCode.startsWith(HISTORY_SAVE_MAGIC)) return null;
        const completedAt = Math.max(0, Number(record.completedAt) || 0);
        if (!completedAt) return null;
        const currentStage = Math.max(0, Math.min(2, Math.floor(Number(record.stage) || 0)));
        const hasCompletionFlags = Array.isArray(record.stageStats)
          && record.stageStats.some((stage) => stage && Object.prototype.hasOwnProperty.call(stage, 'completed'));
        const stageStats = Array.isArray(record.stageStats) ? record.stageStats.slice(0, 3).map((stage, index) => {
          const completed = hasCompletionFlags
            ? stage?.completed === true
            : record.result === 'completed'
              ? Number(stage?.time) > 0 || Number(stage?.moves) > 0
              : index < currentStage;
          return {
          number: index + 1,
          completed,
          time: Math.max(0, Math.floor(Number(stage?.time) || 0)),
          moves: Math.max(0, Math.floor(Number(stage?.moves) || 0)),
          score: completed && Number.isFinite(Number(stage?.score))
            ? Math.max(0, Math.min(100, Math.floor(Number(stage.score))))
            : null
          };
        }) : [];
        const completedScores = stageStats
          .filter((stage) => stage.completed && Number.isFinite(stage.score))
          .map((stage) => stage.score);
        const totalScore = completedScores.length
          ? Math.round(completedScores.reduce((sum, score) => sum + score, 0) / completedScores.length)
          : null;
        return {
          id: typeof record.id === 'string' ? record.id : `${completedAt}-${Math.random().toString(16).slice(2)}`,
          result: record.result,
          completedAt,
          moves: Math.max(0, Math.floor(Number(record.moves) || 0)),
          totalTime: Math.max(0, Math.floor(Number(record.totalTime) || 0)),
          totalScore,
          stage: currentStage,
          easterEggId: EASTER_EGG_IDS.has(String(record.easterEggId)) ? String(record.easterEggId) : null,
          stageStats,
          archiveCode: record.archiveCode
        };
      }

      function readAll() {
        try {
          const raw = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY) || '[]');
          if (!Array.isArray(raw)) return [];
          const records = raw.map(normalize).filter(Boolean)
            .sort((a, b) => b.completedAt - a.completedAt)
            .slice(0, HISTORY_LIMIT);
          if (records.length !== raw.length) {
            try { localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(records)); } catch (_) {}
          }
          return records;
        } catch (_) {
          return [];
        }
      }

      function saveAll(records) {
        try {
          localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(records.slice(0, HISTORY_LIMIT)));
          return true;
        } catch (error) {
          console.warn('保存历史记录失败', error);
          return false;
        }
      }

      function createArchive(result) {
        const current = getGameState({ includeAppearance: false });
        const totalTime = Math.max(0, Math.floor(Number(result === 'completed' || result === 'game-over' ? finalElapsedSeconds : currentElapsedSeconds()) || 0));
        return serializeHistoryState({
          version: 1,
          board: current.board,
          stage: current.stage,
          unlockedTier: current.unlockedTier,
          easterEggId: current.easterEggId,
          easterEggDiscoveryId: current.easterEggDiscoveryId,
          moves: current.moves,
          timer: totalTime,
          finalTime: result === 'completed' || result === 'game-over' ? totalTime : null,
          historyResult: result,
          historyResumePending: result === 'abandoned',
          stageStats: current.stageStats,
          seed: current.seed,
          game: { over: result === 'game-over', won: result === 'completed' }
        });
      }

      function recordCurrentGame(result = 'abandoned') {
        if (historyRecorded || tutorialActive) return false;
        const actualResult = gameWon ? 'completed' : gameOver ? 'game-over' : result;
        const archiveCode = createArchive(actualResult);
        const stageStats = getCompletedStageStats();
        const record = normalize({
          id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          result: actualResult,
          completedAt: Date.now(),
          moves,
          totalTime: Math.max(0, Math.floor(Number(actualResult === 'completed' || actualResult === 'game-over' ? finalElapsedSeconds : currentElapsedSeconds()) || 0)),
          totalScore: getTotalScore(stageStats),
          stage: gameStage,
          easterEggId,
          stageStats,
          archiveCode
        });
        if (!record) return false;
        const saved = saveAll([record, ...readAll()]);
        if (saved) {
          historyRecorded = true;
          historyResumePending = false;
          if (historyModal?.classList.contains('active')) render();
        }
        return saved;
      }

      function resultLabel(result) {
        return t(result === 'completed' ? 'historyCompleted' : result === 'game-over' ? 'historyGameOver' : 'historyAbandoned');
      }

      function scoreSummary(record) {
        if (record.totalScore === null) {
          return `${t('historyTotalScore')}${t('historyScoreUnsettled')}`;
        }
        const label = record.result === 'completed' ? t('historyTotalScore') : t('historyCompletedStageScore');
        return `${label}${record.totalScore}`;
      }

      function formatDate(timestamp) {
        return new Date(timestamp).toLocaleString(currentLanguage === 'en' ? 'en-US' : 'zh-CN');
      }

      function render() {
        if (!historyList) return;
        const records = readAll();
        if (!records.length) {
          historyList.innerHTML = `<div class="history-empty">${escapeHtml(t('historyEmpty'))}</div>`;
          return;
        }
        historyList.innerHTML = records.map((record) => {
          const route = record.easterEggId ? ` · ${escapeHtml(t('historyEasterEgg').replace('{value}', record.easterEggId))}` : '';
          const stageRows = record.stageStats
            .filter((stage) => stage.completed && Number.isFinite(stage.score))
            .map((stage) => `<span>${escapeHtml(t(`stage${stage.number}`))} ${stage.score} · ${formatTime(stage.time)} · ${stage.moves} ${escapeHtml(t('stepsUnit'))}</span>`)
            .join('');
          return `<article class="history-item" data-history-id="${escapeHtml(record.id)}">
            <div class="history-item-head"><strong class="history-result history-result-${escapeHtml(record.result)}">${escapeHtml(resultLabel(record.result))}</strong><time>${escapeHtml(formatDate(record.completedAt))}</time></div>
            <div class="history-item-summary"><span>${escapeHtml(t('historyTotalTime'))} ${formatTime(record.totalTime)}</span><span>${escapeHtml(t('historyTotalMoves'))} ${record.moves}</span><span>${escapeHtml(scoreSummary(record))}</span>${route}</div>
            <div class="history-stage-summary">${stageRows || `<span>${escapeHtml(t('historyNoCompletedStageData'))}</span>`}</div>
            <div class="history-item-actions"><button class="btn secondary small" type="button" data-history-copy="${escapeHtml(record.id)}">${escapeHtml(t('historyCopy'))}</button><button class="btn small" type="button" data-history-restore="${escapeHtml(record.id)}">${escapeHtml(t('historyRestore'))}</button></div>
          </article>`;
        }).join('');
      }

      function find(id) { return readAll().find((record) => record.id === id) || null; }

      async function copy(id) {
        const record = find(id);
        if (!record) return;
        try {
          if (!await copyTextToClipboard(record.archiveCode)) throw new Error('clipboard unavailable');
          if (historyStatus) historyStatus.textContent = t('historyCopySuccess');
        } catch (error) {
          console.warn('复制历史归档失败', error);
          if (historyStatus) historyStatus.textContent = t('historyCopyFailed');
        }
      }

      function requestRestore(id) {
        const record = find(id);
        if (!record || !historyRestoreConfirmModal) return;
        historyRestoreConfirmModal.dataset.historyId = record.id;
        if (historyRestoreConfirmBody) historyRestoreConfirmBody.textContent = t('historyRestoreConfirmBody');
        ModalManager.show(historyRestoreConfirmModal, null, { focus: cancelHistoryRestoreBtn });
      }

      function closeRestoreConfirm() {
        ModalManager.hide(historyRestoreConfirmModal);
        if (historyRestoreConfirmModal) delete historyRestoreConfirmModal.dataset.historyId;
      }

      function restoreConfirmed() {
        const id = historyRestoreConfirmModal?.dataset.historyId;
        const record = find(id);
        if (!record) { closeRestoreConfirm(); return; }
        try {
          const state = sanitizeGameState(parseHistorySave(record.archiveCode));
          applyGameState(state);
          historyRecorded = true;
          gamePaused = false;
          setPauseVisible(false);
          if (gameOver || gameWon) stopTimer();
          else startTimer(false);
          syncGameState();
          // 恢复历史是用户明确执行的写入，即使自动保存关闭，也要让刷新后保持恢复结果。
          try { localStorage.setItem(SAVE_STORAGE_KEY, serializeGameState()); } catch (_) {}
          closeRestoreConfirm();
          close();
          if (historyStatus) historyStatus.textContent = t('historyRestoreSuccess');
        } catch (error) {
          console.warn('恢复历史归档失败', error);
          closeRestoreConfirm();
          if (historyStatus) historyStatus.textContent = t('historyRestoreFailed');
        }
      }

      function open() {
        render();
        if (historyStatus) historyStatus.textContent = '';
        ModalManager.show(historyModal, historyBtn);
      }

      function close() { ModalManager.hide(historyModal); }

      function bind() {
        historyBtn?.addEventListener('click', open);
        closeHistoryBtn?.addEventListener('click', close);
        historyModal?.addEventListener('click', (event) => { if (event.target === historyModal) close(); });
        historyList?.addEventListener('click', (event) => {
          const copyButton = event.target.closest('[data-history-copy]');
          const restoreButton = event.target.closest('[data-history-restore]');
          if (copyButton) copy(copyButton.dataset.historyCopy);
          else if (restoreButton) requestRestore(restoreButton.dataset.historyRestore);
        });
        cancelHistoryRestoreBtn?.addEventListener('click', closeRestoreConfirm);
        confirmHistoryRestoreBtn?.addEventListener('click', restoreConfirmed);
        historyRestoreConfirmModal?.addEventListener('click', (event) => { if (event.target === historyRestoreConfirmModal) closeRestoreConfirm(); });
      }

      return { bind, open, close, render, recordCurrentGame, closeRestoreConfirm };
    })();

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
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch (_) {}
      }
      const textarea = saveTextarea && settingsModal?.classList.contains('active')
        ? saveTextarea
        : document.createElement('textarea');
      const temporary = textarea !== saveTextarea;
      if (temporary) {
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
      }
      textarea.focus();
      textarea.select();
      const ok = document.execCommand('copy');
      textarea.setSelectionRange(0, 0);
      if (temporary) textarea.remove();
      return ok;
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
      History.bind();
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
            if (!await copyTextToClipboard(save)) throw new Error('clipboard unavailable');
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

