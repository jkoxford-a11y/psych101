# Figure Expansion Standardization Audit

**Date:** 2026-07-19
**Scope:** Every active top-level HTML page in `docs/chapters/` (Prologue and Chapters 1–13). The archived Personality page was excluded because it is not linked from the active book.
**Baseline commit:** `4dd1b83`
**Regression:** `pipeline/figure_expansion_regression.cjs`

## Baseline findings

The shared implementation existed but was not a consistent book-wide system. Expanded figures used negative margins from the 716px effective prose content width. At `max-width: 1400px`, those margins were reset to zero, so 1280px expansion stopped at roughly 712–716px. Common 16:9 figures therefore grew only from about 604px to 712–716px (18–19%, 108–112 CSS pixels), below both material-growth thresholds. At 1440px the old breakout reached roughly 1115–1119px, but captions also stretched to about 90% of that width.

Legacy `.wide` wiring had three different outcomes: Chapter 6 was already explicitly expandable, Chapter 7 depended mostly on runtime normalization, and Chapters 4 and 8 never loaded the shared script. The latter pages left seven figures permanently about 972px wide at a 1280px viewport. Chapter 1 used `nav.js` to rewrite one figure and inject the expansion script at runtime, rather than declaring the shared markup and script in the chapter.

The baseline browser audit also found three broken Chapter 5 image paths. Suitable equivalents already existed in the Chapter 5/6 image sets, so this can be repaired as a figure-path-only markup change without altering prose, alt text, or captions. Two Chapter 10 SVGs used `<button>` toggles and collapsed to zero rendered width because their viewBox-only intrinsic sizing interacted badly with the shrink-to-fit button. Chapter 11 also used button toggles, which removed the direct image-link fallback when JavaScript was unavailable.

## Page-by-page baseline audit

“Material at 1280” uses the requested threshold: at least 20% wider or at least 120 CSS pixels wider. Counts are static HTML counts unless the runtime result is explicitly noted.

| Page | `.expandable` | `.wide` | `.no-expand` | Script count | Toggle coverage | Baseline rendered result / suitability |
|---|---:|---:|---:|---:|---|---|
| Prologue | 5 | 0 | 0 | 1 | 5/5 | 3 of 5 horizontal figures grew only 112–117px at 1280; all media otherwise suitable. |
| Chapter 1 | 0 | 0 | 0 | 0 | 0 static; 1 runtime | `fig_1_3_language_explanations.png` was rewritten by `nav.js`; 604→672px at 1280, not material. Scope map remains an ordinary figure; portrait strip remained unaffected. |
| Chapter 2 | 9 | 0 | 0 | 1 | 9/9 | 4 of 9 horizontal figures grew only 112px at 1280. All are suitable explanatory diagrams. |
| Chapter 3 | 10 | 0 | 0 | 1 | 10/10 | Most figures grew materially, but the 770×391 neuron image grew only 46px and the 487×352 action-potential raster was upscaled beyond its intrinsic size. Both chapter videos remained unaffected. |
| Chapter 4 | 0 | 1 | 0 | 0 | 0/1 | Retina figure was permanently wide: 1004px at 1440 and 972px at 1280. Other figures are ordinary non-expandable media. |
| Chapter 5 | 0 | 0 | 0 | 0 | n/a | No expansion declarations. Three pre-existing image paths were broken; no intrinsic pixels loaded. |
| Chapter 6 | 5 | 5 | 0 | 1 | 5/5 | All five grew 510→716px at 1280. Markup redundantly carried both legacy and current classes. |
| Chapter 7 | 1 | 9 | 0 | 1 | 1/1 static; 9/9 runtime | Eight figures depended on JS to manufacture toggles. Three horizontal figures grew only 97–112px at 1280. No direct image-link fallback for those eight. |
| Chapter 8 | 0 | 6 | 0 | 0 | 0/6 | All six were permanently wide: 1004px at 1440 and 972px at 1280. |
| Chapter 9 | 9 | 0 | 0 | 1 | 9/9 | Five horizontal figures grew only 108px at 1280; four square figures grew substantially. |
| Chapter 10 | 8 | 0 | 0 | 1 | 8/8 | Five horizontal figures grew only 108px at 1280. Two viewBox-only SVGs collapsed to 0px until their button toggles were activated. |
| Chapter 11 | 7 | 0 | 0 | 1 | 7/7 | Six horizontal figures grew only 108px at 1280. All seven used buttons, so there was no no-JS image-link fallback. |
| Chapter 12 | 4 | 0 | 0 | 1 | 4/4 | One horizontal figure grew only 112px at 1280; the other three grew materially. |
| Chapter 13 | 8 | 0 | 0 | 1 | 8/8 | Expansion stopped at 716px; one 597px figure was borderline at 119px growth. The page loaded `mobile-figure-fix.css` directly and received a second dynamically injected copy. |

