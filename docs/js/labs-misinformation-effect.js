/* Misinformation Effect Learning Lab */

(function () {
  'use strict';

  var STORAGE_KEY = 'psych101-lab-ch08-misinformation-effect-v1';

  var REVIEW_QUESTIONS = [
    { id: 'q1', text: 'Where in the library was Mia working when this happened?', misleading: false },
    { id: 'q2', text: 'Did the person in the red jacket pause before taking the bag?', misleading: true },
    { id: 'q3', text: 'What was Mia doing at the table just before she got up?', misleading: false },
    { id: 'q4', text: "Did anyone other than the person with long hair look at Mia's table while she was away?", misleading: true },
    { id: 'q5', text: 'About how long was Mia gone before returning to her table?', misleading: false },
    { id: 'q6', text: 'After picking up the green bag, did the person look toward the exit before moving?', misleading: true },
    { id: 'q7', text: 'When the person ran toward the exit, was there any reaction from other students nearby?', misleading: true }
  ];

  var MEMORY_QUESTIONS = [
    {
      id: 'jacket',
      question: 'What color was the jacket the person was wearing?',
      options: [
        { value: 'red', text: 'Red', misinfo: true },
        { value: 'blue', text: 'Blue', correct: true },
        { value: 'green', text: 'Green' },
        { value: 'black', text: 'Black' }
      ],
      actualDetail: 'Blue jacket',
      suggestedDetail: 'Red jacket'
    },
    {
      id: 'hair',
      question: "How would you describe the person's hair?",
      options: [
        { value: 'curly', text: 'Curly' },
        { value: 'short', text: 'Short', correct: true },
        { value: 'long', text: 'Long', misinfo: true },
        { value: 'shaved', text: 'Shaved closely' }
      ],
      actualDetail: 'Short hair',
      suggestedDetail: 'Long hair'
    },
    {
      id: 'bag',
      question: "What color was Mia's laptop bag?",
      options: [
        { value: 'black', text: 'Black' },
        { value: 'brown', text: 'Brown', correct: true },
        { value: 'gray', text: 'Gray' },
        { value: 'green', text: 'Green', misinfo: true }
      ],
      actualDetail: 'Brown bag',
      suggestedDetail: 'Green bag'
    },
    {
      id: 'exit',
      question: 'How did the person leave the library?',
      options: [
        { value: 'ran', text: 'Ran toward the exit', misinfo: true },
        { value: 'slow', text: 'Moved slowly, seeming uncertain' },
        { value: 'calm', text: 'Walked calmly toward the exit', correct: true },
        { value: 'side', text: 'Used a side door to exit' }
      ],
      actualDetail: 'Walked calmly',
      suggestedDetail: 'Ran toward the exit'
    }
  ];

  var DISTRACTOR_NUMBERS = [43, 68, 27, 51, 34, 19];

  var state = createInitialState();
  var interactionLocked = false;
  var el = {};

  function createInitialState() {
    return {
      committed: false,
      predictionAccuracy: '',
      predictionReason: '',
      phase: 'prediction',
      distractorIndex: 0,
      questionIndex: 0,
      questionAnswers: {},
      memoryIndex: 0,
      memoryAnswers: {},
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
    el.predictionAccuracy = Array.from(document.querySelectorAll('input[name="prediction-accuracy"]'));
    el.predictionReason = document.getElementById('prediction-reason');
    el.commitPrediction = document.getElementById('commit-prediction');
    el.predictionStatus = document.getElementById('prediction-status');

    el.eventPanel = document.getElementById('event-panel');
    el.eventRead = document.getElementById('event-read');

    el.distractorPanel = document.getElementById('distractor-panel');
    el.distractorCounter = document.getElementById('distractor-counter');
    el.distractorNumber = document.getElementById('distractor-number');
    el.distractorOdd = document.getElementById('distractor-odd');
    el.distractorEven = document.getElementById('distractor-even');
    el.distractorStatus = document.getElementById('distractor-status');

    el.questionsPanel = document.getElementById('questions-panel');
    el.questionsCounter = document.getElementById('questions-counter');
    el.questionText = document.getElementById('question-text');
    el.questionAnswer = document.getElementById('question-answer');
    el.nextQuestion = document.getElementById('next-question');
    el.questionsStatus = document.getElementById('questions-status');

    el.memoryPanel = document.getElementById('memory-panel');
    el.memoryCounter = document.getElementById('memory-counter');
    el.memoryQuestion = document.getElementById('memory-question');
    el.memoryChoices = document.getElementById('memory-choices');
    el.submitMemory = document.getElementById('submit-memory');
    el.memoryStatus = document.getElementById('memory-status');

    el.resultsPanel = document.getElementById('results-panel');
    el.resultsSummary = document.getElementById('results-summary');
    el.resultsTableBody = document.getElementById('results-table-body');
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
    el.eventRead.addEventListener('click', markEventRead);
    el.distractorOdd.addEventListener('click', completeDistractorItem);
    el.distractorEven.addEventListener('click', completeDistractorItem);
    el.nextQuestion.addEventListener('click', submitQuestion);
    el.submitMemory.addEventListener('click', submitMemoryAnswer);
    el.saveExplanation.addEventListener('click', saveExplanation);
    el.saveTransfer.addEventListener('click', saveTransfer);
    el.restartLab.addEventListener('click', restartLab);
  }

  function commitPrediction() {
    var selected = el.predictionAccuracy.find(function (r) { return r.checked; });
    var reason = el.predictionReason.value.trim();

    if (!selected) {
      el.predictionStatus.textContent = 'Choose a prediction before continuing.';
      el.predictionAccuracy[0].focus();
      return;
    }
    if (!reason) {
      el.predictionStatus.textContent = 'Write your reasoning before continuing.';
      el.predictionReason.focus();
      return;
    }

    state.committed = true;
    state.predictionAccuracy = selected.value;
    state.predictionReason = reason;
    state.phase = 'event';
    saveState();
    renderAll();
    focusHeading('event-heading');
  }

  function markEventRead() {
    if (state.phase !== 'event' || !beginInteraction()) {
      return;
    }
    state.phase = 'distractor';
    state.distractorIndex = 0;
    state.lastStatus = '';
    saveState();
    renderAll();
    focusHeading('distractor-heading');
  }

  function completeDistractorItem() {
    if (state.phase !== 'distractor' || !beginInteraction()) {
      return;
    }
    state.distractorIndex += 1;
    state.lastStatus = 'Number ' + state.distractorIndex + ' classified.';

    if (state.distractorIndex >= DISTRACTOR_NUMBERS.length) {
      state.phase = 'questions';
      state.questionIndex = 0;
      state.lastStatus = '';
    }

    saveState();
    renderAll();

    if (state.phase === 'questions') {
      focusHeading('questions-heading');
    }
  }

  function submitQuestion() {
    if (state.phase !== 'questions' || !beginInteraction()) {
      return;
    }
    var q = REVIEW_QUESTIONS[state.questionIndex];
    var answer = el.questionAnswer.value.trim();
    var wordCount = answer.split(/\s+/).filter(Boolean).length;

    if (wordCount < 3) {
      el.questionsStatus.textContent = 'Write at least three words before continuing.';
      el.questionAnswer.focus();
      return;
    }

    state.questionAnswers[q.id] = answer;
    state.questionIndex += 1;
    state.lastStatus = 'Response ' + state.questionIndex + ' saved.';

    if (state.questionIndex >= REVIEW_QUESTIONS.length) {
      state.phase = 'memory-test';
      state.memoryIndex = 0;
      state.lastStatus = '';
    }

    saveState();
    renderAll();

    if (state.phase === 'memory-test') {
      focusHeading('memory-heading');
    } else {
      el.questionAnswer.focus();
    }
  }

  function submitMemoryAnswer() {
    if (state.phase !== 'memory-test' || !beginInteraction()) {
      return;
    }
    var choices = Array.from(el.memoryChoices.querySelectorAll('input[type="radio"]'));
    var selected = choices.find(function (r) { return r.checked; });

    if (!selected) {
      el.memoryStatus.textContent = 'Choose an answer before continuing.';
      return;
    }

    var q = MEMORY_QUESTIONS[state.memoryIndex];
    state.memoryAnswers[q.id] = selected.value;
    state.memoryIndex += 1;
    state.lastStatus = 'Answer ' + state.memoryIndex + ' recorded.';

    if (state.memoryIndex >= MEMORY_QUESTIONS.length) {
      state.phase = 'results';
      state.lastStatus = '';
    }

    saveState();
    renderAll();

    if (state.phase === 'results') {
      focusHeading('results-heading');
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
    el.predictionStatus.textContent = '';
    el.explanationStatus.textContent = '';
    el.transferStatus.textContent = '';
    renderAll();
    el.predictionAccuracy[0].focus();
    window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }

  function renderAll() {
    renderPrediction();
    renderEvent();
    renderDistractor();
    renderQuestions();
    renderMemoryTest();
    renderResults();
    renderTransfer();
  }

  function renderPrediction() {
    el.predictionAccuracy.forEach(function (r) {
      r.checked = r.value === state.predictionAccuracy;
      r.disabled = state.committed;
    });
    el.predictionReason.value = state.predictionReason;
    el.predictionReason.disabled = state.committed;
    el.commitPrediction.disabled = state.committed;
    if (state.committed) {
      el.predictionStatus.textContent = 'Prediction committed and saved for this browser session.';
    }
  }

  function renderEvent() {
    el.eventPanel.hidden = state.phase !== 'event';
    el.eventRead.disabled = state.phase !== 'event' || interactionLocked;
  }

  function renderDistractor() {
    var visible = state.phase === 'distractor';
    el.distractorPanel.hidden = !visible;
    el.distractorOdd.disabled = !visible || interactionLocked;
    el.distractorEven.disabled = !visible || interactionLocked;
    el.distractorStatus.textContent = visible ? state.lastStatus : '';
    if (!visible) {
      return;
    }
    el.distractorCounter.textContent = 'Number ' + (state.distractorIndex + 1) + ' of ' + DISTRACTOR_NUMBERS.length;
    el.distractorNumber.textContent = String(DISTRACTOR_NUMBERS[state.distractorIndex]);
  }

  function renderQuestions() {
    var visible = state.phase === 'questions';
    el.questionsPanel.hidden = !visible;
    el.nextQuestion.disabled = !visible || interactionLocked;
    el.questionsStatus.textContent = visible ? state.lastStatus : '';
    if (!visible) {
      return;
    }
    var q = REVIEW_QUESTIONS[state.questionIndex];
    el.questionsCounter.textContent = 'Question ' + (state.questionIndex + 1) + ' of ' + REVIEW_QUESTIONS.length;
    el.questionText.textContent = q.text;
    el.questionAnswer.value = state.questionAnswers[q.id] || '';
    el.nextQuestion.textContent = state.questionIndex === REVIEW_QUESTIONS.length - 1
      ? 'Submit final answer'
      : 'Next question';
  }

  function renderMemoryTest() {
    var visible = state.phase === 'memory-test';
    el.memoryPanel.hidden = !visible;
    el.submitMemory.disabled = !visible || interactionLocked;
    el.memoryStatus.textContent = visible ? state.lastStatus : '';
    if (!visible) {
      return;
    }
    var q = MEMORY_QUESTIONS[state.memoryIndex];
    el.memoryCounter.textContent = 'Question ' + (state.memoryIndex + 1) + ' of ' + MEMORY_QUESTIONS.length;
    el.memoryQuestion.textContent = q.question;

    el.memoryChoices.innerHTML = '';
    q.options.forEach(function (opt) {
      var label = document.createElement('label');
      label.className = 'option-row';
      var radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'memory-choice';
      radio.value = opt.value;
      label.appendChild(radio);
      label.appendChild(document.createTextNode(' ' + opt.text));
      el.memoryChoices.appendChild(label);
    });
  }

  function renderResults() {
    var visible = state.phase === 'results';
    el.resultsPanel.hidden = !visible;
    if (!visible) {
      return;
    }

    var correct = 0;
    var misinformed = 0;

    el.resultsTableBody.innerHTML = '';
    MEMORY_QUESTIONS.forEach(function (q) {
      var answer = state.memoryAnswers[q.id];
      var correctOpt = q.options.find(function (o) { return o.correct; });
      var misinfoOpt = q.options.find(function (o) { return o.misinfo; });
      var answerOpt = q.options.find(function (o) { return o.value === answer; });
      var answerText = answerOpt ? answerOpt.text : (answer || '—');

      var isCorrect = correctOpt && answer === correctOpt.value;
      var isMisinfo = misinfoOpt && answer === misinfoOpt.value;

      if (isCorrect) {
        correct += 1;
      }
      if (isMisinfo) {
        misinformed += 1;
      }

      var outcome = isCorrect ? 'Matches original' : (isMisinfo ? 'Matches suggestion' : 'Other response');

      var tr = document.createElement('tr');
      var thDetail = document.createElement('th');
      thDetail.scope = 'row';
      thDetail.textContent = q.id.charAt(0).toUpperCase() + q.id.slice(1);
      var tdOriginal = document.createElement('td');
      tdOriginal.textContent = q.actualDetail;
      var tdSuggested = document.createElement('td');
      tdSuggested.textContent = q.suggestedDetail;
      var tdAnswer = document.createElement('td');
      tdAnswer.textContent = answerText;
      var tdOutcome = document.createElement('td');
      tdOutcome.textContent = outcome;

      tr.appendChild(thDetail);
      tr.appendChild(tdOriginal);
      tr.appendChild(tdSuggested);
      tr.appendChild(tdAnswer);
      tr.appendChild(tdOutcome);
      el.resultsTableBody.appendChild(tr);
    });

    var correctPhrase = correct === 1 ? '1 of 4 questions' : correct + ' of 4 questions';
    var misinfoPhrase = misinformed === 1 ? '1 of 4 with a detail' : misinformed + ' of 4 with a detail';

    if (misinformed === 0) {
      el.resultsSummary.textContent = 'You answered ' + correctPhrase + ' with the detail from the original scene. None of your answers matched a misinformation suggestion — though the effect is variable, and some people show it more than others.';
    } else {
      el.resultsSummary.textContent = 'You answered ' + correctPhrase + ' with the detail from the original scene, and ' + misinfoPhrase + ' implied only by a follow-up question, not present in the original scene.';
    }

    el.explanationResponse.value = state.explanation;
    el.saveExplanation.disabled = state.explanationCommitted;
    if (state.explanationCommitted) {
      el.explanationStatus.textContent = 'Explanation saved in this browser session.';
    }
  }

  function renderTransfer() {
    var visible = state.phase === 'results' && state.explanationCommitted;
    el.transferPanel.hidden = !visible;
    if (!visible) {
      return;
    }

    var correct = MEMORY_QUESTIONS.filter(function (q) {
      var correctOpt = q.options.find(function (o) { return o.correct; });
      return correctOpt && state.memoryAnswers[q.id] === correctOpt.value;
    }).length;

    var misinformed = MEMORY_QUESTIONS.filter(function (q) {
      var misinfoOpt = q.options.find(function (o) { return o.misinfo; });
      return misinfoOpt && state.memoryAnswers[q.id] === misinfoOpt.value;
    }).length;

    var summary = 'Completion summary: you correctly recalled ' + correct + ' of 4 original details';
    if (misinformed === 0) {
      summary += '. None of your memory-test answers matched a misinformation suggestion.';
    } else {
      summary += ', and ' + misinformed + ' of your answers matched details that were only implied in the follow-up questions.';
    }
    el.completionSummary.textContent = summary;
    el.transferResponse.value = state.transfer;
  }

  function saveState() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function restoreState() {
    var saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return;
    }
    try {
      var restored = JSON.parse(saved);
      if (isValidState(restored)) {
        state = restored;
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  function isValidState(candidate) {
    return candidate &&
      typeof candidate.phase === 'string' &&
      typeof candidate.committed === 'boolean' &&
      typeof candidate.questionIndex === 'number' &&
      typeof candidate.memoryIndex === 'number' &&
      candidate.questionAnswers && typeof candidate.questionAnswers === 'object' &&
      candidate.memoryAnswers && typeof candidate.memoryAnswers === 'object';
  }

  function focusHeading(id) {
    var heading = document.getElementById(id);
    if (heading) {
      heading.focus();
      heading.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function beginInteraction() {
    if (interactionLocked) {
      return false;
    }
    interactionLocked = true;
    window.setTimeout(function () {
      interactionLocked = false;
      renderAll();
    }, 300);
    return true;
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
}());
