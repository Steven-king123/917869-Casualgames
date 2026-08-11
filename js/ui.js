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
      // 暂停只锁住棋盘所在的 board。不能交给 ModalManager，否则它会把
      // game-container 及页面上的其他入口一起设为 inert。
      pauseOverlay.classList.toggle('active', visible);
      pauseOverlay.setAttribute('aria-hidden', visible ? 'false' : 'true');
      pauseOverlay.inert = !visible;
      if (visible) pauseOverlay.removeAttribute('inert');
      else pauseOverlay.setAttribute('inert', '');
      gameContainer?.classList.toggle('pause-active', visible);
      if (pauseBtn) pauseBtn.textContent = visible ? t('continue') : t('pause');

      if (visible) {
        requestAnimationFrame(() => {
          if (!gamePaused || ModalManager.hasOpen() || !resumeBtn) return;
          resumeBtn.focus({ preventScroll: true });
        });
      } else if (restoreFocus) {
        requestAnimationFrame(() => {
          if (!ModalManager.hasOpen() && pauseBtn) pauseBtn.focus({ preventScroll: true });
        });
      }
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
        historyResult: historyRecorded
          ? (gameWon ? 'completed' : gameOver ? 'game-over' : 'abandoned')
          : null,
        historyResumePending,
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

