/* Finding the Rule: Fluid Intelligence as Model-Building */

(function () {
  'use strict';

  const STORAGE_KEY = 'psych101-lab-ch09-fluid-intelligence-rule-finding';
  const SVG_NS = 'http://www.w3.org/2000/svg';

  const puzzles = [
    {
      title: 'Puzzle 1: One Relation',
      type: 'Practice puzzle',
      instructions: 'Start with one rule. Across each row, the shape changes in the same order.',
      matrix: [['○', '△', '□'], ['○', '△', '□'], ['○', '△', '?']],
      choices: ['○', '△', '□', '▥'],
      labels: ['Empty circle', 'Empty triangle', 'Empty square', 'Striped square'],
      correct: 2,
      explanation: 'Across each row, the shape sequence is circle → triangle → square. The missing piece is an empty square.',
      ruleSummary: 'You compressed the visible examples into one rule: shape changes across each row.'
    },
    {
      title: 'Puzzle 2: Two Relations',
      type: 'Combined-rules puzzle',
      instructions: 'Now two rules matter at once: one across rows, one down columns.',
      matrix: [['○', '△', '□'], ['◍', '▵', '▥'], ['●', '▲', '?']],
      choices: ['□', '▥', '■', '▲'],
      labels: ['Empty square', 'Striped square', 'Solid square', 'Solid triangle'],
      correct: 2,
      explanation: 'Across each row, the shape changes circle → triangle → square. Down each column, the fill changes empty → striped → solid. The missing piece is a solid square.',
      ruleSummary: 'You had to hold two relations in mind at once: shape across rows and fill down columns.'
    },
    {
      title: 'Puzzle 3: Relations, Not Matching',
      type: 'Relational puzzle',
      instructions: 'The rule depends on number and position rather than shape identity.',
      matrix: [['•', '••', '•••'], ['·\n•', '·\n••', '·\n•••'], ['·\n·\n•', '·\n·\n••', '?']],
      choices: ['·\n·\n••', '·\n•••', '·\n·\n•••', '·\n·\n••••'],
      labels: ['Two dots at the bottom', 'Three dots in the middle', 'Three dots at the bottom', 'Four dots at the bottom'],
      correct: 2,
      explanation: 'Across each row, the number of dots increases from one to two to three. Down each column, the dots move from top to middle to bottom. The missing piece is three dots at the bottom.',
      ruleSummary: 'You had to track relations, not just choose the most visually similar option.'
    },
    {
      title: 'Puzzle 4: Ignore the Distractor',
      type: 'Distractor puzzle',
      instructions: 'One feature is noisy. Letter color changes, but it does not predict the missing piece.',
      matrix: [['↑', '→', '↓'], ['↑•', '→•', '↓•'], ['↑••', '→••', '?']],
      choices: ['→••', '↓•', '↓••', '↑••'],
      labels: ['Right arrow with two dots', 'Down arrow with one dot', 'Down arrow with two dots', 'Up arrow with two dots'],
      correct: 2,
      explanation: 'Across each row, arrow direction changes up → right → down. Down each column, dot count increases from zero to one to two. Color changes were irrelevant. The missing piece is a down arrow with two dots.',
      ruleSummary: 'This is the blind spot: attention can compress the wrong feature and miss the rule that matters.'
    }
  ];

  const initialState = {
    committed: false,
    difficultyPrediction: '',
    strategyPrediction: '',
    puzzleIndex: 0,
    currentChoice: '',
    checked: false,
    responses: [],
    log: [],
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
    ['difficultyPrediction', 'strategyPrediction', 'commitPredictions', 'predictionStatus', 'puzzlePanel', 'puzzleCounter', 'scoreStatus', 'puzzleType', 'puzzleHeading', 'puzzleInstructions', 'matrixTitle', 'matrixDesc', 'matrixLayer', 'answerOptions', 'answerFieldset', 'checkAnswer', 'feedbackPanel', 'feedbackHeading', 'feedbackText', 'ruleExplanation', 'nextPuzzle', 'eventList', 'explainPanel', 'explanationResponse', 'saveExplanation', 'explanationStatus', 'transferPanel', 'completionSummary', 'transferResponse', 'saveTransfer', 'restartLab', 'transferStatus'].forEach(function (key) {
      const id = key.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); });
      elements[key] = document.getElementById(id);
    });
  }

  function bindEvents() {
    elements.commitPredictions.addEventListener('click', commitPredictions);
    elements.checkAnswer.addEventListener('click', checkAnswer);
    elements.nextPuzzle.addEventListener('click', nextPuzzle);
    elements.saveExplanation.addEventListener('click', saveExplanation);
    elements.saveTransfer.addEventListener('click', saveTransfer);
    elements.restartLab.addEventListener('click', restartLab);
  }

  function commitPredictions() {
    const difficultyPrediction = elements.difficultyPrediction.value.trim();
    const strategyPrediction = elements.strategyPrediction.value.trim();
    if (!difficultyPrediction) {
      elements.predictionStatus.textContent = 'Write your difficulty prediction before committing.';
      elements.difficultyPrediction.focus();
      return;
    }
    if (!strategyPrediction) {
      elements.predictionStatus.textContent = 'Write your strategy prediction before committing.';
      elements.strategyPrediction.focus();
      return;
    }
    state.committed = true;
    state.difficultyPrediction = difficultyPrediction;
    state.strategyPrediction = strategyPrediction;
    state.log = ['Predictions committed. Puzzle 1 is now available.'];
    saveState();
    renderAll();
    elements.puzzleHeading.focus();
  }

  function checkAnswer() {
    const selected = document.querySelector('input[name="missingPiece"]:checked');
    if (!selected) {
      showFeedback('Choose an option first.', 'Commit to one missing piece before checking the rule.', '', null);
      return;
    }
    const puzzle = currentPuzzle();
    const choiceIndex = Number(selected.value);
    const isCorrect = choiceIndex === puzzle.correct;
    state.currentChoice = selected.value;
    state.checked = true;
    state.responses[state.puzzleIndex] = { choice: choiceIndex, correct: isCorrect };
    state.log.push(`${puzzle.title}: selected ${puzzle.labels[choiceIndex]} — ${isCorrect ? 'correct' : 'not correct'}.`);
    saveState();
    renderAll();
    elements.feedbackPanel.focus();
  }

  function nextPuzzle() {
    if (!state.checked) return;
    if (state.puzzleIndex < puzzles.length - 1) {
      state.puzzleIndex += 1;
      state.currentChoice = '';
      state.checked = false;
      state.log.push(`Moved to ${currentPuzzle().title}.`);
      saveState();
      renderAll();
      elements.puzzleHeading.focus();
      return;
    }
    state.puzzleIndex = puzzles.length;
    state.currentChoice = '';
    state.checked = false;
    state.log.push('All puzzles complete. Reflection and transfer are now available.');
    saveState();
    renderAll();
    document.getElementById('explain-heading').focus();
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
    renderPuzzleState();
    renderLog();
    renderReflectionPanels();
  }

  function renderPredictionState() {
    elements.difficultyPrediction.value = state.difficultyPrediction;
    elements.strategyPrediction.value = state.strategyPrediction;
    elements.difficultyPrediction.disabled = state.committed;
    elements.strategyPrediction.disabled = state.committed;
    elements.commitPredictions.disabled = state.committed;
    elements.puzzlePanel.hidden = !state.committed || isComplete();
    if (state.committed) elements.predictionStatus.textContent = 'Predictions committed and saved for this session.';
  }

  function renderPuzzleState() {
    if (!state.committed || isComplete()) return;
    const puzzle = currentPuzzle();
    const correctCount = state.responses.filter(function (response) { return response && response.correct; }).length;
    elements.puzzleCounter.textContent = `Puzzle ${state.puzzleIndex + 1} of ${puzzles.length}`;
    elements.scoreStatus.textContent = `Correct: ${correctCount}`;
    elements.puzzleType.textContent = puzzle.type;
    elements.puzzleHeading.textContent = puzzle.title;
    elements.puzzleInstructions.textContent = puzzle.instructions;
    elements.matrixTitle.textContent = puzzle.title;
    elements.matrixDesc.textContent = `${puzzle.title}. A 3 by 3 visual matrix has one missing cell. Choose the missing piece from the options below.`;
    renderMatrix(puzzle);
    renderOptions(puzzle);
    renderFeedback(puzzle);
  }

  function renderMatrix(puzzle) {
    elements.matrixLayer.innerHTML = '';
    const startX = 70;
    const startY = 45;
    const cell = 112;
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        drawCell(startX + col * cell, startY + row * cell, cell, puzzle.matrix[row][col]);
      }
    }
    puzzle.choices.forEach(function (choice, index) {
      drawChoice(490, 70 + index * 95, String.fromCharCode(65 + index), choice, String(index) === state.currentChoice);
    });
  }

  function drawCell(x, y, size, text) {
    addSvg('rect', { x, y, width: size, height: size, fill: '#fff', stroke: '#111827', 'stroke-width': 2 });
    drawMultilineText(text, x + size / 2, y + size / 2, 42, '#111827');
  }

  function drawChoice(x, y, letter, text, selected) {
    addSvg('rect', { x, y, width: 160, height: 76, rx: 8, ry: 8, fill: selected ? '#eff6ff' : '#fff', stroke: selected ? '#2563eb' : '#d1d5db', 'stroke-width': selected ? 3 : 1.5 });
    addText(letter, x + 18, y + 32, 20, '#111827', 'start', '700');
    drawMultilineText(text, x + 98, y + 40, 32, '#111827');
  }

  function drawMultilineText(text, cx, cy, size, fill) {
    const lines = String(text).split('\n');
    lines.forEach(function (line, index) {
      const offset = (index - (lines.length - 1) / 2) * (size * 0.9);
      addText(line, cx, cy + offset + size / 3, size, fill, 'middle', '700');
    });
  }

  function addText(content, x, y, size, fill, anchor, weight) {
    const text = addSvg('text', { x, y, 'text-anchor': anchor, 'font-family': 'Arial, sans-serif', 'font-size': size, 'font-weight': weight, fill });
    text.textContent = content;
  }

  function addSvg(name, attrs) {
    const el = document.createElementNS(SVG_NS, name);
    Object.keys(attrs).forEach(function (key) { el.setAttribute(key, attrs[key]); });
    elements.matrixLayer.appendChild(el);
    return el;
  }

  function renderOptions(puzzle) {
    elements.answerOptions.innerHTML = '';
    puzzle.choices.forEach(function (_choice, index) {
      const label = document.createElement('label');
      label.className = 'option-row';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'missingPiece';
      input.value = String(index);
      input.checked = state.currentChoice === String(index);
      input.disabled = state.checked;
      input.addEventListener('change', function () {
        state.currentChoice = String(index);
        saveState();
        renderMatrix(puzzle);
      });
      const span = document.createElement('span');
      span.textContent = `${String.fromCharCode(65 + index)}. ${puzzle.labels[index]}`;
      label.appendChild(input);
      label.appendChild(span);
      elements.answerOptions.appendChild(label);
    });
    elements.checkAnswer.disabled = state.checked;
    elements.answerFieldset.disabled = state.checked;
  }

  function renderFeedback(puzzle) {
    if (!state.checked) {
      elements.feedbackPanel.hidden = true;
      elements.feedbackPanel.classList.remove('is-correct', 'is-incorrect');
      return;
    }
    const response = state.responses[state.puzzleIndex];
    showFeedback(response.correct ? 'Correct: you found the rule.' : 'Not quite: check which relation predicts the missing cell.', puzzle.explanation, puzzle.ruleSummary, response.correct);
    elements.nextPuzzle.textContent = state.puzzleIndex < puzzles.length - 1 ? 'Next puzzle' : 'Finish and reflect';
  }

  function showFeedback(heading, text, rule, isCorrect) {
    elements.feedbackPanel.hidden = false;
    elements.feedbackPanel.classList.toggle('is-correct', isCorrect === true);
    elements.feedbackPanel.classList.toggle('is-incorrect', isCorrect === false);
    elements.feedbackHeading.textContent = heading;
    elements.feedbackText.textContent = text;
    elements.ruleExplanation.textContent = rule;
  }

  function renderLog() {
    elements.eventList.innerHTML = '';
    state.log.forEach(function (entry) {
      const li = document.createElement('li');
      li.textContent = entry;
      elements.eventList.appendChild(li);
    });
  }

  function renderReflectionPanels() {
    const complete = isComplete();
    elements.explainPanel.hidden = !complete;
    elements.transferPanel.hidden = !complete;
    elements.explanationResponse.value = state.explanation;
    elements.transferResponse.value = state.transfer;
    if (complete) {
      const correctCount = state.responses.filter(function (response) { return response && response.correct; }).length;
      elements.completionSummary.textContent = `Completion summary: you completed ${puzzles.length} novel rule-finding puzzles and answered ${correctCount} correctly on the first check. The important point is not the score by itself; it is the process. You compressed partial visual evidence into rules, applied those rules to new cases, and sometimes had to ignore distracting features.`;
    }
  }

  function currentPuzzle() { return puzzles[state.puzzleIndex]; }
  function isComplete() { return state.puzzleIndex >= puzzles.length; }

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
      if (saved && Array.isArray(saved.responses) && Array.isArray(saved.log)) state = Object.assign(copyInitialState(), saved);
    } catch (error) {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }

  document.addEventListener('DOMContentLoaded', initializeLab);
})();
