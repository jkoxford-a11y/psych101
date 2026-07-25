# Psych101 — Current Handoff

**Last updated:** 2026-07-25
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for the chapter voice-conversion workflow and all conventions.

## Current state

A reusable **chapter voice-conversion workflow** was defined this session and written into `AGENTS.md` → `## Style`. It is now the standing process for turning base drafts into the instructor's voice: subtractive checklist → keep-the-story → install-the-spine (Layer 3 notes + student-facing spine question from `pipeline/theoretical-spine.md`, plus `theoretical-foundations.md`, `GPT_spine.md`, `concepts-semanticization-log.md`) → register calibration (vivid-not-chatty; cut residual qualifiers; avoid the absolute "this is THE key fact" tic; prune side-content as beyond-scope) → human verification pass (residue check) → reconcile against the instructor's line-edit markup as source of truth. Diagnosis behind it: the base drafts read as "spine-disconnected" — de-hedged but voiceless — because they were drafted at content level without installing the theoretical spine.

**Chapter 10 is the first worked example, and is in progress.** A spine-installed draft was generated from the base source (`line-edit-packets/Chapter_10_Lifespan_Development_Claude_Draft.docx`); the instructor line-edited it directly (51 insertions / 28 deletions), heavily rewriting the life-history and cognitive-development prose in his own voice and examples. Those changes were accepted into a clean `line-edit-packets/Chapter_10_Lifespan_Development_Claude_v2.docx` (14–29% alloparental figure cut; "vocabulary → general knowledge" continuity-example fix; two instructor comments retained — soften the too-absolute opener, add a false-belief demo figure). Residue report: `pipeline/audits/ch10-claude-draft-verification-residue-2026-07-25.md`. The Ch10 base source (`source/chapters/ch10-lifespan-development.md`) is unchanged; finalized prose still needs to be reconciled back into it. A GPT/Codex Ch10 version is expected for comparison but had not landed on disk as of this session.

**Repo state (per the instructor's Windows git):** the working tree is clean except this session's `AGENTS.md` edit (modified) and three untracked Ch10 files (the two `.docx` and the residue report). Prior chapter, lab, and figure lanes are committed and stable. Do not diagnose git state from the Linux sandbox — its whole-repo diffs are phantom line-ending artifacts. Durable cautions carried forward: the Chapter 6 and Chapter 7 image lanes remain paused; deployed human spot-checks for figure-expansion, Signal Detection, and Learning Labs remain for release validation. Stage exact paths; do not use `git add .`.

## Immediate next actions

1. Finalize Chapter 10: soften the too-absolute chapter-opener line and add a false-belief demo figure (both flagged in `..._Claude_v2.docx` comments), then reconcile the finalized prose from that v2 back into `source/chapters/ch10-lifespan-development.md`.
2. When the GPT/Codex Chapter 10 version lands, diff it against the spine + `AGENTS.md` standard and choose.
3. Apply the `AGENTS.md` voice-conversion workflow to the remaining line-edit chapters (9, 11, 12, 13); for the least-intuitive chapters (e.g., Social Psychology), pre-draft spine seeds for the instructor to edit rather than author cold.
4. Commit this session's work by exact paths — `AGENTS.md`, the three Chapter 10 files, `HANDOFF.md`, `GPT_project_log.md` — after a diff review; avoid `git add .`.
5. Keep the Chapter 6 and Chapter 7 image lanes paused unless reopened; complete the deferred figure-expansion, Signal Detection, and Learning Lab human spot checks at release validation.

## Important files

- Chapter voice-conversion workflow: `AGENTS.md` → `## Style`
- Chapter 10 spine-installed draft + accepted clean version: `line-edit-packets/Chapter_10_Lifespan_Development_Claude_Draft.docx`, `line-edit-packets/Chapter_10_Lifespan_Development_Claude_v2.docx`
- Chapter 10 verification-residue report: `pipeline/audits/ch10-claude-draft-verification-residue-2026-07-25.md`
- Theoretical spine (Layer 3 + drafting rules): `pipeline/theoretical-spine.md` (also `pipeline/theoretical-foundations.md`, `GPT_spine.md`, `pipeline/concepts-semanticization-log.md`)
- Chapter 5 authoritative source: `source/chapters/ch05-consciousness.md`
- Chapters 7–13 packet-preparation record: `pipeline/audits/ch07-ch13-line-edit-packet-structural-prep-2026-07-22.md`
- Chapter 4 reconciled source/specification: `source/chapters/ch04-sensation-perception.md`, `pipeline/audits/ch04_line_edit_reconciliation_revision_spec_2026-07-20_v2.md`
- Shared builder: `pipeline/build_chapter_html.mjs`
- Repository-wide lab audit/regression: `pipeline/audits/learning-lab-state-restoration-audit.md`, `pipeline/learning_lab_state_regression.cjs`
- Durable deferred work: `PROJECT_BACKLOG.md`
- Paused Chapter 7 image lane: `pipeline/audits/ch07-image-work-pause-2026-07-17.md`
