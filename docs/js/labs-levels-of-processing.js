/* Levels of Processing Learning Lab */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch08-levels-of-processing-v1';
  const CONDITIONS = ['appearance', 'sound', 'meaning'];
  const CONDITION_LABELS = {
    appearance: 'Appearance',
    sound: 'Sound',
    meaning: 'Meaning'
  };

  const wordSets = [
    [
      { id: 'a1', word: 'river', uppercase: true, rhymeCue: 'giver', rhymeAnswer: true, sentence: 'The bridge crossed the ___.', meaningAnswer: true },
      { id: 'a2', word: 'chair', uppercase: true, rhymeCue: 'bear', rhymeAnswer: true, sentence: 'She sat on the ___.', meaningAnswer: true },
      { id: 'a3', word: 'cloud', uppercase: true, rhymeCue: 'loud', rhymeAnswer: true, sentence: 'The mechanic repaired the ___.', meaningAnswer: false },
      { id: 'a4', word: 'window', uppercase: true, rhymeCue: 'candle', rhymeAnswer: false, sentence: 'Sunlight came through the ___.', meaningAnswer: true },
      { id: 'a5', word: 'candle', uppercase: true, rhymeCue: 'handle', rhymeAnswer: true, sentence: 'He wore the ___ on his foot.', meaningAnswer: false },
      { id: 'a6', word: 'doctor', uppercase: false, rhymeCue: 'faster', rhymeAnswer: false, sentence: 'The patient spoke with the ___.', meaningAnswer: true },
      { id: 'a7', word: 'pillow', uppercase: false, rhymeCue: 'yellow', rhymeAnswer: true, sentence: 'The chef chopped the ___ for dinner.', meaningAnswer: false },
      { id: 'a8', word: 'basket', uppercase: false, rhymeCue: 'river', rhymeAnswer: false, sentence: 'She carried apples in the ___.', meaningAnswer: true },
      { id: 'a9', word: 'engine', uppercase: false, rhymeCue: 'cloud', rhymeAnswer: false, sentence: 'The baby slept under the ___.', meaningAnswer: false },
      { id: 'a10', word: 'forest', uppercase: false, rhymeCue: 'chair', rhymeAnswer: false, sentence: 'He mailed the letter in the ___.', meaningAnswer: false }
    ],
    [
      { id: 'b1', word: 'train', uppercase: true, rhymeCue: 'rain', rhymeAnswer: true, sentence: 'Passengers boarded the ___.', meaningAnswer: true },
      { id: 'b2', word: 'beach', uppercase: true, rhymeCue: 'teach', rhymeAnswer: true, sentence: 'Waves reached the ___.', meaningAnswer: true },
      { id: 'b3', word: 'book', uppercase: true, rhymeCue: 'cook', rhymeAnswer: true, sentence: 'She poured the ___ into a cup.', meaningAnswer: false },
      { id: 'b4', word: 'moon', uppercase: true, rhymeCue: 'spoon', rhymeAnswer: true, sentence: 'The ___ orbited Earth.', meaningAnswer: true },
      { id: 'b5', word: 'phone', uppercase: true, rhymeCue: 'stone', rhymeAnswer: true, sentence: 'He answered the ___.', meaningAnswer: true },
      { id: 'b6', word: 'bread', uppercase: false, rhymeCue: 'cloud', rhymeAnswer: false, sentence: 'The carpenter measured the ___.', meaningAnswer: false },
      { id: 'b7', word: 'horse', uppercase: false, rhymeCue: 'chair', rhymeAnswer: false, sentence: 'The rider mounted the ___.', meaningAnswer: true },
      { id: 'b8', word: 'clock', uppercase: false, rhymeCue: 'lake', rhymeAnswer: false, sentence: 'The gardener watered the ___.', meaningAnswer: false },
      { id: 'b9', word: 'lake', uppercase: false, rhymeCue: 'book', rhymeAnswer: false, sentence: 'She tied the ___ around her waist.', meaningAnswer: false },
      { id: 'b10', word: 'shoe', uppercase: false, rhymeCue: 'train', rhymeAnswer: false, sentence: 'The pilot landed on the ___.', meaningAnswer: false }
    ],
    [
      { id: 'c1', word: 'star', uppercase: true, rhymeCue: 'car', rhymeAnswer: true, sentence: 'A bright ___ appeared in the night sky.', meaningAnswer: true },
      { id: 'c2', word: 'cake', uppercase: true, rhymeCue: 'lake', rhymeAnswer: true, sentence: 'They served the birthday ___.', meaningAnswer: true },
      { id: 'c3', word: 'road', uppercase: true, rhymeCue: 'toad', rhymeAnswer: true, sentence: 'The boat sailed down the ___.', meaningAnswer: false },
      { id: 'c4', word: 'bell', uppercase: true, rhymeCue: 'shell', rhymeAnswer: true, sentence: 'The ___ rang at noon.', meaningAnswer: true },
      { id: 'c5', word: 'fish', uppercase: true, rhymeCue: 'dish', rhymeAnswer: true, sentence: 'The ___ swam through the water.', meaningAnswer: true },
      { id: 'c6', word: 'door', uppercase: false, rhymeCue: 'star', rhymeAnswer: false, sentence: 'She opened the ___.', meaningAnswer: true },
      { id: 'c7', word: 'coat', uppercase: false, rhymeCue: 'seed', rhymeAnswer: false, sentence: 'The farmer planted the ___.', meaningAnswer: false },
      { id: 'c8', word: 'seed', uppercase: false, rhymeCue: 'lamp', rhymeAnswer: false, sentence: 'He hung the ___ from the ceiling.', meaningAnswer: false },
      { id: 'c9', word: 'lamp', uppercase: false, rhymeCue: 'mountain', rhymeAnswer: false, sentence: 'They climbed the ___ to reach the summit.', meaningAnswer: false },
      { id: 'c10', word: 'mountain', uppercase: false, rhymeCue: 'door', rhymeAnswer: false, sentence: 'She ate the ___ with a spoon.', meaningAnswer: false }
    ]
  ];

  const lureWords = [
    'pencil', 'meadow', 'tunnel', 'ticket', 'kitchen', 'button', 'camera', 'walnut', 'castle', 'planet',
    'violin', 'hammer', 'desert', 'rabbit', 'bottle', 'pocket', 'village', 'blanket', 'market', 'ladder',
    'island', 'coffee', 'circle', 'wallet', 'flower', 'carpet', 'school', 'mirror', 'tower', 'paper'
  ];

  const distractorNumbers = [47, 18, 63, 24, 55, 32, 71, 46];

  let state = createInitialState();
  const elements = {};

  function createInitialState() {
    const version = Math.floor(Math.random() * 3);
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
      encodingResponses: [],
      distractorIndex: 0,
      distractorResponses: [],
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

  function buildEncodingTrials(version) {
    const trials = [];
    wordSets.forEach(function (set, setIndex) {
      const condition = CONDITIONS[(setIndex + version) % CONDITIONS.length];
      set.forEach(function (item) {
        trials.push({
          id: item.id,
          word: item.word,
          uppercase: item.uppercase,
          rhymeCue: item.rhymeCue,
          rhymeAnswer: item.rhymeAnswer,
          sentence: item.sentence,
          meaningAnswer: item.meaningAnswer,
          condition: condition
        });
      });
    });
    return shuffle(trials);
  }

  function buildRecognitionTrials(encodingTrials) {
    const targets = encodingTrials.map(function (trial) {
      return {
        id: trial.id,
        word: trial.word,
        old: true,
        condition: trial.condition
      };
    });
    const lures = lureWords.map(function (word, index) {
      return {
        id: `lure-${index + 1}`,
        word: word,
        old: false,
        condition: null
      };
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
    elements.encodingHeading = document.getElementById('encoding-heading');
    elements.encodingCounter = document.getElementById('encoding-counter');
    elements.encodingCondition = document.getElementById('encoding-condition');
    elements.processingLabel = document.getElementById('processing-label');
    elements.stimulusWord = document.getElementById('stimulus-word');
    elements.orientingQuestion = document.getElementById('orienting-question');
    elements.encodingYes = document.getElementById('encoding-yes');
    elements.encodingNo = document.getElementById('encoding-no');
    elements.encodingStatus = document.getElementById('encoding-status');
    elements.encodingLog = document.getElementById('encoding-log');

    elements.distractorPanel = document.getElementById('distractor-panel');
    elements.distractorHeading = document.getElementById('distractor-heading');
    elements.distractorCounter = document.getElementById('distractor-counter');
    elements.distractorNumber = document.getElementById('distractor-number');
    elements.distractorOdd = document.getElementById('distractor-odd');
    elements.distractorEven = document.getElementById('distractor-even');
    elements.distractorStatus = document.getElementById('distractor-status');

    elements.recognitionPanel = document.getElementById('recognition-panel');
    elements.recognitionHeading = document.getElementById('recognition-heading');
    elements.recognitionCounter = document.getElementById('recognition-counter');
    elements.recognitionProgress = document.getElementById('recognition-progress');
    elements.recognitionWord = document.getElementById('recognition-word');
    elements.recognitionOld = document.getElementById('recognition-old');
    elements.recognitionNew = document.getElementById('recognition-new');
    elements.recognitionStatus = document.getElementById('recognition-status');
    elements.recognitionLog = document.getElementById('recognition-log');

    elements.explainPanel = document.getElementById('explain-panel');
    elements.explainHeading = document.getElementById('explain-heading');
    elements.completionSummary = document.getElementById('completion-summary');
    elements.appearanceCount = document.getElementById('appearance-count');
    elements.appearanceRate = document.getElementById('appearance-rate');
    elements.soundCount = document.getElementById('sound-count');
    elements.soundRate = document.getElementById('sound-rate');
    elements.meaningCount = document.getElementById('meaning-count');
    elements.meaningRate = document.getElementById('meaning-rate');
    elements.falseAlarmSummary = document.getElementById('false-alarm-summary');
    elements.explanationResponse = document.getElementById('explanation-response');
    elements.saveExplanation = document.getElementById('save-explanation');
    elements.explanationStatus = document.getElementById('explanation-status');

    elements.transferPanel = document.getElementById('transfer-panel');
    elements.transferHeading = document.getElementById('transfer-heading');
    elements.transferSummary = document.getElementById('transfer-summary');
    elements.transferResponse = document.getElementById('transfer-response');
    elements.saveTransfer = document.getElementById('save-transfer');
    elements.restartLab = document.getElementById('restart-lab');
    elements.transferStatus = document.getElementById('transfer-status');
  }

  function bindEvents() {
    elements.commitPrediction.addEventListener('click', commitPrediction);
    elements.encodingYes.addEventListener('click', function () { recordEncodingResponse(true); });
    elements.encodingNo.addEventListener('click', function () { recordEncodingResponse(false); });
    elements.distractorOdd.addEventListener('click', function () { recordDistractorResponse('odd'); });
    elements.distractorEven.addEventListener('click', function () { recordDistractorResponse('even'); });
    elements.recognitionOld.addEventListener('click', function () { recordRecognitionResponse(true); });
    elements.recognitionNew.addEventListener('click', function () { recordRecognitionResponse(false); });
    elements.saveExplanation.addEventListener('click', saveExplanation);
    elements.saveTransfer.addEventListener('click', saveTransfer);
    elements.restartLab.addEventListener('click', restartLab);
  }

  function commitPrediction() {
    const selected = elements.predictionChoices.find(function (choice) { return choice.checked; });
    const reason = elements.predictionReason.value.trim();

    if (!selected) {
      elements.predictionStatus.textContent = 'Choose a predicted pattern before committing.';
      elements.predictionChoices[0].focus();
      return;
    }
    if (!reason) {
      elements.predictionStatus.textContent = 'Explain why you expect that pattern before committing.';
      elements.predictionReason.focus();
      return;
    }

    state.committed = true;
    state.predictionChoice = selected.value;
    state.predictionReason = reason;
    state.phase = 'encoding';
    saveState();
    renderAll();
    focusPanel(elements.encodingHeading);
  }

  function recordEncodingResponse(answer) {
    if (state.phase !== 'encoding') {
      return;
    }

    const trial = state.encodingTrials[state.encodingIndex];
    const expected = expectedEncodingAnswer(trial);
    state.encodingResponses.push({
      id: trial.id,
      condition: trial.condition,
      answer: answer,
      expected: expected,
      correct: answer === expected
    });
    state.encodingLog.push(`Judgment ${state.encodingIndex + 1}: ${CONDITION_LABELS[trial.condition]} response recorded; you answered ${answer ? 'yes' : 'no'}.`);
    state.encodingIndex += 1;
    state.lastEncodingStatus = `Response recorded. ${state.encodingTrials.length - state.encodingIndex} judgment${state.encodingTrials.length - state.encodingIndex === 1 ? '' : 's'} remain.`;

    if (state.encodingIndex >= state.encodingTrials.length) {
      state.phase = 'distractor';
      state.lastEncodingStatus = 'All word judgments are complete.';
    }

    saveState();
    renderAll();
    if (state.phase === 'distractor') {
      focusPanel(elements.distractorHeading);
    }
  }

  function expectedEncodingAnswer(trial) {
    if (trial.condition === 'appearance') {
      return trial.uppercase;
    }
    if (trial.condition === 'sound') {
      return trial.rhymeAnswer;
    }
    return trial.meaningAnswer;
  }

  function recordDistractorResponse(answer) {
    if (state.phase !== 'distractor') {
      return;
    }

    const number = distractorNumbers[state.distractorIndex];
    const expected = number % 2 === 0 ? 'even' : 'odd';
    state.distractorResponses.push({ number: number, answer: answer, correct: answer === expected });
    state.distractorIndex += 1;
    state.lastDistractorStatus = `Classification recorded. ${distractorNumbers.length - state.distractorIndex} number${distractorNumbers.length - state.distractorIndex === 1 ? '' : 's'} remain.`;

    if (state.distractorIndex >= distractorNumbers.length) {
      state.phase = 'recognition';
      state.lastDistractorStatus = 'Interruption complete. Begin the recognition test.';
    }

    saveState();
    renderAll();
    if (state.phase === 'recognition') {
      focusPanel(elements.recognitionHeading);
    }
  }

  function recordRecognitionResponse(oldResponse) {
    if (state.phase !== 'recognition') {
      return;
    }

    const trial = state.recognitionTrials[state.recognitionIndex];
    state.recognitionResponses.push({
      id: trial.id,
      word: trial.word,
      old: trial.old,
      condition: trial.condition,
      oldResponse: oldResponse
    });
    state.recognitionLog.push(`Recognition item ${state.recognitionIndex + 1}: you responded ${oldResponse ? 'old' : 'new'}.`);
    state.recognitionIndex += 1;
    state.lastRecognitionStatus = `Response recorded. ${state.recognitionTrials.length - state.recognitionIndex} recognition item${state.recognitionTrials.length - state.recognitionIndex === 1 ? '' : 's'} remain.`;

    if (state.recognitionIndex >= state.recognitionTrials.length) {
      state.phase = 'complete';
      state.lastRecognitionStatus = 'Recognition test complete.';
    }

    saveState();
    renderAll();
    if (state.phase === 'complete') {
      focusPanel(elements.explainHeading);
    }
  }

  function saveExplanation() {
    const response = elements.explanationResponse.value.trim();
    if (!response) {
      elements.explanationStatus.textContent = 'Write an explanation before continuing to the transfer question.';
      elements.explanationResponse.focus();
      return;
    }

    state.explanation = response;
    state.explanationCommitted = true;
    saveState();
    renderAll();
    elements.explanationStatus.textContent = 'Explanation saved in this browser session.';
    focusPanel(elements.transferHeading);
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
    elements.encodingStatus.textContent = '';
    elements.distractorStatus.textContent = '';
    elements.recognitionStatus.textContent = '';
    elements.explanationStatus.textContent = '';
    elements.transferStatus.textContent = '';
    renderAll();
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }

  function renderAll() {
    renderPrediction();
    renderEncoding();
    renderDistractor();
    renderRecognition();
    renderResults();
    renderLogs();
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
      elements.predictionStatus.textContent = 'Prediction committed and saved for this session.';
    }
  }

  function renderEncoding() {
    const visible = state.phase === 'encoding';
    elements.encodingPanel.hidden = !visible;
    elements.encodingStatus.textContent = state.lastEncodingStatus;
    elements.encodingYes.disabled = !visible;
    elements.encodingNo.disabled = !visible;

    if (!visible) {
      return;
    }

    const trial = state.encodingTrials[state.encodingIndex];
    elements.encodingCounter.textContent = `Judgment ${state.encodingIndex + 1} of ${state.encodingTrials.length}`;
    elements.encodingCondition.textContent = `${CONDITION_LABELS[trial.condition]} judgment`;
    elements.processingLabel.textContent = CONDITION_LABELS[trial.condition];
    elements.stimulusWord.textContent = displayWord(trial);
    elements.orientingQuestion.textContent = orientingQuestion(trial);
  }

  function displayWord(trial) {
    if (trial.condition === 'appearance' && trial.uppercase) {
      return trial.word.toUpperCase();
    }
    return trial.word.toLowerCase();
  }

  function orientingQuestion(trial) {
    if (trial.condition === 'appearance') {
      return 'Is this word written in uppercase letters?';
    }
    if (trial.condition === 'sound') {
      return `Does this word rhyme with “${trial.rhymeCue}”?`;
    }
    return `Would this word fit the sentence: “${trial.sentence}”`;
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

  function renderResults() {
    const complete = state.phase === 'complete';
    elements.explainPanel.hidden = !complete;
    elements.transferPanel.hidden = !(complete && state.explanationCommitted);

    if (!complete) {
      return;
    }

    const results = calculateResults();
    setResultCells('appearance', results.appearance);
    setResultCells('sound', results.sound);
    setResultCells('meaning', results.meaning);

    const predictionLabel = state.predictionChoice === 'same' ? 'about the same' : CONDITION_LABELS[state.predictionChoice].toLowerCase();
    elements.completionSummary.textContent = buildCompletionSummary(results, predictionLabel);
    elements.falseAlarmSummary.textContent = `You called ${results.falseAlarms} of ${results.lureCount} new words “old,” a false-alarm rate of ${formatPercent(results.falseAlarms / results.lureCount)}. False alarms matter because a person could appear to recognize many targets simply by answering “old” frequently.`;
    elements.explanationResponse.value = state.explanation;
    elements.transferResponse.value = state.transfer;
    elements.transferSummary.textContent = `Your original prediction was ${predictionLabel}. Your recognition rates were ${formatPercent(results.appearance.rate)} for appearance, ${formatPercent(results.sound.rate)} for sound, and ${formatPercent(results.meaning.rate)} for meaning.`;
  }

  function calculateResults() {
    const result = {
      appearance: { hits: 0, total: 0, rate: 0 },
      sound: { hits: 0, total: 0, rate: 0 },
      meaning: { hits: 0, total: 0, rate: 0 },
      falseAlarms: 0,
      lureCount: 0
    };

    state.recognitionResponses.forEach(function (response) {
      if (response.old) {
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
    const rates = CONDITIONS.map(function (condition) {
      return { condition: condition, rate: results[condition].rate };
    });
    const highestRate = Math.max.apply(null, rates.map(function (item) { return item.rate; }));
    const leaders = rates.filter(function (item) { return item.rate === highestRate; });
    const predictionSentence = `You predicted ${predictionLabel}.`;

    if (leaders.length === 1 && leaders[0].condition === 'meaning') {
      return `${predictionSentence} In this session, meaning-based targets had the highest recognition rate. That matches the usual group-level levels-of-processing effect, but your result is still one brief demonstration rather than decisive evidence by itself.`;
    }

    return `${predictionSentence} Your short individual result did not show a uniquely highest meaning score. That can happen with only 10 targets per condition; random item differences and response choices can obscure the reliable group-level tendency for meaning-based processing to support stronger recognition.`;
  }

  function renderLogs() {
    renderLog(elements.encodingLog, state.encodingLog);
    renderLog(elements.recognitionLog, state.recognitionLog);
  }

  function renderLog(listElement, entries) {
    listElement.innerHTML = '';
    entries.forEach(function (entry) {
      const item = document.createElement('li');
      item.textContent = entry;
      listElement.appendChild(item);
    });
  }

  function formatPercent(value) {
    return `${Math.round(value * 100)}%`;
  }

  function focusPanel(element) {
    if (element && !element.closest('[hidden]')) {
      element.focus();
    }
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      // The lab remains usable if browser storage is unavailable.
    }
  }

  function restoreState() {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (!saved) {
        return;
      }
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.encodingTrials) && Array.isArray(parsed.recognitionTrials)) {
        state = parsed;
      }
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
      state = createInitialState();
    }
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
}());
