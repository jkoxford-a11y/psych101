/* Self-Reference Effect Learning Lab */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch08-self-reference-effect-v1';
  const CONDITIONS = ['semantic', 'self'];
  const CONDITION_LABELS = {
    semantic: 'General semantic',
    self: 'Self-reference'
  };

  const wordSets = [
    [
      'curious', 'patient', 'organized', 'flexible', 'dependable', 'observant',
      'cautious', 'reserved', 'competitive', 'impulsive', 'stubborn', 'skeptical'
    ],
    [
      'creative', 'practical', 'cooperative', 'energetic', 'calm', 'adaptable',
      'decisive', 'adventurous', 'independent', 'spontaneous', 'impatient', 'hesitant'
    ]
  ];

  const lureWords = [
    'thoughtful', 'methodical', 'sociable', 'focused', 'resourceful', 'tactful',
    'assertive', 'punctual', 'generous', 'quiet', 'restless', 'blunt',
    'careful', 'optimistic', 'playful', 'serious', 'confident', 'modest',
    'persistent', 'inventive', 'sensitive', 'direct', 'easygoing', 'perfectionistic'
  ];

  const distractorNumbers = [47, 18, 63, 24, 55, 32, 71, 46];

  let state = createInitialState();
  const elements = {};

  function createInitialState() {
    const version = Math.floor(Math.random() * 2);
    const encodingTrials = buildEncodingTrials(version);
    const recognitionTrials = buildRecognitionTrials(encodingTrials);

    return {
      committed: false,
      predictionChoice: '',
      predictionReason: '',
      version: version,
      phase: 'prediction',
      encodingTrials: encodingTrials,
      encodingIndex: 0,
      skippedTrials: 0,
      skippedWords: [],
      distractorIndex: 0,
      recognitionTrials: recognitionTrials,
      recognitionIndex: 0,
      recognitionResponses: [],
      explanation: '',
      explanationCommitted: false,
      transfer: '',
      encodingLog: [],
      recognitionLog: [],
      lastEncodingStatus: '',
      lastDistractorStatus: '',
      lastRecognitionStatus: ''
    };
  }

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();
    renderAll();
  }

  function cacheElements() {
    elements.predictionChoices = Array.from(document.querySelectorAll('input[name="prediction-choice"]'));
    elements.predictionReason = document.getElementById('prediction-reason');
    elements.commitPrediction = document.getElementById('commit-prediction');
    elements.predictionStatus = document.getElementById('prediction-status');

    elements.encodingPanel = document.getElementById('encoding-panel');
    elements.encodingCounter = document.getElementById('encoding-counter');
    elements.encodingCondition = document.getElementById('encoding-condition');
    elements.processingLabel = document.getElementById('processing-label');
    elements.stimulusWord = document.getElementById('stimulus-word');
    elements.orientingQuestion = document.getElementById('orienting-question');
    elements.encodingYes = document.getElementById('encoding-yes');
    elements.encodingNo = document.getElementById('encoding-no');
    elements.encodingSkip = document.getElementById('encoding-skip');
    elements.encodingStatus = document.getElementById('encoding-status');
    elements.encodingLog = document.getElementById('encoding-log');

    elements.distractorPanel = document.getElementById('distractor-panel');
    elements.distractorCounter = document.getElementById('distractor-counter');
    elements.distractorNumber = document.getElementById('distractor-number');
    elements.distractorOdd = document.getElementById('distractor-odd');
    elements.distractorEven = document.getElementById('distractor-even');
    elements.distractorStatus = document.getElementById('distractor-status');

    elements.recognitionPanel = document.getElementById('recognition-panel');
    elements.recognitionCounter = document.getElementById('recognition-counter');
    elements.recognitionProgress = document.getElementById('recognition-progress');
    elements.recognitionWord = document.getElementById('recognition-word');
    elements.recognitionOld = document.getElementById('recognition-old');
    elements.recognitionNew = document.getElementById('recognition-new');
    elements.recognitionStatus = document.getElementById('recognition-status');
    elements.recognitionLog = document.getElementById('recognition-log');

    elements.explainPanel = document.getElementById('explain-panel');
    elements.completionSummary = document.getElementById('completion-summary');
    elements.semanticCount = document.getElementById('semantic-count');
    elements.semanticRate = document.getElementById('semantic-rate');
    elements.selfCount = document.getElementById('self-count');
    elements.selfRate = document.getElementById('self-rate');
    elements.falseAlarmSummary = document.getElementById('false-alarm-summary');
    elements.explanationResponse = document.getElementById('explanation-response');
    elements.saveExplanation = document.getElementById('save-explanation');
    elements.explanationStatus = document.getElementById('explanation-status');

    elements.transferPanel = document.getElementById('transfer-panel');
    elements.transferSummary = document.getElementById('transfer-summary');
    elements.transferResponse = document.getElementById('transfer-response');
    elements.saveTransfer = document.getElementById('save-transfer');
    elements.restartLab = document.getElementById('restart-lab');
    elements.transferStatus = document.getElementById('transfer-status');
  }

  function bindEvents() {
    elements.commitPrediction.addEventListener('click', commitPrediction);
    elements.encodingYes.addEventListener('click', function () { completeEncodingTrial(false); });
    elements.encodingNo.addEventListener('click', function () { completeEncodingTrial(false); });
    elements.encodingSkip.addEventListener('click', function () { completeEncodingTrial(true); });
    elements.distractorOdd.addEventListener('click', completeDistractorTrial);
    elements.distractorEven.addEventListener('click', completeDistractorTrial);
    elements.recognitionOld.addEventListener('click', function () { recordRecognition(true); });
    elements.recognitionNew.addEventListener('click', function () { recordRecognition(false); });
    elements.saveExplanation.addEventListener('click', saveExplanation);
    elements.saveTransfer.addEventListener('click', saveTransfer);
    elements.restartLab.addEventListener('click', restartLab);
  }

  function commitPrediction() {
    const selected = elements.predictionChoices.find(function (choice) {
      return choice.checked;
    });
    const reason = elements.predictionReason.value.trim();

    if (!selected) {
      elements.predictionStatus.textContent = 'Choose a predicted pattern before committing.';
      elements.predictionChoices[0].focus();
      return;
    }

    if (!reason) {
      elements.predictionStatus.textContent = 'Explain your prediction before committing.';
      elements.predictionReason.focus();
      return;
    }

    state.committed = true;
    state.predictionChoice = selected.value;
    state.predictionReason = reason;
    state.phase = 'encoding';
    state.encodingLog.push('Prediction committed. The trait-judgment task begins. Individual yes/no endorsements are not stored.');
    saveState();
    renderAll();
    focusHeading('encoding-heading');
  }

  function completeEncodingTrial(skipped) {
    if (state.phase !== 'encoding') {
      return;
    }

    const trial = state.encodingTrials[state.encodingIndex];
    if (skipped) {
      state.skippedTrials += 1;
      state.skippedWords.push(trial.word);
      state.encodingLog.push(`${CONDITION_LABELS[trial.condition]} judgment ${state.encodingIndex + 1}: skipped. No trait endorsement was stored.`);
      state.lastEncodingStatus = 'Word skipped. No trait endorsement was stored.';
    } else {
      state.encodingLog.push(`${CONDITION_LABELS[trial.condition]} judgment ${state.encodingIndex + 1}: completed. The yes/no response was not stored.`);
      state.lastEncodingStatus = 'Judgment completed. The yes/no response was not stored.';
    }

    state.encodingIndex += 1;
    if (state.encodingIndex >= state.encodingTrials.length) {
      state.phase = 'distractor';
      state.lastEncodingStatus = 'All trait judgments are complete.';
    }

    saveState();
    renderAll();

    if (state.phase === 'distractor') {
      focusHeading('distractor-heading');
    }
  }

  function completeDistractorTrial() {
    if (state.phase !== 'distractor') {
      return;
    }

    state.distractorIndex += 1;
    state.lastDistractorStatus = `Number ${state.distractorIndex} classified.`;

    if (state.distractorIndex >= distractorNumbers.length) {
      state.phase = 'recognition';
      state.lastDistractorStatus = 'Interruption complete. Begin the recognition test.';
    }

    saveState();
    renderAll();

    if (state.phase === 'recognition') {
      focusHeading('recognition-heading');
    }
  }

  function recordRecognition(oldResponse) {
    if (state.phase !== 'recognition') {
      return;
    }

    const trial = state.recognitionTrials[state.recognitionIndex];
    state.recognitionResponses.push({
      old: trial.old,
      condition: trial.condition,
      word: trial.word,
      oldResponse: oldResponse
    });

    const accuracy = oldResponse === trial.old ? 'correct' : 'incorrect';
    state.recognitionLog.push(`Recognition item ${state.recognitionIndex + 1}: response recorded (${accuracy}).`);
    state.recognitionIndex += 1;
    state.lastRecognitionStatus = `Response ${state.recognitionIndex} recorded.`;

    if (state.recognitionIndex >= state.recognitionTrials.length) {
      state.phase = 'complete';
      state.lastRecognitionStatus = 'Recognition test complete.';
    }

    saveState();
    renderAll();

    if (state.phase === 'complete') {
      focusHeading('explain-heading');
    }
  }

  function saveExplanation() {
    const response = elements.explanationResponse.value.trim();
    if (!response) {
      elements.explanationStatus.textContent = 'Write an explanation before continuing.';
      elements.explanationResponse.focus();
      return;
    }

    state.explanation = response;
    state.explanationCommitted = true;
    saveState();
    renderAll();
    elements.explanationStatus.textContent = 'Explanation saved in this browser session.';
    focusHeading('transfer-heading');
  }

  function saveTransfer() {
    state.transfer = elements.transferResponse.value.trim();
    saveState();
    elements.transferStatus.textContent = state.transfer ? 'Transfer response saved in this browser session.' : 'Transfer response cleared.';
  }

  function restartLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state = createInitialState();
    elements.predictionStatus.textContent = '';
    elements.explanationStatus.textContent = '';
    elements.transferStatus.textContent = '';
    renderAll();
    window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }

  function renderAll() {
    renderPrediction();
    renderEncoding();
    renderDistractor();
    renderRecognition();
    renderLogs();
    renderResults();
  }

  function renderPrediction() {
    elements.predictionChoices.forEach(function (choice) {
      choice.checked = choice.value === state.predictionChoice;
      choice.disabled = state.committed;
    });
    elements.predictionReason.value = state.predictionReason;
    elements.predictionReason.disabled = state.committed;
    elements.commitPrediction.disabled = state.committed;

    if (state.committed) {
      elements.predictionStatus.textContent = 'Prediction committed and saved for this browser session.';
    }
  }

  function renderEncoding() {
    const visible = state.phase === 'encoding';
    elements.encodingPanel.hidden = !visible;
    elements.encodingStatus.textContent = state.lastEncodingStatus;
    elements.encodingYes.disabled = !visible;
    elements.encodingNo.disabled = !visible;
    elements.encodingSkip.disabled = !visible;

    if (!visible) {
      return;
    }

    const trial = state.encodingTrials[state.encodingIndex];
    elements.encodingCounter.textContent = `Judgment ${state.encodingIndex + 1} of ${state.encodingTrials.length}`;
    elements.encodingCondition.textContent = `${CONDITION_LABELS[trial.condition]} judgment`;
    elements.processingLabel.textContent = CONDITION_LABELS[trial.condition];
    elements.stimulusWord.textContent = trial.word.toUpperCase();
    elements.orientingQuestion.textContent = trial.condition === 'self'
      ? 'Could this trait describe you in at least some situations?'
      : 'Is this trait usually more helpful than harmful in a group project?';
  }

  function renderDistractor() {
    const visible = state.phase === 'distractor';
    elements.distractorPanel.hidden = !visible;
    elements.distractorStatus.textContent = state.lastDistractorStatus;
    elements.distractorOdd.disabled = !visible;
    elements.distractorEven.disabled = !visible;

    if (!visible) {
      return;
    }

    elements.distractorCounter.textContent = `Number ${state.distractorIndex + 1} of ${distractorNumbers.length}`;
    elements.distractorNumber.textContent = String(distractorNumbers[state.distractorIndex]);
  }

  function renderRecognition() {
    const visible = state.phase === 'recognition';
    elements.recognitionPanel.hidden = !visible;
    elements.recognitionStatus.textContent = state.lastRecognitionStatus;
    elements.recognitionOld.disabled = !visible;
    elements.recognitionNew.disabled = !visible;

    if (!visible) {
      return;
    }

    const trial = state.recognitionTrials[state.recognitionIndex];
    elements.recognitionCounter.textContent = `Recognition item ${state.recognitionIndex + 1} of ${state.recognitionTrials.length}`;
    elements.recognitionProgress.textContent = `${state.recognitionIndex} response${state.recognitionIndex === 1 ? '' : 's'} recorded`;
    elements.recognitionWord.textContent = trial.word;
  }

  function renderLogs() {
    renderLog(elements.encodingLog, state.encodingLog);
    renderLog(elements.recognitionLog, state.recognitionLog);
  }

  function renderLog(container, entries) {
    container.innerHTML = '';
    entries.forEach(function (entry) {
      const item = document.createElement('li');
      item.textContent = entry;
      container.appendChild(item);
    });
  }

  function renderResults() {
    const complete = state.phase === 'complete';
    elements.explainPanel.hidden = !complete;
    elements.transferPanel.hidden = !(complete && state.explanationCommitted);

    if (!complete) {
      return;
    }

    const results = calculateResults();
    setResultCells('semantic', results.semantic);
    setResultCells('self', results.self);

    const predictionLabel = predictionText(state.predictionChoice);
    elements.completionSummary.textContent = buildCompletionSummary(results, predictionLabel);
    elements.falseAlarmSummary.textContent = `You called ${results.falseAlarms} of ${results.lureCount} new words “old,” a false-alarm rate of ${formatPercent(results.falseAlarms / results.lureCount)}. False alarms matter because frequent “old” responses can make recognition look stronger than it is. You skipped ${state.skippedTrials} of the 24 original trait judgments; skipped targets were excluded from the condition recognition rates.`;
    elements.explanationResponse.value = state.explanation;
    elements.transferResponse.value = state.transfer;
    elements.transferSummary.textContent = `Your original prediction was ${predictionLabel}. Your recognition rates were ${formatPercent(results.semantic.rate)} for general semantic judgments and ${formatPercent(results.self.rate)} for self-reference judgments.`;
  }

  function calculateResults() {
    const result = {
      semantic: { hits: 0, total: 0, rate: 0 },
      self: { hits: 0, total: 0, rate: 0 },
      falseAlarms: 0,
      lureCount: 0
    };

    state.recognitionResponses.forEach(function (response) {
      if (response.old) {
        if (state.skippedWords.includes(response.word)) {
          return;
        }
        result[response.condition].total += 1;
        if (response.oldResponse) {
          result[response.condition].hits += 1;
        }
      } else {
        result.lureCount += 1;
        if (response.oldResponse) {
          result.falseAlarms += 1;
        }
      }
    });

    CONDITIONS.forEach(function (condition) {
      result[condition].rate = result[condition].total ? result[condition].hits / result[condition].total : 0;
    });

    return result;
  }

  function setResultCells(condition, result) {
    elements[`${condition}Count`].textContent = `${result.hits} of ${result.total}`;
    elements[`${condition}Rate`].textContent = formatPercent(result.rate);
  }

  function buildCompletionSummary(results, predictionLabel) {
    const selfRate = results.self.rate;
    const semanticRate = results.semantic.rate;
    let observedPattern = 'The two conditions produced the same recognition rate in this short session.';

    if (selfRate > semanticRate) {
      observedPattern = 'Self-referenced words produced the higher recognition rate in this short session.';
    } else if (semanticRate > selfRate) {
      observedPattern = 'General-semantic words produced the higher recognition rate in this short session.';
    }

    return `Your original prediction was ${predictionLabel}. ${observedPattern} One person’s score from 24 targets is a demonstration, not decisive evidence. The self-reference effect is a group-level tendency, and individual results can reverse or tie because of chance, attention, skipped trials, and particular words.`;
  }

  function predictionText(choice) {
    if (choice === 'self') {
      return 'that self-reference judgments would produce better recognition';
    }
    if (choice === 'semantic') {
      return 'that general semantic judgments would produce better recognition';
    }
    return 'that the two judgments would produce about the same recognition';
  }

  function buildEncodingTrials(version) {
    const selfSetIndex = version;
    const semanticSetIndex = version === 0 ? 1 : 0;
    const trials = [];

    wordSets[selfSetIndex].forEach(function (word) {
      trials.push({ word: word, condition: 'self' });
    });
    wordSets[semanticSetIndex].forEach(function (word) {
      trials.push({ word: word, condition: 'semantic' });
    });

    return shuffle(trials);
  }

  function buildRecognitionTrials(encodingTrials) {
    const targets = encodingTrials.map(function (trial) {
      return { word: trial.word, old: true, condition: trial.condition };
    });
    const lures = lureWords.map(function (word) {
      return { word: word, old: false, condition: null };
    });
    return shuffle(targets.concat(lures));
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      const temporary = copy[index];
      copy[index] = copy[swapIndex];
      copy[swapIndex] = temporary;
    }
    return copy;
  }

  function saveState() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function restoreState() {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return;
    }

    try {
      const restored = JSON.parse(saved);
      if (isValidState(restored)) {
        state = restored;
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  function isValidState(candidate) {
    return candidate &&
      Array.isArray(candidate.encodingTrials) &&
      candidate.encodingTrials.length === 24 &&
      Array.isArray(candidate.recognitionTrials) &&
      candidate.recognitionTrials.length === 48 &&
      Array.isArray(candidate.recognitionResponses) &&
      Array.isArray(candidate.skippedWords) &&
      Array.isArray(candidate.encodingLog) &&
      Array.isArray(candidate.recognitionLog) &&
      typeof candidate.phase === 'string';
  }

  function formatPercent(value) {
    return `${Math.round(value * 100)}%`;
  }

  function focusHeading(id) {
    const heading = document.getElementById(id);
    if (heading) {
      heading.focus();
      heading.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
}());
