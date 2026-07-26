# Psych101 — Current Handoff

**Last updated:** 2026-07-26
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for the chapter voice-conversion workflow and all conventions.

## Current state

**The shared chapter builder now supports mixed Review Questions sections.** Review questions are parsed one numbered block at a time, so multiple-choice items with lettered options and open-response items can coexist without either type being dropped. Chapter 13 now renders all 10 source questions: 5 multiple-choice and 5 open-response. The section-nav default is uniformly 2; the redundant Chapter 4/5/8 overrides were removed without changing those chapters' output.

**Chapter 12's first line-edit round is reconciled into the source.** The instructor marked `line-edit-packets/Chapter_12_Emotion_Stress_Coping_Line_Edit_POST_CONVERSION_2026-07-26.docx` — nine tracked edits and two comments — and all of it is now applied. Thirteen lines changed in `source/chapters/ch12-emotion-stress-coping.md`.

What changed, grouped:

1. **The body budget was re-anchored to metabolism.** It had been "a metaphor for the conditions that make regulation easier or harder" — sleep, workload, uncertainty, illness. It is now a metaphor for **allostatic regulation of the body's metabolic resources**, with deposits (eating, sleeping, supportive social contact) and withdrawals (moving, learning, fighting infection, coping with uncertainty, meeting threats) as the instructor wrote them. A second paragraph runs the chain he sketched: acute stress without recovery → metabolic deficit → unpleasant affect → context-dependent construction → **allostatic load**, glossed inline as *cumulative wear and tear* and pointed forward to Section 3.
2. **The anti-literalism hedge came down in every place it lived** — the standalone boundary paragraph ("these conditions do not sit in one literal tank… social support is not metabolically interchangeable with glucose"), the Section 1 heading, the Figure 12.1 caption, the Summary, and the glossary entry. The instructor's instruction was that the sentence already says *metaphor* and the paragraph of hedging on top of it was ruining the teaching point. The word "metaphor" in the first sentence is now the whole guard.
3. **Both commented paragraphs were replaced.** The core-affect line ("Two numbers… no idea why") drew *"Not following this now."* Its logic gap is traceable: Decision 4 cut the bridge sentence *"That is a summary, and summaries leave things out"* as a framework gesture, correctly — but that sentence was also what carried *two numbers* to *no idea why*. The replacement rebuilds the bridge from the interoception list in the paragraph above rather than from the compression lens, so nothing Decision 4 rejected comes back. The constructionist paragraph drew *"Where is pedagogy? What do students need to understand, not arguments, but what?"* — its theory-standing material was **cut rather than rewritten**, because the paragraph twenty lines down already says constructionism is the lens used here and not the only serious account, with a table of boundaries under it. The old paragraph was guarding a claim the chapter guards again immediately.
4. Objectives 1, 3, and 4 and two affect-labeling trims applied as marked.

`docs/chapters/12-emotion-stress-coping.html` regenerated. `lint_chapters.py` 14/14 clean of hard failures. `check_chapter_coherence.py` on Ch. 12: `fail=0 review=1` — the summary omits the cognitive light cone, verified against `HEAD` as pre-existing rather than introduced by this pass.

**Chapters 11, 12 (conversion), and 13 are committed.** Determined from `git diff --stat HEAD`, not `git status`, which is not safe under the Cowork mount. The only tracked files differing from `HEAD` are `source/chapters/ch12-emotion-stress-coping.md`, `docs/chapters/12-emotion-stress-coping.html`, and the three known phantom PNG diffs. Untracked files were not enumerated and need a native check.

**Chapter 11 is converted with line-edit round one applied.** Packet `Chapter_11_Social_Psychology_Line_Edit.docx`; marked copy `..._MARKED_2026-07-26.docx`. Residue: `pipeline/audits/ch11-conversion-residue-2026-07-25.md`. Objectives, apparatus retrofit, and HTML regeneration are still pending.

**Chapters 10 and prior are stable.** Chapter 6 and Chapter 7 image lanes remain paused. Deferred human spot-checks for figure-expansion, Signal Detection, and Learning Labs remain for release validation.

## Immediate next actions

1. **Stage and commit the Chapter 12 line-edit reconciliation.** Exact paths, nothing else:
   - `source/chapters/ch12-emotion-stress-coping.md`
   - `docs/chapters/12-emotion-stress-coping.html`
   - `line-edit-packets/Chapter_12_Emotion_Stress_Coping_Line_Edit_RECONCILED_2026-07-26.docx` (new, untracked)
2. **Round two on Chapter 12** from the reconciled packet above, if wanted.
3. **Redraw Figure 12.1** (below) — the artwork now contradicts the prose.
4. **Register Chapters 1, 6, 7 and the prologue** in the shared builder so their generated HTML cannot drift from source.
5. **Chapter 11 apparatus retrofit** — objectives, then regenerate HTML, then re-lint.
6. Keep the Chapter 6 and Chapter 7 image lanes paused unless reopened.

## Figure 12.1 no longer matches its text

`docs/images/ch12/fig_body_budget_deposits_withdrawals.png` was drawn for the framing the instructor just replaced. Its columns are *conditions* — sleep, food and water, movement, social support, recovery against workload, uncertainty, isolation, missed meals, poor sleep. The prose columns are now *metabolic activities*. They overlap but do not match, and the artwork additionally has "the influences interact but are not one measurable account" baked into it — the exact hedge this pass removed.

Caption and alt text cannot resolve this; the alt text has to describe the picture that exists. The figure needs a redraw against the new deposit/withdrawal lists, at which point caption and alt text move with it.

## Builder — Chapter 13 current; four pages remain unregistered

