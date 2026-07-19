/* Correlation vs. Causation Classifier */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch02-correlation-causation-v3';

  const items = [
    {
      topic: 'Sleep and grades',
      headline: 'Getting eight hours of sleep raises exam scores',
      details: 'A campus survey asked students how many hours they usually slept and compared those answers with self-reported exam averages. Students were not assigned to sleep schedules.',
      supportsCausation: false,
      reversePlausible: true,
      thirdPlausible: true,
      feedback: 'The association alone cannot establish that sleep caused the score difference. Academic performance or study demands could alter sleep, and workload, health, stress, or course difficulty could influence both.',
      strengthen: 'Randomly assign a feasible sleep-support intervention, verify sleep objectively, use the same exam task, and track attrition in each condition.'
    },
    {
      topic: 'Social media and mood',
      headline: 'More social media use causes higher depression scores in first-year students',
      details: 'Researchers measured daily social media time and depression questionnaire scores at the same point in the semester. No variable was manipulated.',
      supportsCausation: false,
      reversePlausible: true,
      thirdPlausible: true,
      feedback: 'Depressed mood could change social media use, and loneliness, stress, sleep loss, or social support could affect both variables. Both concerns remain plausible.',
      strengthen: 'Measure both variables repeatedly over time and test a randomized reduction or platform-use intervention with appropriate safeguards.'
    },
    {
      topic: 'Exercise and memory',
      headline: 'Brief aerobic exercise improves memory for new vocabulary words',
      details: 'Participants were randomly assigned to 20 minutes of brisk walking or 20 minutes of quiet sitting before studying a vocabulary list. Both groups took the same memory test later.',
      supportsCausation: true,
      reversePlausible: false,
      thirdPlausible: false,
      feedback: 'The assigned exercise occurred before the memory test, so later memory could not cause the earlier condition. Random assignment makes systematic preexisting third-variable differences unlikely, assuming the study was otherwise well conducted.',
      strengthen: 'Replicate with a larger sample, verify that the activity manipulation worked, and test whether the result generalizes to other memory tasks.'
    },
    {
      topic: 'Childhood reading',
      headline: 'Owning more books during childhood causes stronger adult literacy',
      details: 'Adults estimated how many books were in their childhood homes and completed a literacy assessment. Family income and parent education were measured but not manipulated.',
      supportsCausation: false,
      reversePlausible: false,
      thirdPlausible: true,
      feedback: 'Adult literacy cannot travel backward in time to change childhood book ownership, so reverse causation is not the main concern here. Family resources, school quality, language exposure, and other third variables remain plausible.',
      strengthen: 'Use prospective records, measure likely confounds before the outcome, and compare results with interventions that increase children\'s access to books and reading.'
    },
    {
      topic: 'Phones and anxiety',
      headline: 'Visible phone notifications increase anxiety during homework',
      details: 'Students completed homework in a lab. They were randomly assigned either to keep phones visible with notifications on or to place phones in another room with notifications off. Anxiety ratings were collected afterward.',
      supportsCausation: true,
      reversePlausible: false,
      thirdPlausible: false,
      feedback: 'Phone condition was assigned before anxiety was measured. Random assignment makes systematic preexisting group differences unlikely, so the design supports a causal claim about this task and setting.',
      strengthen: 'Add a condition separating phone visibility from notification sound, verify assignment compliance, and include a behavioral or physiological anxiety measure.'
    },
    {
      topic: 'Caffeine and alertness',
      headline: 'Drinking more coffee increases alertness in morning classes',
      details: 'Students completed a morning survey about coffee intake and alertness. The study did not assign caffeine doses or control sleep duration.',
      supportsCausation: false,
      reversePlausible: true,
      thirdPlausible: true,
      feedback: 'Sleepy students may choose more coffee, and sleep quality, tolerance, workload, or morning schedules could affect both intake and alertness. Both concerns remain.',
      strengthen: 'Randomly assign masked caffeine doses when safe, include a placebo comparison, and measure prior sleep and baseline alertness.'
    },
    {
      topic: 'Attendance and exams',
      headline: 'Class attendance causes higher exam scores',
      details: 'An instructor compared attendance records with final exam scores. Students chose whether to attend each class, and the final exam occurred after the attendance period.',
      supportsCausation: false,
      reversePlausible: false,
      thirdPlausible: true,
      feedback: 'The time order makes final exam performance an implausible cause of earlier attendance. Motivation, prior knowledge, work schedules, illness, or transportation could still influence both attendance and scores.',
      strengthen: 'Measure important baseline differences and evaluate a plausibly exogenous attendance-support intervention, such as randomly assigned reminders or course-section policies.'
    },
    {
      topic: 'Music and studying',
      headline: 'Instrumental music reduces distraction while reading',
      details: 'Participants were randomly assigned to read passages in silence, with instrumental music, or with lyrical music. Distraction ratings and comprehension scores were measured afterward.',
      supportsCausation: true,
      reversePlausible: false,
      thirdPlausible: false,
      feedback: 'Assigned sound condition preceded the outcomes, and random assignment makes systematic preexisting differences unlikely. The design can test a causal claim within these conditions.',
      strengthen: 'Measure baseline music preference, standardize volume, add objective reading behavior, and replicate with different texts and settings.'
    },
    {
      topic: 'Anxiety and sleep',
      headline: 'Poor sleep causes more next-day anxiety in college students',
      details: 'Students wore sleep trackers for a week and completed anxiety ratings each morning. Shorter sleep was associated with higher next-day anxiety, but neither variable was assigned.',
      supportsCausation: false,
      reversePlausible: true,
      thirdPlausible: true,
      feedback: 'The next-day timing helps, but prior anxiety could already be disrupting sleep, creating a feedback loop. Stress, deadlines, illness, or substance use could also affect both.',
      strengthen: 'Collect longer time series with evening anxiety measures and test a randomized sleep intervention while tracking major daily stressors.'
    },
    {
      topic: 'Mindfulness and attention',
      headline: 'Using a mindfulness app improves attention in lecture',
      details: 'Students chose whether to use a mindfulness app during the semester. At the end, app users scored higher on an attention task given after lecture.',
      supportsCausation: false,
      reversePlausible: true,
      thirdPlausible: true,
      feedback: 'Students with stronger attention or self-regulation may be more likely to persist with an app, and motivation, conscientiousness, or stress-management habits could influence both use and attention.',
      strengthen: 'Randomly assign app access or an active comparison, measure actual use and baseline attention, and report dropout by condition.'
    }
  ];

  const state = {
    currentIndex: 0,
    responses: [],
    explainResponse: '',
    transferResponse: ''
  };

  const elements = {};

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();

    if (allItemsAnswered()) {
      showSummary();
    } else {
      state.currentIndex = Math.min(Math.max(state.currentIndex, 0), items.length - 1);
      renderCurrentItem();
    }
  }

  function cacheElements() {
    elements.itemCounter = document.getElementById('item-counter');
    elements.progressStatus = document.getElementById('progress-status');
    elements.itemTopic = document.getElementById('item-topic');
    elements.headlineText = document.getElementById('headline-text');
    elements.form = document.getElementById('lab-form');
    elements.commitPrediction = document.getElementById('commit-prediction');
    elements.observePanel = document.getElementById('observe-panel');
    elements.studyDetails = document.getElementById('study-details');
    elements.strengthening = document.getElementById('design-strengthening');
    elements.checkAnswer = document.getElementById('check-answer');
    elements.feedbackPanel = document.getElementById('feedback-panel');
    elements.feedbackHeading = document.getElementById('feedback-heading');
    elements.feedbackText = document.getElementById('feedback-text');
    elements.modelExplanation = document.getElementById('model-explanation');
    elements.strengtheningExample = document.getElementById('strengthening-example');
    elements.nextItem = document.getElementById('next-item');
    elements.summaryPanel = document.getElementById('summary-panel');
    elements.summaryScore = document.getElementById('summary-score');
    elements.summaryConcept = document.getElementById('summary-concept');
    elements.summaryTableBody = document.getElementById('summary-table-body');
    elements.explainResponse = document.getElementById('explain-response');
    elements.saveExplain = document.getElementById('save-explain');
    elements.explainStatus = document.getElementById('explain-status');
    elements.transferPanel = document.getElementById('transfer-panel');
    elements.transferResponse = document.getElementById('transfer-response');
    elements.saveTransfer = document.getElementById('save-transfer');
    elements.restartLab = document.getElementById('restart-lab');
    elements.transferStatus = document.getElementById('transfer-status');
  }

  function bindEvents() {
    elements.commitPrediction.addEventListener('click', commitPrediction);
    elements.checkAnswer.addEventListener('click', checkAnswer);
    elements.nextItem.addEventListener('click', goToNextItem);
    elements.saveExplain.addEventListener('click', saveExplainResponse);
    elements.saveTransfer.addEventListener('click', saveTransferResponse);
    elements.restartLab.addEventListener('click', restartLab);
  }

  function renderCurrentItem() {
    const item = items[state.currentIndex];
    const existingResponse = state.responses[state.currentIndex];

    document.getElementById('classifier-item').hidden = false;
    elements.summaryPanel.hidden = true;
    elements.itemCounter.textContent = `Item ${state.currentIndex + 1} of ${items.length}`;
    elements.progressStatus.textContent = existingResponse ? 'Completed' : 'Prediction not yet committed';
    elements.itemTopic.textContent = item.topic;
    elements.headlineText.textContent = item.headline;
    elements.studyDetails.textContent = item.details;
    elements.form.reset();
    elements.strengthening.value = '';
    elements.observePanel.hidden = true;
    elements.feedbackPanel.hidden = true;
    elements.feedbackPanel.classList.remove('is-correct', 'is-incorrect');
    elements.commitPrediction.disabled = false;
    elements.checkAnswer.disabled = false;
    setPredictionControlsDisabled(false);
    setJudgmentControlsDisabled(false);

    if (existingResponse && existingResponse.causalSupport) {
      restoreCompletedItem(existingResponse);
    } else if (existingResponse && existingResponse.prediction) {
      restoreCommittedPrediction(existingResponse);
    }
  }

  function commitPrediction() {
    const prediction = getCheckedValue('causalPrediction');

    if (!prediction) {
      elements.progressStatus.textContent = 'Choose a prediction before committing.';
      focusFirstInput('causalPrediction');
      return;
    }

    state.responses[state.currentIndex] = { prediction };
    saveState();
    elements.observePanel.hidden = false;
    elements.commitPrediction.disabled = true;
    setPredictionControlsDisabled(true);
    elements.progressStatus.textContent = 'Prediction committed. Study design revealed.';
    elements.observePanel.focus();
    scrollToElement(elements.observePanel);
  }

  function checkAnswer() {
    const item = items[state.currentIndex];
    const prediction = getCheckedValue('causalPrediction');
    const causalSupport = getCheckedValue('causalSupport');
    const reverseCausation = getCheckedValue('reverseCausation');
    const thirdVariable = getCheckedValue('thirdVariable');
    const strengthening = elements.strengthening.value.trim();

    if (!causalSupport) return requireJudgment('causalSupport', 'Answer whether the design supports the causal claim.');
    if (!reverseCausation) return requireJudgment('reverseCausation', 'Answer the reverse-causation question.');
    if (!thirdVariable) return requireJudgment('thirdVariable', 'Answer the third-variable question.');
    if (!strengthening) {
      elements.progressStatus.textContent = 'Describe one design change or source of evidence before checking.';
      elements.strengthening.focus();
      return;
    }

    const response = {
      prediction,
      causalSupport,
      reverseCausation,
      thirdVariable,
      strengthening,
      causalCorrect: causalSupport === yesNo(item.supportsCausation),
      reverseCorrect: reverseCausation === yesNo(item.reversePlausible),
      thirdCorrect: thirdVariable === yesNo(item.thirdPlausible)
    };

    state.responses[state.currentIndex] = response;
    saveState();
    showFeedback(item, response);
  }

  function requireJudgment(name, message) {
    elements.progressStatus.textContent = message;
    focusFirstInput(name);
  }

  function showFeedback(item, response) {
    const correctCount = [response.causalCorrect, response.reverseCorrect, response.thirdCorrect].filter(Boolean).length;
    const fullyCorrect = correctCount === 3;
    const correctJudgments = `Causal support: ${formatYesNo(item.supportsCausation)}. Reverse causation plausible: ${formatYesNo(item.reversePlausible)}. Third variable plausible: ${formatYesNo(item.thirdPlausible)}.`;

    elements.feedbackPanel.hidden = false;
    elements.feedbackPanel.classList.toggle('is-correct', fullyCorrect);
    elements.feedbackPanel.classList.toggle('is-incorrect', !fullyCorrect);
    elements.feedbackHeading.textContent = fullyCorrect ? 'Reasoning aligned' : 'Compare and revise';
    const predictionMatched = response.prediction === yesNo(item.supportsCausation);
    elements.feedbackText.textContent = `Your initial prediction ${predictionMatched ? 'matched' : 'differed from'} what the revealed design permits. That prediction was recorded for comparison, not scored. You matched ${correctCount} of 3 post-reveal judgments. ${correctJudgments}`;
    elements.modelExplanation.textContent = item.feedback;
    elements.strengtheningExample.textContent = item.strengthen;
    elements.progressStatus.textContent = 'Feedback available.';
    setJudgmentControlsDisabled(true);
    elements.checkAnswer.disabled = true;
    elements.nextItem.textContent = state.currentIndex === items.length - 1 ? 'Show summary' : 'Next headline';
    elements.feedbackPanel.focus();
  }

  function goToNextItem() {
    if (state.currentIndex >= items.length - 1) {
      showSummary();
      return;
    }

    state.currentIndex += 1;
    saveState();
    renderCurrentItem();
    document.getElementById('classifier-heading').focus();
    scrollToTop();
  }

  function showSummary() {
    const predictedSupportCount = state.responses.filter(function (response) {
      return response && response.prediction === 'yes';
    }).length;
    const judgmentCorrectCount = state.responses.reduce(function (total, response) {
      if (!response) return total;
      return total + [response.causalCorrect, response.reverseCorrect, response.thirdCorrect].filter(Boolean).length;
    }, 0);

    document.getElementById('classifier-item').hidden = true;
    elements.progressStatus.textContent = 'Lab complete.';
    elements.summaryPanel.hidden = false;
    elements.summaryScore.textContent = `Before seeing the designs, you predicted that ${predictedSupportCount} of ${items.length} headlines might have evidence supporting the causal claim. Initial predictions were not scored. You matched ${judgmentCorrectCount} of ${items.length * 3} post-reveal judgments.`;
    elements.summaryConcept.textContent = 'The design—not the headline—determines what can be inferred. Reverse causation and third variables are separate questions, and observational evidence may leave both concerns at once.';
    elements.summaryTableBody.innerHTML = '';

    items.forEach(function (item, index) {
      const response = state.responses[index] || {};
      const row = document.createElement('tr');
      row.appendChild(makeTableCell(item.headline));
      row.appendChild(makeTableCell(formatStoredChoice(response.prediction)));
      row.appendChild(makeTableCell(formatSummaryJudgment(response.causalSupport, item.supportsCausation)));
      row.appendChild(makeTableCell(formatSummaryJudgment(response.reverseCausation, item.reversePlausible)));
      row.appendChild(makeTableCell(formatSummaryJudgment(response.thirdVariable, item.thirdPlausible)));
      elements.summaryTableBody.appendChild(row);
    });

    elements.explainResponse.value = state.explainResponse || '';
    elements.transferResponse.value = state.transferResponse || '';
    elements.transferPanel.hidden = !state.explainResponse;
    elements.summaryPanel.focus();
    scrollToElement(elements.summaryPanel);
  }

  function restoreCompletedItem(response) {
    setCheckedValue('causalPrediction', response.prediction);
    setCheckedValue('causalSupport', response.causalSupport);
    setCheckedValue('reverseCausation', response.reverseCausation);
    setCheckedValue('thirdVariable', response.thirdVariable);
    elements.strengthening.value = response.strengthening || '';
    elements.observePanel.hidden = false;
    elements.commitPrediction.disabled = true;
    elements.checkAnswer.disabled = true;
    setPredictionControlsDisabled(true);
    setJudgmentControlsDisabled(true);
    showFeedback(items[state.currentIndex], response);
  }

  function restoreCommittedPrediction(response) {
    setCheckedValue('causalPrediction', response.prediction);
    elements.observePanel.hidden = false;
    elements.commitPrediction.disabled = true;
    setPredictionControlsDisabled(true);
    elements.progressStatus.textContent = 'Prediction committed. Study design revealed.';
  }

  function saveExplainResponse() {
    const value = elements.explainResponse.value.trim();

    if (!value) {
      elements.explainStatus.textContent = 'Write an explanation before continuing.';
      elements.explainResponse.focus();
      return;
    }

    state.explainResponse = value;
    saveState();
    elements.explainStatus.textContent = 'Explanation saved in this browser session.';
    elements.transferPanel.hidden = false;
    elements.transferPanel.focus();
    scrollToElement(elements.transferPanel);
  }

  function saveTransferResponse() {
    state.transferResponse = elements.transferResponse.value.trim();
    saveState();
    elements.transferStatus.textContent = state.transferResponse ? 'Transfer response saved in this browser session.' : 'Transfer response cleared.';
  }

  function restartLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state.currentIndex = 0;
    state.responses = [];
    state.explainResponse = '';
    state.transferResponse = '';
    elements.explainStatus.textContent = '';
    elements.transferStatus.textContent = '';
    elements.transferPanel.hidden = true;
    renderCurrentItem();
    document.getElementById('classifier-heading').focus();
    scrollToTop();
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      elements.progressStatus.textContent = 'Progress is available on this page but could not be saved for refresh.';
    }
  }

  function restoreState() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      const saved = raw ? JSON.parse(raw) : null;

      if (saved && Array.isArray(saved.responses)) {
        state.currentIndex = Number.isInteger(saved.currentIndex) ? saved.currentIndex : 0;
        state.responses = saved.responses.slice(0, items.length);
        state.explainResponse = typeof saved.explainResponse === 'string' ? saved.explainResponse : '';
        state.transferResponse = typeof saved.transferResponse === 'string' ? saved.transferResponse : '';
      }
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  function getCheckedValue(name) {
    const checked = elements.form.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : '';
  }

  function allItemsAnswered() {
    return items.every(function (_item, index) {
      return Boolean(state.responses[index] && state.responses[index].causalSupport);
    });
  }

  function setCheckedValue(name, value) {
    const input = elements.form.querySelector(`input[name="${name}"][value="${value}"]`);
    if (input) input.checked = true;
  }

  function setPredictionControlsDisabled(disabled) {
    elements.form.querySelectorAll('input[name="causalPrediction"]').forEach(function (input) {
      input.disabled = disabled;
    });
  }

  function setJudgmentControlsDisabled(disabled) {
    ['causalSupport', 'reverseCausation', 'thirdVariable'].forEach(function (name) {
      elements.form.querySelectorAll(`input[name="${name}"]`).forEach(function (input) {
        input.disabled = disabled;
      });
    });
    elements.strengthening.disabled = disabled;
  }

  function focusFirstInput(name) {
    const input = elements.form.querySelector(`input[name="${name}"]`);
    if (input) input.focus();
  }

  function makeTableCell(value) {
    const cell = document.createElement('td');
    cell.textContent = value;
    return cell;
  }

  function yesNo(value) {
    return value ? 'yes' : 'no';
  }

  function formatYesNo(value) {
    return value ? 'Yes' : 'No';
  }

  function formatStoredChoice(value) {
    if (value === 'yes') return 'Yes';
    if (value === 'no') return 'No';
    return 'Not answered';
  }

  function formatSummaryJudgment(value, correctValue) {
    if (!value) return 'Not answered';
    return `${formatStoredChoice(value)} — ${value === yesNo(correctValue) ? 'matched' : `compare with ${formatYesNo(correctValue)}`}`;
  }

  function preferredScrollBehavior() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  }

  function scrollToElement(element) {
    element.scrollIntoView({ behavior: preferredScrollBehavior(), block: 'start' });
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: preferredScrollBehavior() });
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
})();
