/* Process S and Process C Learning Lab */
(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch06-process-s-process-c-v1';
  const PROCESS_LABELS = {
    s: 'Process S changed',
    c: 'Process C changed',
    both: 'both Process S and Process C changed',
    neither: 'neither underlying curve was reduced or shifted'
  };
  const OPENING_LABELS = {
    eliminated: 'sleep pressure was eliminated',
    reduced: 'sleep pressure was substantially reduced',
    masked: 'sleep pressure remained high but was partly masked',
    reset: 'the circadian clock immediately reset'
  };

  const SCENARIOS = [
    {
      name: 'Scenario 1 of 4',
      title: 'A normal day awake',
      description: 'You wake at 7:00 a.m., remain awake all day, and plan to sleep at 11:00 p.m. During the afternoon, circadian alerting partly opposes the sleep pressure that has already accumulated.',
      process: 's',
      outcomeQuestion: 'What should happen as bedtime approaches?',
      outcomes: [
        ['low', 'Sleep pressure should stay low because the circadian system controls all sleepiness.'],
        ['rising', 'Process S should rise with time awake, while Process C eventually stops opposing sleep.'],
        ['reset', 'Process C should reset every few hours.']
      ],
      correctOutcome: 'rising',
      statS: 'Rises across wakefulness',
      statC: 'Afternoon alerting, then evening decline',
      experience: 'Increasing sleep tendency near bedtime',
      feedback: 'Time awake directly increases Process S. Process C follows its own daily timing: it can oppose sleep pressure during the biological day, then becomes less alerting toward night.',
      distinction: 'Feeling reasonably alert in the afternoon does not mean Process S is low. It can mean the circadian alerting signal is temporarily opposing it.',
      sPath: 'M70 255 C210 235 360 195 500 145 C595 112 660 92 715 78',
      cPath: 'M70 220 C190 135 330 92 455 118 C570 142 645 205 715 245',
      markerX: 680,
      markerLabel: 'Bedtime',
      visual: 'Across a normal day, Process S rises with time awake. Process C supplies substantial alerting during the day and declines toward biological night, so the two signals increasingly favor sleep near bedtime.'
    },
    {
      name: 'Scenario 2 of 4',
      title: 'Caffeine at 5:00 p.m.',
      description: 'You follow the same schedule but drink caffeine at 5:00 p.m. Caffeine blocks adenosine receptors. It can change how strongly you feel the accumulated pressure without clearing the underlying need for sleep.',
      process: 'neither',
      outcomeQuestion: 'Which outcome best fits the mechanism?',
      outcomes: [
        ['clear', 'The Process S curve should drop because caffeine clears adenosine.'],
        ['mask', 'The Process S curve should remain high, while subjective alertness temporarily improves.'],
        ['shift', 'The Process C curve should immediately shift by several hours.']
      ],
      correctOutcome: 'mask',
      statS: 'Still high; not discharged',
      statC: 'Not immediately reset',
      experience: 'Pressure partly masked; later rebound possible',
      feedback: 'Caffeine acts within the homeostatic sleep-pressure pathway by blocking adenosine receptors, but it does not discharge the accumulated pressure. In this simplified model, neither underlying curve falls or shifts.',
      distinction: 'Masking a signal is not the same as removing its cause. The drowsiness can return as caffeine wears off because Process S remained high.',
      sPath: 'M70 255 C210 235 360 195 500 145 C595 112 660 92 715 78',
      cPath: 'M70 220 C190 135 330 92 455 118 C570 142 645 205 715 245',
      markerX: 500,
      markerLabel: 'Caffeine',
      visual: 'Caffeine does not lower the schematic Process S curve or immediately shift Process C. It temporarily masks part of the experienced effect of high sleep pressure.'
    },
    {
      name: 'Scenario 3 of 4',
      title: 'A 90-minute nap at 5:00 p.m.',
      description: 'Instead of caffeine, you sleep from 5:00 to 6:30 p.m. The nap occurs while your circadian system is still producing an alerting signal.',
      process: 's',
      outcomeQuestion: 'What should the nap change most directly?',
      outcomes: [
        ['discharge', 'It should discharge some Process S and may make midnight sleep harder.'],
        ['clock', 'It should permanently reset Process C to a new time zone.'],
        ['nothing', 'It should have no effect because only overnight sleep reduces sleep pressure.']
      ],
      correctOutcome: 'discharge',
      statS: 'Partly reduced by sleep',
      statC: 'Continues on its prior schedule',
      experience: 'Less pressure at ordinary bedtime',
      feedback: 'Sleep discharges some Process S even when it occurs as a nap. A late or long nap can therefore reduce the pressure available to help initiate nighttime sleep.',
      distinction: 'A nap can alter the homeostatic component without meaningfully shifting the circadian clock. Those are different mechanisms.',
      sPath: 'M70 255 C210 235 350 190 485 145 L520 205 C585 185 650 150 715 118',
      cPath: 'M70 220 C190 135 330 92 455 118 C570 142 645 205 715 245',
      markerX: 500,
      markerLabel: 'Nap',
      visual: 'The Process S curve rises during wakefulness, falls during the nap, and begins rising again afterward. Process C remains on its previous daily schedule.'
    },
    {
      name: 'Scenario 4 of 4',
      title: 'Eastward travel and morning light',
      description: 'After flying several time zones east, local morning arrives while your body clock is still running on Chicago time. Repeated morning light provides a timing cue that gradually entrains the SCN to the new schedule.',
      process: 'c',
      outcomeQuestion: 'What should repeated well-timed morning light do?',
      outcomes: [
        ['replace', 'Replace lost sleep by lowering Process S to zero.'],
        ['shift-earlier', 'Shift Process C earlier over repeated days; Process S still depends on sleep and time awake.'],
        ['instant', 'Instantly synchronize both processes after one exposure.']
      ],
      correctOutcome: 'shift-earlier',
      statS: 'Depends on recent sleep and wake time',
      statC: 'Gradually shifts earlier',
      experience: 'Less circadian conflict over several days',
      feedback: 'Light is the major environmental cue for circadian entrainment. Appropriately timed morning light can shift Process C earlier, but it does not erase sleep debt or instantly synchronize the body clock.',
      distinction: 'Jet lag is a conflict between biological time and local time. The clock generally shifts gradually, while Process S continues to respond to actual sleep and wakefulness.',
      sPath: 'M70 245 C220 220 360 180 500 135 C600 105 665 88 715 76',
      cPath: 'M70 238 C175 165 290 112 405 105 C515 100 625 155 715 218',
      markerX: 185,
      markerLabel: 'Morning light',
      visual: 'Repeated morning light shifts the circadian alerting curve earlier relative to local clock time. The Process S curve remains governed by recent sleep and time awake.'
    }
  ];

  let state = initialState();
  const el = {};

  function initialState() {
    return {
      committed: false,
      openingPrediction: '',
      predictionReason: '',
      phase: 'prediction',
      currentIndex: 0,
      responses: [],
      eventLog: [],
      explanation: '',
      explanationCommitted: false,
      transfer: ''
    };
  }

  function init() {
    cache();
    restore();
    bind();
    renderAll();
  }

  function cache() {
    [
      'prediction-reason', 'commit-prediction', 'prediction-status', 'scenario-panel',
      'scenario-counter', 'scenario-status', 'scenario-name', 'scenario-title',
      'scenario-description', 'outcome-question', 'outcome-options', 'check-scenario',
      'scenario-result', 'stat-s', 'stat-c', 'stat-experience', 'process-s-path',
      'process-c-path', 'intervention-marker', 'intervention-label', 'visual-equivalent',
      'feedback-panel', 'feedback-heading', 'feedback-text', 'distinction-text',
      'next-scenario', 'event-log', 'concept-panel', 'explain-panel',
      'explanation-response', 'save-explanation', 'explanation-status', 'transfer-panel',
      'completion-summary', 'transfer-response', 'save-transfer', 'restart-lab',
      'transfer-status'
    ].forEach(function (id) { el[id] = document.getElementById(id); });
    el.openingChoices = Array.from(document.querySelectorAll('input[name="opening-prediction"]'));
    el.processChoices = Array.from(document.querySelectorAll('input[name="process-choice"]'));
  }

  function bind() {
    el['commit-prediction'].addEventListener('click', commitPrediction);
    el['check-scenario'].addEventListener('click', checkScenario);
    el['next-scenario'].addEventListener('click', nextScenario);
    el['save-explanation'].addEventListener('click', saveExplanation);
    el['save-transfer'].addEventListener('click', saveTransfer);
    el['restart-lab'].addEventListener('click', restart);
  }

  function selected(list) {
    const item = list.find(function (choice) { return choice.checked; });
    return item ? item.value : '';
  }

  function commitPrediction() {
    const prediction = selected(el.openingChoices);
    const reason = el['prediction-reason'].value.trim();
    if (!prediction) {
      status('prediction-status', 'Choose what you think happened to the underlying sleep pressure.');
      el.openingChoices[0].focus();
      return;
    }
    if (!reason) {
      status('prediction-status', 'Write a brief explanation before committing.');
      el['prediction-reason'].focus();
      return;
    }
    state.committed = true;
    state.openingPrediction = prediction;
    state.predictionReason = reason;
    state.phase = 'scenarios';
    state.eventLog = ['Opening prediction committed. Scenario testing begins.'];
    save();
    renderAll();
    focus('scenario-heading');
  }

  function checkScenario() {
    if (state.phase !== 'scenarios' || state.responses[state.currentIndex]) return;
    const processChoice = selected(el.processChoices);
    const outcomeChoices = Array.from(document.querySelectorAll('input[name="outcome-choice"]'));
    const outcomeChoice = selected(outcomeChoices);
    if (!processChoice) {
      status('scenario-status', 'Choose which underlying curve changes.');
      el.processChoices[0].focus();
      return;
    }
    if (!outcomeChoice) {
      status('scenario-status', 'Choose the expected outcome.');
      if (outcomeChoices[0]) outcomeChoices[0].focus();
      return;
    }
    const item = SCENARIOS[state.currentIndex];
    const correct = processChoice === item.process && outcomeChoice === item.correctOutcome;
    state.responses[state.currentIndex] = {
      processChoice: processChoice,
      outcomeChoice: outcomeChoice,
      correct: correct
    };
    state.eventLog.push(
      `Scenario ${state.currentIndex + 1}, ${item.title}: chose ${PROCESS_LABELS[processChoice]}; ` +
      `${correct ? 'classification matched both parts of the model' : 'at least one part needs revision'}. ` +
      item.visual
    );
    save();
    renderAll();
    el['scenario-result'].focus();
  }

  function nextScenario() {
    if (!state.responses[state.currentIndex]) return;
    if (state.currentIndex === SCENARIOS.length - 1) {
      state.phase = 'explain';
      save();
      renderAll();
      focus('concept-heading');
      return;
    }
    state.currentIndex += 1;
    save();
    renderAll();
    focus('scenario-heading');
  }

  function saveExplanation() {
    const value = el['explanation-response'].value.trim();
    if (!value) {
      status('explanation-status', 'Explain why alertness and underlying sleep pressure can diverge.');
      el['explanation-response'].focus();
      return;
    }
    state.explanation = value;
    state.explanationCommitted = true;
    state.phase = 'transfer';
    save();
    renderAll();
    focus('transfer-heading');
  }

  function saveTransfer() {
    state.transfer = el['transfer-response'].value.trim();
    save();
    status('transfer-status', state.transfer ? 'Transfer response saved in this browser session.' : 'Transfer response cleared.');
  }

  function restart() {
    sessionStorage.removeItem(STORAGE_KEY);
    state = initialState();
    renderAll();
    focus('prediction-heading');
  }

  function renderAll() {
    renderPrediction();
    renderScenario();
    renderLog();
    renderExplanation();
    renderTransfer();
  }

  function renderPrediction() {
    el.openingChoices.forEach(function (choice) {
      choice.checked = choice.value === state.openingPrediction;
      choice.disabled = state.committed;
    });
    el['prediction-reason'].value = state.predictionReason;
    el['prediction-reason'].disabled = state.committed;
    el['commit-prediction'].disabled = state.committed;
    status('prediction-status', state.committed ? 'Prediction committed and frozen for this browser session.' : '');
  }

  function renderScenario() {
    const visible = state.phase === 'scenarios';
    el['scenario-panel'].hidden = !visible;
    if (!visible) return;

    const item = SCENARIOS[state.currentIndex];
    const response = state.responses[state.currentIndex];
    el['scenario-counter'].textContent = `Scenario ${state.currentIndex + 1} of ${SCENARIOS.length}`;
    el['scenario-name'].textContent = item.name;
    el['scenario-title'].textContent = item.title;
    el['scenario-description'].textContent = item.description;
    el['outcome-question'].textContent = item.outcomeQuestion;
    renderOutcomeOptions(item, response);

    el.processChoices.forEach(function (choice) {
      choice.checked = Boolean(response && response.processChoice === choice.value);
      choice.disabled = Boolean(response);
    });
    el['check-scenario'].disabled = Boolean(response);
    el['scenario-result'].hidden = !response;
    status('scenario-status', response ? 'Feedback available. Your answers are frozen.' : 'Commit both parts before revealing the model.');

    if (response) {
      el['stat-s'].textContent = item.statS;
      el['stat-c'].textContent = item.statC;
      el['stat-experience'].textContent = item.experience;
      el['process-s-path'].setAttribute('d', item.sPath);
      el['process-c-path'].setAttribute('d', item.cPath);
      el['intervention-marker'].setAttribute('x1', item.markerX);
      el['intervention-marker'].setAttribute('x2', item.markerX);
      el['intervention-label'].setAttribute('x', Math.max(80, item.markerX - 35));
      el['intervention-label'].textContent = item.markerLabel;
      el['visual-equivalent'].textContent = item.visual;
      el['feedback-panel'].classList.toggle('is-correct', response.correct);
      el['feedback-panel'].classList.toggle('is-incorrect', !response.correct);
      el['feedback-heading'].textContent = response.correct ? 'Model matched' : 'Revise the mechanism';
      el['feedback-text'].textContent = item.feedback;
      el['distinction-text'].textContent = item.distinction;
      el['next-scenario'].textContent = state.currentIndex === SCENARIOS.length - 1 ? 'Continue to explanation' : 'Next scenario';
    }
  }

  function renderOutcomeOptions(item, response) {
    el['outcome-options'].innerHTML = '';
    item.outcomes.forEach(function (option) {
      const label = document.createElement('label');
      label.className = 'option-row';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'outcome-choice';
      input.value = option[0];
      input.checked = Boolean(response && response.outcomeChoice === option[0]);
      input.disabled = Boolean(response);
      const span = document.createElement('span');
      span.textContent = option[1];
      label.appendChild(input);
      label.appendChild(span);
      el['outcome-options'].appendChild(label);
    });
  }

  function renderLog() {
    const list = el['event-log'].querySelector('ol');
    list.innerHTML = '';
    state.eventLog.forEach(function (text) {
      const li = document.createElement('li');
      li.textContent = text;
      list.appendChild(li);
    });
  }

  function renderExplanation() {
    const visible = state.phase === 'explain';
    el['concept-panel'].hidden = !visible;
    el['explain-panel'].hidden = !visible;
    el['explanation-response'].value = state.explanation;
    el['explanation-response'].disabled = state.explanationCommitted;
    el['save-explanation'].disabled = state.explanationCommitted;
  }

  function renderTransfer() {
    const visible = state.phase === 'transfer' && state.explanationCommitted;
    el['transfer-panel'].hidden = !visible;
    if (!visible) return;
    const correct = state.responses.filter(function (response) { return response && response.correct; }).length;
    el['completion-summary'].textContent =
      `You matched both parts of the simplified model in ${correct} of ${SCENARIOS.length} scenarios. ` +
      `Your opening prediction was that ${OPENING_LABELS[state.openingPrediction]}. ` +
      'The central result is that Process S and Process C are partly independent: sleep reduces homeostatic pressure, light shifts circadian timing, and caffeine can change experienced alertness without clearing accumulated pressure.';
    el['transfer-response'].value = state.transfer;
  }

  function status(id, text) { el[id].textContent = text; }

  function save() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      status(state.phase === 'prediction' ? 'prediction-status' : 'scenario-status', 'Progress remains on this page but could not be saved for refresh.');
    }
  }

  function restore() {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const value = JSON.parse(saved);
      const validIndex = Number.isInteger(value.currentIndex) && value.currentIndex >= 0 && value.currentIndex < SCENARIOS.length;
      if (value && Array.isArray(value.responses) && Array.isArray(value.eventLog) && validIndex) state = value;
      else sessionStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  function focus(id) {
    const heading = document.getElementById(id);
    if (heading) {
      heading.focus();
      heading.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
    }
  }

  function reduced() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  document.addEventListener('DOMContentLoaded', init);
}());
