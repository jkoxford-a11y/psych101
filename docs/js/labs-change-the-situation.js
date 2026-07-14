/* Change the Situation, Change the Probability */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101_ch11_change_situation_v1';
  const RESULTS = {
    aschUnanimous: 32,
    aschAlly: 5.5,
    milgramStandard: 65,
    milgramTouch: 30,
    milgramRemote: 20.5,
    bystanderAlone: 85,
    bystanderGroup: 31
  };

  const initialState = {
    predictionsCommitted: false,
    predictions: {
      aschUnanimous: null,
      aschAlly: null,
      milgramStandard: null,
      milgramTouch: null,
      milgramRemote: null,
      bystanderAlone: null,
      bystanderGroup: null,
      explanation: ''
    },
    aschRevealed: false,
    aschClassified: false,
    aschAnswers: { variable: '', behavior: '', mechanism: '' },
    milgramRevealed: false,
    milgramClassified: false,
    milgramAnswers: { variable: '', behavior: '', mechanism: '' },
    bystanderRevealed: false,
    bystanderClassified: false,
    bystanderAnswers: { variable: '', behavior: '', mechanism: '' },
    teachingContinued: false,
    explanation: '',
    explanationSaved: false,
    transfer: { variable: '', change: '', mechanism: '', direction: '', reasoning: '', boundary: false },
    completed: false
  };

  let state = copyInitialState();
  const elements = {};

  function copyInitialState() {
    return JSON.parse(JSON.stringify(initialState));
  }

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();
    renderAll();
  }

  function cacheElements() {
    const ids = [
      'reset-lab', 'reset-status', 'prediction-form', 'prediction-panel', 'prediction-heading',
      'predict-asch-unanimous', 'predict-asch-ally', 'predict-milgram-standard',
      'predict-milgram-touch', 'predict-milgram-remote', 'predict-bystander-alone',
      'predict-bystander-group', 'prediction-explanation', 'commit-predictions', 'prediction-status',
      'asch-panel', 'asch-heading', 'asch-prediction-reminder', 'reveal-asch', 'asch-status',
      'asch-result', 'asch-variable', 'asch-behavior', 'asch-mechanism', 'check-asch', 'asch-check-status',
      'milgram-panel', 'milgram-heading', 'milgram-prediction-reminder', 'reveal-milgram', 'milgram-status',
      'milgram-result', 'milgram-variable', 'milgram-behavior', 'milgram-mechanism', 'check-milgram', 'milgram-check-status',
      'bystander-panel', 'bystander-heading', 'bystander-prediction-reminder', 'reveal-bystander', 'bystander-status',
      'bystander-result', 'bystander-variable', 'bystander-behavior', 'bystander-mechanism', 'check-bystander', 'bystander-check-status',
      'teaching-panel', 'teaching-heading', 'continue-explanation', 'explanation-panel', 'explanation-heading',
      'explanation-response', 'save-explanation', 'explanation-status', 'transfer-panel', 'transfer-heading',
      'transfer-variable', 'transfer-change', 'transfer-mechanism', 'transfer-direction', 'transfer-reasoning',
      'transfer-boundary', 'submit-transfer', 'transfer-status', 'summary-panel', 'summary-heading', 'completion-summary'
    ];
    ids.forEach(function (id) { elements[toKey(id)] = document.getElementById(id); });
  }

  function toKey(id) {
    return id.replace(/-([a-z])/g, function (_, letter) { return letter.toUpperCase(); });
  }

  function bindEvents() {
    elements.resetLab.addEventListener('click', resetLab);
    elements.commitPredictions.addEventListener('click', commitPredictions);
    elements.revealAsch.addEventListener('click', revealAsch);
    elements.checkAsch.addEventListener('click', checkAsch);
    elements.revealMilgram.addEventListener('click', revealMilgram);
    elements.checkMilgram.addEventListener('click', checkMilgram);
    elements.revealBystander.addEventListener('click', revealBystander);
    elements.checkBystander.addEventListener('click', checkBystander);
    elements.continueExplanation.addEventListener('click', continueExplanation);
    elements.saveExplanation.addEventListener('click', saveExplanation);
    elements.submitTransfer.addEventListener('click', submitTransfer);
  }

  function readPercent(element, label) {
    const raw = element.value.trim();
    if (raw === '') return { error: 'Enter a percentage for ' + label + '.', element: element };
    const value = Number(raw);
    if (!Number.isFinite(value) || value < 0 || value > 100) {
      return { error: 'Enter a number from 0 to 100 for ' + label + '.', element: element };
    }
    return { value: value };
  }

  function commitPredictions() {
    const fields = [
      ['aschUnanimous', elements.predictAschUnanimous, 'Asch unanimous majority'],
      ['aschAlly', elements.predictAschAlly, 'Asch one ally'],
      ['milgramStandard', elements.predictMilgramStandard, 'Milgram standard condition'],
      ['milgramTouch', elements.predictMilgramTouch, 'Milgram touch proximity'],
      ['milgramRemote', elements.predictMilgramRemote, 'Milgram remote experimenter'],
      ['bystanderAlone', elements.predictBystanderAlone, 'Darley–Latané only helper'],
      ['bystanderGroup', elements.predictBystanderGroup, 'Darley–Latané four other listeners']
    ];
    const predictions = {};
    for (let i = 0; i < fields.length; i += 1) {
      const parsed = readPercent(fields[i][1], fields[i][2]);
      if (parsed.error) {
        elements.predictionStatus.textContent = parsed.error;
        parsed.element.focus();
        return;
      }
      predictions[fields[i][0]] = parsed.value;
    }
    const explanation = elements.predictionExplanation.value.trim();
    if (!explanation) {
      elements.predictionStatus.textContent = 'Explain the pattern you predict before committing.';
      elements.predictionExplanation.focus();
      return;
    }
    predictions.explanation = explanation;
    state.predictions = predictions;
    state.predictionsCommitted = true;
    saveAndRender();
    elements.aschHeading.focus();
  }

  function revealAsch() {
    if (!state.predictionsCommitted || state.aschRevealed) return;
    state.aschRevealed = true;
    saveAndRender();
    elements.aschResult.focus();
  }

  function checkAsch() {
    const answers = {
      variable: elements.aschVariable.value,
      behavior: elements.aschBehavior.value,
      mechanism: elements.aschMechanism.value
    };
    if (!answers.variable || !answers.behavior || !answers.mechanism) {
      elements.aschCheckStatus.textContent = 'Choose an answer for the variable, behavior, and mechanism.';
      firstEmptySelect([elements.aschVariable, elements.aschBehavior, elements.aschMechanism]);
      return;
    }
    if (answers.variable !== 'unanimity' || answers.behavior !== 'judgments' || answers.mechanism !== 'dissent') {
      elements.aschCheckStatus.textContent = 'Not yet. Separate what researchers changed from what they measured, then choose the mechanism tied to standing alone.';
      return;
    }
    state.aschAnswers = answers;
    state.aschClassified = true;
    saveAndRender();
    elements.milgramHeading.focus();
  }

  function revealMilgram() {
    if (!state.aschClassified || state.milgramRevealed) return;
    state.milgramRevealed = true;
    saveAndRender();
    elements.milgramResult.focus();
  }

  function checkMilgram() {
    const answers = {
      variable: elements.milgramVariable.value,
      behavior: elements.milgramBehavior.value,
      mechanism: elements.milgramMechanism.value
    };
    if (!answers.variable || !answers.behavior || !answers.mechanism) {
      elements.milgramCheckStatus.textContent = 'Choose an answer for the variables, behavior, and mechanism.';
      firstEmptySelect([elements.milgramVariable, elements.milgramBehavior, elements.milgramMechanism]);
      return;
    }
    if (answers.variable !== 'relationships' || answers.behavior !== 'endpoint' || answers.mechanism !== 'structure') {
      elements.milgramCheckStatus.textContent = 'Not yet. Focus on the participant’s relationships to the learner and experimenter, and on the recorded 450-volt endpoint.';
      return;
    }
    state.milgramAnswers = answers;
    state.milgramClassified = true;
    saveAndRender();
    elements.bystanderHeading.focus();
  }

  function revealBystander() {
    if (!state.milgramClassified || state.bystanderRevealed) return;
    state.bystanderRevealed = true;
    saveAndRender();
    elements.bystanderResult.focus();
  }

  function checkBystander() {
    const answers = {
      variable: elements.bystanderVariable.value,
      behavior: elements.bystanderBehavior.value,
      mechanism: elements.bystanderMechanism.value
    };
    if (!answers.variable || !answers.behavior || !answers.mechanism) {
      elements.bystanderCheckStatus.textContent = 'Choose an answer for the variable, behavior, and mechanism.';
      firstEmptySelect([elements.bystanderVariable, elements.bystanderBehavior, elements.bystanderMechanism]);
      return;
    }
    if (answers.variable !== 'number' || answers.behavior !== 'report' || answers.mechanism !== 'diffusion') {
      elements.bystanderCheckStatus.textContent = 'Not yet. Focus on how many other listeners seemed available, and on reporting the emergency.';
      return;
    }
    state.bystanderAnswers = answers;
    state.bystanderClassified = true;
    saveAndRender();
    elements.teachingHeading.focus();
  }

  function firstEmptySelect(selects) {
    for (let i = 0; i < selects.length; i += 1) {
      if (!selects[i].value) {
        selects[i].focus();
        return;
      }
    }
  }

  function continueExplanation() {
    if (!state.bystanderClassified || state.teachingContinued) return;
    state.teachingContinued = true;
    saveAndRender();
    elements.explanationHeading.focus();
  }

  function saveExplanation() {
    const explanation = elements.explanationResponse.value.trim();
    if (!explanation) {
      elements.explanationStatus.textContent = 'Write an explanation before revealing the transfer scenario.';
      elements.explanationResponse.focus();
      return;
    }
    const lower = explanation.toLowerCase();
    const terms = ['unanimity', 'authority relationship', 'proximity', 'diffusion of responsibility', 'situational constraint'];
    const used = terms.filter(function (term) { return lower.indexOf(term) !== -1; });
    if (used.length < 2) {
      elements.explanationStatus.textContent = 'Use at least two of the listed terms in your explanation.';
      elements.explanationResponse.focus();
      return;
    }
    state.explanation = explanation;
    state.explanationSaved = true;
    saveAndRender();
    elements.transferHeading.focus();
  }

  function submitTransfer() {
    const transfer = {
      variable: elements.transferVariable.value.trim(),
      change: elements.transferChange.value.trim(),
      mechanism: elements.transferMechanism.value,
      direction: elements.transferDirection.value,
      reasoning: elements.transferReasoning.value.trim(),
      boundary: elements.transferBoundary.checked
    };
    const required = [
      [transfer.variable, elements.transferVariable, 'Identify one situational variable.'],
      [transfer.change, elements.transferChange, 'Describe the structural change you would make.'],
      [transfer.mechanism, elements.transferMechanism, 'Choose the social-psychological mechanism your change targets.'],
      [transfer.direction, elements.transferDirection, 'Predict the directional effect of your intervention.'],
      [transfer.reasoning, elements.transferReasoning, 'Explain why your intervention should work.']
    ];
    for (let i = 0; i < required.length; i += 1) {
      if (!required[i][0]) {
        elements.transferStatus.textContent = required[i][2];
        required[i][1].focus();
        return;
      }
    }
    if (!transfer.boundary) {
      elements.transferStatus.textContent = 'Acknowledge that the intervention changes probability rather than guaranteeing behavior.';
      elements.transferBoundary.focus();
      return;
    }
    state.transfer = transfer;
    state.completed = true;
    saveAndRender();
    elements.summaryHeading.focus();
  }

  function saveAndRender() {
    saveState();
    renderAll();
  }

  function renderAll() {
    renderPredictions();
    renderAsch();
    renderMilgram();
    renderBystander();
    renderTeachingAndExplanation();
    renderTransfer();
    renderSummary();
  }

  function renderPredictions() {
    const pairs = [
      [elements.predictAschUnanimous, 'aschUnanimous'],
      [elements.predictAschAlly, 'aschAlly'],
      [elements.predictMilgramStandard, 'milgramStandard'],
      [elements.predictMilgramTouch, 'milgramTouch'],
      [elements.predictMilgramRemote, 'milgramRemote'],
      [elements.predictBystanderAlone, 'bystanderAlone'],
      [elements.predictBystanderGroup, 'bystanderGroup']
    ];
    pairs.forEach(function (pair) {
      const value = state.predictions[pair[1]];
      pair[0].value = value === null ? '' : value;
      pair[0].disabled = state.predictionsCommitted;
    });
    elements.predictionExplanation.value = state.predictions.explanation;
    elements.predictionExplanation.disabled = state.predictionsCommitted;
    elements.commitPredictions.disabled = state.predictionsCommitted;
    elements.predictionStatus.textContent = state.predictionsCommitted ? 'All predictions are committed, frozen, and saved for this browser session.' : '';
    elements.aschPanel.hidden = !state.predictionsCommitted;
  }

  function renderAsch() {
    if (!state.predictionsCommitted) return;
    elements.aschPredictionReminder.textContent = 'Your prediction: ' + formatPercent(state.predictions.aschUnanimous) + ' under unanimity and ' + formatPercent(state.predictions.aschAlly) + ' with one correct ally.';
    elements.revealAsch.disabled = state.aschRevealed;
    elements.revealAsch.textContent = state.aschRevealed ? 'Asch results revealed' : "Reveal Asch's group results";
    elements.aschResult.hidden = !state.aschRevealed;
    setSelect(elements.aschVariable, state.aschAnswers.variable, state.aschClassified);
    setSelect(elements.aschBehavior, state.aschAnswers.behavior, state.aschClassified);
    setSelect(elements.aschMechanism, state.aschAnswers.mechanism, state.aschClassified);
    elements.checkAsch.disabled = state.aschClassified;
    if (state.aschRevealed) elements.aschStatus.textContent = 'Group results revealed. Identify the variable, behavior, and mechanism to continue.';
    if (state.aschClassified) elements.aschCheckStatus.textContent = 'Correct. Unanimity changed; critical-trial judgments were measured.';
    elements.milgramPanel.hidden = !state.aschClassified;
  }

  function renderMilgram() {
    if (!state.aschClassified) return;
    elements.milgramPredictionReminder.textContent = 'Your prediction: standard ' + formatPercent(state.predictions.milgramStandard) + ', touch proximity ' + formatPercent(state.predictions.milgramTouch) + ', experimenter remote ' + formatPercent(state.predictions.milgramRemote) + '.';
    elements.revealMilgram.disabled = state.milgramRevealed;
    elements.revealMilgram.textContent = state.milgramRevealed ? 'Milgram results revealed' : "Reveal Milgram's group results";
    elements.milgramResult.hidden = !state.milgramRevealed;
    setSelect(elements.milgramVariable, state.milgramAnswers.variable, state.milgramClassified);
    setSelect(elements.milgramBehavior, state.milgramAnswers.behavior, state.milgramClassified);
    setSelect(elements.milgramMechanism, state.milgramAnswers.mechanism, state.milgramClassified);
    elements.checkMilgram.disabled = state.milgramClassified;
    if (state.milgramRevealed) elements.milgramStatus.textContent = 'Group results revealed. Identify the variables, behavior, and mechanism to continue.';
    if (state.milgramClassified) elements.milgramCheckStatus.textContent = 'Correct. Relational proximity changed; reaching 450 volts was measured.';
    elements.bystanderPanel.hidden = !state.milgramClassified;
  }

  function renderBystander() {
    if (!state.milgramClassified) return;
    elements.bystanderPredictionReminder.textContent = 'Your prediction: ' + formatPercent(state.predictions.bystanderAlone) + ' when alone and ' + formatPercent(state.predictions.bystanderGroup) + ' with four other apparent listeners.';
    elements.revealBystander.disabled = state.bystanderRevealed;
    elements.revealBystander.textContent = state.bystanderRevealed ? 'Darley–Latané results revealed' : "Reveal Darley–Latané's group results";
    elements.bystanderResult.hidden = !state.bystanderRevealed;
    setSelect(elements.bystanderVariable, state.bystanderAnswers.variable, state.bystanderClassified);
    setSelect(elements.bystanderBehavior, state.bystanderAnswers.behavior, state.bystanderClassified);
    setSelect(elements.bystanderMechanism, state.bystanderAnswers.mechanism, state.bystanderClassified);
    elements.checkBystander.disabled = state.bystanderClassified;
    if (state.bystanderRevealed) elements.bystanderStatus.textContent = 'Group results revealed. Identify the variable, behavior, and mechanism to continue.';
    if (state.bystanderClassified) elements.bystanderCheckStatus.textContent = 'Correct. Apparent group size changed; reporting the emergency was measured.';
    elements.teachingPanel.hidden = !state.bystanderClassified;
  }

  function setSelect(element, value, disabled) {
    element.value = value;
    element.disabled = disabled;
  }

  function renderTeachingAndExplanation() {
    elements.continueExplanation.disabled = state.teachingContinued;
    elements.explanationPanel.hidden = !state.teachingContinued;
    elements.explanationResponse.value = state.explanation;
    elements.explanationResponse.disabled = state.explanationSaved;
    elements.saveExplanation.disabled = state.explanationSaved;
    if (state.explanationSaved) elements.explanationStatus.textContent = 'Explanation saved in this browser session. The transfer scenario is now available.';
    elements.transferPanel.hidden = !state.explanationSaved;
  }

  function renderTransfer() {
    elements.transferVariable.value = state.transfer.variable;
    elements.transferChange.value = state.transfer.change;
    elements.transferMechanism.value = state.transfer.mechanism;
    elements.transferDirection.value = state.transfer.direction;
    elements.transferReasoning.value = state.transfer.reasoning;
    elements.transferBoundary.checked = state.transfer.boundary;
    [elements.transferVariable, elements.transferChange, elements.transferMechanism, elements.transferDirection, elements.transferReasoning, elements.transferBoundary].forEach(function (element) {
      element.disabled = state.completed;
    });
    elements.submitTransfer.disabled = state.completed;
    if (state.completed) elements.transferStatus.textContent = 'Transfer response saved in this browser session. Completion summary revealed.';
    elements.summaryPanel.hidden = !state.completed;
  }

  function renderSummary() {
    if (!state.completed) return;
    elements.completionSummary.innerHTML = '';
    const predictionHeading = document.createElement('h3');
    predictionHeading.textContent = 'Predictions and published group results';
    elements.completionSummary.appendChild(predictionHeading);
    const wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    const table = document.createElement('table');
    table.className = 'summary-table';
    const caption = document.createElement('caption');
    caption.textContent = 'Absolute prediction error is reported in percentage points.';
    table.appendChild(caption);
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Condition', 'Your prediction', 'Published result', 'Approx. error'].forEach(function (label) {
      const th = document.createElement('th');
      th.scope = 'col';
      th.textContent = label;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    [
      ['Asch: unanimous majority', 'aschUnanimous'],
      ['Asch: one correct ally', 'aschAlly'],
      ['Milgram: standard', 'milgramStandard'],
      ['Milgram: touch proximity', 'milgramTouch'],
      ['Milgram: experimenter remote', 'milgramRemote'],
      ['Darley–Latané: only helper', 'bystanderAlone'],
      ['Darley–Latané: four other listeners', 'bystanderGroup']
    ].forEach(function (rowData) {
      const result = RESULTS[rowData[1]];
      const prediction = state.predictions[rowData[1]];
      const row = document.createElement('tr');
      [rowData[0], formatPercent(prediction), formatPercent(result), formatNumber(Math.abs(prediction - result)) + ' points'].forEach(function (value, index) {
        const cell = document.createElement(index === 0 ? 'th' : 'td');
        if (index === 0) cell.scope = 'row';
        cell.textContent = value;
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    elements.completionSummary.appendChild(wrap);

    const variables = document.createElement('p');
    variables.innerHTML = '<strong>Situational variables changed:</strong> unanimity; learner and experimenter proximity within an authority relationship; and the number of apparent bystanders.';
    elements.completionSummary.appendChild(variables);
    const prediction = document.createElement('p');
    const predictionStrong = document.createElement('strong');
    predictionStrong.textContent = 'Your original explanation: ';
    prediction.appendChild(predictionStrong);
    prediction.appendChild(document.createTextNode(state.predictions.explanation));
    elements.completionSummary.appendChild(prediction);
    const transfer = document.createElement('p');
    const transferStrong = document.createElement('strong');
    transferStrong.textContent = 'Your transfer intervention: ';
    transfer.appendChild(transferStrong);
    transfer.appendChild(document.createTextNode(state.transfer.change + ' Mechanism: ' + mechanismLabel(state.transfer.mechanism) + '. Predicted direction: ' + (state.transfer.direction === 'increase' ? 'more likely' : 'less likely') + '.'));
    elements.completionSummary.appendChild(transfer);
    const concept = document.createElement('p');
    concept.innerHTML = '<strong>Conceptual summary:</strong> a situation contains manipulable structural variables that shift group-level probabilities without determining every person\'s behavior.';
    elements.completionSummary.appendChild(concept);
  }

  function mechanismLabel(value) {
    const labels = {
      unanimity: 'unanimity / social support for dissent',
      authority: 'authority relationship',
      proximity: 'proximity',
      diffusion: 'diffusion of responsibility',
      constraint: 'situational constraint'
    };
    return labels[value] || value;
  }

  function formatNumber(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, '');
  }

  function formatPercent(value) {
    return formatNumber(Number(value)) + '%';
  }

  function resetLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state = copyInitialState();
    clearStatuses();
    renderAll();
    elements.resetStatus.textContent = 'This lab’s saved session data has been cleared.';
    elements.predictionHeading.focus();
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  function clearStatuses() {
    [
      elements.resetStatus, elements.predictionStatus, elements.aschStatus, elements.aschCheckStatus,
      elements.milgramStatus, elements.milgramCheckStatus, elements.bystanderStatus,
      elements.bystanderCheckStatus, elements.explanationStatus, elements.transferStatus
    ].forEach(function (element) { element.textContent = ''; });
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      elements.resetStatus.textContent = 'Progress remains available on this page but could not be saved for refresh.';
    }
  }

  function restoreState() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved !== 'object' || !saved.predictions || !saved.transfer || !saved.aschAnswers || !saved.milgramAnswers || !saved.bystanderAnswers) {
        sessionStorage.removeItem(STORAGE_KEY);
        return;
      }
      state = Object.assign(copyInitialState(), saved);
      state.predictions = Object.assign({}, initialState.predictions, saved.predictions);
      state.aschAnswers = Object.assign({}, initialState.aschAnswers, saved.aschAnswers);
      state.milgramAnswers = Object.assign({}, initialState.milgramAnswers, saved.milgramAnswers);
      state.bystanderAnswers = Object.assign({}, initialState.bystanderAnswers, saved.bystanderAnswers);
      state.transfer = Object.assign({}, initialState.transfer, saved.transfer);
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
      state = copyInitialState();
    }
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
})();
