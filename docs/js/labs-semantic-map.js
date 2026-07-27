/* Where Does It Belong? Build, Test, and Revise a Concept */

(function () {
  'use strict';

  var STORAGE_KEY = 'psych101-lab-ch09-semantic-map-v1';
  var SVG_NS = 'http://www.w3.org/2000/svg';

  var animals = [
    { id: 'robin', name: 'Robin', status: 'Bird' },
    { id: 'bat', name: 'Bat', status: 'Not a bird' },
    { id: 'penguin', name: 'Penguin', status: 'Bird' },
    { id: 'eagle', name: 'Eagle', status: 'Bird' },
    { id: 'ostrich', name: 'Ostrich', status: 'Bird' },
    { id: 'butterfly', name: 'Butterfly', status: 'Not a bird' },
    { id: 'chicken', name: 'Chicken', status: 'Bird' }
  ];

  var comparisonQuestions = [
    {
      prompt: 'Which animal is most likely to function as a bird prototype for many students?',
      options: [
        ['robin', 'Robin'],
        ['eagle', 'Eagle'],
        ['penguin', 'Penguin'],
        ['ostrich', 'Ostrich']
      ],
      evaluate: function (value) {
        if (value === 'robin') return 'keyed';
        if (value === 'eagle') return 'defensible';
        return 'revise';
      },
      feedback: 'A prototype is a representation of a typical member. For many students, a robin is more prototype-like than a penguin or ostrich, even though all are birds.',
      secondaryFeedback: 'Eagle is a defensible prototype choice for some students. Robin is the keyed example because it matches the chapter example and often captures the familiar small-bird pattern.'
    },
    {
      prompt: 'Which case most clearly shows that category membership and typicality can come apart?',
      options: [
        ['robin', 'Robin'],
        ['penguin', 'Penguin'],
        ['bat', 'Bat'],
        ['butterfly', 'Butterfly']
      ],
      correct: 'penguin',
      feedback: 'A penguin is unambiguously a bird but lacks a feature many people overweight: flight. It can therefore be a clear member and an atypical example at the same time.'
    },
    {
      prompt: 'Which case most clearly shares a salient bird-like feature without belonging to the category?',
      options: [
        ['bat', 'Bat'],
        ['eagle', 'Eagle'],
        ['penguin', 'Penguin'],
        ['chicken', 'Chicken']
      ],
      correct: 'bat',
      feedback: 'A bat flies and has wings, but it is a mammal. Sharing a conspicuous feature with a prototype does not settle category membership.'
    },
    {
      prompt: 'Which statement describes an exemplar rather than a prototype?',
      options: [
        ['generalized-image', 'A generalized image of a typical small flying bird'],
        ['specific-robin', 'A specific robin you remember seeing on a campus lawn'],
        ['feather-rule', 'The rule that every living bird has feathers'],
        ['animal-category', 'The broad category "animal"']
      ],
      correct: 'specific-robin',
      feedback: 'An exemplar is a specific remembered member. A prototype summarizes what a typical member is like.'
    }
  ];

  var transferCases = [
    {
      id: 'food-pellet',
      title: 'Food pellet',
      text: 'A rat presses a lever. A food pellet appears. Lever pressing becomes more frequent.',
      direction: 'added',
      behavior: 'increased',
      reinforcement: 'yes',
      classification: 'Positive reinforcement',
      feedback: 'The consequence increased the behavior, so it functioned as reinforcement. Because something was added, this is positive reinforcement.'
    },
    {
      id: 'seat-belt-buzzer',
      title: 'Seat-belt buzzer',
      text: 'A buzzer sounds until a driver fastens the seat belt. Fastening the belt stops the buzzer. The driver begins fastening the belt sooner on later trips.',
      direction: 'removed',
      behavior: 'increased',
      reinforcement: 'yes',
      classification: 'Negative reinforcement',
      feedback: 'Stopping the aversive buzzer increased seat-belt fastening. Removing something can reinforce behavior.'
    },
    {
      id: 'ten-dollar-reward',
      title: 'Ten-dollar homework reward',
      text: 'A parent gives a student $10 after completed homework for one week. The student\'s homework completion does not become more frequent.',
      direction: 'added',
      behavior: 'unchanged',
      reinforcement: 'no',
      classification: 'Neither reinforcement nor punishment was demonstrated',
      feedback: 'The parent intended a reward, but the behavior did not increase. A reward attempt is not automatically a reinforcer.'
    },
    {
      id: 'phone-relief',
      title: 'Phone-checking relief',
      text: 'A student feels tense while waiting for a message. Checking the phone briefly reduces the tension. Phone checking becomes more frequent.',
      direction: 'removed',
      behavior: 'increased',
      reinforcement: 'yes',
      classification: 'Negative reinforcement',
      feedback: 'Relief increased checking. The consequence need not feel like a prize; it must increase the behavior.'
    },
    {
      id: 'extra-laps',
      title: 'Extra laps',
      text: 'A coach assigns extra laps after an athlete arrives late. Late arrivals become less frequent.',
      direction: 'added',
      behavior: 'decreased',
      reinforcement: 'no',
      classification: 'Positive punishment',
      feedback: 'The consequence decreased the behavior, so it was punishment rather than reinforcement.'
    }
  ];

  var predictionLabels = {
    'rise-together': 'Yes. Typicality and category membership should mostly rise and fall together.',
    'mostly-with-exceptions': 'Mostly, but some clear members may be poor examples of the category.',
    unrelated: 'No. Typicality and category membership should be unrelated.',
    unsure: 'Unsure. I need to compare the cases first.'
  };

  var featureLabels = {
    flight: 'Ability to fly',
    feathers: 'Feathers',
    wings: 'Wings',
    eggs: 'Laying eggs',
    resemblance: 'Overall resemblance to a typical bird',
    'no-single-feature': 'No single feature is enough'
  };

  var revisionLabels = {
    keep: 'Keep my original choice',
    'more-feathers': 'Put more weight on feathers',
    'less-flight': 'Put less weight on flight',
    'separate-judgments': 'Distinguish typicality from category membership',
    'no-visible-feature': 'No single visible feature fully captures the concept'
  };

  function createInitialState() {
    return {
      version: 1,
      committed: false,
      prediction: '',
      feature: '',
      reasoning: '',
      animalIndex: 0,
      birdRatings: [],
      comparisonIndex: 0,
      comparisonResponses: [],
      comparisonFeedbackPending: false,
      revisionChoices: [],
      revisionExplanation: '',
      revisionComplete: false,
      conceptRevealed: false,
      explanation: '',
      explanationComplete: false,
      transferPrediction: '',
      transferCaseIndex: 0,
      transferResponses: [],
      transferFeedbackPending: false,
      transferMapRevealed: false,
      finalResponse: '',
      completed: false,
      notice: '',
      log: []
    };
  }

  var state = createInitialState();
  var el = {};

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();
    renderAll();
  }

  function cacheElements() {
    [
      'predictionHeading', 'predictionForm', 'predictionReasoning', 'commitPrediction', 'predictionStatus',
      'birdPanel', 'birdHeading', 'birdProgress', 'birdRatingView', 'animalName', 'membershipConfidence',
      'membershipValue', 'submitBirdRating', 'birdRatingStatus', 'birdMapView', 'birdMapLayer',
      'birdMapTable', 'comparisonView', 'comparisonProgress', 'comparisonHeading', 'comparisonForm',
      'comparisonPrompt', 'comparisonOptions', 'submitComparison', 'comparisonFeedback',
      'comparisonFeedbackHeading', 'comparisonFeedbackText', 'nextComparison', 'comparisonStatus',
      'revisionView', 'revisionHeading', 'revisionForm', 'revisionExplanation', 'saveRevision',
      'revisionStatus', 'eventList', 'conceptPanel', 'conceptHeading', 'predictionLedger',
      'conceptMapCopy', 'continueToExplain', 'explainPanel', 'explainHeading', 'explanationResponse',
      'saveExplanation', 'explanationStatus', 'explanationReminder', 'continueToTransfer',
      'transferPanel', 'transferHeading',
      'transferPredictionView', 'transferPredictionForm', 'commitTransferPrediction',
      'transferPredictionStatus', 'transferCaseView', 'transferProgress', 'transferCaseHeading',
      'transferCaseText', 'transferCaseForm', 'submitTransferCase', 'transferCaseStatus',
      'transferFeedback', 'transferFeedbackHeading', 'transferFeedbackText', 'nextTransferCase',
      'reinforcementMapView', 'reinforcementMapLayer', 'reinforcementMapTable', 'finalResponse',
      'saveTransfer', 'finishLab', 'finalResponseStatus', 'summaryPanel', 'summaryHeading',
      'completionSummary', 'summaryContent', 'restartLab'
    ].forEach(function (key) {
      var id = key.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); });
      el[key] = document.getElementById(id);
    });
  }

  function bindEvents() {
    el.commitPrediction.addEventListener('click', commitPrediction);
    el.membershipConfidence.addEventListener('input', renderMembershipValue);
    el.submitBirdRating.addEventListener('click', submitBirdRating);
    el.submitComparison.addEventListener('click', submitComparison);
    el.nextComparison.addEventListener('click', advanceComparison);
    el.revisionForm.addEventListener('change', enforceRevisionExclusivity);
    el.saveRevision.addEventListener('click', saveRevision);
    el.continueToExplain.addEventListener('click', revealExplainPhase);
    el.saveExplanation.addEventListener('click', saveExplanation);
    el.continueToTransfer.addEventListener('click', continueToTransfer);
    el.commitTransferPrediction.addEventListener('click', commitTransferPrediction);
    el.submitTransferCase.addEventListener('click', submitTransferCase);
    el.nextTransferCase.addEventListener('click', advanceTransferCase);
    el.saveTransfer.addEventListener('click', saveFinalResponse);
    el.finishLab.addEventListener('click', finishLab);
    el.restartLab.addEventListener('click', restartLab);
  }

  function commitPrediction() {
    var prediction = checkedValue('prediction');
    var feature = checkedValue('feature');
    var reasoning = el.predictionReasoning.value.trim();

    if (!prediction) return showStatus(el.predictionStatus, 'Choose a prediction before committing.', firstControl('prediction'));
    if (!feature) return showStatus(el.predictionStatus, 'Choose the feature you expect people to rely on.', firstControl('feature'));
    if (!reasoning) return showStatus(el.predictionStatus, 'Explain your prediction in one or two sentences.', el.predictionReasoning);

    state.committed = true;
    state.prediction = prediction;
    state.feature = feature;
    state.reasoning = reasoning;
    state.notice = 'Prediction committed. Your first animal is ready.';
    state.log = ['Prediction committed before any category status was revealed.'];
    saveState();
    renderAll();
    focusHeading('bird-heading');
  }

  function submitBirdRating() {
    var typicality = checkedValue('typicality');
    if (!typicality) return showStatus(el.birdRatingStatus, 'Choose a typicality rating before recording this animal.', firstControl('typicality'));

    var animal = animals[state.animalIndex];
    var rating = {
      id: animal.id,
      membership: Number(el.membershipConfidence.value),
      typicality: Number(typicality)
    };
    state.birdRatings.push(rating);
    state.animalIndex += 1;
    state.notice = 'Your judgments for ' + animal.name.toLowerCase() + ' were recorded.';
    state.log.push(animal.name + ': membership confidence ' + rating.membership + '; typicality ' + rating.typicality + ' of 5. Category status was still hidden.');
    saveState();
    clearRadioGroup('typicality');
    el.membershipConfidence.value = '50';
    renderAll();
    focusHeading(state.animalIndex < animals.length ? 'bird-heading' : 'comparison-heading');
  }

  function submitComparison() {
    var selected = checkedValue('comparisonAnswer');
    if (!selected) return showStatus(el.comparisonStatus, 'Choose one response before checking it.', firstControl('comparisonAnswer'));

    var question = comparisonQuestions[state.comparisonIndex];
    var result = question.evaluate ? question.evaluate(selected) : (selected === question.correct ? 'keyed' : 'revise');
    state.comparisonResponses.push({ choice: selected, result: result });
    state.comparisonIndex += 1;
    state.comparisonFeedbackPending = true;
    state.log.push('Comparison ' + state.comparisonIndex + ': response recorded as "' + optionLabel(question, selected) + '."');
    saveState();
    renderAll();
    el.comparisonFeedback.focus();
  }

  function advanceComparison() {
    state.comparisonFeedbackPending = false;
    saveState();
    renderAll();
    focusHeading(state.comparisonIndex < comparisonQuestions.length ? 'comparison-heading' : 'revision-heading');
  }

  function enforceRevisionExclusivity(event) {
    if (!event.target.matches('input[name="revision"]')) return;
    var boxes = Array.prototype.slice.call(document.querySelectorAll('input[name="revision"]'));
    if (event.target.value === 'keep' && event.target.checked) {
      boxes.forEach(function (box) { if (box.value !== 'keep') box.checked = false; });
    } else if (event.target.checked) {
      var keep = document.querySelector('input[name="revision"][value="keep"]');
      if (keep) keep.checked = false;
    }
  }

  function saveRevision() {
    var choices = checkedValues('revision');
    var explanation = el.revisionExplanation.value.trim();
    if (!choices.length) return showStatus(el.revisionStatus, 'Choose whether to keep or revise your original feature choice.', document.querySelector('input[name="revision"]'));
    if (!explanation) return showStatus(el.revisionStatus, 'Write one sentence explaining what the contrasting cases changed.', el.revisionExplanation);

    state.revisionChoices = choices;
    state.revisionExplanation = explanation;
    state.revisionComplete = true;
    state.notice = 'Concept revision saved.';
    state.log.push('Original feature choice revisited after the contrasting cases.');
    saveState();
    renderAll();
    focusHeading('concept-heading');
  }

  function revealExplainPhase() {
    state.conceptRevealed = true;
    saveState();
    renderAll();
    focusHeading('explain-heading');
  }

  function saveExplanation() {
    var response = el.explanationResponse.value.trim();
    if (nonWhitespaceLength(response) < 60) {
      return showStatus(el.explanationStatus, 'Write at least 60 non-whitespace characters before saving.', el.explanationResponse);
    }
    state.explanation = response;
    state.notice = 'Explanation saved in this browser-tab session.';
    state.log.push('Bird-category explanation saved.');
    saveState();
    renderAll();
    el.explanationReminder.focus();
  }

  function continueToTransfer() {
    state.explanationComplete = true;
    saveState();
    renderAll();
    focusHeading('transfer-heading');
  }

  function commitTransferPrediction() {
    var prediction = checkedValue('transferPrediction');
    if (!prediction) return showStatus(el.transferPredictionStatus, 'Choose the case that first sounds most like reinforcement.', firstControl('transferPrediction'));

    state.transferPrediction = prediction;
    state.notice = 'Transfer prediction committed. The case details are now available.';
    state.log.push('Initial reinforcement-prototype prediction: ' + transferTitle(prediction) + '.');
    saveState();
    renderAll();
    focusHeading('transfer-case-heading');
  }

  function submitTransferCase() {
    var direction = checkedValue('consequenceDirection');
    var behavior = checkedValue('behaviorChange');
    var reinforcement = checkedValue('isReinforcement');
    if (!direction) return showStatus(el.transferCaseStatus, 'Choose whether something was added or removed.', firstControl('consequenceDirection'));
    if (!behavior) return showStatus(el.transferCaseStatus, 'Choose what happened to the future behavior.', firstControl('behaviorChange'));
    if (!reinforcement) return showStatus(el.transferCaseStatus, 'Choose whether the consequence functioned as reinforcement.', firstControl('isReinforcement'));

    var current = transferCases[state.transferCaseIndex];
    var response = {
      id: current.id,
      direction: direction,
      behavior: behavior,
      reinforcement: reinforcement,
      directionCorrect: direction === current.direction,
      behaviorCorrect: behavior === current.behavior,
      reinforcementCorrect: reinforcement === current.reinforcement
    };
    state.transferResponses.push(response);
    state.transferCaseIndex += 1;
    state.transferFeedbackPending = true;
    state.log.push(current.title + ': classified as ' + directionLabel(direction) + ', behavior ' + behavior + ', reinforcement ' + reinforcement + '.');
    saveState();
    renderAll();
    el.transferFeedback.focus();
  }

  function advanceTransferCase() {
    state.transferFeedbackPending = false;
    if (state.transferCaseIndex >= transferCases.length) {
      state.transferMapRevealed = true;
      state.log.push('All reinforcement cases complete. The functional map was revealed.');
    }
    saveState();
    renderAll();
    focusHeading(state.transferMapRevealed ? 'transfer-heading' : 'transfer-case-heading');
    if (state.transferMapRevealed) el.finalResponse.focus();
  }

  function saveFinalResponse() {
    var response = el.finalResponse.value.trim();
    if (nonWhitespaceLength(response) < 60) {
      return showStatus(el.finalResponseStatus, 'Write at least 60 non-whitespace characters before completing the lab.', el.finalResponse);
    }
    state.finalResponse = response;
    state.notice = 'Final reinforcement transfer explanation saved.';
    state.log.push('Final reinforcement transfer explanation saved.');
    saveState();
    renderAll();
    el.finishLab.focus();
  }

  function finishLab() {
    if (!state.finalResponse) return;
    state.completed = true;
    state.notice = 'Lab completed. Your summary is ready.';
    state.log.push('Lab complete.');
    saveState();
    renderAll();
    focusHeading('summary-heading');
  }

  function restartLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state = createInitialState();
    clearTransientControls();
    renderAll();
    focusHeading('prediction-heading');
    window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }

  function clearTransientControls() {
    [
      'prediction', 'feature', 'typicality', 'comparisonAnswer', 'revision',
      'transferPrediction', 'consequenceDirection', 'behaviorChange', 'isReinforcement'
    ].forEach(clearRadioGroup);
    el.predictionReasoning.value = '';
    el.revisionExplanation.value = '';
    el.explanationResponse.value = '';
    el.finalResponse.value = '';
    el.membershipConfidence.value = '50';
    [
      el.predictionStatus, el.birdRatingStatus, el.comparisonStatus, el.revisionStatus,
      el.explanationStatus, el.transferPredictionStatus, el.transferCaseStatus,
      el.finalResponseStatus
    ].forEach(function (status) { status.textContent = ''; });
  }

  function renderAll() {
    renderPrediction();
    renderBirdPhase();
    renderConceptPhase();
    renderExplainPhase();
    renderTransferPhase();
    renderSummaryPhase();
    renderEventLog();
  }

  function renderPrediction() {
    setCheckedValue('prediction', state.prediction);
    setCheckedValue('feature', state.feature);
    el.predictionReasoning.value = state.reasoning;
    Array.prototype.forEach.call(el.predictionForm.querySelectorAll('input, textarea'), function (control) {
      control.disabled = state.committed;
    });
    el.commitPrediction.disabled = state.committed;
    el.predictionStatus.textContent = state.committed ? 'Prediction committed and frozen for this run.' : '';
  }

  function renderBirdPhase() {
    var active = state.committed && !state.revisionComplete && !state.completed;
    el.birdPanel.hidden = !active;
    if (!active) return;

    el.birdRatingView.hidden = state.animalIndex >= animals.length;
    el.birdMapView.hidden = state.animalIndex < animals.length;
    el.birdRatingStatus.textContent = state.notice;

    if (state.animalIndex < animals.length) {
      var animal = animals[state.animalIndex];
      el.birdProgress.textContent = 'Animal ' + (state.animalIndex + 1) + ' of ' + animals.length;
      el.animalName.textContent = animal.name;
      renderMembershipValue();
    } else {
      renderBirdMap(el.birdMapLayer, 'bird-map');
      renderBirdTable(el.birdMapTable);
      renderComparisonAndRevision();
    }
  }

  function renderComparisonAndRevision() {
    var comparisonsDone = state.comparisonIndex >= comparisonQuestions.length;
    el.comparisonView.hidden = comparisonsDone && !state.comparisonFeedbackPending;
    el.revisionView.hidden = !comparisonsDone || state.comparisonFeedbackPending;
    el.comparisonForm.hidden = state.comparisonFeedbackPending;
    el.comparisonFeedback.hidden = !state.comparisonFeedbackPending;
    el.comparisonStatus.textContent = '';

    if (state.comparisonFeedbackPending) {
      var answeredIndex = state.comparisonIndex - 1;
      var question = comparisonQuestions[answeredIndex];
      var response = state.comparisonResponses[answeredIndex];
      var isMatch = response.result === 'keyed' || response.result === 'defensible';
      el.comparisonFeedbackHeading.textContent = isMatch ? 'Useful classification' : 'Compare the cases again';
      el.comparisonFeedbackText.textContent = response.result === 'defensible' ? question.secondaryFeedback : question.feedback;
      el.nextComparison.textContent = state.comparisonIndex >= comparisonQuestions.length ? 'Revise your map' : 'Next comparison';
      return;
    }

    if (!comparisonsDone) {
      var current = comparisonQuestions[state.comparisonIndex];
      el.comparisonProgress.textContent = 'Comparison ' + (state.comparisonIndex + 1) + ' of ' + comparisonQuestions.length;
      el.comparisonPrompt.textContent = current.prompt;
      renderOptions(el.comparisonOptions, 'comparisonAnswer', current.options);
    } else {
      setCheckedValues('revision', state.revisionChoices);
      el.revisionExplanation.value = state.revisionExplanation;
    }
  }

  function renderConceptPhase() {
    var active = state.revisionComplete && !state.conceptRevealed && !state.completed;
    el.conceptPanel.hidden = !active;
    if (!active) return;
    el.predictionLedger.textContent = 'Original feature choice: ' + featureLabels[state.feature] + '. Revised choice: ' + state.revisionChoices.map(function (choice) { return revisionLabels[choice]; }).join('; ') + '.';
    el.conceptMapCopy.innerHTML = '';
    renderMapBlock(el.conceptMapCopy, 'concept-bird-map', 'Your completed bird map', 'Bird');
  }

  function renderExplainPhase() {
    var active = state.conceptRevealed && !state.explanationComplete && !state.completed;
    el.explainPanel.hidden = !active;
    if (!active) return;
    el.explanationResponse.value = state.explanation;
    el.explanationResponse.disabled = Boolean(state.explanation);
    el.saveExplanation.disabled = Boolean(state.explanation);
    el.explanationStatus.textContent = state.explanation ? 'Explanation saved in this browser-tab session.' : '';
    el.explanationReminder.hidden = !state.explanation;
    el.continueToTransfer.hidden = !state.explanation;
  }

  function renderTransferPhase() {
    var active = state.explanationComplete && !state.completed;
    el.transferPanel.hidden = !active;
    if (!active) return;

    el.transferPredictionView.hidden = Boolean(state.transferPrediction);
    el.transferCaseView.hidden = !state.transferPrediction || state.transferMapRevealed || state.transferFeedbackPending;
    el.transferFeedback.hidden = !state.transferFeedbackPending;
    el.reinforcementMapView.hidden = !state.transferMapRevealed;

    setCheckedValue('transferPrediction', state.transferPrediction);
    Array.prototype.forEach.call(el.transferPredictionForm.querySelectorAll('input'), function (control) {
      control.disabled = Boolean(state.transferPrediction);
    });
    el.commitTransferPrediction.disabled = Boolean(state.transferPrediction);

    if (state.transferPrediction && !state.transferMapRevealed && !state.transferFeedbackPending) {
      var current = transferCases[state.transferCaseIndex];
      el.transferProgress.textContent = 'Case ' + (state.transferCaseIndex + 1) + ' of ' + transferCases.length;
      el.transferCaseHeading.textContent = current.title;
      el.transferCaseText.textContent = current.text;
      clearTransferControls();
      el.transferCaseStatus.textContent = '';
    }

    if (state.transferFeedbackPending) renderTransferFeedback();
    if (state.transferMapRevealed) {
      renderReinforcementMap(el.reinforcementMapLayer, 'reinforcement-map');
      renderReinforcementTable(el.reinforcementMapTable);
      el.finalResponse.value = state.finalResponse;
      el.finalResponse.disabled = Boolean(state.finalResponse);
      el.saveTransfer.disabled = Boolean(state.finalResponse);
      el.finishLab.hidden = !state.finalResponse;
      el.finalResponseStatus.textContent = state.finalResponse ? 'Final response saved in this browser-tab session.' : '';
    }
  }

  function renderTransferFeedback() {
    var index = state.transferCaseIndex - 1;
    var current = transferCases[index];
    var response = state.transferResponses[index];
    var allMatch = response.directionCorrect && response.behaviorCorrect && response.reinforcementCorrect;
    el.transferFeedbackHeading.textContent = allMatch ? 'Classification matches the functional relation' : 'Use the behavior change as the diagnostic check';
    el.transferFeedbackText.textContent = current.feedback;
    el.nextTransferCase.textContent = state.transferCaseIndex >= transferCases.length ? 'Reveal reinforcement map' : 'Next case';
  }

  function renderSummaryPhase() {
    el.summaryPanel.hidden = !state.completed;
    if (!state.completed) return;

    el.completionSummary.textContent = 'You practiced building a concept from examples, testing it at the boundary, and revising it when the first model failed. Typicality helps organize familiar cases, but a strong academic concept preserves the relation that predicts what happens next.';
    el.summaryContent.innerHTML = '';

    appendSummarySection('1. Original prediction', [
      predictionLabels[state.prediction],
      'Original feature choice: ' + featureLabels[state.feature],
      'Reasoning: ' + state.reasoning
    ]);
    renderMapBlock(el.summaryContent, 'summary-bird-map', '2. Bird ratings and semantic map', 'Bird');
    appendComparisonSummary();
    appendSummarySection('4. Revised concept', [
      'Revision choices: ' + state.revisionChoices.map(function (choice) { return revisionLabels[choice]; }).join('; '),
      state.revisionExplanation
    ]);
    appendSummarySection('5. Bird-category explanation', [state.explanation]);
    appendSummarySection('6. Initial reinforcement prediction', [transferTitle(state.transferPrediction)]);
    appendTransferResponseSummary();
    renderMapBlock(el.summaryContent, 'summary-reinforcement-map', '8. Reinforcement semantic map', 'Reinforcement');
    appendSummarySection('9. Final transfer explanation', [state.finalResponse]);
  }

  function appendComparisonSummary() {
    var section = createSectionHeading('3. Structured comparison responses');
    var list = document.createElement('ol');
    state.comparisonResponses.forEach(function (response, index) {
      var item = document.createElement('li');
      item.textContent = optionLabel(comparisonQuestions[index], response.choice);
      list.appendChild(item);
    });
    section.appendChild(list);
  }

  function appendTransferResponseSummary() {
    var section = createSectionHeading('7. Reinforcement case classifications');
    var tableWrap = document.createElement('div');
    tableWrap.className = 'table-wrap';
    var table = document.createElement('table');
    table.className = 'summary-table';
    var head = table.createTHead().insertRow();
    ['Case', 'Your added/removed choice', 'Your behavior-change choice', 'Your reinforcement choice', 'Functional classification'].forEach(function (heading) {
      var th = document.createElement('th');
      th.scope = 'col';
      th.textContent = heading;
      head.appendChild(th);
    });
    var body = table.createTBody();
    state.transferResponses.forEach(function (response, index) {
      var row = body.insertRow();
      appendCell(row, transferCases[index].title, true);
      appendCell(row, directionLabel(response.direction));
      appendCell(row, response.behavior);
      appendCell(row, response.reinforcement === 'yes' ? 'Yes' : 'No');
      appendCell(row, transferCases[index].classification);
    });
    tableWrap.appendChild(table);
    section.appendChild(tableWrap);
  }

  function renderMapBlock(container, idPrefix, heading, kind) {
    var section = document.createElement('section');
    section.setAttribute('aria-labelledby', idPrefix + '-heading');
    var h3 = document.createElement('h3');
    h3.id = idPrefix + '-heading';
    h3.textContent = heading;
    section.appendChild(h3);

    var wrap = document.createElement('div');
    wrap.className = 'curve-wrap';
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', 'curve-svg');
    svg.setAttribute('viewBox', '0 0 720 500');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-labelledby', idPrefix + '-title ' + idPrefix + '-desc');
    var title = document.createElementNS(SVG_NS, 'title');
    title.id = idPrefix + '-title';
    title.textContent = kind === 'Bird' ? 'Semantic map of the seven animal cases' : 'Functional map of the five reinforcement cases';
    var desc = document.createElementNS(SVG_NS, 'desc');
    desc.id = idPrefix + '-desc';
    desc.textContent = kind === 'Bird'
      ? 'Animals are plotted by the student\'s typicality rating and bird-membership confidence. Equivalent values appear in the table.'
      : 'Cases are plotted by whether something was added or removed and whether behavior increased, decreased, or stayed unchanged. Equivalent classifications appear in the table.';
    var layer = document.createElementNS(SVG_NS, 'g');
    svg.appendChild(title);
    svg.appendChild(desc);
    svg.appendChild(layer);
    wrap.appendChild(svg);
    section.appendChild(wrap);

    var tableWrap = document.createElement('div');
    tableWrap.className = 'table-wrap';
    var table = document.createElement('table');
    table.className = 'summary-table';
    var body = table.createTBody();
    if (kind === 'Bird') {
      addTableHead(table, ['Animal', 'Membership confidence', 'Typicality rating', 'Actual category status']);
      renderBirdMap(layer, idPrefix);
      renderBirdTable(body);
    } else {
      addTableHead(table, ['Case', 'Added or removed', 'Behavior change', 'Functional classification']);
      renderReinforcementMap(layer, idPrefix);
      renderReinforcementTable(body);
    }
    tableWrap.appendChild(table);
    section.appendChild(tableWrap);
    container.appendChild(section);
  }

  function renderBirdMap(layer) {
    layer.innerHTML = '';
    var left = 95;
    var right = 650;
    var top = 55;
    var bottom = 415;
    var plotWidth = right - left;
    var plotHeight = bottom - top;

    drawLine(layer, left, top, left, bottom, '#64748b', 2);
    drawLine(layer, left, bottom, right, bottom, '#64748b', 2);
    for (var typicality = 1; typicality <= 5; typicality += 1) {
      var x = left + ((typicality - 1) / 4) * plotWidth;
      drawLine(layer, x, top, x, bottom, '#d1d5db', 1);
      drawText(layer, String(typicality), x, bottom + 28, 'middle', 14, '#475569', '400');
    }
    [0, 25, 50, 75, 100].forEach(function (confidence) {
      var y = bottom - (confidence / 100) * plotHeight;
      drawLine(layer, left, y, right, y, '#d1d5db', 1);
      drawText(layer, String(confidence), left - 16, y + 5, 'end', 14, '#475569', '400');
    });
    drawText(layer, 'Typicality rating (1 = very atypical; 5 = very typical)', (left + right) / 2, 480, 'middle', 15, '#334155', '600');
    var yLabel = drawText(layer, 'Bird-membership confidence', 24, (top + bottom) / 2, 'middle', 15, '#334155', '600');
    yLabel.setAttribute('transform', 'rotate(-90 24 ' + ((top + bottom) / 2) + ')');

    var plotted = state.birdRatings.map(function (rating, index) {
      return {
        rating: rating,
        index: index,
        x: left + ((rating.typicality - 1) / 4) * plotWidth,
        y: bottom - (rating.membership / 100) * plotHeight
      };
    });
    var coordinateGroups = {};
    plotted.forEach(function (point) {
      var key = point.x + '|' + point.y;
      if (!coordinateGroups[key]) coordinateGroups[key] = [];
      coordinateGroups[key].push(point);
    });

    plotted.forEach(function (point) {
      var rating = point.rating;
      var index = point.index;
      var animal = animals[index];
      var group = coordinateGroups[point.x + '|' + point.y];
      var groupIndex = group.indexOf(point);
      var markerX = point.x + (groupIndex - (group.length - 1) / 2) * 14;
      var markerY = point.y;
      var isBird = animal.status === 'Bird';
      if (group.length > 1) drawLine(layer, point.x, point.y, markerX, markerY, '#94a3b8', 1);
      if (isBird) {
        var circle = document.createElementNS(SVG_NS, 'circle');
        setAttributes(circle, { cx: markerX, cy: markerY, r: 8, fill: '#2563eb', stroke: '#ffffff', 'stroke-width': 2 });
        layer.appendChild(circle);
      } else {
        var square = document.createElementNS(SVG_NS, 'rect');
        setAttributes(square, { x: markerX - 8, y: markerY - 8, width: 16, height: 16, fill: '#b45309', stroke: '#ffffff', 'stroke-width': 2 });
        layer.appendChild(square);
      }
      var rightEdge = point.x > right - 120;
      var anchor = rightEdge ? 'end' : 'start';
      var labelX = markerX + (rightEdge ? -12 : 12);
      var labelY;
      if (point.y < top + 45) {
        labelY = point.y + 22 + groupIndex * 19;
      } else if (point.y > bottom - 45) {
        labelY = point.y - 14 - groupIndex * 19;
      } else {
        labelY = point.y - 12 + groupIndex * 19;
      }
      drawText(layer, animal.name + ' (' + animal.status.toLowerCase() + ')', labelX, labelY, anchor, 13, '#111827', '700');
    });

    drawText(layer, 'Circle = bird; square = not a bird', right, 28, 'end', 13, '#475569', '600');
  }

  function renderReinforcementMap(layer) {
    layer.innerHTML = '';
    var left = 115;
    var right = 625;
    var top = 65;
    var bottom = 420;
    var middleY = 242;
    var addedX = 220;
    var removedX = 520;

    drawLine(layer, left, middleY, right, middleY, '#64748b', 2);
    drawLine(layer, (left + right) / 2, top, (left + right) / 2, bottom, '#64748b', 2);
    drawText(layer, 'Behavior increased', (left + right) / 2, 28, 'middle', 15, '#334155', '700');
    drawText(layer, 'Behavior unchanged', (left + right) / 2, middleY - 10, 'middle', 14, '#334155', '700');
    drawText(layer, 'Behavior decreased', (left + right) / 2, 468, 'middle', 15, '#334155', '700');
    drawText(layer, 'Something added', addedX, 493, 'middle', 15, '#334155', '700');
    drawText(layer, 'Something removed', removedX, 493, 'middle', 15, '#334155', '700');

    drawText(layer, 'Positive reinforcement', addedX, 55, 'middle', 14, '#166534', '700');
    drawText(layer, 'Negative reinforcement', removedX, 55, 'middle', 14, '#166534', '700');
    drawText(layer, 'Positive punishment', addedX, 447, 'middle', 14, '#9a3412', '700');
    drawText(layer, 'Negative punishment', removedX, 447, 'middle', 14, '#9a3412', '700');

    var points = [
      { x: addedX, y: 115, dx: -12, dy: -15 },
      { x: removedX, y: 105, dx: -12, dy: -15 },
      { x: addedX, y: middleY, dx: -12, dy: -15 },
      { x: removedX, y: 155, dx: -12, dy: 25 },
      { x: addedX, y: 365, dx: 12, dy: 25 }
    ];
    transferCases.forEach(function (current, index) {
      var point = points[index];
      var marker = document.createElementNS(SVG_NS, 'circle');
      setAttributes(marker, { cx: point.x, cy: point.y, r: 8, fill: current.behavior === 'increased' ? '#15803d' : (current.behavior === 'decreased' ? '#b45309' : '#475569'), stroke: '#ffffff', 'stroke-width': 2 });
      layer.appendChild(marker);
      drawText(layer, current.title, point.x + point.dx, point.y + point.dy, point.dx < 0 ? 'end' : 'start', 13, '#111827', '700');
    });
  }

  function renderBirdTable(body) {
    body.innerHTML = '';
    state.birdRatings.forEach(function (rating, index) {
      var row = body.insertRow();
      appendCell(row, animals[index].name, true);
      appendCell(row, String(rating.membership));
      appendCell(row, String(rating.typicality));
      appendCell(row, animals[index].status);
    });
  }

  function renderReinforcementTable(body) {
    body.innerHTML = '';
    transferCases.forEach(function (current) {
      var row = body.insertRow();
      appendCell(row, current.title, true);
      appendCell(row, directionLabel(current.direction));
      appendCell(row, capitalize(current.behavior));
      appendCell(row, current.classification);
    });
  }

  function renderEventLog() {
    el.eventList.innerHTML = '';
    state.log.forEach(function (entry) {
      var item = document.createElement('li');
      item.textContent = entry;
      el.eventList.appendChild(item);
    });
  }

  function renderOptions(container, name, options) {
    container.innerHTML = '';
    options.forEach(function (option) {
      var label = document.createElement('label');
      label.className = 'option-row';
      var input = document.createElement('input');
      input.type = 'radio';
      input.name = name;
      input.value = option[0];
      var span = document.createElement('span');
      span.textContent = option[1];
      label.appendChild(input);
      label.appendChild(span);
      container.appendChild(label);
    });
  }

  function renderMembershipValue() {
    el.membershipValue.textContent = 'Current confidence: ' + el.membershipConfidence.value;
    el.membershipConfidence.setAttribute('aria-valuetext', el.membershipConfidence.value + ' out of 100');
  }

  function clearTransferControls() {
    clearRadioGroup('consequenceDirection');
    clearRadioGroup('behaviorChange');
    clearRadioGroup('isReinforcement');
  }

  function appendSummarySection(heading, paragraphs) {
    var section = createSectionHeading(heading);
    paragraphs.forEach(function (text) {
      var paragraph = document.createElement('p');
      paragraph.textContent = text;
      section.appendChild(paragraph);
    });
  }

  function createSectionHeading(text) {
    var section = document.createElement('section');
    var heading = document.createElement('h3');
    heading.textContent = text;
    section.appendChild(heading);
    el.summaryContent.appendChild(section);
    return section;
  }

  function addTableHead(table, headings) {
    var row = table.createTHead().insertRow();
    headings.forEach(function (heading) {
      var th = document.createElement('th');
      th.scope = 'col';
      th.textContent = heading;
      row.appendChild(th);
    });
  }

  function appendCell(row, text, heading) {
    var cell = document.createElement(heading ? 'th' : 'td');
    if (heading) cell.scope = 'row';
    cell.textContent = text;
    row.appendChild(cell);
  }

  function drawLine(parent, x1, y1, x2, y2, stroke, width) {
    var line = document.createElementNS(SVG_NS, 'line');
    setAttributes(line, { x1: x1, y1: y1, x2: x2, y2: y2, stroke: stroke, 'stroke-width': width });
    parent.appendChild(line);
  }

  function drawText(parent, content, x, y, anchor, size, fill, weight) {
    var text = document.createElementNS(SVG_NS, 'text');
    setAttributes(text, { x: x, y: y, 'text-anchor': anchor, 'font-family': 'Arial, sans-serif', 'font-size': size, fill: fill, 'font-weight': weight });
    text.textContent = content;
    parent.appendChild(text);
    return text;
  }

  function setAttributes(node, attributes) {
    Object.keys(attributes).forEach(function (key) { node.setAttribute(key, attributes[key]); });
  }

  function checkedValue(name) {
    var checked = document.querySelector('input[name="' + name + '"]:checked');
    return checked ? checked.value : '';
  }

  function checkedValues(name) {
    return Array.prototype.map.call(document.querySelectorAll('input[name="' + name + '"]:checked'), function (input) { return input.value; });
  }

  function setCheckedValue(name, value) {
    Array.prototype.forEach.call(document.querySelectorAll('input[name="' + name + '"]'), function (input) {
      input.checked = Boolean(value) && input.value === value;
    });
  }

  function setCheckedValues(name, values) {
    Array.prototype.forEach.call(document.querySelectorAll('input[name="' + name + '"]'), function (input) {
      input.checked = values.indexOf(input.value) !== -1;
    });
  }

  function clearRadioGroup(name) {
    Array.prototype.forEach.call(document.querySelectorAll('input[name="' + name + '"]'), function (input) { input.checked = false; });
  }

  function firstControl(name) {
    return document.querySelector('input[name="' + name + '"]');
  }

  function showStatus(status, message, focusTarget) {
    status.textContent = message;
    if (focusTarget) focusTarget.focus();
  }

  function optionLabel(question, value) {
    var found = question.options.find(function (option) { return option[0] === value; });
    return found ? found[1] : value;
  }

  function transferTitle(id) {
    var found = transferCases.find(function (item) { return item.id === id; });
    return found ? found.title : id;
  }

  function directionLabel(direction) {
    if (direction === 'added') return 'Something added';
    if (direction === 'removed') return 'Something removed or reduced';
    return 'Not relevant';
  }

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function nonWhitespaceLength(text) {
    return text.replace(/\s/g, '').length;
  }

  function focusHeading(id) {
    var target = document.getElementById(id);
    if (target) target.focus();
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      state.notice = 'Progress could not be saved in this browser-tab session.';
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
      state = Object.assign(createInitialState(), candidate);
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
      state = createInitialState();
    }
  }

  function isValidState(candidate) {
    if (!candidate || candidate.version !== 1) return false;
    if (!Array.isArray(candidate.birdRatings) || !Array.isArray(candidate.comparisonResponses) || !Array.isArray(candidate.revisionChoices) || !Array.isArray(candidate.transferResponses) || !Array.isArray(candidate.log)) return false;
    if (candidate.animalIndex < 0 || candidate.animalIndex > animals.length || candidate.birdRatings.length !== candidate.animalIndex) return false;
    if (candidate.comparisonIndex < 0 || candidate.comparisonIndex > comparisonQuestions.length || candidate.comparisonResponses.length !== candidate.comparisonIndex) return false;
    if (candidate.transferCaseIndex < 0 || candidate.transferCaseIndex > transferCases.length || candidate.transferResponses.length !== candidate.transferCaseIndex) return false;
    if (candidate.comparisonFeedbackPending && candidate.comparisonIndex < 1) return false;
    if (candidate.transferFeedbackPending && candidate.transferCaseIndex < 1) return false;
    if (candidate.completed && !candidate.finalResponse) return false;
    return true;
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
}());
