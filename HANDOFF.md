# Psych101 — Current Handoff

**Last updated:** 2026-07-27
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for the chapter voice-conversion workflow and all conventions.

## Current state

**Chapters 1, 2, 3, 4, 11, 12, and 13 have now been through the actual spine-seed protocol** (`pipeline/spine-seed-protocol.md`) — evidenced by `pipeline/ch01-spine-seeds.md`, `ch02-spine-seeds.md`, `ch03-spine-seeds.md`, `ch04-spine-seeds.md`, `ch11-spine-seeds.md`, `ch12-spine-seeds.md`, `ch13-spine-seeds.md`. Every other chapter's spine question predates the protocol (established 2026-07-25). Chapter 6 is a step behind even that: no spine question exists for it at all yet.

**Chapter 4's pass added anosognosia as the chapter's fourth perceptual disorder (~75 words, Orfei et al. 2007) and re-verified, then rejected, the Müller-Lyer/carpentered-world thread the spine had assigned this chapter.** The instructor recalled — correctly — that this illusion's causal explanation had already looked shaky; a fresh check confirmed it: Segall, Campbell & Herskovits's original study confounded ethnicity with environment, the carpentered-world explanation is now widely disputed on methodological grounds, and Jahoda's same-group rural/urban comparison found no significant difference. Same pattern as the Ch. 11 Asch check — verifying strengthened the caution rather than clearing it. `theoretical-spine.md`'s Ch. 4 Layer 3 note was corrected in place (original claim preserved, caution added below it) rather than silently edited, and a matching row went into `evidence-commitments.md` so the finding is visible at the ledger level too. Net result: the individual-differences taxonomy (sensory/experience-shaped/state-based) was **not** installed — it needs a different, better-supported example for the experience-shaped-priors category before it's worth a future pass. A small mechanical seam sentence (why top-down prediction exists at all — bandwidth/time, not metabolism) was installed directly, not routed as a decision. Apparatus check clean — identical pre/post coherence-checker counts (verified via `git stash`), 14/14 lint PASS after rebuilding `04-sensation-perception.html`. Full account in `GPT_project_log.md`, 2026-07-27, and `pipeline/ch04-spine-seeds.md`.

**Chapter 3's pass found a chapter already mostly spine-installed, unlike Ch. 1/Ch. 2's pre-pass state.** None of Ch. 3's core assigned threads (action-selection, serotonin, dopamine, chemical-imbalance correction) scored zero. The diagnostic instead found two narrower gaps: the chemical-imbalance "Do Not Confuse" box corrected the misconception's content but never named its source (1990s direct-to-consumer pharmaceutical advertising), and the working-memory-capacity/PFC-metabolic-cost hypothesis (`theoretical-spine.md` §8, Cowan 2001) was drafted as a Layer 3 elaboration for this chapter and never installed. Both accepted and installed as drafted (~120 words total, no prune): one sentence naming the advertising origin ahead of the existing correction, and one hedged paragraph after the brain-structures table. Cowan (2001) added to the References list and to `evidence-commitments.md`. Apparatus check clean — identical pre/post coherence-checker counts (verified via `git stash`), 14/14 lint PASS. Full account in `GPT_project_log.md`, 2026-07-27, and `pipeline/ch03-spine-seeds.md`.

**Chapter 2's pass installed the calibration/pattern-detection thread.** Ch. 2's chapter-map row assigns "science as collective model calibration; statistics as the formal machinery; pattern-detection as two-edged adaptation." "Calibrat-" scored zero, and "model"/"pattern" — both apparently healthy on a raw count — turned out on a hand check to be exclusively *statistical* model/pattern-in-data, never the master-loop sense. Two insertions (~120 words, no prune): the Misconception Opener now names the correlation→causation instinct as normal, biased pattern-detection rather than a personal reasoning failure; *Where This Fits* now opens on the chapter's spine question, installed near-verbatim per the Ch. 12 precedent. One real apparatus gap found and fixed in the same pass (Key Terms' "Third-variable problem" never appeared as that phrase in body). Full account, including three new `check_chapter_coherence.py` false-positive classes found and verified but deliberately *not* patched into the chapter, in `GPT_project_log.md`, 2026-07-27, and `PROJECT_BACKLOG.md` → Editorial review.

**Chapter 1's pass installed proximate/ultimate in Section 3** — the chapter `PROJECT_BACKLOG.md` had flagged as the cheapest, most natural home and the one every later chapter's proximate/ultimate framing was deliberately sequenced to wait on. Two follow-ons this unblocks: Ch. 11's deferred "Where This Fits" ultimate-frame installation, and the rest of the ED–SC propagation pass (Ch. 7, 8, 10, 12, 13). Neither has been started. Full scope in `GPT_project_log.md`, 2026-07-27.

