/**
 * prologue-interactive.js
 * Interactive components for: Prologue — How to Learn Psychology
 *
 * Components
 * ──────────────────────────────────────────────────────────────
 * 1. Hybrid retrieval prompts   §All Stop & Retrieve callouts
 *    Two-stage: write → rate confidence → reveal model answer
 *    → self-score criteria → calibration feedback
 *
 * 2. Calibration tracker        #calibration-dashboard
 *    Aggregates confidence + self-score across all prompts.
 *    localStorage with graceful fallback. Clear-data button.
 *
 * 3. Stepwise MCQs              [data-interactive="mcq"]
 *    Countdown before options appear; explanatory feedback.
 *    Placed at: Section 3 (recognition/recall/application)
 *               Section 8 (passive vs. retrieval-based AI use)
 *
 * 4. Spaced retrieval scheduler #scheduler-widget
 *    Date input → auto-suggested sessions → print / copy /
 *    .ics calendar download.
 *
 * 5. AI prompt builder          #ai-prompt-builder
 *    Three reusable prompt patterns with topic input and
 *    copy-to-clipboard. Accessible status message, no alert().
 *
 * Rules
 * ──────────────────────────────────────────────────────────────
 * - No framework. No backend. No raw response storage.
 * - Degrades gracefully: Stop & Retrieve text remains readable
 *   without JS; only the interactive layer is added.
 * - All stored data: {promptId, confidence, scored, total,
 *   timestamp}. Never the student's written answer.
 */

