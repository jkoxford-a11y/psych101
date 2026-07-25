# Psych101 — Current Handoff

**Last updated:** 2026-07-25
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for the chapter voice-conversion workflow and all conventions.

## Current state

**The chapter review process now has two distinct stages, and this is the main thing to understand before picking up work.**

1. **Pre-review audit** (`pipeline/chapter-pre-review-audit-prompt.md`) — diagnoses conceptual, evidentiary, figure, and scope problems. Produces `pipeline/audits/chNN-pre-review-audit.md`. Repairs follow.
2. **Spine seeding** (`pipeline/spine-seed-protocol.md`, new this session) — runs *after* repairs and *before* prose drafting. Diagnoses spine-disconnection mechanically, drafts per-section seeds, and routes framing decisions to the instructor as an editable Word packet. Prose drafting starts only when the packet comes back.

The second stage exists because reading the Layer 3 notes and then drafting makes the framing decisions silently, and hands the instructor prose to react to rather than a lens to choose. `AGENTS.md` → `## Style` → *Install the spine* now points at the protocol.

**Chapter 11 is converted and awaiting the instructor's line edit.** The full spine conversion was applied to `source/chapters/ch11-social-psychology.md` after the instructor returned thirteen decisions on the seed packet. The chapter's student-facing spine question was replaced at his direction — *"Why do we care what other people think — and what makes that stop?"* — and `pipeline/theoretical-spine.md` §8 was updated to match. The line-edit packet is `line-edit-packets/Chapter_11_Social_Psychology_Line_Edit.docx`; the residue list scoping that pass is `pipeline/audits/ch11-conversion-residue-2026-07-25.md`.

**Chapters 10 and prior are stable.** The Chapter 10 finalization and the repository-hygiene pass described in the previous handoff both landed (commits `9b42ef2` and `1b6379e`). Durable cautions carried forward: the Chapter 6 and Chapter 7 image lanes remain paused; deployed human spot-checks for figure-expansion, Signal Detection, and Learning Labs remain for release validation. Stage exact paths; do not use `git add .`.

## Immediate next actions

1. **Instructor line-edits `Chapter_11_Social_Psychology_Line_Edit.docx`**, scoped by the residue report. Nothing downstream should start first.
2. **After that edit, in this order:** reconcile the markup into the source → update Learning Objectives (see below) → apparatus retrofit → regenerate HTML → re-lint.
3. **Settle the seed-packet packaging question** before applying the protocol to Chapter 12. Chapter 11's packet ran to thirteen decisions across fourteen pages; the open proposal is to split it into a short instructor decision packet and a separate agent-facing conversion plan. Recorded as unresolved in `pipeline/spine-seed-protocol.md` → Step 6.
4. **Apply the protocol to Chapters 12 and 13.** Chapter 12 has a seed waiting: social baseline theory (Coan & Beckes) was promoted to the spine this session and deliberately routed to Ch. 12 rather than Ch. 11 — see `theoretical-spine.md` §8, Ch. 12 notes.
5. Keep the Chapter 6 and Chapter 7 image lanes paused unless reopened; complete the deferred figure-expansion, Signal Detection, and Learning Lab human spot checks at release validation.

## Chapter 11 — specific open items

- **Learning objectives were not touched** and now omit three threads the chapter teaches: belonging, beliefs-transmitted vs. feelings-conditioned, and the caring/not-caring frame. The pre-review audit separately asked for objectives 7–8 to be consolidated. Both are pedagogical commitments and the instructor's call.
- **Apparatus retrofit is pending by design.** Four Stop and Retrieve, two Think About It, three Do Not Confuse, and seventeen review questions mostly test term discrimination rather than relations. The protocol runs this last so the prompts test the chapter as it finally reads.
- **HTML is behind the source.** The AI Connection moved from a top-level section to a subsection at the end of Section 3, so its heading level changed from `##` to `###` and its anchor will move on regeneration. The linter currently passes against the *old* build — that result is stale.
- **Word count is up 22%** (7,071 → 8,648). Reviewed and accepted by the instructor rather than compressed: what was removed was catalog, what was added is narrative. Revisit only if the chapter reads long in practice. Longest stretches are Section 1 (1,275) and Section 2 (1,380).

## Repository notes

- **Three files in `docs/images/ch03/` are not images.** Despite `.png` extensions, "Info for Figure 35 02 04.png" and two siblings are UTF-8 text notes. They produce a recurring ~10-byte CRLF phantom diff because `.gitattributes` now marks `*.png` binary while the committed blobs are LF-normalized. No image data is at risk. They will keep reappearing as modified until renamed to `.txt` or the one-time renormalization runs.
- **Chapter 8 has three broken internal anchors.** Its own cross-links use double hyphens (`section-1-encoding--building-the-trace`) while the generated IDs collapse to single. Self-contained, three links, small fix.
- Deferred and needing an instructor decision, all in `PROJECT_BACKLOG.md` → Repository and workflow: removing ~20 MB of unreferenced images that deploy to the live site from `docs/`; the numeric commit messages; and the one-time `git add --renormalize .`.

## Important files

- **Spine-seed protocol:** `pipeline/spine-seed-protocol.md`
- Chapter voice-conversion workflow: `AGENTS.md` → `## Style`
- Chapter 11 seeds and decision record: `pipeline/ch11-spine-seeds.md`
- Chapter 11 conversion residue: `pipeline/audits/ch11-conversion-residue-2026-07-25.md`
- Chapter 11 pre-review audit: `pipeline/audits/ch11-pre-review-audit.md`
- Theoretical spine (Layer 3 + drafting rules): `pipeline/theoretical-spine.md`; deeper elaborations in `pipeline/theoretical-foundations.md` (§22 covers social prediction), `GPT_spine.md`, `pipeline/concepts-semanticization-log.md`
- Chapter 10 verification-residue report: `pipeline/audits/ch10-claude-draft-verification-residue-2026-07-25.md`
- Chapters 7–13 packet-preparation record: `pipeline/audits/ch07-ch13-line-edit-packet-structural-prep-2026-07-22.md`
- Shared builder: `pipeline/build_chapter_html.mjs`; line-edit packet builder: `pipeline/build_line_edit_docx.py`
- Repository-wide lab audit/regression: `pipeline/audits/learning-lab-state-restoration-audit.md`, `pipeline/learning_lab_state_regression.cjs`
- Durable deferred work: `PROJECT_BACKLOG.md`
- Paused Chapter 7 image lane: `pipeline/audits/ch07-image-work-pause-2026-07-17.md`
