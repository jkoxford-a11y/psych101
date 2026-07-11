/* Action Potential Threshold and All-or-Nothing */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch03-action-potential-threshold';
  const THRESHOLD = 50;
  const STIMULI = [30, 45, 49, 50, 65, 85];
  const predictionLabels = {
    taller: 'A stronger stimulus produces a taller action potential.',
    same: 'Once threshold is crossed, action potentials stay approximately the same size.',
    unpredictable: 'There is no predictable relationship.'
  };

  const state = {
    prediction: '',
    trials: [],
    sustainedTrials: [],
    explanation: '',
    transfer: ''
  };

  const elements = {};

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();
    renderAll();
  }

  function cacheElements() {
    ['prediction-panel', 'prediction-form', 'commit-prediction', 'prediction-status', 'threshold-panel',
      'threshold-progress', 'stimulus-controls', 'voltage-trace', 'trial-result', 'stat-stimulus',
      'stat-threshold', 'stat-spike', 'stat-peak', 'threshold-log', 'frequency-panel', 'run-weaker',
      'run-stronger', 'frequency-result', 'frequency-log', 'concept-panel', 'explain-panel',
      'explain-response', 'save-explanation', 'explain-status', 'transfer-panel', 'completion-summary',
      'transfer-response', 'save-transfer', 'restart-lab', 'transfer-status'].forEach(function (id) {
      elements[toCamel(id)] = document.getElementById(id);
    });
  }

  function bindEvents() {
    elements.commitPrediction.addEventListener('click', commitPrediction);
    elements.stimulusControls.querySelectorAll('[data-stimulus]').forEach(function (button) {
      button.addEventListener('click', function () {
        runThresholdTrial(Number(button.dataset.stimulus));
      });
    });
    elements.runWeaker.addEventListener('click', function () { runSustainedTrial('weaker'); });
    elements.runStronger.addEventListener('click', function () { runSustainedTrial('stronger'); });
    elements.saveExplanation.addEventListener('click', saveExplanation);
    elements.saveTransfer.addEventListener('click', saveTransfer);
    elements.restartLab.addEventListener('click', restartLab);
  }

  function renderAll() {
    renderPrediction();
    elements.thresholdPanel.hidden = !state.prediction;
    elements.frequencyPanel.hidden = !thresholdPatternEstablished();
    elements.conceptPanel.hidden = !sustainedComplete();
    elements.explainPanel.hidden = !sustainedComplete();
    elements.transferPanel.hidden = !state.explanation;

    if (!state.prediction) return;
    renderThresholdTrials();
    if (thresholdPatternEstablished()) renderSustainedTrials();
    if (sustainedComplete()) renderExplanation();
    if (state.explanation) renderTransfer();
  }

  function renderPrediction() {
    setCheckedValue(elements.predictionForm, 'prediction', state.prediction);
    elements.predictionForm.querySelectorAll('input[name="prediction"]').forEach(function (input) {
      input.disabled = Boolean(state.prediction);
    });
    elements.commitPrediction.disabled = Boolean(state.prediction);
    elements.predictionStatus.textContent = state.prediction ? `Prediction committed: ${predictionLabels[state.prediction]}` : '';
  }

  function commitPrediction() {
    const prediction = getCheckedValue(elements.predictionForm, 'prediction');
    if (!prediction) {
      elements.predictionStatus.textContent = 'Choose a prediction before continuing.';
      elements.predictionForm.querySelector('input[name="prediction"]').focus();
      return;
    }
    state.prediction = prediction;
    saveAndRender();
    focusHeading('threshold-heading');
  }

  function runThresholdTrial(stimulus) {
    if (state.trials.indexOf(stimulus) !== -1) return;
    const wasComplete = thresholdPatternEstablished();
    state.trials.push(stimulus);
    saveAndRender();
    if (!wasComplete && thresholdPatternEstablished()) focusHeading('frequency-heading');
  }

  function renderThresholdTrials() {
    const lastStimulus = state.trials[state.trials.length - 1];
    const hasLast = typeof lastStimulus === 'number';
    elements.thresholdProgress.textContent = `${state.trials.length} of ${STIMULI.length} available threshold trials run`;
    elements.stimulusControls.querySelectorAll('[data-stimulus]').forEach(function (button) {
      button.disabled = state.trials.indexOf(Number(button.dataset.stimulus)) !== -1;
    });

    if (hasLast) {
      const fired = lastStimulus >= THRESHOLD;
      elements.statStimulus.textContent = `${lastStimulus} normalized units`;
      elements.statThreshold.textContent = fired ? 'Yes' : 'No';
      elements.statSpike.textContent = fired ? 'Yes' : 'No';
      elements.statPeak.textContent = fired ? '100 normalized spike units' : '0 normalized spike units';
      elements.trialResult.innerHTML = fired
        ? `<strong>Threshold crossed; action potential occurred.</strong> The schematic peak is 100 normalized spike units.`
        : `<strong>Threshold not crossed; no action potential occurred.</strong> The input produced only a small graded change.`;
      renderVoltageTrace(lastStimulus, fired);
    }

    renderLog(elements.thresholdLog, state.trials.map(function (stimulus, index) {
      const fired = stimulus >= THRESHOLD;
      return `Trial ${index + 1}: stimulus ${stimulus}; threshold ${fired ? 'crossed' : 'not crossed'}; action potential ${fired ? 'occurred' : 'did not occur'}; action-potential peak ${fired ? '100' : '0'} normalized spike units.`;
    }));
  }

  function renderVoltageTrace(stimulus, fired) {
    if (fired) {
      elements.voltageTrace.setAttribute('class', 'trace-spike');
      elements.voltageTrace.setAttribute('d', 'M70 225 L230 225 C270 225 290 190 315 155 C330 125 342 55 360 45 C378 55 390 205 420 235 C460 250 490 225 525 225 L690 225');
    } else {
      const peakY = Math.max(162, 225 - stimulus * 1.2);
      elements.voltageTrace.setAttribute('class', 'trace-subthreshold');
      elements.voltageTrace.setAttribute('d', `M70 225 L245 225 C290 225 315 ${peakY} 360 ${peakY} C405 ${peakY} 430 225 475 225 L690 225`);
    }
  }

  function runSustainedTrial(kind) {
    if (state.sustainedTrials.indexOf(kind) !== -1) return;
    const wasComplete = sustainedComplete();
    state.sustainedTrials.push(kind);
    saveAndRender();
    if (!wasComplete && sustainedComplete()) focusHeading('concept-heading');
  }

  function renderSustainedTrials() {
    elements.runWeaker.disabled = state.sustainedTrials.indexOf('weaker') !== -1;
    elements.runStronger.disabled = state.sustainedTrials.indexOf('stronger') !== -1;
    const last = state.sustainedTrials[state.sustainedTrials.length - 1];
    if (last) {
      const spikes = last === 'weaker' ? 4 : 9;
      elements.frequencyResult.innerHTML = `<strong>${capitalize(last)} sustained input:</strong> ${spikes} spikes in 5 schematic seconds; each spike peaks at approximately 100 normalized units.`;
    }
    renderLog(elements.frequencyLog, state.sustainedTrials.map(function (kind) {
      const spikes = kind === 'weaker' ? 4 : 9;
      return `${capitalize(kind)} sustained input: ${spikes} spikes in 5 schematic seconds; individual spike height approximately 100 normalized units.`;
    }));
  }

  function renderExplanation() {
    elements.explainResponse.value = state.explanation;
    elements.explainStatus.textContent = state.explanation ? 'Explanation saved in this browser session.' : '';
  }

  function saveExplanation() {
    const response = elements.explainResponse.value.trim();
    if (!response) {
      elements.explainStatus.textContent = 'Write an explanation before saving.';
      elements.explainResponse.focus();
      return;
    }
    const firstSave = !state.explanation;
    state.explanation = response;
    saveAndRender();
    if (firstSave) focusHeading('transfer-heading');
  }

  function renderTransfer() {
    elements.completionSummary.textContent = `You observed ${countTrials(false)} subthreshold trial(s) with no spike and ${countTrials(true)} suprathreshold trial(s) with the same 100-unit schematic peak. Stronger sustained input increased firing rate rather than spike height.`;
    elements.transferResponse.value = state.transfer;
    elements.transferStatus.textContent = state.transfer ? 'Transfer response saved in this browser session.' : '';
  }

  function saveTransfer() {
    const response = elements.transferResponse.value.trim();
    const lower = response.toLowerCase();
    const hasRequiredTerms = lower.includes('threshold') && lower.includes('action potential') && (lower.includes('firing rate') || lower.includes('neural recruitment'));
    if (!response || !hasRequiredTerms) {
      elements.transferStatus.textContent = 'Use threshold, action potential, and either firing rate or neural recruitment before saving.';
      elements.transferResponse.focus();
      return;
    }
    state.transfer = response;
    saveAndRender();
    elements.transferStatus.textContent = 'Transfer response saved in this browser session. Lab complete.';
  }

  function restartLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state.prediction = '';
    state.trials = [];
    state.sustainedTrials = [];
    state.explanation = '';
    state.transfer = '';
    elements.predictionForm.reset();
    renderAll();
    focusHeading('prediction-heading');
    scrollToTop();
  }

  function thresholdPatternEstablished() {
    return countTrials(false) >= 1 && countTrials(true) >= 2;
  }

  function sustainedComplete() {
    return state.sustainedTrials.indexOf('weaker') !== -1 && state.sustainedTrials.indexOf('stronger') !== -1;
  }

  function countTrials(fired) {
    return state.trials.filter(function (stimulus) { return (stimulus >= THRESHOLD) === fired; }).length;
  }

  function renderLog(container, entries) {
    const list = container.querySelector('ol');
    list.innerHTML = '';
    entries.forEach(function (entry) {
      const item = document.createElement('li');
      item.textContent = entry;
      list.appendChild(item);
    });
  }

  function saveAndRender() {
    saveState();
    renderAll();
  }

  function saveState() {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (error) { /* Page remains usable without persistence. */ }
  }

  function restoreState() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
      if (!saved) return;
      state.prediction = predictionLabels[saved.prediction] ? saved.prediction : '';
      state.trials = Array.isArray(saved.trials) ? saved.trials.filter(function (value) { return STIMULI.indexOf(value) !== -1; }) : [];
      state.sustainedTrials = Array.isArray(saved.sustainedTrials) ? saved.sustainedTrials.filter(function (value) { return value === 'weaker' || value === 'stronger'; }) : [];
      state.explanation = saved.explanation || '';
      state.transfer = saved.transfer || '';
    } catch (error) { sessionStorage.removeItem(STORAGE_KEY); }
  }

  function getCheckedValue(form, name) {
    const checked = form.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : '';
  }

  function setCheckedValue(form, name, value) {
    const input = form.querySelector(`input[name="${name}"][value="${value}"]`);
    if (input) input.checked = true;
  }

  function focusHeading(id) {
    const heading = document.getElementById(id);
    if (heading) heading.focus();
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  function capitalize(value) { return value.charAt(0).toUpperCase() + value.slice(1); }
  function toCamel(value) { return value.replace(/-([a-z])/g, function (match, letter) { return letter.toUpperCase(); }); }

  document.addEventListener('DOMContentLoaded', initializeLab);
})();
