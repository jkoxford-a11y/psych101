/* Classical Conditioning Simulator */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch06-classical-conditioning';

  const simulationConfig = {
    acquisitionTrialsRequired: 8,
    extinctionTrialsRequired: 8,
    acquisitionRate: 0.28,
    extinctionRate: 0.24,
    recoveryShare: 0.35,
    maxStrength: 100
  };

  const initialState = {
    committed: false,
    acquisitionPrediction: '',
    extinctionPrediction: '',
    phase: 'acquisition',
    trialCount: 0,
    crStrength: 0,
    peakStrength: 0,
    history: [{ trial: 0, phase: 'Baseline', strength: 0 }],
    log: ['Baseline: The tone is neutral. CR strength starts at 0%.'],
    explanation: '',
    transfer: ''
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
    elements.acquisitionPrediction = document.getElementById('acquisition-prediction');
    elements.extinctionPrediction = document.getElementById('extinction-prediction');
    elements.commitPredictions = document.getElementById('commit-predictions');
    elements.predictionStatus = document.getElementById('prediction-status');
    elements.simulatorPanel = document.getElementById('simulator-panel');
    elements.phaseStatus = document.getElementById('phase-status');
    elements.trialStatus = document.getElementById('trial-status');
    elements.phaseSummary = document.getElementById('phase-summary');
    elements.currentPhase = document.getElementById('current-phase');
    elements.trialCount = document.getElementById('trial-count');
    elements.crStrength = document.getElementById('cr-strength');
    elements.graphSummary = document.getElementById('graph-summary');
    elements.curveLine = document.getElementById('curve-line');
    elements.curvePoints = document.getElementById('curve-points');
    elements.phaseMarkers = document.getElementById('phase-markers');
    elements.runAcquisition = document.getElementById('run-acquisition');
    elements.runExtinction = document.getElementById('run-extinction');
    elements.runRecovery = document.getElementById('run-recovery');
    elements.eventList = document.getElementById('event-list');
    elements.explainPanel = document.getElementById('explain-panel');
    elements.explanationResponse = document.getElementById('explanation-response');
    elements.saveExplanation = document.getElementById('save-explanation');
    elements.explanationStatus = document.getElementById('explanation-status');
    elements.transferPanel = document.getElementById('transfer-panel');
    elements.completionSummary = document.getElementById('completion-summary');
    elements.transferResponse = document.getElementById('transfer-response');
    elements.saveTransfer = document.getElementById('save-transfer');
    elements.restartLab = document.getElementById('restart-lab');
    elements.transferStatus = document.getElementById('transfer-status');
  }

  function bindEvents() {
    elements.commitPredictions.addEventListener('click', commitPredictions);
    elements.runAcquisition.addEventListener('click', runAcquisitionTrial);
    elements.runExtinction.addEventListener('click', runExtinctionTrial);
    elements.runRecovery.addEventListener('click', runSpontaneousRecoveryTest);
    elements.saveExplanation.addEventListener('click', saveExplanation);
    elements.saveTransfer.addEventListener('click', saveTransfer);
    elements.restartLab.addEventListener('click', restartLab);
  }

  function commitPredictions() {
    const acquisitionPrediction = elements.acquisitionPrediction.value.trim();
    const extinctionPrediction = elements.extinctionPrediction.value.trim();

    if (!acquisitionPrediction) {
      elements.predictionStatus.textContent = 'Write your acquisition prediction before committing.';
      elements.acquisitionPrediction.focus();
      return;
    }

    if (!extinctionPrediction) {
      elements.predictionStatus.textContent = 'Write your extinction prediction before committing.';
      elements.extinctionPrediction.focus();
      return;
    }

    state.committed = true;
    state.acquisitionPrediction = acquisitionPrediction;
    state.extinctionPrediction = extinctionPrediction;
    state.log.push('Predictions committed. Acquisition controls are now available.');
    saveState();
    renderAll();
    document.getElementById('sim-heading').focus();
  }

  function runAcquisitionTrial() {
    if (!state.committed || state.phase !== 'acquisition') {
      return;
    }

    state.trialCount += 1;
    state.crStrength = approachTarget(state.crStrength, simulationConfig.maxStrength, simulationConfig.acquisitionRate);
    state.peakStrength = Math.max(state.peakStrength, state.crStrength);
    state.history.push({ trial: state.trialCount, phase: 'Acquisition', strength: state.crStrength });
    state.log.push(`Acquisition trial ${countPhaseTrials('Acquisition')}: CS tone plus US air puff. UR blink occurs; CR strength rises to ${formatStrength(state.crStrength)}.`);

    if (countPhaseTrials('Acquisition') >= simulationConfig.acquisitionTrialsRequired) {
      state.phase = 'extinction';
      state.log.push('Acquisition complete. The tone alone now produces a conditioned response. Begin CS-alone extinction trials.');
    }

    saveState();
    renderAll();
  }

  function runExtinctionTrial() {
    if (!state.committed || state.phase !== 'extinction') {
      return;
    }

    state.trialCount += 1;
    state.crStrength = approachTarget(state.crStrength, 0, simulationConfig.extinctionRate);
    state.history.push({ trial: state.trialCount, phase: 'Extinction', strength: state.crStrength });
    state.log.push(`Extinction trial ${countPhaseTrials('Extinction')}: CS tone alone. No US follows, so responding weakens to ${formatStrength(state.crStrength)}.`);

    if (countPhaseTrials('Extinction') >= simulationConfig.extinctionTrialsRequired) {
      state.phase = 'recovery-ready';
      state.log.push('Extinction reduced the CR, but the original association has not been erased. Run the delay test.');
    }

    saveState();
    renderAll();
  }

  function runSpontaneousRecoveryTest() {
    if (!state.committed || state.phase !== 'recovery-ready') {
      return;
    }

    state.trialCount += 1;
    const recoveredStrength = Math.max(state.crStrength, state.peakStrength * simulationConfig.recoveryShare);
    state.crStrength = Math.min(recoveredStrength, simulationConfig.maxStrength);
    state.history.push({ trial: state.trialCount, phase: 'Spontaneous recovery', strength: state.crStrength });
    state.log.push(`Spontaneous recovery test after a simulated delay: CS tone alone produces a partial CR of ${formatStrength(state.crStrength)}.`);
    state.log.push('Key idea: extinction did not erase the original CS–CR association. Instead, it created a new, competing inhibitory connection — the CS now predicts “nothing coming.” After a delay, that inhibitory learning weakens faster than the original excitatory one, so the original association partially resurfaces. This is also why context matters: extinction learned in one setting often does not fully transfer to a new one, because the original association is still intact underneath.');
    state.phase = 'complete';
    saveState();
    renderAll();
    elements.explainPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function saveExplanation() {
    state.explanation = elements.explanationResponse.value.trim();
    saveState();
    elements.explanationStatus.textContent = state.explanation ? 'Explanation saved in this browser session.' : 'Explanation cleared.';
  }

  function saveTransfer() {
    state.transfer = elements.transferResponse.value.trim();
    saveState();
    elements.transferStatus.textContent = state.transfer ? 'Transfer response saved in this browser session.' : 'Transfer response cleared.';
  }

  function restartLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state = copyInitialState();
    elements.predictionStatus.textContent = '';
    elements.explanationStatus.textContent = '';
    elements.transferStatus.textContent = '';
    renderAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderAll() {
    renderPredictionState();
    renderSimulatorState();
    renderCurve();
    renderLog();
    renderReflectionPanels();
  }

  function renderPredictionState() {
    elements.acquisitionPrediction.value = state.acquisitionPrediction;
    elements.extinctionPrediction.value = state.extinctionPrediction;
    elements.acquisitionPrediction.disabled = state.committed;
    elements.extinctionPrediction.disabled = state.committed;
    elements.commitPredictions.disabled = state.committed;
    elements.simulatorPanel.hidden = !state.committed;

    if (state.committed) {
      elements.predictionStatus.textContent = 'Predictions committed and saved for this session.';
    }
  }

  function renderSimulatorState() {
    const strengthText = formatStrength(state.crStrength);
    elements.phaseStatus.textContent = `Phase: ${phaseLabel(state.phase)}`;
    elements.trialStatus.textContent = `CR strength: ${strengthText}`;
    elements.phaseSummary.textContent = phaseSummary(state.phase);
    elements.currentPhase.textContent = phaseLabel(state.phase);
    elements.trialCount.textContent = String(state.trialCount);
    elements.crStrength.textContent = strengthText;
    elements.graphSummary.textContent = `${phaseLabel(state.phase)}. ${state.trialCount} trial${state.trialCount === 1 ? '' : 's'} completed. CR strength is ${strengthText}.`;
    elements.runAcquisition.disabled = !state.committed || state.phase !== 'acquisition';
    elements.runExtinction.disabled = !state.committed || state.phase !== 'extinction';
    elements.runRecovery.disabled = !state.committed || state.phase !== 'recovery-ready';
  }

  function renderCurve() {
    const points = state.history.map(pointForHistoryItem);
    const path = points.map(function (point, index) {
      return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
    }).join(' ');

    elements.curveLine.setAttribute('d', path);
    elements.curvePoints.innerHTML = '';
    elements.phaseMarkers.innerHTML = '';

    points.forEach(function (point) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('class', 'curve-point');
      circle.setAttribute('cx', point.x);
      circle.setAttribute('cy', point.y);
      circle.setAttribute('r', '5');
      elements.curvePoints.appendChild(circle);
    });

    addPhaseMarker('Extinction', points);
    addPhaseMarker('Spontaneous recovery', points);
  }

  function renderLog() {
    elements.eventList.innerHTML = '';
    state.log.forEach(function (entry) {
      const listItem = document.createElement('li');
      listItem.textContent = entry;
      elements.eventList.appendChild(listItem);
    });
  }

  function renderReflectionPanels() {
    elements.explainPanel.hidden = state.phase !== 'complete';
    elements.transferPanel.hidden = state.phase !== 'complete';
    elements.completionSummary.textContent = `Summary: acquisition raised CR strength to ${formatStrength(state.peakStrength)}, extinction reduced responding to ${formatStrength(state.history.filter(function(h){ return h.phase === 'Extinction'; }).slice(-1)[0]?.strength ?? 0)}, and after a simulated delay the spontaneous recovery test showed a partial return at ${formatStrength(state.crStrength)}. That partial return is the evidence that extinction suppressed the response rather than deleting the underlying association.`;
    elements.explanationResponse.value = state.explanation;
    elements.transferResponse.value = state.transfer;
  }

  function approachTarget(current, target, rate) {
    return current + ((target - current) * rate);
  }

  function countPhaseTrials(phase) {
    return state.history.filter(function (item) {
      return item.phase === phase;
    }).length;
  }

  function pointForHistoryItem(item, index) {
    const maxTrials = simulationConfig.acquisitionTrialsRequired + simulationConfig.extinctionTrialsRequired + 1;
    const usableWidth = 620;
    const usableHeight = 230;
    const x = 60 + ((index / maxTrials) * usableWidth);
    const y = 260 - ((item.strength / simulationConfig.maxStrength) * usableHeight);
    return { x, y, phase: item.phase };
  }

  function addPhaseMarker(phase, points) {
    const firstIndex = state.history.findIndex(function (item) {
      return item.phase === phase;
    });

    if (firstIndex < 0) {
      return;
    }

    const point = points[firstIndex];
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('class', 'phase-marker');
    line.setAttribute('x1', point.x);
    line.setAttribute('y1', '35');
    line.setAttribute('x2', point.x);
    line.setAttribute('y2', '260');
    elements.phaseMarkers.appendChild(line);

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('class', 'curve-label');
    label.setAttribute('x', point.x + 6);
    label.setAttribute('y', phase === 'Extinction' ? '52' : '72');
    label.textContent = phase;
    elements.phaseMarkers.appendChild(label);
  }

  function phaseLabel(phase) {
    const labels = {
      acquisition: 'Acquisition',
      extinction: 'Extinction',
      'recovery-ready': 'Delay before spontaneous recovery',
      complete: 'Spontaneous recovery complete'
    };

    return labels[phase] || 'Acquisition';
  }

  function phaseSummary(phase) {
    if (phase === 'acquisition') {
      return 'Run CS-US pairings. The tone (CS) is followed by the air puff (US), so the learned blink (CR) strengthens.';
    }

    if (phase === 'extinction') {
      return 'Run CS-alone trials. The tone appears without the air puff, so the CR weakens. Extinction reduces responding; it does not erase learning.';
    }

    if (phase === 'recovery-ready') {
      return 'A simulated delay is ready. Test whether the CS alone produces a partial return of the CR.';
    }

    return 'Spontaneous recovery appeared: after a delay, the CS alone produced a partial CR.';
  }

  function formatStrength(value) {
    return `${Math.round(value)}%`;
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      elements.predictionStatus.textContent = 'Progress is available on this page but could not be saved for refresh.';
    }
  }

  function restoreState() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));

      if (saved && Array.isArray(saved.history) && Array.isArray(saved.log)) {
        state = Object.assign(copyInitialState(), saved);
      }
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
})();
