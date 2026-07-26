# Psych101 — Current Handoff

**Last updated:** 2026-07-26
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history, `PROJECT_BACKLOG.md` for durable deferred work, and `AGENTS.md` for the chapter voice-conversion workflow and all conventions.

## Current state

**The chapter review process now has two distinct stages, and this is the main thing to understand before picking up work.**

1. **Pre-review audit** (`pipeline/chapter-pre-review-audit-prompt.md`) — diagnoses conceptual, evidentiary, figure, and scope problems. Produces `pipeline/audits/chNN-pre-review-audit.md`. Repairs follow.
2. **Spine seeding** (`pipeline/spine-seed-protocol.md`, added 2026-07-25) — runs *after* repairs and *before* prose drafting. Diagnoses spine-disconnection mechanically, drafts per-section seeds, and routes framing decisions to the instructor as an editable Word packet. Prose drafting starts only when the packet comes back.

The second stage exists because reading the Layer 3 notes and then drafting makes the framing decisions silently, and hands the instructor prose to react to rather than a lens to choose. `AGENTS.md` → `## Style` → *Install the spine* now points at the protocol.

3. **The apparatus is now checked against the body after every prose pass.** `pipeline/check_chapter_coherence.py`, new 2026-07-26, runs on the authoritative markdown. `lint_chapters.py` checks structure on generated HTML and passes all fourteen chapters; it cannot see apparatus drift. Run both. See `AGENTS.md` → *The apparatus must be re-checked against the body after any prose pass* and protocol Step 9.

**Audits are no longer authoritative on register.** Their must-preserve and must-correct findings are content commitments and stand; their prescriptions about hedging and qualification are superseded by `AGENTS.md` → `## Style`. Established 2026-07-26 after the Chapter 12 repair pass was traced as the cause of that chapter's voice loss. The rule is in `AGENTS.md` → *Audits are diagnostic, not authoritative*, and the underlying finding is that throat-clearing rose in **11 of 11** audited chapters and fell in none.

**Chapter 12 is converted and awaiting the instructor's line edit.** All nine seed decisions were settled in conversation on 2026-07-26 and the conversion is applied to `source/chapters/ch12-emotion-stress-coping.md`, with HTML regenerated. Voice recovered: second person 4.5 → 10.6 per thousand words, throat-clearing 4.9 → 2.5, negation-final paragraphs 41% → 34%. The record of every decision and the reasoning for what was cut is `pipeline/ch12-spine-seeds.md`. Packets: `line-edit-packets/Chapter_12_Emotion_Stress_Coping_Line_Edit_POST_CONVERSION_2026-07-26.docx` for the line edit, `Chapter_12_Spine_Seeds_DECISIONS_2026-07-26.docx` for the decision record.

**Chapter 11 is converted, line-edit round one applied, awaiting round two.** Spine question replaced at the instructor's direction — *"Why do we care what other people think — and what makes that stop?"* Packets: `Chapter_11_Social_Psychology_Line_Edit.docx` and the instructor's marked copy `..._MARKED_2026-07-26.docx`. Residue list: `pipeline/audits/ch11-conversion-residue-2026-07-25.md`.

**Chapters 10 and prior are stable.** Durable cautions carried forward: the Chapter 6 and Chapter 7 image lanes remain paused; deployed human spot-checks for figure-expansion, Signal Detection, and Learning Labs remain for release validation.

**Two git cautions.** Stage exact paths; never `git add .` — the working tree permanently shows three `docs/images/ch03/` files as modified because they are text notes with `.png` extensions colliding with the `*.png binary` rule in `.gitattributes`. Renaming them to `.txt` would retire this and is an open instructor decision in the backlog. And **`git status` strands `.git/index.lock` under the sandbox mount** — `CLAUDE.md` still says read-only git commands are safe, which is wrong for `status`. The instructor must delete the lock by hand before any further git operation.

## Immediate next actions

1. **Instructor line-edits Chapter 12** — `Chapter_12_Emotion_Stress_Coping_Line_Edit_POST_CONVERSION_2026-07-26.docx`. One thing to look at specifically: the constructionism boundary sentence at the head of Section 2 sits between a heading and a large table and may still read as a stub.
2. **Decide whether Chapter 12 gets the ED–SC layer now or waits on Chapter 1.** The backlog assigns Ch12 the ultimate ground for social-evaluative stress, and Oxford, Ponzi & Geary (2010) is a cortisol finding on exactly this chapter's subject — the chapter invokes socially evaluated threat three times without saying why social evaluation is threatening. Left out of the conversion because the backlog sequences proximate/ultimate into Chapter 1 first. Deciding this before the line edit avoids a second pass over the same paragraphs.
3. **Apply the protocol to Chapter 13** — next in queue and third-worst on the voice measures, with negation-final paragraphs doubled 22% → 44% on a 51% cut. Its packet must quote current text beside every proposal; a packet of line numbers and short labels was returned as undecidable. Chapters 5 and 3 outrank several chapters ahead of them on damage (Ch3 lost two-thirds of its second person).
4. **Review the twelve hard failures the new coherence check found in other chapters.** Nobody has looked at them. Includes the Chapter 8 double-hyphen anchor defect and key-term orphans in seven chapters.
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
