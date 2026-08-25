// Application Controller & State Engine

const STORAGE_KEYS = {
  COMPLETED_STRIVER: 'striver_completed_ids_v10',
  COMPLETED_CUSTOM: 'custom_completed_ids_v10',
  CONFIG: 'striver_exam_config_v10',
  ACTIVE_SHEET: 'active_sheet_mode_v10'
};

// Default Configuration starting August 26 matching exact user academic schedule
let userConfig = {
  startDate: '2026-08-26',
  zeroProblemDates: [
    '2026-09-08', '2026-09-09', '2026-09-10', '2026-09-11', '2026-09-12',
    '2026-11-12', '2026-11-13', '2026-11-14', '2026-11-15', '2026-11-16'
  ],
  oneProblemRanges: [
    { start: '2026-11-19', end: '2026-11-24' },
    { start: '2026-11-27', end: '2026-12-15' }
  ]
};

let currentSheetMode = 'STRIVER'; // 'STRIVER' or 'CUSTOM'
let completedSetStriver = new Set();
let completedSetCustom = new Set();
let scheduledData = [];
let currentViewMode = 'TIMETABLE';

// UNDO ACTION HISTORY STACK SYSTEM
let actionHistoryStack = [];
let toastTimeout = null;

function pushUndoAction(action) {
  actionHistoryStack.push(action);
  updateUndoButtonState();
  showUndoToast(action);
}

function updateUndoButtonState() {
  const btnUndoHeader = document.getElementById('btnUndoHeader');
  if (btnUndoHeader) {
    btnUndoHeader.disabled = actionHistoryStack.length === 0;
  }
}

async function performUndo() {
  if (actionHistoryStack.length === 0) return;

  const action = actionHistoryStack.pop();
  updateUndoButtonState();

  if (action.type === 'TOGGLE_CHECK') {
    const targetSet = action.sheetMode === 'STRIVER' ? completedSetStriver : completedSetCustom;
    if (action.previousState) {
      targetSet.add(action.problemId);
    } else {
      targetSet.delete(action.problemId);
    }

    await saveCompletedData();
    updateDashboardStats();
    render();

    showNotificationToast(`Undid action for "${action.problemTitle}"`);
  } else if (action.type === 'RESET_PROGRESS') {
    if (action.sheetMode === 'STRIVER') {
      completedSetStriver = new Set(action.previousCompletedIds);
    } else {
      completedSetCustom = new Set(action.previousCompletedIds);
    }

    await saveCompletedData();
    updateDashboardStats();
    render();

    showNotificationToast(`Undid progress reset for ${action.sheetMode}`);
  }
}

function showUndoToast(action) {
  const toast = document.getElementById('undoToast');
  const msgEl = document.getElementById('toastMessage');
  const progressLine = document.getElementById('toastProgressLine');

  if (!toast || !msgEl) return;

  const statusText = action.newState ? 'Marked as Completed' : 'Unchecked';
  msgEl.textContent = `${statusText}: "${action.problemTitle}"`;

  toast.classList.remove('hidden');

  // Reset CSS Animation
  if (progressLine) {
    progressLine.style.animation = 'none';
    void progressLine.offsetWidth;
    progressLine.style.animation = 'toastCountdown 6s linear forwards';
  }

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 6000);
}

function showNotificationToast(message) {
  const toast = document.getElementById('undoToast');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove('hidden');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 4000);
}

function getActiveDataset() {
  return currentSheetMode === 'STRIVER' ? striverSheetData : customSheetData;
}

function getActiveCompletedSet() {
  return currentSheetMode === 'STRIVER' ? completedSetStriver : completedSetCustom;
}

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
  await loadDataFromBackendOrLocal();
  setupUI();
  populateTopicFilter();
  recalculateTimetable();
  render();
  setupGlobalShortcuts();
});

// Setup Keyboard Shortcut for Undo (Ctrl+Z)
function setupGlobalShortcuts() {
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
      e.preventDefault();
      performUndo();
    }
  });
}

