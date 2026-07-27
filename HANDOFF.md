# Psych101 — Current Handoff

**Last updated:** 2026-07-27
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for the chapter voice-conversion workflow and all conventions.

## Current state

**All 13 numbered chapters are now registered in the shared builder.** Chapters 1, 6, and 7 were added to `pipeline/build_chapter_html.mjs` (each with `convertStructuredH4Callouts` and `promoteSubheadings`, matching the other early chapters) and their HTML regenerated. Nothing is unregistered anymore; a lint PASS on any chapter's generated HTML now reliably means its artifact matches current Markdown.

**Figure 12.1 is redrawn and matches the reconciled prose.** The old supports/demands framing (with the anti-literalism hedge baked into the artwork) is replaced with the deposits/withdrawals framing the Chapter 12 line-edit reconciliation installed. `fig_body_budget_deposits_withdrawals.svg`/`.png`, its caption, its alt text, and `docs/images/ch12/README_captions_alt_text_attribution.md` are all in sync. The scratch redesign files (`ch12_body_budget_redesign.svg`, `ch12_figure_12_1_metadata.patch`) are deleted now that their content is folded into the real figure.

**Chapter 8's three broken internal anchors are fixed.** Cause: three Chapter 8 section headings use a spaced em dash (`## Section 1: Encoding — Building the Trace`), which the builder's slugifier collapses to a **single** hyphen in the generated `id`. The six Connections-table links pointing at those headings had been hand-written with a **double** hyphen, so they resolved to nothing. Corrected the six links in `source/chapters/ch08-memory.md` to match the actual generated ids and regenerated `docs/chapters/08-memory.html`. `lint_chapters.py` is now 14/14 clean of **both** hard failures and warnings — previously it was 14/14 clean of hard failures with one standing Chapter 8 warning.

**Chapter 6/7/11 glossary and reference cleanup landed alongside the builder registration.** Ch6 gained four Key Terms entries (active sleep, ghrelin, leptin, sleep pressure) that were bolded in body but missing from the glossary. Ch7 gained ten Key Terms entries (schedules of reinforcement, cognitive map, law of effect, intrinsic/extrinsic motivation, etc.), dropped one dead reference (Bouton 2026, no longer cited), and fixed two Connections-anchor typos. Ch11 added three Key Terms (source amnesia, contact hypothesis, positive distinctiveness), extended Objective 2 to cover source amnesia, and stripped curly quotes/bold from two Do-Not-Confuse boxes for consistency with the rest of the chapter.

**Chapter 1 and Chapter 7 got spine questions installed** in `pipeline/theoretical-spine.md` — Ch1: *"Why does the same behavior look so different depending on who is explaining it?"*; Ch7: *"Why can learning occur without being visible in behavior?"* — with a matching sentence seamed into each chapter's "Where This Fits." Neither went through the full spine-seed protocol (see below); these are direct installs, same tier as Chapters 2–5, 8–10.

**The numeric-commit-message mystery is diagnosed, not a tooling bug.** Cowork sessions can't `git commit` or `git push` (see `CLAUDE.md`), so work accumulates locally and gets pushed later in batches that bundle several unrelated pieces of work — there's no honest one-line subject for a grab-bag commit, so it defaults to a bare number. Fix in place: commit bodies for batched pushes now list the `GPT_project_log.md` entry titles/dates the push corresponds to (`AGENTS.md` → Logging). Numeric subjects can stay. `PROJECT_BACKLOG.md` item marked resolved.

**Only Chapters 11, 12, and 13 have been through the actual spine-seed protocol** (`pipeline/spine-seed-protocol.md`) — evidenced by `pipeline/ch11-spine-seeds.md`, `ch12-spine-seeds.md`, `ch13-spine-seeds.md` being the only seed files that exist. Every other chapter's spine question predates the protocol (established 2026-07-25). Chapter 6 is a step behind even that: no spine question exists for it at all yet — `check_chapter_coherence.py` flags this now that Ch6 is registered and checked for the first time.