**Workflow for spine-seed passes is settled, not just proposed.** The instructor wants chat iteration, not `.docx` packets — full context while deciding, not blind review of a rendered document — and serial, one chapter at a time. This has now held across Ch. 12, Ch. 1, Ch. 2, Ch. 3, and Ch. 4. `spine-seed-protocol.md` Step 8 (delivery format) still describes the old packet flow and has not been rewritten to match.

**A cross-chapter citation and apparatus cleanup pass ran earlier the same day, triggered by a second AI's (ChatGPT/Codex) review of the open items list.** Verified every claim by hand against the actual checkers and source rather than trusting either account — one of GPT's flagged items would have been reintroduced as a real bug if not for that verification (see `GPT_project_log.md` for the full account). Net: five real defects fixed (two apparatus-formatting bugs, three citation gaps, one reference/claim mismatch), one incorrect fix attempt caught by `lint_chapters.py` and reverted before it shipped. `lint_chapters.py` is 14/14 PASS, 0 warnings as of this session.

**Other in-progress work is sitting untracked in this working tree and is not this session's.** `pipeline/build_line_edit_docx.py` is modified, and a new Chapter 13 line-edit packet exists untracked — looks like a concurrent session's Chapter 13 line-edit rendering work. Left untouched.

## Immediate next actions

