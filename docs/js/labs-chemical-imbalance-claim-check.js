/* Chemical Imbalance Claim-Check */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch03-chemical-imbalance-claim-check';

  const classificationLabels = {
    supported: 'Supported',
    overstated: 'Overstated',
    'wrong-incomplete': 'Wrong / incomplete'
  };

  const predictionLabels = {
    medication: 'Medication efficacy claims',
    serotonin: 'Serotonin claims',
    'brain-chemistry': 'General brain-chemistry claims'
  };

  const claims = [
    {
      topic: 'Medication efficacy',
      claim: 'SSRIs can reduce depressive symptoms for some people.',
      correct: 'supported',
      feedback: 'This can be true without proving that depression is caused by a simple serotonin deficiency.',
      tempting: 'It is tempting to turn a treatment effect into a cause, but those are different claims.'
    },
    {
      topic: 'Serotonin',
      claim: 'Depression is caused by low serotonin.',
      correct: 'wrong-incomplete',
      feedback: 'The simple low-serotonin theory is not well supported as a general explanation of depression.',
      tempting: 'The claim sounds familiar because serotonin is involved in many medication discussions.'
    },
    {
      topic: 'Serotonin',
      claim: 'Serotonin signaling can affect mood and behavior.',
      correct: 'supported',
      feedback: '"Can affect" is defensible; "is the single cause" is not.',
      tempting: 'A careful verb like "can affect" matters because it does not claim a complete explanation.'
    },
    {
      topic: 'Medication and cause',
      claim: 'If a medication helps, that proves the disorder was caused by whatever the medication changes.',
      correct: 'wrong-incomplete',
      feedback: 'A treatment effect does not automatically reveal the original cause.',
      tempting: 'This feels logical because treatments change symptoms, but symptom change is not the same as cause discovery.'
    },
    {
      topic: 'Brain chemistry',
      claim: 'Brain chemistry matters for depression.',
      correct: 'supported',
      feedback: 'The correction is against simple one-chemical causation, not against biology.',
      tempting: 'Rejecting an oversimplified story should not turn into rejecting biology.'
    },
    {
      topic: 'Chemical imbalance',
      claim: 'Chemical imbalance is a complete explanation for depression.',
      correct: 'overstated',
      feedback: 'It hides circuits, development, cognition, stress, social context, and individual differences.',
      tempting: 'The phrase is memorable, but memorable explanations can leave out important mechanisms.'
    },
    {
      topic: 'Medication context',
      claim: 'Medication effects depend on receptors, circuits, time course, prior state, and person-level differences.',
      correct: 'supported',
      feedback: 'This is the better Chapter 3 principle: chemistry acts in context.',
      tempting: 'The list may sound complicated, but the complexity is part of the point.'
    },
    {
      topic: 'SSRI time course',
      claim: 'SSRIs work by immediately making people happy.',
      correct: 'wrong-incomplete',
      feedback: 'Acute synaptic effects and clinical improvement over time are not the same thing.',
      tempting: 'The word "immediately" is the problem because treatment effects unfold across different time scales.'
    },
    {
      topic: 'Serotonin and explanation',
      claim: 'Because serotonin is involved in depression treatment, serotonin must be the whole explanation for depression.',
      correct: 'wrong-incomplete',
      feedback: 'Involvement in treatment is not the same as being the whole cause.',
      tempting: 'Involvement can make a single-cause story feel stronger than the evidence supports.'
    },
    {
      topic: 'Better explanations',
      claim: 'A better explanation usually asks what circuit, receptor system, body state, and environment are involved.',
      correct: 'supported',
      feedback: 'This is the reasoning habit the lab is trying to build.',
      tempting: 'This wording is broad, but it is broad in the careful direction: it asks for mechanisms and context.'
    }
  ];

  const state = {
    prediction: '',
    currentIndex: 0,
    responses: [],
    transferResponse: ''
  };

  const elements = {};

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();
    renderAll();
  }

  function cacheElements() {
    elements.predictionPanel = document.getElementById('prediction-panel');
    elements.predictionForm = document.getElementById('prediction-form');
    elements.commitPrediction = document.getElementById('commit-prediction');
    elements.predictionStatus = document.getElementById('prediction-status');
    elements.claimPanel = document.getElementById('claim-panel');
    elements.itemCounter = document.getElementById('item-counter');
    elements.progressStatus = document.getElementById('progress-status');
    elements.claimTopic = document.getElementById('claim-topic');
    elements.claimText = document.getElementById('claim-text');
    elements.claimForm = document.getElementById('claim-form');
    elements.checkAnswer = document.getElementById('check-answer');
    elements.feedbackPanel = document.getElementById('feedback-panel');
    elements.feedbackHeading = document.getElementById('feedback-heading');
    elements.feedbackText = document.getElementById('feedback-text');
    elements.temptingText = document.getElementById('tempting-text');
    elements.nextItem = document.getElementById('next-item');
    elements.summaryPanel = document.getElementById('summary-panel');
    elements.summaryHeading = document.getElementById('summary-heading');
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

  function renderAll() {
    renderPrediction();

    if (!state.prediction) {
      elements.claimPanel.hidden = true;
      elements.summaryPanel.hidden = true;
      return;
    }

    if (allClaimsAnswered()) {
      showSummary();
    } else {
      elements.claimPanel.hidden = false;
      elements.summaryPanel.hidden = true;
      renderCurrentClaim();
    }
  }

  function renderPrediction() {
    setCheckedValue(elements.predictionForm, 'hardestClaim', state.prediction);
    setPredictionControlsDisabled(Boolean(state.prediction));
    elements.commitPrediction.disabled = Boolean(state.prediction);
    elements.predictionStatus.textContent = state.prediction ? `Prediction committed: ${predictionLabels[state.prediction]}.` : '';
  }

  function commitPrediction() {
    const prediction = getCheckedValue(elements.predictionForm, 'hardestClaim');

    if (!prediction) {
      elements.predictionStatus.textContent = 'Choose one prediction before continuing.';
      focusFirstInput(elements.predictionForm, 'hardestClaim');
      return;
    }

    state.prediction = prediction;
    saveState();
    renderAll();
    focusSectionHeading('claim-heading');
  }

  function renderCurrentClaim() {
    const claim = claims[state.currentIndex];
    const response = state.responses[state.currentIndex];

    elements.itemCounter.textContent = `Claim ${state.currentIndex + 1} of ${claims.length}`;
    elements.claimTopic.textContent = claim.topic;
    elements.claimText.textContent = claim.claim;
    elements.claimForm.reset();
    elements.feedbackPanel.hidden = true;
    elements.feedbackPanel.classList.remove('is-correct', 'is-incorrect');
    elements.checkAnswer.disabled = false;
    setClassificationControlsDisabled(false);

    if (response) {
      setCheckedValue(elements.claimForm, 'classification', response.choice);
      showFeedback(claim, response);
    } else {
      elements.progressStatus.textContent = 'Choose a classification.';
    }
  }

  function checkAnswer() {
    const claim = claims[state.currentIndex];
    const choice = getCheckedValue(elements.claimForm, 'classification');

    if (!choice) {
      elements.progressStatus.textContent = 'Choose Supported, Overstated, or Wrong / incomplete before checking.';
      focusFirstInput(elements.claimForm, 'classification');
      return;
    }

    state.responses[state.currentIndex] = {
      choice,
      correct: choice === claim.correct
    };
    saveState();
    renderCurrentClaim();
    elements.feedbackPanel.focus();
  }

  function showFeedback(claim, response) {
    const isCorrect = response.correct;

    elements.feedbackPanel.hidden = false;
    elements.feedbackPanel.classList.toggle('is-correct', isCorrect);
    elements.feedbackPanel.classList.toggle('is-incorrect', !isCorrect);
    elements.feedbackHeading.textContent = isCorrect ? 'Correct classification' : 'Best classification';
    elements.feedbackText.textContent = buildFeedbackText(claim, response);
    elements.temptingText.textContent = `Why the tempting answer is tempting: ${claim.tempting}`;
    elements.progressStatus.textContent = 'Feedback available.';
    elements.checkAnswer.disabled = true;
    setClassificationControlsDisabled(true);
    elements.nextItem.textContent = state.currentIndex === claims.length - 1 ? 'Show summary' : 'Next claim';
  }

  function buildFeedbackText(claim, response) {
    const correctLabel = classificationLabels[claim.correct];

    if (response.correct) {
      return `${correctLabel}: ${claim.feedback}`;
    }

    return `${correctLabel}: ${claim.feedback}`;
  }

  function goToNextItem() {
    if (state.currentIndex >= claims.length - 1) {
      showSummary();
      saveState();
      return;
    }

    state.currentIndex += 1;
    saveState();
    renderCurrentClaim();
    focusSectionHeading('claim-heading');
    scrollToTop();
  }

  function showSummary() {
    const correctCount = state.responses.filter(function (response) {
      return response && response.correct;
    }).length;

    elements.claimPanel.hidden = true;
    elements.summaryPanel.hidden = false;
    elements.summaryScore.textContent = `You classified ${correctCount} of ${claims.length} claims correctly. No grade is stored or sent anywhere.`;
    elements.summaryTableBody.innerHTML = '';

    claims.forEach(function (claim, index) {
      const response = state.responses[index] || {};
      const row = document.createElement('tr');
      row.appendChild(makeTableCell(claim.claim));
      row.appendChild(makeTableCell(classificationLabels[response.choice] || 'Not answered'));
      row.appendChild(makeTableCell(classificationLabels[claim.correct]));
      elements.summaryTableBody.appendChild(row);
    });

    elements.transferResponse.value = state.transferResponse || '';
    focusSectionHeading('summary-heading');
    elements.summaryPanel.scrollIntoView({ behavior: getScrollBehavior(), block: 'start' });
  }

  function saveTransferResponse() {
    state.transferResponse = elements.transferResponse.value.trim();
    saveState();
    elements.transferStatus.textContent = state.transferResponse ? 'Transfer response saved in this browser session.' : 'Transfer response cleared.';
  }

  function restartLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state.prediction = '';
    state.currentIndex = 0;
    state.responses = [];
    state.transferResponse = '';
    elements.transferStatus.textContent = '';
    elements.predictionForm.reset();
    elements.claimForm.reset();
    renderAll();
    focusSectionHeading('prediction-heading');
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
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));

      if (saved && Array.isArray(saved.responses)) {
        state.prediction = saved.prediction || '';
        state.currentIndex = Math.min(Number(saved.currentIndex) || 0, claims.length - 1);
        state.responses = saved.responses;
        state.transferResponse = saved.transferResponse || '';
      }
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  function allClaimsAnswered() {
    return claims.every(function (claim, index) {
      return Boolean(state.responses[index]);
    });
  }

  function getCheckedValue(form, name) {
    const checked = form.querySelector(`input[name="${name}"]:checked`);
    return checked ? checked.value : '';
  }

  function setCheckedValue(form, name, value) {
    const input = form.querySelector(`input[name="${name}"][value="${value}"]`);

    if (input) {
      input.checked = true;
    }
  }

  function setPredictionControlsDisabled(disabled) {
    elements.predictionForm.querySelectorAll('input[name="hardestClaim"]').forEach(function (input) {
      input.disabled = disabled;
    });
  }

  function setClassificationControlsDisabled(disabled) {
    elements.claimForm.querySelectorAll('input[name="classification"]').forEach(function (input) {
      input.disabled = disabled;
    });
  }

  function focusFirstInput(form, name) {
    const input = form.querySelector(`input[name="${name}"]`);

    if (input) {
      input.focus();
    }
  }

  function focusSectionHeading(id) {
    const heading = document.getElementById(id);

    if (heading) {
      heading.focus();
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  }

  function getScrollBehavior() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 'auto';
    }

    return 'smooth';
  }

  function makeTableCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
})();