**Workflow decision for future spine-seed passes:** the instructor found the `.docx` packet round-trip tedious and wants to iterate on spine-seed decisions in chat instead, so he has full context while deciding — not blind review of a rendered document. He also considered parallelizing seed-drafting across several chapters at once and decided against it for now; serial, one chapter at a time, in chat, is the preferred mode going forward. This supersedes the packet-delivery format in `spine-seed-protocol.md` Step 8 for future passes — that file has not yet been updated to reflect it.

## Immediate next actions

1. **Next chapter to run through the spine-seed protocol** (in chat, not a packet) is an open choice — candidates are Chapter 6 (also needs a spine question from scratch) or continuing the backlog order implied by prior sessions.
2. **Small open review-level items surfaced by this session's validation, none blocking:**
   - Ch6: `orexin` is bolded in body with no Key Terms entry.
   - Ch7: one Connections anchor still mismatches — `#classic-study-watson-and-rayners-little-albert` vs. the actual heading id `classic-study-watson-and-rayner-s-little-albert`.
   - Ch11: `strong situations`/`weak situations` bolded but not in Key Terms; one taught thread ("social psychology as model-building organisms in contact") has no objective naming it; five references (Allport, Festinger, Funder, Milgram, Oxford, Zajonc) are cited by name only in text, no parenthetical.
   - Ch1: five references (Chomsky, Skinner, Titchener, Turing, Wundt) cited by name only, no parenthetical — likely intentional, unverified.
   - Ch12: summary omits the cognitive light cone thread — pre-existing, previously verified against `HEAD` as not introduced by any recent pass.
3. **Chapter 11 apparatus retrofit** — objectives/key terms partially updated this session; confirm whether the full retrofit (review questions, summary) is still needed against `pipeline/ch11-spine-seeds.md`'s decisions.
4. Keep the Chapter 6 and Chapter 7 image lanes paused unless reopened.
5. `pipeline/check_chapter_coherence.py --all` currently crashes on Chapter 9 with a `UnicodeEncodeError` (Windows console `cp1252` can't encode `ć`) — pre-existing, unrelated to this session's changes, not fixed. Run it per-chapter-path (not `--all`) until someone fixes the encoding or redirects output to a UTF-8 sink.

## Builder — all 13 chapters registered

`pipeline/build_chapter_html.mjs` registers Chapters **1–13**. The prologue is built separately and is not part of this registry. A lint PASS is now a reliable signal for every numbered chapter.

## Repository notes

- **`git status` is safe in a native shell (Claude Code).** The lock-file hazard described below is specific to the Cowork sandbox mount.
- **Cowork sandbox mount:** do not run `git add`, `git commit`, or `git update-ref` there — it can create `.git/index.lock`/`.git/HEAD.lock` but can't unlink them, which blocks every subsequent git command until deleted by hand. Safe read-only commands under that mount are `git log`, `git diff`, `git show`, `git rev-list`.
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

- **Spine-seed protocol:** `pipeline/spine-seed-protocol.md` — delivery format (Step 8) is stale as of this session; the instructor wants chat iteration, not `.docx` packets, going forward.
- **Chapter 11 seeds and decision record:** `pipeline/ch11-spine-seeds.md`; conversion residue: `pipeline/audits/ch11-conversion-residue-2026-07-25.md`
- **Chapter 12 seeds and all nine settled decisions:** `pipeline/ch12-spine-seeds.md`
- **Chapter 13 seeds, settled decisions, and verification run:** `pipeline/ch13-spine-seeds.md`
- **Evidence commitments (claim-level constraints, book-wide):** `pipeline/evidence-commitments.md`
- Chapter voice-conversion workflow: `AGENTS.md` → `## Style`
- Theoretical spine (Layer 3 + drafting rules): `pipeline/theoretical-spine.md`; elaborations in `pipeline/theoretical-foundations.md`, `GPT_spine.md`, `pipeline/concepts-semanticization-log.md`
- Validators: `pipeline/lint_chapters.py` (structure, on generated HTML), `pipeline/check_chapter_coherence.py` (apparatus, on Markdown source — takes explicit paths or `--all`; `--all` currently crashes on Ch9's Unicode, see Immediate next actions)
- Shared builder: `pipeline/build_chapter_html.mjs` (Chapters 1–13 registered); line-edit packet builder: `pipeline/build_line_edit_docx.py`
- Durable deferred work: `PROJECT_BACKLOG.md`