1. **Next chapter for the spine-seed protocol is an open choice** — Chapters 1, 2, 3, and 4 are now done. Candidates are Chapter 6 (also needs a spine question from scratch, and is the only chapter with none at all), or picking up the ED–SC/proximate-ultimate propagation into Ch. 7, 8, 10, 11, or 13 that Ch. 1 was the prerequisite for.
2. **Ch4 — genuinely open, needs a decision before it's worth another pass:** the individual-differences taxonomy (sensory/experience-shaped/state-based) is still a real gap in the chapter, but its planned flagship example (Müller-Lyer) was rejected on 2026-07-27 verification. Needs a different experience-shaped-priors example — a perceptual-learning or expertise case (echoing the radiologist example already in §3) was floated but not drafted.
3. **Ch11 — genuinely open, needs the instructor:** the "Social psychology as model-building organisms in contact" thread has no Learning Objective naming it. A scope decision (add an objective, or confirm the thread doesn't need one), not a mechanical fix.
4. **Ch12 — optional:** `cognitive light cone` isn't named in the Chapter Summary, though the idea is fully present in plain language. Pure terminology reinforcement if wanted; not a missing concept, not acted on.
5. **Chapter 11 apparatus retrofit** — objectives/key terms partially updated in a prior session; confirm whether the full retrofit (review questions, summary) is still needed against `pipeline/ch11-spine-seeds.md`'s decisions.
6. Keep the Chapter 6 and Chapter 7 image lanes paused unless reopened.
7. `pipeline/check_chapter_coherence.py --all` currently crashes on Chapter 9 with a `UnicodeEncodeError` (Windows console `cp1252` can't encode `ć`) — pre-existing, not fixed. Run it per-chapter-path (not `--all`) until someone fixes the encoding or redirects output to a UTF-8 sink.
8. **Ch2's remaining coherence review items are checker noise, not chapter defects** — two "and colleagues"-phrased narrative citations (Lieberman 1999, McGregor 1998) and one multi-year combined citation (Hróbjartsson 2010) read as uncited because the checker's narrative-citation regex only recognizes "et al." or "and CapitalizedCoauthor" forms and only captures one year per parenthetical. Verified genuinely cited in `source/chapters/ch02-research-methods.md`; not acted on.

## Builder — all 13 chapters registered

`pipeline/build_chapter_html.mjs` registers Chapters **1–13**. The prologue is built separately and is not part of this registry. A lint PASS is now a reliable signal for every numbered chapter; 14/14 currently PASS with 0 warnings.

## Repository notes

- **`git status` is safe in a native shell (Claude Code).** The lock-file hazard described below is specific to the Cowork sandbox mount.
- **Cowork sandbox mount:** do not run `git add`, `git commit`, or `git update-ref` there — it can create `.git/index.lock`/`.git/HEAD.lock` but can't unlink them, which blocks every subsequent git command until deleted by hand. Safe read-only commands under that mount are `git log`, `git diff`, `git show`, `git rev-list`.
- **`check_chapter_coherence.py` has several documented false-positive classes** (see `PROJECT_BACKLOG.md` → Editorial review for full detail on each): its citation regex can't parse year-first narrative citations, three-author comma-list narrative citations, "Author and colleagues (year)" phrasing, or multi-year combined citations (only the first year is captured); its institutional-author keying picks a different word depending on citation vs. reference-list direction, so a correct citation can read as missing in both directions at once; its reference-parenthetical regex requires a bare year and rejects a correctly-formatted date like `(2024, September 4)`; its Key Terms check treats a slash-joined term ("X / Y") as one literal string, which will essentially never match even when both halves are correctly used; and its Connections-anchor slugifier doesn't match the JS builder's apostrophe-handling for `#### Classic Study` callout divs. Always verify a suggested anchor or citation fix against `lint_chapters.py` (real generated HTML) or by hand against the References list before applying it — don't trust the checker's "nearest match" or "uncited" output at face value.
- **`pipeline/evidence-commitments.md` has one OPEN row** — Ch. 10's life-history mosaic point (short interbirth intervals and high reproductive output alongside slow development) was requested and is not in the source.
- **Three files in `docs/images/ch03/` are not images.** Despite `.png` extensions they are UTF-8 text notes, producing a recurring ~10-byte CRLF phantom diff. They reappear as modified until renamed to `.txt` or the one-time renormalization runs.
- **A revised packet always goes to a new filename** if packets are used again — a packet was once rebuilt in place over the instructor's entered answers and they were unrecoverable.
- Deferred and needing a decision, in `PROJECT_BACKLOG.md`: removing ~20 MB of unreferenced images from `docs/`; the one-time `git add --renormalize .`; the twelve unreviewed coherence-check failures; and the book-wide finding that banned throat-clearing rose in 11 of 11 audited chapters.

## Chapter 13 — open, none of it blocking

1. **The five maintenance-lens disclaimers.** The proximate/ultimate install does not by itself remove the hedges the 2026-07-15 repair pass added. Separate cleanup, still wanted.
2. **Register.** 1.3 second-person uses per 1,000 body words — the lowest in the book by a wide margin. About half of body paragraphs still end on a negation.
3. **Does the spine question move into the opener?** *"When does a protective model become costly?"* appears only in figure captions and alt text. Ch. 12 precedent says move it.
4. **Section 3 is 435 words**, roughly a third of its neighbours. Its position is correct and worth keeping; whether that justifies the length is a separate question.
5. **Grupe & Nitschke (2013)** remains open for Ch. 13 in `evidence-commitments.md`.
6. **Opener prevalence figure** says "roughly one in five U.S. adults." NIMH's current figure is 23.1%. The existing hedge covers it; the phrasing is on the low side of the source.
7. **Five reference-list entries are never cited in text** — Barth et al. (2013), Beck et al. (1979), Craske et al. (2014), Linehan (1993), Rogers (1957). Linehan and Rogers are discussed by name without a parenthetical; the other three are unused. Cite them or move them to Further Reading.

## Important files

- **Spine-seed protocol:** `pipeline/spine-seed-protocol.md` — delivery format (Step 8) is stale; the instructor wants chat iteration, not `.docx` packets, and this has now held across four passes.
- **Chapter 1 seeds and settled decisions:** `pipeline/ch01-spine-seeds.md`
- **Chapter 2 seeds and settled decisions:** `pipeline/ch02-spine-seeds.md`
- **Chapter 3 seeds and settled decisions:** `pipeline/ch03-spine-seeds.md`
- **Chapter 4 seeds and settled decisions (including the Müller-Lyer re-verification):** `pipeline/ch04-spine-seeds.md`
- **Chapter 11 seeds and decision record:** `pipeline/ch11-spine-seeds.md`; conversion residue: `pipeline/audits/ch11-conversion-residue-2026-07-25.md`
- **Chapter 12 seeds and all nine settled decisions:** `pipeline/ch12-spine-seeds.md`
- **Chapter 13 seeds, settled decisions, and verification run:** `pipeline/ch13-spine-seeds.md`
- **Evidence commitments (claim-level constraints, book-wide):** `pipeline/evidence-commitments.md`
- Chapter voice-conversion workflow: `AGENTS.md` → `## Style`
- Theoretical spine (Layer 3 + drafting rules): `pipeline/theoretical-spine.md`; elaborations in `pipeline/theoretical-foundations.md`, `GPT_spine.md`, `pipeline/concepts-semanticization-log.md`
- Validators: `pipeline/lint_chapters.py` (structure, on generated HTML), `pipeline/check_chapter_coherence.py` (apparatus, on Markdown source — takes explicit paths or `--all`; `--all` currently crashes on Ch9's Unicode, see Immediate next actions; has known false-positive classes, see Repository notes)
- Shared builder: `pipeline/build_chapter_html.mjs` (Chapters 1–13 registered); line-edit packet builder: `pipeline/build_line_edit_docx.py`
- Durable deferred work: `PROJECT_BACKLOG.md`
