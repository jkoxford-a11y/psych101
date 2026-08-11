# Exam/Quiz Item Bank — Spec

> Governs how graded assessment items (paper exams, quizzes) are built for this course. Distinct from the book's own **Review Questions** (`pipeline/chapter-spec.md` §7), which are student-facing, printed with the chapter, and answered with one click — fine for study, not secure for a graded exam. Author: Jon Oxford Ph.D. | Established 2026-08-11.

---

## 0. Course exam format

Seven 25-question Unit Quizzes across the term (55% of the final grade), 35 students, Scantron-scored, plus a cumulative Final Exam (20%) that unlike the quizzes may include non-MC formats. **Every item in the per-chapter exam bank is multiple-choice.** No short-answer or essay items on the quizzes — grading load at this class size rules them out, and it also means an objective that resists clean MC framing (see Gate 2) gets rewritten into MC or narrowed, never given a short-answer exception.

**Each quiz covers two chapters, not one** — see `pipeline/26FS-PSYC101-syllabus.md` for the full mapping (source: `pipeline/26FS-PSYC101-syllabus.docx`). A chapter's blueprint (Gate 1) must therefore size its target "keep" count against roughly half of a 25-question quiz shared with its paired chapter — e.g. Ch. 2 shares Unit Quiz 1 with Ch. 1 — not a full 25 to itself. The exact split between two paired chapters is a joint call made once both chapters have blueprints, not something either chapter's blueprint should fix unilaterally. Ch. 13 (Quiz 7) shares with unspecified "integrative material" rather than a numbered chapter; the Final draws from all thirteen and is the one place a non-MC item could reasonably live.

## 0a. Why a separate bank

Chapter Review Questions live in `source/chapters/chNN-*.md`, are visible in the published book, and exist to make students retrieve while reading. An exam item bank exists to grade students, so it needs to be:

- **Unpublished** — never appears in `docs/`, never linked from the book.
- **Oversampled** — more candidates than any one exam needs, so weak items get cut rather than patched.
- **Metadata-tagged** — traceable to a learning objective, not just "a question about the chapter."
- **Independently audited** — checked by a reviewer who did not write it, working from the rubric below, blind to the key on a first pass.
- **Outcome-tracked** — once a question has been given to real students, its actual difficulty and discrimination outrank any pre-administration judgment, including this rubric's.

Two components of quality, not one: **content quality** (gates 1–4, established before students ever see the item) and **functional quality** (gate 5, established only after they do). An item can pass every pre-administration gate and still turn out to not discriminate — that's expected, not a failure of the process, and it's why gate 5 exists.

---

## 1. File layout

```
pipeline/exam-bank/
  chNN-exam-bank.md       — one file per chapter: blueprint + candidate pool
  item-analysis/          — post-administration data and results (added once Gate 5 runs)
```

Never placed in `source/` or `docs/`. Not linked from any built chapter page, the Learning Labs index, or `docs/index.html`.

---

## 2. The five gates

### Gate 1 — Blueprint: are we testing the right thing?

Before writing a single item, produce a table mapping the chapter's own **Learning Objectives** (already authored, already action-verbed — `chapter-spec.md` §1.3) to a target item count and cognitive level. The objective's existing verb (identify/distinguish/explain/apply/evaluate) *is* the cognitive-level tag — do not invent a parallel Bloom taxonomy on top of it.

Target the candidate pool at roughly **2x** the number of items the actual exam will need. If an exam needs 15 items from this chapter, draft ~24–30 candidates. Selection happens after Gate 2–3, not by trying to force the first N drafted items to work.

The blueprint is a planning artifact — present it and get sign-off before generating items, the same discipline `pipeline/spine-seed-protocol.md` already requires before drafting chapter prose. A blueprint that silently overweights whichever objective was easiest to write multiple-choice items for is exactly the failure this gate exists to catch.

### Gate 2 — Item quality: is the question well constructed?

Every candidate item must satisfy this checklist before moving to Gate 3:

