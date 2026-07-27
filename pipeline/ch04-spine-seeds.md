# Chapter 4 — Sensation & Perception: Spine-Seed Pass

**Date:** 2026-07-27
**Protocol:** `pipeline/spine-seed-protocol.md`. Run in chat, not as a `.docx` packet — matches the workflow settled across Ch. 1, 2, 3, 11, 12, 13 (see `HANDOFF.md`).

## Step 1 — Thread-count diagnostic

| Thread | Count | Note |
|---|---|---|
| "bottleneck" | 0 | Concept present in scattered form (metabolic/evolutionary framing in §1, "compression" in Gestalt) but never named or unified |
| "controlled hallucination" | 2 | Well installed (§3, Seth 2021, correctly hedged) |
| the dress | present | Well installed, matches spine's teaching demonstration |
| perceptual disorders | agnosia/prosopagnosia/Bonnet present, anosognosia 0 | Spine names anosognosia as the fourth and sharpest disorder — self-monitoring itself constructed |
| Müller-Lyer / "carpentered" | 0 | Entirely absent from the chapter |
| individual-differences taxonomy | ~0 | "color blindness" appears once, only as an MCQ distractor |
| binding problem | 3 | Well installed, correctly hands off to Ch. 5 |

Evidence-commitments check: Chapter 4 had no committed claim rows before this pass — the original audit found no accuracy corrections needed. Two unrelated lineage flags (SP-004 Weber's Law, SP-014 Tesla Vision framing) remain open provenance questions, not content-accuracy ones; not touched in this pass.

**Baseline note:** unlike Ch. 1/Ch. 2's pre-pass state, Ch. 4 was already strongly spine-installed on its primary claim (perception as active, constructed inference) — Misconception Opener, §3's predictive-coding treatment, and the dress illusion all match the spine notes closely. The diagnostic found narrower gaps, not a chapter-wide disconnect. Same shape as the Ch. 3 pass.

## Decisions

**1. Anosognosia — added.** Fourth perceptual disorder, installed in §3's Perceptual Disorders subsection, ~75 words. Previews Ch. 5's self-construction thread without borrowing Ch. 5's stronger claim (self-monitoring is constructed, not "the self is a hallucination" — that extension is reserved for Ch. 5's Seth treatment). Citation: Orfei et al. (2007), *Brain* 130(12), 3075–3090 — verified before use. Chapter Summary and Key Terms updated to match; evidence-commitments row added.

**2. Cultural variation / individual-differences taxonomy — dropped.**

What it was: a proposed new subsection (~205 words) covering the three-source individual-differences taxonomy (sensory / experience-shaped / current-state), using the Müller-Lyer illusion as the flagship evidence for experience-shaped priors, per `theoretical-spine.md`'s Ch. 4 Layer 3 notes.

Why it was seeded: the spine explicitly assigns this thread to Ch. 4 and calls Müller-Lyer "the strongest evidence that top-down prediction is culturally shaped." The chapter scored zero on it.

Why it was cut: the instructor recalled correctly that this illusion's causal explanation had already been found shaky. Checked history first — the Müller-Lyer treatment (paragraph, Figure 4.8, citation) was removed from Ch. 4 on 2026-07-20, but that removal was recorded as a length/cognitive-load cut (Section 3 was reduced 62.6% in the same pass, alongside Heider-Simmel and the W/M figure), not explicitly as an accuracy correction. Going back further, when the material was first added (session 51), the carpentered-world explanation was already caveated as contested and deliberately not called "the strongest evidence" — so the spine document's current wording overstates past what the chapter's own history had already established was appropriate.

A fresh literature check (2026-07-27) confirmed the caution and sharpened it: Segall, Campbell & Herskovits's original study confounded ethnicity with environment (three different ethnic groups compared, not one group across environments); the carpentered-world causal explanation is now widely disputed on methodological grounds (reporting practices no longer considered adequate); and Jahoda's follow-up, comparing the *same* ethnic group in rural versus urban environments — the specific test the causal story needs to survive — found no significant difference. The cross-population susceptibility difference appears to have replicated; the explanation for *why* does not currently support "strongest evidence" framing. This is the Ch. 11 Asch pattern from the protocol: verifying didn't clear the caution, it strengthened it.

What is lost: Ch. 4 has no worked example of the "experience-shaped priors" category of the individual-differences taxonomy, and no cultural-variation content at all. The taxonomy itself (sensory / experience-shaped / state-based) was not installed — a better-supported example for the experience-shaped category was floated (a perceptual-learning or expertise example, echoing the radiologist case already used in §3) but not drafted or decided on. Genuinely open for a future pass if wanted.

`theoretical-spine.md`'s Ch. 4 Layer 3 note was corrected in place with a caution rather than edited directly, so the original claim and its correction both stay visible. `evidence-commitments.md`'s Ch. 4 section gained a row recording the same finding, so a future pass sees the caution at the ledger level too, not only in the framework document.

## Step 4 — Word budget

Additions: ~75 words (anosognosia) + ~40 words (bottleneck seam sentence, §3) ≈ 115 words. No prune required at this scale — in line with the Ch. 3 precedent (~120 words, no prune).

The bottleneck seam sentence (naming why top-down prediction exists, tying §1's resource framing to §3's prediction machinery) was installed directly as mechanical seam work per protocol Step 6 — reordering/connecting an already-implicit claim, not a new thread requiring a scope decision.

## Step 9 — Apparatus check

Chapter Summary and Key Terms updated to include anosognosia. Learning Objectives not touched — LO5 already covers perceptual construction generally and doesn't enumerate the specific disorders. Run `python pipeline/check_chapter_coherence.py source/chapters/ch04-sensation-perception.md` and `python pipeline/lint_chapters.py` before considering this closed.
