# Psych101 — Current Handoff

**Last updated:** 2026-07-25
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for the chapter voice-conversion workflow and all conventions.

## Current state

A reusable **chapter voice-conversion workflow** was defined this session and written into `AGENTS.md` → `## Style`. It is now the standing process for turning base drafts into the instructor's voice: subtractive checklist → keep-the-story → install-the-spine (Layer 3 notes + student-facing spine question from `pipeline/theoretical-spine.md`, plus `theoretical-foundations.md`, `GPT_spine.md`, `concepts-semanticization-log.md`) → register calibration (vivid-not-chatty; cut residual qualifiers; avoid the absolute "this is THE key fact" tic; prune side-content as beyond-scope) → human verification pass (residue check) → reconcile against the instructor's line-edit markup as source of truth. Diagnosis behind it: the base drafts read as "spine-disconnected" — de-hedged but voiceless — because they were drafted at content level without installing the theoretical spine.

**Chapter 10 is finalized as the first worked example.** The instructor's accepted v2 line edit was reconciled into `source/chapters/ch10-lifespan-development.md`; the shared builder regenerated `docs/chapters/10-lifespan-development.html`. The result preserves all eight existing figures, the ZPD Learning Lab, callouts, connections, Further Reading, and nine collapsible review answers. The helper–hinderer and natural-pedagogy detours and their unused references are removed; Secondary altriciality is in Key Terms. Chapter 10 lint passes with 0 failures and 0 warnings, and desktop/mobile browser inspection found no overflow, missing images, or console errors.

The v2 comment requesting a false-belief demonstration figure was resolved editorially with the concrete Sally/Anne explanation. The figure itself was deliberately not created or wired and remains a possible future task. Residue report: `pipeline/audits/ch10-claude-draft-verification-residue-2026-07-25.md`.

The repository-hygiene pass is complete in commit `1b6379e`. `.gitignore` and `.gitattributes` are active; agent scratch and `node_modules/` are no longer tracked; the project log is uniformly newest-first. Deferred repository decisions remain in `PROJECT_BACKLOG.md`. Durable cautions carried forward: the Chapter 6 and Chapter 7 image lanes remain paused; deployed human spot-checks for figure expansion, Signal Detection, and Learning Labs remain for release validation. Stage exact paths; do not use `git add .`.

## Immediate next actions

1. Decide later whether Chapter 10 needs a dedicated false-belief demonstration figure; do not wire one without explicit approval.
2. Apply the `AGENTS.md` voice-conversion workflow to the remaining line-edit chapters (9, 11, 12, 13); for the least-intuitive chapters, pre-draft spine seeds for the instructor to edit rather than author cold.
3. Keep the Chapter 6 and Chapter 7 image lanes paused unless reopened.
4. Complete the deferred figure-expansion, Signal Detection, and Learning Lab human spot checks at release validation.
5. Resolve deferred repository-hygiene decisions only through `PROJECT_BACKLOG.md`.

## Important files

- Chapter voice-conversion workflow: `AGENTS.md` → `## Style`
- Chapter 10 source, generated HTML, and accepted packet: `source/chapters/ch10-lifespan-development.md`, `docs/chapters/10-lifespan-development.html`, `line-edit-packets/Chapter_10_Lifespan_Development_Claude_v2.docx`
- Chapter 10 verification-residue report: `pipeline/audits/ch10-claude-draft-verification-residue-2026-07-25.md`
- Theoretical spine (Layer 3 + drafting rules): `pipeline/theoretical-spine.md` (also `pipeline/theoretical-foundations.md`, `GPT_spine.md`, `pipeline/concepts-semanticization-log.md`)
- Chapter 5 authoritative source: `source/chapters/ch05-consciousness.md`
- Chapters 7–13 packet-preparation record: `pipeline/audits/ch07-ch13-line-edit-packet-structural-prep-2026-07-22.md`
- Chapter 4 reconciled source/specification: `source/chapters/ch04-sensation-perception.md`, `pipeline/audits/ch04_line_edit_reconciliation_revision_spec_2026-07-20_v2.md`
- Shared builder: `pipeline/build_chapter_html.mjs`
- Repository-wide lab audit/regression: `pipeline/audits/learning-lab-state-restoration-audit.md`, `pipeline/learning_lab_state_regression.cjs`
- Durable deferred work: `PROJECT_BACKLOG.md`
- Paused Chapter 7 image lane: `pipeline/audits/ch07-image-work-pause-2026-07-17.md`
