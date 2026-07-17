# Chapter 7 Image Work Pause

**Date:** 2026-07-17  
**Status:** paused by instructor decision  
**Scope:** state record only; no production promotion, chapter regeneration, metadata reconciliation, or inventory change

## Why work paused

Chapter 7 image review had become inefficient and error-prone because production figures and alternative candidates were repeatedly discussed under the same figure numbers. That identity problem was corrected in `pipeline/audits/ch07-remaining-figure-candidate-review.md` and `HANDOFF.md`, but the Figure 7.7 schematic still did not reach approval.

Jon selected the schematic route in principle because the current production graph contains empirical-looking daily points whose exact provenance has not been documented. The candidate's directional y-axis label was changed from `Fewer maze errors →` to neutral `Maze errors`. After rendering the revised candidate, Jon identified overlapping visual elements. The revised candidate is therefore **not approved**.

## Current Figure 7.7 state

- The current production PNG remains wired and unchanged.
- The production graph is visually readable, but its precise plotted-point provenance remains unresolved.
- The schematic candidate remains an alternative only.
- The candidate SVG received the neutral axis-label edit in commit `8007fb2`; that edit does not constitute approval.
- A locally generated matching PNG was supplied for manual placement, but the pair should not be promoted because the rendered candidate has overlapping elements.
- Do not resume Figure 7.7 work from the assumption that the current candidate only needs promotion. Reopen the actual SVG and PNG, identify the overlaps, and reassess the layout at full size and chapter width.

## Other Chapter 7 selections remain unchanged

- Figure 7.1: retain production; candidate not selected.
- Figure 7.2: candidate approved for later controlled promotion.
- Figure 7.3: retain production; candidate not selected.
- Figures 7.4 and 7.5: scientifically approved/provisionally retained.
- Figures 7.6 and 7.8: approved and promoted.
- Figure 7.9: candidate approved for later controlled promotion.

## Resume condition

Resume Chapter 7 image work only when Jon is ready for another image-review session. Begin with Figure 7.7 alone. Do not promote Figures 7.2 or 7.9, regenerate Chapter 7, or complete the nine-figure metadata batch while Figure 7.7 remains unresolved.

## Active project lane after pause

Move to a non-image task. The next recommended lane is a read-only Chapter 1 pre-review audit of `source/chapters/ch01-history-approaches.md` and its current generated HTML. Do not edit Chapter 1 during the audit.