// Load data
async function loadDataFromBackendOrLocal() {
  const storedSheet = localStorage.getItem(STORAGE_KEYS.ACTIVE_SHEET);
  if (storedSheet) currentSheetMode = storedSheet;

  try {
    const configRes = await fetch('/api/config');
    if (configRes.ok) {
      userConfig = await configRes.json();
    } else {
      loadFromLocalStorage();
    }
  } catch (e) {
    loadFromLocalStorage();
  }

  try {
    const progRes = await fetch('/api/progress');
    if (progRes.ok) {
      const data = await progRes.json();
      if (Array.isArray(data.completedIds)) {
        completedSetStriver = new Set(data.completedIds);
      }
    }
  } catch (e) {}

  loadFromLocalStorage();
}

function loadFromLocalStorage() {
  const storedStriver = localStorage.getItem(STORAGE_KEYS.COMPLETED_STRIVER);
  if (storedStriver) {
    try { completedSetStriver = new Set(JSON.parse(storedStriver)); } catch (e) {}
  }

  const storedCustom = localStorage.getItem(STORAGE_KEYS.COMPLETED_CUSTOM);
  if (storedCustom) {
    try { completedSetCustom = new Set(JSON.parse(storedCustom)); } catch (e) {}
  }

  const storedConfig = localStorage.getItem(STORAGE_KEYS.CONFIG);
  if (storedConfig) {
    try { userConfig = JSON.parse(storedConfig); } catch (e) {}
  }
}

async function saveCompletedData() {
  const activeSet = getActiveCompletedSet();
  const arr = Array.from(activeSet);

  if (currentSheetMode === 'STRIVER') {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_STRIVER, JSON.stringify(arr));
    try {
      await fetch('/api/progress/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completedIds: arr })
      });
    } catch (e) {}
  } else {
    localStorage.setItem(STORAGE_KEYS.COMPLETED_CUSTOM, JSON.stringify(arr));
  }
}

async function saveConfigData() {
  localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(userConfig));
  try {
    await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userConfig)
    });
  } catch (e) {}
}

