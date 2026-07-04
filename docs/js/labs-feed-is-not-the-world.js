/* The Feed Is Not the World: biased evidence accumulation and perceived consensus */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch11-feed-is-not-the-world';
  const TOTAL_ROUNDS = 4;
  const POSTS_PER_ROUND = 4;

  const PRO_POSTS = [
    "Everyone in my dorm is excited about the four-day schedule. It's about time.",
    'A compressed schedule means more room for internships, jobs, and sleep. Easy call.',
    'My whole study group already agrees: four days is strictly better.',
    'Longer blocks sound rough at first, but people adjust within a couple of weeks.',
    'This is the most popular idea student council has floated all year.',
    'Fewer commuting days would save me real time and money every week.'
  ];

  const CON_POSTS = [
    "Longer class blocks are exhausting — attention spans aren't built for 100-minute lectures.",
    'This mostly helps people without a job or kids to work around.',
    "Nobody's explained how labs and studio courses fit into four days.",
    'We tried something like this before and it quietly got walked back.',
    'Feels like a decision made for convenience, not for learning outcomes.',
    'Has anyone actually asked commuter students what they think?'
  ];

  const initialState = {
    committed: false,
    predictionText: '',
    baseline: { position: 4, confidence: 4, consensus: 50 },
    round: 1,
    proCount: 2,
    conCount: 2,
    proCursor: 0,
    conCursor: 0,
    currentRoundPosts: [],
    feedDone: false,
    compositionLog: [],
    log: [],
    ratingsSubmitted: false,
    postRatings: { position: 4, confidence: 4, consensus: 50 },
    explanation: '',
    transfer: ''
  };

  let state = copyInitialState();
  const elements = {};
  let postIdCounter = 0;

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
      'mechanismPrediction', 'baselinePosition', 'baselinePositionOutput',
      'baselineConfidence', 'baselineConfidenceOutput', 'baselineConsensus', 'baselineConsensusOutput',
      'commitBaseline', 'predictionStatus', 'predictionPanel',
      'feedPanel', 'roundCounter', 'feedTally', 'feedHeading', 'feedMeterPro', 'feedMeterCon',
      'postList', 'nextRound', 'eventList',
      'ratingPanel', 'ratingHeading', 'postPosition', 'postPositionOutput',
      'postConfidence', 'postConfidenceOutput', 'postConsensus', 'postConsensusOutput',
      'submitRatings', 'ratingStatus',
      'revealPanel', 'revealHeading', 'compositionTableBody', 'ratingComparisonBody', 'revealText',
      'explainPanel', 'explanationResponse', 'saveExplanation', 'explanationStatus',
      'transferPanel', 'completionSummary', 'transferResponse', 'saveTransfer', 'restartLab', 'transferStatus'
    ].forEach(function (key) {
      const id = key.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); });
      elements[key] = document.getElementById(id);
    });
  }

  function bindEvents() {
    elements.commitBaseline.addEventListener('click', commitBaseline);
    elements.nextRound.addEventListener('click', advanceRound);
    elements.submitRatings.addEventListener('click', submitRatings);
    elements.saveExplanation.addEventListener('click', saveExplanation);
    elements.saveTransfer.addEventListener('click', saveTransfer);
    elements.restartLab.addEventListener('click', restartLab);

    bindRangeOutput('baselinePosition', 'baselinePositionOutput', formatScale1to7);
    bindRangeOutput('baselineConfidence', 'baselineConfidenceOutput', formatScale1to7);
    bindRangeOutput('baselineConsensus', 'baselineConsensusOutput', formatPercent);
    bindRangeOutput('postPosition', 'postPositionOutput', formatScale1to7);
    bindRangeOutput('postConfidence', 'postConfidenceOutput', formatScale1to7);
    bindRangeOutput('postConsensus', 'postConsensusOutput', formatPercent);
  }

  function bindRangeOutput(inputKey, outputKey, formatter) {
    elements[inputKey].addEventListener('input', function () {
      elements[outputKey].textContent = formatter(elements[inputKey].value);
    });
  }

  function formatScale1to7(value) { return String(value); }
  function formatPercent(value) { return value + '%'; }

  function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }

  function nextPostId() {
    postIdCounter += 1;
    return 'post-' + postIdCounter;
  }

  function buildRoundPosts(proCount, conCount) {
    const posts = [];
    for (let i = 0; i < proCount; i += 1) {
      posts.push({ id: nextPostId(), stance: 'pro', text: PRO_POSTS[state.proCursor % PRO_POSTS.length], liked: null });
      state.proCursor += 1;
    }
    for (let i = 0; i < conCount; i += 1) {
      posts.push({ id: nextPostId(), stance: 'con', text: CON_POSTS[state.conCursor % CON_POSTS.length], liked: null });
      state.conCursor += 1;
    }
    // Interleave so the feed doesn't read as visibly grouped by stance.
    const interleaved = [];
    let p = 0;
    let c = proCount;
    while (interleaved.length < posts.length) {
      if (p < proCount) { interleaved.push(posts[p]); p += 1; }
      if (c < posts.length) { interleaved.push(posts[c]); c += 1; }
    }
    return interleaved;
  }

  function reasonForRound(round, proCount, shift) {
    if (round === 1) return 'Neutral starting feed — balanced by design.';
    if (shift > 0) return 'You engaged more with posts favoring the change, so the feed shifted that way.';
    if (shift < 0) return 'You engaged more with posts opposing the change, so the feed shifted that way.';
    return 'You engaged evenly with both sides, so the feed composition held steady.';
  }

  function startRound(round, proCount, conCount, reason) {
    state.round = round;
    state.proCount = proCount;
    state.conCount = conCount;
    state.currentRoundPosts = buildRoundPosts(proCount, conCount);
    state.compositionLog.push({ round: round, pro: proCount, con: conCount, reason: reason });
    state.log.push('Round ' + round + ': ' + proCount + ' posts favoring the change, ' + conCount + ' opposing it. ' + reason);
  }

  function commitBaseline() {
    const predictionText = elements.mechanismPrediction.value.trim();
    if (!predictionText) {
      elements.predictionStatus.textContent = 'Write a prediction before committing.';
      elements.mechanismPrediction.focus();
      return;
    }
    state.committed = true;
    state.predictionText = predictionText;
    state.baseline = {
      position: Number(elements.baselinePosition.value),
      confidence: Number(elements.baselineConfidence.value),
      consensus: Number(elements.baselineConsensus.value)
    };
    startRound(1, 2, 2, reasonForRound(1, 2, 0));
    saveState();
    renderAll();
    elements.feedHeading.focus();
  }

  function handlePostAction(postId, liked) {
    const post = state.currentRoundPosts.filter(function (p) { return p.id === postId; })[0];
    if (!post || post.liked !== null) return;
    post.liked = liked;
    state.log.push(liked ? 'You liked a post.' : 'You skipped a post.');
    saveState();
    renderFeedRound();
    renderLog();
  }

  function roundIsComplete() {
    return state.currentRoundPosts.every(function (p) { return p.liked !== null; });
  }

  function advanceRound() {
    if (!roundIsComplete()) return;
    const proLikes = state.currentRoundPosts.filter(function (p) { return p.liked && p.stance === 'pro'; }).length;
    const conLikes = state.currentRoundPosts.filter(function (p) { return p.liked && p.stance === 'con'; }).length;
    const net = proLikes - conLikes;
    const shift = net > 0 ? 1 : (net < 0 ? -1 : 0);

    if (state.round >= TOTAL_ROUNDS) {
      state.feedDone = true;
      saveState();
      renderAll();
      elements.ratingHeading.focus();
      return;
    }

    const nextPro = clamp(state.proCount + shift, 0, POSTS_PER_ROUND);
    const nextCon = POSTS_PER_ROUND - nextPro;
    startRound(state.round + 1, nextPro, nextCon, reasonForRound(state.round + 1, nextPro, shift));
    saveState();
    renderAll();
    elements.feedHeading.focus();
  }

  function submitRatings() {
    state.postRatings = {
      position: Number(elements.postPosition.value),
      confidence: Number(elements.postConfidence.value),
      consensus: Number(elements.postConsensus.value)
    };
    state.ratingsSubmitted = true;
    saveState();
    renderAll();
    elements.revealHeading.focus();
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
    postIdCounter = 0;
    elements.predictionStatus.textContent = '';
    elements.ratingStatus.textContent = '';
    elements.explanationStatus.textContent = '';
    elements.transferStatus.textContent = '';
    elements.mechanismPrediction.value = '';
    renderAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderAll() {
    renderPredictionState();
    renderFeedRound();
    renderLog();
    renderRatingPanel();
    renderRevealAndAfter();
  }

  function renderPredictionState() {
    elements.mechanismPrediction.value = state.predictionText || elements.mechanismPrediction.value;
    elements.mechanismPrediction.disabled = state.committed;
    elements.baselinePosition.value = state.baseline.position;
    elements.baselineConfidence.value = state.baseline.confidence;
    elements.baselineConsensus.value = state.baseline.consensus;
    elements.baselinePositionOutput.textContent = formatScale1to7(state.baseline.position);
    elements.baselineConfidenceOutput.textContent = formatScale1to7(state.baseline.confidence);
    elements.baselineConsensusOutput.textContent = formatPercent(state.baseline.consensus);
    elements.baselinePosition.disabled = state.committed;
    elements.baselineConfidence.disabled = state.committed;
    elements.baselineConsensus.disabled = state.committed;
    elements.commitBaseline.disabled = state.committed;
    elements.feedPanel.hidden = !state.committed;
    if (state.committed) elements.predictionStatus.textContent = 'Prediction and baseline ratings committed and saved for this session.';
  }

  function renderFeedRound() {
    if (!state.committed || state.feedDone) return;
    elements.roundCounter.textContent = 'Round ' + state.round + ' of ' + TOTAL_ROUNDS;
    const likedPro = state.currentRoundPosts.filter(function (p) { return p.liked && p.stance === 'pro'; }).length;
    const likedCon = state.currentRoundPosts.filter(function (p) { return p.liked && p.stance === 'con'; }).length;
    elements.feedTally.textContent = 'Liked so far this round — favoring: ' + likedPro + ', opposing: ' + likedCon;

    const proPercent = Math.round((state.proCount / POSTS_PER_ROUND) * 100);
    const conPercent = 100 - proPercent;
    elements.feedMeterPro.style.width = proPercent + '%';
    elements.feedMeterCon.style.width = conPercent + '%';
    elements.feedMeterPro.textContent = state.proCount > 0 ? state.proCount + ' favoring' : '';
    elements.feedMeterCon.textContent = state.conCount > 0 ? state.conCount + ' opposing' : '';

    elements.postList.innerHTML = '';
    state.currentRoundPosts.forEach(function (post) {
      const card = document.createElement('article');
      card.className = 'feed-post' + (post.liked === true ? ' is-liked' : post.liked === false ? ' is-skipped' : '');
      const text = document.createElement('p');
      text.textContent = post.text;
      card.appendChild(text);
      const actions = document.createElement('div');
      actions.className = 'feed-post-actions';

      const likeBtn = document.createElement('button');
      likeBtn.type = 'button';
      likeBtn.className = 'lab-btn';
      likeBtn.textContent = 'Like';
      likeBtn.disabled = post.liked !== null;
      likeBtn.addEventListener('click', function () { handlePostAction(post.id, true); });

      const skipBtn = document.createElement('button');
      skipBtn.type = 'button';
      skipBtn.className = 'lab-btn lab-btn--secondary';
      skipBtn.textContent = 'Skip';
      skipBtn.disabled = post.liked !== null;
      skipBtn.addEventListener('click', function () { handlePostAction(post.id, false); });

      actions.appendChild(likeBtn);
      actions.appendChild(skipBtn);
      card.appendChild(actions);

      if (post.liked !== null) {
        const status = document.createElement('p');
        status.className = 'feed-post-status';
        status.textContent = post.liked ? 'You liked this post.' : 'You skipped this post.';
        card.appendChild(status);
      }

      elements.postList.appendChild(card);
    });

    const complete = roundIsComplete();
    elements.nextRound.disabled = !complete;
    elements.nextRound.textContent = !complete
      ? 'Respond to every post to continue'
      : (state.round >= TOTAL_ROUNDS ? 'See your results' : 'Continue to round ' + (state.round + 1));
  }

  function renderLog() {
    elements.eventList.innerHTML = '';
    state.log.forEach(function (entry) {
      const li = document.createElement('li');
      li.textContent = entry;
      elements.eventList.appendChild(li);
    });
  }

  function renderRatingPanel() {
    elements.ratingPanel.hidden = !state.feedDone || state.ratingsSubmitted;
    elements.postPosition.value = state.postRatings.position;
    elements.postConfidence.value = state.postRatings.confidence;
    elements.postConsensus.value = state.postRatings.consensus;
    elements.postPositionOutput.textContent = formatScale1to7(state.postRatings.position);
    elements.postConfidenceOutput.textContent = formatScale1to7(state.postRatings.confidence);
    elements.postConsensusOutput.textContent = formatPercent(state.postRatings.consensus);
  }

  function renderRevealAndAfter() {
    const done = state.ratingsSubmitted;
    elements.revealPanel.hidden = !done;
    elements.explainPanel.hidden = !done;
    elements.transferPanel.hidden = !done;
    elements.explanationResponse.value = state.explanation;
    elements.transferResponse.value = state.transfer;
    if (!done) return;

    elements.compositionTableBody.innerHTML = '';
    state.compositionLog.forEach(function (entry) {
      const row = document.createElement('tr');
      row.innerHTML = '<td>Round ' + entry.round + '</td><td>' + entry.pro + '</td><td>' + entry.con + '</td><td>' + entry.reason + '</td>';
      elements.compositionTableBody.appendChild(row);
    });

    elements.ratingComparisonBody.innerHTML = '';
    const rows = [
      ['Position (1–7, oppose–support)', state.baseline.position, state.postRatings.position],
      ['Confidence (1–7)', state.baseline.confidence, state.postRatings.confidence],
      ['Perceived consensus (0–100%)', state.baseline.consensus + '%', state.postRatings.consensus + '%']
    ];
    rows.forEach(function (rowData) {
      const row = document.createElement('tr');
      row.innerHTML = '<td>' + rowData[0] + '</td><td>' + rowData[1] + '</td><td>' + rowData[2] + '</td>';
      elements.ratingComparisonBody.appendChild(row);
    });

    elements.revealText.textContent = 'The feed did not sample all Riverton students — it sampled based on what you clicked. Round 1 was neutral; every round after that shifted based only on your own engagement in the round before it, not on a hidden randomizer or a coin flip. Your position moved from ' + state.baseline.position + ' to ' + state.postRatings.position + ' (out of 7). Your confidence moved from ' + state.baseline.confidence + ' to ' + state.postRatings.confidence + ' (out of 7). Your estimate of how many other students agree with you moved from ' + state.baseline.consensus + '% to ' + state.postRatings.consensus + '%. None of this required anyone to present a better argument — the composition of what you saw changed, and that alone can change how common and how obvious a view feels.';

    elements.completionSummary.textContent = 'Completion summary: you rated your view before and after a ' + TOTAL_ROUNDS + '-round simulated feed that adapted to your own clicks. This does not prove that a real feed would change your actual belief — it demonstrates a mechanism: repeated, one-sided social input can raise perceived consensus and confidence even when the underlying evidence has not improved.';
  }

  function saveState() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ state: state, postIdCounter: postIdCounter }));
    } catch (error) {
      elements.predictionStatus.textContent = 'Progress is available on this page but could not be saved for refresh.';
    }
  }

  function restoreState() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
      if (saved && saved.state && Array.isArray(saved.state.log) && Array.isArray(saved.state.compositionLog)) {
        state = Object.assign(copyInitialState(), saved.state);
        postIdCounter = saved.postIdCounter || 0;
      }
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
})();
