(function () {
  'use strict';

  var STORAGE_KEY = 'psych101-lab-integration-lossy-compression-v1';
  var GLYPH = '<span class="ambiguous-glyph" aria-label="ambiguous central mark"></span>';
  var MEMORY_WORDS = ['bed', 'rest', 'awake', 'tired', 'dream', 'wake', 'blanket', 'doze', 'slumber', 'snore'];
  var DISTRACTOR_NUMBERS = [27, 42, 51];
  var TEST_WORDS = [
    { word: 'bed', shown: true },
    { word: 'sleep', shown: false },
    { word: 'pillow', shown: false },
    { word: 'chair', shown: false },
    { word: 'dream', shown: true },
    { word: 'snore', shown: true }
  ];
  var STATION_ORDER = ['perception', 'memory', 'social', 'diagnosis'];
  var LEDGER = {
    perception: {
      system: 'Perception',
      preserved: 'A coherent interpretation fitting the surrounding sequence.',
      discarded: 'The competing interpretation and unresolved ambiguity.',
      mattered: 'The identical mark appeared in a different context.'
    },
    memory: {
      system: 'Memory',
      preserved: 'Semantic theme or gist.',
      discarded: 'Exact list membership and source detail.',
      mattered: 'A closely related absent word had to be rejected.'
    },
    social: {
      system: 'Social categorization',
      preserved: 'The apparent pattern in observed examples.',
      discarded: 'Sampling history and within-group variation.',
      mattered: 'The selected sample was generalized to the whole group.'
    },
    diagnosis: {
      system: 'Diagnosis',
      preserved: 'Shared symptom pattern and classification language.',
      discarded: 'Individual history, causal pathway, maintaining processes, and likely treatment response.',
      mattered: 'Explaining the pattern or planning treatment for a particular person.'
    }
  };
  var PREDICTION_LABELS = {
    yes: 'Yes. Each may preserve useful structure while losing detail.',
    no: 'No. They are too different for the same framework to clarify them.',
    unsure: 'Unsure. I need to see the cases first.'
  };
  var CLASSIFICATION_LABELS = {
    supported: 'Supported by the source',
    causal: 'Unsupported causal addition',
    magnitude: 'Magnitude not established',
    generalization: 'Unsupported generalization'
  };
  var TRANSFER_CLAIMS = [
    { id: 'association', text: 'Students completing three quizzes scored higher', correct: 'supported' },
    { id: 'cause', text: 'The quizzes caused the difference', correct: 'causal' },
    { id: 'magnitude', text: 'The improvement was substantial', correct: 'magnitude' },
    { id: 'generalization', text: 'The finding applies to every course', correct: 'generalization' }
  ];

  var state = createInitialState();
  var el = {};
  var presentationToken = 0;
  var currentPresentedWord = '';
  var restoredTimedSequence = false;

  function createInitialState() {
    return {
      committed: false,
      prediction: { choice: '', reason: '' },
      phase: 'prediction',
      perception: { index: 0, answers: [], complete: false },
      memory: {
        mode: 'ready',
        distractorIndex: 0,
        distractorResponses: [],
        testIndex: 0,
        responses: [],
        complete: false,
        status: ''
      },
      social: { choice: '', confidence: 50, complete: false },
      diagnosis: { choice: '', complete: false },
      explanation: '',
      explanationSaved: false,
      transfer: {
        classifications: { association: '', cause: '', magnitude: '', generalization: '' },
        response: '',
        completed: false
      }
    };
  }

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();
    renderAll();
  }

  function cacheElements() {
    [
      'prediction-form', 'prediction-reason', 'commit-prediction', 'prediction-status',
      'station-panel', 'station-heading', 'station-progress',
      'perception-station', 'perception-sequence', 'record-perception', 'perception-status',
      'perception-reveal', 'continue-perception',
      'memory-station', 'memory-ready', 'memory-ready-status', 'start-memory-list', 'memory-presentation', 'memory-word',
      'memory-presentation-status', 'memory-distractor', 'distractor-progress', 'distractor-number',
      'distractor-status', 'memory-test', 'memory-test-progress', 'memory-test-word',
      'record-memory-answer', 'memory-test-status', 'memory-reveal', 'memory-results-body', 'continue-memory',
      'social-station', 'social-confidence', 'social-confidence-output', 'record-social', 'social-status',
      'social-reveal', 'continue-social',
      'diagnosis-station', 'record-diagnosis', 'diagnosis-status', 'diagnosis-reveal',
      'diagnosis-feedback', 'diagnosis-feedback-heading', 'continue-diagnosis',
      'ledger-panel', 'ledger-empty', 'ledger-table-wrap', 'ledger-body', 'event-log',
      'concept-panel', 'concept-heading', 'continue-concept',
      'explain-panel', 'explain-heading', 'explanation-response', 'save-explanation', 'explanation-status',
      'transfer-panel', 'transfer-heading', 'transfer-response', 'save-transfer', 'transfer-status',
      'transfer-feedback', 'transfer-results-body', 'finish-lab',
      'summary-panel', 'summary-heading', 'completion-summary', 'restart-lab'
    ].forEach(function (id) {
      el[toCamel(id)] = document.getElementById(id);
    });
    el.predictionChoices = Array.from(document.querySelectorAll('input[name="prediction-choice"]'));
    el.perceptionChoices = Array.from(document.querySelectorAll('input[name="perception-choice"]'));
    el.memoryChoices = Array.from(document.querySelectorAll('input[name="memory-choice"]'));
    el.socialChoices = Array.from(document.querySelectorAll('input[name="social-choice"]'));
    el.diagnosisChoices = Array.from(document.querySelectorAll('input[name="diagnosis-choice"]'));
    el.parityButtons = Array.from(document.querySelectorAll('[data-parity]'));
    el.claimSelects = {};
    TRANSFER_CLAIMS.forEach(function (claim) {
      el.claimSelects[claim.id] = document.getElementById('claim-' + claim.id);
    });
  }

  function bindEvents() {
    el.commitPrediction.addEventListener('click', commitPrediction);
    el.recordPerception.addEventListener('click', recordPerception);
    el.continuePerception.addEventListener('click', function () { moveToStation('memory'); });
    el.startMemoryList.addEventListener('click', startMemoryList);
    el.parityButtons.forEach(function (button) {
      button.addEventListener('click', recordDistractor);
    });
    el.recordMemoryAnswer.addEventListener('click', recordMemoryAnswer);
    el.continueMemory.addEventListener('click', function () { moveToStation('social'); });
    el.socialConfidence.addEventListener('input', renderConfidence);
    el.recordSocial.addEventListener('click', recordSocial);
    el.continueSocial.addEventListener('click', function () { moveToStation('diagnosis'); });
    el.recordDiagnosis.addEventListener('click', recordDiagnosis);
    el.continueDiagnosis.addEventListener('click', revealConcept);
    el.continueConcept.addEventListener('click', revealExplanation);
    el.saveExplanation.addEventListener('click', saveExplanation);
    el.saveTransfer.addEventListener('click', saveTransfer);
    el.finishLab.addEventListener('click', showSummary);
    el.restartLab.addEventListener('click', restartLab);
  }

  function commitPrediction() {
    var selected = el.predictionChoices.find(function (input) { return input.checked; });
    var reason = el.predictionReason.value.trim();
    if (!selected) {
      el.predictionStatus.textContent = 'Choose a prediction before continuing.';
      el.predictionChoices[0].focus();
      return;
    }
    if (!reason) {
      el.predictionStatus.textContent = 'Explain what simplification may gain and risk before continuing.';
      el.predictionReason.focus();
      return;
    }
    state.committed = true;
    state.prediction.choice = selected.value;
    state.prediction.reason = reason;
    state.phase = 'station-perception';
    saveState();
    renderAll();
    focusHeading('station-heading');
  }

  function recordPerception() {
    var selected = el.perceptionChoices.find(function (input) { return input.checked; });
    if (!selected) {
      el.perceptionStatus.textContent = 'Choose an interpretation before continuing.';
      el.perceptionChoices[0].focus();
      return;
    }
    state.perception.answers.push(selected.value);
    state.perception.index += 1;
    el.perceptionChoices.forEach(function (input) { input.checked = false; });
    if (state.perception.index >= 2) {
      state.perception.complete = true;
    }
    saveState();
    renderAll();
    if (state.perception.complete) {
      focusHeading('perception-reveal-heading');
    } else {
      el.perceptionChoices[0].focus();
    }
  }

  function startMemoryList() {
    presentationToken += 1;
    var token = presentationToken;
    state.memory.mode = 'presenting';
    state.memory.status = '';
    currentPresentedWord = '';
    saveState();
    renderAll();
    focusHeading('memory-heading');
    presentWord(0, token);
  }

  function presentWord(index, token) {
    if (token !== presentationToken || state.memory.mode !== 'presenting') return;
    if (index >= MEMORY_WORDS.length) {
      currentPresentedWord = '';
      state.memory.mode = 'distractor';
      state.memory.distractorIndex = 0;
      state.memory.status = '';
      saveState();
      renderAll();
      el.parityButtons[0].focus();
      return;
    }
    currentPresentedWord = MEMORY_WORDS[index];
    el.memoryWord.textContent = currentPresentedWord;
    window.setTimeout(function () {
      presentWord(index + 1, token);
    }, reducedMotion() ? 1000 : 850);
  }

  function recordDistractor(event) {
    var index = state.memory.distractorIndex;
    var number = DISTRACTOR_NUMBERS[index];
    var choice = event.currentTarget.dataset.parity;
    var correct = (number % 2 === 0 ? 'even' : 'odd') === choice;
    state.memory.distractorResponses.push({ number: number, choice: choice, correct: correct });
    state.memory.distractorIndex += 1;
    state.memory.status = (correct ? 'Correct. ' : 'Recorded. ') + number + ' is ' + (number % 2 === 0 ? 'even.' : 'odd.');
    if (state.memory.distractorIndex >= DISTRACTOR_NUMBERS.length) {
      state.memory.mode = 'test';
      state.memory.testIndex = 0;
      state.memory.status = 'Interruption complete. Begin the word test.';
    }
    saveState();
    renderAll();
    if (state.memory.mode === 'test') {
      el.memoryChoices[0].focus();
    }
  }

  function recordMemoryAnswer() {
    var selected = el.memoryChoices.find(function (input) { return input.checked; });
    if (!selected) {
      el.memoryTestStatus.textContent = 'Choose Shown or Not shown before continuing.';
      el.memoryChoices[0].focus();
      return;
    }
    var item = TEST_WORDS[state.memory.testIndex];
    state.memory.responses.push({
      word: item.word,
      response: selected.value,
      shown: item.shown
    });
    state.memory.testIndex += 1;
    state.memory.status = 'Response recorded for “' + item.word + '.”';
    el.memoryChoices.forEach(function (input) { input.checked = false; });
    if (state.memory.testIndex >= TEST_WORDS.length) {
      state.memory.mode = 'reveal';
      state.memory.complete = true;
    }
    saveState();
    renderAll();
    if (state.memory.complete) {
      focusHeading('memory-reveal-heading');
    } else {
      el.memoryChoices[0].focus();
    }
  }

  function recordSocial() {
    var selected = el.socialChoices.find(function (input) { return input.checked; });
    if (!selected) {
      el.socialStatus.textContent = 'Choose a team judgment before continuing.';
      el.socialChoices[0].focus();
      return;
    }
    state.social.choice = selected.value;
    state.social.confidence = Number(el.socialConfidence.value);
    state.social.complete = true;
    saveState();
    renderAll();
    focusHeading('social-reveal-heading');
  }

  function recordDiagnosis() {
    var selected = el.diagnosisChoices.find(function (input) { return input.checked; });
    if (!selected) {
      el.diagnosisStatus.textContent = 'Choose what the shared diagnosis establishes.';
      el.diagnosisChoices[0].focus();
      return;
    }
    state.diagnosis.choice = selected.value;
    state.diagnosis.complete = true;
    saveState();
    renderAll();
    focusHeading('diagnosis-reveal-heading');
  }

  function moveToStation(station) {
    state.phase = 'station-' + station;
    saveState();
    renderAll();
    focusHeading(station + '-heading');
  }

  function revealConcept() {
    state.phase = 'concept';
    saveState();
    renderAll();
    focusHeading('concept-heading');
  }

  function revealExplanation() {
    state.phase = 'explain';
    saveState();
    renderAll();
    focusHeading('explain-heading');
  }

  function saveExplanation() {
    var response = el.explanationResponse.value.trim();
    var nonWhitespaceLength = response.replace(/\s/g, '').length;
    if (nonWhitespaceLength < 40) {
      el.explanationStatus.textContent = 'Write at least 40 non-whitespace characters before continuing.';
      el.explanationResponse.focus();
      return;
    }
    state.explanation = response;
    state.explanationSaved = true;
    state.phase = 'transfer';
    saveState();
    renderAll();
    focusHeading('transfer-heading');
  }

  function saveTransfer() {
    var missing = TRANSFER_CLAIMS.some(function (claim) {
      return !el.claimSelects[claim.id].value;
    });
    var response = el.transferResponse.value.trim();
    if (missing) {
      el.transferStatus.textContent = 'Classify all four claims before continuing.';
      Object.keys(el.claimSelects).map(function (key) { return el.claimSelects[key]; })
        .find(function (select) { return !select.value; }).focus();
      return;
    }
    if (!response) {
      el.transferStatus.textContent = 'Explain what the summary preserved, discarded, and why the loss mattered.';
      el.transferResponse.focus();
      return;
    }
    TRANSFER_CLAIMS.forEach(function (claim) {
      state.transfer.classifications[claim.id] = el.claimSelects[claim.id].value;
    });
    state.transfer.response = response;
    state.transfer.completed = true;
    saveState();
    renderAll();
    focusHeading('transfer-feedback-heading');
  }

  function showSummary() {
    state.phase = 'summary';
    saveState();
    renderAll();
    focusHeading('summary-heading');
  }

  function restartLab() {
    presentationToken += 1;
    currentPresentedWord = '';
    restoredTimedSequence = false;
    sessionStorage.removeItem(STORAGE_KEY);
    state = createInitialState();
    clearTransientControls();
    renderAll();
    el.predictionStatus.textContent = 'This lab’s saved session data has been cleared.';
    el.predictionChoices[0].focus();
    window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }

  function clearTransientControls() {
    document.querySelectorAll('input[type="radio"]').forEach(function (input) {
      input.checked = false;
      input.disabled = false;
    });
    el.predictionReason.value = '';
    el.explanationResponse.value = '';
    el.transferResponse.value = '';
    el.socialConfidence.value = '50';
    TRANSFER_CLAIMS.forEach(function (claim) {
      el.claimSelects[claim.id].value = '';
    });
    [
      el.predictionStatus, el.perceptionStatus, el.distractorStatus, el.memoryTestStatus,
      el.socialStatus, el.diagnosisStatus, el.explanationStatus, el.transferStatus
    ].forEach(function (node) {
      node.textContent = '';
    });
  }

  function renderAll() {
    renderPrediction();
    renderStations();
    renderLedger();
    el.conceptPanel.hidden = state.phase !== 'concept';
    renderExplanation();
    renderTransfer();
    renderSummary();
  }

  function renderPrediction() {
    el.predictionChoices.forEach(function (input) {
      input.checked = input.value === state.prediction.choice;
      input.disabled = state.committed;
    });
    el.predictionReason.value = state.prediction.reason;
    el.predictionReason.disabled = state.committed;
    el.commitPrediction.disabled = state.committed;
    el.predictionStatus.textContent = state.committed
      ? 'Prediction committed and frozen for this run.'
      : '';
  }

  function renderStations() {
    var station = activeStation();
    el.stationPanel.hidden = !station;
    STATION_ORDER.forEach(function (name) {
      el[toCamel(name + '-station')].hidden = station !== name;
    });
    if (!station) return;
    el.stationProgress.textContent = 'Station ' + (STATION_ORDER.indexOf(station) + 1) + ' of 4: ' + LEDGER[station].system;
    renderPerception();
    renderMemory();
    renderSocial();
    renderDiagnosis();
  }

  function renderPerception() {
    var done = state.perception.complete;
    var contexts = [
      'A ' + GLYPH + ' C',
      '12 ' + GLYPH + ' 14'
    ];
    el.perceptionSequence.innerHTML = contexts[Math.min(state.perception.index, 1)];
    el.perceptionChoices.forEach(function (input) {
      input.disabled = done;
      if (done) input.checked = false;
    });
    el.recordPerception.disabled = done;
    el.perceptionReveal.hidden = !done;
    if (done) {
      el.perceptionStatus.textContent = 'Both judgments are committed.';
    } else if (state.perception.index === 1) {
      el.perceptionStatus.textContent = 'First judgment recorded. The second context is now available.';
    } else {
      el.perceptionStatus.textContent = '';
    }
  }

  function renderMemory() {
    var mode = state.memory.mode;
    el.memoryReady.hidden = mode !== 'ready';
    el.memoryPresentation.hidden = mode !== 'presenting';
    el.memoryDistractor.hidden = mode !== 'distractor';
    el.memoryTest.hidden = mode !== 'test';
    el.memoryReveal.hidden = mode !== 'reveal';
    if (mode === 'ready') {
      el.memoryReadyStatus.textContent = restoredTimedSequence
        ? 'The page reloaded during the timed list. The list returned safely to the beginning; start it again when ready.'
        : 'The list will begin with the first word.';
    }
    if (mode === 'presenting') {
      el.memoryWord.textContent = currentPresentedWord;
    }
    if (mode === 'distractor') {
      el.distractorProgress.textContent = 'Interruption ' + (state.memory.distractorIndex + 1) + ' of ' + DISTRACTOR_NUMBERS.length;
      el.distractorNumber.textContent = String(DISTRACTOR_NUMBERS[state.memory.distractorIndex]);
      el.distractorStatus.textContent = state.memory.status;
    }
    if (mode === 'test') {
      el.memoryTestProgress.textContent = 'Memory judgment ' + (state.memory.testIndex + 1) + ' of ' + TEST_WORDS.length;
      el.memoryTestWord.textContent = TEST_WORDS[state.memory.testIndex].word;
      el.memoryTestStatus.textContent = state.memory.status;
      el.memoryChoices.forEach(function (input) {
        input.checked = false;
        input.disabled = false;
      });
    }
    if (mode === 'reveal') {
      renderMemoryResults();
    }
  }

  function renderMemoryResults() {
    el.memoryResultsBody.innerHTML = '';
    TEST_WORDS.forEach(function (item, index) {
      var response = state.memory.responses[index];
      var row = document.createElement('tr');
      appendCell(row, item.word, true);
      appendCell(row, item.shown ? 'Shown' : 'Not shown');
      appendCell(row, response ? (response.response === 'shown' ? 'Shown' : 'Not shown') : 'No response');
      el.memoryResultsBody.appendChild(row);
    });
  }

  function renderSocial() {
    el.socialChoices.forEach(function (input) {
      input.checked = input.value === state.social.choice;
      input.disabled = state.social.complete;
    });
    el.socialConfidence.value = String(state.social.confidence);
    el.socialConfidence.disabled = state.social.complete;
    renderConfidence();
    el.recordSocial.disabled = state.social.complete;
    el.socialReveal.hidden = !state.social.complete;
    el.socialStatus.textContent = state.social.complete
      ? 'Judgment committed at ' + state.social.confidence + '% confidence. The sampling history is now visible.'
      : '';
  }

  function renderConfidence() {
    el.socialConfidenceOutput.textContent = el.socialConfidence.value + '%';
  }

  function renderDiagnosis() {
    el.diagnosisChoices.forEach(function (input) {
      input.checked = input.value === state.diagnosis.choice;
      input.disabled = state.diagnosis.complete;
    });
    el.recordDiagnosis.disabled = state.diagnosis.complete;
    el.diagnosisReveal.hidden = !state.diagnosis.complete;
    el.diagnosisStatus.textContent = state.diagnosis.complete ? 'Answer committed. Feedback is now available.' : '';
    if (state.diagnosis.complete) {
      var correct = state.diagnosis.choice === 'shared-pattern';
      el.diagnosisFeedback.className = 'feedback-panel ' + (correct ? 'is-correct' : 'is-incorrect');
      el.diagnosisFeedbackHeading.textContent = correct ? 'Correct: the label organizes a pattern' : 'Recalibrate: the label does not contain the cause';
    }
  }

  function renderLedger() {
    var completed = completedStations();
    el.ledgerPanel.hidden = !state.committed;
    el.ledgerEmpty.hidden = completed.length > 0;
    el.ledgerTableWrap.hidden = completed.length === 0;
    el.ledgerBody.innerHTML = '';
    el.eventLog.innerHTML = '';
    completed.forEach(function (name) {
      var entry = LEDGER[name];
      var row = document.createElement('tr');
      appendCell(row, entry.system, true);
      appendCell(row, entry.preserved);
      appendCell(row, entry.discarded);
      appendCell(row, entry.mattered);
      el.ledgerBody.appendChild(row);

      var item = document.createElement('li');
      item.textContent = eventLogText(name, entry);
      el.eventLog.appendChild(item);
    });
  }

  function renderExplanation() {
    var visible = state.phase === 'explain';
    el.explainPanel.hidden = !visible;
    el.explanationResponse.value = state.explanation;
    el.explanationResponse.disabled = state.explanationSaved;
    el.saveExplanation.disabled = state.explanationSaved;
    el.explanationStatus.textContent = state.explanationSaved ? 'Explanation saved for this browser session.' : '';
  }

  function renderTransfer() {
    var visible = state.phase === 'transfer';
    el.transferPanel.hidden = !visible;
    TRANSFER_CLAIMS.forEach(function (claim) {
      var select = el.claimSelects[claim.id];
      select.value = state.transfer.classifications[claim.id];
      select.disabled = state.transfer.completed;
    });
    el.transferResponse.value = state.transfer.response;
    el.transferResponse.disabled = state.transfer.completed;
    el.saveTransfer.disabled = state.transfer.completed;
    el.transferFeedback.hidden = !state.transfer.completed;
    el.transferStatus.textContent = state.transfer.completed
      ? 'Classifications and transfer response saved for this browser session.'
      : '';
    if (state.transfer.completed) renderTransferResults();
  }

  function renderTransferResults() {
    el.transferResultsBody.innerHTML = '';
    TRANSFER_CLAIMS.forEach(function (claim) {
      var row = document.createElement('tr');
      appendCell(row, claim.text, true);
      appendCell(row, CLASSIFICATION_LABELS[claim.correct]);
      appendCell(row, CLASSIFICATION_LABELS[state.transfer.classifications[claim.id]]);
      el.transferResultsBody.appendChild(row);
    });
  }

  function renderSummary() {
    var visible = state.phase === 'summary';
    el.summaryPanel.hidden = !visible;
    if (!visible) return;
    el.completionSummary.innerHTML = '';

    var prediction = document.createElement('div');
    prediction.className = 'summary-block';
    appendHeading(prediction, 'Your original prediction');
    appendParagraph(prediction, PREDICTION_LABELS[state.prediction.choice]);
    appendParagraph(prediction, state.prediction.reason);
    el.completionSummary.appendChild(prediction);

    var responses = document.createElement('div');
    responses.className = 'summary-block';
    appendHeading(responses, 'Your station responses');
    appendParagraph(responses, 'Perception: letter context—' + state.perception.answers[0] + '; number context—' + state.perception.answers[1] + '.');
    appendParagraph(responses, 'Memory: ' + state.memory.responses.map(function (item) {
      return item.word + '—' + (item.response === 'shown' ? 'Shown' : 'Not shown');
    }).join('; ') + '.');
    appendParagraph(responses, 'Social categorization: ' + socialChoiceLabel() + ' at ' + state.social.confidence + '% confidence.');
    appendParagraph(responses, 'Diagnosis: ' + diagnosisChoiceLabel() + '.');
    el.completionSummary.appendChild(responses);

    var ledger = document.createElement('div');
    ledger.className = 'summary-block';
    appendHeading(ledger, 'Completed Compression Ledger');
    var tableWrap = document.createElement('div');
    tableWrap.className = 'table-wrap';
    var table = document.createElement('table');
    table.className = 'summary-table';
    var head = document.createElement('thead');
    head.innerHTML = '<tr><th scope="col">System</th><th scope="col">Preserved</th><th scope="col">Discarded</th><th scope="col">Loss mattered when…</th></tr>';
    table.appendChild(head);
    var body = document.createElement('tbody');
    STATION_ORDER.forEach(function (name) {
      var entry = LEDGER[name];
      var row = document.createElement('tr');
      appendCell(row, entry.system, true);
      appendCell(row, entry.preserved);
      appendCell(row, entry.discarded);
      appendCell(row, entry.mattered);
      body.appendChild(row);
    });
    table.appendChild(body);
    tableWrap.appendChild(table);
    ledger.appendChild(tableWrap);
    el.completionSummary.appendChild(ledger);

    var explanation = document.createElement('div');
    explanation.className = 'summary-block';
    appendHeading(explanation, 'Your cross-system explanation');
    appendParagraph(explanation, state.explanation);
    el.completionSummary.appendChild(explanation);

    var transfer = document.createElement('div');
    transfer.className = 'summary-block';
    appendHeading(transfer, 'Your AI-summary audit');
    TRANSFER_CLAIMS.forEach(function (claim) {
      appendParagraph(transfer, claim.text + ': ' + CLASSIFICATION_LABELS[state.transfer.classifications[claim.id]] + '.');
    });
    appendParagraph(transfer, state.transfer.response);
    el.completionSummary.appendChild(transfer);

    var concept = document.createElement('p');
    concept.innerHTML = '<strong>Conceptual summary:</strong> Across four different systems, a useful representation preserved structure for interpretation or action, and patterned error appeared when the task later demanded information that representation had discarded.';
    el.completionSummary.appendChild(concept);
  }

  function activeStation() {
    if (state.phase.indexOf('station-') !== 0) return '';
    return state.phase.slice('station-'.length);
  }

  function completedStations() {
    return STATION_ORDER.filter(function (name) {
      return Boolean(state[name].complete);
    });
  }

  function eventLogText(name, entry) {
    var response;
    if (name === 'perception') {
      response = 'Responses: ' + state.perception.answers[0] + ' in the letter context and ' + state.perception.answers[1] + ' in the number context.';
    } else if (name === 'memory') {
      response = 'Responses: ' + state.memory.responses.map(function (item) {
        return item.word + ' ' + (item.response === 'shown' ? 'shown' : 'not shown');
      }).join(', ') + '.';
    } else if (name === 'social') {
      response = 'Response: ' + socialChoiceLabel() + ' at ' + state.social.confidence + '% confidence.';
    } else {
      response = 'Response: ' + diagnosisChoiceLabel() + '.';
    }
    return entry.system + ' station. ' + response + ' Preserved: ' + entry.preserved + ' Discarded: ' + entry.discarded + ' Loss mattered when: ' + entry.mattered;
  }

  function socialChoiceLabel() {
    if (state.social.choice === 'insufficient') return 'The available evidence is not sufficient';
    return state.social.choice;
  }

  function diagnosisChoiceLabel() {
    var labels = {
      'same-cause': 'The two cases must have the same cause',
      'same-treatment': 'The two cases should receive exactly the same treatment',
      'shared-pattern': 'The cases share a clinically recognized symptom pattern, while causes, maintaining processes, and treatment needs may differ',
      everything: 'The label explains everything important about both cases'
    };
    return labels[state.diagnosis.choice] || '';
  }

  function appendCell(row, text, heading) {
    var cell = document.createElement(heading ? 'th' : 'td');
    if (heading) cell.scope = 'row';
    cell.textContent = text;
    row.appendChild(cell);
  }

  function appendHeading(parent, text) {
    var heading = document.createElement('h3');
    heading.textContent = text;
    parent.appendChild(heading);
  }

  function appendParagraph(parent, text) {
    var paragraph = document.createElement('p');
    paragraph.textContent = text;
    parent.appendChild(paragraph);
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      el.predictionStatus.textContent = 'Progress remains on this page but could not be saved for refresh.';
    }
  }

  function restoreState() {
    var raw;
    try {
      raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var candidate = JSON.parse(raw);
      if (!isValidState(candidate)) {
        sessionStorage.removeItem(STORAGE_KEY);
        return;
      }
      state = mergeState(candidate);
      if (state.phase === 'station-memory' && state.memory.mode === 'presenting') {
        state.memory.mode = 'ready';
        state.memory.distractorIndex = 0;
        state.memory.distractorResponses = [];
        state.memory.testIndex = 0;
        state.memory.responses = [];
        state.memory.complete = false;
        state.memory.status = '';
        restoredTimedSequence = true;
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      }
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
      state = createInitialState();
    }
  }

  function isValidState(candidate) {
    return candidate &&
      typeof candidate === 'object' &&
      typeof candidate.committed === 'boolean' &&
      typeof candidate.phase === 'string' &&
      candidate.prediction && typeof candidate.prediction === 'object' &&
      candidate.perception && typeof candidate.perception === 'object' &&
      candidate.memory && typeof candidate.memory === 'object' &&
      candidate.social && typeof candidate.social === 'object' &&
      candidate.diagnosis && typeof candidate.diagnosis === 'object' &&
      candidate.transfer && typeof candidate.transfer === 'object';
  }

  function mergeState(candidate) {
    var fresh = createInitialState();
    var merged = Object.assign(fresh, candidate);
    merged.prediction = Object.assign(fresh.prediction, candidate.prediction || {});
    merged.perception = Object.assign(fresh.perception, candidate.perception || {});
    merged.memory = Object.assign(fresh.memory, candidate.memory || {});
    merged.social = Object.assign(fresh.social, candidate.social || {});
    merged.diagnosis = Object.assign(fresh.diagnosis, candidate.diagnosis || {});
    merged.transfer = Object.assign(fresh.transfer, candidate.transfer || {});
    merged.transfer.classifications = Object.assign(fresh.transfer.classifications, (candidate.transfer && candidate.transfer.classifications) || {});
    merged.perception.answers = Array.isArray(candidate.perception.answers) ? candidate.perception.answers.slice(0, 2) : [];
    merged.memory.distractorResponses = Array.isArray(candidate.memory.distractorResponses) ? candidate.memory.distractorResponses.slice(0, 3) : [];
    merged.memory.responses = Array.isArray(candidate.memory.responses) ? candidate.memory.responses.slice(0, 6) : [];
    return merged;
  }

  function focusHeading(id) {
    var node = document.getElementById(id);
    if (!node) return;
    node.focus();
    node.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function toCamel(value) {
    return value.replace(/-([a-z])/g, function (_, letter) { return letter.toUpperCase(); });
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
}());