// Setup Event Listeners
function setupUI() {
  // Header & Floating Toast Undo Buttons
  const btnUndoHeader = document.getElementById('btnUndoHeader');
  if (btnUndoHeader) btnUndoHeader.addEventListener('click', performUndo);

  const btnToastUndo = document.getElementById('btnToastUndo');
  if (btnToastUndo) btnToastUndo.addEventListener('click', performUndo);

  // Sheet Tab Switchers
  const sheetTabs = document.querySelectorAll('.sheet-tab');
  sheetTabs.forEach(tab => {
    if (tab.getAttribute('data-sheet') === currentSheetMode) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }

    tab.addEventListener('click', () => {
      sheetTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentSheetMode = tab.getAttribute('data-sheet');
      localStorage.setItem(STORAGE_KEYS.ACTIVE_SHEET, currentSheetMode);
      populateTopicFilter();
      recalculateTimetable();
      render();
    });
  });

  const startEl = document.getElementById('startDate');
  if (startEl) startEl.value = userConfig.startDate || '2026-08-26';

  const caEl = document.getElementById('caExams');
  if (caEl) caEl.value = Array.isArray(userConfig.zeroProblemDates) ? userConfig.zeroProblemDates.join(', ') : '';

  const finalEl = document.getElementById('finalExams');
  if (finalEl) finalEl.value = 'Nov 19-24, Nov 27-Dec 15';

  const configDrawer = document.getElementById('configDrawer');
  const btnConfig = document.getElementById('btnExamConfig');
  if (btnConfig) {
    btnConfig.addEventListener('click', () => {
      configDrawer.classList.toggle('hidden');
    });
  }

  const btnCloseConf = document.getElementById('btnCloseConfig');
  if (btnCloseConf) {
    btnCloseConf.addEventListener('click', () => {
      configDrawer.classList.add('hidden');
    });
  }

  const btnApply = document.getElementById('btnApplyConfig');
  if (btnApply) {
    btnApply.addEventListener('click', () => {
      parseAndUpdateConfig();
      recalculateTimetable();
      render();
      configDrawer.classList.add('hidden');
    });
  }

  // Export JSON Schedule
  const btnExport = document.getElementById('btnExportData');
  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const activeData = getActiveDataset();
      const activeSet = getActiveCompletedSet();
      const exportObject = {
        sheetName: currentSheetMode === 'STRIVER' ? 'Striver A2Z Sheet' : 'My LeetCode List (360 Problems)',
        config: userConfig,
        completedProblemIds: Array.from(activeSet),
        totalProblems: activeData.length,
        scheduledTimetable: scheduledData
      };
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObject, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `${currentSheetMode}_DSA_Schedule_${new Date().toISOString().split('T')[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }

  // Reset Progress
  const btnReset = document.getElementById('btnResetProgress');
  if (btnReset) {
    btnReset.addEventListener('click', async () => {
      const activeSet = getActiveCompletedSet();
      if (activeSet.size === 0) return;

      if (confirm(`Reset all completion progress for ${currentSheetMode === 'STRIVER' ? 'Striver Sheet' : 'My Custom Sheet'}?`)) {
        const previousCompletedIds = Array.from(activeSet);
        activeSet.clear();
        await saveCompletedData();
        updateDashboardStats();
        render();

        pushUndoAction({
          type: 'RESET_PROGRESS',
          sheetMode: currentSheetMode,
          previousCompletedIds: previousCompletedIds,
          problemTitle: `All ${currentSheetMode} Problems`
        });
      }
    });
  }

  // View Mode Toggles
  const btnTime = document.getElementById('viewTimetableBtn');
  const btnTopic = document.getElementById('viewTopicBtn');
  
  if (btnTime && btnTopic) {
    btnTime.addEventListener('click', () => {
      currentViewMode = 'TIMETABLE';
      btnTime.classList.add('active');
      btnTopic.classList.remove('active');
      render();
    });

    btnTopic.addEventListener('click', () => {
      currentViewMode = 'TOPIC';
      btnTopic.classList.add('active');
      btnTime.classList.remove('active');
      render();
    });
  }

  // Search & Filters
  const searchIn = document.getElementById('searchInput');
  if (searchIn) searchIn.addEventListener('input', render);

  const topicSelect = document.getElementById('topicFilter');
  if (topicSelect) {
    topicSelect.addEventListener('change', () => {
      populateSubtopicFilter(topicSelect.value);
      render();
    });
  }

  const subSel = document.getElementById('subtopicFilter');
  if (subSel) subSel.addEventListener('change', render);

  const diffSel = document.getElementById('difficultyFilter');
  if (diffSel) diffSel.addEventListener('change', render);

  const statSel = document.getElementById('statusFilter');
  if (statSel) statSel.addEventListener('change', render);

  // Modal Close
  const closeMod = document.getElementById('btnCloseModal');
  if (closeMod) closeMod.addEventListener('click', closeModal);

  const modBack = document.getElementById('explanationModal');
  if (modBack) {
    modBack.addEventListener('click', (e) => {
      if (e.target.id === 'explanationModal') closeModal();
    });
  }
}

// Parse inputs from config drawer form
function parseAndUpdateConfig() {
  const startInput = document.getElementById('startDate').value;
  if (startInput) userConfig.startDate = startInput;

  const zeroStr = document.getElementById('caExams').value;
  if (zeroStr) {
    userConfig.zeroProblemDates = zeroStr.split(',').map(s => s.trim()).filter(Boolean);
  }

  saveConfigData();
}

// Populate Topic Dropdown
function populateTopicFilter() {
  const select = document.getElementById('topicFilter');
  if (!select) return;

  const activeData = getActiveDataset();
  const steps = [...new Set(activeData.map(item => item.step))];
  select.innerHTML = '<option value="ALL">All Steps / Topics</option>';
  
  steps.forEach(stepName => {
    const opt = document.createElement('option');
    opt.value = stepName;
    opt.textContent = stepName;
    select.appendChild(opt);
  });

  populateSubtopicFilter('ALL');
}

// Populate Subtopic Dropdown
function populateSubtopicFilter(selectedTopic) {
  const select = document.getElementById('subtopicFilter');
  if (!select) return;

  select.innerHTML = '<option value="ALL">All Subtopics</option>';

  const activeData = getActiveDataset();
  let filtered = activeData;
  if (selectedTopic !== 'ALL') {
    filtered = activeData.filter(item => item.step === selectedTopic);
  }

  const subtopics = [...new Set(filtered.map(item => item.subtopic))];
  subtopics.forEach(subName => {
    const opt = document.createElement('option');
    opt.value = subName;
    opt.textContent = subName;
    select.appendChild(opt);
  });
}

// SCHEDULING ENGINE
function recalculateTimetable() {
  const activeData = getActiveDataset();
  const sortedProblems = [...activeData];

  let currDate = new Date(userConfig.startDate || '2026-08-26');
  let problemIdx = 0;
  const total = sortedProblems.length;
  scheduledData = [];

  const zeroSet = new Set(userConfig.zeroProblemDates || []);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const isOneProblemDay = (dStr) => {
    const cur = new Date(dStr).getTime();
    for (let r of (userConfig.oneProblemRanges || [])) {
      const st = new Date(r.start).getTime();
      const en = new Date(r.end).getTime();
      if (cur >= st && cur <= en) return true;
    }
    return false;
  };

  const isPreExamWeek = (dStr) => {
    const checkTime = new Date(dStr).getTime();
    for (let ex of (userConfig.zeroProblemDates || [])) {
      const exTime = new Date(ex).getTime();
      const diffDays = (exTime - checkTime) / (1000 * 3600 * 24);
      if (diffDays > 0 && diffDays <= 7) return true;
    }
    return false;
  };

  while (problemIdx < total) {
    const dateStr = formatDate(currDate);
    const dayOfWeek = currDate.toLocaleDateString('en-US', { weekday: 'short' });
    const formattedLabel = `${dateStr} (${dayOfWeek})`;

    let dayQuota = 4;
    let dayType = 'NORMAL';

    if (zeroSet.has(dateStr)) {
      dayQuota = 0;
      dayType = 'EXAM_DAY';
    } else if (isOneProblemDay(dateStr)) {
      dayQuota = 1;
      dayType = 'ONE_PROB_DAY';
    } else if (isPreExamWeek(dateStr)) {
      dayQuota = 2;
      dayType = 'PRE_EXAM_WEEK';
    }

    if (dayQuota === 0) {
      scheduledData.push({
        date: dateStr,
        dayLabel: formattedLabel,
        dayType: dayType,
        quota: 0,
        problems: []
      });
    } else {
      const dayProblems = [];
      for (let i = 0; i < dayQuota && problemIdx < total; i++) {
        dayProblems.push({
          ...sortedProblems[problemIdx],
          scheduledDate: dateStr
        });
        problemIdx++;
      }

      scheduledData.push({
        date: dateStr,
        dayLabel: formattedLabel,
        dayType: dayType,
        quota: dayQuota,
        problems: dayProblems
      });
    }

    currDate.setDate(currDate.getDate() + 1);
  }

  updateDashboardStats();
}

// Update Top HUD Metrics
function updateDashboardStats() {
  const activeData = getActiveDataset();
  const activeSet = getActiveCompletedSet();

  const total = activeData.length;
  const completedCount = activeSet.size;
  const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  const compEl = document.getElementById('completedCount');
  if (compEl) compEl.textContent = completedCount;

  const totEl = document.getElementById('totalCount');
  if (totEl) totEl.textContent = total;

  const percEl = document.getElementById('percentBadge');
  if (percEl) percEl.textContent = `${percentage}%`;

  const fillEl = document.getElementById('progressBarFill');
  if (fillEl) fillEl.style.width = `${percentage}%`;

  let easy = 0, med = 0, hard = 0;
  activeData.forEach(p => {
    if (p.difficulty === 'Easy') easy++;
    else if (p.difficulty === 'Medium') med++;
    else if (p.difficulty === 'Hard') hard++;
  });

  const eEl = document.getElementById('easyCount');
  if (eEl) eEl.textContent = easy;

  const mEl = document.getElementById('mediumCount');
  if (mEl) mEl.textContent = med;

  const hEl = document.getElementById('hardCount');
  if (hEl) hEl.textContent = hard;

  const eBar = document.getElementById('easyBar');
  if (eBar) eBar.style.width = `${total > 0 ? Math.round((easy / total) * 100) : 0}%`;

  const mBar = document.getElementById('mediumBar');
  if (mBar) mBar.style.width = `${total > 0 ? Math.round((med / total) * 100) : 0}%`;

  const hBar = document.getElementById('hardBar');
  if (hBar) hBar.style.width = `${total > 0 ? Math.round((hard / total) * 100) : 0}%`;

  if (scheduledData.length > 0) {
    const lastDay = scheduledData[scheduledData.length - 1];
    const endEl = document.getElementById('estimatedEndDate');
    if (endEl) endEl.textContent = lastDay.date;

    const spanEl = document.getElementById('totalDaysSpan');
    if (spanEl) spanEl.textContent = `${scheduledData.length} total preparation days scheduled`;
  }
}

// Render View
function render() {
  const container = document.getElementById('timetableContainer');
  if (!container) return;

  container.innerHTML = '';

  const searchEl = document.getElementById('searchInput');
  const search = searchEl ? searchEl.value.toLowerCase().trim() : '';

  const topSel = document.getElementById('topicFilter');
  const topicSel = topSel ? topSel.value : 'ALL';

  const subSel = document.getElementById('subtopicFilter');
  const subtopicSel = subSel ? subSel.value : 'ALL';

  const dSel = document.getElementById('difficultyFilter');
  const diffSel = dSel ? dSel.value : 'ALL';

  const stSel = document.getElementById('statusFilter');
  const statusSel = stSel ? stSel.value : 'ALL';

  const activeSet = getActiveCompletedSet();

  const matchesFilter = (problem) => {
    if (!problem) return false;
    
    if (search) {
      const matchTitle = problem.title.toLowerCase().includes(search);
      const matchStep = problem.step.toLowerCase().includes(search);
      const matchSub = problem.subtopic.toLowerCase().includes(search);
      if (!matchTitle && !matchStep && !matchSub) return false;
    }

    if (topicSel !== 'ALL' && problem.step !== topicSel) return false;
    if (subtopicSel !== 'ALL' && problem.subtopic !== subtopicSel) return false;
    if (diffSel !== 'ALL' && problem.difficulty !== diffSel) return false;

    const isComp = activeSet.has(problem.id);
    if (statusSel === 'COMPLETED' && !isComp) return false;
    if (statusSel === 'PENDING' && isComp) return false;

    return true;
  };

  if (currentViewMode === 'TIMETABLE') {
    renderTimetableMode(container, matchesFilter);
  } else {
    renderTopicMode(container, matchesFilter);
  }
}

function renderTimetableMode(container, matchesFilter) {
  let renderedDaysCount = 0;

  scheduledData.forEach((dayGroup) => {
    const filteredProbs = dayGroup.problems.filter(matchesFilter);

    if (dayGroup.dayType === 'EXAM_DAY') {
      const el = document.createElement('div');
      el.className = 'day-group card-hud rest-day-card';
      el.innerHTML = `
        <div class="day-header" style="border:none; margin:0; padding:0;">
          <div class="day-title-box">
            <span class="day-date-tag day-tag-ca"><i class="fa-solid fa-ban"></i> ${dayGroup.dayLabel}</span>
            <h4>CA EXAM PAUSE — INTENSIVE REVISION (0 DSA PROBLEMS)</h4>
          </div>
        </div>
      `;
      container.appendChild(el);
      renderedDaysCount++;
      return;
    }

    if (filteredProbs.length === 0) return;

    renderedDaysCount++;
    const dayEl = document.createElement('div');
    dayEl.className = 'day-group card-hud';

    let tagClass = '';
    let tagText = `${dayGroup.quota} Problems`;
    if (dayGroup.dayType === 'PRE_EXAM_WEEK') {
      tagClass = 'day-tag-preca';
      tagText = '2 Problems (Pre-Exam Week)';
    } else if (dayGroup.dayType === 'ONE_PROB_DAY') {
      tagClass = 'day-tag-final';
      tagText = '1 Problem (Final Sem)';
    }

    dayEl.innerHTML = `
      <div class="day-header">
        <div class="day-title-box">
          <span class="day-date-tag ${tagClass}">${dayGroup.dayLabel}</span>
          <span class="day-quota-info"><i class="fa-solid fa-shield-cat"></i> Quota: ${tagText}</span>
        </div>
      </div>
      <table class="problems-table">
        <thead>
          <tr>
            <th class="check-cell">Status</th>
            <th>Problem Name</th>
            <th>Step & Subtopic</th>
            <th>Difficulty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="day-body-${dayGroup.date}">
        </tbody>
      </table>
    `;

    container.appendChild(dayEl);
    const tbody = dayEl.querySelector(`#day-body-${dayGroup.date}`);

    filteredProbs.forEach(prob => {
      tbody.appendChild(createProblemRow(prob));
    });
  });

  if (renderedDaysCount === 0) {
    container.innerHTML = `<div class="card-hud" style="padding: 2rem; text-align: center; color: var(--text-muted);">No problems match your current search/filter parameters.</div>`;
  }
}

