# Psych101 — Current Handoff

**Last updated:** 2026-07-26
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for the chapter voice-conversion workflow and all conventions.

## Current state

**Chapter 13's two blocking framing decisions are settled and the source edits are applied.** Both decisions, the drafts, the rejected alternatives, and the verification run are recorded in the new `pipeline/ch13-spine-seeds.md`. Net +507 body words (3,211 → 3,718), no prunes required.

What went into `source/chapters/ch13-psychological-disorders-therapy.md`:

1. **Decision 1 — proximate/ultimate framing: installed once, bounded, at the opening of Section 2** (*Anxiety, Fear, and Avoidance*), grounded in Nesse (2005). It deliberately does **not** use the words "proximate," "ultimate," or "Tinbergen," because no chapter in the book uses them — Ch. 1 installs the same distinction in plain language instead, and this matches it.
2. **Decision 2 — the stigma bridge: mechanism built, both rows fixed.** New Section 1 subsection *What a Label Does Outside the Clinic* (public / self / structural stigma → the treatment gap), plus a Section 1 signal-detection paragraph that discharges a promise Ch. 4 had been making unpaid.
3. Connections table: **added** a Ch. 4 row, **replaced** the factually wrong Ch. 11 row. Key Terms: one stigma entry. Learning objectives renumbered 5 → 7 to cover the new material.
4. References added: Nesse (2005), Corrigan, Druss & Perlick (2014), Clement et al. (2015). All three verified against source records on 2026-07-26.

**The pre-review audit lane is retired.** The twelve `chNN-pre-review-audit.md` reports were extracted into `pipeline/evidence-commitments.md` and deleted; the deletion is confirmed done. The ledger holds only claims whose *wording is load-bearing*. `AGENTS.md` → *Evidence commitments are the only standing constraint on claims* replaces the old *Audits are diagnostic, not authoritative* section. Recovery hash for the deleted audits: `a9dcedd`.

**Chapter 12's seed decisions are settled** — all nine, in `pipeline/ch12-spine-seeds.md` → *DECISIONS RETURNED*. Conversion has not been applied to the source yet.

**Chapter 11 is converted and awaiting the instructor's line edit.** Packet: `line-edit-packets/Chapter_11_Social_Psychology_Line_Edit.docx`; marked copy `..._MARKED_2026-07-26.docx`. Residue: `pipeline/audits/ch11-conversion-residue-2026-07-25.md`.

**Chapters 10 and prior are stable.** Chapter 6 and Chapter 7 image lanes remain paused. Deferred human spot-checks for figure-expansion, Signal Detection, and Learning Labs remain for release validation.

## Immediate next actions

1. **Stage and commit the Chapter 13 work.** Exact paths, nothing else:
   - `source/chapters/ch13-psychological-disorders-therapy.md`
   - `pipeline/ch13-spine-seeds.md`
   - `pipeline/build_chapter_html.mjs`
   - `docs/chapters/13-disorders-therapy.html`
   - `HANDOFF.md`
2. **Decide the mixed review-question format question** (below). It is the one remaining lint warning on Ch. 13 and it silently drops five multiple-choice questions from the built page.
3. **Register chapters 1, 6, 7 and the prologue** in the builder, on the same flagless spec, so their HTML stops drifting from source.
4. **Apply the Chapter 12 conversion** from its settled decisions.
5. **Instructor line-edits Chapter 11**, scoped by the residue report; then reconcile → objectives → apparatus retrofit → regenerate HTML → re-lint.
6. Keep the Chapter 6 and Chapter 7 image lanes paused unless reopened.

## Builder — Chapter 13 registered, on the common spec, no flags

**Resolved this session.** `pipeline/build_chapter_html.mjs` had no config for Ch. 13, so `docs/chapters/13-disorders-therapy.html` was frozen at **2026-07-19**. Ch. 13 is now registered with **source, output, title, pillar and nothing else** — the same shape as chapters 2, 3, 9, 10, 11 and 12. HTML regenerated and re-linted.

The rebuild reproduces the previous structure exactly (8 figures, 3 Do-Not-Confuse callouts, 4 tables, 12 h2), plus the new subsection and its Stop and Retrieve. **Ch. 13 never needed per-chapter flags** — verified against its markdown: all 8 images carry `*Figure 13.N.` captions, Do-Not-Confuse are blockquotes rather than h4, and every section has ≥2 subheadings so the nav threshold is moot.

**Why the flags exist at all, since the instruction is one spec for every chapter.** Only chapters 4, 5 and 8 carry them, and they are not spec variation — they are compatibility shims for markdown written before the convention settled. `matchAnyItalicFigureCaption` loosens the caption rule to accept *any* italic paragraph after an image; `convertStructuredH4Callouts` catches Do-Not-Confuse written as `<h4>` instead of a blockquote; `wrapCaptionlessFigures`, `convertLabCallouts` and `promoteSubheadings` are Ch. 4 only. **Turning them on globally would be actively harmful** — `matchAnyItalicFigureCaption` would silently convert legitimate italic prose following an image into a figure caption. The route to one spec is to normalize the source of 4, 5 and 8 and then delete the shims, not to spread them. `minimumSectionNavLinks` is the one genuine design inconsistency (2 for chapters 4/5/8, default 1 elsewhere) and should become a uniform default in the function signature.

**Still unregistered:** chapters **1, 6, 7 and the prologue**. Same staleness risk, same caveat below.

