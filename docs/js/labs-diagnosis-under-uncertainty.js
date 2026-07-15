(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-ch13-diagnosis-uncertainty-v1';
  const disclosures = [
    {
      title: 'Duration and impairment',
      text: 'The pattern has lasted five weeks. Morgan has missed deadlines, stopped completing routine tasks, and is at risk of failing two courses.',
      expected: 'assessment',
      why: 'Duration and impairment make the concern clinically significant, but several explanations remain possible. Further assessment is warranted; a diagnosis is not yet established.'
    },
    {
      title: 'Associated symptoms',
      text: 'Morgan reports depressed mood most days, markedly reduced interest, fatigue, difficulty concentrating, reduced appetite, and feelings of worthlessness.',
      expected: 'assessment',
      why: 'The symptom cluster is consistent with a depressive episode, but context, course, medical or substance effects, and alternatives still require evaluation.'
    },
    {
      title: 'Course and differential evidence',
      text: 'Morgan reports no history of manic or hypomanic episodes and no psychotic symptoms. The change is not limited to one class or relationship.',
      expected: 'assessment',
      why: 'This information narrows important alternatives, but it does not complete the medical, substance, developmental, and contextual assessment.'
    },
    {
      title: 'Context and exclusions',
      text: 'A medical evaluation finds no condition explaining the symptoms. Morgan reports no medication change or substance use that accounts for them. A recent conflict is stressful but does not fully explain the breadth and persistence of the pattern.',
      expected: 'assessment',
      why: 'Relevant exclusions and context strengthen the inference, but a brief educational vignette is still not a clinical diagnosis.'
    },
    {
      title: 'Clinical synthesis',
      text: 'After a structured interview, a licensed clinician documents that the full symptom, duration, impairment, exclusion, and differential criteria for a major depressive episode are met.',
      expected: 'consistent',
      why: 'The evidence is now consistent with the named clinical classification. The diagnosis still does not reveal one cause or dictate one treatment.'
    }
  ];

  const initialState = {
    prediction: '',
    committed: false,
    index: 0,
    judgments: [],
    explanation: '',
    explanationSaved: false,
    transfer: { status: '', reason: '', boundary: false },
    completed: false
  };

  let state = copyInitial();
  let el;

  function copyInitial() {
    return JSON.parse(JSON.stringify(initialState));
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function initialize() {
    el = {
      reset: byId('reset-lab'),
      resetStatus: byId('reset-status'),
      prediction: byId('prediction'),
      commit: byId('commit-prediction'),
      predictionStatus: byId('prediction-status'),
      evidencePanel: byId('evidence-panel'),
      evidenceHeading: byId('evidence-heading'),
      predictionReminder: byId('prediction-reminder'),
      disclosureProgress: byId('disclosure-progress'),
      disclosureTitle: byId('disclosure-title'),
      disclosureText: byId('disclosure-text'),
      evidenceStatus: byId('evidence-status'),
      checkEvidence: byId('check-evidence'),
      evidenceFeedback: byId('evidence-feedback'),
      nextDisclosure: byId('next-disclosure'),
      eventLog: byId('event-log'),
      teachingPanel: byId('teaching-panel'),
      teachingHeading: byId('teaching-heading'),
      continueExplanation: byId('continue-explanation'),
      explanationPanel: byId('explanation-panel'),
      explanationHeading: byId('explanation-heading'),
      explanation: byId('explanation'),
      saveExplanation: byId('save-explanation'),
      explanationStatus: byId('explanation-status'),
      transferPanel: byId('transfer-panel'),
      transferHeading: byId('transfer-heading'),
      transferStatusSelect: byId('transfer-status-select'),
      transferReason: byId('transfer-reason'),
      transferBoundary: byId('transfer-boundary'),
      saveTransfer: byId('save-transfer'),
      transferStatus: byId('transfer-status'),
      summaryPanel: byId('summary-panel'),
      summaryHeading: byId('summary-heading'),
      completionSummary: byId('completion-summary')
    };

    restoreState();
    el.commit.addEventListener('click', commitPrediction);
    el.checkEvidence.addEventListener('click', checkJudgment);
    el.nextDisclosure.addEventListener('click', advanceDisclosure);
    el.continueExplanation.addEventListener('click', revealExplanation);
    el.saveExplanation.addEventListener('click', saveExplanation);
    el.saveTransfer.addEventListener('click', saveTransfer);
    el.reset.addEventListener('click', resetLab);
    renderAll();
  }

  function commitPrediction() {
    const value = el.prediction.value.trim();
    if (value.length < 20) {
      el.predictionStatus.textContent = 'State what can be inferred and what information is still needed.';
      el.prediction.focus();
      return;
    }
    state.prediction = value;
    state.committed = true;
    saveState();
    renderAll();
    el.evidenceHeading.focus();
  }

  function checkJudgment() {
    const chosen = el.evidenceStatus.value;
    if (!chosen) {
      el.evidenceFeedback.hidden = false;
      el.evidenceFeedback.className = 'feedback-panel is-incorrect';
      el.evidenceFeedback.innerHTML = '<h3>Choose an evidence status</h3><p>Classify what the available evidence supports before revealing the next disclosure.</p>';
      return;
    }

    const disclosure = disclosures[state.index];
    const exact = chosen === disclosure.expected;
    el.evidenceFeedback.hidden = false;
    el.evidenceFeedback.className = 'feedback-panel ' + (exact ? 'is-correct' : 'is-incorrect');
    el.evidenceFeedback.innerHTML = '<h3>' + (exact ? 'Calibrated judgment' : 'Recalibrate the inference') + '</h3><p>' + disclosure.why + '</p>';

    const existing = state.judgments.find(function (item) { return item.index === state.index; });
    if (!existing) {
      state.judgments.push({ index: state.index, chosen: chosen, expected: disclosure.expected, exact: exact });
    } else {
      existing.chosen = chosen;
      existing.expected = disclosure.expected;
      existing.exact = exact;
    }

    saveState();
    el.nextDisclosure.hidden = false;
    el.nextDisclosure.textContent = state.index === disclosures.length - 1 ? 'Reveal the reasoning rule' : 'Reveal next information';
    renderLog();
  }

  function advanceDisclosure() {
    if (state.index < disclosures.length - 1) {
      state.index += 1;
      saveState();
      renderDisclosure();
      el.evidenceHeading.focus();
    } else {
      state.index = disclosures.length;
      saveState();
      renderAll();
      el.teachingHeading.focus();
    }
  }

  function revealExplanation() {
    el.explanationPanel.hidden = false;
    el.explanationHeading.focus();
  }

  function saveExplanation() {
    const value = el.explanation.value.trim();
    if (value.length < 60) {
      el.explanationStatus.textContent = 'Explain the change in evidence and the diagnosis-versus-cause boundary in several complete sentences.';
      el.explanation.focus();
      return;
    }
    state.explanation = value;
    state.explanationSaved = true;
    saveState();
    renderAll();
    el.transferHeading.focus();
  }

  function saveTransfer() {
    const transfer = {
      status: el.transferStatusSelect.value,
      reason: el.transferReason.value.trim(),
      boundary: el.transferBoundary.checked
    };
    if (!transfer.status || transfer.reason.length < 45 || !transfer.boundary) {
      el.transferStatus.textContent = 'Choose an evidence status, explain two next questions or exclusions, and confirm the boundary.';
      return;
    }
    state.transfer = transfer;
    state.completed = true;
    saveState();
    renderAll();
    el.summaryHeading.focus();
  }

  function renderAll() {
    el.prediction.value = state.prediction;
    el.prediction.disabled = state.committed;
    el.commit.disabled = state.committed;
    el.predictionStatus.textContent = state.committed ? 'Prediction committed for this browser session.' : '';

    el.evidencePanel.hidden = !state.committed || state.index >= disclosures.length;
    if (state.committed && state.index < disclosures.length) {
      renderDisclosure();
    }

    el.teachingPanel.hidden = state.index < disclosures.length;
    el.explanationPanel.hidden = !state.explanationSaved;
    el.explanation.value = state.explanation;
    el.explanation.disabled = state.explanationSaved;
    el.saveExplanation.disabled = state.explanationSaved;
    el.explanationStatus.textContent = state.explanationSaved ? 'Explanation saved for this browser session.' : '';

    el.transferPanel.hidden = !state.explanationSaved;
    renderTransfer();

    el.summaryPanel.hidden = !state.completed;
    if (state.completed) {
      renderSummary();
    }
    renderLog();
  }

  function renderDisclosure() {
    const disclosure = disclosures[state.index];
    el.predictionReminder.textContent = 'Your prediction is frozen. Update only the strength of the inference as evidence arrives.';
    el.disclosureProgress.textContent = 'Disclosure ' + (state.index + 1) + ' of ' + disclosures.length;
    el.disclosureTitle.textContent = disclosure.title;
    el.disclosureText.textContent = disclosure.text;

    const saved = state.judgments.find(function (item) { return item.index === state.index; });
    el.evidenceStatus.value = saved ? saved.chosen : '';
    el.evidenceFeedback.hidden = true;
    el.nextDisclosure.hidden = true;
  }

  function renderLog() {
    el.eventLog.innerHTML = '';
    state.judgments
      .slice()
      .sort(function (a, b) { return a.index - b.index; })
      .forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = 'Disclosure ' + (item.index + 1) + ': judgment recorded. Feedback compared concern, further assessment, and evidence consistent with a diagnosis.';
        el.eventLog.appendChild(li);
      });
  }

  function renderTransfer() {
    el.transferStatusSelect.value = state.transfer.status;
    el.transferReason.value = state.transfer.reason;
    el.transferBoundary.checked = state.transfer.boundary;
    [el.transferStatusSelect, el.transferReason, el.transferBoundary].forEach(function (node) {
      node.disabled = state.completed;
    });
    el.saveTransfer.disabled = state.completed;
    el.transferStatus.textContent = state.completed ? 'Transfer response saved for this browser session.' : '';
  }

  function renderSummary() {
    el.completionSummary.innerHTML = '';
    const accurate = state.judgments.filter(function (item) { return item.exact; }).length;

    const result = document.createElement('p');
    result.innerHTML = '<strong>Evidence updates:</strong> ' + state.judgments.length + ' completed; ' + accurate + ' matched the calibrated evidence status on the recorded attempt.';
    el.completionSummary.appendChild(result);

    const explanation = document.createElement('p');
    explanation.innerHTML = '<strong>Your explanation:</strong> ';
    explanation.appendChild(document.createTextNode(state.explanation));
    el.completionSummary.appendChild(explanation);

    const transfer = document.createElement('p');
    transfer.innerHTML = '<strong>Transfer reasoning:</strong> ';
    transfer.appendChild(document.createTextNode(state.transfer.reason));
    el.completionSummary.appendChild(transfer);

    const concept = document.createElement('p');
    concept.innerHTML = '<strong>Conceptual summary:</strong> You practiced changing the strength of a diagnostic inference as duration, impairment, context, exclusions, and differential evidence accumulated. A supported classification organizes a pattern; it does not by itself explain cause or prescribe one treatment.';
    el.completionSummary.appendChild(concept);
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      el.resetStatus.textContent = 'Progress remains on this page but could not be saved for refresh.';
    }
  }

  function restoreState() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved !== 'object') return;
      state = Object.assign(copyInitial(), saved);
      state.transfer = Object.assign({}, initialState.transfer, saved.transfer || {});
      state.judgments = Array.isArray(saved.judgments) ? saved.judgments : [];
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
      state = copyInitial();
    }
  }

  function resetLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state = copyInitial();
    el.resetStatus.textContent = '';
    el.predictionStatus.textContent = '';
    el.explanationStatus.textContent = '';
    el.transferStatus.textContent = '';
    renderAll();
    el.resetStatus.textContent = 'This lab’s saved session data has been cleared.';
    byId('prediction-heading').focus();
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  }

  document.addEventListener('DOMContentLoaded', initialize);
})();
