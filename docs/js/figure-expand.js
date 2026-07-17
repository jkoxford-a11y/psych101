// Chapter figure "in-place expand" — click a capped-height figure to grow
// it to full width within the page flow (no modal/overlay, no new tab).
// The wrapped <a href> points at the full-size image, so with JS disabled
// the link still works as a plain "open image" fallback.
(function () {
  function setState(figure, expanded) {
    figure.classList.toggle('is-expanded', expanded);
    var link = figure.querySelector('.figure-expand-toggle');
    if (link) {
      link.setAttribute('aria-expanded', String(expanded));
      link.setAttribute('aria-label', expanded ? 'Collapse figure' : 'Expand figure');
    }
    var hint = figure.querySelector('.figure-expand-hint');
    if (hint) hint.textContent = expanded ? 'Click to collapse' : 'Click to expand';
  }

  document.querySelectorAll('.chapter-figure.expandable .figure-expand-toggle').forEach(function (link) {
    link.setAttribute('aria-expanded', 'false');
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var figure = link.closest('.chapter-figure');
      setState(figure, !figure.classList.contains('is-expanded'));
    });
  });
})();
