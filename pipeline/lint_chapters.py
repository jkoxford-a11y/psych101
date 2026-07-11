#!/usr/bin/env python3
"""
Structural linter for docs/chapters/*.html -- pipeline/sonnet5-improvement-plan.md Task 0.

Converts "hope the model notices" into "the script fails the build." Checks every
built chapter for the consistency defects the Session 8x audit found by hand:
truncation/well-formedness, required sections, Stop & Retrieve density, review-question
count and markup, Connections table shape + anchor validity, encoding sanity, alt text.

Usage:
  python pipeline/lint_chapters.py                   # lint all docs/chapters/*.html
  python pipeline/lint_chapters.py <file> [<file>...]  # lint specific file(s) (path
                                                        # relative to repo root, or absolute)

Exit code is nonzero iff at least one HARD rule fails on at least one linted file.
WARN rules never affect the exit code -- read them as an author-attention list, not
a build gate. Per Task 0's acceptance criteria, this is stdlib-only (no pip installs).
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CHAPTERS_DIR = ROOT / "docs" / "chapters"

# Required <h2 id="..."> sections per chapter-spec.md Section 2 (required core, in order).
# Not included: "misconception-opener" (spec: optional, skip when no real misconception
# exists) and per-section content-heading ids (those are chapter-specific, not fixed strings).
REQUIRED_IDS = [
    "where-this-fits",
    "learning-objectives",
    "chapter-summary",
    "connections",
    "review-questions",
    "key-terms",
    "further-reading",
    "references",
]
# The prologue is a standalone module (chapter-spec.md Section 0), not a numbered
# chapter -- it orients the reader rather than foreshadowing a prior chapter, so it
# has no "Where This Fits" section. Exempt it from that one id only.
PROLOGUE_EXEMPT_IDS = {"where-this-fits"}

REVIEW_Q_MIN, REVIEW_Q_MAX = 8, 12
STOP_RETRIEVE_MIN = 3
CONNECTIONS_MIN_ROWS = 4

BALANCED_TAGS = ("figure", "table", "details")


class Result:
    def __init__(self, name):
        self.name = name
        self.hard_fails = []  # list[(rule, detail)]
        self.warns = []       # list[(rule, detail)]

    def fail(self, rule, detail=""):
        self.hard_fails.append((rule, detail))

    def warn(self, rule, detail=""):
        self.warns.append((rule, detail))

    @property
    def ok(self):
        return not self.hard_fails


def count(pattern, text, flags=0):
    return len(re.findall(pattern, text, flags))


def review_q_blocks(raw):
    """Slice the file at each review-q div start; each block runs to the next
    review-q marker (or EOF). Safe against the nested <div class="answer"> inside
    each block, which would break a naive non-greedy regex match."""
    starts = [m.start() for m in re.finditer(r'<div class="review-q">', raw)]
    blocks = []
    for i, s in enumerate(starts):
        e = starts[i + 1] if i + 1 < len(starts) else len(raw)
        blocks.append(raw[s:e])
    return blocks


def lint_file(path):
    r = Result(path.name)
    raw = path.read_text(encoding="utf-8", errors="replace")
    is_prologue = path.stem == "prologue"

    # --- Well-formedness / truncation (Session 80/81 corruption class) ---
    if not raw.rstrip().endswith("</html>"):
        r.fail("truncation", "file does not end with </html>")

    for tag in ("body", "main"):
        opens = count(rf"<{tag}\b", raw)
        closes = count(rf"</{tag}>", raw)
        if opens == 0:
            r.fail("well-formed", f"no <{tag}> tag found")
        elif opens != closes:
            r.fail("well-formed", f"<{tag}> open={opens} close={closes}")

    for tag in BALANCED_TAGS:
        opens = count(rf"<{tag}\b", raw)
        closes = count(rf"</{tag}>", raw)
        if opens != closes:
            r.fail("well-formed", f"<{tag}> open={opens} close={closes}")

    # --- Markdown headings rendered as paragraph text ---
    literal_headings = re.findall(r"<p\b[^>]*>\s*#{1,6}\s+[^<]+</p>", raw, re.I)
    if literal_headings:
        r.fail(
            "literal-markdown-heading",
            f"{len(literal_headings)} paragraph(s) begin with Markdown heading markers",
        )

    # --- Required sections ---
    ids_present = set(re.findall(r'<h2\s+id="([^"]+)"', raw))
    required = [i for i in REQUIRED_IDS if not (is_prologue and i in PROLOGUE_EXEMPT_IDS)]
    for rid in required:
        if rid not in ids_present:
            r.fail("required-section", f'missing <h2 id="{rid}">')

    # --- Review questions: count + collapsible-markup check ---
    rq_count = count(r'class="review-q"', raw)
    if rq_count == 0:
        r.fail("review-q-missing", "no review-q blocks found")
    elif rq_count < REVIEW_Q_MIN or rq_count > REVIEW_Q_MAX:
        r.warn("review-q-count", f"{rq_count} found (spec wants {REVIEW_Q_MIN}-{REVIEW_Q_MAX})")

    bad_markup = 0
    for block in review_q_blocks(raw):
        if "<details>" not in block or "<summary>" not in block:
            bad_markup += 1
    if bad_markup:
        r.fail("review-q-markup", f"{bad_markup} review-q block(s) missing <details>/<summary> (non-collapsible)")

    # --- Stop & Retrieve density ---
    sr_callout = count(r"callout--stop-retrieve", raw)
    sr_standalone_count = 0
    standalone_m = re.search(r'<h2\s+id="stop-(?:and-)?retrieve"', raw)
    if standalone_m:
        nxt = raw.find("<h2", standalone_m.end())
        section = raw[standalone_m.start(): nxt if nxt != -1 else len(raw)]
        sr_standalone_count = count(r"<li>", section)
        r.warn(
            "stop-retrieve-format",
            "uses a standalone Stop & Retrieve section instead of the inline "
            "callout--stop-retrieve pattern used elsewhere (open formatting question, see HANDOFF)",
        )
    sr_total = sr_callout + sr_standalone_count
    if sr_total < STOP_RETRIEVE_MIN:
        r.warn("stop-retrieve-count", f"{sr_total} found (spec wants ~1-2 per section, 3-5 typical)")

    # --- Connections table shape ---
    conn_m = re.search(r'<h2\s+id="connections">', raw)
    if conn_m:
        nxt = raw.find("<h2", conn_m.end())
        section = raw[conn_m.start(): nxt if nxt != -1 else len(raw)]
        data_rows = max(count(r"<tr>", section) - 1, 0)  # minus header row
        if data_rows < CONNECTIONS_MIN_ROWS:
            r.warn("connections-rows", f"{data_rows} data row(s) (spec wants >= {CONNECTIONS_MIN_ROWS})")
    # else: already reported as a missing required-section fail above.

    # --- Broken internal anchors (href="#..." with no matching id="...") ---
    all_ids = set(re.findall(r'\bid="([^"]+)"', raw))
    hrefs = [h for h in re.findall(r'href="#([^"]*)"', raw) if h]
    broken = sorted(set(h for h in hrefs if h not in all_ids))
    if broken:
        shown = ", ".join(broken[:5]) + ("..." if len(broken) > 5 else "")
        r.warn("broken-anchor", f"{len(broken)} broken internal anchor(s): {shown}")

    # --- Encoding sanity ---
    title_m = re.search(r"<title>(.*?)</title>", raw, re.S)
    if title_m and "?" in title_m.group(1):
        r.fail("encoding", "literal '?' inside <title> (mojibake signature)")

    stray_amp = re.findall(r"&(?!(?:[a-zA-Z]+|#\d+|#x[0-9a-fA-F]+);)", raw)
    if stray_amp:
        r.warn("stray-ampersand", f"{len(stray_amp)} '&' not part of a valid entity")

    # --- Alt text ---
    imgs = re.findall(r"<img\b[^>]*>", raw)
    no_alt = 0
    for tag in imgs:
        m = re.search(r'alt="([^"]*)"', tag)
        if not m or not m.group(1).strip():
            no_alt += 1
    if no_alt:
        r.fail("alt-text", f"{no_alt} <img> tag(s) missing non-empty alt=")

    return r


def resolve_targets(argv):
    if argv:
        out = []
        for a in argv:
            p = pathlib.Path(a)
            out.append(p if p.is_absolute() else (ROOT / a))
        return out
    return sorted(CHAPTERS_DIR.glob("*.html"))


def main():
    argv = [a for a in sys.argv[1:] if not a.startswith("--")]
    targets = resolve_targets(argv)

    missing = [p for p in targets if not p.exists()]
    for p in missing:
        print(f"!! not found: {p}")
    targets = [p for p in targets if p.exists()]

    if not targets:
        print(f"No HTML files to lint (looked in {CHAPTERS_DIR})")
        return 1

    results = [lint_file(p) for p in targets]

    width = max(len(r.name) for r in results)
    print(f"{'chapter':{width}s}  status  fails  warns")
    print("-" * (width + 24))
    any_hard_fail = False
    for r in results:
        status = "PASS" if r.ok else "FAIL"
        any_hard_fail = any_hard_fail or not r.ok
        print(f"{r.name:{width}s}  {status:6s}  {len(r.hard_fails):5d}  {len(r.warns):5d}")

    for r in results:
        if r.hard_fails or r.warns:
            print(f"\n=== {r.name} ===")
            for rule, detail in r.hard_fails:
                print(f"  FAIL [{rule}] {detail}")
            for rule, detail in r.warns:
                print(f"  warn [{rule}] {detail}")

    print(f"\n{'PASS' if not any_hard_fail else 'FAIL'}: "
          f"{sum(1 for r in results if r.ok)}/{len(results)} chapters clean of hard failures")
    return 1 if any_hard_fail else 0


if __name__ == "__main__":
    sys.exit(main())
