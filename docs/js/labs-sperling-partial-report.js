/* Sperling Partial-Report Learning Lab — Chapter 8 */

(function () {
  'use strict';

  var STORAGE_KEY = 'psych101-lab-ch08-sperling-partial-report-v1';
  var FLASH_MS = 100;

  var WHOLE_GRIDS = [
    [['B', 'D', 'F'], ['G', 'K', 'M'], ['P', 'R', 'T']],
    [['C', 'H', 'L'], ['N', 'S', 'V'], ['W', 'X', 'Z']],
    [['B', 'F', 'P'], ['D', 'K', 'S'], ['G', 'M', 'T']]
  ];

  var PARTIAL_GRIDS = [
    [['R', 'N', 'K'], ['B', 'V', 'T'], ['G', 'H', 'P']],
    [['F', 'S', 'M'], ['C', 'L', 'D'], ['W', 'B', 'X']],
    [['T', 'G', 'R'], ['N', 'P', 'S'], ['D', 'K', 'F']]
  ];

  var PARTIAL_CUE_ROWS = [0, 1, 2];
  var PARTIAL_CUE_LABELS = ['TOP', 'MIDDLE', 'BOTTOM'];
  var PARTIAL_CUE_DESCRIPTIONS = ['top', 'middle', 'bottom'];

  var state = createInitialState();
  var interactionLocked = false;
  var flashActive = false;
  var trialSubState = 'ready';
  var el = {};

  function createInitialState() {
    return {
      committed: false,
      predictionCount: '',
      predictionReason: '',
      phase: 'prediction',
      wholeTrialIndex: 0,
      wholeResponses: [],
      wholeScores: [],
      partialTrialIndex: 0,
      partialResponses: [],
      partialScores: [],
      explanation: '',
      explanationCommitted: false,
      transfer: '',
      lastStatus: ''
    };
  }

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();
    renderAll();
  }

  function cacheElements() {
    el.predictionRadios = Array.from(document.querySelectorAll('input[name="prediction-count"]'));
    el.predictionReason = document.getElementById('prediction-reason');
    el.commitPrediction = document.getElementById('commit-prediction');
    el.predictionStatus = document.getElementById('prediction-status');

    el.wholeIntroPanel = document.getElementById('whole-intro-panel');
    el.startWhole = document.getElementById('start-whole');

    el.wholePanel = document.getElementById('whole-panel');
    el.wholeCounter = document.getElementById('whole-counter');
    el.wholeTrialNum = document.getElementById('whole-trial-num');
    el.wholeReadySection = document.getElementById('whole-ready-section');
    el.wholeGridContainer = document.getElementById('whole-grid-container');
    el.wholeFlashBtn = document.getElementById('whole-flash-btn');
    el.wholeResponseSection = document.getElementById('whole-response-section');
    el.wholeResponse = document.getElementById('whole-response');
    el.submitWhole = document.getElementById('submit-whole');
    el.wholeStatus = document.getElementById('whole-status');

    el.wholeResultsPanel = document.getElementById('whole-results-panel');
    el.wholeResultsSummary = document.getElementById('whole-results-summary');
    el.wholeResultsBody = document.getElementById('whole-results-body');
    el.continueToPartial = document.getElementById('continue-to-partial');

    el.partialIntroPanel = document.getElementById('partial-intro-panel');
    el.startPartial = document.getElementById('start-partial');

    el.partialPanel = document.getElementById('partial-panel');
    el.partialCounter = document.getElementById('partial-counter');
    el.partialTrialNum = document.getElementById('partial-trial-num');
    el.partialReadySection = document.getElementById('partial-ready-section');
    el.partialGridContainer = document.getElementById('partial-grid-container');
    el.partialFlashBtn = document.getElementById('partial-flash-btn');
    el.partialResponseSection = document.getElementById('partial-response-section');
    el.partialCueLabel = document.getElementById('partial-cue-label');
    el.partialResponse = document.getElementById('partial-response');
    el.submitPartial = document.getElementById('submit-partial');
    el.partialStatus = document.getElementById('partial-status');

    el.resultsPanel = document.getElementById('results-panel');
    el.resultsSummary = document.getElementById('results-summary');
    el.avgWhole = document.getElementById('avg-whole');
    el.avgPartial = document.getElementById('avg-partial');
    el.estimatedCapacity = document.getElementById('estimated-capacity');
    el.partialResultsBody = document.getElementById('partial-results-body');
    el.explanationResponse = document.getElementById('explanation-response');
    el.saveExplanation = document.getElementById('save-explanation');
    el.explanationStatus = document.getElementById('explanation-status');

    el.transferPanel = document.getElementById('transfer-panel');
    el.completionSummary = document.getElementById('completion-summary');
    el.transferResponse = document.getElementById('transfer-response');
    el.saveTransfer = document.getElementById('save-transfer');
    el.restartLab = document.getElementById('restart-lab');
    el.transferStatus = document.getElementById('transfer-status');
  }

  function bindEvents() {
    el.commitPrediction.addEventListener('click', commitPrediction);
    el.startWhole.addEventListener('click', startWholeTrials);
    el.wholeFlashBtn.addEventListener('click', doWholeFlash);
    el.submitWhole.addEventListener('click', submitWholeResponse);
    el.wholeResponse.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); submitWholeResponse(); }
    });
    el.continueToPartial.addEventListener('click', continueToPartial);
    el.startPartial.addEventListener('click', startPartialTrials);
    el.partialFlashBtn.addEventListener('click', doPartialFlash);
    el.submitPartial.addEventListener('click', submitPartialResponse);
    el.partialResponse.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); submitPartialResponse(); }
    });
    el.saveExplanation.addEventListener('click', saveExplanation);
    el.saveTransfer.addEventListener('click', saveTransfer);
    el.restartLab.addEventListener('click', restartLab);
  }

  // --- Action handlers ---

  function commitPrediction() {
    var selected = el.predictionRadios.find(function (r) { return r.checked; });
    var reason = el.predictionReason.value.trim();
    if (!selected) {
      el.predictionStatus.textContent = 'Choose a prediction before continuing.';
      el.predictionRadios[0].focus();
      return;
    }
    if (!reason) {
      el.predictionStatus.textContent = 'Write your reasoning before continuing.';
      el.predictionReason.focus();
      return;
    }
    state.committed = true;
    state.predictionCount = selected.value;
    state.predictionReason = reason;
    state.phase = 'whole-intro';
    saveState();
    renderAll();
    focusHeading('whole-intro-heading');
  }

  function startWholeTrials() {
    if (state.phase !== 'whole-intro') return;
    state.phase = 'whole-trials';
    trialSubState = 'ready';
    state.lastStatus = '';
    saveState();
    renderAll();
    focusHeading('whole-heading');
  }

  function doWholeFlash() {
    if (state.phase !== 'whole-trials' || flashActive) return;
    flashActive = true;
    el.wholeFlashBtn.disabled = true;
    var grid = WHOLE_GRIDS[state.wholeTrialIndex];
    renderGridInContainer(el.wholeGridContainer, grid);
    el.wholeGridContainer.hidden = false;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setTimeout(function () {
          el.wholeGridContainer.hidden = true;
          flashActive = false;
          trialSubState = 'responding';
          renderAll();
          el.wholeResponse.focus();
        }, FLASH_MS);
      });
    });
  }

  function submitWholeResponse() {
    if (state.phase !== 'whole-trials' || trialSubState !== 'responding' || !beginInteraction()) return;
    var response = el.wholeResponse.value.trim();
    var grid = WHOLE_GRIDS[state.wholeTrialIndex];
    var score = scoreResponse(response, grid.flat());
    state.wholeResponses.push(response);
    state.wholeScores.push(score);
    state.wholeTrialIndex += 1;
    el.wholeResponse.value = '';
    if (state.wholeTrialIndex >= 3) {
      state.phase = 'whole-results';
      state.lastStatus = '';
      saveState();
      renderAll();
      focusHeading('whole-results-heading');
    } else {
      state.lastStatus = 'Trial ' + state.wholeTrialIndex + ' of 3 recorded.';
      trialSubState = 'ready';
      saveState();
      renderAll();
      focusHeading('whole-heading');
    }
  }

  function continueToPartial() {
    if (state.phase !== 'whole-results' || !beginInteraction()) return;
    state.phase = 'partial-intro';
    state.lastStatus = '';
    saveState();
    renderAll();
    focusHeading('partial-intro-heading');
  }

  function startPartialTrials() {
    if (state.phase !== 'partial-intro') return;
    state.phase = 'partial-trials';
    trialSubState = 'ready';
    state.lastStatus = '';
    saveState();
    renderAll();
    focusHeading('partial-heading');
  }

  function doPartialFlash() {
    if (state.phase !== 'partial-trials' || flashActive) return;
    flashActive = true;
    el.partialFlashBtn.disabled = true;
    var grid = PARTIAL_GRIDS[state.partialTrialIndex];
    renderGridInContainer(el.partialGridContainer, grid);
    el.partialGridContainer.hidden = false;
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setTimeout(function () {
          el.partialGridContainer.hidden = true;
          flashActive = false;
          trialSubState = 'responding';
          renderAll();
          el.partialResponse.focus();
        }, FLASH_MS);
      });
    });
  }

  function submitPartialResponse() {
    if (state.phase !== 'partial-trials' || trialSubState !== 'responding' || !beginInteraction()) return;
    var response = el.partialResponse.value.trim();
    var cueRowIndex = PARTIAL_CUE_ROWS[state.partialTrialIndex];
    var targetLetters = PARTIAL_GRIDS[state.partialTrialIndex][cueRowIndex];
    var score = scoreResponse(response, targetLetters);
    state.partialResponses.push(response);
    state.partialScores.push(score);
    state.partialTrialIndex += 1;
    el.partialResponse.value = '';
    if (state.partialTrialIndex >= 3) {
      state.phase = 'results';
      state.lastStatus = '';
      saveState();
      renderAll();
      focusHeading('results-heading');
    } else {
      state.lastStatus = 'Trial ' + state.partialTrialIndex + ' of 3 recorded.';
      trialSubState = 'ready';
      saveState();
      renderAll();
      focusHeading('partial-heading');
    }
  }

  function saveExplanation() {
    var text = el.explanationResponse.value.trim();
    if (!text) {
      el.explanationStatus.textContent = 'Write an explanation before continuing.';
      el.explanationResponse.focus();
      return;
    }
    state.explanation = text;
    state.explanationCommitted = true;
    saveState();
    renderAll();
    el.explanationStatus.textContent = 'Explanation saved in this browser session.';
    focusHeading('transfer-heading');
  }

  function saveTransfer() {
    state.transfer = el.transferResponse.value.trim();
    saveState();
    el.transferStatus.textContent = state.transfer
      ? 'Transfer response saved in this browser session.'
      : 'Transfer response cleared.';
  }

  function restartLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state = createInitialState();
    trialSubState = 'ready';
    flashActive = false;
    interactionLocked = false;
    el.predictionStatus.textContent = '';
    el.wholeStatus.textContent = '';
    el.partialStatus.textContent = '';
    el.explanationStatus.textContent = '';
    el.transferStatus.textContent = '';
    renderAll();
    el.predictionRadios[0].focus();
    window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }

  // --- Rendering ---

  function renderAll() {
    renderPrediction();
    renderWholeIntro();
    renderWholeTrials();
    renderWholeResults();
    renderPartialIntro();
    renderPartialTrials();
    renderResults();
    renderTransfer();
  }

  function renderPrediction() {
    el.predictionRadios.forEach(function (r) {
      r.checked = r.value === state.predictionCount;
      r.disabled = state.committed;
    });
    el.predictionReason.disabled = state.committed;
    el.commitPrediction.disabled = state.committed;
    if (state.committed && !el.predictionStatus.textContent) {
      el.predictionStatus.textContent = 'Prediction committed and saved for this session.';
    }
  }

  function renderWholeIntro() {
    el.wholeIntroPanel.hidden = state.phase !== 'whole-intro';
  }

  function renderWholeTrials() {
    var visible = state.phase === 'whole-trials';
    el.wholePanel.hidden = !visible;
    if (!visible) return;
    var trialNum = state.wholeTrialIndex + 1;
    el.wholeCounter.textContent = 'Trial ' + trialNum + ' of 3';
    el.wholeTrialNum.textContent = String(trialNum);
    el.wholeReadySection.hidden = trialSubState !== 'ready';
    el.wholeFlashBtn.disabled = flashActive;
    el.wholeResponseSection.hidden = trialSubState !== 'responding';
    el.submitWhole.disabled = interactionLocked;
    el.wholeStatus.textContent = state.lastStatus;
  }

  function renderWholeResults() {
    var visible = state.phase === 'whole-results';
    el.wholeResultsPanel.hidden = !visible;
    el.continueToPartial.disabled = !visible || interactionLocked;
    if (!visible) return;
    var total = 0;
    el.wholeResultsBody.innerHTML = '';
    WHOLE_GRIDS.forEach(function (grid, i) {
      var score = state.wholeScores[i] || 0;
      total += score;
      var gridStr = grid.map(function (row) { return row.join(' '); }).join(' / ');
      var tr = document.createElement('tr');
      var thNum = document.createElement('th');
      thNum.scope = 'row';
      thNum.textContent = String(i + 1);
      var tdGrid = document.createElement('td');
      tdGrid.textContent = gridStr;
      var tdResp = document.createElement('td');
      tdResp.textContent = (state.wholeResponses[i] || '').toUpperCase() || '—';
      var tdScore = document.createElement('td');
      tdScore.textContent = score + ' of 9';
      tr.appendChild(thNum);
      tr.appendChild(tdGrid);
      tr.appendChild(tdResp);
      tr.appendChild(tdScore);
      el.wholeResultsBody.appendChild(tr);
    });
    var avg = (total / 3).toFixed(1);
    el.wholeResultsSummary.textContent = 'Across three whole-report trials, you correctly identified an average of ' + avg + ' letters per trial (out of 9 available).';
  }

  function renderPartialIntro() {
    el.partialIntroPanel.hidden = state.phase !== 'partial-intro';
  }

  function renderPartialTrials() {
    var visible = state.phase === 'partial-trials';
    el.partialPanel.hidden = !visible;
    if (!visible) return;
    var trialNum = state.partialTrialIndex + 1;
    el.partialCounter.textContent = 'Trial ' + trialNum + ' of 3';
    el.partialTrialNum.textContent = String(trialNum);
    el.partialReadySection.hidden = trialSubState !== 'ready';
    el.partialFlashBtn.disabled = flashActive;
    el.partialResponseSection.hidden = trialSubState !== 'responding';
    if (trialSubState === 'responding') {
      var cueRow = PARTIAL_CUE_ROWS[state.partialTrialIndex];
      el.partialCueLabel.textContent = 'Report the ' + PARTIAL_CUE_LABELS[cueRow] + ' row:';
    }
    el.submitPartial.disabled = interactionLocked;
    el.partialStatus.textContent = state.lastStatus;
  }

  function renderResults() {
    var visible = state.phase === 'results';
    el.resultsPanel.hidden = !visible;
    if (!visible) return;

    var totalW = state.wholeScores.reduce(function (a, b) { return a + b; }, 0);
    var totalP = state.partialScores.reduce(function (a, b) { return a + b; }, 0);
    var avgW = totalW / 3;
    var avgP = totalP / 3;
    var estimated = avgP * 3;

    el.avgWhole.textContent = avgW.toFixed(1) + ' of 9';
    el.avgPartial.textContent = avgP.toFixed(1) + ' of 3';
    el.estimatedCapacity.textContent = estimated.toFixed(1) + ' of 9';

    var comparison;
    if (estimated > avgW) {
      comparison = 'Your estimated full-grid capacity (' + estimated.toFixed(1) + ') exceeded your whole-report average (' + avgW.toFixed(1) + '), demonstrating the partial-report advantage. The gap shows how much more iconic memory held than verbal encoding could extract in whole-report conditions.';
    } else {
      comparison = 'Your estimated capacity (' + estimated.toFixed(1) + ') was at or below your whole-report average (' + avgW.toFixed(1) + '). This can happen with a small number of trials, with variation in browser flash timing, or when partial-report strategy differs from what the paradigm assumes. The group-level pattern is more reliable than any individual result.';
    }
    el.resultsSummary.textContent = comparison;

    el.partialResultsBody.innerHTML = '';
    PARTIAL_GRIDS.forEach(function (grid, i) {
      var cueRow = PARTIAL_CUE_ROWS[i];
      var rowLetters = grid[cueRow].join(' ');
      var score = state.partialScores[i] || 0;
      var tr = document.createElement('tr');
      var thNum = document.createElement('th');
      thNum.scope = 'row';
      thNum.textContent = String(i + 1);
      var tdCue = document.createElement('td');
      tdCue.textContent = PARTIAL_CUE_DESCRIPTIONS[cueRow];
      var tdRow = document.createElement('td');
      tdRow.textContent = rowLetters;
      var tdResp = document.createElement('td');
      tdResp.textContent = (state.partialResponses[i] || '').toUpperCase() || '—';
      var tdScore = document.createElement('td');
      tdScore.textContent = score + ' of 3';
      tr.appendChild(thNum);
      tr.appendChild(tdCue);
      tr.appendChild(tdRow);
      tr.appendChild(tdResp);
      tr.appendChild(tdScore);
      el.partialResultsBody.appendChild(tr);
    });

    el.explanationResponse.value = state.explanation;
    el.saveExplanation.disabled = state.explanationCommitted;
    if (state.explanationCommitted) {
      el.explanationStatus.textContent = 'Explanation saved in this browser session.';
    }
  }

  function renderTransfer() {
    var visible = state.phase === 'results' && state.explanationCommitted;
    el.transferPanel.hidden = !visible;
    if (!visible) return;
    var avgW = (state.wholeScores.reduce(function (a, b) { return a + b; }, 0) / 3).toFixed(1);
    var avgP = (state.partialScores.reduce(function (a, b) { return a + b; }, 0) / 3).toFixed(1);
    var estimated = (parseFloat(avgP) * 3).toFixed(1);
    el.completionSummary.textContent = 'Your results: whole-report average = ' + avgW + ' of 9; partial-report average = ' + avgP + ' of 3 per row; estimated iconic capacity = ' + estimated + ' of 9.';
    el.transferResponse.value = state.transfer;
  }

  // --- Utility ---

  function renderGridInContainer(container, grid) {
    var table = document.createElement('table');
    table.setAttribute('role', 'presentation');
    table.style.margin = '0 auto';
    table.style.borderCollapse = 'separate';
    table.style.borderSpacing = '10px 6px';
    grid.forEach(function (row) {
      var tr = document.createElement('tr');
      row.forEach(function (letter) {
        var td = document.createElement('td');
        td.textContent = letter;
        td.style.fontSize = '2.4rem';
        td.style.fontWeight = 'bold';
        td.style.fontFamily = 'monospace, monospace';
        td.style.width = '2.8rem';
        td.style.textAlign = 'center';
        td.style.lineHeight = '1.4';
        td.style.padding = '0';
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    container.innerHTML = '';
    container.appendChild(table);
  }

  function scoreResponse(response, targetLetters) {
    var typed = response.toUpperCase().replace(/[^A-Z]/g, '').split('');
    var pool = targetLetters.map(function (l) { return l.toUpperCase(); });
    var correct = 0;
    typed.forEach(function (letter) {
      var idx = pool.indexOf(letter);
      if (idx !== -1) {
        correct += 1;
        pool.splice(idx, 1);
      }
    });
    return correct;
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* sessionStorage unavailable */
    }
  }

  function restoreState() {
    var saved;
    try {
      saved = sessionStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return;
    }
    if (!saved) return;
    try {
      var restored = JSON.parse(saved);
      if (isValidState(restored)) {
        state = restored;
        trialSubState = 'ready';
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  function isValidState(s) {
    return s &&
      typeof s.phase === 'string' &&
      typeof s.committed === 'boolean' &&
      typeof s.wholeTrialIndex === 'number' &&
      typeof s.partialTrialIndex === 'number' &&
      Array.isArray(s.wholeResponses) &&
      Array.isArray(s.wholeScores) &&
      Array.isArray(s.partialResponses) &&
      Array.isArray(s.partialScores);
  }

  function beginInteraction() {
    if (interactionLocked) return false;
    interactionLocked = true;
    window.setTimeout(function () {
      interactionLocked = false;
      renderAll();
    }, 300);
    return true;
  }

  function focusHeading(id) {
    var h = document.getElementById(id);
    if (h) {
      h.focus();
      h.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
}());