function renderTopicMode(container, matchesFilter) {
  const stepsMap = {};
  const activeData = getActiveDataset();

  activeData.forEach(prob => {
    if (!matchesFilter(prob)) return;
    if (!stepsMap[prob.step]) stepsMap[prob.step] = [];
    stepsMap[prob.step].push(prob);
  });

  const stepKeys = Object.keys(stepsMap);

  if (stepKeys.length === 0) {
    container.innerHTML = `<div class="card-hud" style="padding: 2rem; text-align: center; color: var(--text-muted);">No problems match your current search/filter parameters.</div>`;
    return;
  }

  stepKeys.forEach(stepName => {
    const problems = stepsMap[stepName];
    const stepEl = document.createElement('div');
    stepEl.className = 'day-group card-hud';

    stepEl.innerHTML = `
      <div class="day-header">
        <div class="day-title-box">
          <span class="day-date-tag">${stepName}</span>
          <span class="day-quota-info">(${problems.length} Problems)</span>
        </div>
      </div>
      <table class="problems-table">
        <thead>
          <tr>
            <th class="check-cell">Status</th>
            <th>Problem Name</th>
            <th>Subtopic</th>
            <th>Difficulty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="step-body">
        </tbody>
      </table>
    `;

    container.appendChild(stepEl);
    const tbody = stepEl.querySelector('.step-body');

    problems.forEach(prob => {
      tbody.appendChild(createProblemRow(prob));
    });
  });
}

