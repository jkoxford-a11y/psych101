/* Consciousness Evidence Claim-Check Learning Lab */
(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch05-consciousness-evidence-claim-check-v1';
  const LABELS = { direct: 'Directly demonstrated', consistent: 'Consistent, but not uniquely established', overclaimed: 'Overclaimed or unsupported' };
  const PROOF_LABELS = { yes: 'Yes', no: 'No', depends: 'It depends' };
  const HARD_LABELS = {
    'processing-awareness': 'processing versus conscious awareness',
    'attention-consciousness': 'attention versus consciousness',
    'consistent-proof': 'evidence consistent with a theory versus evidence proving a theory'
  };
  const CASES = [
    ['Blindsight', 'A person reports no visual experience yet successfully navigates around obstacles.', 'Some visual information can guide behavior without reportable visual awareness.', 'direct', 'The behavior and report directly demonstrate a dissociation between visually guided action and reportable visual awareness.', 'The result does not reveal the complete mechanism of consciousness or select one theory over every competitor.'],
    ['Blindsight overreach', 'The same person navigates obstacles while reporting no visual experience.', 'Blindsight proves that predictive processing is the correct theory of consciousness.', 'overclaimed', 'Blindsight constrains theories, but several frameworks can accommodate processing without reportable awareness.', 'A theory may explain the result elegantly without being uniquely confirmed by it.'],
    ['Inattentional blindness', 'Many participants counting basketball passes fail to report a person in a gorilla costume crossing the scene.', 'Attention strongly affects what reaches conscious report.', 'direct', 'Manipulating attention directly changes what participants report noticing.', 'Failure to report does not show that the gorilla received no neural processing or reveal exactly how deeply it was processed.'],
    ['Automatic skilled performance', 'A practiced pianist adjusts timing and force without consciously planning every finger movement.', 'Attention can guide skilled performance with little detailed conscious deliberation.', 'direct', 'The evidence supports the limited claim that every adjustment need not be planned step by step.', 'Do not strengthen the claim into “the pianist is wholly unconscious.” Attention and subjective experience may remain.'],
    ['Contextual illusion', 'In the hollow-mask illusion, prior expectations about faces alter the percept produced from ambiguous depth information.', 'Perception is constructive and influenced by prior information.', 'direct', 'The changed percept directly supports this limited claim about context and prior information.', 'The illusion does not prove one complete theory of consciousness; several models explain context-sensitive perception.'],
    ['Charles Bonnet syndrome', 'Some cognitively intact people with substantial visual loss experience vivid visual hallucinations.', 'The condition is consistent with the brain generating perceptual content when sensory constraint is degraded.', 'consistent', 'The observation fits constructive accounts but does not uniquely identify predictive processing as the mechanism.', 'A useful framework can fit a striking case while sharing that fit with other explanations.'],
    ['Psychedelic effects', 'Agonism at serotonin 5-HT2A receptors can alter perception and self-experience.', 'These effects prove that consciousness is nothing more than precision weighting.', 'overclaimed', 'Drug perturbation constrains explanations, but it changes distributed systems and is not a clean, theory-selective lesion.', 'Precision weighting may be consistent with the effects without being uniquely diagnosed by them.'],
    ['Opioid analgesia', 'Opioids can alter pain unpleasantness and pain intensity, sometimes to different degrees.', 'Pain has partly separable sensory-discriminative and affective-motivational dimensions.', 'direct', 'Differential changes across the two dimensions strongly support their partial separability.', 'The stronger claim that opioids affect only suffering and always leave sensation intact would overreach.'],
    ['AI “hallucination”', 'A text-generating model can produce fluent but false statements.', 'Human perceptual construction and language-model next-token prediction are the same mechanism.', 'overclaimed', 'The analogy highlights one similarity, but the systems have different mechanisms and relationships to the world.', 'A shared word such as “prediction” can hide important differences.']
  ].map(function (item) { return { topic: item[0], evidence: item[1], claim: item[2], correct: item[3], feedback: item[4], tempting: item[5] }; });

  let state = initialState();
  const el = {};
  function initialState() { return { committed: false, theoryProof: '', hardest: '', predictionReason: '', phase: 'prediction', currentIndex: 0, responses: [], eventLog: [], explanation: '', explanationCommitted: false, transfer: '' }; }

  function init() { cache(); restore(); bind(); renderAll(); }
  function cache() {
    ['prediction-reason','commit-prediction','prediction-status','case-panel','case-counter','case-progress','case-topic','evidence-text','claim-text','check-answer','feedback-panel','feedback-heading','feedback-text','tempting-text','next-case','event-log','explain-panel','explanation-response','save-explanation','explanation-status','transfer-panel','completion-summary','error-summary','category-summary','transfer-response','save-transfer','restart-lab','transfer-status'].forEach(function (id) { el[id] = document.getElementById(id); });
    el.proof = Array.from(document.querySelectorAll('input[name="theory-proof"]'));
    el.hardest = Array.from(document.querySelectorAll('input[name="hardest"]'));
    el.classes = Array.from(document.querySelectorAll('input[name="classification"]'));
  }
  function bind() {
    el['commit-prediction'].addEventListener('click', commitPrediction);
    el['check-answer'].addEventListener('click', checkAnswer);
    el['next-case'].addEventListener('click', nextCase);
    el['save-explanation'].addEventListener('click', saveExplanation);
    el['save-transfer'].addEventListener('click', saveTransfer);
    el['restart-lab'].addEventListener('click', restart);
  }
  function selected(list) { const item = list.find(function (choice) { return choice.checked; }); return item ? item.value : ''; }

  function commitPrediction() {
    const proof = selected(el.proof); const hardest = selected(el.hardest); const reason = el['prediction-reason'].value.trim();
    if (!proof) { status('prediction-status', 'Answer whether fitting a theory usually proves it.'); el.proof[0].focus(); return; }
    if (!hardest) { status('prediction-status', 'Choose the distinction you expect to be hardest.'); el.hardest[0].focus(); return; }
    if (!reason) { status('prediction-status', 'Write a brief explanation before committing.'); el['prediction-reason'].focus(); return; }
    Object.assign(state, { committed: true, theoryProof: proof, hardest: hardest, predictionReason: reason, phase: 'cases', eventLog: ['Prediction committed. Case classification begins.'] });
    save(); renderAll(); focus('case-heading');
  }
  function checkAnswer() {
    if (state.phase !== 'cases' || state.responses[state.currentIndex]) return;
    const choice = selected(el.classes);
    if (!choice) { status('case-progress', 'Choose one classification before checking.'); el.classes[0].focus(); return; }
    const item = CASES[state.currentIndex];
    state.responses[state.currentIndex] = { choice: choice, correct: choice === item.correct };
    state.eventLog.push(`Case ${state.currentIndex + 1}, ${item.topic}: chose ${LABELS[choice]}; best classification: ${LABELS[item.correct]}; ${choice === item.correct ? 'correct' : 'revision needed'}.`);
    save(); renderAll(); el['feedback-panel'].focus();
  }
  function nextCase() {
    if (!state.responses[state.currentIndex]) return;
    if (state.currentIndex === CASES.length - 1) { state.phase = 'explain'; save(); renderAll(); focus('explain-heading'); return; }
    state.currentIndex += 1; save(); renderAll(); focus('case-heading');
  }
  function saveExplanation() {
    const value = el['explanation-response'].value.trim();
    if (!value) { status('explanation-status', 'Explain the evidence distinction before continuing.'); el['explanation-response'].focus(); return; }
    state.explanation = value; state.explanationCommitted = true; state.phase = 'transfer'; save(); renderAll(); focus('transfer-heading');
  }
  function saveTransfer() { state.transfer = el['transfer-response'].value.trim(); save(); status('transfer-status', state.transfer ? 'Transfer response saved in this browser session.' : 'Transfer response cleared.'); }
  function restart() { sessionStorage.removeItem(STORAGE_KEY); state = initialState(); renderAll(); focus('prediction-heading'); }

  function renderAll() { renderPrediction(); renderCase(); renderLog(); renderExplanation(); renderTransfer(); }
  function renderPrediction() {
    el.proof.forEach(function (choice) { choice.checked = choice.value === state.theoryProof; choice.disabled = state.committed; });
    el.hardest.forEach(function (choice) { choice.checked = choice.value === state.hardest; choice.disabled = state.committed; });
    el['prediction-reason'].value = state.predictionReason; el['prediction-reason'].disabled = state.committed; el['commit-prediction'].disabled = state.committed;
    status('prediction-status', state.committed ? 'Prediction committed and frozen for this browser session.' : '');
  }
  function renderCase() {
    const visible = state.phase === 'cases'; el['case-panel'].hidden = !visible; if (!visible) return;
    const item = CASES[state.currentIndex]; const response = state.responses[state.currentIndex];
    el['case-counter'].textContent = `Case ${state.currentIndex + 1} of ${CASES.length}`; el['case-topic'].textContent = item.topic; el['evidence-text'].textContent = item.evidence; el['claim-text'].textContent = item.claim;
    el.classes.forEach(function (choice) { choice.checked = Boolean(response && response.choice === choice.value); choice.disabled = Boolean(response); });
    el['check-answer'].disabled = Boolean(response); el['feedback-panel'].hidden = !response;
    el['feedback-panel'].classList.toggle('is-correct', Boolean(response && response.correct)); el['feedback-panel'].classList.toggle('is-incorrect', Boolean(response && !response.correct));
    status('case-progress', response ? 'Feedback available. Your answer is frozen.' : 'Choose the best classification.');
    if (response) { el['feedback-heading'].textContent = response.correct ? 'Correct classification' : 'Revise the claim strength'; el['feedback-text'].textContent = `${LABELS[item.correct]}: ${item.feedback}`; el['tempting-text'].textContent = `Why the tempting alternative overreaches: ${item.tempting}`; el['next-case'].textContent = state.currentIndex === CASES.length - 1 ? 'Continue to explanation' : 'Next case'; }
  }
  function renderLog() { el['event-log'].innerHTML = ''; state.eventLog.forEach(function (text) { const li = document.createElement('li'); li.textContent = text; el['event-log'].appendChild(li); }); }
  function renderExplanation() { el['explain-panel'].hidden = state.phase !== 'explain'; el['explanation-response'].value = state.explanation; el['explanation-response'].disabled = state.explanationCommitted; el['save-explanation'].disabled = state.explanationCommitted; }
  function renderTransfer() {
    const visible = state.phase === 'transfer' && state.explanationCommitted; el['transfer-panel'].hidden = !visible; if (!visible) return;
    const correct = state.responses.filter(function (response) { return response && response.correct; }).length;
    el['completion-summary'].textContent = `You classified ${correct} of ${CASES.length} cases correctly. Your original answer was “${PROOF_LABELS[state.theoryProof]},” and you expected ${HARD_LABELS[state.hardest]} to be hardest. Evidence can establish a phenomenon or dissociation without identifying its full mechanism or selecting one theory over all competitors.`;
    el['error-summary'].textContent = errorSummary(); el['transfer-response'].value = state.transfer; renderCategories();
  }
  function renderCategories() {
    el['category-summary'].innerHTML = '';
    ['direct','consistent','overclaimed'].forEach(function (category) {
      const indices = CASES.map(function (item, index) { return item.correct === category ? index : -1; }).filter(function (index) { return index >= 0; });
      const correct = indices.filter(function (index) { return state.responses[index] && state.responses[index].correct; }).length;
      const row = document.createElement('tr'); row.appendChild(cell(LABELS[category], true)); row.appendChild(cell(String(indices.length))); row.appendChild(cell(`${correct} of ${indices.length}`)); el['category-summary'].appendChild(row);
    });
  }
  function errorSummary() {
    const errors = { direct: 0, consistent: 0, overclaimed: 0 };
    state.responses.forEach(function (response) { if (response && !response.correct) errors[response.choice] += 1; });
    const key = Object.keys(errors).reduce(function (best, current) { return errors[current] > errors[best] ? current : best; }, 'direct');
    if (!errors[key]) return 'You made no classification errors. Keep the same calibration habit when a real claim is less neatly worded.';
    return { direct: 'Your most common error was treating an inference as directly demonstrated. Ask what was actually manipulated, observed, or reported.', consistent: 'Your most common error was stopping at “consistent with.” Ask whether the finding fits several explanations or discriminates among them.', overclaimed: 'Your most common error was rejecting a claim entirely when the evidence supported a narrower conclusion. Trim the claim before discarding it.' }[key];
  }
  function cell(text, header) { const item = document.createElement(header ? 'th' : 'td'); if (header) item.scope = 'row'; item.textContent = text; return item; }
  function status(id, text) { el[id].textContent = text; }
  function save() { try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (error) { status(state.phase === 'prediction' ? 'prediction-status' : 'case-progress', 'Progress remains on this page but could not be saved for refresh.'); } }
  function restore() { const saved = sessionStorage.getItem(STORAGE_KEY); if (!saved) return; try { const value = JSON.parse(saved); if (value && Array.isArray(value.responses) && Array.isArray(value.eventLog) && Number.isInteger(value.currentIndex) && value.currentIndex >= 0 && value.currentIndex < CASES.length) state = value; else sessionStorage.removeItem(STORAGE_KEY); } catch (error) { sessionStorage.removeItem(STORAGE_KEY); } }
  function focus(id) { const heading = document.getElementById(id); if (heading) { heading.focus(); heading.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' }); } }
  function reduced() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  document.addEventListener('DOMContentLoaded', init);
}());
