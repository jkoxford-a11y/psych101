# Chapter 3 OpenStax candidate images

Purpose: candidate source pool for Chapter 3 neuroscience visuals. These are not yet adopted final textbook assets. Use this folder to evaluate whether to use an OpenStax image directly, redraw it in the project’s house style, or reject it.

## License and attribution note

OpenStax Psychology 2e and Anatomy & Physiology 2e are licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 unless otherwise noted. OpenStax requires attribution, and the OpenStax name/logo/marks are not part of the Creative Commons license.

Project implication: these are legally usable for a free/noncommercial course site with attribution, but they are less flexible than original diagrams because the NC and SA terms travel with reused/adapted OpenStax content. For maximum reuse flexibility, prefer original project diagrams that teach the same concept without copying OpenStax’s exact visual expression.

Recommended attribution pattern for direct reuse:

> Image from OpenStax, *Psychology 2e*, Section 3.2, Figure X. Licensed CC BY-NC-SA 4.0. Access for free at https://openstax.org/books/psychology-2e/pages/3-2-cells-of-the-nervous-system.

Recommended attribution pattern for adaptation/redraw:

> Adapted from OpenStax, *Psychology 2e*, Section 3.2, Figure X. Licensed CC BY-NC-SA 4.0. Redrawn by Jonathan K. Oxford for General Psychology.

## Candidates

### 1. Neuron anatomy

- Source: OpenStax Psychology 2e, Section 3.2, Figure 3.8.
- Source page: https://openstax.org/books/psychology-2e/pages/3-2-cells-of-the-nervous-system
- Image CDN candidate: https://openstax.org/apps/image-cdn/v1/f%3Dwebp/apps/archive/20260604.144757/resources/8ef5efcb722f347fa1a7f333ed74760cfaf0a055
- Current Ch3 target: replace or redraw `docs/images/ch03/fig_neuron_anatomy.*`.
- Verdict: strong candidate. Good for dendrite, soma/cell body, axon, myelin sheath, terminal buttons. If used directly, the style will not match the original Ch4-style diagrams. Best use may be as a reference for a cleaner original redraw.
- Suggested alt text: Diagram of a neuron labeled with dendrite, cell body or soma, axon, myelin sheath, cell membrane, and terminal buttons.

### 2. Synapse / neurotransmitter release

- Source: OpenStax Psychology 2e, Section 3.2, Figure 3.9.
- Source page: https://openstax.org/books/psychology-2e/pages/3-2-cells-of-the-nervous-system
- Image CDN candidate: https://openstax.org/apps/image-cdn/v1/f%3Dwebp/apps/archive/20260604.144757/resources/19b96297b4eb951260d2140515a3e7261f82d331
- Current Ch3 target: possible new `docs/images/ch03/fig_synapse_neurotransmitter_release.*`.
- Verdict: useful concept, but direct image includes a diagram plus a microscopy panel. The diagram panel is more useful for this chapter than the micrograph. Prefer redrawing the synapse panel in house style rather than using the combined image directly.
- Suggested alt text: Diagram of a presynaptic terminal releasing neurotransmitter into the synaptic cleft, where neurotransmitter molecules bind to receptors on the postsynaptic cell.

### 3. Action potential graph

- Source: OpenStax Psychology 2e, Section 3.2, Figure 3.11.
- Source page: https://openstax.org/books/psychology-2e/pages/3-2-cells-of-the-nervous-system
- Image CDN candidate: https://openstax.org/apps/image-cdn/v1/f%3Dwebp/apps/archive/20260604.144757/resources/3d084f9cec67b33ae2c686fb2238e8ef9f1fe1f9
- Current Ch3 target: replace or redraw `docs/images/ch03/fig_action_potential_threshold.*`.
- Verdict: strong candidate, but the project’s version should emphasize threshold, all-or-none firing, refractory period, and the “firing rate, not spike size” misconception. Best use is as a source/reference for a project-specific redraw.
- Suggested alt text: Line graph of membrane potential over time showing resting potential near -70 mV, threshold near -55 mV, rapid depolarization to a positive peak, repolarization, hyperpolarization, and return to rest.

### 4. Reuptake

- Source: OpenStax Psychology 2e, Section 3.2, Figure 3.12.
- Source page: https://openstax.org/books/psychology-2e/pages/3-2-cells-of-the-nervous-system
- Image CDN candidate: https://openstax.org/apps/image-cdn/v1/f%3Dwebp/apps/archive/20260604.144757/resources/5702a778859ad92103597c3eae5b473b388b3791
- Current Ch3 target: optional only; no active target unless the chapter restores more drug/reuptake mechanism.
- Verdict: hold. Useful for drug mechanisms, but probably more detail than the current chapter needs.
- Suggested alt text: Diagram of neurotransmitter molecules in a synapse, with some binding to receptors and others being taken back up into the presynaptic terminal through reuptake.

### 5. Anatomy & Physiology action potential references

- Source: OpenStax Anatomy & Physiology 2e, Section 12.4, Figures 12.23 and 12.24.
- Source page: https://openstax.org/books/anatomy-and-physiology-2e/pages/12-4-the-action-potential
- Verdict: useful technical reference, but likely too physiology-heavy for direct Psych 101 reuse. Use only as a reference check when redrawing the action-potential graph.

### 6. Anatomy & Physiology synapse reference

- Source: OpenStax Anatomy & Physiology 2e, Section 12.5, Figure 12.27.
- Source page: https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons
- Verdict: useful technical reference for Ca2+ entry, vesicle fusion, neurotransmitter release, receptor binding, and clearing from the synapse. Likely too detailed for direct use; better as a reference for a simplified project diagram.

## Recommended next action

Do not directly replace the current Ch3 assets yet. First create or regenerate three project-style figures:

1. `fig_neuron_anatomy.svg/png` — simplified neuron anatomy with signal direction.
2. `fig_action_potential_threshold.svg/png` — clean graph emphasizing threshold, all-or-none spike, refractory period, and firing rate.
3. `fig_synapse_neurotransmitter_release.svg/png` — new simplified synapse figure.

Then update `docs/images/ch03/README_captions_alt_text_attribution.md` so it reflects the active seven-figure Ch3 set rather than the older nine-figure inventory.
