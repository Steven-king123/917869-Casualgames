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

