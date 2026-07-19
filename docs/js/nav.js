/* Psych101 Textbook — navigation helpers */

(function () {
  'use strict';

  // Mark current chapter as active in sidebar
  function setActiveNav() {
    const current = window.location.pathname.split('/').pop();
    document.querySelectorAll('.sidebar nav a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href && href.split('/').pop() === current) {
        link.classList.add('active');
      }
    });
  }

  // Smooth scroll for in-page anchor links
  function smoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Chapter 1 predates the shared figure converter. Enhance its dense language
  // comparison with the same in-place expand behavior used by generated figures.
  function enableChapterOneLanguageFigureExpansion() {
    const image = document.querySelector(
      '.chapter-figure > img[src$="fig_1_3_language_explanations.png"]'
    );
    if (!image) return;

    const figure = image.closest('.chapter-figure');
    if (!figure || figure.classList.contains('expandable')) return;

    const link = document.createElement('a');
    link.className = 'figure-expand-toggle';
    link.href = image.getAttribute('src') || image.currentSrc;
    link.setAttribute('aria-label', 'Expand figure');

    figure.insertBefore(link, image);
    link.appendChild(image);
    figure.classList.add('expandable');

    if (!document.querySelector('script[src$="figure-expand.js"]')) {
      const script = document.createElement('script');
      script.src = '../js/figure-expand.js';
      document.body.appendChild(script);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    smoothAnchors();
    enableChapterOneLanguageFigureExpansion();
  });
})();