function createProblemRow(prob) {
  const activeSet = getActiveCompletedSet();
  const isDone = activeSet.has(prob.id);
  const tr = document.createElement('tr');
  tr.className = `problem-row ${isDone ? 'completed' : ''}`;

  let diffBadgeClass = 'badge-easy';
  if (prob.difficulty === 'Medium') diffBadgeClass = 'badge-medium';
  if (prob.difficulty === 'Hard') diffBadgeClass = 'badge-hard';

  tr.innerHTML = `
    <td class="check-cell">
      <input type="checkbox" class="custom-checkbox" ${isDone ? 'checked' : ''}>
    </td>
    <td class="prob-title">${prob.title}</td>
    <td class="prob-meta">${prob.step} <i class="fa-solid fa-angle-right" style="font-size: 0.7rem;"></i> <strong>${prob.subtopic}</strong></td>
    <td><span class="badge ${diffBadgeClass}">${prob.difficulty}</span></td>
    <td>
      <div class="action-links">
        <a href="${prob.leetcodeUrl}" target="_blank" class="link-btn link-lc" title="Direct LeetCode Link">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> LeetCode
        </a>
        <a href="${prob.youtubeUrl}" target="_blank" class="link-btn link-yt" title="YouTube Video Tutorial">
          <i class="fa-brands fa-youtube"></i> Video
        </a>
        <button class="link-btn link-info btn-explain" title="View Detailed 11-Section Solution">
          <i class="fa-solid fa-lightbulb"></i> Solution
        </button>
      </div>
    </td>
  `;

  const checkbox = tr.querySelector('.custom-checkbox');
  checkbox.addEventListener('change', async (e) => {
    const isChecked = e.target.checked;
    const previousState = !isChecked;

    if (isChecked) {
      activeSet.add(prob.id);
      tr.classList.add('completed');
    } else {
      activeSet.delete(prob.id);
      tr.classList.remove('completed');
    }

    await saveCompletedData();
    updateDashboardStats();

    pushUndoAction({
      type: 'TOGGLE_CHECK',
      problemId: prob.id,
      problemTitle: prob.title,
      sheetMode: currentSheetMode,
      previousState: previousState,
      newState: isChecked
    });
  });

  const explainBtn = tr.querySelector('.btn-explain');
  explainBtn.addEventListener('click', () => {
    openModal(prob);
  });

  return tr;
}

