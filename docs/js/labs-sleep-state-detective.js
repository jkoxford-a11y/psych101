/* Sleep-State Detective Learning Lab */
(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch06-sleep-state-detective-v1';
  const LABELS = {
    n1: 'NREM 1',
    n2: 'NREM 2',
    n3: 'NREM 3',
    rem: 'ordinary REM sleep',
    'nrem-parasomnia': 'NREM arousal parasomnia',
    rbd: 'REM sleep behavior disorder',
    cataplexy: 'cataplexy: REM atonia intruding into wakefulness'
  };
  const OPENING_LABELS = { agree: 'agreed', disagree: 'disagreed', unsure: 'were unsure' };

  const CASES = [
    {
      name: 'Case 1 of 8',
      title: 'The drifting transition',
      description: 'A sleeper has just stopped responding. The EEG is slowing, the eyes make slow rolling movements, and muscle tone remains present. A brief hypnic jerk occurs.',
      eeg: 'Slowing transitional activity', eog: 'Slow rolling movements', emg: 'Present', context: 'Just after sleep onset; hypnic jerk',
      eegTrace: 'slow', eogTrace: 'rolling', emgTrace: 'tone', correct: 'n1',
      feedback: 'The combination of recent sleep onset, slowing EEG activity, slow eye movements, and preserved muscle tone identifies NREM 1.',
      tempting: 'A hypnic jerk can look dramatic, but it does not mean deep sleep or dream enactment. The broader physiological pattern matters.'
    },
    {
      name: 'Case 2 of 8',
      title: 'The spindle and K-complex',
      description: 'The EEG contains a brief burst of rhythmic activity followed later by a large isolated wave. Rapid eye movements are absent, and muscle tone is reduced but clearly present.',
      eeg: 'Sleep spindle and K-complex', eog: 'No rapid eye movements', emg: 'Reduced but present', context: 'Middle portion of a sleep cycle',
      eegTrace: 'spindle', eogTrace: 'flat', emgTrace: 'tone-low', correct: 'n2',
      feedback: 'Sleep spindles and K-complexes are the defining teaching cues for NREM 2. They are organized EEG events, not meaningless noise.',
      tempting: 'Reduced muscle activity occurs in several sleep states. It is the spindle and K-complex—not low movement alone—that discriminates NREM 2.'
    },
    {
      name: 'Case 3 of 8',
      title: 'Deep early-night sleep',
      description: 'Large, slow EEG waves dominate. Rapid eye movements are absent. The sleeper is difficult to awaken, and the recording occurs during the first third of the night.',
      eeg: 'Large, slow delta waves', eog: 'No rapid eye movements', emg: 'Present', context: 'Early night; difficult to awaken',
      eegTrace: 'delta', eogTrace: 'flat', emgTrace: 'tone-low', correct: 'n3',
      feedback: 'High-amplitude, slow delta activity and difficulty awakening identify NREM 3, the deepest NREM stage.',
      tempting: 'Deep sleep is not the stage with the most vivid dreaming. REM has a wake-like EEG pattern rather than dominant delta waves.'
    },
    {
      name: 'Case 4 of 8',
      title: 'An active brain and quiet body',
      description: 'The EEG is fast and low voltage, the eyes move rapidly, and voluntary muscle activity is nearly absent. When awakened, the sleeper reports a vivid dream.',
      eeg: 'Fast, low-voltage, wake-like', eog: 'Rapid eye movements', emg: 'Near-total atonia', context: 'Later sleep cycle; vivid dream report',
      eegTrace: 'fast', eogTrace: 'rapid', emgTrace: 'atonia', correct: 'rem',
      feedback: 'Wake-like EEG activity plus rapid eye movements and REM atonia is the classic ordinary REM pattern.',
      tempting: 'The vivid dream report supports the classification, but the physiological combination is stronger evidence than dream content alone.'
    },
    {
      name: 'Case 5 of 8',
      title: 'Walking without dream enactment',
      description: 'At 1:00 a.m., a child sits up and walks into the hallway. The episode begins from delta-wave sleep. The child is confused when awakened and has little coherent dream recall.',
      eeg: 'Delta activity before partial arousal', eog: 'No REM pattern', emg: 'Active during partial arousal', context: 'First third of night; confusion; little recall',
      eegTrace: 'delta-break', eogTrace: 'flat', emgTrace: 'active-late', correct: 'nrem-parasomnia',
      feedback: 'The episode begins from deep NREM sleep early in the night, so it is an NREM arousal parasomnia. The person is partially aroused rather than acting out a REM dream.',
      tempting: 'Visible movement is not enough to infer dream enactment. The pre-event sleep stage and absence of REM physiology reverse the naive interpretation.'
    },
    {
      name: 'Case 6 of 8',
      title: 'A night terror',
      description: 'Early in the night, a sleeper abruptly screams, sits upright, and shows intense autonomic arousal. The event begins from deep slow-wave sleep, and little is recalled the next morning.',
      eeg: 'Deep slow-wave activity before arousal', eog: 'No REM pattern', emg: 'Abrupt activation', context: 'Early night; intense arousal; limited recall',
      eegTrace: 'delta-break', eogTrace: 'flat', emgTrace: 'burst', correct: 'nrem-parasomnia',
      feedback: 'Night terrors are NREM arousal parasomnias. They emerge from deep NREM sleep and usually produce less coherent recall than REM nightmares.',
      tempting: 'The emotional intensity resembles a nightmare, but timing, recall, and the originating stage distinguish the two.'
    },
    {
      name: 'Case 7 of 8',
      title: 'Dream enactment',
      description: 'At 5:00 a.m., the EEG and eye movements show REM sleep, but muscle activity remains high. The sleeper kicks and reaches, then awakens and reports fighting an attacker in a vivid dream.',
      eeg: 'Fast, low-voltage REM pattern', eog: 'Rapid eye movements', emg: 'Unexpectedly high during REM', context: 'Late night; movement matches dream report',
      eegTrace: 'fast', eogTrace: 'rapid', emgTrace: 'active', correct: 'rbd',
      feedback: 'REM physiology is present, but normal REM atonia has failed. That combination—not movement alone—defines REM sleep behavior disorder in this teaching case.',
      tempting: 'The behavior may resemble sleepwalking from outside. The decisive evidence is that it occurs during REM with abnormal muscle activity.'
    },
    {
      name: 'Case 8 of 8',
      title: 'A REM feature crosses into wakefulness',
      description: 'A person is awake, laughing, and fully conscious when voluntary muscle tone suddenly collapses for several seconds. Awareness is retained throughout the episode.',
      eeg: 'Wake-like activity with retained awareness', eog: 'Awake; no sleep-stage transition required', emg: 'Sudden atonia', context: 'Strong emotion while awake',
      eegTrace: 'fast', eogTrace: 'awake', emgTrace: 'collapse', correct: 'cataplexy',
      feedback: 'Cataplexy is REM-like muscle atonia intruding into wakefulness, often triggered by strong emotion. Consciousness is retained.',
      tempting: 'The person is not sleepwalking and is not in ordinary REM sleep. The defining clue is sudden atonia during confirmed wakefulness.'
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
      'prediction-reason', 'commit-prediction', 'prediction-status', 'case-panel',
      'case-counter', 'case-status', 'case-name', 'case-title', 'case-description',
      'stat-eeg', 'stat-eog', 'stat-emg', 'stat-context', 'eeg-trace', 'eog-trace',
      'emg-trace', 'check-case', 'feedback-panel', 'feedback-heading', 'feedback-text',
      'tempting-text', 'next-case', 'event-log', 'concept-panel', 'explain-panel',
      'explanation-response', 'save-explanation', 'explanation-status', 'transfer-panel',
      'completion-summary', 'transfer-response', 'save-transfer', 'restart-lab',
      'transfer-status'
    ].forEach(function (id) { el[id] = document.getElementById(id); });
    el.openingChoices = Array.from(document.querySelectorAll('input[name="opening-prediction"]'));
    el.classChoices = Array.from(document.querySelectorAll('input[name="classification"]'));
  }

  function bind() {
    el['commit-prediction'].addEventListener('click', commitPrediction);
    el['check-case'].addEventListener('click', checkCase);
    el['next-case'].addEventListener('click', nextCase);
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
      status('prediction-status', 'Choose agree, disagree, or unsure.');
      el.openingChoices[0].focus();
      return;
    }
    if (!reason) {
      status('prediction-status', 'State what physiological evidence you would need before committing.');
      el['prediction-reason'].focus();
      return;
    }
    state.committed = true;
    state.openingPrediction = prediction;
    state.predictionReason = reason;
    state.phase = 'cases';
    state.eventLog = ['Opening prediction committed. Sleep-state classification begins.'];
    save();
    renderAll();
    focus('case-heading');
  }

  function checkCase() {
    if (state.phase !== 'cases' || state.responses[state.currentIndex]) return;
    const choice = selected(el.classChoices);
    if (!choice) {
      status('case-status', 'Choose the best classification before checking.');
      el.classChoices[0].focus();
      return;
    }
    const item = CASES[state.currentIndex];
    state.responses[state.currentIndex] = { choice: choice, correct: choice === item.correct };
    state.eventLog.push(
      `Case ${state.currentIndex + 1}, ${item.title}: chose ${LABELS[choice]}; ` +
      `best classification: ${LABELS[item.correct]}; ${choice === item.correct ? 'correct' : 'revision needed'}. ` +
      `EEG: ${item.eeg}; EOG: ${item.eog}; EMG: ${item.emg}; context: ${item.context}.`
    );
    save();
    renderAll();
    el['feedback-panel'].focus();
  }

  function nextCase() {
    if (!state.responses[state.currentIndex]) return;
    if (state.currentIndex === CASES.length - 1) {
      state.phase = 'explain';
      save();
      renderAll();
      focus('concept-heading');
      return;
    }
    state.currentIndex += 1;
    save();
    renderAll();
    focus('case-heading');
  }

  function saveExplanation() {
    const value = el['explanation-response'].value.trim();
    if (!value) {
      status('explanation-status', 'Explain why movement alone is not sufficient evidence.');
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
    renderCase();
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

  function renderCase() {
    const visible = state.phase === 'cases';
    el['case-panel'].hidden = !visible;
    if (!visible) return;

    const item = CASES[state.currentIndex];
    const response = state.responses[state.currentIndex];
    el['case-counter'].textContent = `Case ${state.currentIndex + 1} of ${CASES.length}`;
    el['case-name'].textContent = item.name;
    el['case-title'].textContent = item.title;
    el['case-description'].textContent = item.description;
    el['stat-eeg'].textContent = item.eeg;
    el['stat-eog'].textContent = item.eog;
    el['stat-emg'].textContent = item.emg;
    el['stat-context'].textContent = item.context;
    el['eeg-trace'].setAttribute('d', trace(item.eegTrace, 105));
    el['eog-trace'].setAttribute('d', trace(item.eogTrace, 205));
    el['emg-trace'].setAttribute('d', trace(item.emgTrace, 305));

    el.classChoices.forEach(function (choice) {
      choice.checked = Boolean(response && response.choice === choice.value);
      choice.disabled = Boolean(response);
    });
    el['check-case'].disabled = Boolean(response);
    el['feedback-panel'].hidden = !response;
    status('case-status', response ? 'Feedback available. Your classification is frozen.' : 'Use the physiological pattern, not one vivid behavior.');

    if (response) {
      el['feedback-panel'].classList.toggle('is-correct', response.correct);
      el['feedback-panel'].classList.toggle('is-incorrect', !response.correct);
      el['feedback-heading'].textContent = response.correct ? 'Correct classification' : 'Revise the state inference';
      el['feedback-text'].textContent = `${LABELS[item.correct]}: ${item.feedback}`;
      el['tempting-text'].textContent = `Why the tempting shortcut fails: ${item.tempting}`;
      el['next-case'].textContent = state.currentIndex === CASES.length - 1 ? 'Continue to explanation' : 'Next case';
    }
  }

  function trace(type, y) {
    const x0 = 100;
    if (type === 'flat') return `M${x0} ${y} L720 ${y}`;
    if (type === 'atonia') return `M${x0} ${y} L720 ${y}`;
    if (type === 'awake') return `M${x0} ${y} C210 ${y - 8} 300 ${y + 7} 410 ${y - 5} C520 ${y + 6} 615 ${y - 7} 720 ${y}`;
    if (type === 'slow') return wavePath(y, 34, 7);
    if (type === 'rolling') return wavePath(y, 24, 3);
    if (type === 'rapid') return wavePath(y, 16, 13);
    if (type === 'fast') return wavePath(y, 10, 18);
    if (type === 'delta') return wavePath(y, 46, 5);
    if (type === 'tone') return wavePath(y, 9, 15);
    if (type === 'tone-low') return wavePath(y, 5, 12);
    if (type === 'active') return wavePath(y, 18, 16);
    if (type === 'spindle') return spindlePath(y);
    if (type === 'delta-break') return deltaBreakPath(y);
    if (type === 'active-late') return activeLatePath(y);
    if (type === 'burst') return burstPath(y);
    if (type === 'collapse') return collapsePath(y);
    return `M${x0} ${y} L720 ${y}`;
  }

  function wavePath(y, amplitude, cycles) {
    const start = 100;
    const end = 720;
    const step = (end - start) / (cycles * 2);
    let d = `M${start} ${y}`;
    for (let i = 1; i <= cycles * 2; i += 1) {
      const x = start + step * i;
      const yy = y + (i % 2 ? -amplitude : amplitude);
      d += ` L${x.toFixed(1)} ${yy}`;
    }
    return d;
  }

  function spindlePath(y) {
    return `M100 ${y} L210 ${y} L225 ${y - 8} L240 ${y + 8} L255 ${y - 10} L270 ${y + 10} L285 ${y - 8} L300 ${y + 8} L315 ${y} L405 ${y} L430 ${y - 45} L455 ${y + 38} L480 ${y} L720 ${y}`;
  }

  function deltaBreakPath(y) {
    return `M100 ${y} L145 ${y - 44} L190 ${y + 44} L235 ${y - 44} L280 ${y + 44} L325 ${y - 44} L370 ${y + 44} L415 ${y - 30} L455 ${y + 20} L490 ${y - 8} L530 ${y + 10} L570 ${y - 6} L610 ${y + 8} L660 ${y - 5} L720 ${y}`;
  }

  function activeLatePath(y) {
    return `M100 ${y} L430 ${y} L450 ${y - 16} L470 ${y + 18} L490 ${y - 20} L510 ${y + 15} L535 ${y - 22} L560 ${y + 18} L590 ${y - 15} L620 ${y + 20} L650 ${y - 17} L680 ${y + 14} L720 ${y}`;
  }

  function burstPath(y) {
    return `M100 ${y} L360 ${y} L385 ${y - 38} L405 ${y + 42} L425 ${y - 32} L445 ${y + 36} L465 ${y - 28} L490 ${y + 30} L520 ${y - 18} L550 ${y + 20} L600 ${y - 10} L650 ${y + 8} L720 ${y}`;
  }

  function collapsePath(y) {
    return `M100 ${y - 10} L170 ${y + 8} L240 ${y - 12} L310 ${y + 9} L370 ${y - 8} L410 ${y} L440 ${y} L720 ${y}`;
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
      `You classified ${correct} of ${CASES.length} cases correctly. You originally ${OPENING_LABELS[state.openingPrediction]} with the sleepwalking claim. ` +
      'The central result is that movement is not a sleep stage: ordinary sleepwalking begins from deep NREM sleep, whereas dream enactment requires REM physiology combined with failure of normal REM atonia.';
    el['transfer-response'].value = state.transfer;
  }

  function status(id, text) { el[id].textContent = text; }

  function save() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      status(state.phase === 'prediction' ? 'prediction-status' : 'case-status', 'Progress remains on this page but could not be saved for refresh.');
    }
  }

  function restore() {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const value = JSON.parse(saved);
      const validIndex = Number.isInteger(value.currentIndex) && value.currentIndex >= 0 && value.currentIndex < CASES.length;
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
