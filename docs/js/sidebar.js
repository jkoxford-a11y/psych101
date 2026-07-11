(function () {
  "use strict";

  var TOP_ITEMS_FULL = [
    { id: "toc", label: "Table of Contents", path: "index.html" },
    { id: "prologue", label: "0 — Prologue: How to Actually Learn This Stuff", path: "chapters/prologue.html" },
    { id: "labs", label: "Learning Labs", path: "labs/index.html" }
  ];

  var TOP_ITEMS_TOC_ONLY = [
    { id: "toc", label: "Table of Contents", path: "index.html" }
  ];

  var PILLARS = [
    {
      name: "Foundations",
      chapters: [
        { id: "01", label: "1 — History & Approaches", path: "chapters/01-history-approaches.html" },
        { id: "02", label: "2 — Research Methods & Statistics", path: "chapters/02-research-methods.html" }
      ]
    },
    {
      name: "Biological",
      chapters: [
        { id: "03", label: "3 — Neuroscience & Biological Bases", path: "chapters/03-neuroscience.html" },
        { id: "04", label: "4 — Sensation & Perception", path: "chapters/04-sensation-perception.html" },
        { id: "05", label: "5 — Consciousness", path: "chapters/05-consciousness.html" },
        { id: "06", label: "6 — Sleep", path: null, pending: "(coming soon)" }
      ]
    },
    {
      name: "Cognitive",
      chapters: [
        { id: "07", label: "7 — Learning", path: "chapters/07-learning.html" },
        { id: "08", label: "8 — Memory", path: "chapters/08-memory.html" },
        { id: "09", label: "9 — Thinking, Language & Intelligence", path: "chapters/09-thinking-language-intelligence.html" }
      ]
    },
    {
      name: "Developmental",
      chapters: [
        { id: "10", label: "10 — Lifespan Development", path: "chapters/10-lifespan-development.html" }
      ]
    },
    {
      name: "Social & Personality",
      chapters: [
        { id: "11", label: "11 — Social Psychology", path: "chapters/11-social-psychology.html" }
      ]
    },
    {
      name: "Mental & Physical Health",
      chapters: [
        { id: "12", label: "12 — Emotion, Stress & Coping", path: "chapters/12-emotion-stress-coping.html" },
        { id: "13", label: "13 — Disorders & Therapy", path: "chapters/13-disorders-therapy.html" }
      ]
    }
  ];

  // Resolve a docs-root-relative target path into an href usable from
  // the current page, given the current page's docs-root-relative directory.
  function resolveHref(currentDir, targetPath) {
    var dirSegs = currentDir ? currentDir.split("/").filter(Boolean) : [];
    var targetSegs = targetPath.split("/").filter(Boolean);
    var i = 0;
    while (i < dirSegs.length && i < targetSegs.length - 1 && dirSegs[i] === targetSegs[i]) {
      i++;
    }
    var ups = dirSegs.length - i;
    var remainder = targetSegs.slice(i);
    var prefix = "";
    for (var j = 0; j < ups; j++) prefix += "../";
    return prefix + remainder.join("/");
  }

  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, k)) e.setAttribute(k, attrs[k]);
      }
    }
    if (text) e.textContent = text;
    return e;
  }

  function render(root, opts) {
    var currentDir = opts.dir || "";
    var activeId = opts.active || "";
    var topItems = opts.top === "toc-only" ? TOP_ITEMS_TOC_ONLY : TOP_ITEMS_FULL;

    var inner = el("div", { class: "sidebar-inner" });

    var toggleBtn = el("button", {
      class: "sidebar-toggle",
      type: "button",
      "aria-label": "Collapse sidebar"
    }, "☰");
    inner.appendChild(toggleBtn);

    var titleDiv = el("div", { class: "book-title" }, "General Psychology");
    inner.appendChild(titleDiv);

    var nav = el("nav", { "aria-label": "Book navigation" });
    var ul = el("ul");

    topItems.forEach(function (item) {
      var li = el("li");
      var a = el("a", { href: resolveHref(currentDir, item.path) }, item.label);
      if (item.id === activeId) a.setAttribute("class", "active");
      li.appendChild(a);
      ul.appendChild(li);
    });

    // spacer
    ul.appendChild(el("li", { style: "height: 0.6rem;" }));

    PILLARS.forEach(function (pillar) {
      var containsActive = pillar.chapters.some(function (c) { return c.id === activeId; });

      var groupLi = el("li", { class: "pillar-group" });

      var toggle = el("button", {
        class: "pillar-toggle",
        type: "button",
        "aria-expanded": containsActive ? "true" : "false"
      });
      toggle.appendChild(document.createTextNode(pillar.name));
      var chevron = el("span", { class: "chevron", "aria-hidden": "true" }, "▾");
      toggle.appendChild(chevron);
      groupLi.appendChild(toggle);

      var chaptersWrap = el("ul", { class: "pillar-chapters" + (containsActive ? " expanded" : "") });

      pillar.chapters.forEach(function (chapter) {
        var cLi = el("li");
        if (chapter.path) {
          var a = el("a", { href: resolveHref(currentDir, chapter.path) }, chapter.label);
          if (chapter.id === activeId) a.setAttribute("class", "active");
          cLi.appendChild(a);
        } else {
          cLi.setAttribute("class", "pillar-note");
          cLi.appendChild(document.createTextNode(chapter.label + " "));
          cLi.appendChild(el("span", { class: "toc-pending" }, chapter.pending || "(coming soon)"));
        }
        chaptersWrap.appendChild(cLi);
      });

      groupLi.appendChild(chaptersWrap);
      ul.appendChild(groupLi);

      toggle.addEventListener("click", function () {
        var expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
        chaptersWrap.classList.toggle("expanded", !expanded);
      });
    });

    nav.appendChild(ul);
    inner.appendChild(nav);
    root.appendChild(inner);

    // Collapse/expand behaviour, persisted across page loads.
    function setCollapsed(collapsed) {
      root.classList.toggle("collapsed", collapsed);
      document.body.classList.toggle("sidebar-collapsed", collapsed);
      try {
        window.localStorage.setItem("psych101-sidebar-collapsed", collapsed ? "1" : "0");
      } catch (e) {
        // localStorage unavailable (e.g. private browsing) - collapse still
        // works for this page load, it just won't persist.
      }
    }

    toggleBtn.addEventListener("click", function () {
      setCollapsed(!root.classList.contains("collapsed"));
    });

    var floatBtn = el("button", {
      class: "sidebar-toggle sidebar-toggle--float",
      type: "button",
      "aria-label": "Expand sidebar"
    }, "☰");
    floatBtn.addEventListener("click", function () { setCollapsed(false); });
    document.body.appendChild(floatBtn);

    var stored;
    try {
      stored = window.localStorage.getItem("psych101-sidebar-collapsed");
    } catch (e) {
      stored = null;
    }
    // Keep this query string in sync with the one in docs/css/style.css's
    // "Responsive" block — width-only misses landscape phones, which is
    // why this also checks for a touch/no-hover device.
    var MOBILE_QUERY = "(max-width: 700px), (hover: none) and (pointer: coarse)";
    if (stored === "1") {
      setCollapsed(true);
    } else if (stored === null && window.matchMedia && window.matchMedia(MOBILE_QUERY).matches) {
      // First visit on a narrow or touch screen: default to collapsed so
      // the sidebar doesn't cover the whole viewport on load. Only applies
      // when the user has no saved preference yet; an explicit "0"
      // (expanded) from a prior visit is still respected.
      setCollapsed(true);
    }
  }

  function init() {
    var script = document.currentScript;
    var root = document.getElementById("app-sidebar");
    if (!root || !script) return;
    render(root, {
      dir: script.getAttribute("data-dir") || "",
      active: script.getAttribute("data-active") || "",
      top: script.getAttribute("data-top") || "full"
    });
  }

  init();
})();
