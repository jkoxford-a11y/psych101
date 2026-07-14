# Psych101 — Current Handoff

**Last updated:** 2026-07-14 (Session 109)
**Canonical repository:** `C:\GitHub\psych101`
**Current branch or PR:** `main`. Recent Chapter 9 and Chapter 10 comparison-draft work was committed directly to `main` through the GitHub connector.

This file is current-state only and is overwritten rather than appended. See `GPT_project_log.md` for chronological history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

### Chapter 9

A pre-review audit at `pipeline/audits/ch09-pre-review-audit.md` identified several root problems: heterogeneous heuristics were being pulled toward one mechanism, some language-acquisition and intelligence claims exceeded their evidence, a brief group-differences section carried too much causal weight, the chapter was overloaded, and several figures needed reconsideration.

A non-authoritative comparison revision exists at `source/chapters/09-thinking-language-intelligence-2.md`. The authoritative source remains `source/chapters/ch09-thinking-language-intelligence.md` until Jon explicitly approves promotion.

- **Confirmed decision: keep the Linda/bank-teller passage and Figure 9.6.** Linda is Tversky and Kahneman's original research example, not publisher-derived wording.
- `docs/images/ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg` exists but still needs to be wired at Figure 9.1.
- `docs/images/ch09/ch09_conjunction_fallacy_nested_sets.svg` was built for the superseded Jordan example and remains in the repo as an unused original asset.
- The former bias/question-substitution Figure 9.9 remains omitted; the IQ figure should be renumbered from 9.10 to 9.9.
- The exact patch list is in `pipeline/audits/ch09-comparison-figure-followup.md`.
- The current generated Chapter 9 HTML is structurally valid but was built before those source patches and is not final.

### Chapter 10

A full non-authoritative comparison revision was added at `source/chapters/ch10-lifespan-development-2.md` following independent review and the Work pre-review audit. The original `source/chapters/ch10-lifespan-development.md` and generated HTML remain unchanged.

The comparison draft:

- retains the long, plastic, expensive human-development spine while treating secondary altriciality and cooperative breeding as parts of a supported coevolutionary model rather than a complete causal story;
- reconstructs the opener so Piaget's stage account is introduced as a theory rather than installed as the corrective fact;
- reduces the instructional body to approximately 4,100 words, with seven objectives, ten open-response questions with hidden model answers, twenty alphabetized key terms, and eight linked Connections rows;
- preserves one sentence on natural pedagogy, the AI/ZPD application, the moral helper-hinderer replication, orchid/dandelion, and the aging tradeoff;
- recalibrates synaptic pruning, attachment, parenting styles, early object knowledge, and adolescent dual-systems claims;
- states that many regulatory-development trajectories approach adult-like plateaus around the mid-twenties without claiming that the brain becomes complete at one age;
- retains the age-25 car-insurance illustration as an actuarial parallel rather than evidence of a neural mechanism;
- adds socioemotional selectivity and a normal-aging-versus-dementia distinction to improve lifespan balance.

The revision was committed directly to `main` in commit `d4f156f73405ac31121257ed61b0b8f35a8ec57f`.

A standalone Chapter 10 learning lab is now ready for instructor review at `docs/labs/ch10/zpd-fading-support.html`, with its script at `docs/js/labs-zpd-fading-support.js` and navigation through `docs/labs/ch10/index.html` and the main labs index. It contrasts complete-answer support, graduated hints, and faded-support transfer without scoring or assessing the student. It is not wired into Chapter 10; chapter wiring remains a separate approval step.

## Next actions

1. **Jon: review `source/chapters/ch10-lifespan-development-2.md`.** Decide whether it should replace the current canonical Chapter 10 source.
2. **Jon: review the Chapter 10 ZPD/scaffolding lab.** Decide whether to approve it and, separately, whether to wire it into the eventual Chapter 10 build.
3. **Revise Chapter 10 figures before HTML regeneration:**
   - Figure 10.1: show interacting contributors rather than a settled causal equation or sequence.
   - Figure 10.3: simplify to selective stabilization/developmental tuning; remove optimization and exact-looking windows.
   - Figure 10.6: retain observable reunion behavior; remove adult-style trait labels and deterministic caregiving histories.
   - Figure 10.7: identify dual systems as a schematic average model and add peers/context/opportunity.
   - Figure 10.8: label curves as schematic group averages and soften the “opposite directions” title.
