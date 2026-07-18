(function () {
  'use strict';

  const KEY = 'psych101-ch04-signal-detection';
  const CONDITIONS = [
    { name: 'Neutral condition', instructions: 'Treat misses and false alarms as equally costly.' },
    { name: 'Miss-costly condition', instructions: 'A miss now costs 5 points; a false alarm costs 1. Use the same faint evidence, but choose your response policy.' }
  ];
  const state = { prediction: '', condition: 0, trials: [], current: null, explanation: '', transfer: '' };
  const el = {};
  let trialPhase = 'idle';
  let timers = [];
  let normalSpare = null;

  function init() {
    [
      'prediction-form', 'commit-prediction', 'prediction-status', 'trial-panel',
      'condition-label', 'trial-progress', 'condition-instructions', 'stimulus-stage',
      'signal-canvas', 'stimulus-mask', 'stimulus-mask-message', 'show-trial',
      'answer-present', 'answer-absent', 'trial-feedback', 'hits', 'misses',
      'false-alarms', 'correct-rejections', 'event-log', 'concept-panel',
      'concept-text', 'retrieve-panel', 'explanation', 'save-explanation',
      'explanation-status', 'transfer-panel', 'completion-summary', 'transfer',
      'save-transfer', 'restart-lab', 'transfer-status'
    ].forEach(id => { el[camel(id)] = document.getElementById(id); });

    restore();
    bind();
    drawNeutral();
    render();
  }

  function bind() {
    el.commitPrediction.addEventListener('click', commit);
    el.showTrial.addEventListener('click', showTrial);
    el.answerPresent.addEventListener('click', () => answer(true));
    el.answerAbsent.addEventListener('click', () => answer(false));
    el.saveExplanation.addEventListener('click', saveExplanation);
    el.saveTransfer.addEventListener('click', saveTransfer);
    el.restartLab.addEventListener('click', restart);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && state.current !== null) cancelActiveTrial('Trial cancelled because the tab lost focus. Start it again when ready.');
    });
  }

  function commit() {
    const input = el.predictionForm.querySelector('input:checked');
    if (!input) return status(el.predictionStatus, 'Choose a prediction before continuing.', el.predictionForm.querySelector('input'));
    state.prediction = input.value;
    save();
    render();
    focus('trial-heading');
  }

  function makeBlock(condition) {
    let signals;
    do {
      signals = [true, true, true, true, true, true, false, false, false, false, false, false];
      shuffle(signals);
    } while (longestRun(signals) > 3);
    return signals.map((signal, i) => ({ condition, signal, order: i + 1, response: null, outcome: '' }));
  }

  function showTrial() {
    if (state.current !== null || trialPhase !== 'idle') return;
    if (!state.trials.some(t => t.condition === state.condition)) state.trials.push(...makeBlock(state.condition));
    const pending = state.trials.findIndex(t => t.condition === state.condition && t.response === null);
    if (pending < 0) return;

    state.current = pending;
    const trial = state.trials[pending];
    drawStimulus(trial);
    clearTimers();
    trialPhase = 'fixation';
    showFixation();

    const fixationMs = numberSetting('fixationMs', 450);
    const exposureMs = numberSetting('exposureMs', 100);
    timers.push(window.setTimeout(() => {
      if (trialPhase !== 'fixation') return;
      trialPhase = 'exposure';
      el.stimulusMask.hidden = true;
      el.trialFeedback.textContent = 'The visual field is flashing.';

      timers.push(window.setTimeout(() => {
        if (trialPhase !== 'exposure') return;
        trialPhase = 'response';
        showResponseMask();
      }, exposureMs));
    }, fixationMs));
  }

  function answer(present) {
    if (state.current === null || trialPhase !== 'response') return;
    const trial = state.trials[state.current];
    trial.response = present;
    trial.outcome = trial.signal ? (present ? 'hit' : 'miss') : (present ? 'false alarm' : 'correct rejection');
    state.current = null;
    trialPhase = 'idle';
    clearTimers();
    drawNeutral();
    el.trialFeedback.textContent = `Outcome: ${trial.outcome}. Signal was ${trial.signal ? 'present' : 'absent'}; you said ${present ? 'present' : 'absent'}.`;

    if (conditionComplete(state.condition) && state.condition === 0) {
      state.condition = 1;
      save();
      render();
      focus('trial-heading');
      return;
    }

    save();
    render();
  }

  function render() {
    const committed = Boolean(state.prediction);
    el.predictionForm.querySelectorAll('input').forEach(input => {
      input.checked = input.value === state.prediction;
      input.disabled = committed;
    });
    el.commitPrediction.disabled = committed;
    el.predictionStatus.textContent = committed ? 'Prediction committed.' : '';
    el.trialPanel.hidden = !committed;

    const complete = committed && conditionComplete(1);
    el.conceptPanel.hidden = !complete;
    el.retrievePanel.hidden = !complete;
    el.transferPanel.hidden = !state.explanation;
    if (!committed) return;

    const condition = CONDITIONS[state.condition];
    el.conditionLabel.textContent = condition.name;
    el.conditionInstructions.textContent = condition.instructions;
    const answered = state.trials.filter(t => t.condition === state.condition && t.response !== null).length;
    el.trialProgress.textContent = `${answered} of 12 trials`;
    const totals = counts(state.condition);
    ['hits', 'misses', 'falseAlarms', 'correctRejections'].forEach(key => { el[key].textContent = totals[key]; });
    renderLog();

    if (trialPhase === 'idle') {
      if (complete) showCompleteMask();
      else showReadyMask();
    }

    if (complete) {
      const neutral = counts(0);
      const costly = counts(1);
      el.conceptText.textContent = `Neutral: ${neutral.hits} hits and ${neutral.falseAlarms} false alarms. Miss-costly: ${costly.hits} hits and ${costly.falseAlarms} false alarms.`;
      el.explanation.value = state.explanation;
      el.completionSummary.textContent = `Across 24 trials, your neutral condition produced ${neutral.hits} hits/${neutral.falseAlarms} false alarms; the miss-costly condition produced ${costly.hits} hits/${costly.falseAlarms} false alarms. The same target strength can yield different outcomes when the decision criterion changes.`;
    }
    if (state.explanation) el.transfer.value = state.transfer;
  }

  function showReadyMask(message = 'Press Show next trial when ready.') {
    el.stimulusMask.hidden = false;
    el.stimulusMaskMessage.classList.remove('stimulus-fixation');
    el.stimulusMaskMessage.textContent = message;
    el.showTrial.hidden = false;
    el.showTrial.disabled = conditionComplete(state.condition);
    el.answerPresent.disabled = true;
    el.answerAbsent.disabled = true;
  }

  function showFixation() {
    el.stimulusMask.hidden = false;
    el.stimulusMaskMessage.classList.add('stimulus-fixation');
    el.stimulusMaskMessage.textContent = '+';
    el.showTrial.hidden = true;
    el.showTrial.disabled = true;
    el.answerPresent.disabled = true;
    el.answerAbsent.disabled = true;
    el.trialFeedback.textContent = 'Get ready…';
  }

  function showResponseMask() {
    el.stimulusMask.hidden = false;
    el.stimulusMaskMessage.classList.remove('stimulus-fixation');
    el.stimulusMaskMessage.textContent = 'Respond below.';
    el.showTrial.hidden = true;
    el.showTrial.disabled = true;
    drawNeutral();
    el.answerPresent.disabled = false;
    el.answerAbsent.disabled = false;
    el.trialFeedback.textContent = 'Was the target present or absent?';
  }

  function showCompleteMask() {
    el.stimulusMask.hidden = false;
    el.stimulusMaskMessage.classList.remove('stimulus-fixation');
    el.stimulusMaskMessage.textContent = 'Visual trials complete.';
    el.showTrial.hidden = true;
    el.showTrial.disabled = true;
    el.answerPresent.disabled = true;
    el.answerAbsent.disabled = true;
    drawNeutral();
  }

  function cancelActiveTrial(message) {
    clearTimers();
    state.current = null;
    trialPhase = 'idle';
    drawNeutral();
    showReadyMask(message);
    el.trialFeedback.textContent = 'No response was recorded.';
  }

  function drawNeutral() {
    const context = el.signalCanvas.getContext('2d', { alpha: false });
    context.fillStyle = '#7f7f7f';
    context.fillRect(0, 0, el.signalCanvas.width, el.signalCanvas.height);
  }

  function drawStimulus(trial) {
    const canvas = el.signalCanvas;
    const context = canvas.getContext('2d', { alpha: false });
    const width = canvas.width;
    const height = canvas.height;
    const image = context.createImageData(width, height);
    const pixels = image.data;
    const contrast = numberSetting('targetContrast', 0.10);
    const sigma = numberSetting('targetSigma', 20);
    const noiseSd = numberSetting('noiseSd', 25);
    const centerX = Math.floor(width * (0.25 + (((trial.order * 37) + (trial.condition * 11)) % 51) / 100));
    const centerY = Math.floor(height * (0.25 + (((trial.order * 29) + (trial.condition * 17)) % 51) / 100));
    const signalGain = contrast * 255;
    normalSpare = null;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = (y * width + x) * 4;
        let luminance = 127 + normalRandom() * noiseSd;
        if (trial.signal) {
          const dx = x - centerX;
          const dy = y - centerY;
          luminance += signalGain * Math.exp(-((dx * dx) + (dy * dy)) / (2 * sigma * sigma));
        }
        const value = Math.max(0, Math.min(255, luminance));
        pixels[index] = value;
        pixels[index + 1] = value;
        pixels[index + 2] = value;
        pixels[index + 3] = 255;
      }
    }
    context.putImageData(image, 0, 0);
  }

  function normalRandom() {
    if (normalSpare !== null) {
      const value = normalSpare;
      normalSpare = null;
      return value;
    }
    let u = 0;
    let v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    const magnitude = Math.sqrt(-2 * Math.log(u));
    const angle = 2 * Math.PI * v;
    normalSpare = magnitude * Math.sin(angle);
    return magnitude * Math.cos(angle);
  }

  function numberSetting(name, fallback) {
    const value = Number(el.stimulusStage.dataset[name]);
    return Number.isFinite(value) ? value : fallback;
  }

  function counts(condition) {
    const out = { hits: 0, misses: 0, falseAlarms: 0, correctRejections: 0 };
    state.trials.filter(t => t.condition === condition).forEach(t => {
      if (t.outcome === 'hit') out.hits += 1;
      if (t.outcome === 'miss') out.misses += 1;
      if (t.outcome === 'false alarm') out.falseAlarms += 1;
      if (t.outcome === 'correct rejection') out.correctRejections += 1;
    });
    return out;
  }

  function conditionComplete(condition) {
    return state.trials.filter(t => t.condition === condition && t.response !== null).length === 12;
  }

  function renderLog() {
    const list = el.eventLog.querySelector('ol');
    list.innerHTML = '';
    state.trials.filter(t => t.response !== null).forEach((trial, index) => {
      const item = document.createElement('li');
      item.textContent = `Trial ${index + 1}, ${CONDITIONS[trial.condition].name}: signal ${trial.signal ? 'present' : 'absent'}, response ${trial.response ? 'present' : 'absent'}, ${trial.outcome}.`;
      list.appendChild(item);
    });
  }

  function saveExplanation() {
    const value = el.explanation.value.trim();
    if (!value) return status(el.explanationStatus, 'Explain the criterion trade-off before continuing.', el.explanation);
    state.explanation = value;
    save();
    render();
    el.explanationStatus.textContent = 'Explanation saved in this browser session.';
    focus('transfer-heading');
  }

  function saveTransfer() {
    const value = el.transfer.value.trim().toLowerCase();
    if (!(value.includes('criterion') && value.includes('hit') && value.includes('false alarm'))) return status(el.transferStatus, 'Use criterion, hits, and false alarms in your response.', el.transfer);
    state.transfer = el.transfer.value.trim();
    save();
    render();
    el.transferStatus.textContent = 'Transfer response saved in this browser session. Lab complete.';
  }

  function restart() {
    clearTimers();
    trialPhase = 'idle';
    sessionStorage.removeItem(KEY);
    Object.assign(state, { prediction: '', condition: 0, trials: [], current: null, explanation: '', transfer: '' });
    el.predictionForm.reset();
    drawNeutral();
    el.trialFeedback.textContent = 'Start the first trial when ready.';
    el.explanation.value = '';
    el.transfer.value = '';
    el.explanationStatus.textContent = '';
    el.transferStatus.textContent = '';
    el.conceptText.textContent = '';
    el.completionSummary.textContent = '';
    render();
    focus('prediction-heading');
  }

  function clearTimers() {
    timers.forEach(timer => window.clearTimeout(timer));
    timers = [];
  }

  function save() {
    try { sessionStorage.setItem(KEY, JSON.stringify(state)); } catch (error) { /* Session-only persistence is optional. */ }
  }

  function restore() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(KEY));
      if (saved && Array.isArray(saved.trials)) Object.assign(state, saved, { current: null });
    } catch (error) {
      sessionStorage.removeItem(KEY);
    }
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function longestRun(array) {
    let longest = 1;
    let current = 1;
    for (let i = 1; i < array.length; i += 1) {
      current = array[i] === array[i - 1] ? current + 1 : 1;
      longest = Math.max(longest, current);
    }
    return longest;
  }

  function status(node, text, target) {
    node.textContent = text;
    if (target) target.focus();
  }

  function focus(id) {
    document.getElementById(id).focus();
  }

  function camel(value) {
    return value.replace(/-([a-z])/g, (_, character) => character.toUpperCase());
  }

  document.addEventListener('DOMContentLoaded', init);
}());
