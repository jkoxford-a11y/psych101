# Chapter 3 Post-Revision Validation

**Date:** 2026-07-16  
**Authoritative source:** `source/chapters/ch03-neuroscience-biological-bases.md`  
**Generated page:** `docs/chapters/03-neuroscience.html`

## Result

Chapter 3 passed canonical-source, converter, generated-structure, asset, interaction, and direct Figure 3.9 review. The revised source and regenerated HTML are aligned, all internal anchors resolve, and the chapter’s learning assets are present and reachable.

The initial three-viewport browser run found one rendering defect: the saltatory-conduction `<video>` retained its 1536-pixel intrinsic width and caused page-level horizontal overflow. Diagnostics isolated that video as the only element extending past the reading column. Commit `7d27cc9` then constrained generated chapter videos to `width: 100%; max-width: 100%; height: auto` through the chapter media script loaded by the page.

A second automated Playwright run after that final responsive constraint could not be completed because the subsequent GitHub Actions workflows did not execute reliably, and the local container could not resolve GitHub. The corrective mechanism directly targets the measured overflow source; no other failed browser assertions were present before the fix. This limitation is recorded rather than treating an inferred pass as a measured one.

## Structural validation completed

- Chapter 3 is included in `pipeline/build_chapter_html.mjs`.
- `docs/chapters/03-neuroscience.html` was regenerated from the authoritative Markdown.
- The generated page contains five major content sections in the approved order.
- The misconception opener, three Do Not Confuse panels, two Classic Study panels, objectives, retrieval prompts, and AI enrichment render as intended.
- Ten figures are expandable and have non-empty alt text without duplicated figure-number prefixes.
- Video 3.1 is represented by semantic `<figure>`, `<video>`, and `<figcaption>` markup.
- Twelve review questions retain disclosure controls and rationales.
- The core glossary remains within the approved 20–24-term range.
- Summary → Connections → Review Questions → Key Terms → Further Reading → References order is preserved.
- All generated internal anchors resolve, including the H.M. and split-brain callout links.
- No stale pre-revision dopamine, H.M., stress, or autonomic claims remain in generated output.
- No replacement-character or common UTF-8 mojibake strings were detected.

## Browser and asset checks completed before responsive correction

The page was exercised at:

- desktop: 1440 × 900;
- portrait mobile: 390 × 844;
- landscape mobile: 844 × 390.

At all three widths:

- the Chapter 3 sidebar entry was active;
- all ten figure images loaded;
- all three Chapter 3 Learning Lab links returned HTTP 200;
- the saltatory-conduction video source returned HTTP 200;
- all twelve review-question disclosure controls were present;
- figure expansion and collapse updated both visual state and `aria-expanded`;
- no console errors, page errors, or failed local asset responses occurred.

The only failed assertion was horizontal overflow, subsequently traced specifically to the video’s intrinsic width and corrected in `docs/js/figure-expand.js`.

## Figure 3.9 visual review

**Approved.** The sympathetic and parasympathetic systems occupy the two primary columns. Fight, flight, freeze, and tend-and-befriend appear in a separate full-width band labeled as behavioral response options. The artwork therefore does not depict tend-and-befriend as a third autonomic branch.

## Remaining publication check

On the next routine live-site validation pass, confirm that page-level horizontal overflow is zero at the three tested widths after the committed responsive-video constraint. No additional Chapter 3 content, figure, or lab revision is indicated unless that check exposes a new issue.
