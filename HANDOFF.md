# Psych101 — Current Handoff

**Last updated:** 2026-07-15 (Chapter 13 canonical revision)
**Canonical repository:** `C:\GitHub\psych101`

This file records current state only. See `GPT_project_log.md` for completed-work history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

### Chapters 2 and 9–13 — canonical revision work complete

Chapter 2 and Chapters 9–13 have completed their current audit/revision cycles. Do not reopen Chapters 9–13 unless Jon identifies a specific editorial, figure, lab, or rendered-page issue.

### Chapter 13 — Psychological Disorders & Therapy

The canonical source is `source/chapters/ch13-psychological-disorders-therapy.md`; generated output is `docs/chapters/13-disorders-therapy.html`.

Settled decisions implemented:

- Diagnosis is classification under uncertainty, not a causal explanation or automatic treatment prescription.
- The 3Ds remain only as preliminary questions; duration, impairment, culture/development, exclusions, differential diagnosis, and clinical judgment carry the diagnostic foundation.
- The adaptive-process idea is bounded to selected maintenance loops, not used as a general theory of disorder.
- The opener is an original progressive-disclosure composite case. DSM reliability versus validity and diagnostic overshadowing carry the evidence; Rosenhan remains only as a brief contested historical note.
- Disorder-specific biological claims are calibrated as associations, candidate mechanisms, or subgroup findings rather than neat causal explanations.
- A compact substance-use-disorders subsection distinguishes use, physiological adaptation, impairment, and treatment.
- Psychotherapy evidence integrates alliance and condition-specific technique without a universal Dodo Bird hierarchy. Medication and ECT are treated as separate evidence/risk/context decisions.
- The AI section distinguishes general chatbots, wellness products, evaluated digital interventions, clinician-integrated systems, and regulated products; evidence, privacy, governance, and accountability are product-specific.
- The chapter has five objectives, retrieval interruptions in all four major sections, ten mixed review questions, an alphabetized eighteen-term glossary, and the required ending sequence.

Eight figures are wired and documented in `docs/images/ch13/README_captions_alt_text_attribution.md`. Five are new original programmatic SVGs; three existing original figures were retained. Six misleading older assets are retired and unwired.

The standalone lab is complete at `docs/labs/ch13/diagnosis-under-uncertainty.html` with `docs/js/labs-diagnosis-under-uncertainty.js`. It uses fictional composite cases, progressive evidence disclosure, gated explanation and transfer, session-only storage, no identifiers or diagnostic score, and no network submission. It is linked from the chapter and labs index.

A reproducible narrow generator now lives at `pipeline/build_ch13_html.py`. The shared mobile figure overflow repair is loaded through `docs/js/sidebar.js` from `docs/css/mobile-figure-fix.css`.

## Immediate next actions

1. Run the planned repository-wide lint, source/HTML parity, links, figures, and alt-text audit.
2. Review the deployed GitHub Pages site after publication, including all Chapter 13 figures, expandable behavior, lab gates, and navigation.
3. Perform actual-phone checks in portrait and landscape before calling the book release-ready.

## Important files

- `source/chapters/ch13-psychological-disorders-therapy.md`
- `docs/chapters/13-disorders-therapy.html`
- `docs/images/ch13/README_captions_alt_text_attribution.md`
- `docs/labs/ch13/diagnosis-under-uncertainty.html`
- `docs/js/labs-diagnosis-under-uncertainty.js`
- `pipeline/build_ch13_html.py`
- `source/visuals-inventory.md`
- `PROJECT_BACKLOG.md`