- **`lint_chapters.py` reads `docs/chapters/*.html`, not the Markdown source.** A PASS for an unregistered chapter is a pass on a stale artifact and says nothing about current source.

### Open builder decision — mixed review-question types

Ch. 13 lints clean except one warning: `review-q-count 5 found (spec wants 8-12)`. The source has **10** questions. Only 5 convert.

The cause is a builder limitation, not a Ch. 13 authoring error. The parser has two branches. Branch 1 matches *question → `<details>`* and handles open-response. Branch 2 handles multiple choice in Ch. 4's format (`**N.**`, `a)` options, `*Answer:*`, `---` separators) — but it runs only `if (!questions.length)`, i.e. only when branch 1 matched nothing at all. **A chapter that mixes multiple-choice and open-response questions therefore cannot work.** Ch. 13 is the first chapter to mix them: its 5 open-response questions convert, its 5 multiple-choice questions are silently dropped.

Every other chapter is uniform — Ch. 11 and Ch. 12 are all open-response, Ch. 4 is all multiple choice. Two ways forward, and this needs a decision:

1. **Extend branch 1** to accept lettered options between the question and its `<details>`, giving one format that covers both question types. Touches parsing shared by all 14 chapters.
2. **Reformat Ch. 13's 5 multiple-choice questions** into Ch. 4's branch-2 format — which does not work either, because branch 2 is unreachable once branch 1 matches anything.

Option 1 is the only one that actually resolves it. Not done unilaterally: it changes shared parsing.

## Chapter 13 — what is still open, none of it blocking

1. **The five maintenance-lens disclaimers.** Decision 1 installs the framing that the 2026-07-15 repair pass over-hedged against, but it does not by itself remove the hedges. Separate cleanup, still wanted.
2. **Register.** Measured after this session's edits: **1.3 second-person uses per 1,000 body words** — the lowest in the book by a wide margin (Ch. 12 post-repair was 5.2; Ch. 11 post-conversion 12.9). About half of body paragraphs still end on a negation. The additions did not worsen this (seven paragraphs added, one ending on a negation, deliberately — see the seed file's verification note), but the pre-existing problem is untouched.
3. **Does the spine question move into the opener?** *"When does a protective model become costly?"* still appears only in figure captions and alt text, never in body prose. Ch. 12 precedent says move it.
4. **Section 3 is 435 words**, roughly a third of its neighbours. Its position — that neurodevelopmental conditions are not maintenance loops — is correct and worth keeping; whether that justifies the length is a separate question.
5. **Grupe & Nitschke (2013)** remains open for Ch. 13 in `evidence-commitments.md`. The Decision 1 install does not use it.
6. **Opener prevalence figure** says "roughly one in five U.S. adults." NIMH's current figure is 23.1%. The existing hedge covers it; the phrasing is on the low side of the source.

## Repository notes

- **Five reference-list entries in Ch. 13 are never cited in text** — Barth et al. (2013), Beck et al. (1979), Craske et al. (2014), Linehan (1993), Rogers (1957). Pre-existing, not introduced this session. Linehan and Rogers are discussed by name in prose without a parenthetical; the other three are unused. Either cite them or move them to Further Reading.
- **`pipeline/evidence-commitments.md` has one OPEN row** — Ch. 10's life-history mosaic point (short interbirth intervals and high reproductive output alongside slow development) was requested and is not in the source.
- **Three files in `docs/images/ch03/` are not images.** Despite `.png` extensions they are UTF-8 text notes, producing a recurring ~10-byte CRLF phantom diff. They reappear as modified until renamed to `.txt` or the one-time renormalization runs.
- **Chapter 8 has three broken internal anchors** — cross-links use double hyphens where generated IDs collapse to single. Confirmed still failing in the current lint run.
- **`git status` is not safe under the Cowork mount** — it takes `.git/index.lock` like a write command and cannot release it. Safe read-only commands are `git log`, `git diff`, `git show`, `git rev-list`. Stage exact paths; never `git add .`.
- Deferred and needing a decision, in `PROJECT_BACKLOG.md`: removing ~20 MB of unreferenced images from `docs/`; the numeric commit messages; the one-time `git add --renormalize .`; and the twelve unreviewed coherence-check failures.

## Important files

- **Chapter 13 seeds, settled decisions, and verification run:** `pipeline/ch13-spine-seeds.md`
- **Evidence commitments (claim-level constraints, book-wide):** `pipeline/evidence-commitments.md`
- Spine-seed protocol: `pipeline/spine-seed-protocol.md`; paste-ready prompt: `pipeline/spine-seed-prompt.md`
- Chapter voice-conversion workflow: `AGENTS.md` → `## Style`
- Chapter 11 seeds and decision record: `pipeline/ch11-spine-seeds.md`
- Chapter 12 seeds and settled decisions: `pipeline/ch12-spine-seeds.md`
- Chapter 11 conversion residue: `pipeline/audits/ch11-conversion-residue-2026-07-25.md`
- Theoretical spine (Layer 3 + drafting rules): `pipeline/theoretical-spine.md`; elaborations in `pipeline/theoretical-foundations.md`, `GPT_spine.md`, `pipeline/concepts-semanticization-log.md`
- Shared builder: `pipeline/build_chapter_html.mjs` (**no Ch. 13 config — see blocker above**); line-edit packet builder: `pipeline/build_line_edit_docx.py`
- Durable deferred work: `PROJECT_BACKLOG.md`
