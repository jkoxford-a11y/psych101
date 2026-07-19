(function () {
  'use strict';

  function initializeSessionControls() {
    const storageKey = document.body.dataset.labStorageKey;
    const commitButton = document.getElementById('commit-prediction') || document.getElementById('commit-predictions');
    const restartButton = document.getElementById('restart-lab') || document.getElementById('reset-lab');
    const legacyResetStatus = document.getElementById('reset-status');
    const predictionStatus = document.getElementById('prediction-status') || document.getElementById('progress-status');
    const predictionPanel = document.getElementById('prediction-panel') || (commitButton && commitButton.closest('section'));

    if (!storageKey || !predictionPanel || !commitButton || !restartButton) return;

    predictionPanel.classList.add('lab-prediction-panel');
    const predictionControls = document.getElementById('prediction-fieldset') || document.getElementById('prediction-form') || predictionPanel;
    predictionControls.classList.add('lab-prediction-controls');

    const controls = document.createElement('div');
    controls.className = 'lab-session-controls';
    controls.id = 'lab-session-controls';
    controls.hidden = true;

    const resumeStatus = document.createElement('p');
    resumeStatus.className = 'save-status';
    resumeStatus.id = 'session-resume-status';
    resumeStatus.setAttribute('aria-live', 'polite');

    restartButton.textContent = 'Start over';
    controls.appendChild(resumeStatus);
    controls.appendChild(restartButton);
    predictionPanel.appendChild(controls);

    let announceRestoration = hasSavedState();

    function hasSavedState() {
      try {
        return sessionStorage.getItem(storageKey) !== null;
      } catch (error) {
        return false;
      }
    }

    function refresh() {
      const hasProgress = hasSavedState() || commitButton.disabled;
      controls.hidden = !hasProgress;
      resumeStatus.textContent = hasProgress && announceRestoration
        ? 'Resumed progress from this browser-tab session.'
        : '';
    }

    restartButton.addEventListener('click', function () {
      announceRestoration = false;
      queueMicrotask(function () {
        if (legacyResetStatus) legacyResetStatus.textContent = '';
        refresh();
      });
    });

    document.addEventListener('click', function () {
      queueMicrotask(refresh);
    });

    refresh();
  }

  document.addEventListener('DOMContentLoaded', initializeSessionControls);
}());
