(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-ch12-coping-fit-v1';
  const scenarios = [
    { title: 'Course registration', text: 'Registration opens tomorrow. The student has a clear list of required courses, backup sections, and enough calm to compare schedules.', control: 'high', arousal: 'manageable', strategy: 'problem', why: 'The demand is changeable and arousal permits action. Comparing sections and preparing backups directly changes the stressor.', poor: 'Regulation alone could feel better without completing the changeable task.' },
    { title: 'A presentation file will not open', text: 'The presentation starts in 20 minutes. A backup can be created, but the student is too activated to follow the recovery steps.', control: 'high', arousal: 'high', strategy: 'sequence', why: 'The technical problem is controllable, but current arousal blocks effective action. Brief regulation should come first, followed immediately by backup and recovery steps.', poor: 'Immediate problem-solving may be error-prone; regulation without returning to the file leaves a solvable problem untouched.' },
    { title: 'Outdoor event and sudden rain', text: 'A club event is underway when heavy rain closes the outdoor space. The venue decision cannot be reversed today, and the group must wait for staff instructions.', control: 'low', arousal: 'manageable', strategy: 'emotion', why: 'The central event is not changeable right now. Regulating disappointment and supporting the group fit better than repeatedly trying to undo the weather or closure.', poor: 'Problem-focused effort aimed at the closed venue spends energy on a condition that cannot currently change.' },
    { title: 'Waiting for a decision', text: 'An application has been submitted. The decision date is next week, no additional materials are accepted, and repeated inbox checking is raising arousal.', control: 'low', arousal: 'high', strategy: 'emotion', why: 'The decision is currently uncontrollable, so the useful target is the response: limit checking, redirect attention, seek perspective, or tolerate uncertainty.', poor: 'More work on an already closed application cannot change the outcome and may keep arousal high.' }
  ];
  const initialState = { prediction: '', committed: false, index: 0, completedScenarios: [], explanation: '', explanationSaved: false, transfer: { scenario: '', control: '', arousal: '', plan: '', boundary: false }, completed: false };
  let state = copyInitial();
  let el;

  function copyInitial() { return JSON.parse(JSON.stringify(initialState)); }
  function byId(id) { return document.getElementById(id); }
  function initialize() {
    el = {
      reset: byId('reset-lab'), resetStatus: byId('reset-status'), prediction: byId('prediction'), commit: byId('commit-prediction'), predictionStatus: byId('prediction-status'),
      classification: byId('classification-panel'), classificationHeading: byId('classification-heading'), progress: byId('scenario-progress'), title: byId('scenario-title'), text: byId('scenario-text'), control: byId('control-select'), arousal: byId('arousal-select'), strategy: byId('strategy-select'), check: byId('check-scenario'), feedback: byId('scenario-feedback'), next: byId('next-scenario'), log: byId('event-log'),
      teaching: byId('teaching-panel'), teachingHeading: byId('teaching-heading'), continueExplanation: byId('continue-explanation'), explanationPanel: byId('explanation-panel'), explanationHeading: byId('explanation-heading'), explanation: byId('explanation'), saveExplanation: byId('save-explanation'), explanationStatus: byId('explanation-status'),
      transferPanel: byId('transfer-panel'), transferHeading: byId('transfer-heading'), transferScenario: byId('transfer-scenario'), transferControl: byId('transfer-control'), transferArousal: byId('transfer-arousal'), transferPlan: byId('transfer-plan'), transferBoundary: byId('transfer-boundary'), saveTransfer: byId('save-transfer'), transferStatus: byId('transfer-status'), summary: byId('summary-panel'), summaryHeading: byId('summary-heading'), completion: byId('completion-summary')
    };
    restore();
    el.commit.addEventListener('click', commitPrediction);
    el.check.addEventListener('click', checkScenario);
    el.next.addEventListener('click', nextScenario);
    el.continueExplanation.addEventListener('click', showExplanation);
    el.saveExplanation.addEventListener('click', saveExplanation);
    el.saveTransfer.addEventListener('click', saveTransfer);
    el.reset.addEventListener('click', resetLab);
    renderAll();
  }
  function commitPrediction() {
    const value = el.prediction.value.trim();
    if (!value) { el.predictionStatus.textContent = 'Write a prediction before committing.'; el.prediction.focus(); return; }
    state.prediction = value; state.committed = true; save(); renderAll(); el.classificationHeading.focus();
  }
  function checkScenario() {
    const control = el.control.value, arousal = el.arousal.value, strategy = el.strategy.value;
    if (!control || !arousal || !strategy) { el.feedback.hidden = false; el.feedback.className = 'feedback-panel is-incorrect'; el.feedback.innerHTML = '<h3>Complete all three choices</h3><p>Classify control and arousal before selecting the first move.</p>'; return; }
    const s = scenarios[state.index];
    const exact = control === s.control && arousal === s.arousal && strategy === s.strategy;
    el.feedback.hidden = false; el.feedback.className = 'feedback-panel ' + (exact ? 'is-correct' : 'is-incorrect');
    el.feedback.innerHTML = '<h3>' + (exact ? 'Good fit' : 'Reconsider the fit') + '</h3><p><strong>Mechanism:</strong> ' + s.why + '</p><p><strong>Why another strategy may fit poorly:</strong> ' + s.poor + '</p>';
    if (!state.completedScenarios.includes(state.index)) state.completedScenarios.push(state.index);
    save(); el.next.hidden = false; el.next.textContent = state.index === scenarios.length - 1 ? 'Reveal the coping-fit rule' : 'Next scenario';
  }
  function nextScenario() {
    if (state.index < scenarios.length - 1) { state.index += 1; save(); renderScenario(); el.classificationHeading.focus(); }
    else { state.index = scenarios.length; save(); renderAll(); el.teachingHeading.focus(); }
  }
  function showExplanation() { el.explanationPanel.hidden = false; el.explanationHeading.focus(); }
  function saveExplanation() {
    const value = el.explanation.value.trim();
    if (value.length < 25) { el.explanationStatus.textContent = 'Explain the rule in at least one complete sentence.'; el.explanation.focus(); return; }
    state.explanation = value; state.explanationSaved = true; save(); renderAll(); el.transferHeading.focus();
  }
  function saveTransfer() {
    const transfer = { scenario: el.transferScenario.value.trim(), control: el.transferControl.value, arousal: el.transferArousal.value, plan: el.transferPlan.value.trim(), boundary: el.transferBoundary.checked };
    if (!transfer.scenario || !transfer.control || !transfer.arousal || transfer.plan.length < 20 || !transfer.boundary) { el.transferStatus.textContent = 'Complete each field and confirm the response-versus-stressor distinction.'; return; }
    state.transfer = transfer; state.completed = true; save(); renderAll(); el.summaryHeading.focus();
  }
  function renderAll() {
    el.prediction.value = state.prediction; el.prediction.disabled = state.committed; el.commit.disabled = state.committed;
    if (state.committed) el.predictionStatus.textContent = 'Prediction committed for this browser session.';
    el.classification.hidden = !state.committed || state.index >= scenarios.length;
    if (state.committed && state.index < scenarios.length) renderScenario();
    el.teaching.hidden = state.index < scenarios.length;
    el.explanationPanel.hidden = !state.explanationSaved;
    el.explanation.value = state.explanation; el.explanation.disabled = state.explanationSaved; el.saveExplanation.disabled = state.explanationSaved;
    if (state.explanationSaved) el.explanationStatus.textContent = 'Explanation saved for this browser session.';
    el.transferPanel.hidden = !state.explanationSaved; renderTransfer();
    el.summary.hidden = !state.completed; if (state.completed) renderSummary(); renderLog();
  }
  function renderScenario() {
    const s = scenarios[state.index]; el.progress.textContent = 'Scenario ' + (state.index + 1) + ' of ' + scenarios.length + '. Your prediction remains frozen above.'; el.title.textContent = s.title; el.text.textContent = s.text;
    el.control.value = ''; el.arousal.value = ''; el.strategy.value = ''; el.feedback.hidden = true; el.next.hidden = true;
  }
  function renderLog() {
    el.log.innerHTML = ''; state.completedScenarios.forEach(function (i) { const li = document.createElement('li'); li.textContent = 'Scenario ' + (i + 1) + ' reviewed: ' + scenarios[i].title + '. Feedback explained control, arousal, and strategy fit.'; el.log.appendChild(li); });
  }
  function renderTransfer() {
    el.transferScenario.value = state.transfer.scenario; el.transferControl.value = state.transfer.control; el.transferArousal.value = state.transfer.arousal; el.transferPlan.value = state.transfer.plan; el.transferBoundary.checked = state.transfer.boundary;
    [el.transferScenario, el.transferControl, el.transferArousal, el.transferPlan, el.transferBoundary].forEach(function (node) { node.disabled = state.completed; }); el.saveTransfer.disabled = state.completed;
    if (state.completed) el.transferStatus.textContent = 'Transfer response saved for this browser session.';
  }
  function renderSummary() {
    el.completion.innerHTML = '';
    const p1 = document.createElement('p'); p1.innerHTML = '<strong>Prediction:</strong> '; p1.appendChild(document.createTextNode(state.prediction)); el.completion.appendChild(p1);
    const p2 = document.createElement('p'); p2.innerHTML = '<strong>Explanation:</strong> '; p2.appendChild(document.createTextNode(state.explanation)); el.completion.appendChild(p2);
    const p3 = document.createElement('p'); p3.innerHTML = '<strong>Transfer plan:</strong> '; p3.appendChild(document.createTextNode(state.transfer.plan)); el.completion.appendChild(p3);
    const p4 = document.createElement('p'); p4.innerHTML = '<strong>Conceptual summary:</strong> You classified four situations without a diagnostic score. Coping fit depends on whether the stressor can change and whether current arousal permits useful action. Regulating the response and changing the stressor are different targets, and an effective sequence can use both.'; el.completion.appendChild(p4);
  }
  function save() { try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (error) { el.resetStatus.textContent = 'Progress remains on this page but could not be saved for refresh.'; } }
  function restore() { try { const raw = sessionStorage.getItem(STORAGE_KEY); if (!raw) return; const saved = JSON.parse(raw); if (!saved || typeof saved !== 'object') return; state = Object.assign(copyInitial(), saved); state.transfer = Object.assign({}, initialState.transfer, saved.transfer || {}); } catch (error) { sessionStorage.removeItem(STORAGE_KEY); state = copyInitial(); } }
  function resetLab() { sessionStorage.removeItem(STORAGE_KEY); state = copyInitial(); el.predictionStatus.textContent = ''; el.explanationStatus.textContent = ''; el.transferStatus.textContent = ''; renderAll(); el.resetStatus.textContent = 'This lab\'s saved session data has been cleared.'; byId('prediction-heading').focus(); window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }
  document.addEventListener('DOMContentLoaded', initialize);
})();
