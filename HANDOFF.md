# Psych101 — Current Handoff

**Last updated:** 2026-07-15
**Canonical repository:** `C:\GitHub\psych101`
**Current branch:** `main`; Chapter 9–11 finalization changes are intentionally uncommitted for Jon's review.

This file records current state only. See `GPT_project_log.md` for completed-work history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

### Chapters 9–11 finalized in source and generated HTML

The canonical chapter sources are now:

- `source/chapters/09-thinking-language-intelligence.md`
- `source/chapters/ch10-lifespan-development.md`
- `source/chapters/ch11-social-psychology.md`

Chapter 9's comparison work is complete and superseded. The category hierarchy is wired as Figure 9.1; the Linda/bank-teller passage and nested-set figure remain; the omitted question-substitution asset was not restored; and the IQ figure is consistently Figure 9.9. The former `-2` and `ch09-` source paths were not recreated. Historical copies under `_archive/` and `_provenance/` remain untouched.

Chapter 10 now uses final claim-calibrated figures for extended human development (10.1), developmental tuning (10.3), attachment reunion behavior (10.6), the adolescent dual-systems schematic (10.7), and fluid/crystallized adulthood patterns (10.8). Captions and metadata explicitly distinguish interacting contributors from a settled origin story, activity-plus-maturation from literal “use it or lose it,” schematic group averages from individual trajectories, and ordinary aging from dementia. The approved attachment raster is retained and its narrow rendered-page readability has been checked. The ZPD/fading-support lab is linked from the authoritative source and generated HTML.

Chapter 11 now includes the repaired Asch line-judgment figure (11.2), aggregation figure (11.6), and person-by-situation figure (11.7). All seven active figures have complete caption/alt/creation/attribution/license/public-sharing/caveat/status metadata in the chapter README. The replacement `change-the-situation.html` lab is the only Chapter 11 lab link; the deleted Feed lab is absent from active source and HTML.

The three generated pages were rebuilt from canonical Markdown with the narrow reusable generator at `pipeline/build_chapter_html.mjs`. It preserves the dynamic sidebar, section navigation, callout variants, review `<details>` structure, alphabetized key-term lists, separated Further Reading items, and expandable figures. Provenance notes remain in source but are intentionally omitted from student-facing HTML.

### Shared responsive repair

Chrome QA at 1440 px and 390 px found that comparison tables could impose their minimum width on the entire chapter. `docs/css/style.css` now gives the mobile reading column `min-width: 0` and contains wide tables with table-local horizontal scrolling. All three pages now report zero page-level horizontal overflow at 390 px. The mobile chapter label is also offset so the sidebar reopen control does not cover it.

## Validation completed

- Full repository lint: all 14 chapters pass with no hard failures. Chapters 9, 10, and 11 each have 0 failures and 0 warnings. Existing warnings remain only in Chapters 1, 12, and 13.
- Chrome desktop/mobile checks: zero page overflow, all images loaded, no empty alt text, correct lab links, and expand/collapse state worked on all three pages.
- Visual inspection: all new/revised figure assets were reviewed; Figure 10.6's caption remains legible at 390 px.
- Static checks: local links and image paths resolve; review/details and Further Reading structures are populated; sidebar and figure scripts are present; active files contain no Figure 9.10, superseded Ch9 source paths, or deleted Feed-lab references.
- High-risk Chapter 10 bibliographic metadata was checked against live publisher/primary records; no source correction was warranted.
- The in-app browser could not reach the host-only local preview despite an HTTP 200 host check. Responsive interaction QA therefore used installed Chrome headlessly; the in-app session was closed cleanly.

## Immediate next actions

1. **Revise Chapter 12 first.** Begin with its source/audit context, then regenerate and validate the HTML from the approved source. The current repository linter flags seven review questions and only one Stop and Retrieve prompt.
2. **Audit and revise Chapter 13 second.** Its current HTML has six review questions and no Stop and Retrieve prompts; treat the audit as evidence/voice/content work before regeneration.
3. Jon should review the uncommitted Chapter 9–11 diff, especially the figure claims/captions and the new narrow HTML generator, before deciding whether to commit.

## Known risks and boundaries

- `.pet-runs/` was already untracked and was not touched.
- No commit or push was performed.
- `source/visuals-inventory.md` is reconciled for Chapters 9–11, but other chapters may still drift from their per-chapter image READMEs.
- Live deployed-site verification remains separate from local browser QA.
- Line-ending warnings may appear because several regenerated files use LF in the working tree; inspect `git diff -w` when reviewing content.