`pipeline/build_chapter_html.mjs` registers Chapters **2, 3, 4, 5, 8, 9, 10, 11, 12 and 13**. Chapter 13 uses the common configuration with no compatibility flags. Its mixed Review Questions section is now supported by the shared parser and regenerates as 10 ordered cards with all answer panels intact.

The parser treats each numbered question as a block, detects lettered options before that block's answer, and supports either source `<details>` markup or the older `*Answer:*` form. A numbered question without either supported answer form now stops the build instead of disappearing silently.

The section-nav threshold is now uniformly 2 by default. Chapters 4, 5 and 8 retain their early-conversion flags (`matchAnyItalicFigureCaption`, `convertStructuredH4Callouts`, and the Chapter 4-only figure/lab/subheading shims); only their redundant `minimumSectionNavLinks: 2` entries were removed. Rebuilding proved all three outputs byte-identical.

Still unregistered: Chapters **1, 6, 7 and the prologue**. `lint_chapters.py` reads generated HTML, so a PASS for an unregistered page does not establish that its artifact matches current Markdown.

## Chapter 13 — open, none of it blocking

1. **The five maintenance-lens disclaimers.** The proximate/ultimate install does not by itself remove the hedges the 2026-07-15 repair pass added. Separate cleanup, still wanted.
2. **Register.** 1.3 second-person uses per 1,000 body words — the lowest in the book by a wide margin. About half of body paragraphs still end on a negation.
3. **Does the spine question move into the opener?** *"When does a protective model become costly?"* appears only in figure captions and alt text. Ch. 12 precedent says move it.
4. **Section 3 is 435 words**, roughly a third of its neighbours. Its position is correct and worth keeping; whether that justifies the length is a separate question.
5. **Grupe & Nitschke (2013)** remains open for Ch. 13 in `evidence-commitments.md`.
6. **Opener prevalence figure** says "roughly one in five U.S. adults." NIMH's current figure is 23.1%. The existing hedge covers it; the phrasing is on the low side of the source.
7. **Five reference-list entries are never cited in text** — Barth et al. (2013), Beck et al. (1979), Craske et al. (2014), Linehan (1993), Rogers (1957). Linehan and Rogers are discussed by name without a parenthetical; the other three are unused. Cite them or move them to Further Reading.

## Repository notes

- **Cleanup complete:** concurrent commit `e12de42` (`209`) had captured the temporary builder A/B baseline directory `.tmp-builder-review-baseline-019f9fd1/`. Commit `75eeac9` removed only those ten tracked snapshots and was pushed to `main`; `e12de42` was not reverted or rewritten.
- **`pipeline/evidence-commitments.md` has one OPEN row** — Ch. 10's life-history mosaic point (short interbirth intervals and high reproductive output alongside slow development) was requested and is not in the source.
- **Three files in `docs/images/ch03/` are not images.** Despite `.png` extensions they are UTF-8 text notes, producing a recurring ~10-byte CRLF phantom diff. They reappear as modified until renamed to `.txt` or the one-time renormalization runs.
- **Chapter 8 has three broken internal anchors** — cross-links use double hyphens where generated IDs collapse to single. Confirmed still failing in the current lint run.
- **`git status` is not safe under the Cowork mount** — it takes `.git/index.lock` like a write command and cannot release it. Safe read-only commands are `git log`, `git diff`, `git show`, `git rev-list`. Stage exact paths; never `git add .`.
- **A revised packet always goes to a new filename.** A packet was once rebuilt in place over the instructor's entered answers and they were unrecoverable. The Ch. 12 rebuild this session went to `..._RECONCILED_2026-07-26.docx` and left the marked copy untouched.
- Deferred and needing a decision, in `PROJECT_BACKLOG.md`: removing ~20 MB of unreferenced images from `docs/`; the numeric commit messages; the one-time `git add --renormalize .`; the twelve unreviewed coherence-check failures; and the book-wide finding that banned throat-clearing rose in 11 of 11 audited chapters.

## Important files

- **Chapter 12 seeds and all nine settled decisions:** `pipeline/ch12-spine-seeds.md`
- **Chapter 12 current packet:** `line-edit-packets/Chapter_12_Emotion_Stress_Coping_Line_Edit_RECONCILED_2026-07-26.docx`; the instructor's marks are preserved in `..._POST_CONVERSION_2026-07-26.docx`
- **Chapter 13 seeds, settled decisions, and verification run:** `pipeline/ch13-spine-seeds.md`
- **Evidence commitments (claim-level constraints, book-wide):** `pipeline/evidence-commitments.md`
- Spine-seed protocol: `pipeline/spine-seed-protocol.md`; paste-ready prompt: `pipeline/spine-seed-prompt.md`
- Chapter voice-conversion workflow: `AGENTS.md` → `## Style`
- Chapter 11 seeds and decision record: `pipeline/ch11-spine-seeds.md`; conversion residue: `pipeline/audits/ch11-conversion-residue-2026-07-25.md`
- Theoretical spine (Layer 3 + drafting rules): `pipeline/theoretical-spine.md`; elaborations in `pipeline/theoretical-foundations.md`, `GPT_spine.md`, `pipeline/concepts-semanticization-log.md`
- Validators: `pipeline/lint_chapters.py` (structure, on generated HTML), `pipeline/check_chapter_coherence.py` (apparatus, on Markdown source — takes explicit paths or `--all`)
- Shared builder: `pipeline/build_chapter_html.mjs` (Chapters 2, 3, 4, 5, 8, 9, 10, 11, 12 and 13 registered); line-edit packet builder: `pipeline/build_line_edit_docx.py`
- Durable deferred work: `PROJECT_BACKLOG.md`