- One clearly correct/best answer.
- The stem asks a meaningful psychological question, not trivia recall of a name or date for its own sake.
- A student needs the psychology to answer it — not general knowledge or test-taking savvy alone.
- Each distractor represents a plausible misconception or reasoning error a real student would have, not a random wrong statement.
- No grammatical, length, specificity, or formatting cue reveals the answer (e.g., the keyed option is not conspicuously longer or more hedged than the distractors).
- No unnecessary negative stems, especially "Which of the following is NOT...".
- No "all of the above" / "none of the above."
- Reading difficulty does not exceed conceptual difficulty — a student who understands the concept should not be tripped up by the sentence.
- The distinction tested is no finer than what the chapter actually teaches.

### Gate 3 — Adversarial/independent audit: try to break the item

The reviewer must not be the session that generated the item. Model disagreement is diagnostic, not noise — extend the discipline already established in `pipeline/review-protocols/gemini.md` for cross-chapter content audits:

1. **Blind pass first.** Give the reviewer the stem, options, the relevant chapter passage, and the objective it's meant to test — but not which option is keyed. Ask the reviewer to pick the best answer and name the objective/concept being tested, independently.
2. **Compare.** If the reviewer's choice matches the key and their stated concept matches the blueprint's, that's a mild positive signal, not proof. If the reviewer picks a different option, defends a different option as arguable, or describes a different concept than intended, the item is flagged — automatically, not after argument.
3. **Reveal and adjudicate.** Only after the blind pass, show the reviewer the key and ask directly: can another answer be reasonably defended? Does the stem give away the answer? Does the key depend on an unstated assumption? Does outside knowledge (not the chapter) make a distractor defensible? Does the item test a wording quirk of the textbook rather than the underlying concept?

Use multiple independent reviewers where practical (Claude in a fresh session, GPT, Gemini) — genuine disagreement among them is the most useful signal this gate produces, so keep them blind to each other's judgments until adjudication. Instruct every reviewer explicitly: *flag only defects that materially affect validity, fairness, clarity, or instructional alignment — do not suggest a rewrite merely because you'd have phrased it differently.* Without that instruction, three independent reviewers produce stylistic churn, not signal.

The instructor is the final content authority. The audit narrows the pool to items worth that judgment call; it doesn't replace it.

### Gate 4 — Set-level: is the exam good even if every item is individually fine?

Checked across the *selected* set for one exam, not the whole per-chapter pool:

- Objective coverage matches the blueprint.
- Cognitive-level balance (not all recall, not all application).
- No section of the chapter over-represented relative to its instructional weight.
- No two items testing essentially the same distinction.
- **Answer-position pattern** — reuse `pipeline/check_answer_position_patterns.py` rather than a second checker; point it at the selected set before it goes to print (see §5).
- No overuse of proper nouns, study names, or vocabulary recognition in place of concept testing.
- No item's stem or options leak the answer to another item on the same exam.

**Randomizing key position — protocol, not hand-arrangement.** Hitting an even count of correct-answer positions is not the same as avoiding a pattern: an early Ch. 2 draft hand-cycled a,b,c,d across items to force exactly 7-per-letter, which produced a perfectly balanced but mechanically predictable sequence — the checker's cycle detector originally only checked periods 2 and 3, so it missed this until extended to also check period 4, the natural blind spot for 4-option MC. The fix, and the standing rule going forward: never hand-arrange option order to hit a target distribution. Instead —

1. Build an exactly-balanced multiset of target key positions (e.g., seven each of a/b/c/d for a 28-item pool).
2. Shuffle it with a seeded RNG.
3. Run the draw through `check_answer_position_patterns.py`'s own pattern logic (severe concentration, same-position runs, monotonic marches, mechanical cycles) before accepting it.
4. If it's flagged, reroll with a new seed — do not manually nudge individual items to fix a flagged pattern, since manual nudging is exactly what produces a hand-arranged artifact in the first place.

Apply this twice: once when a chapter's candidate pool is first drafted (Gate 2), and again whenever a subset is actually selected for a real exam (Gate 4) — selecting a subset from a clean pool can still reintroduce skew, since selection isn't itself random.