(function () {
  'use strict';

  /* ── localStorage helpers ─────────────────────────────────────────────────── */

  var STORAGE_KEY = 'psych101_prologue_v1';

  function storageAvailable() {
    try {
      localStorage.setItem('_pi_test', '1');
      localStorage.removeItem('_pi_test');
      return true;
    } catch (e) { return false; }
  }

  function loadData() {
    if (!storageAvailable()) return [];
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
    catch (e) { return []; }
  }

  function saveAttempt(entry) {
    if (!storageAvailable()) return;
    var data = loadData();
    var idx = data.findIndex(function (d) { return d.promptId === entry.promptId; });
    if (idx >= 0) data[idx] = entry;
    else data.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    updateDashboard();
  }

  function clearAllData() {
    if (storageAvailable()) localStorage.removeItem(STORAGE_KEY);
    updateDashboard();
  }

  /* expose for the inline onclick on the clear button */
  window._piClearData = clearAllData;

  /* ── Prompt data ──────────────────────────────────────────────────────────── */
  /* Each entry: { question, modelAnswer, criteria[] }
     Keys must match data-prompt-id values in the HTML.       */

  var PROMPTS = {

    's1-attention': {
      question: 'Before moving on — what is the difference between selective attention and working memory? What happens to encoding when working memory is overloaded?',
      modelAnswer: 'Selective attention is the process of focusing conscious processing on one stimulus or task while filtering out competing inputs. Working memory is the active, limited-capacity mental workspace where selected information is held and manipulated — it follows attention in the processing sequence. Working memory is limited in capacity; when it is overloaded by dense or unfamiliar material, pieces fall out before they can be integrated into memory traces. A student can attend to something and still remember very little from it, because attention alone does not guarantee encoding.',
      criteria: [
        'Selective attention selects information for conscious processing from competing inputs.',
        'Working memory is the active, limited-capacity workspace where selected information is held and manipulated.',
        'Attention precedes working memory — attention selects first, then working memory processes.',
        'Overloaded working memory drops pieces before they can be integrated into memory traces.'
      ]
    },

    's2-encoding': {
      question: 'What is the difference between shallow and deep processing? Give one example of each from your studying last week.',
      modelAnswer: 'Shallow processing engages surface features of material — noticing that a term was bolded, where it appeared on a page, or that it was highlighted. Deep processing engages meaning: what the concept means, how it connects to other ideas, or how it applies to a situation the student has actually been in. Craik and Lockhart (1972) showed that deeper encoding at study produces better later recall. Students who rated words as pleasant or unpleasant later recalled them at more than twice the rate of students who simply noted a typographic feature of the same words.',
      criteria: [
        'Shallow processing focuses on surface features: appearance, position, or typographic properties.',
        'Deep processing connects information to meaning: what it means, how it connects, or how it applies to experience.',
        'Deep processing produces more durable memory traces than shallow processing (Craik & Lockhart, 1972).',
        'A specific personal example of each type was provided.'
      ]
    },

    's3-retrieval': {
      question: 'What is the testing effect? Why does it matter for how you study? (Answer without looking back.)',
      modelAnswer: 'The testing effect is the finding that retrieving information from memory strengthens future access to that information — testing is not only a measurement tool, it creates learning. Roediger and Karpicke (2006) showed that students who read a passage once and then practiced recalling it outperformed students who reread the passage three times, on a test given one week later. The rereaders felt more prepared; the retrievers performed better. This matters because it inverts the typical study sequence: practice retrieval before reviewing notes, not after, precisely because the attempt to remember is the mechanism that strengthens the memory.',
      criteria: [
        'Retrieval practice strengthens future access to information — it is not only a measurement of learning.',
        'The act of trying to remember something produces more durable memory than equivalent time rereading.',
        'Retrievers outperformed rereaders on a delayed test (Roediger & Karpicke, 2006), even though rereaders felt more prepared.',
        'Implication: attempt retrieval before reviewing notes, not after.'
      ]
    },

    's4-spacing': {
      question: 'Why does distributed practice typically outperform massed practice? Describe the mechanism, not just the result.',
      modelAnswer: 'Distributed practice spreads study across multiple sessions separated by time; massed practice concentrates it in one session. Distributed practice outperforms massed practice because each return to material after a delay is a retrieval event, and retrieval strengthens memory. When material is slightly forgotten and then retrieved, the memory is reconstructed rather than simply re-activated — and reconstruction strengthens the trace in a way that smooth re-recognition does not. Three sessions across three days yield three retrieval events; a three-hour cram session yields one. The Ebbinghaus forgetting curve resets at a higher level with each spaced retrieval, and the rate of forgetting slows with each return. Spacing feels less effective than cramming — the effort of partial forgetting is easy to mistake for inefficiency — even when it produces better long-term retention.',
      criteria: [
        'Distributed practice produces multiple retrieval events separated by time; cramming produces one.',
        'Each return after a delay requires reconstruction, not just re-recognition — reconstruction strengthens the memory trace.',
        'The forgetting curve resets at a higher level with each spaced retrieval; forgetting rate slows.',
        'Spacing feels less effective than cramming even when it produces better long-term retention.'
      ]
    },

    's5-sleep': {
      question: 'Name three distinct functions of sleep that matter for learning. Which do you think students underestimate most?',
      modelAnswer: 'Three distinct functions of sleep matter for learning. First, sleep restores attentional capacity — a sleep-deprived student has a degraded attentional system, which degrades encoding regardless of how long the book stays open. Second, sleep supports memory consolidation: the hippocampus and neocortex interact during sleep to stabilize explicit memories, so material studied before sleep benefits from a consolidation window that an all-nighter removes (Diekelmann & Born, 2010). Third, sleep maintains prefrontal emotional regulation — sleep deprivation impairs control of emotional responses, making small setbacks feel larger and errors feel threatening rather than informative. Most students probably underestimate the consolidation function, because it is invisible and happens without effort.',
      criteria: [
        'Sleep restores attentional capacity needed for sustained encoding during study.',
        'Sleep supports memory consolidation — hippocampal-neocortical interaction stabilizes explicit memories.',
        'Sleep maintains prefrontal emotional regulation, keeping errors informative rather than threatening.',
        'A specific judgment about which function is most underestimated was given and briefly explained.'
      ]
    },

    's6-habits': {
      question: 'Explain procrastination using the concept of negative reinforcement. Walk through the mechanism step by step — do not just name the concept.',
      modelAnswer: 'Procrastination is maintained by negative reinforcement. Step by step: you think about an upcoming exam, which produces anxiety. You open a different tab, check your phone, or do something unrelated — anxiety drops. That reduction in anxiety reinforces the avoidance behavior, making it more likely the next time exam anxiety appears. Negative reinforcement is not punishment; it is an increase in behavior because that behavior removed something aversive. The mechanism is self-perpetuating: the short-term relief is real, which is exactly why the pattern persists even as the long-term consequence — falling further behind — gets worse.',
      criteria: [
        'A behavior (avoidance, switching tabs, checking phone) occurs when exam-related anxiety increases.',
        'The behavior removes or reduces the aversive stimulus — anxiety drops following the avoidance.',
        'Negative reinforcement: the avoidance behavior increases in frequency because it removed something aversive.',
        'The pattern persists even though avoidance makes the long-term problem worse.'
      ]
    },

    's7-metacognition': {
      question: 'What did Kruger and Dunning actually find in Study 2? What does this suggest about using your feelings of confidence to decide when you are done studying?',
      modelAnswer: 'In Study 2 (logical reasoning), Kruger and Dunning found that participants in the bottom-performing quartile overestimated their scores by roughly 50 percentile points — they perceived themselves near the 62nd percentile while actually performing near the 12th. The top-performing quartile slightly underestimated their performance. The gap exists because domain knowledge is partly what allows you to evaluate your own performance in that domain — limited competence impairs not just performance but also the metacognitive monitoring of that performance. For studying, this means that confidence after passive review is an unreliable stopping signal. External tests — retrieval attempts, practice questions, explaining to someone else — are needed because the mechanism that produces confidence after rereading is partly independent of retrievable knowledge.',
      criteria: [
        'Bottom-quartile participants overestimated performance by ~50 percentile points (perceived ~62nd, actual ~12th).',
        'Top-quartile participants slightly underestimated their performance.',
        'The gap exists because domain knowledge partly enables metacognitive accuracy — limited knowledge limits self-monitoring.',
        'Implication: confidence after passive study is an unreliable signal; external retrieval tests are needed to calibrate.'
      ]
    },

    's8-ai': {
      question: 'What is the grounding problem as it applies to AI? What practical implication does it have for how you set up prompts?',
      modelAnswer: 'Clark and Brennan\'s (1991) grounding framework describes how communication requires shared context. With another person, background knowledge, tone, and clarifying questions help establish that shared context implicitly. An AI system only has the context you explicitly provide. It does not know what you understand, what you have already tried, or what level of explanation you need — unless you tell it. The quality of AI output is largely determined by the quality of what you put in. Practically: every prompt should establish relevant context — what you already know, what you are trying to understand, what kind of response would help. "Explain working memory" gives the system almost nothing. "I understand that working memory is limited, but I am confused about why overload affects encoding specifically — can you give me one clear example?" gives the system much more to work with.',
      criteria: [
        'AI lacks direct access to the student\'s mental state, prior knowledge, or level of understanding.',
        'Shared context must be established explicitly by the student; unlike human conversation, it is not inferred.',
        'The quality of AI output is largely determined by the quality of what the student provides.',
        'Practical implication: every prompt should include relevant context — what you know, what confuses you, what kind of help you need.'
      ]
    }

  };

  /* ── Calibration feedback logic ───────────────────────────────────────────── */

  function getCalibrationFeedback(confidence, scored, total) {
    var accuracy = scored / total;
    if (confidence === 'high' && accuracy <= 0.5) {
      return 'You were confident before revealing, but your answer matched fewer than half the criteria. This is the calibration gap described in Section 7 — the feeling of knowing does not always track what you can produce. It is not a bad sign; it is diagnostic information about where to focus next.';
    }
    if (confidence === 'low' && accuracy >= 0.75) {
      return 'You were uncertain before revealing, but your answer matched most of the criteria. That is also a calibration issue — underconfidence can lead to over-studying material you already know. Notice this pattern if it recurs.';
    }
    if (accuracy >= 0.75) {
      return 'Your confidence and answer quality were reasonably aligned. This is what calibrated metacognition looks like in practice.';
    }
    if (accuracy >= 0.5) {
      return 'You matched about half the criteria — a partial understanding with some gaps. The specific criteria you did not check are the most efficient targets for your next review session.';
    }
    return 'Your answer matched fewer than half the criteria. That gap is information, not failure — it shows exactly where the retrieval pathway is weakest. The criteria you did not check are the highest-priority items before the first quiz.';
  }

  /* ── Build retrieval prompt HTML ──────────────────────────────────────────── */

  function buildRetrievalHTML(id, data) {
    var criteriaHTML = data.criteria.map(function (c, i) {
      return '<label class="criterion-label">' +
        '<input type="checkbox" class="criterion-check" data-index="' + i + '">' +
        '<span>' + c + '</span>' +
        '</label>';
    }).join('');

    return '<div class="callout-title">Stop and retrieve</div>' +
      '<p class="retrieve-question">' + data.question + '</p>' +

      /* Stage 1 */
      '<div class="retrieve-stage stage-1" data-stage="1">' +
        '<label class="retrieve-label" for="' + id + '-ta">Your answer — write before revealing anything:</label>' +
        '<textarea class="retrieve-textarea" id="' + id + '-ta" rows="5" ' +
          'placeholder="Write your answer here before seeing the model answer or criteria…" ' +
          'aria-label="Your answer"></textarea>' +

        '<fieldset class="confidence-fieldset">' +
          '<legend>Confidence before revealing:</legend>' +
          '<div class="confidence-options">' +
            '<label class="confidence-option"><input type="radio" name="' + id + '-conf" value="low"> Low</label>' +
            '<label class="confidence-option"><input type="radio" name="' + id + '-conf" value="medium"> Medium</label>' +
            '<label class="confidence-option"><input type="radio" name="' + id + '-conf" value="high"> High</label>' +
          '</div>' +
        '</fieldset>' +

        '<button class="pi-btn" data-action="reveal" aria-expanded="false" disabled>Reveal model answer</button>' +
        '<p class="reveal-hint">Select a confidence level to continue.</p>' +
      '</div>' +

      /* Stage 2 */
      '<div class="retrieve-stage stage-2" data-stage="2" hidden>' +
        '<div class="model-answer-block">' +
          '<div class="model-answer-label">Model answer</div>' +
          '<p class="model-answer-text">' + data.modelAnswer + '</p>' +
        '</div>' +
        '<fieldset class="criteria-fieldset">' +
          '<legend>Which of these does your answer include? Check all that apply.</legend>' +
          criteriaHTML +
        '</fieldset>' +
        '<button class="pi-btn" data-action="score">Submit self-score</button>' +
      '</div>' +

      /* Stage 3 */
      '<div class="retrieve-stage stage-3" data-stage="3" hidden>' +
        '<p class="calibration-feedback" aria-live="polite"></p>' +
        '<button class="pi-btn pi-btn--sm" data-action="reset">Try again</button>' +
      '</div>';
  }

  /* ── Wire one retrieval prompt ────────────────────────────────────────────── */

  function wireRetrieval(el, id, data) {
    var stage1 = el.querySelector('[data-stage="1"]');
    var stage2 = el.querySelector('[data-stage="2"]');
    var stage3 = el.querySelector('[data-stage="3"]');
    var revealBtn = el.querySelector('[data-action="reveal"]');
    var scoreBtn  = el.querySelector('[data-action="score"]');
    var resetBtn  = el.querySelector('[data-action="reset"]');
    var revealHint = el.querySelector('.reveal-hint');

    /* Enable reveal when confidence selected */
    el.querySelectorAll('[name="' + id + '-conf"]').forEach(function (r) {
      r.addEventListener('change', function () {
        revealBtn.disabled = false;
        revealHint.hidden = true;
      });
    });

    /* Reveal */
    revealBtn.addEventListener('click', function () {
      stage1.hidden = true;
      stage2.hidden = false;
      revealBtn.setAttribute('aria-expanded', 'true');
      var legend = stage2.querySelector('legend');
      if (legend) legend.focus();
    });

    /* Score */
    scoreBtn.addEventListener('click', function () {
      var confidence = (el.querySelector('[name="' + id + '-conf"]:checked') || {}).value || 'low';
      var checked = el.querySelectorAll('.criterion-check:checked').length;
      var total = data.criteria.length;

      saveAttempt({ promptId: id, confidence: confidence, scored: checked, total: total, timestamp: new Date().toISOString() });

      var feedback = getCalibrationFeedback(confidence, checked, total);
      var fbEl = stage3.querySelector('.calibration-feedback');
      fbEl.innerHTML = '<strong>Self-score: ' + checked + '/' + total + '</strong> &nbsp;|&nbsp; Confidence: ' + confidence + '<br>' + feedback;

      stage2.hidden = true;
      stage3.hidden = false;
      fbEl.focus();
    });

    /* Reset */
    resetBtn.addEventListener('click', function () {
      stage3.hidden = true;
      stage1.hidden = false;
      el.querySelectorAll('[name="' + id + '-conf"]').forEach(function (r) { r.checked = false; });
      el.querySelectorAll('.criterion-check').forEach(function (c) { c.checked = false; });
      var ta = el.querySelector('.retrieve-textarea');
      if (ta) ta.value = '';
      revealBtn.disabled = true;
      if (revealHint) revealHint.hidden = false;
    });
  }

  /* ── Init retrieval prompts ───────────────────────────────────────────────── */

  function initRetrievalPrompts() {
    document.querySelectorAll('[data-interactive="retrieve"]').forEach(function (el) {
      var id = el.getAttribute('data-prompt-id');
      if (!id || !PROMPTS[id]) return;
      el.innerHTML = buildRetrievalHTML(id, PROMPTS[id]);
      wireRetrieval(el, id, PROMPTS[id]);
    });
  }

  /* ── Calibration dashboard ────────────────────────────────────────────────── */

  function updateDashboard() {
    var container = document.getElementById('calibration-dashboard-content');
    if (!container) return;

    var data = loadData();

    if (data.length === 0) {
      container.innerHTML =
        '<p class="dashboard-empty">Complete the Stop &amp; Retrieve prompts above to see your calibration pattern here.</p>' +
        (!storageAvailable() ? '<p class="dashboard-warning">Note: browser storage is not available in this session. Data will not persist.</p>' : '') +
        '<button class="pi-btn pi-btn--sm pi-btn--danger" onclick="window._piClearData()">Clear my data</button>';
      return;
    }

    var attempted = data.length;
    var avgAcc = data.reduce(function (s, d) { return s + d.scored / d.total; }, 0) / attempted;
    var confMap = { low: 0, medium: 0.5, high: 1 };
    var avgConf = data.reduce(function (s, d) { return s + (confMap[d.confidence] || 0); }, 0) / attempted;
    var gap = avgConf - avgAcc;
    var over  = data.filter(function (d) { return (confMap[d.confidence] || 0) > (d.scored / d.total) + 0.25; }).length;
    var under = data.filter(function (d) { return (confMap[d.confidence] || 0) < (d.scored / d.total) - 0.25; }).length;

    var confLabel = avgConf >= 0.75 ? 'High' : avgConf >= 0.4 ? 'Medium' : 'Low';

    var pattern;
    if (gap > 0.2) {
      pattern = 'Your confidence tended to run above your self-scored accuracy. That is the calibration gap Section 7 describes.';
    } else if (gap < -0.2) {
      pattern = 'Your confidence tended to run below your self-scored accuracy — you may be underestimating your understanding. Notice whether this continues.';
    } else {
      pattern = 'Your confidence and self-scored accuracy were reasonably aligned across these prompts.';
    }

    container.innerHTML =
      '<div class="dashboard-grid">' +
        '<div class="dashboard-stat"><span class="stat-label">Prompts attempted</span><span class="stat-value">' + attempted + '</span></div>' +
        '<div class="dashboard-stat"><span class="stat-label">Avg self-scored accuracy</span><span class="stat-value">' + Math.round(avgAcc * 100) + '%</span></div>' +
        '<div class="dashboard-stat"><span class="stat-label">Avg confidence</span><span class="stat-value">' + confLabel + '</span></div>' +
        '<div class="dashboard-stat"><span class="stat-label">Overconfident attempts</span><span class="stat-value">' + over + '</span></div>' +
        '<div class="dashboard-stat"><span class="stat-label">Underconfident attempts</span><span class="stat-value">' + under + '</span></div>' +
      '</div>' +
      '<p class="dashboard-interpretation">This is your calibration pattern for this chapter\'s practice prompts. It is not a grade. ' + pattern + '</p>' +
      (!storageAvailable() ? '<p class="dashboard-warning">Note: browser storage is not available. Data will not persist across sessions.</p>' : '') +
      '<button class="pi-btn pi-btn--sm pi-btn--danger" onclick="if(confirm(\'Clear all calibration data for this prologue?\')) window._piClearData()">Clear my data</button>';
  }

  /* ── MCQ data ─────────────────────────────────────────────────────────────── */

  var MCQS = {

    'mcq-recognition-levels': {
      scenario: 'A student sees this question: <em>"What is working memory?"</em> with four answer choices. She reads all four options and selects the correct definition.',
      cue: 'Try to identify what level of memory performance this task requires before the options appear.',
      options: [
        {
          label: 'Recognition — the correct answer is present and she must identify it',
          correct: true,
          feedback: 'Correct. The answer is already in front of her; the task is to pick it out from the options. This is why multiple-choice can feel easier than it actually tests — recognition is easier than recall or application.'
        },
        {
          label: 'Recall — producing the definition from memory without seeing any options',
          correct: false,
          feedback: 'Not quite. Recall requires producing the answer without seeing it — a blank response field, no choices. When answer options are already present, the task is recognition, not recall.'
        },
        {
          label: 'Application — using the concept correctly in a new situation',
          correct: false,
          feedback: 'Not quite. Application requires generating a new use or example of the concept. This question asks for a definition and the answer is already visible — that is recognition.'
        }
      ]
    },

    'mcq-ai-use': {
      scenario: 'Before a quiz, a student pastes the learning objectives into an AI and asks: <em>"Summarize what I need to know for each of these."</em> She reads the response twice and feels ready.',
      cue: 'Try to identify the core learning-science problem here before the options appear.',
      options: [
        {
          label: 'Using AI at all before a quiz is the problem',
          correct: false,
          feedback: 'Not quite. The problem is not AI use itself — it is the timing and direction. AI that follows retrieval effort can support learning; AI that preempts it replaces the cognitive work that builds the memory.'
        },
        {
          label: 'She got AI output without first attempting retrieval — so she practiced reading fluency, not recalling',
          correct: true,
          feedback: 'Correct. She never attempted to retrieve anything. She read a polished summary and mistook comprehension fluency for retrievable knowledge. The AI did the cognitive work of organizing and explaining; she observed it. This is the same mechanism as the illusion of knowing from rereading, amplified by fluent AI output.'
        },
        {
          label: 'The AI summary was probably inaccurate',
          correct: false,
          feedback: 'Possibly — but that is a separate concern from the learning-science problem here. Even a perfectly accurate summary, read passively, produces familiarity rather than retrieval practice. Accuracy of the output does not fix the direction of effort.'
        }
      ]
    }

  };

  /* ── Init MCQs ────────────────────────────────────────────────────────────── */

  function initMCQs() {
    document.querySelectorAll('[data-interactive="mcq"]').forEach(function (el) {
      var id = el.getAttribute('data-prompt-id');
      if (!id || !MCQS[id]) return;
      var d = MCQS[id];

      var optsHTML = d.options.map(function (o, i) {
        return '<li><button class="mcq-option" data-idx="' + i + '" data-correct="' + o.correct + '" disabled>' + o.label + '</button></li>';
      }).join('');

      el.innerHTML =
        '<p class="mcq-scenario">' + d.scenario + '</p>' +
        '<p class="mcq-cue"><em>' + d.cue + '</em></p>' +
        '<p class="mcq-countdown" aria-live="polite" id="' + id + '-cd">Options in <strong id="' + id + '-n">5</strong>…</p>' +
        '<ul class="mcq-options" role="list">' + optsHTML + '</ul>' +
        '<p class="mcq-feedback" aria-live="polite"></p>';

      var count = 5;
      var nEl = el.querySelector('#' + id + '-n');
      var cdEl = el.querySelector('#' + id + '-cd');
      var opts = el.querySelectorAll('.mcq-option');

      var timer = setInterval(function () {
        count--;
        if (nEl) nEl.textContent = count;
        if (count <= 0) {
          clearInterval(timer);
          opts.forEach(function (b) { b.disabled = false; });
          if (cdEl) cdEl.hidden = true;
        }
      }, 1000);

      opts.forEach(function (btn) {
        btn.addEventListener('click', function () {
          clearInterval(timer);
          opts.forEach(function (b) { b.disabled = true; });
          var idx = parseInt(btn.getAttribute('data-idx'), 10);
          var correct = d.options[idx].correct;
          btn.classList.add(correct ? 'mcq-correct' : 'mcq-incorrect');
          if (!correct) {
            opts.forEach(function (b) {
              if (b.getAttribute('data-correct') === 'true') b.classList.add('mcq-show-correct');
            });
          }
          el.querySelector('.mcq-feedback').textContent = d.options[idx].feedback;
        });
      });
    });
  }

  /* ── Spaced retrieval scheduler ───────────────────────────────────────────── */

  function initScheduler() {
    var container = document.getElementById('scheduler-widget');
    if (!container) return;

    container.innerHTML =
      '<div class="callout-title">Study contract: before the first quiz</div>' +
      '<p>Enter your quiz date and the scheduler suggests three retrieval sessions. ' +
      'Spacing research supports distributing retrieval over time. These dates are a practical heuristic, not a perfect memory algorithm.</p>' +

      '<div class="scheduler-fields">' +

        '<div class="field-row">' +
          '<label for="sched-quiz">Quiz date</label>' +
          '<input type="date" id="sched-quiz">' +
        '</div>' +

        '<div class="sessions-suggested" id="sched-sessions" hidden>' +
          '<p class="sessions-note">Suggested retrieval sessions</p>' +
          '<div class="sessions-grid">' +
            '<div class="session-slot">' +
              '<label for="sched-s1">Session 1 <span class="session-tip">(within 24 h of reading)</span></label>' +
              '<input type="date" id="sched-s1">' +
            '</div>' +
            '<div class="session-slot">' +
              '<label for="sched-s2">Session 2 <span class="session-tip">(roughly halfway to quiz)</span></label>' +
              '<input type="date" id="sched-s2">' +
            '</div>' +
            '<div class="session-slot">' +
              '<label for="sched-s3">Session 3 <span class="session-tip">(1–2 days before quiz)</span></label>' +
              '<input type="date" id="sched-s3">' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="field-row">' +
          '<label for="sched-material">Concepts I will retrieve without looking</label>' +
          '<textarea id="sched-material" rows="3" placeholder="e.g., testing effect, working memory limits, negative reinforcement…"></textarea>' +
        '</div>' +

        '<div class="field-row">' +
          '<label for="sched-ai">One AI prompt I will use if genuinely stuck</label>' +
          '<textarea id="sched-ai" rows="2" placeholder="e.g., Quiz me on [topic] one question at a time…"></textarea>' +
        '</div>' +

        '<div class="field-row">' +
          '<label for="sched-not">One thing I will not count as studying by itself</label>' +
          '<input type="text" id="sched-not" placeholder="e.g., rereading the textbook…">' +
        '</div>' +

      '</div>' +

      '<div class="scheduler-actions">' +
        '<button class="pi-btn" onclick="window.print()">Print</button>' +
        '<button class="pi-btn" id="sched-copy">Copy plain text</button>' +
        '<button class="pi-btn" id="sched-ics">Download calendar (.ics)</button>' +
      '</div>' +
      '<p class="sched-status" aria-live="polite" id="sched-status"></p>';

    /* Auto-suggest sessions */
    document.getElementById('sched-quiz').addEventListener('change', function () {
      var val = this.value;
      if (!val) return;
      var quiz = new Date(val + 'T12:00:00');
      if (isNaN(quiz)) return;

      var today = new Date();
      today.setHours(12, 0, 0, 0);

      var fmt = function (d) { return d.toISOString().split('T')[0]; };

      var s1 = new Date(today);
      s1.setDate(today.getDate() + 1);

      var days = Math.round((quiz - today) / 86400000);
      var s2 = new Date(today);
      s2.setDate(today.getDate() + Math.max(2, Math.floor(days / 2)));

      var s3 = new Date(quiz);
      s3.setDate(quiz.getDate() - 1);

      document.getElementById('sched-s1').value = fmt(s1);
      document.getElementById('sched-s2').value = fmt(s2);
      document.getElementById('sched-s3').value = fmt(s3);
      document.getElementById('sched-sessions').hidden = false;
    });

    /* Copy plain text */
    document.getElementById('sched-copy').addEventListener('click', function () {
      var text = buildSchedulerText();
      var status = document.getElementById('sched-status');
      var done = function () {
        status.textContent = 'Copied to clipboard.';
        setTimeout(function () { status.textContent = ''; }, 3000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {
          fallbackCopy(text);
          done();
        });
      } else {
        fallbackCopy(text);
        done();
      }
    });

    /* Download .ics */
    document.getElementById('sched-ics').addEventListener('click', function () {
      var ics = buildICS();
      var status = document.getElementById('sched-status');
      if (!ics) {
        status.textContent = 'Enter a quiz date first.';
        setTimeout(function () { status.textContent = ''; }, 3000);
        return;
      }
      var blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'psych101-retrieval-sessions.ics';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* silent */ }
    document.body.removeChild(ta);
  }

  function buildSchedulerText() {
    var v = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
    var lines = ['Psych101 Study Contract', '─────────────────────────────'];
    var quiz = v('sched-quiz');
    if (quiz) lines.push('Quiz date: ' + quiz);
    var s1 = v('sched-s1'); if (s1) lines.push('Retrieval session 1: ' + s1);
    var s2 = v('sched-s2'); if (s2) lines.push('Retrieval session 2: ' + s2);
    var s3 = v('sched-s3'); if (s3) lines.push('Retrieval session 3: ' + s3);
    var mat = v('sched-material'); if (mat) lines.push('', 'Concepts to retrieve:', mat);
    var ai  = v('sched-ai');       if (ai)  lines.push('', 'AI prompt if stuck:', ai);
    var not = v('sched-not');      if (not) lines.push('', 'Not counting as studying by itself: ' + not);
    return lines.join('\n');
  }

  function buildICS() {
    var material = (document.getElementById('sched-material') || {}).value || '';
    var title = 'Psychology retrieval: ' + (material.split('\n')[0] || 'Prologue concepts').substring(0, 55);

    var slots = [
      { id: 'sched-s1', n: 1 },
      { id: 'sched-s2', n: 2 },
      { id: 'sched-s3', n: 3 }
    ];

    var events = [];
    slots.forEach(function (s) {
      var el = document.getElementById(s.id);
      if (!el || !el.value) return;
      var dt = el.value.replace(/-/g, '');
      var dtNext = (function () {
        var d = new Date(el.value + 'T12:00:00');
        d.setDate(d.getDate() + 1);
        return d.toISOString().split('T')[0].replace(/-/g, '');
      }());
      events.push(
        'BEGIN:VEVENT\r\n' +
        'UID:psych101-s' + s.n + '-' + Date.now() + '@psych101\r\n' +
        'DTSTART;VALUE=DATE:' + dt + '\r\n' +
        'DTEND;VALUE=DATE:' + dtNext + '\r\n' +
        'SUMMARY:' + title + ' (session ' + s.n + ')\r\n' +
        'DESCRIPTION:Psych101 spaced retrieval. Retrieve without notes first\\, then check.\r\n' +
        'END:VEVENT'
      );
    });

    if (events.length === 0) return null;

    return 'BEGIN:VCALENDAR\r\n' +
      'VERSION:2.0\r\n' +
      'PRODID:-//Psych101//Study Scheduler//EN\r\n' +
      'CALSCALE:GREGORIAN\r\n' +
      'METHOD:PUBLISH\r\n' +
      events.join('\r\n') + '\r\n' +
      'END:VCALENDAR\r\n';
  }

  /* ── AI prompt builder ────────────────────────────────────────────────────── */

  var PATTERNS = [
    {
      id: 'pa',
      name: 'Pattern A — Quiz me on a topic',
      template: 'Quiz me on [TOPIC] one question at a time. Wait for my answer before showing the next question. After each answer, identify what I got right, what I missed, and ask one follow-up application question.',
      note: 'Use this after you have tried to write down what you already know. Retrieval before AI, not instead of it.'
    },
    {
      id: 'pb',
      name: 'Pattern B — Critique my explanation',
      template: 'I will explain [TOPIC] to you in my own words. Do not correct me until I finish. Then identify any inaccuracies, missing pieces, and one place I should clarify. Do not rewrite my explanation.',
      note: 'This forces retrieval before AI gives feedback. The "do not rewrite" instruction prevents AI from doing the cognitive work for you.'
    },
    {
      id: 'pc',
      name: 'Pattern C — Generate application scenarios',
      template: 'Give me one short scenario at a time related to [TOPIC]. After each scenario, ask me to identify the relevant concept and explain my reasoning. Wait for my answer before evaluating.',
      note: 'This trains transfer and application — the hardest level of memory performance. Use it after you can recall the basic definition.'
    }
  ];

  function initPromptBuilder() {
    var container = document.getElementById('ai-prompt-builder');
    if (!container) return;

    var cardsHTML = PATTERNS.map(function (p) {
      return '<div class="pattern-card">' +
        '<div class="pattern-name">' + p.name + '</div>' +
        '<p class="pattern-template">' + p.template + '</p>' +
        '<p class="pattern-note"><em>' + p.note + '</em></p>' +
        '<div class="pattern-row">' +
          '<label class="sr-only" for="' + p.id + '-topic">Topic for ' + p.name + '</label>' +
          '<input type="text" id="' + p.id + '-topic" class="pattern-topic" ' +
            'placeholder="Enter topic (e.g. working memory, operant conditioning…)" ' +
            'aria-label="Topic for ' + p.name + '">' +
          '<button class="pi-btn" data-pid="' + p.id + '">Copy prompt</button>' +
        '</div>' +
        '<p class="copy-status" id="' + p.id + '-status" aria-live="polite"></p>' +
      '</div>';
    }).join('');

    container.innerHTML =
      '<div class="callout-title">AI study prompt builder</div>' +
      '<p>Enter a topic, then copy the prompt into any AI tool. Use these <em>after</em> you have attempted retrieval — not as a substitute for it.</p>' +
      cardsHTML;

    PATTERNS.forEach(function (p) {
      container.querySelector('[data-pid="' + p.id + '"]').addEventListener('click', function () {
        var topic = (document.getElementById(p.id + '-topic') || {}).value.trim() || '[topic]';
        var text = p.template.replace('[TOPIC]', topic);
        var status = document.getElementById(p.id + '-status');

        var done = function () {
          status.textContent = 'Copied.';
          setTimeout(function () { status.textContent = ''; }, 2500);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text); done(); });
        } else {
          fallbackCopy(text);
          done();
        }
      });
    });
  }

  /* ── Bootstrap ────────────────────────────────────────────────────────────── */

  function init() {
    initRetrievalPrompts();
    initMCQs();
    initScheduler();
    initPromptBuilder();
    updateDashboard();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