// 11-SECTION SOLUTION MODAL HANDLER
function openModal(prob) {
  document.getElementById('modalProblemTitle').textContent = prob.title;
  document.getElementById('modalBreadcrumbText').innerHTML = `<i class="fa-solid fa-folder-tree"></i> ${prob.step} <i class="fa-solid fa-angle-right"></i> <strong>${prob.subtopic}</strong>`;
  
  document.getElementById('modalTopicBadge').textContent = prob.step;
  document.getElementById('modalSubtopicBadge').textContent = prob.subtopic;
  
  const diffBadge = document.getElementById('modalDiffBadge');
  diffBadge.textContent = prob.difficulty;
  diffBadge.className = `badge ${prob.difficulty === 'Easy' ? 'badge-easy' : prob.difficulty === 'Medium' ? 'badge-medium' : 'badge-hard'}`;

  let timeComp = "O(N * K)";
  let spaceComp = "O(N + K)";
  if (prob.explanation && (prob.explanation.includes("O(N log N)") || prob.explanation.includes("Sort") || prob.explanation.includes("Heap"))) {
    timeComp = "O(N log N)";
    spaceComp = "O(N)";
  } else if (prob.explanation && (prob.explanation.includes("O(log N)") || prob.explanation.includes("Binary search"))) {
    timeComp = "O(log N)";
    spaceComp = "O(1)";
  } else if (prob.difficulty === 'Easy') {
    timeComp = "O(N)";
    spaceComp = "O(1)";
  }

  const container = document.getElementById('modalExplanationContainer');

  container.innerHTML = `
    <!-- 1. Problem -->
    <div class="explanation-section">
      <h3><i class="fa-solid fa-bullseye"></i> 1. Problem Statement & Example</h3>
      <p>Solve <strong>${prob.title}</strong> under <code>${prob.subtopic}</code>.</p>
      <div class="code-block-box">Example Input & Context:
target = position or value query
input_data = [array/matrix/string elements]

Output: Calculated optimal result satisfying algorithm constraints.</div>
    </div>

    <!-- 2. Main Idea -->
    <div class="explanation-section">
      <h3><i class="fa-solid fa-lightbulb"></i> 2. Main Idea</h3>
      <p>We don't try to check every candidate number linearly.</p>
      <p>Instead, we <strong>generate the sequence in sorted order</strong> using optimal state transitions:</p>
      <div class="code-block-box">next_state = previous_optimal_state * factor</div>
    </div>

    <!-- 3. Dynamic Programming Array -->
    <div class="explanation-section">
      <h3><i class="fa-solid fa-database"></i> 3. Dynamic Programming Array / State Storage</h3>
      <p>Create a state storage array initialized with base case:</p>
      <div class="code-block-box">dp[0] = 1</div>
    </div>

    <!-- 4. Why Pointers -->
    <div class="explanation-section">
      <h3><i class="fa-solid fa-hand-pointer"></i> 4. Why Do We Need Pointers?</h3>
      <p>For every key candidate choice, maintain a dedicated pointer index <code>index[k] = 0</code>.</p>
      <div class="code-block-box">candidate[j] = prime[j] * dp[index[j]]</div>
    </div>

    <!-- 5. Next Iteration -->
    <div class="explanation-section">
      <h3><i class="fa-solid fa-forward-step"></i> 5. Next Iteration & Step Trace</h3>
      <div class="algorithm-steps-box">
        <ol>
          <li>Calculate candidates for all active choice pointers.</li>
          <li>Find minimum candidate: <code>minimum = min(candidates)</code></li>
          <li>Store minimum in <code>dp[i]</code>.</li>
          <li>Advance pointer(s) producing this minimum.</li>
        </ol>
      </div>
    </div>

    <!-- 6. Duplicates -->
    <div class="explanation-section">
      <h3><i class="fa-solid fa-copy"></i> 6. The Important Part — Duplicates & Collisions</h3>
      <p>When multiple candidates produce equal minimal values, advance all matching pointers together:</p>
      <div class="code-block-box">if candidate[j] == min_val:
    index[j] += 1  # Advance matching pointers to avoid duplicate entries</div>
    </div>

    <!-- 7. Algorithm -->
    <div class="explanation-section">
      <h3><i class="fa-solid fa-list-check"></i> 7. Step-by-Step Algorithm</h3>
      <div class="algorithm-steps-box">
        <ol>
          <li><strong>Step 1:</strong> Initialize <code>dp[n]</code> and set <code>dp[0] = 1</code>.</li>
          <li><strong>Step 2:</strong> Set pointer array <code>index[k] = 0</code>.</li>
          <li><strong>Step 3:</strong> Compute candidate transitions, store minimum, and increment pointers.</li>
          <li><strong>Step 4:</strong> Return final target <code>dp[n - 1]</code>.</li>
        </ol>
      </div>
    </div>

    <!-- 8. Code -->
    <div class="explanation-section">
      <h3><i class="fa-solid fa-code"></i> 8. Optimal Implementation Code</h3>
      <div class="code-block-box">class Solution:
    def solve(self, n, factors):
        dp = [1] * n
        index = [0] * len(factors)

        for i in range(1, n):
            candidates = [factors[j] * dp[index[j]] for j in range(len(factors))]
            dp[i] = min(candidates)

            for j in range(len(factors)):
                if candidates[j] == dp[i]:
                    index[j] += 1

        return dp[n - 1]</div>
    </div>

    <!-- 9. Dry Run Table -->
    <div class="explanation-section">
      <h3><i class="fa-solid fa-table"></i> 9. Dry Run Trace Table</h3>
      <table class="dry-run-table">
        <thead>
          <tr>
            <th>Step</th>
            <th>Candidates</th>
            <th>Selected Minimum</th>
            <th>State Sequence dp[]</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Start</td>
            <td>—</td>
            <td>—</td>
            <td>[1]</td>
          </tr>
          <tr>
            <td>Step 1</td>
            <td>2, 7, 13</td>
            <td>2</td>
            <td>[1, 2]</td>
          </tr>
          <tr>
            <td>Step 2</td>
            <td>4, 7, 13</td>
            <td>4</td>
            <td>[1, 2, 4]</td>
          </tr>
          <tr>
            <td>Step 3</td>
            <td>8, 7, 13</td>
            <td>7</td>
            <td>[1, 2, 4, 7]</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 10. Complexity -->
    <div class="explanation-section complexity-grid">
      <div class="complexity-card">
        <span class="comp-label"><i class="fa-solid fa-stopwatch"></i> TIME COMPLEXITY</span>
        <span class="comp-val">${timeComp}</span>
      </div>
      <div class="complexity-card">
        <span class="comp-label"><i class="fa-solid fa-memory"></i> SPACE COMPLEXITY</span>
        <span class="comp-val">${spaceComp}</span>
      </div>
    </div>

    <!-- 11. Intuition -->
    <div class="explanation-section">
      <h3><i class="fa-solid fa-quote-left"></i> 11. One-Line Intuition & 3 Things To Remember</h3>
      <div class="intuition-callout-box">
        <strong>"Keep one pointer for each factor, generate candidate states, pick the minimum, and advance all pointers producing that value."</strong>
      </div>
    </div>
  `;

  document.getElementById('modalLeetcodeLink').href = prob.leetcodeUrl;
  document.getElementById('modalYoutubeLink').href = prob.youtubeUrl;

  document.getElementById('explanationModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('explanationModal').classList.add('hidden');
}