## Media suitability

- The Chapter 1 portrait strip is not a `.chapter-figure`, received no toggle, and retained its fixed portrait-card sizing.
- Chapter 3’s two videos use `.chapter-video`, received no toggle, and remained constrained by the video-only responsive stylesheet.
- No decorative image was found inside `.chapter-figure.expandable`.
- The two low-resolution Chapter 3 teaching rasters are poor expansion candidates because their intrinsic widths cannot produce a material increase without upscaling. They should be explicitly marked `.no-expand` by the durable generator.
- All SVG teaching diagrams are suitable for expansion even when the browser reports a small default intrinsic size, because they are resolution-independent.

## Standard selected for implementation

- Collapsed images retain a 340px maximum height and intrinsic aspect ratio.
- Expanded figure workspace is centered around the prose column and capped at 1100px.
- With the desktop sidebar open, available width is `100vw - 260px sidebar - 64px safe gutters`; with the sidebar collapsed it is `100vw - 64px`.
- At mobile/touch breakpoints, expansion uses the complete main-content width (the existing safe 20px content gutters) and never uses `100vw` for the figure itself.
- At mobile/touch breakpoints, collapsed images use at most 80% of the available parent content width so expansion remains visibly meaningful.
- Raster images do not upscale beyond intrinsic width; SVGs may use the full expanded workspace.
- Expanded captions remain capped at the 716px effective prose width.
- Explicit expandable figures use image-link toggles for keyboard access and no-JS fallback. Legacy `.wide` figures remain runtime-normalizable unless `.no-expand` is present.

## Final state and verification

All 14 active pages now have a consistent static state: 80 figures use explicit `.expandable` image-link markup, two low-resolution Chapter 3 rasters use `.no-expand`, and no active page retains `.wide`. Chapters 1, 4, and 8 gained the previously missing shared script. Every page that needs the script loads it exactly once, including at runtime; Chapter 1's explicit wrapper makes the older `nav.js` selector inapplicable, so `nav.js` no longer implements its behavior. Chapter 13's redundant direct `mobile-figure-fix.css` load was removed, leaving the shared sidebar loader as the single source.

Chapter 5's three broken image paths now resolve to existing semantically matching assets: its local SCN SVG and the Chapter 6 two-process and sleep-architecture figures. Alt text and captions were preserved exactly. Chapter 7's eight runtime-manufactured toggles and all six permanently wide Chapter 8 figures now have durable image-link markup. Chapters 10 and 11 now use anchors rather than buttons, restoring the direct-file fallback; the two viewBox-only Chapter 10 SVGs no longer collapse to zero width.

`pipeline/figure_expansion_regression.cjs` passes:

| Viewport | Pages | Expandable figures | Result |
|---|---:|---:|---|
| 1440×900 | 14 | 80 | PASS |
| 1280×800 | 14 | 80 | PASS |
| 1024×768 | 14 | 80 | PASS |
| 390×844 | 14 | 80 | PASS |
| 844×390 | 14 | 80 | PASS |

The suite verifies static and runtime script counts, image-link fallback targets, keyboard focusability, Enter/click activation, both ARIA state/label transitions, zoom cursors, sidebar clearance, safe viewport bounds, caption width, material desktop/laptop growth when intrinsic dimensions permit it, full safe mobile width, meaningful mobile growth, exact second-activation restoration, no overflow, image loading, nonempty alt text, console errors, mojibake, and portrait/video/`.no-expand` exclusions. Final poor-candidate output is `none` because the two low-resolution rasters are explicitly excluded.

Manual in-app-browser checks with the sidebar open measured Chapter 1 at 604→956px, Chapter 2 at 510→956px, Chapter 3 at 510→956px, Chapter 9 at 604→956px, and Chapters 10 and 11 at 604→956px. In every case the sidebar ended at 260px, the expanded image began at about 284–286px, the caption stopped at 716px, overflow remained zero, and collapse restored the exact original width/state. Chapter 1 phone portrait measured 233→291px and phone landscape 604→780px, again with zero overflow and exact restoration. The expanded Chapter 1 desktop figure was also visually inspected.

The JavaScript generator round-tripped Chapters 3, 10, and 11 in an isolated temporary tree: figure/toggle counts, anchor fallback, ARIA state, the two Chapter 3 opt-outs, and one script include passed. `build_ch13_html.py` compiles and contains the durable link state and single script include; its full runtime build could not be executed because this environment does not provide its pre-existing `bs4` dependency. The already-generated Chapter 13 page passed the complete browser regression.

An ordered comparison against `HEAD` confirmed identical chapter prose, headings, captions, and alt text across all 14 active pages. Only figure markup, figure/script/style wiring, and the three repaired image paths changed.
