# Chapter 3 Post-Revision Validation

**Date:** 2026-07-17  
**Authoritative source:** `source/chapters/ch03-neuroscience-biological-bases.md`  
**Generated page:** `docs/chapters/03-neuroscience.html`

## Result

Chapter 3 passed canonical-source, converter, generated-structure, asset, interaction, direct Figure 3.9 review, and live multi-viewport review. The revised source and regenerated HTML are aligned, all internal anchors resolve, and the chapter’s learning assets are present and reachable.

The initial three-viewport browser run found one rendering defect: the saltatory-conduction `<video>` retained its 1536-pixel intrinsic width and caused page-level horizontal overflow. Diagnostics isolated that video as the only element extending past the reading column. Commit `7d27cc9` first constrained generated chapter videos through `docs/js/figure-expand.js`.

On 2026-07-17, Jon confirmed that the corrected live page worked at desktop, portrait-mobile, and landscape-mobile resolutions. The same `display: block; width: 100%; max-width: 100%; height: auto` declarations were then moved into the shared `docs/css/mobile-figure-fix.css` stylesheet, which `docs/js/sidebar.js` loads across generated chapter pages. The temporary video-sizing block was removed from `docs/js/figure-expand.js`, returning that script to figure expansion only. Static inspection confirmed declaration equivalence and the shared stylesheet load path. A post-migration automated browser rerun was not available; the whole-book release audit should exercise the shared rule as a routine regression check rather than an open Chapter 3 blocker.

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

## Browser and asset checks

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
- no console errors, page errors, or failed local asset responses occurred;
- after the responsive correction, Jon confirmed the page worked across the tested resolutions.

The only original failed assertion was horizontal overflow, traced specifically to the video’s intrinsic width. The correction now resides in shared CSS rather than runtime element styling.

## Figure 3.9 visual review

**Approved.** The sympathetic and parasympathetic systems occupy the two primary columns. Fight, flight, freeze, and tend-and-befriend appear in a separate full-width band labeled as behavioral response options. The artwork therefore does not depict tend-and-befriend as a third autonomic branch.

## Disposition

Chapter 3 is complete. Do not reopen its prose, figures, labs, or chapter-specific rendering unless a later whole-book regression check exposes a concrete defect.
