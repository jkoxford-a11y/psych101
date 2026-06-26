/* Correlation vs. Causation Classifier */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch02-correlation-causation';

  const problemLabels = {
    experiment: 'True experiment',
    correlation: 'Correlation only',
    directionality: 'Directionality problem',
    'third-variable': 'Third-variable problem',
    both: 'Directionality and third-variable problems'
  };

  const items = [
    {
      topic: 'Sleep and grades',
      headline: 'Students who sleep at least eight hours earn higher exam scores',
      details: 'A campus survey asked students how many hours they usually slept and compared those answers with self-reported exam averages. Students were not randomly assigned to sleep schedules.',
      supportsCausation: false,
      correctProblem: 'third-variable',
      feedback: 'This headline sounds causal, but the design is correlational. Study habits, work hours, health, course difficulty, or stress could influence both sleep and grades.'
    },
    {
      topic: 'Social media and mood',
      headline: 'More social media use predicts higher depression scores in first-year students',
      details: 'Researchers measured daily social media time and depression questionnaire scores at the same point in the semester. No variable was manipulated.',
      supportsCausation: false,
      correctProblem: 'both',
      feedback: 'The association could run in either direction, and third variables such as loneliness, stress, sleep loss, or social support could affect both social media use and depression scores.'
    },
    {
      topic: 'Exercise and memory',
      headline: 'Brief aerobic exercise improves memory for new vocabulary words',
      details: 'Participants were randomly assigned to 20 minutes of brisk walking or 20 minutes of quiet sitting before studying a vocabulary list. Both groups took the same memory test later.',
      supportsCausation: true,
      correctProblem: 'experiment',
      feedback: 'Random assignment and an active comparison group make this a true experiment. It can support a causal claim about this specific exercise session and memory task.'
    },
    {
      topic: 'Childhood reading',
      headline: 'Adults who owned more books as children have stronger literacy skills',
      details: 'Adults reported roughly how many books were in their homes during childhood and completed a literacy assessment. Family income and parent education were measured but not manipulated.',
      supportsCausation: false,
      correctProblem: 'third-variable',
      feedback: 'Books may matter, but this design cannot isolate them. Parent education, income, school quality, and language exposure could contribute to both book access and adult literacy.'
    },
    {
      topic: 'Phones and anxiety',
      headline: 'Phone checking increases anxiety during homework',
      details: 'Students completed homework in a lab. They were randomly assigned either to keep their phones visible with notifications on or to place phones in another room with notifications off. Anxiety ratings were collected afterward.',
      supportsCausation: true,
      correctProblem: 'experiment',
      feedback: 'Because phone access was randomly assigned, the design can support a causal claim about phone availability and short-term anxiety during this homework task.'
    },
    {
      topic: 'Caffeine and alertness',
      headline: 'Students who drink more coffee report greater alertness in morning classes',
      details: 'Students completed a morning survey about coffee intake and alertness. The study did not assign caffeine doses or control sleep duration.',
      supportsCausation: false,
      correctProblem: 'both',
      feedback: 'Coffee may increase alertness, but sleepy students may also drink more coffee. Sleep quality, morning schedules, tolerance, or workload could affect both coffee use and alertness.'
    },
    {
      topic: 'Attendance and exams',
      headline: 'Class attendance causes higher exam scores',
      details: 'An instructor compared attendance records with exam scores at the end of the term. Students chose whether to attend each class.',
      supportsCausation: false,
      correctProblem: 'third-variable',
      feedback: 'Attendance and scores are associated here, but motivation, prior knowledge, time demands, or access to transportation could influence both attendance and exam performance.'
    },
    {
      topic: 'Music and studying',
      headline: 'Listening to instrumental music reduces distraction while reading',
      details: 'Participants were randomly assigned to read passages in silence, with instrumental music, or with lyrical music. Distraction ratings and comprehension scores were measured afterward.',
      supportsCausation: true,
      correctProblem: 'experiment',
      feedback: 'This is a randomized experiment, so it can test whether the assigned sound condition caused differences in distraction or comprehension in this setting.'
    },
    {
      topic: 'Anxiety and sleep',
      headline: 'Poor sleep leads to more next-day anxiety in college students',
      details: 'Students wore sleep trackers for a week and completed anxiety ratings each morning. The study found that shorter sleep and higher next-day anxiety often occurred together.',
      supportsCausation: false,
      correctProblem: 'directionality',
      feedback: 'The timing helps, but the design still cannot rule out directionality. Anxiety could disrupt sleep before the tracker window or create a cycle in which each variable predicts the other.'
    },
    {
      topic: 'Mindfulness and attention',
      headline: 'Mindfulness app users show better attention in lecture',
      details: 'Students chose whether to use a mindfulness app during the semester. At the end, app users scored higher on an attention task given after lecture.',
      supportsCausation: false,
      correctProblem: 'third-variable',
      feedback: 'Because students self-selected into app use, the app may not be the cause. Motivation, conscientiousness, stress-management habits, or prior attention skills could explain both app use and attention scores.'
    }
  ];

  const state = {
    currentIndex: 0,
    responses: [],
    transferResponse: ''
  };

  const elements = {};

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();

    if (state.responses.length >= items.length) {
      showSummary();
    } else {
      state.currentIndex = Math.min(state.currentIndex, items.length - 1);
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
    elements.explanation = document.getElementById('student-explanation');
    elements.checkAnswer = document.getElementById('check-answer');
    elements.feedbackPanel = document.getElementById('feedback-panel');
    elements.feedbackHeading = document.getElementById('feedback-heading');
    elements.feedbackText = document.getElementById('feedback-text');
    elements.modelExplanation = document.getElementById('model-explanation');
    elements.nextItem = document.getElementById('next-item');
    elements.summaryPanel = document.getElementById('summary-panel');
    elements.summaryScore = document.getElementById('summary-score');
    elements.summaryTableBody = document.getElementById('summary-table-body');
    elements.transferResponse = document.getElementById('transfer-response');
    elements.saveTransfer = document.getElementById('save-transfer');
    elements.restartLab = document.getElementById('restart-lab');
    elements.transferStatus = document.getElementById('transfer-status');
  }

  function bindEvents() {
    elements.commitPrediction.addEventListener('click', commitPrediction);
    elements.checkAnswer.addEventListener('click', checkAnswer);
    elements.nextItem.addEventListener('click', goToNextItem);
    elements.saveTransfer.addEventListener('click', saveTransferResponse);
    elements.restartLab.addEventListener('click', restartLab);
  }

  function renderCurrentItem() {
    const item = items[state.currentIndex];
    const existingResponse = state.responses[state.currentIndex];

    elements.itemCounter.textContent = `Item ${state.currentIndex + 1} of ${items.length}`;
    elements.progressStatus.textContent = existingResponse ? 'Completed' : 'Prediction not yet committed';
    elements.itemTopic.textContent = item.topic;
    elements.headlineText.textContent = item.headline;
    elements.studyDetails.textContent = item.details;
    elements.form.reset();
    elements.explanation.value = '';
    elements.observePanel.hidden = true;
    elements.feedbackPanel.hidden = true;
    elements.feedbackPanel.classList.remove('is-correct', 'is-incorrect');
    elements.commitPrediction.disabled = false;
    elements.checkAnswer.disabled = false;
    setPredictionControlsDisabled(false);
    setProblemControlsDisabled(false);

    if (existingResponse) {
      restoreCompletedItem(existingResponse);
    }
  }

  function commitPrediction() {
    const prediction = getCheckedValue('causalPrediction');

    if (!prediction) {
      elements.progressStatus.textContent = 'Choose a prediction before committing.';
      focusFirstInput('causalPrediction');
      return;
    }

    elements.observePanel.hidden = false;
    elements.commitPrediction.disabled = true;
    setPredictionControlsDisabled(true);
    elements.progressStatus.textContent = 'Prediction committed. Study design revealed.';
    elements.observePanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function checkAnswer() {
    const item = items[state.currentIndex];
    const prediction = getCheckedValue('causalPrediction');
    const chosenProblem = getCheckedValue('problemType');
    const explanation = elements.explanation.value.trim();

    if (!chosenProblem) {
      elements.progressStatus.textContent = 'Choose a study-design classification before checking.';
      focusFirstInput('problemType');
      return;
    }

    if (!explanation) {
      elements.progressStatus.textContent = 'Write a one-sentence explanation before checking.';
      elements.explanation.focus();
      return;
    }

    const predictionMatches = prediction === (item.supportsCausation ? 'yes' : 'no');
    const problemMatches = chosenProblem === item.correctProblem;
    const response = {
      prediction,
      problem: chosenProblem,
      explanation,
      predictionCorrect: predictionMatches,
      problemCorrect: problemMatches
    };

    state.responses[state.currentIndex] = response;
    saveState();
    showFeedback(item, response);
  }

  function showFeedback(item, response) {
    const fullyCorrect = response.predictionCorrect && response.problemCorrect;

    elements.feedbackPanel.hidden = false;
    elements.feedbackPanel.classList.toggle('is-correct', fullyCorrect);
    elements.feedbackPanel.classList.toggle('is-incorrect', !fullyCorrect);
    elements.feedbackHeading.textContent = fullyCorrect ? 'Correct classification' : 'Revise the reasoning';
    elements.feedbackText.textContent = buildFeedbackText(item, response);
    elements.modelExplanation.textContent = item.feedback;
    elements.progressStatus.textContent = 'Feedback available.';
    setProblemControlsDisabled(true);
    elements.checkAnswer.disabled = true;
    elements.nextItem.textContent = state.currentIndex === items.length - 1 ? 'Show summary' : 'Next headline';
    elements.feedbackPanel.focus();
  }

  function buildFeedbackText(item, response) {
    const causalText = item.supportsCausation ? 'can support a causal claim' : 'does not support a causal claim';
    const predictionText = response.predictionCorrect ? 'Your first prediction matched the study design' : 'Your first prediction did not match the study design';
    const problemText = response.problemCorrect ? 'and your problem classification matched.' : `but the strongest classification is ${problemLabels[item.correctProblem]}.`;

    return `${predictionText}; this study ${causalText}, ${problemText}`;
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showSummary() {
    const problemCorrectCount = state.responses.filter(function (response) {
      return response && response.problemCorrect;
    }).length;
    const predictionCorrectCount = state.responses.filter(function (response) {
      return response && response.predictionCorrect;
    }).length;

    document.getElementById('classifier-item').hidden = true;
    elements.progressStatus.textContent = 'Lab complete.';
    elements.summaryPanel.hidden = false;
    elements.summaryScore.textContent = `You matched ${predictionCorrectCount} of ${items.length} initial causal predictions and ${problemCorrectCount} of ${items.length} study-design classifications.`;
    elements.summaryTableBody.innerHTML = '';

    items.forEach(function (item, index) {
      const response = state.responses[index] || {};
      const row = document.createElement('tr');
      row.appendChild(makeTableCell(item.headline));
      row.appendChild(makeTableCell(formatPrediction(response.prediction)));
      row.appendChild(makeTableCell(problemLabels[response.problem] || 'Not answered'));
      row.appendChild(makeTableCell(problemLabels[item.correctProblem]));
      elements.summaryTableBody.appendChild(row);
    });

    elements.transferResponse.value = state.transferResponse || '';
    elements.summaryPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function restoreCompletedItem(response) {
    setCheckedValue('causalPrediction', response.prediction);
    setCheckedValue('problemType', response.problem);
    elements.explanation.value = response.explanation || '';
    elements.observePanel.hidden = false;
    elements.commitPrediction.disabled = true;
    elements.checkAnswer.disabled = true;
    setPredictionControlsDisabled(true);
    setProblemControlsDisabled(true);
    showFeedback(items[state.currentIndex], response);
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
    state.transferResponse = '';
    document.getElementById('classifier-item').hidden = false;
    elements.summaryPanel.hidden = true;
    elements.transferStatus.textContent = '';
    renderCurrentItem();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));

      if (saved && Array.isArray(saved.responses)) {
        state.currentIndex = Number(saved.currentIndex) || 0;
        state.responses = saved.responses;
        state.transferResponse = saved.transferResponse || '';
      }
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  function getCheckedValue(name) {
    const checked = elements.form.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : '';
  }

  function setCheckedValue(name, value) {
    const input = elements.form.querySelector(`input[name="${name}"][value="${value}"]`);

    if (input) {
      input.checked = true;
    }
  }

  function setPredictionControlsDisabled(disabled) {
    elements.form.querySelectorAll('input[name="causalPrediction"]').forEach(function (input) {
      input.disabled = disabled;
    });
  }

  function setProblemControlsDisabled(disabled) {
    elements.form.querySelectorAll('input[name="problemType"]').forEach(function (input) {
      input.disabled = disabled;
    });
    elements.explanation.disabled = disabled;
  }

  function focusFirstInput(name) {
    const input = elements.form.querySelector(`input[name="${name}"]`);

    if (input) {
      input.focus();
    }
  }

  function makeTableCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
  }

  function formatPrediction(value) {
    if (value === 'yes') {
      return 'Supports causation';
    }

    if (value === 'no') {
      return 'Correlational or uncertain';
    }

    return 'Not answered';
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
})();
