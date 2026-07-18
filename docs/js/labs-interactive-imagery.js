/* Interactive Imagery Learning Lab */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch08-interactive-imagery-v1';
  const PAIRS_PER_ROUND = 6;
  const ROUND_CONFIG = [
    {
      key: 'natural',
      label: 'Your own strategy',
      heading: 'Use Your Own Strategy',
      intro: '<p>Study each pair so that seeing the first word later will help you recall the second. Use whatever strategy comes naturally. The lab will ask what you did after the recall test.</p>',
      studyInstruction: 'Study the pair so that the first word will later help you recall the second.',
      sceneRequired: false
    },
    {
      key: 'interaction',
      label: 'Interactive scene',
      heading: 'Make the Pair Interact',
      intro: '<p>This time, place both items into one event. Do not merely picture them beside one another. Make one item act on, contain, carry, strike, cover, or otherwise interact with the other.</p><p><strong>Example:</strong> for <em>book–ocean</em>, imagine a wave splashing across an open book.</p>',
      studyInstruction: 'Construct one ordinary event in which the two items clearly interact.',
      sceneRequired: true,
      sceneLabel: 'Describe the ordinary interaction in a few words.'
    },
    {
      key: 'bizarre',
      label: 'Bizarre interaction',
      heading: 'Make the Interaction Bizarre',
      intro: '<p>Keep the two items in one event, but make the interaction impossible, exaggerated, or strange. The scene should remain clear enough that either item brings the other to mind.</p><p><strong>Example:</strong> for <em>book–ocean</em>, imagine a giant book floating as an island while waves crash against its pages.</p>',
      studyInstruction: 'Construct one impossible or exaggerated interaction that clearly binds the two items.',
      sceneRequired: true,
      sceneLabel: 'Describe the bizarre interaction in a few words.'
    }
  ];

  const PAIR_SETS = [
    [
      { cue: 'candle', target: 'bicycle' },
      { cue: 'piano', target: 'forest' },
      { cue: 'shoe', target: 'moon' },
      { cue: 'ladder', target: 'apple' },
      { cue: 'clock', target: 'river' },
      { cue: 'suitcase', target: 'cloud' }
    ],
    [
      { cue: 'hammer', target: 'cake' },
      { cue: 'rabbit', target: 'window' },
      { cue: 'spoon', target: 'mountain' },
      { cue: 'camera', target: 'garden' },
      { cue: 'pillow', target: 'train' },
      { cue: 'violin', target: 'desert' }
    ],
    [
      { cue: 'bottle', target: 'star' },
      { cue: 'chair', target: 'lake' },
      { cue: 'key', target: 'elephant' },
      { cue: 'umbrella', target: 'bread' },
      { cue: 'mirror', target: 'horse' },
      { cue: 'basket', target: 'volcano' }
    ]
  ];

  const DISTRACTOR_SETS = [
    [47, 18, 63, 24],
    [55, 32, 71, 46],
    [29, 84, 37, 62]
  ];

  let state = createInitialState();
  let interactionLocked = false;
  const elements = {};

  function createInitialState() {
    return {
      committed: false,
      predictionCount: '',
      predictionStrategy: '',
      phase: 'prediction',
      roundIndex: 0,
      studyIndex: 0,
      distractorIndex: 0,
      recallIndex: 0,
      rounds: PAIR_SETS.map(function (pairs, index) {
        return {
          key: ROUND_CONFIG[index].key,
          studyPairs: shuffle(pairs),
          recallPairs: [],
          sceneNotes: {},
          recallResponses: [],
          score: null,
          reflection: ''
        };
      }),
      baselineStrategy: '',
      explanation: '',
      explanationCommitted: false,
      transfer: '',
      lastStudyStatus: '',
      lastDistractorStatus: '',
      lastRecallStatus: '',
      lastRoundSummaryStatus: ''
    };
  }

  function initializeLab() {
    cacheElements();
    restoreState();
    ensureRecallOrders();
    bindEvents();
    renderAll();
  }

  function cacheElements() {
    elements.predictionCount = document.getElementById('prediction-count');
    elements.predictionStrategy = document.getElementById('prediction-strategy');
    elements.commitPrediction = document.getElementById('commit-prediction');
    elements.predictionStatus = document.getElementById('prediction-status');

    elements.roundIntroPanel = document.getElementById('round-intro-panel');
    elements.roundKicker = document.getElementById('round-kicker');
    elements.roundIntroHeading = document.getElementById('round-intro-heading');
    elements.roundIntroText = document.getElementById('round-intro-text');
    elements.startRound = document.getElementById('start-round');

    elements.studyPanel = document.getElementById('study-panel');
    elements.studyRoundStatus = document.getElementById('study-round-status');
    elements.studyCounter = document.getElementById('study-counter');
    elements.studyInstruction = document.getElementById('study-instruction');
    elements.cueWord = document.getElementById('cue-word');
    elements.targetWord = document.getElementById('target-word');
    elements.sceneEntryWrap = document.getElementById('scene-entry-wrap');
    elements.sceneEntryLabel = document.getElementById('scene-entry-label');
    elements.sceneEntry = document.getElementById('scene-entry');
    elements.nextStudyPair = document.getElementById('next-study-pair');
    elements.studyStatus = document.getElementById('study-status');

    elements.distractorPanel = document.getElementById('distractor-panel');
    elements.distractorRoundStatus = document.getElementById('distractor-round-status');
    elements.distractorCounter = document.getElementById('distractor-counter');
    elements.distractorNumber = document.getElementById('distractor-number');
    elements.distractorOdd = document.getElementById('distractor-odd');
    elements.distractorEven = document.getElementById('distractor-even');
    elements.distractorStatus = document.getElementById('distractor-status');

    elements.recallPanel = document.getElementById('recall-panel');
    elements.recallRoundStatus = document.getElementById('recall-round-status');
    elements.recallCounter = document.getElementById('recall-counter');
    elements.recallCue = document.getElementById('recall-cue');
    elements.recallEntry = document.getElementById('recall-entry');
    elements.submitRecall = document.getElementById('submit-recall');
    elements.dontRemember = document.getElementById('dont-remember');
    elements.recallStatus = document.getElementById('recall-status');

    elements.roundSummaryPanel = document.getElementById('round-summary-panel');
    elements.roundSummaryKicker = document.getElementById('round-summary-kicker');
    elements.roundScoreSummary = document.getElementById('round-score-summary');
    elements.baselineStrategyWrap = document.getElementById('baseline-strategy-wrap');
    elements.baselineStrategyChoices = Array.from(document.querySelectorAll('input[name="baseline-strategy"]'));
    elements.roundReflectionWrap = document.getElementById('round-reflection-wrap');
    elements.roundReflection = document.getElementById('round-reflection');
    elements.continueAfterRound = document.getElementById('continue-after-round');
    elements.roundSummaryStatus = document.getElementById('round-summary-status');

    elements.resultsPanel = document.getElementById('results-panel');
    elements.resultsSummary = document.getElementById('results-summary');
    elements.naturalScore = document.getElementById('natural-score');
    elements.interactionScore = document.getElementById('interaction-score');
    elements.bizarreScore = document.getElementById('bizarre-score');
    elements.differenceSummary = document.getElementById('difference-summary');
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
    elements.commitPrediction.addEventListener('click', commitPrediction);
    elements.startRound.addEventListener('click', startRound);
    elements.nextStudyPair.addEventListener('click', completeStudyPair);
    elements.distractorOdd.addEventListener('click', completeDistractorItem);
    elements.distractorEven.addEventListener('click', completeDistractorItem);
    elements.submitRecall.addEventListener('click', function () { submitRecall(false); });
    elements.dontRemember.addEventListener('click', function () { submitRecall(true); });
    elements.recallEntry.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        submitRecall(false);
      }
    });
    elements.continueAfterRound.addEventListener('click', continueAfterRound);
    elements.saveExplanation.addEventListener('click', saveExplanation);
    elements.saveTransfer.addEventListener('click', saveTransfer);
    elements.restartLab.addEventListener('click', restartLab);
  }

  function commitPrediction() {
    const count = elements.predictionCount.value;
    const strategy = elements.predictionStrategy.value.trim();

    if (count === '') {
      elements.predictionStatus.textContent = 'Choose a predicted recall score before continuing.';
      elements.predictionCount.focus();
      return;
    }

    if (!strategy) {
      elements.predictionStatus.textContent = 'Describe the strategy you expect to use.';
      elements.predictionStrategy.focus();
      return;
    }

    state.committed = true;
    state.predictionCount = count;
    state.predictionStrategy = strategy;
    state.phase = 'round-intro';
    saveState();
    renderAll();
    focusHeading('round-intro-heading');
  }

  function startRound() {
    if (state.phase !== 'round-intro') {
      return;
    }
    state.phase = 'study';
    state.studyIndex = 0;
    state.distractorIndex = 0;
    state.recallIndex = 0;
    state.lastStudyStatus = '';
    state.lastDistractorStatus = '';
    state.lastRecallStatus = '';
    saveState();
    renderAll();
    focusHeading('study-heading');
  }

  function completeStudyPair() {
    if (state.phase !== 'study') {
      return;
    }

    const round = currentRound();
    const config = currentConfig();
    const pair = round.studyPairs[state.studyIndex];

    if (config.sceneRequired) {
      const note = elements.sceneEntry.value.trim();
      if (note.split(/\s+/).filter(Boolean).length < 3) {
        elements.studyStatus.textContent = 'Describe the interaction in at least three words before continuing.';
        elements.sceneEntry.focus();
        return;
      }
      round.sceneNotes[pair.cue] = note;
    }

    if (!beginInteraction()) {
      return;
    }

    state.studyIndex += 1;
    state.lastStudyStatus = `Pair ${state.studyIndex} studied.`;

    if (state.studyIndex >= PAIRS_PER_ROUND) {
      state.phase = 'distractor';
      state.lastStudyStatus = 'All six pairs are studied. Begin the brief interruption.';
    }

    saveState();
    renderAll();

    if (state.phase === 'distractor') {
      focusHeading('distractor-heading');
    } else if (config.sceneRequired) {
      elements.sceneEntry.focus();
    }
  }

  function completeDistractorItem() {
    if (state.phase !== 'distractor' || !beginInteraction()) {
      return;
    }

    state.distractorIndex += 1;
    state.lastDistractorStatus = `Number ${state.distractorIndex} classified.`;

    if (state.distractorIndex >= DISTRACTOR_SETS[state.roundIndex].length) {
      state.phase = 'recall';
      state.lastDistractorStatus = 'Interruption complete. Begin cued recall.';
    }

    saveState();
    renderAll();

    if (state.phase === 'recall') {
      focusHeading('recall-heading');
      elements.recallEntry.focus();
    }
  }

  function submitRecall(dontRemember) {
    if (state.phase !== 'recall') {
      return;
    }

    const round = currentRound();
    const pair = round.recallPairs[state.recallIndex];
    const response = dontRemember ? '' : elements.recallEntry.value.trim();

    if (!dontRemember && !response) {
      elements.recallStatus.textContent = 'Type a partner word or choose “I don’t remember.”';
      elements.recallEntry.focus();
      return;
    }

    if (!beginInteraction()) {
      return;
    }

    const correct = normalize(response) === normalize(pair.target);
    round.recallResponses.push({
      cue: pair.cue,
      target: pair.target,
      response: response,
      correct: correct
    });

    state.recallIndex += 1;
    state.lastRecallStatus = `Response ${state.recallIndex} recorded.`;

    if (state.recallIndex >= PAIRS_PER_ROUND) {
      round.score = round.recallResponses.filter(function (item) { return item.correct; }).length;
      state.phase = 'round-summary';
      state.lastRecallStatus = 'Recall round complete.';
    }

    saveState();
    renderAll();

    if (state.phase === 'round-summary') {
      focusHeading('round-summary-heading');
    } else {
      elements.recallEntry.focus();
    }
  }

  function continueAfterRound() {
    if (state.phase !== 'round-summary') {
      return;
    }

    const round = currentRound();

    if (state.roundIndex === 0) {
      const selected = elements.baselineStrategyChoices.find(function (choice) { return choice.checked; });
      if (!selected) {
        elements.roundSummaryStatus.textContent = 'Choose the strategy you actually used in Round 1.';
        elements.baselineStrategyChoices[0].focus();
        return;
      }
      state.baselineStrategy = selected.value;
    } else if (state.roundIndex === 1) {
      round.reflection = elements.roundReflection.value.trim();
    }

    if (state.roundIndex < ROUND_CONFIG.length - 1) {
      state.roundIndex += 1;
      state.phase = 'round-intro';
      state.studyIndex = 0;
      state.distractorIndex = 0;
      state.recallIndex = 0;
      state.lastRoundSummaryStatus = '';
      saveState();
      renderAll();
      focusHeading('round-intro-heading');
      return;
    }

    state.phase = 'results';
    saveState();
    renderAll();
    focusHeading('results-heading');
  }

  function saveExplanation() {
    const response = elements.explanationResponse.value.trim();
    if (!response) {
      elements.explanationStatus.textContent = 'Write an explanation before continuing.';
      elements.explanationResponse.focus();
      return;
    }

    state.explanation = response;
    state.explanationCommitted = true;
    saveState();
    renderAll();
    elements.explanationStatus.textContent = 'Explanation saved in this browser session.';
    focusHeading('transfer-heading');
  }

  function saveTransfer() {
    state.transfer = elements.transferResponse.value.trim();
    saveState();
    elements.transferStatus.textContent = state.transfer ? 'Transfer response saved in this browser session.' : 'Transfer response cleared.';
  }

  function restartLab() {
    sessionStorage.removeItem(STORAGE_KEY);
    state = createInitialState();
    ensureRecallOrders();
    elements.predictionStatus.textContent = '';
    elements.explanationStatus.textContent = '';
    elements.transferStatus.textContent = '';
    renderAll();
    elements.predictionCount.focus();
    window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }

  function renderAll() {
    renderPrediction();
    renderRoundIntro();
    renderStudy();
    renderDistractor();
    renderRecall();
    renderRoundSummary();
    renderResults();
    renderTransfer();
  }

  function renderPrediction() {
    elements.predictionCount.value = state.predictionCount;
    elements.predictionStrategy.value = state.predictionStrategy;
    elements.predictionCount.disabled = state.committed;
    elements.predictionStrategy.disabled = state.committed;
    elements.commitPrediction.disabled = state.committed;

    if (state.committed) {
      elements.predictionStatus.textContent = 'Prediction committed and saved for this browser session.';
    }
  }

  function renderRoundIntro() {
    const visible = state.phase === 'round-intro';
    elements.roundIntroPanel.hidden = !visible;
    elements.startRound.disabled = !visible;

    if (!visible) {
      return;
    }

    const config = currentConfig();
    elements.roundKicker.textContent = `Round ${state.roundIndex + 1} of 3`;
    elements.roundIntroHeading.textContent = config.heading;
    elements.roundIntroText.innerHTML = config.intro;
  }

  function renderStudy() {
    const visible = state.phase === 'study';
    elements.studyPanel.hidden = !visible;
    elements.nextStudyPair.disabled = !visible || interactionLocked;
    elements.studyStatus.textContent = state.lastStudyStatus;

    if (!visible) {
      return;
    }

    const config = currentConfig();
    const round = currentRound();
    const pair = round.studyPairs[state.studyIndex];
    elements.studyRoundStatus.textContent = `Round ${state.roundIndex + 1}: ${config.label}`;
    elements.studyCounter.textContent = `Pair ${state.studyIndex + 1} of ${PAIR_SETS[state.roundIndex].length}`;
    elements.studyInstruction.textContent = config.studyInstruction;
    elements.cueWord.textContent = pair.cue;
    elements.targetWord.textContent = pair.target;
    elements.sceneEntryWrap.hidden = !config.sceneRequired;
    elements.sceneEntryLabel.textContent = config.sceneLabel || '';
    elements.sceneEntry.value = config.sceneRequired ? (round.sceneNotes[pair.cue] || '') : '';
    elements.nextStudyPair.textContent = state.studyIndex === PAIRS_PER_ROUND - 1 ? 'Begin interruption' : 'Next pair';
  }

  function renderDistractor() {
    const visible = state.phase === 'distractor';
    elements.distractorPanel.hidden = !visible;
    elements.distractorOdd.disabled = !visible || interactionLocked;
    elements.distractorEven.disabled = !visible || interactionLocked;
    elements.distractorStatus.textContent = state.lastDistractorStatus;

    if (!visible) {
      return;
    }

    const numbers = DISTRACTOR_SETS[state.roundIndex];
    elements.distractorRoundStatus.textContent = `Round ${state.roundIndex + 1}`;
    elements.distractorCounter.textContent = `Number ${state.distractorIndex + 1} of ${numbers.length}`;
    elements.distractorNumber.textContent = String(numbers[state.distractorIndex]);
  }

  function renderRecall() {
    const visible = state.phase === 'recall';
    elements.recallPanel.hidden = !visible;
    elements.submitRecall.disabled = !visible || interactionLocked;
    elements.dontRemember.disabled = !visible || interactionLocked;
    elements.recallStatus.textContent = state.lastRecallStatus;

    if (!visible) {
      return;
    }

    const round = currentRound();
    const pair = round.recallPairs[state.recallIndex];
    elements.recallRoundStatus.textContent = `Round ${state.roundIndex + 1}: ${currentConfig().label}`;
    elements.recallCounter.textContent = `Cue ${state.recallIndex + 1} of ${PAIR_SETS[state.roundIndex].length}`;
    elements.recallCue.textContent = pair.cue;
    elements.recallEntry.value = '';
  }

  function renderRoundSummary() {
    const visible = state.phase === 'round-summary';
    elements.roundSummaryPanel.hidden = !visible;
    elements.continueAfterRound.disabled = !visible;
    elements.roundSummaryStatus.textContent = state.lastRoundSummaryStatus;

    if (!visible) {
      return;
    }

    const round = currentRound();
    const roundLabel = state.roundIndex === 0 ? 'your own-strategy' : `the ${currentConfig().label.toLowerCase()}`;
    elements.roundSummaryKicker.textContent = `Round ${state.roundIndex + 1} complete`;
    elements.roundScoreSummary.textContent = `You recalled ${round.score} of ${PAIR_SETS[state.roundIndex].length} partner words in ${roundLabel} round.`;
    elements.baselineStrategyWrap.hidden = state.roundIndex !== 0;
    elements.roundReflectionWrap.hidden = state.roundIndex !== 1;
    elements.roundReflection.value = round.reflection;

    elements.baselineStrategyChoices.forEach(function (choice) {
      choice.checked = choice.value === state.baselineStrategy;
    });

    elements.continueAfterRound.textContent = state.roundIndex === 2 ? 'See all three results' : 'Continue to the next round';
  }

  function renderResults() {
    const visible = state.phase === 'results';
    elements.resultsPanel.hidden = !visible;

    if (!visible) {
      return;
    }

    const natural = state.rounds[0].score;
    const interaction = state.rounds[1].score;
    const bizarre = state.rounds[2].score;
    const interactionGain = interaction - natural;
    const bizarreIncrement = bizarre - interaction;

    elements.naturalScore.textContent = `${natural} of ${PAIRS_PER_ROUND}`;
    elements.interactionScore.textContent = `${interaction} of ${PAIRS_PER_ROUND}`;
    elements.bizarreScore.textContent = `${bizarre} of ${PAIRS_PER_ROUND}`;
    elements.resultsSummary.textContent = `Before Round 1, you predicted ${state.predictionCount} of 6 using your usual strategy. You actually recalled ${natural}. The later rounds added interaction and then bizarreness in a fixed teaching sequence.`;
    elements.differenceSummary.textContent = `From your own-strategy round to the interactive round, recall changed by ${signed(interactionGain)} pair${Math.abs(interactionGain) === 1 ? '' : 's'}. From ordinary interaction to bizarre interaction, recall changed by ${signed(bizarreIncrement)} pair${Math.abs(bizarreIncrement) === 1 ? '' : 's'}. These differences describe this session; they are not causal estimates.`;
    elements.explanationResponse.value = state.explanation;
  }

  function renderTransfer() {
    const visible = state.phase === 'results' && state.explanationCommitted;
    elements.transferPanel.hidden = !visible;

    if (!visible) {
      return;
    }

    const natural = state.rounds[0].score;
    const interaction = state.rounds[1].score;
    const bizarre = state.rounds[2].score;
    elements.completionSummary.textContent = `Completion summary: your scores were ${natural} of 6 with your own strategy, ${interaction} of 6 with interactive imagery, and ${bizarre} of 6 with bizarre interaction. The main instructional question is whether binding the words produced the largest change and whether additional bizarreness helped, hurt, or made no difference.`;
    elements.transferResponse.value = state.transfer;
  }

  function currentRound() {
    return state.rounds[state.roundIndex];
  }

  function currentConfig() {
    return ROUND_CONFIG[state.roundIndex];
  }

  function ensureRecallOrders() {
    state.rounds.forEach(function (round) {
      if (!Array.isArray(round.recallPairs) || round.recallPairs.length !== PAIRS_PER_ROUND) {
        round.recallPairs = shuffle(round.studyPairs);
      }
    });
  }

  function normalize(value) {
    return String(value || '')
      .toLowerCase()
      .trim()
      .replace(/^[^a-z]+|[^a-z]+$/g, '');
  }

  function signed(value) {
    if (value > 0) {
      return `+${value}`;
    }
    return String(value);
  }

  function shuffle(items) {
    const copy = items.map(function (item) { return Object.assign({}, item); });
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      const temporary = copy[index];
      copy[index] = copy[swapIndex];
      copy[swapIndex] = temporary;
    }
    return copy;
  }

  function saveState() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function restoreState() {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return;
    }

    try {
      const restored = JSON.parse(saved);
      if (isValidState(restored)) {
        state = restored;
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  function isValidState(candidate) {
    return candidate &&
      Array.isArray(candidate.rounds) &&
      candidate.rounds.length === 3 &&
      candidate.rounds.every(function (round) {
        return Array.isArray(round.studyPairs) &&
          round.studyPairs.length === PAIRS_PER_ROUND &&
          Array.isArray(round.recallResponses) &&
          round.sceneNotes && typeof round.sceneNotes === 'object';
      }) &&
      typeof candidate.phase === 'string' &&
      Number.isInteger(candidate.roundIndex) &&
      candidate.roundIndex >= 0 &&
      candidate.roundIndex < 3;
  }

  function focusHeading(id) {
    const heading = document.getElementById(id);
    if (heading) {
      heading.focus();
      heading.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    }
  }

  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function beginInteraction() {
    if (interactionLocked) {
      return false;
    }

    interactionLocked = true;
    window.setTimeout(function () {
      interactionLocked = false;
      renderAll();
    }, 300);
    return true;
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
}());
