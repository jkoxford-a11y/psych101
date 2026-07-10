# Sonnet 5 Improvement Plan — Psych101 Textbook

> **Origin:** drafted during the context-hygiene work (2026-07-10) for execution by Sonnet 5, and re-instated in the canonical repo `C:\GitHub\psych101` after an earlier draft was mistakenly written into the now-retired `old_psych101` copy.
> **Purpose:** A deterministic, validate-as-you-go work plan that improves reading experience, pedagogy, and consistency while minimizing token spend. Every task has explicit acceptance criteria so work can be verified cheaply instead of re-read.
> **Scope decisions (set by Jon):** Do all four workstreams. Do **not** cut chapter length — length is handled as author-facing suggestions only (see §L). Prioritize deterministic, mechanical work over open-ended editorial rewriting.

---

## How to use this file (Sonnet 5, read first)

1. Read `HANDOFF.md` Current Status + Next Up (per project rules), then this file. Confirm you are in `C:\GitHub\psych101`, not a stale copy.
2. Work **one unit at a time** (one chapter, or one feature) → **validate** → **commit** → move on. Never batch-edit many files with one regex without running the validator afterward. The Session 80 sidebar script silently truncated six chapters precisely because it bulk-edited without post-edit validation. Do not repeat that pattern.
3. Build the linter (Task 0) **before** anything else, so every later task is checked by a script rather than by eyeballing.
4. Prefer editing the **HTML** in `docs/chapters/` for structural/reading fixes (that's what ships). Only touch `source/chapters/*.md` when the fix is a content change the author will want mirrored. Note in the commit which side you edited.
5. Token discipline: don't re-read a whole chapter to find a defect the linter already located by line/section. Read the flagged region, fix, re-run linter on that one file.

**Reference paths**
- HTML chapters: `docs/chapters/NN-*.html` (12 built: 01–05, 07–13; Ch6 Sleep not yet built)
- Markdown sources: `source/chapters/chNN-*.md` (drafting history now in `source/chapters/_provenance/`)
- Shared CSS: `docs/css/style.css` · Shared JS: `docs/js/` (`sidebar.js`, `nav.js`, `figure-expand.js`)
- Specs: `pipeline/chapter-spec.md` (structure), `pipeline/html-conversion-spec.md`

---

## Task 0 — Build a structural linter (do this first)

**Why:** Every consistency defect found in the audit is deterministically detectable. A ~150-line script converts "hope the model notices" into "the script fails the build." It also permanently closes the corruption class of bug (truncated files, missing closing tags).

**Build** `pipeline/lint_chapters.py` (Python 3, stdlib only — no pip). For each `docs/chapters/NN-*.html` it checks and reports PASS/FAIL per rule:

- **Well-formedness / truncation:** file ends with `</html>`; balanced `<body>`/`</body>`, `<main>`/`</main>`; every `<figure>`/`<table>`/`<details>` has its closing tag. (Catches the Session 80/81 truncation class.)
- **Required sections present** (by `<h2 id=...>` or equivalent): `where-this-fits`, `learning-objectives`, ≥3 content-section `<h2>`, `chapter-summary`, `connections`, `review-questions`, `key-terms`, `further-reading`, `references`.
- **Retrieval density:** count "Stop and Retrieve" prompts; warn if `< 3` (spec §3a wants 1–2 per section × 3–5 sections).
- **Review questions:** count `class="review-q"` blocks; warn if `< 8` or `> 12` (spec §2.7). Assert each uses the collapsible `<details>`/`answer` pattern (catches Ch11's divergent markup).
- **Connections table:** ≥ 4 rows; warn if an internal anchor `href="#..."` targets an id that doesn't exist in the file (broken-anchor check).
- **Encoding sanity:** no literal `?` inside `<title>`/sidebar chapter labels (catches the mojibake class); flag stray `&` not part of an entity.
- **Alt text:** every `<img>` has non-empty `alt=`.

**Output:** a per-chapter table + a nonzero exit code if any hard rule fails. Add a one-line note on how to run it.

**Acceptance criteria:** `python pipeline/lint_chapters.py` prints a status table for all 12 chapters and exits nonzero. On today's tree it should flag (at minimum): Ch11 missing connections/further-reading/references + wrong review-q markup; Ch12/Ch13 review-q count < 8; Ch9/Ch12/Ch13 low Stop&Retrieve. Confirm it catches a deliberately truncated test copy.

---

## Task 0.5 — Context hygiene (reduce per-read token cost)

**Why:** The deepest efficiency lever isn't compressing prose — it's reducing how much context each action *requires*. Two ways: **locality** (read a slice, not a file) and **determinism** (move checks a script can do out of the model's token budget). Measured baselines from `pipeline/context_budget.py`: the full HANDOFF is ~29K tokens if over-read; the two CSVs are ~21K read whole; `theoretical-foundations.md` + `theoretical-spine.md` are ~47K; each built HTML chapter is ~20–25K.

**Already done (2026-07-10, verified) — see `pipeline/`:**
- **Provenance extracted from chapter markdown.** `pipeline/extract_provenance.py` moved ~16.8K tokens of per-chapter version-history headers into `source/chapters/_provenance/chNN.md`; each chapter now opens with a one-line pointer. Body content verified byte-identical against a snapshot (ch10 additionally normalized CRLF→LF; it was the only CRLF file). Re-run with `--check` to confirm clean; `--apply` to process any newly-headered chapter (e.g. Ch6's HTML build, or future drafts). **Rule going forward: drafting notes go in the sidecar or the commit message, not the top of the chapter file.**
- **Budget meter added.** `pipeline/context_budget.py` prints the token weight of every standard read. Run it at session start or after big edits to watch for drift.
- **Reusable prompt.** `pipeline/context-hygiene-prompt.md` ports this whole pattern to any other project (e.g. the stats book).

**Still to do (Sonnet, deterministic):**
1. **Grep the CSVs, don't Read them whole.** When editing chapter N, pull only that chapter's rows: `grep -i "^<prefix>" source/concept_lineage_revised.csv` (MEM- for Ch8, etc.) rather than loading all 183/130 rows (~21K tokens). Add this as a note in `chapter-spec.md` §10 (Drafting Sequence steps 1–3).
2. **Split specs into draft-time vs archival.** `theoretical-foundations.md` (~26K tok) and `theoretical-spine.md` (~22K tok) are the two heaviest files in `pipeline/` and are almost certainly *reference*, not needed in full for a routine edit. Add a one-line header to each marking it "archival — read only when doing foundational/theory work," and note in `chapter-spec.md` that routine drafting needs only `chapter-spec.md` + `voice-brief.md` + the relevant CSV rows.
3. **Cap the Session Log mechanically.** Keep the last ~5 sessions in `HANDOFF.md`; auto-flush older entries to `HANDOFF-ARCHIVE.md` so the file an agent might over-read stays bounded (it's ~29K tokens today and grows every session). A ~30-line script (`pipeline/roll_session_log.py`) can do this; run it at session end.
4. **Read chapter HTML by slice.** The most expensive recurring op is "read a whole 20–25K-token HTML chapter to make a small edit." Once the linter (Task 0) reports defects by line/section, read only that region (`Read` with offset/limit, or `grep -n` to locate), not the whole file. Template extraction (Task 6) compounds this.

**Acceptance criteria:** `context_budget.py` runs clean; `extract_provenance.py --check` reports all chapters `skip-clean`; CSV-grep and spec-split notes are in `chapter-spec.md`; Session Log in HANDOFF holds ≤ ~5 sessions.

---

## Task 1 — Bring Chapter 11 (Social Psychology) to structural parity

**Why:** Ch11 is the clear outlier (rebuilt separately). Audit confirms it has **no Connections table, no Further Reading, no References section, 0 Stop&Retrieve prompts, and review questions in a non-collapsible `<p>Question:</p>` + `<ol>` format** unlike every other chapter's `review-q`/`<details>` pattern.

**Steps (validate after each):**
1. Convert Ch11's review questions to the standard `review-q` + `<details><summary>` collapsible pattern used in Ch8 (copy the exact markup shape). Preserve the existing question content and wrong-answer rationales.
2. Add a **Connections** table (spec §4, 4–8 rows, hyperlinked, ≥1 non-obvious link). Source candidate links from `source/concept_lineage_revised.csv` and the Ch11 markdown. **Open item:** the Ch11 markdown has no `## Connections` section — draft the table from concept lineage, but flag in the commit that these connections are newly authored and need Jon's review. Do not fabricate cross-references to sections that don't exist.
3. Add **Further Reading** (3–6 annotated links, Noba/APA IPI style) and a **References** section, matching Ch4/Ch12 format.
4. Add **Stop and Retrieve** prompts — 1 per major section — with self-referential framing (spec §3a).
5. Resolve the two standing Ch11 questions: (a) the missing `## Connections` in source markdown, (b) the "Stop & Retrieve" section vs. inline-callout format (Ch12 distributes retrieval prompts inline). Match the established sibling pattern; flag the choice rather than deciding silently if ambiguous.

**Acceptance criteria:** `lint_chapters.py` passes Ch11 on all required-section and review-q-markup rules; Ch11 visually matches a sibling chapter; commit flags author-review items.

---

## Task 2 — Raise retrieval + review-question density to spec (per chapter, gated by linter)

**Why:** The retrieval scaffold is the book's signature strength but is unevenly applied. Audit counts: Stop&Retrieve — Ch9=1, Ch12=1, Ch13=0 (Ch11=0, handled in Task 1). Review questions — Ch12=7, Ch13=6 (spec minimum 8).

**Steps:** For each flagged chapter:
1. Add Stop&Retrieve prompts to reach ≥1 per major section, at natural mid-section pause points. Draw the question from content already in that section.
2. Add review questions to reach 8–12, each with the wrong-answer rationale spec §2.7 mandates. Tag each new question (HTML comment) with the learning objective it assesses.
3. Mirror substantive additions into the matching `source/chapters/*.md` so source and HTML don't drift.

**Acceptance criteria:** linter shows all chapters within review-q range and ≥3 Stop&Retrieve; new questions have rationales; prompts are retrieval-style, not restatements.

---

## Task 3 — Inline glossary linking (reading feature)

**Why:** Spec §2.8 promises key terms are "hover-linked from inline use," but **no chapter implements it**. Students can't jump from an inline bolded term to its definition.

**Approach (low-risk, mechanical):**
1. Give each Key Terms entry a stable `id` (e.g. `id="kt-retroactive-interference"`).
2. On **first bolded use** of each key term in the body, wrap it in an anchor to that id. A script can match each glossary term's first `<strong>term</strong>` — but run per chapter and validate, never one global regex.
3. Add a small CSS affordance (subtle dotted underline) and optionally a tooltip on hover/focus (progressive enhancement — the anchor jump must work without JS).

**Acceptance criteria:** on 2–3 sample chapters, first use of each key term links to its glossary entry; links work with JS disabled; linter still passes.

---

## Task 4 — Print / PDF stylesheet (reading feature)

**Why:** Spec assumes "PDF via browser print if needed," but there is **zero `@media print` CSS**. Printing includes the sidebar and breaks figures.

**Steps:** Add a `@media print` block to `docs/css/style.css` that: hides `.sidebar`/nav and collapse controls; expands the main column full width; **forces `<details>` open** so review answers print; avoids page-breaks inside figures/tables (`break-inside: avoid`); sets readable print sizes; optionally prints link URLs after reference link text.

**Acceptance criteria:** Print Preview on 2 chapters shows clean, single-column, sidebar-free output with figures intact and answers visible.

---

## Task 5 — Global glossary page + lightweight search (reading feature)

**Why:** No book-wide glossary or search exists. Lowest-priority reading item; do after 3 and 4.

**Steps:**
1. Generate `docs/glossary.html` by concatenating all chapters' Key Terms into one alphabetized list, each entry linking back to its chapter section. Generate with a script so it stays regenerable.
2. Add a client-side search (small vanilla-JS filter over a generated index, or an in-page filter on the glossary). No server, no build dependency.
3. Link both from the sidebar (`docs/js/sidebar.js`, single source of truth) and `index.html`.

**Acceptance criteria:** glossary lists every key term with a working back-link; search filters live; sidebar/index link to it; linter unaffected.

---

## Task 6 — Template extraction (structural refactor — do last)

**Why:** The per-chapter HTML `<head>`, sidebar mount, and callout scaffolds are duplicated across 12 files — the root enabler of the Session 80 corruption and the mojibake bug. A template + tiny build step means shared chrome lives in one place.

**Why last:** it touches every file, so doing it after content fixes (Tasks 1–5) means re-templating already-correct content, not chasing a moving target. Gate the whole refactor behind the linter (Task 0).

**Approach (minimal — no framework):**
1. Extract the shared shell (head, meta, CSS links, sidebar mount, footer/scripts) into a template partial. A small Python build script injects each chapter's body and writes `docs/chapters/NN-*.html`. Keep HTML as source-of-truth and template only the chrome — whichever minimizes churn; document the choice in `pipeline/`.
2. Run the linter on **every** regenerated file and `git diff` each to confirm only intended chrome changed (the Session 80 lesson: diff before trusting a bulk pass).
3. Update `html-conversion-spec.md` to describe the new build step so future chapters (starting with Ch6 Sleep) use it.

**Acceptance criteria:** all 12 chapters regenerate with body content unchanged (diff shows only intended chrome deltas); linter passes on all; a re-run build produces no corruption; spec updated.

---

## §L — Length overage: author-facing suggestions only (NOT executed by Sonnet)

Per Jon's decision, **do not cut chapter length.** Record these as notes for the author; do not trim prose.

Chapters run large — Ch3 and Ch4 are the heaviest, and Ch8's ~5,940 body words already exceed the 3,500–5,000 spec target and were consciously kept. Suggestions to leave with Jon, not act on:
- If trimming is ever wanted, Ch3 (Neuroscience) and Ch4 (Sensation & Perception) are the densest; the retrieval apparatus and figures are not the bloat, the expository prose is.
- Alternative to cutting: mark advanced passages as optional/"Going Deeper" callouts so core reading load drops without deleting content.
- Consider whether the two-AI-Connection chapters (Ch4, Ch7, Ch8, Ch13) need both, or one fuller + one one-liner. Author's call.

---

## §P — Optional polish (only if budget remains, lowest priority)

- **Objective↔question alignment matrix:** using the HTML-comment tags from Task 2, generate a per-chapter table showing which learning objective each review question tests. Diagnostic only.
- **Figure density:** Ch5 (3 figures) and Ch12 (4) are lean for their length; flag spots where a diagram would carry load. Log candidates for the post-Ch14 visuals pass; don't auto-generate.
- **Sidebar collapse discoverability** (standing HANDOFF item): resolve the "looks broken when collapsed" issue once Jon chooses a direction.

---

## Suggested execution order (for least rework)

1. **Task 0** (linter) — enables cheap verification of everything after.
2. **Task 0.5** remaining items (context hygiene) — cheap, compounding.
3. **Task 1** (Ch11 parity) — biggest single consistency win, localized.
4. **Task 2** (retrieval/review density) — deterministic, per-chapter, linter-gated.
5. **Task 3** (glossary linking) then **Task 4** (print CSS) — additive reading features.
6. **Task 5** (global glossary/search) — depends on stable key-term ids from Task 3.
7. **Task 6** (template extraction) — last; fully linter-gated.
8. **§P** polish only if budget remains. **§L** length: never executed — notes for Jon.

**Per-unit loop for all tasks:** read only the flagged region → edit → `python pipeline/lint_chapters.py <file>` → `git diff` → commit noting which side (HTML/MD) changed and any author-review flags. Update `HANDOFF.md` + prepend a Session Log entry at session end, per project rules.
