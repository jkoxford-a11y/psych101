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

  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    smoothAnchors();
  });
})();
