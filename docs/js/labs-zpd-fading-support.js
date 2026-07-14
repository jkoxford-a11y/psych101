/* Scaffold or Substitute? Testing What Remains After Help Fades */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101_ch10_zpd_fading_support_v1';
  const HINTS = [
    { level: 'Orient attention', text: 'Compare cases that differ on only one feature.' },
    { level: 'Reduce the problem', text: 'Look specifically at cases with exactly one marked feature.' },
    { level: 'Prompt the rule', text: 'Complete the sentence: “The outcome occurs when exactly ___ of the two features is present.”' },
    { level: 'Model one step', text: 'Case 1 has a ringed shell but no forked fin. That is exactly one marked feature, so the organism releases a glow.' }
  ];

  const initialState = {
    predictionCommitted: false,
    prediction: '',
    baselineSubmitted: false,
    baselineContinued: false,
    baseline: { rule: '', classification: '' },
    completeAnswerSubmitted: false,
    completeAnswerReflectionSaved: false,
    completeAnswer: { rule: '', classification: '', reflection: '' },
    scaffoldSubmitted: false,
    scaffoldContinued: false,
    scaffold: { rule: '', classification: '', hintsRequested: 0 },
    hintLog: [],
    transferSubmitted: false,
    transferHintUsed: false,
    conceptRevealed: false,
    explanationRevealed: false,
    transfer: { rule: '', caseA: '', caseB: '', reasoning: '' },
    explanationSaved: false,
    explanation: '',
    aiSubmitted: false,
    completed: false,
    aiDesign: { attempt: '', hint: '', withhold: '', fade: '', transfer: '' }
  };

  let state = copyInitialState();
  const elements = {};

  function initializeLab() {
    cacheElements();
    restoreState();
    bindEvents();
    renderAll();
  }

  function copyInitialState() {
    return JSON.parse(JSON.stringify(initialState));
  }

  function cacheElements() {
    [
      'resetLab', 'resetStatus', 'predictionResponse', 'commitPrediction', 'predictionStatus',
      'baselinePanel', 'baselineHeading', 'baselineRule', 'commitBaseline', 'baselineStatus',
      'baselineFeedback', 'baselineFeedbackText',
      'completeAnswerPanel', 'completeAnswerHeading', 'completeAnswerRule', 'commitCompleteAnswer',
      'completeAnswerStatus', 'completeAnswerReveal', 'completeAnswerReflectionWrap',
      'completeAnswerReflection', 'saveCompleteAnswerReflection', 'completeAnswerReflectionStatus',
      'scaffoldPanel', 'scaffoldHeading', 'requestHint', 'hintList', 'scaffoldRule',
      'checkScaffoldAnswer', 'scaffoldStatus', 'scaffoldFeedback', 'scaffoldFeedbackHeading',
      'scaffoldFeedbackText', 'hintEventList',
      'transferPanel', 'transferHeading', 'transferRule', 'transferReasoning', 'commitTransfer',
      'transferStatus', 'postTransferActions', 'showTransferHint', 'continueConcept', 'transferHint',
      'conceptPanel', 'conceptHeading', 'continueExplanation',
      'explanationPanel', 'explanationHeading', 'explanationResponse', 'saveExplanation', 'explanationStatus',
      'aiPanel', 'aiHeading', 'aiAttempt', 'aiHint', 'aiWithhold', 'aiFade', 'aiTransfer',
      'submitAiDesign', 'aiStatus', 'aiFeedback', 'finishLab',
      'summaryPanel', 'summaryHeading', 'summaryPrediction', 'summaryBaseline', 'summaryCompleteAnswer',
      'summaryHints', 'summaryTransfer', 'summaryTransferHint', 'summaryExplanation', 'summaryAi'
    ].forEach(function (key) {
      const id = key.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); });
      elements[key] = document.getElementById(id);
    });
  }

  function bindEvents() {
    elements.resetLab.addEventListener('click', resetLab);
    elements.commitPrediction.addEventListener('click', commitPrediction);
    elements.commitBaseline.addEventListener('click', commitBaseline);
    elements.commitCompleteAnswer.addEventListener('click', commitCompleteAnswer);
    elements.saveCompleteAnswerReflection.addEventListener('click', saveCompleteAnswerReflection);
    elements.requestHint.addEventListener('click', requestHint);
    elements.checkScaffoldAnswer.addEventListener('click', checkScaffoldAnswer);
    elements.commitTransfer.addEventListener('click', commitTransfer);
    elements.showTransferHint.addEventListener('click', showTransferHint);
    elements.continueConcept.addEventListener('click', revealConcept);
    elements.continueExplanation.addEventListener('click', revealExplanation);
    elements.saveExplanation.addEventListener('click', saveExplanation);
    elements.submitAiDesign.addEventListener('click', submitAiDesign);
    elements.finishLab.addEventListener('click', finishLab);
  }

  function selectedValue(name) {
    const selected = document.querySelector('input[name="' + name + '"]:checked');
    return selected ? selected.value : '';
  }

  function setRadioState(name, value, disabled) {
    document.querySelectorAll('input[name="' + name + '"]').forEach(function (input) {
      input.checked = input.value === value;
      input.disabled = disabled;
    });
  }

  function requireText(value, statusElement, message, field) {
    if (value.trim()) return true;
    statusElement.textContent = message;
    field.focus();
    return false;
  }

  function commitPrediction() {
    const prediction = elements.predictionResponse.value.trim();
    if (!requireText(prediction, elements.predictionStatus, 'Write your prediction before committing it.', elements.predictionResponse)) return;
    state.prediction = prediction;
    state.predictionCommitted = true;
    saveAndRender();
    elements.baselineHeading.focus();
  }

  function commitBaseline() {
    const rule = elements.baselineRule.value.trim();
    const classification = selectedValue('baseline-classification');
    if (!requireText(rule, elements.baselineStatus, 'State a rule before committing your baseline attempt.', elements.baselineRule)) return;
    if (!classification) {
      elements.baselineStatus.textContent = 'Choose Yes or No for the new plant, then commit your attempt.';
      document.querySelector('input[name="baseline-classification"]').focus();
      return;
    }
    state.baseline = { rule: rule, classification: classification };
    state.baselineSubmitted = true;
    state.baselineContinued = true;
    saveAndRender();
    elements.completeAnswerHeading.focus();
  }

  function commitCompleteAnswer() {
    const rule = elements.completeAnswerRule.value.trim();
    const classification = selectedValue('complete-answer-classification');
    if (!requireText(rule, elements.completeAnswerStatus, 'Make an initial rule attempt before receiving the completed answer.', elements.completeAnswerRule)) return;
    if (!classification) {
      elements.completeAnswerStatus.textContent = 'Choose Yes or No for the new machine, then commit your attempt.';
      document.querySelector('input[name="complete-answer-classification"]').focus();
      return;
    }
    state.completeAnswer.rule = rule;
    state.completeAnswer.classification = classification;
    state.completeAnswerSubmitted = true;
    saveAndRender();
    elements.completeAnswerReveal.focus();
  }

  function saveCompleteAnswerReflection() {
    const reflection = elements.completeAnswerReflection.value.trim();
    if (!requireText(reflection, elements.completeAnswerReflectionStatus, 'Write a brief reflection before continuing.', elements.completeAnswerReflection)) return;
    state.completeAnswer.reflection = reflection;
    state.completeAnswerReflectionSaved = true;
    saveAndRender();
    elements.scaffoldHeading.focus();
  }

  function requestHint() {
    if (state.scaffoldSubmitted || state.scaffold.hintsRequested >= HINTS.length) return;
    state.scaffold.rule = elements.scaffoldRule.value;
    state.scaffold.classification = selectedValue('scaffold-classification');
    state.scaffold.hintsRequested += 1;
    const hint = HINTS[state.scaffold.hintsRequested - 1];
    state.hintLog.push('Hint ' + state.scaffold.hintsRequested + ' requested - ' + hint.level + ': ' + hint.text);
    saveAndRender();
    elements.requestHint.focus();
  }

  function ruleIsComplete(rule) {
    const text = rule.toLowerCase();
    const saysOne = /exactly\s+(one|1)/.test(text) || /one\s+(feature|marked)/.test(text);
    const excludesAlternatives = /not\s+(both|neither)/.test(text) || (/both/.test(text) && /neither/.test(text));
    return saysOne && excludesAlternatives;
  }

  function checkScaffoldAnswer() {
    const rule = elements.scaffoldRule.value.trim();
    const classification = selectedValue('scaffold-classification');
    if (!requireText(rule, elements.scaffoldStatus, 'State the rule before checking your answer.', elements.scaffoldRule)) return;
    if (!classification) {
      elements.scaffoldStatus.textContent = 'Choose Yes or No for the new organism, then check your answer.';
      document.querySelector('input[name="scaffold-classification"]').focus();
      return;
    }
    state.scaffold.rule = rule;
    state.scaffold.classification = classification;
    state.scaffoldSubmitted = true;
    state.scaffoldContinued = true;
    saveAndRender();
    elements.transferHeading.focus();
  }

  function commitTransfer() {
    const rule = elements.transferRule.value.trim();
    const caseA = selectedValue('transfer-a');
    const caseB = selectedValue('transfer-b');
    const reasoning = elements.transferReasoning.value.trim();
    if (!requireText(rule, elements.transferStatus, 'State the museum rule before committing your transfer attempt.', elements.transferRule)) return;
    if (!caseA) {
      elements.transferStatus.textContent = 'Classify new case A as Yes or No.';
      document.querySelector('input[name="transfer-a"]').focus();
      return;
    }
    if (!caseB) {
      elements.transferStatus.textContent = 'Classify new case B as Yes or No.';
      document.querySelector('input[name="transfer-b"]').focus();
      return;
    }
    if (!requireText(reasoning, elements.transferStatus, 'Explain how your rule produced both classifications.', elements.transferReasoning)) return;
    state.transfer = { rule: rule, caseA: caseA, caseB: caseB, reasoning: reasoning };
    state.transferSubmitted = true;
    saveAndRender();
    elements.showTransferHint.focus();
  }

  function showTransferHint() {
    if (state.transferHintUsed) return;
    state.transferHintUsed = true;
    saveAndRender();
    elements.transferHint.focus();
  }

  function revealConcept() {
    state.conceptRevealed = true;
    saveAndRender();
    elements.conceptHeading.focus();
  }

  function revealExplanation() {
    state.explanationRevealed = true;
    saveAndRender();
    elements.explanationHeading.focus();
  }

  function saveExplanation() {
    const explanation = elements.explanationResponse.value.trim();
    if (!requireText(explanation, elements.explanationStatus, 'Write your explanation before continuing to the AI application.', elements.explanationResponse)) return;
    const lower = explanation.toLowerCase();
    const requiredTerms = [
      ['zone of proximal development', 'zone of proximal development'],
      ['scaffolding', 'scaffolding'],
      ['assisted performance', 'assisted performance'],
      ['independent transfer', 'independent transfer']
    ];
    const missing = requiredTerms.filter(function (entry) { return lower.indexOf(entry[0]) === -1; }).map(function (entry) { return entry[1]; });
    if (missing.length) {
      elements.explanationStatus.textContent = 'Add the required term' + (missing.length > 1 ? 's' : '') + ': ' + missing.join(', ') + '.';
      elements.explanationResponse.focus();
      return;
    }
    state.explanation = explanation;
    state.explanationSaved = true;
    saveAndRender();
    elements.aiHeading.focus();
  }

  function submitAiDesign() {
    const design = {
      attempt: elements.aiAttempt.value.trim(),
      hint: elements.aiHint.value.trim(),
      withhold: elements.aiWithhold.value.trim(),
      fade: elements.aiFade.value.trim(),
      transfer: elements.aiTransfer.value.trim()
    };
    const fields = [
      ['attempt', elements.aiAttempt, 'Describe what the student attempts before using AI.'],
      ['hint', elements.aiHint, 'Describe the calibrated hint the AI provides.'],
      ['withhold', elements.aiWithhold, 'State what the AI withholds.'],
      ['fade', elements.aiFade, 'Explain how the support fades.'],
      ['transfer', elements.aiTransfer, 'Name a new unsupported task that tests independent transfer.']
    ];
    for (let i = 0; i < fields.length; i += 1) {
      if (!design[fields[i][0]]) {
        elements.aiStatus.textContent = fields[i][2];
        fields[i][1].focus();
        return;
      }
    }
    state.aiDesign = design;
    state.aiSubmitted = true;
    saveAndRender();
    elements.aiFeedback.focus();
  }

  function finishLab() {
    state.completed = true;
    saveAndRender();
    elements.summaryHeading.focus();
  }

  function saveAndRender() {
    saveState();
    renderAll();
  }

  function renderAll() {
    renderPrediction();
    renderBaseline();
    renderCompleteAnswer();
    renderScaffold();
    renderTransfer();
    renderConceptAndExplanation();
    renderAi();
    renderSummary();
  }

  function renderPrediction() {
    elements.predictionResponse.value = state.prediction;
    elements.predictionResponse.disabled = state.predictionCommitted;
    elements.commitPrediction.disabled = state.predictionCommitted;
    elements.predictionStatus.textContent = state.predictionCommitted ? 'Prediction committed and frozen for this browser session.' : '';
    elements.baselinePanel.hidden = !state.predictionCommitted;
  }

  function renderBaseline() {
    elements.baselineRule.value = state.baseline.rule;
    elements.baselineRule.disabled = state.baselineSubmitted;
    setRadioState('baseline-classification', state.baseline.classification, state.baselineSubmitted);
    elements.commitBaseline.disabled = state.baselineSubmitted;
    elements.baselineFeedback.hidden = !state.baselineSubmitted;
    if (state.baselineSubmitted) {
      elements.baselineStatus.textContent = 'Baseline attempt committed.';
      elements.baselineFeedbackText.textContent = state.baseline.classification === 'yes'
        ? 'Your classification fits the new case: one feature is present and the observed cases with that pattern produce a silver seedpod. Keep your verbal rule in mind as the surface story changes.'
        : 'Your classification does not fit the new case: it matches Case 1, where one feature is present and a silver seedpod occurs. Keep your verbal rule in mind as the surface story changes.';
    }
    elements.completeAnswerPanel.hidden = !state.baselineContinued;
  }

  function renderCompleteAnswer() {
    elements.completeAnswerRule.value = state.completeAnswer.rule;
    elements.completeAnswerRule.disabled = state.completeAnswerSubmitted;
    setRadioState('complete-answer-classification', state.completeAnswer.classification, state.completeAnswerSubmitted);
    elements.commitCompleteAnswer.disabled = state.completeAnswerSubmitted;
    elements.completeAnswerReveal.hidden = !state.completeAnswerSubmitted;
    elements.completeAnswerReflectionWrap.hidden = !state.completeAnswerSubmitted;
    elements.completeAnswerReflection.value = state.completeAnswer.reflection;
    elements.completeAnswerReflection.disabled = state.completeAnswerReflectionSaved;
    elements.saveCompleteAnswerReflection.disabled = state.completeAnswerReflectionSaved;
    if (state.completeAnswerSubmitted) elements.completeAnswerStatus.textContent = 'Initial attempt preserved. Complete-answer support is now visible.';
    if (state.completeAnswerReflectionSaved) elements.completeAnswerReflectionStatus.textContent = 'Reflection saved in this browser session.';
    elements.scaffoldPanel.hidden = !state.completeAnswerReflectionSaved;
  }

  function renderScaffold() {
    elements.hintList.innerHTML = '';
    for (let i = 0; i < state.scaffold.hintsRequested; i += 1) {
      const li = document.createElement('li');
      const strong = document.createElement('strong');
      strong.textContent = 'Hint ' + (i + 1) + ' - ' + HINTS[i].level + ': ';
      li.appendChild(strong);
      li.appendChild(document.createTextNode(HINTS[i].text));
      elements.hintList.appendChild(li);
    }
    const allHintsUsed = state.scaffold.hintsRequested >= HINTS.length;
    elements.requestHint.disabled = state.scaffoldSubmitted || allHintsUsed;
    elements.requestHint.textContent = allHintsUsed ? 'All four hints requested' : 'Request hint ' + (state.scaffold.hintsRequested + 1);
    elements.scaffoldRule.value = state.scaffold.rule;
    elements.scaffoldRule.disabled = state.scaffoldSubmitted;
    setRadioState('scaffold-classification', state.scaffold.classification, state.scaffoldSubmitted);
    elements.checkScaffoldAnswer.disabled = state.scaffoldSubmitted;
    elements.scaffoldFeedback.hidden = !state.scaffoldSubmitted;

    elements.hintEventList.innerHTML = '';
    state.hintLog.forEach(function (entry) {
      const li = document.createElement('li');
      li.textContent = entry;
      elements.hintEventList.appendChild(li);
    });

    if (state.scaffoldSubmitted) {
      const classificationCorrect = state.scaffold.classification === 'no';
      const completeRule = ruleIsComplete(state.scaffold.rule);
      if (classificationCorrect && completeRule) {
        elements.scaffoldFeedbackHeading.textContent = 'Your classification and verbal rule are complete.';
        elements.scaffoldFeedbackText.textContent = 'Exactly one feature produces the outcome. This organism has both features, so it does not release a glow.';
      } else if (!classificationCorrect && !completeRule) {
        elements.scaffoldFeedbackHeading.textContent = 'Two parts need another look.';
        elements.scaffoldFeedbackText.textContent = 'The classification is not consistent with the table, and the verbal rule does not yet exclude both and neither. The complete rule is: the glow occurs when exactly one feature is present. Both features are present in the new case, so the classification is No.';
      } else if (!classificationCorrect) {
        elements.scaffoldFeedbackHeading.textContent = 'Your rule is complete; the classification is not.';
        elements.scaffoldFeedbackText.textContent = 'Exactly one feature produces the outcome. The new organism has both features, so the classification is No.';
      } else {
        elements.scaffoldFeedbackHeading.textContent = 'Your classification fits; the verbal rule is incomplete.';
        elements.scaffoldFeedbackText.textContent = 'The new case is No. A complete rule must also say why: the glow occurs when exactly one feature is present, not when both or neither are present.';
      }
      elements.scaffoldStatus.textContent = 'Answer checked. Explanatory feedback is below.';
    }
    elements.transferPanel.hidden = !state.scaffoldContinued;
  }

  function renderTransfer() {
    elements.transferRule.value = state.transfer.rule;
    elements.transferRule.disabled = state.transferSubmitted;
    elements.transferReasoning.value = state.transfer.reasoning;
    elements.transferReasoning.disabled = state.transferSubmitted;
    setRadioState('transfer-a', state.transfer.caseA, state.transferSubmitted);
    setRadioState('transfer-b', state.transfer.caseB, state.transferSubmitted);
    elements.commitTransfer.disabled = state.transferSubmitted;
    elements.postTransferActions.hidden = !state.transferSubmitted;
    elements.showTransferHint.disabled = state.transferHintUsed;
    elements.showTransferHint.textContent = state.transferHintUsed ? 'Optional transfer hint shown' : 'Show optional transfer hint';
    elements.transferHint.hidden = !state.transferHintUsed;
    elements.continueConcept.disabled = state.conceptRevealed;
    if (state.transferSubmitted) elements.transferStatus.textContent = 'Initial transfer attempt committed and preserved.';
    elements.conceptPanel.hidden = !state.conceptRevealed;
  }

  function renderConceptAndExplanation() {
    elements.continueExplanation.disabled = state.explanationRevealed;
    elements.explanationPanel.hidden = !state.explanationRevealed;
    elements.explanationResponse.value = state.explanation;
    elements.explanationResponse.disabled = state.explanationSaved;
    elements.saveExplanation.disabled = state.explanationSaved;
    if (state.explanationSaved) elements.explanationStatus.textContent = 'Explanation saved in this browser session.';
    elements.aiPanel.hidden = !state.explanationSaved;
  }

  function renderAi() {
    elements.aiAttempt.value = state.aiDesign.attempt;
    elements.aiHint.value = state.aiDesign.hint;
    elements.aiWithhold.value = state.aiDesign.withhold;
    elements.aiFade.value = state.aiDesign.fade;
    elements.aiTransfer.value = state.aiDesign.transfer;
    [elements.aiAttempt, elements.aiHint, elements.aiWithhold, elements.aiFade, elements.aiTransfer].forEach(function (field) {
      field.disabled = state.aiSubmitted;
    });
    elements.submitAiDesign.disabled = state.aiSubmitted;
    elements.aiFeedback.hidden = !state.aiSubmitted;
    elements.finishLab.disabled = state.completed;
    if (state.aiSubmitted) elements.aiStatus.textContent = 'All five design components are recorded. Review the criteria below.';
    elements.summaryPanel.hidden = !state.completed;
  }

  function renderSummary() {
    if (!state.completed) return;
    elements.summaryPrediction.textContent = state.prediction;
    elements.summaryBaseline.textContent = state.baseline.rule + ' Classification: ' + formatYesNo(state.baseline.classification) + '.';
    elements.summaryCompleteAnswer.textContent = 'Used after an initial attempt. Reflection: ' + state.completeAnswer.reflection;
    elements.summaryHints.textContent = state.scaffold.hintsRequested === 0
      ? 'No hints requested.'
      : state.scaffold.hintsRequested + ' hint' + (state.scaffold.hintsRequested === 1 ? '' : 's') + ' requested, through level ' + state.scaffold.hintsRequested + ' (' + HINTS[state.scaffold.hintsRequested - 1].level + ').';
    elements.summaryTransfer.textContent = 'Rule: ' + state.transfer.rule + ' Case A: ' + formatYesNo(state.transfer.caseA) + '. Case B: ' + formatYesNo(state.transfer.caseB) + '. Reasoning: ' + state.transfer.reasoning;
    elements.summaryTransferHint.textContent = state.transferHintUsed ? 'Used after the initial attempt was committed.' : 'Not used.';
    elements.summaryExplanation.textContent = state.explanation;
    elements.summaryAi.innerHTML = '';
    [
      'Before AI: ' + state.aiDesign.attempt,
      'Hint: ' + state.aiDesign.hint,
      'Withheld: ' + state.aiDesign.withhold,
      'Fading: ' + state.aiDesign.fade,
      'Independent transfer: ' + state.aiDesign.transfer
    ].forEach(function (text) {
      const li = document.createElement('li');
      li.textContent = text;
      elements.summaryAi.appendChild(li);
    });
  }

  function formatYesNo(value) {
    return value === 'yes' ? 'Yes' : 'No';
  }

  function resetLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state = copyInitialState();
    clearStatuses();
    renderAll();
    elements.resetStatus.textContent = 'This lab’s saved session data has been cleared.';
    document.getElementById('prediction-heading').focus();
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  function clearStatuses() {
    [
      elements.resetStatus, elements.predictionStatus, elements.baselineStatus,
      elements.completeAnswerStatus, elements.completeAnswerReflectionStatus,
      elements.scaffoldStatus, elements.transferStatus, elements.explanationStatus, elements.aiStatus
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
      if (!saved || typeof saved !== 'object' || !saved.baseline || !saved.completeAnswer || !saved.scaffold || !saved.transfer || !saved.aiDesign || !Array.isArray(saved.hintLog)) {
        sessionStorage.removeItem(STORAGE_KEY);
        return;
      }
      state = Object.assign(copyInitialState(), saved);
      state.baseline = Object.assign({}, initialState.baseline, saved.baseline);
      state.completeAnswer = Object.assign({}, initialState.completeAnswer, saved.completeAnswer);
      state.scaffold = Object.assign({}, initialState.scaffold, saved.scaffold);
      state.transfer = Object.assign({}, initialState.transfer, saved.transfer);
      state.aiDesign = Object.assign({}, initialState.aiDesign, saved.aiDesign);
      state.scaffold.hintsRequested = Math.max(0, Math.min(HINTS.length, Number(state.scaffold.hintsRequested) || 0));
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
      state = copyInitialState();
    }
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
})();