4. **Complete the Chapter 9 patch list** in `pipeline/audits/ch09-comparison-figure-followup.md`, then review the comparison draft for promotion and rebuild its HTML.
5. After Chapter 10 source approval and figure repair, regenerate `docs/chapters/10-lifespan-development.html` from the approved source rather than patching generated HTML.
6. Run `pipeline/lint_chapters.py`, source/HTML parity checks, figure-path and alt-text validation, and desktop/narrow-mobile visual QA for the eventual final builds.

## Decisions needed from Jon

- Whether to promote the Chapter 10 comparison draft to the authoritative source, request targeted changes, or retain the current source.
- Whether to approve the Chapter 10 ZPD/scaffolding lab and later wire it into the approved Chapter 10 build.
- Whether Figure 10.3 should be simplified for the textbook with the current dense asset retained for slides.
- Whether Chapters 9 and 10 should keep open-response review questions with hidden model answers or later receive authored diagnostic multiple-choice items.
- Whether to promote the completed Chapter 9 comparison draft after its remaining figure wiring and renumbering patches.

No further decision is needed on Linda or the former Chapter 9 Figure 9.9.

## Validation and known risks

- The Chapter 10 comparison draft has been structurally inspected in source form; HTML has not been regenerated or linted.
- The Chapter 10 lab passed full browser completion, three refresh/restore checkpoints, reset, console, desktop/mobile, state/privacy, and semantic accessibility checks. The browser driver did not synthesize Enter/Space activation, so keyboard readiness was verified from native controls, focus transitions, and DOM order rather than a complete automated keyboard-only run.
- Five current Chapter 10 figure assets still encode claims that revised captions alone cannot fully repair. The source contains explicit revision comments so they are not silently carried into a rebuild.
- Chapter 10 reference metadata was selectively repaired, but a final live bibliographic verification pass should occur before publication.
- The current Chapter 9 HTML passed structural checks but was built from unpatched source; treat it as a working build, not final.
- `source/visuals-inventory.md` is known to drift out of sync with actual per-chapter image state; cross-check per-chapter metadata.
- CRLF/LF line-ending drift can make `git status` report large whitespace-only changes; use `git diff -w` before treating those as content drift.
- Multiple recent commits went directly to `main` through the GitHub connector rather than Jon's usual GitHub Desktop review step.

## Important files

- `source/chapters/ch10-lifespan-development-2.md` — revised Chapter 10 comparison draft.
- `source/chapters/ch10-lifespan-development.md` — current authoritative Chapter 10 source; unchanged.
- `pipeline/audits/ch10-pre-review-audit.md` — Chapter 10 Work audit.
- `docs/chapters/10-lifespan-development.html` — current generated Chapter 10; unchanged.
- `docs/images/ch10/` — active Chapter 10 figures and metadata.
- `docs/labs/ch10/zpd-fading-support.html` and `docs/js/labs-zpd-fading-support.js` — standalone ZPD/scaffolding lab; not chapter-wired.
- `source/chapters/09-thinking-language-intelligence-2.md` — non-authoritative Chapter 9 comparison draft.
- `pipeline/audits/ch09-comparison-figure-followup.md` — remaining Chapter 9 patch specification.
- `docs/chapters/09-thinking-language-intelligence.html` — structurally valid working build from unpatched comparison source.
- `pipeline/voice-brief.md` — authoritative prose voice.
- `docs/images/psych101_figure_style_guide.md` — figure standard.
- `AGENTS.md` — permanent routing and operating rules.
- `PROJECT_BACKLOG.md` — durable deferred work.