### Gate 5 — Empirical: did the question actually work?

Only possible after students take it. This course captures results via **Scantron/bubble-sheet export**, so once a real export exists:

- **Difficulty** — proportion of students answering correctly.
- **Discrimination** — whether students who scored well overall were more likely to get this item right (a simple point-biserial or top-27%-vs-bottom-27% split is enough at this scale).
- **Distractor function** — did each wrong option attract anyone, and did it disproportionately attract students who plausibly hold the specific misconception it targets? A distractor nobody picks is dead weight; a distractor everyone picks may mean the key is wrong, not the students.

An item that looked strong through Gates 1–4 but shows near-zero discrimination or a dead distractor goes back for revision or retirement, not automatic reuse next term. The exact Scantron export format (which system, column layout) will be captured from a real file the first time this runs — do not guess a schema in advance of seeing one.

---

## 3. Item metadata schema

Every candidate item in `chNN-exam-bank.md` carries:

```
chapter | objective (verbatim from that chapter's Learning Objectives list) | concept |
keyed answer | misconception behind each distractor |
source passage (section/heading the item is drawn from) | difficulty estimate (pre-admin, unvalidated) |
status (draft / keep / cut / retired) | gate-3 audit result (if run)
```

No `format` field — every item is MC per §0.

The **misconception-per-distractor** field is not a new convention — it's the existing chapter Review Questions rationale (`chapter-spec.md` §7: "every question includes rationale for why wrong answers are tempting") pulled out into its own field so it can be scanned and compared across the pool instead of living only in prose.

**Difficulty estimate** is a placeholder for comparison against real Gate 5 data later — it is a guess, not evidence, and must never by itself justify keeping or cutting an item. Only Gates 2–4 (content) and Gate 5 (real data, once it exists) carry that authority.

**Status** values:
- `draft` — written, not yet through Gate 3.
- `keep` — survived Gates 2–4, selected for an actual exam.
- `cut` — survived to Gate 3 or 4 but not selected this round; stays in the pool for a future exam rather than being deleted.
- `retired` — failed Gate 3, or failed Gate 5 after real administration; kept in the file with a note on why, not silently removed, so the same mistake isn't regenerated later.

---

## 4. Canonical workflow

```
Chapter (source/chapters/chNN-*.md, already canonical)
  -> Blueprint (Gate 1, instructor sign-off before drafting)
  -> Candidate pool at ~2x target (Gate 2 self-check applied during drafting)
  -> Independent blind audit (Gate 3)
  -> Adjudication (instructor, given all reviewers' critiques)
  -> Selection into one exam's item set
  -> Set-level check (Gate 4, including check_answer_position_patterns.py)
  -> Print-ready Word export
  -> Administer
  -> Item analysis (Gate 5, once Scantron data exists)
  -> keep / revise / retire, fed back into the same chNN-exam-bank.md
```

**Independence rule:** the session/model that generated an item is not the session/model that runs its Gate 3 audit. This is the entire point of the gate — a session auditing its own output is not independent review, it's the same judgment twice.

---

## 5. Validation and tooling

- `pipeline/check_answer_position_patterns.py` — extended to also scan `pipeline/exam-bank/*.md`, so the same set-level position check that already runs against chapter Review Questions and Learning Labs covers the exam bank. See that file's `CHAPTERS` list for the pattern to follow when wiring in exam-bank files.
- Word export for a print-ready exam reuses the pattern in `pipeline/build_line_edit_docx.py` (instructor reads Word, not Markdown, per `CLAUDE.md`) — not yet built; build once a chapter's pool has real `keep`-status items to export.
- Gate 5 item-analysis tooling is deliberately not built yet — there's no real Scantron export to design its schema against. Build it against an actual file from the first administered exam rather than a guessed format.

## 6. Status

Piloting on Chapter 2 (Research Methods & Statistics) before rolling out to other chapters. See `pipeline/exam-bank/ch02-exam-bank.md`.
