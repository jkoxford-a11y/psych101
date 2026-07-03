# Chapter 6 Image Generation Guardrails

*Created: 2026-07-03 after first glymphatic preview review.*

Use these constraints before generating additional Chapter 6 images.

## Text-size rule

Future Chapter 6 figures should use **fewer words in the image** and **larger labels**. The current glymphatic preview is conceptually strong, but some text may be too small on the webpage or in lecture projection.

Default rule:

- Maximum 5–7 major labels per figure.
- Prefer 1–3 word labels.
- Avoid paragraph callouts inside the image.
- Put caveats and mechanistic nuance in the caption, not in small figure text.
- Use large, high-contrast labels that remain readable when the image is displayed at normal textbook width.
- Avoid sidebars with explanatory prose unless the figure is intended as a full-page infographic.
- Use generous whitespace; do not fill every available area.

## Prompt language to add to future image-generation requests

Add this block to future Chapter 6 prompts:

```text
Readability constraint:
Use very large labels only. Keep in-image text minimal: no small paragraphs, no dense sidebars, and no more than 5–7 major labels total. Use the caption to carry nuance. The figure must remain readable when displayed at normal webpage width and on a classroom slide.
```

## Application to current glymphatic image

The current glymphatic preview is promising because it clearly shows CSF inflow, interstitial exchange, and waste outflow. Before final use, check it on the actual webpage. If text is too small, revise by simplifying to a two-panel comparison:

- **Awake: limited clearance**
- **Deep slow-wave sleep: increased CSF flow**
- **CSF inflow**
- **Waste outflow**
- **Metabolic waste**
- **Active maintenance**

Move these details to the caption instead of the image:

- perivascular / perivenous explanation
- exact step sequence
- animal versus human evidence caveat
- molecular regulation caveat
- amyloid-beta caveat

## Design preference for next figures

For the next Chapter 6 images, favor simpler mechanism diagrams over full infographics. The ideal figure should be teachable at a glance, with the caption doing the detailed work.
