// Chapter figure "in-place expand" — click a capped-height figure to grow
// it to full width within the page flow (no modal/overlay, no new tab).
// Generated figures already include an <a> fallback to the full-size image.
// Legacy wide-only figures are normalized at runtime so stale chapter HTML
// does not leave them permanently oversized. Add .no-expand to opt out.
(function () {
  function normalizeLegacyWideFigure(figure) {
    if (figure.classList.contains('expandable') || figure.classList.contains('no-expand')) return;

    var image = null;
    for (var i = 0; i < figure.children.length; i += 1) {
      if (figure.children[i].tagName === 'IMG') {
        image = figure.children[i];
        break;
      }
    }
    if (!image) return;

    var link = document.createElement('a');
    link.className = 'figure-expand-toggle';
    link.href = image.getAttribute('src') || image.currentSrc;
    link.setAttribute('aria-label', 'Expand figure');
    link.setAttribute('aria-expanded', 'false');

    figure.insertBefore(link, image);
    link.appendChild(image);
    figure.classList.add('expandable');
  }

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

  document.querySelectorAll('.chapter-figure.wide').forEach(normalizeLegacyWideFigure);

  document.querySelectorAll('.chapter-figure.expandable:not(.no-expand) .figure-expand-toggle').forEach(function (link) {
    var figure = link.closest('.chapter-figure');
    setState(figure, false);
    link.addEventListener('click', function (e) {
      e.preventDefault();
      setState(figure, !figure.classList.contains('is-expanded'));
    });
  });
})();
