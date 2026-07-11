/* Dopamine Prediction Error */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch03-dopamine-prediction-error';
  const directionLabels = { positive: 'Positive', zero: 'Approximately zero', negative: 'Negative' };
  const trials = [
    {
      name: 'Unexpected reward with no predictive cue',
      scenario: 'No cue occurs. A reward arrives unexpectedly.',
      cue: 'No predictive cue', reward: 'Delivered unexpectedly', expected: '0.0', actual: '1.0', error: 'positive', relation: 'Actual reward (1.0) − expected reward (0.0) = +1.0 normalized teaching-model units.', pattern: 'outcome-positive'
    },
    {
      name: 'Early cue–reward learning',
      scenario: 'A new cue appears, but the reward is not yet fully expected. The reward then arrives.',
      cue: 'New cue before reward', reward: 'Delivered', expected: '0.3', actual: '1.0', error: 'positive', relation: 'Actual reward (1.0) − partial expectation (0.3) = +0.7 normalized teaching-model units.', pattern: 'cue-small-outcome-positive'
    },
    {
      name: 'Well-learned predictive cue followed by reward',
      scenario: 'A familiar cue now predicts the reward reliably. The expected reward arrives.',
      cue: 'Well-learned cue before reward', reward: 'Delivered as expected', expected: '1.0', actual: '1.0', error: 'zero', relation: 'Actual reward (1.0) − expected reward (1.0) = approximately 0 new prediction error at delivery.', pattern: 'cue-positive-outcome-zero'
    },
    {
      name: 'Predictive cue followed by omitted reward',
      scenario: 'The familiar predictive cue appears, but the expected reward does not arrive.',
      cue: 'Well-learned cue before outcome time', reward: 'Omitted', expected: '1.0', actual: '0.0', error: 'negative', relation: 'Actual reward (0.0) − expected reward (1.0) = −1.0 normalized teaching-model units.', pattern: 'cue-positive-outcome-negative'
    },
    {
      name: 'Repeated omissions showing extinction',
      scenario: 'After several omissions, the cue still creates some expectation, but less than before. The reward is omitted again.',
      cue: 'Cue with weakened expectation', reward: 'Omitted again', expected: '0.4', actual: '0.0', error: 'negative', relation: 'Actual reward (0.0) − weakened expectation (0.4) = −0.4 normalized teaching-model units.', pattern: 'cue-small-outcome-negative-small'
    }
  ];

  const state = { prediction: '', currentIndex: 0, responses: [], explanation: '', transfer: '' };
  const elements = {};

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();
    renderAll();
  }

  function cacheElements() {
    ['prediction-panel', 'prediction-form', 'commit-prediction', 'prediction-status', 'trial-panel',
      'trial-counter', 'trial-stage', 'trial-name', 'trial-scenario', 'trial-prediction-form',
      'reveal-trial', 'trial-status', 'trial-result', 'plain-relation', 'stat-cue', 'stat-reward',
      'stat-expected', 'stat-actual', 'stat-error', 'cue-marker', 'cue-label', 'outcome-marker',
      'cue-signal-trace', 'outcome-signal-trace', 'visual-equivalent', 'next-trial', 'event-log',
      'concept-panel', 'explain-panel', 'explain-response', 'save-explanation', 'explain-status',
      'transfer-panel', 'completion-summary', 'transfer-response', 'save-transfer', 'restart-lab',
      'transfer-status'].forEach(function (id) {
      elements[toCamel(id)] = document.getElementById(id);
    });
  }

  function bindEvents() {
    elements.commitPrediction.addEventListener('click', commitPrediction);
    elements.revealTrial.addEventListener('click', revealTrial);
    elements.nextTrial.addEventListener('click', nextTrial);
    elements.saveExplanation.addEventListener('click', saveExplanation);
    elements.saveTransfer.addEventListener('click', saveTransfer);
    elements.restartLab.addEventListener('click', restartLab);
  }

  function renderAll() {
    renderPrediction();
    const trialsComplete = state.currentIndex >= trials.length;
    elements.trialPanel.hidden = !state.prediction || trialsComplete;
    elements.conceptPanel.hidden = !trialsComplete;
    elements.explainPanel.hidden = !trialsComplete;
    elements.transferPanel.hidden = !state.explanation;
    if (state.prediction && !trialsComplete) renderCurrentTrial();
    renderEventLog();
    if (trialsComplete) renderExplanation();
    if (state.explanation) renderTransfer();
  }

  function renderPrediction() {
    setCheckedValue(elements.predictionForm, 'prediction', state.prediction);
    elements.predictionForm.querySelectorAll('input[name="prediction"]').forEach(function (input) { input.disabled = Boolean(state.prediction); });
    elements.commitPrediction.disabled = Boolean(state.prediction);
    elements.predictionStatus.textContent = state.prediction ? `Prediction committed: ${directionLabels[state.prediction]}.` : '';
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
    focusHeading('trial-heading');
  }

  function renderCurrentTrial() {
    const trial = trials[state.currentIndex];
    const response = state.responses[state.currentIndex];
    elements.trialCounter.textContent = `Trial ${state.currentIndex + 1} of ${trials.length}`;
    elements.trialStage.textContent = 'Predict before revealing';
    elements.trialName.textContent = trial.name;
    elements.trialScenario.textContent = trial.scenario;
    elements.trialPredictionForm.reset();
    elements.trialResult.hidden = true;
    elements.trialStatus.textContent = 'Predict the outcome-time direction before revealing the trial.';
    setTrialControlsDisabled(false);
    elements.revealTrial.disabled = false;

    if (response) {
      setCheckedValue(elements.trialPredictionForm, 'trialPrediction', response.prediction);
      showTrialResult(trial, response);
    }
  }

  function revealTrial() {
    const prediction = getCheckedValue(elements.trialPredictionForm, 'trialPrediction');
    if (!prediction) {
      elements.trialStatus.textContent = 'Choose positive, approximately zero, or negative before revealing.';
      elements.trialPredictionForm.querySelector('input[name="trialPrediction"]').focus();
      return;
    }
    state.responses[state.currentIndex] = { prediction: prediction };
    saveAndRender();
    elements.trialResult.focus();
  }

  function showTrialResult(trial, response) {
    const matched = response.prediction === trial.error;
    elements.trialResult.hidden = false;
    elements.trialStage.textContent = 'Result revealed';
    elements.trialStatus.textContent = matched ? 'Your prediction matched the teaching model.' : `Your prediction was ${directionLabels[response.prediction].toLowerCase()}; the teaching model predicts ${directionLabels[trial.error].toLowerCase()}.`;
    elements.plainRelation.textContent = trial.relation;
    elements.statCue.textContent = trial.cue;
    elements.statReward.textContent = trial.reward;
    elements.statExpected.textContent = `${trial.expected} normalized outcome units`;
    elements.statActual.textContent = `${trial.actual} normalized outcome units`;
    elements.statError.textContent = directionLabels[trial.error];
    elements.visualEquivalent.textContent = buildVisualEquivalent(trial);
    elements.nextTrial.textContent = state.currentIndex === trials.length - 1 ? 'Show concept explanation' : 'Next trial';
    setTrialControlsDisabled(true);
    elements.revealTrial.disabled = true;
    renderSignal(trial);
  }

  function nextTrial() {
    if (!state.responses[state.currentIndex]) return;
    if (state.currentIndex === trials.length - 1) {
      state.currentIndex = trials.length;
      saveAndRender();
      focusHeading('concept-heading');
      return;
    }
    state.currentIndex += 1;
    saveAndRender();
    focusHeading('trial-heading');
  }

  function renderSignal(trial) {
    const hasCue = trial.cue !== 'No predictive cue';
    elements.cueMarker.style.visibility = hasCue ? 'visible' : 'hidden';
    elements.cueLabel.textContent = hasCue ? 'Cue time' : 'No cue';
    elements.cueLabel.setAttribute('x', hasCue ? '220' : '205');
    elements.outcomeMarker.setAttribute('class', trial.reward.indexOf('Omitted') === 0 ? 'timeline-omission' : 'timeline-event');

    const cuePaths = {
      'outcome-positive': 'M65 155 L65 155',
      'cue-small-outcome-positive': 'M65 155 L220 155 C235 155 240 120 250 110 C260 120 265 155 285 155',
      'cue-positive-outcome-zero': 'M65 155 L210 155 C230 155 235 70 250 55 C265 70 270 155 295 155',
      'cue-positive-outcome-negative': 'M65 155 L210 155 C230 155 235 70 250 55 C265 70 270 155 295 155',
      'cue-small-outcome-negative-small': 'M65 155 L215 155 C232 155 238 120 250 108 C262 120 268 155 290 155'
    };
    const outcomePaths = {
      'outcome-positive': 'M430 155 L480 155 C500 155 505 70 520 55 C535 70 540 155 565 155 L690 155',
      'cue-small-outcome-positive': 'M430 155 L480 155 C500 155 505 90 520 75 C535 90 540 155 565 155 L690 155',
      'cue-positive-outcome-zero': 'M430 155 L690 155',
      'cue-positive-outcome-negative': 'M430 155 L480 155 C500 155 505 230 520 245 C535 230 540 155 565 155 L690 155',
      'cue-small-outcome-negative-small': 'M430 155 L485 155 C502 155 508 195 520 205 C532 195 538 155 560 155 L690 155'
    };

    elements.cueSignalTrace.style.visibility = hasCue ? 'visible' : 'hidden';
    elements.cueSignalTrace.setAttribute('d', cuePaths[trial.pattern]);
    elements.cueSignalTrace.setAttribute('class', 'signal-positive');
    elements.outcomeSignalTrace.setAttribute('d', outcomePaths[trial.pattern]);
    elements.outcomeSignalTrace.setAttribute('class', trial.error === 'positive' ? 'signal-positive' : (trial.error === 'negative' ? 'signal-negative' : 'signal-zero'));
  }

  function buildVisualEquivalent(trial) {
    if (trial.pattern === 'cue-positive-outcome-zero') return 'Text equivalent: a positive teaching-model signal appears at the predictive cue; the delivered reward produces approximately zero new prediction error.';
    if (trial.error === 'negative') return `Text equivalent: a cue appears, then the omitted reward produces a ${trial.pattern.indexOf('small') !== -1 ? 'smaller ' : ''}negative teaching-model signal at the expected outcome time.`;
    return `Text equivalent: ${trial.cue === 'No predictive cue' ? 'no cue signal appears; ' : 'a cue signal appears; '}the reward produces a positive teaching-model signal at outcome time.`;
  }

  function renderEventLog() {
    const list = elements.eventLog.querySelector('ol');
    list.innerHTML = '';
    state.responses.forEach(function (response, index) {
      const trial = trials[index];
      const item = document.createElement('li');
      item.textContent = `${trial.name}: cue—${trial.cue}; reward—${trial.reward}; expected ${trial.expected}; actual ${trial.actual}; prediction error—${directionLabels[trial.error]}. ${trial.relation}`;
      list.appendChild(item);
    });
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
    elements.completionSummary.textContent = 'Across five trials, you observed positive prediction error for better-than-expected rewards, approximately zero new prediction error when reward matched a learned expectation, and negative prediction error when expected rewards were omitted. Repeated omission weakened the expectation and the negative error.';
    elements.transferResponse.value = state.transfer;
    elements.transferStatus.textContent = state.transfer ? 'Transfer response saved in this browser session.' : '';
  }

  function saveTransfer() {
    const response = elements.transferResponse.value.trim();
    const lower = response.toLowerCase();
    if (!response || !lower.includes('cue') || !lower.includes('expectation') || !lower.includes('prediction error')) {
      elements.transferStatus.textContent = 'Use cue, expectation, and prediction error before saving.';
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
    state.currentIndex = 0;
    state.responses = [];
    state.explanation = '';
    state.transfer = '';
    elements.predictionForm.reset();
    elements.trialPredictionForm.reset();
    renderAll();
    focusHeading('prediction-heading');
    scrollToTop();
  }

  function setTrialControlsDisabled(disabled) {
    elements.trialPredictionForm.querySelectorAll('input[name="trialPrediction"]').forEach(function (input) { input.disabled = disabled; });
  }

  function saveAndRender() { saveState(); renderAll(); }
  function saveState() { try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (error) { /* Page remains usable. */ } }

  function restoreState() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
      if (!saved) return;
      state.prediction = directionLabels[saved.prediction] ? saved.prediction : '';
      state.responses = Array.isArray(saved.responses) ? saved.responses.slice(0, trials.length) : [];
      state.currentIndex = Math.min(Number(saved.currentIndex) || 0, trials.length);
      if (state.responses.length < trials.length) state.currentIndex = Math.min(state.currentIndex, state.responses.length);
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

  function focusHeading(id) { const heading = document.getElementById(id); if (heading) heading.focus(); }
  function scrollToTop() { window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }
  function toCamel(value) { return value.replace(/-([a-z])/g, function (match, letter) { return letter.toUpperCase(); }); }

  document.addEventListener('DOMContentLoaded', initializeLab);
})();