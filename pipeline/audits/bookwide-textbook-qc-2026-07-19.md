# Book-wide textbook quality-control audit — 2026-07-19

Branch: `audit/bookwide-textbook-qc`

Baseline: `2009410` (`Merge pull request #5 from jkoxford-a11y/fix/standardize-figure-expansion`)

Scope: Prologue and Chapters 1–13; audit only. No prose, HTML, CSS, JavaScript, generator, figure, caption, alt-text, answer-choice, inventory, or project-state repair was made.

## 1. Executive summary

This audit inspected 14 rendered pages, 13 canonical chapter review sections, 95 multiple-choice questions, 92 learning objectives, 62 numbered content sections, 118 genuine subsection headings, 108 rendered section-navigation links, 191 rendered internal hash links, and 102 active `<figure>` elements (94 numbered; 19 active SVGs).

The highest-priority defect is scientific: **Figure 3.6 depicts the reuptake route with arrowheads moving from the presynaptic transporter toward the cleft**, the reverse of the caption, alt text, label, and biological mechanism. Figure 2.2 has a second confirmed instructional contradiction: its fourth target contains a tight lower-left cluster while labeling the observations low-reliability / neither precise nor accurate. Figure 2.6 has a deterministic SVG layout defect: its footer sentence is wider than its box and crosses the boundary at every required size.

Answer positions are not merely imperfectly balanced. Chapters 3, 4, 5, 6, 7, and 8 use B for 63.6%–75% of multiple-choice answers, and Chapter 13 uses C for 80% of its five multiple-choice items. The seven-question B runs in Chapters 7 and 8 are likely noticeable to students. Chapter 1's live-source pattern is acceptable variation (A 18.2%, B 36.4%, C 36.4%, D 9.1%; longest run two Bs), not a confirmed defect.

Learning-objective wording is structurally sound: all 92 objectives begin with measurable instructional verbs. Only Chapter 10 bolds the first verb (7 of 92 objectives); the other 85 require a mechanical bold-only pass. The checked generators preserve inline bolding, and the rendered Chapter 10 page confirms all seven `<strong>` elements survive conversion. Four objectives merit separate editorial review for breadth, not mechanical rewriting.

Anchor integrity is good: all 191 internal hash links resolved to exactly one target, no duplicate IDs were found, all 102 images loaded, and the browser captured no console errors. Navigation usefulness is inconsistent: four one-link boxes are redundant; four sections with two or more genuine subsections lack useful boxes; and the very long, unsegmented Chapters 7 and 8 need editorial subsection design rather than artificial headings.

Unless a row says otherwise, “confirmed” means confirmed from canonical source plus rendered DOM/browser inspection; “likely” means the visual or editorial judgment should receive human review.

## 2. Highest-priority confirmed defects

| Severity | Confidence | Exact finding | Authoritative source | Rendered file | Repair category |
|---|---|---|---|---|---|
| blocking | confirmed | Figure 3.6 reuptake arrowheads visibly move outward from the presynaptic transporter into the cleft, contradicting the label, caption, alt text, and reuptake mechanism. | `source/chapters/ch03-neuroscience-biological-bases.md`, Figure 3.6; `docs/images/ch03/ch03_synaptic_transmission_release_receptors_clearance.md` | `docs/chapters/03-neuroscience.html`; `docs/images/ch03/ch03_synaptic_transmission_release_receptors_clearance.png` | full visual redesign / scientific repair |
| high | confirmed | Figure 2.2 panel 4 shows a tight cluster of darts at the lower left while saying “low reliability” / “neither accurate nor precise.” Clustering visually communicates precision. | `source/chapters/ch02-research-methods.md`, Figure 2.2 | `docs/chapters/02-research-methods.html`; `docs/images/ch02/ch02_reliability_validity_accuracy_precision.png` | full visual redesign or controlled raster repair |
| high | confirmed | Chapters 3–8 and 13 have student-noticeable answer-position concentrations; Chapters 7 and 8 each end with seven consecutive Bs. | canonical review sections listed in §3 | corresponding rendered chapter | editorial |
| high | confirmed | Chapters 7 and 8 contain eight sections of 1,261–2,326 coarse words with no genuine `<h3>` segmentation or section navigation. | `source/chapters/ch07-learning.md`; `source/chapters/ch08-memory.md` | `docs/chapters/07-learning.html`; `docs/chapters/08-memory.html` | editorial |
| medium | confirmed | Figure 2.6 footer text crosses its 1,360×100 SVG box at intrinsic, collapsed, expanded, 390×844, and 844×390 sizes. | `docs/images/ch02/fig_experiment_flowchart.svg` | `docs/chapters/02-research-methods.html` | SVG repair |
| medium | confirmed | Ch4 §4, Ch5 §§1–2, and Ch6 §2 have two or more genuine subsections but no rendered navigation box. | canonical HTML/source for those sections | corresponding rendered chapter | mechanical |
| low | confirmed | 85 of 92 objective-opening verbs are not bold; Chapter 10 alone follows the proposed convention. | canonical Learning Objectives sections | all rendered pages except Ch10 | mechanical |

## 3. Multiple-choice answer-position table

Percentages use only multiple-choice questions. Chapters 9–12 intentionally use open response, so a zero is not a defect.

| Ch. | N | A | B | C | D | Longest run | Unused / over 45% | Student noticeability |
|---:|---:|---:|---:|---:|---:|---|---|---|
| 1 | 11 | 2 (18.2%) | 4 (36.4%) | 4 (36.4%) | 1 (9.1%) | B×2 (Q1–2) | none | unlikely; acceptable variation |
| 2 | 11 | 2 (18.2%) | 5 (45.5%) | 4 (36.4%) | 0 (0%) | B×3 (Q4–6) | D unused; B Q4,5,6,8,10 | possibly; medium priority |
| 3 | 12 | 1 (8.3%) | 9 (75.0%) | 2 (16.7%) | 0 (0%) | B×5 (Q7–11) | D unused; B Q1,3,4,5,7,8,9,10,11 | yes; high priority |
| 4 | 12 | 1 (8.3%) | 9 (75.0%) | 2 (16.7%) | 0 (0%) | B×4 (Q9–12) | D unused; B Q1,2,4,6,7,9,10,11,12 | yes; high priority |
| 5 | 12 | 1 (8.3%) | 8 (66.7%) | 3 (25.0%) | 0 (0%) | B×5 (Q8–12) | D unused; B Q1,3,6,8,9,10,11,12 | yes; high priority |
| 6 | 9 | 2 (22.2%) | 6 (66.7%) | 1 (11.1%) | 0 (0%) | B×3 (Q6–8) | D unused; B Q1,2,4,6,7,8 | likely; high priority |
| 7 | 11 | 1 (9.1%) | 7 (63.6%) | 2 (18.2%) | 1 (9.1%) | B×7 (Q5–11) | B Q5–11 | clearly noticeable; high priority |
| 8 | 12 | 0 (0%) | 9 (75.0%) | 3 (25.0%) | 0 (0%) | B×7 (Q5–11) | A/D unused; B Q1,2,5,6,7,8,9,10,11 | clearly noticeable; high priority |
| 9 | 0 | 0 | 0 | 0 | 0 | — | open response | no action |
| 10 | 0 | 0 | 0 | 0 | 0 | — | open response | no action |
| 11 | 0 | 0 | 0 | 0 | 0 | — | open response | no action |
| 12 | 0 | 0 | 0 | 0 | 0 | — | open response | no action |
| 13 | 5 | 0 (0%) | 1 (20.0%) | 4 (80.0%) | 0 (0%) | C×3 (Q5,7,9) | A/D unused; C Q1,5,7,9 | likely after the first few MC items; high priority |

Priority order: Chapters 7 and 8; Chapters 3–5; Chapter 13; Chapter 6; Chapter 2. Chapter 1 needs no balancing solely on distribution.

Reordering is not globally mechanical. Position-coupled rationale text occurs in: Ch1 Q1–11; Ch2 Q1,2,4,7–11; Ch3 Q1 and Q4; Ch4 Q1–12; Ch5 Q1–3,5,6,8,10,12; Ch6 Q1–9; Ch7 Q1–11; and Ch8 Q1–12. These rationales explicitly mention letters such as “Why (a) is tempting” or compare lettered distractors. Any move must update the answer letter, every letter-specific rationale reference, grammar that depends on option order, and references such as “the others.” Ch13 rationales do not discuss tempting letters, but their bold answer letters still must change. Proposed repair category for every balancing change: **editorial**, followed by answer/rationale consistency validation.

## 4. Learning-objective table

All objectives begin with a measurable verb; no objective begins with introductory wording. Severity is low and confidence confirmed for the mechanical bolding rows. Source is each page's canonical Markdown Learning Objectives section; rendered counterpart is the matching page in `docs/chapters/`.

| Ch. | Obj. | Current opening words | First verb | Bold? | Proposed mechanical formatting only |
|---|---:|---|---|---|---|
| Prologue | 1 | Distinguish exposure from learning and explain | Distinguish | no | bold **Distinguish** only |
| Prologue | 2 | Explain how attention and working memory | Explain | no | bold **Explain** only |
| Prologue | 3 | Describe why deep processing produces more | Describe | no | bold **Describe** only |
| Prologue | 4 | Explain the testing effect and its | Explain | no | bold **Explain** only |
| Prologue | 5 | Describe why distributed practice outperforms massed | Describe | no | bold **Describe** only |
| Prologue | 6 | Use operant conditioning to explain procrastination | Use | no | bold **Use** only |
| Prologue | 7 | Define metacognition and explain what Kruger | Define | no | bold **Define** only |
| Prologue | 8 | Evaluate whether a given use of | Evaluate | no | bold **Evaluate** only |
| 1 | 1 | Define psychology as the scientific study | Define | no | bold **Define** only |
| 1 | 2 | Identify the major historical schools of | Identify | no | bold **Identify** only |
| 1 | 3 | Describe the modern theoretical perspectives in | Describe | no | bold **Describe** only |
| 1 | 4 | Apply the biopsychosocial model to organize | Apply | no | bold **Apply** only |
| 1 | 5 | Explain what the evolutionary perspective adds | Explain | no | bold **Explain** only |
| 1 | 6 | Explain how psychological science relies on | Explain | no | bold **Explain** only |
| 2 | 1 | Distinguish descriptive, correlational, and experimental research | Distinguish | no | bold **Distinguish** only |
| 2 | 2 | Explain why correlation does not establish | Explain | no | bold **Explain** only |
| 2 | 3 | Distinguish the consistency or precision of | Distinguish | no | bold **Distinguish** only |
| 2 | 4 | Distinguish random sampling from random assignment | Distinguish | no | bold **Distinguish** only |
| 2 | 5 | Identify the independent variable, dependent variable | Identify | no | bold **Identify** only |
| 2 | 6 | Explain what a p-value does and | Explain | no | bold **Explain** only |
| 2 | 7 | Evaluate a research claim, including an | Evaluate | no | bold **Evaluate** only |
| 3 | 1 | Describe the structure of a neuron | Describe | no | bold **Describe** only |
| 3 | 2 | Distinguish neurotransmitters from hormones by delivery | Distinguish | no | bold **Distinguish** only |
| 3 | 3 | Explain how excitation, inhibition, and neuromodulation | Explain | no | bold **Explain** only |
| 3 | 4 | Distinguish fast autonomic and slower endocrine | Distinguish | no | bold **Distinguish** only |
| 3 | 5 | Relate selected brain structures to the | Relate | no | bold **Relate** only |
| 3 | 6 | Evaluate the Phineas Gage and H.M. cases | Evaluate | no | bold **Evaluate** only |
| 3 | 7 | Generate a functional hypothesis for a | Generate | no | bold **Generate** only |
| 4 | 1 | Differentiate sensation from perception and explain | Differentiate | no | bold **Differentiate** only |
| 4 | 2 | Define absolute threshold and difference threshold | Define | no | bold **Define** only |
| 4 | 3 | Describe the basic anatomy of the | Describe | no | bold **Describe** only |
| 4 | 4 | Explain why trichromatic theory and opponent-process | Explain | no | bold **Explain** only |
| 4 | 5 | Distinguish top-down from bottom-up processing and | Distinguish | no | bold **Distinguish** only |
| 4 | 6 | Explain the gate control theory of | Explain | no | bold **Explain** only |
| 4 | 7 | Apply the evolutionary perspective to explain | Apply | no | bold **Apply** only |
| 5 | 1 | Use blindsight to distinguish information processing | Use | no | bold **Use** only |
| 5 | 2 | Explain what the sea-squirt comparison does | Explain | no | bold **Explain** only |
| 5 | 3 | Distinguish conscious state, perceptual content, access | Distinguish | no | bold **Distinguish** only |
| 5 | 4 | Explain how selective attention and automaticity | Explain | no | bold **Explain** only |
| 5 | 5 | Apply predictive processing as a framework | Apply | no | bold **Apply** only |
| 5 | 6 | Evaluate how alcohol, reward-prediction-error paradigms, psychedelics | Evaluate | no | bold **Evaluate** only |
| 5 | 7 | Explain Chalmers' hard-problem framing and distinguish | Explain | no | bold **Explain** only |
| 6 | 1 | Describe the role of the suprachiasmatic | Describe | no | bold **Describe** only |
| 6 | 2 | Distinguish the two processes in the | Distinguish | no | bold **Distinguish** only |
| 6 | 3 | Describe the architecture of a typical | Describe | no | bold **Describe** only |
| 6 | 4 | Compare activation-synthesis theory and threat-simulation theory | Compare | no | bold **Compare** only |
| 6 | 5 | Distinguish NREM arousal parasomnias from REM | Distinguish | no | bold **Distinguish** only |
| 6 | 6 | Evaluate the evidence linking sleep deprivation | Evaluate | no | bold **Evaluate** only |
| 7 | 1 | Distinguish classical conditioning from operant conditioning | Distinguish | no | bold **Distinguish** only |
| 7 | 2 | Diagram a classical-conditioning scenario using UCS | Diagram | no | bold **Diagram** only |
| 7 | 3 | Differentiate positive reinforcement, negative reinforcement, positive | Differentiate | no | bold **Differentiate** only |
| 7 | 4 | Explain how shaping and schedules of | Explain | no | bold **Explain** only |
| 7 | 5 | Describe the selective cue–consequence pattern | Describe | no | bold **Describe** only |
| 7 | 6 | Use Bandura's and Tolman's findings to | Use | no | bold **Use** only |
| 7 | 7 | Interpret cue, reward, and omission responses | Interpret | no | bold **Interpret** only |
| 8 | 1 | Distinguish encoding, storage, and retrieval as | Distinguish | no | bold **Distinguish** only |
| 8 | 2 | Describe the three-stage model of memory | Describe | no | bold **Describe** only |
| 8 | 3 | Differentiate explicit from implicit memory and | Differentiate | no | bold **Differentiate** only |
| 8 | 4 | Explain proactive and retroactive interference, decay | Explain | no | bold **Explain** only |
| 8 | 5 | Evaluate why memory is reconstructive rather | Evaluate | no | bold **Evaluate** only |
| 8 | 6 | Apply evidence-based encoding and retrieval strategies | Apply | no | bold **Apply** only |
| 9 | 1 | Distinguish concepts, prototypes, and exemplars, and | Distinguish | no | bold **Distinguish** only |
| 9 | 2 | Contrast algorithms and heuristics and explain | Contrast | no | bold **Contrast** only |
| 9 | 3 | Use the System 1/System 2 framework | Use | no | bold **Use** only |
| 9 | 4 | Describe the structure of language and | Describe | no | bold **Describe** only |
| 9 | 5 | Distinguish linguistic determinism from weaker forms | Distinguish | no | bold **Distinguish** only |
| 9 | 6 | Compare g, fluid and crystallized intelligence | Compare | no | bold **Compare** only |
| 10 | 1 | Distinguish cross-sectional from longitudinal research and | Distinguish | yes | no change |
| 10 | 2 | Explain how timing, dose, biology, and | Explain | yes | no change |
| 10 | 3 | Compare Piaget's active-construction account with Vygotsky's | Compare | yes | no change |
| 10 | 4 | Interpret attachment classifications as probabilistic relationship | Interpret | yes | no change |
| 10 | 5 | Apply differential susceptibility and parenting-style research | Apply | yes | no change |
| 10 | 6 | Distinguish moral motivation from moral reasoning | Distinguish | yes | no change |
| 10 | 7 | Explain adolescence and aging as uneven | Explain | yes | no change |
| 11 | 1 | Explain the fundamental attribution error and | Explain | no | bold **Explain** only |
| 11 | 2 | Explain cognitive dissonance and distinguish central-route | Explain | no | bold **Explain** only |
| 11 | 3 | Distinguish conformity from obedience and identify | Distinguish | no | bold **Distinguish** only |
| 11 | 4 | Distinguish group polarization, groupthink, stereotypes, prejudice | Distinguish | no | bold **Distinguish** only |
| 11 | 5 | Use the bystander decision model and | Use | no | bold **Use** only |
| 11 | 6 | Describe the Big Five as dimensions | Describe | no | bold **Describe** only |
| 11 | 7 | Explain how aggregation and situation strength | Explain | no | bold **Explain** only |
| 12 | 1 | Explain how homeostasis and allostasis provide | Explain | no | bold **Explain** only |
| 12 | 2 | Distinguish core affect from a specific | Distinguish | no | bold **Distinguish** only |
| 12 | 3 | Compare major emotion theories and explain | Compare | no | bold **Compare** only |
| 12 | 4 | Describe emotional granularity and affect labeling | Describe | no | bold **Describe** only |
| 12 | 5 | Distinguish rapid SAM activation from slower | Distinguish | no | bold **Distinguish** only |
| 12 | 6 | Select and sequence coping strategies based | Select | no | bold **Select** only |
| 13 | 1 | Explain what diagnosis does and does | Explain | no | bold **Explain** only |
| 13 | 2 | Apply diathesis-stress and biopsychosocial reasoning without | Apply | no | bold **Apply** only |
| 13 | 3 | Distinguish representative anxiety, mood, psychotic, substance-use | Distinguish | no | bold **Distinguish** only |
| 13 | 4 | Explain how avoidance, compulsions, and behavioral | Explain | no | bold **Explain** only |
| 13 | 5 | Evaluate psychological, medication, and somatic treatments | Evaluate | no | bold **Evaluate** only |

Likely breadth/overload candidates (severity medium, confidence likely, repair editorial, not part of the mechanical bold pass): Ch3 objective 6 combines Gage, H.M., and split-brain evidence; Ch4 objective 5 spans top-down/bottom-up processing, predictive coding, Gestalt organization, and perceptual constancy; Ch6 objective 3 combines sleep architecture, multiple function accounts, memory consolidation, and cross-species variation; Ch9 objective 6 combines *g*, Gf/Gc, Gardner, Sternberg, standardization, reliability, validity, and the Flynn Effect. Author review should decide whether to split them; wording should not be rewritten merely to satisfy formatting.

Pipeline check: `pipeline/build_chapter_html.mjs` uses `marked`, which preserves inline `**verb**` as `<strong>` inside ordered-list items. `pipeline/build_ch13_html.py` uses MarkdownIt and likewise preserves inline emphasis. Browser inspection confirmed all seven Chapter 10 objective verbs render as `<strong>` and that no other page currently supplies a bold opening verb. Proposed repair category: mechanical.

## 5. Section-navigation and anchor table

Word counts are coarse triage counts including section callouts/captions; they are not a defect by themselves. Existing subsection labels were checked against their section content and are descriptive; no stale or misleading label was confirmed. “Useful” means two or more genuine subsections and a matching box. All navigation hrefs and all other internal hash links resolved exactly once.

| Page | Section | Words | H3 | Links | Verdict |
|---|---|---:|---:|---:|---|
| Prologue | 1 Attention Is the Gateway | 360 | 0 | 0 | absent; acceptable variation |
| Prologue | 2 Encoding — Depth Matters | 695 | 0 | 0 | absent; editorial chunking review |
| Prologue | 3 Retrieval Is Learning | 431 | 0 | 0 | absent; acceptable variation |
| Prologue | 4 Spacing Beats Cramming | 430 | 0 | 0 | absent; acceptable variation |
| Prologue | 5 Sleep Is Part of Studying | 315 | 0 | 0 | absent; acceptable variation |
| Prologue | 6 Study Habits Are Learned Behaviors | 419 | 0 | 0 | absent; acceptable variation |
| Prologue | 7 Knowing What You Don't Know | 496 | 0 | 0 | absent; acceptable variation |
| Prologue | 8 Working With AI | 735 | 0 | 0 | absent; editorial chunking review |
| 1 | 1 What Is Psychology (And What Isn't It)? | 566 | 3 | 3 | useful |
| 1 | 2 A Short History, Organized by Problems | 1,347 | 4 | 4 | useful |
| 1 | 3 Modern Perspectives — Seven Lenses, No Single Truth | 715 | 4 | 4 | useful |
| 1 | 4 Why Science? (And Why It's Harder Than It Looks) | 615 | 3 | 3 | useful |
| 2 | 1 Asking Questions Without Touching the System | 986 | 1 | 1 | redundant one-link box; also review chunking |
| 2 | 2 The Trap of “Together Means Together” | 842 | 0 | 0 | absent; editorial chunking likely useful |
| 2 | 3 Experiments and Causal Claims | 928 | 0 | 0 | absent; editorial chunking likely useful |
| 2 | 4 Bias Controls and Research Ethics | 947 | 1 | 1 | redundant one-link box; also review chunking |
| 2 | 5 Knowing What to Believe — Statistics, Significance, and Replication | 757 | 1 | 1 | redundant one-link box; also review chunking |
| 3 | 1 How Neurons Talk — Structure and the Action Potential | 947 | 1 | 1 | redundant one-link box; also review chunking |
| 3 | 2 From Synapses to Circuits | 1,295 | 3 | 3 | useful |
| 3 | 3 Hormones and Whole-Body Signaling | 352 | 0 | 0 | absent; acceptable variation |
| 3 | 4 The Body’s Stress Response — Fast and Slow Coordination | 504 | 0 | 0 | absent; review for chunking |
| 3 | 5 The Brain — Specialization Without Lego-Brain Thinking | 1,118 | 3 | 3 | useful |
| 4 | 1 The Basics — Detecting a Changing World | 1,262 | 0 | 0 | absent; editorial chunking likely useful |
| 4 | 2 Vision — From Photons to Faces | 1,657 | 0 | 0 | absent; editorial chunking likely useful |
| 4 | 3 Perception as Prediction — How the Brain Builds an Experience | 2,831 | 1 | 0 | one-link box correctly absent; resegmentation high priority |
| 4 | 4 Hearing and the Body Senses | 1,536 | 2 | 0 | missing useful box |
| 5 | 1 The Architecture of Awareness | 1,205 | 2 | 0 | missing useful box |
| 5 | 2 Sleep — Architecture, Function, and Dreams | 2,385 | 2 | 0 | missing useful box |
| 5 | 3 Psychoactive Drugs and the Chemistry of Altered Consciousness | 871 | 0 | 0 | absent; editorial chunking likely useful |
| 5 | 4 Sleep Deprivation and Its Consequences | 519 | 0 | 0 | absent; review for chunking |
| 6 | 1 Circadian Rhythms and Sleep Pressure | 839 | 0 | 0 | absent; editorial chunking likely useful |
| 6 | 2 Sleep — Architecture, Function, and Dreams | 2,972 | 3 | 0 | missing useful box |
| 6 | 3 Sleep Deprivation and Its Consequences | 497 | 0 | 0 | absent; acceptable variation |
| 7 | 1 Classical Conditioning — Learning What Predicts What | 1,721 | 0 | 0 | absent; editorial chunking high priority |
| 7 | 2 Operant Conditioning — Learning from Consequences | 1,397 | 0 | 0 | absent; editorial chunking high priority |
| 7 | 3 Biological Constraints and Learning Beyond Conditioning | 1,534 | 0 | 0 | absent; editorial chunking high priority |
| 7 | 4 Dopamine, Reward, and Why Learning Feels the Way It Feels | 1,261 | 0 | 0 | absent; editorial chunking high priority |
| 8 | 1 Encoding — Building the Trace | 2,326 | 0 | 0 | absent; editorial chunking high priority |
| 8 | 2 Storage — From Synapse to System | 1,561 | 0 | 0 | absent; editorial chunking high priority |
| 8 | 3 Retrieval and Forgetting | 1,308 | 0 | 0 | absent; editorial chunking high priority |
| 8 | 4 When Memory Goes Wrong — Reconstructive Memory Errors | 1,483 | 0 | 0 | absent; editorial chunking high priority |
| 9 | 1 Concepts, Categories, and Problem Solving | 1,011 | 3 | 3 | useful |
| 9 | 2 Heuristics, Biases, and the Two-Mode View | 1,362 | 8 | 8 | useful, though eight links are dense |
| 9 | 3 Language — From Private Meaning to Shared Symbols | 1,060 | 3 | 3 | useful |
| 9 | 4 Intelligence — Measuring Cognitive Performance | 1,044 | 6 | 6 | useful, though six links are dense |
| 10 | 1 Development as Construction | 1,199 | 5 | 5 | useful |
| 10 | 2 Cognitive Development—The Baby Scientist and the Social Learner | 768 | 2 | 2 | useful |
| 10 | 3 Relationships, Temperament, and Moral Development | 989 | 4 | 4 | useful |
| 10 | 4 Adolescence and Adulthood—Reorganization, Not Completion | 814 | 3 | 3 | useful |
| 11 | 1 Social Cognition—How We Explain Other People | 756 | 5 | 5 | useful |
| 11 | 2 Social Influence—Peers, Authority, and Situation | 950 | 5 | 5 | useful |
| 11 | 3 Groups and Intergroup Relations | 628 | 5 | 5 | useful |
| 11 | 4 Helping and Harming | 742 | 3 | 3 | useful |
| 11 | 5 Personality—The Person Returns | 788 | 5 | 5 | useful |
| 12 | 1 The Regulated Body — Homeostasis, Allostasis, and Core Affect | 634 | 3 | 3 | useful |
| 12 | 2 How Does a Feeling Become an Emotion? | 815 | 3 | 3 | useful |
| 12 | 3 Stress — Mobilization, Duration, and Cumulative Cost | 1,125 | 4 | 4 | useful |
| 12 | 4 Coping Is a Problem of Fit | 603 | 4 | 4 | useful |
| 13 | 1 Diagnosis Is Classification Under Uncertainty | 858 | 4 | 4 | useful |
| 13 | 2 Representative Disorders and Selected Maintenance Processes | 1,129 | 4 | 4 | useful |
| 13 | 3 Personality and Neurodevelopmental Conditions | 433 | 2 | 2 | useful |
| 13 | 4 Treatment Is a Matching Problem | 946 | 3 | 3 | useful |

Totals: 27 useful boxes; four redundant one-link boxes; four missing useful boxes; 27 sections with no box (26 have zero genuine subsections and one has one subsection). The Chapter 2 report is therefore: §1 and §4 are generator-produced one-link boxes and are redundant under the proposed rule; §2 has no links because it has no `<h3>` headings and is long enough to merit editorial subsection design; §3 has the same structural gap; §5 also has a redundant one-link box. The generator's `addSectionNav()` emits a box whenever it finds **one or more** `<h3>` elements, so the one-link behavior is mechanical, not a broken anchor.

Recommended book-wide rule: render no box for zero subsections; render no box for one subsection; render a box for two or more genuine descriptive subsections. Never invent a heading solely to create a link. Mechanical removal/addition should follow source structure; long zero/one-subsection sections require an editorial chunking pass first.

## 6. Book-wide figure static findings

| Severity | Confidence | Check | Result | Repair category |
|---|---|---|---|---|
| — | confirmed | missing active image files | 0 of 102 | no action |
| — | confirmed | empty alt text / leading-dash alt artifacts | 0 / 0 | no action |
| — | confirmed | caption-number mismatches / duplicate figure numbers | 0 / 0 | no action |
| — | confirmed | expandable figure with invalid fallback | 0 | no action |
| — | confirmed | `.no-expand` figure with misleading expansion control | 0 | no action |
| — | confirmed | known archive/candidate/non-book path wired | 0 | no action |
| — | confirmed | active SVG visible figure numbers / text coordinates outside viewBox | 0 / 0 across 19 SVGs | no action |
| low | confirmed | filename-number mismatch candidates | Ch1 `fig_1_3_language_explanations.png` displays 1.2; Ch3 `fig3_1...` displays 3.2 and `fig3_2...` displays 3.3. Current manifests explicitly document all three as legacy filenames. | no action |
| medium | confirmed | low-resolution raster candidates | Ch3 Figure 3.2 is 770×391 and Figure 3.3 is 487×352; both are intentionally `.no-expand`. Three smaller Ch1 portraits are appropriate for their strip role. | Figure 3.2: full visual redesign candidate; Figure 3.3: no action in this audit |
| medium | confirmed | SVG text overflow | Figure 2.6 footer single line is at x=960, y=884, 29px inside rect x=280, y=835, 1360×100 and visibly crosses both sides. | SVG repair |

Several heuristic SVG width estimates also nominated multi-line or centered labels in Chapters 8, 9, and 13. Rendered-page inspection did not confirm a boundary crossing for those candidates; they are not defects. No claim was made solely from filename or metadata. The stale Prologue P.5 entry in `source/visuals-inventory.md` describes an unwired Human–AI alignment candidate, while the active rendered Figure P.5 is `fig_interactive_imagery_book_ocean.png`; this is inventory drift, not an accidentally wired non-book asset. Inventory editing was prohibited in this audit.

## 7. Named figure inspections

### Chapter 1, Figure 1.2

- Severity: low. Confidence: likely / needs human inspection. Repair category: full visual redesign.
- Source/rendered: `source/chapters/ch01-history-approaches.md`, Figure 1.2; `docs/chapters/01-history-approaches.html`.
- File: `docs/images/ch01/fig_1_3_language_explanations.png`, 1920×1080. No SVG, layered, or other editable image source exists in the repository; only the PNG and metadata manifest exist.
- Finding: the figure is clear, readable, and internally consistent, but it is almost entirely black/gray line art while the shared style guide uses restrained color to carry systems and contrasts. This is stylistic inconsistency, not instructional inadequacy.
- Color could clarify rather than decorate if each mechanism account receives one restrained, color-blind-safe identity used consistently in its panel and arrows. It must not imply that the three accounts have equal empirical status or form a progression. No immediate repair is required; redesign belongs in the human-review lane.
- Render checks: collapsed 604×340 and expanded 1100×619 at 1440×900; collapsed 233×131 and expanded 291×164 at 390×844; no horizontal overflow.

### Chapter 2, Figure 2.2

- Severity: high. Confidence: confirmed. Repair category: controlled raster repair or full visual redesign.
- Source/rendered: `source/chapters/ch02-research-methods.md`, Figure 2.2; `docs/chapters/02-research-methods.html`.
- File: `docs/images/ch02/ch02_reliability_validity_accuracy_precision.png`, 1536×1024. No editable SVG/current layered source exists; superseded target SVGs are different assets.
- Finding: panel 4's red darts form a tight cluster at the lower left. That is precise but biased, while the heading and body say neither precise nor accurate / low reliability / scattered. The image contradicts itself and the alt text.
- Correct repair: disperse the fourth-panel darts across multiple lower-left/off-center locations. Relabeling it “precise but biased” would duplicate panel 2 and destroy the intended four-case comparison.
- Render checks: collapsed 510×340 and expanded 1100×733 at desktop; collapsed 268×179 and expanded 335×224 at 390×844; no page overflow, though phone text is necessarily small.

### Chapter 2, Figure 2.6

- Severity: medium. Confidence: confirmed. Repair category: SVG repair.
- Source/rendered: `source/chapters/ch02-research-methods.md`, Figure 2.6; `docs/chapters/02-research-methods.html`.
- File: `docs/images/ch02/fig_experiment_flowchart.svg`, intrinsic 1920×1080; editable SVG exists (and a PNG derivative exists).
- Finding: the footer sentence visually crosses/touches the rounded box at intrinsic size and every required chapter size. The defect is intrinsic SVG geometry, not CSS expansion.
- Deterministic repair: preserve the wording but replace the single `<text>` line with two centered `<tspan>` lines, breaking after “chance,”; increase the box from 100px to about 118–120px high and vertically center the two 29px lines with explicit line spacing. This is safer than relying on browser wrapping and avoids an editorial wording change.
- Measured states: desktop collapsed image 604×340; desktop expanded 1100×619; 390×844 collapsed 268×151 and expanded 335×189; 844×390 collapsed 604×340 and expanded 780×439. No page-level horizontal overflow occurred.

### Chapter 3, Figure 3.2

- Severity: medium as a future improvement, not a release-blocking defect. Confidence: confirmed. Repair category: full visual redesign candidate.
- Source/rendered: `source/chapters/ch03-neuroscience-biological-bases.md`, Figure 3.2; `docs/chapters/03-neuroscience.html`.
- File: `docs/images/ch03/fig3_1_neuron_anatomy_pressbooks.jpeg`, 770×391, CC BY 4.0. No editable vector source is present; an additional Pressbooks JPEG copy is stored in the unused-source folder.
- Finding: desktop labels are readable and anatomy is adequate. The image is acceptable but stylistically inconsistent with the book's original figures. At 390×844 it renders 335×170 with small labels and cannot expand. It also lacks a directional arrow; left-to-right anatomy plus the caption implies signal direction, but the image does not teach direction explicitly.
- An original replacement would materially improve phone readability, style consistency, and signal-direction teaching. The current figure is not instructionally inadequate enough to block publication solely because it is externally sourced.

### Chapter 3, Figure 3.5

- Severity: medium. Confidence: likely / needs human inspection. Repair category: full visual redesign or targeted visual cue.
- Source/rendered: `source/chapters/ch03-neuroscience-biological-bases.md`, Figure 3.5; `docs/chapters/03-neuroscience.html`.
- File: `docs/images/ch03/ch03_chemical_messengers_wired_focal_vs_broadcast.png`, 1536×1024. No editable SVG/layered source exists.
- Finding: the neurotransmitter panel moves from a small complete neuron/axon into a much larger terminal without an inset boundary, magnifying glass, or scale-change label. The continuous axon and “axon terminal” label reduce ambiguity, but a first-year student could still read the giant terminal as malformed or at the same scale.
- Recommendation: add a clear magnification inset boundary and connector from the small axon end to the enlarged synapse. A connector/inset is more informative than decorative magnification iconography. Human review should decide whether the current continuity is already sufficient.

### Chapter 3, Figure 3.6

- Severity: blocking. Confidence: confirmed. Repair category: full visual redesign / scientific repair.
- Source/rendered: `source/chapters/ch03-neuroscience-biological-bases.md`, Figure 3.6; `docs/chapters/03-neuroscience.html`; metadata spec `docs/images/ch03/ch03_synaptic_transmission_release_receptors_clearance.md`.
- File: `docs/images/ch03/ch03_synaptic_transmission_release_receptors_clearance.png`, 1536×1024. No editable SVG/layered source exists; the Markdown figure specification is editable but not an image source.
- Finding: in the right-panel reuptake route, a black arrow reaches the transporter from inside the terminal and a second arrow leaves the transporter toward a molecule in the cleft. The visible arrowheads therefore describe outward transport/release, not molecules moving from cleft through transporter into the presynaptic terminal.
- Caption and alt text correctly describe inward reuptake, so image, caption, and alt are scientifically inconsistent. Repair the arrows to run from cleft molecule → cleft-facing transporter → terminal interior. Preserve the separate enzymatic-degradation route in the cleft. This must pass human biological-accuracy review before release.

## 8. Chapter 3 split-brain scope map

Current state: only the active split-brain **figure** was removed. The prose component remains, and split-brain is still a formal learning target.

Active locations in `source/chapters/ch03-neuroscience-biological-bases.md`:

- Learning objective 6, line 43.
- Do Not Confuse heading and prose, lines 250–256.
- Chapter Summary sentence, line 278.
- Connections row, line 295.
- Review Question 10 and rationale, lines 400–407.
- Key Term, line 475.
- References: Nielsen et al. (2013), line 540; Sperry (1968), line 554.
- Further Reading: no occurrence.
- Active figures: none. `docs/images/ch03/README_captions_alt_text_attribution.md` line 148 lists `fig_split_brain_logic.png/svg` as retired/unwired in `docs/images/ch03/3 images not used/`.

### Option 1 — retain the current compact myth-correction component in Chapter 3

- Exact source changes: none.
- Tradeoff: keeps a useful example of lesion/surgical evidence, hemispheric specialization, and myth correction beside Gage and H.M. It also consumes one objective, one review item, one key term, summary space, and a connection row for a short component.
- Recommendation: defensible if Jon wants split-brain assessed in Chapter 3. No figure is necessary.

### Option 2 — retain prose but remove it as a formal objective/review/key-term target

- Change Ch3 objective 6 line 43 to remove the split-brain clause; remove/replace Review Q10 lines 400–407; remove Key Term line 475. Renumber later review questions if Q10 is removed rather than replaced.
- Retain the myth-correction prose at lines 250–256. The summary line 278 and Connections row 295 may remain as reinforcement, though removing them would further reduce prominence.
- Tradeoff: preserves a high-value misconception correction without asking students to treat a compact passage as a core assessed outcome. It reduces retrieval/assessment reinforcement and makes the summary/connection emphasis somewhat stronger than the objective map.
- Recommendation: best fit if the author wants Chapter 3 to prioritize neuron, signaling, stress, and network reasoning while still correcting the personality myth.

### Option 3 — move the material primarily to Chapter 9

- Remove or sharply shorten all Ch3 locations listed above; remove Nielsen/Sperry references only if no Ch3 claim remains. Add the component to `source/chapters/09-thinking-language-intelligence.md` under Section 3 “Language — From Private Meaning to Shared Symbols” (line 199), most naturally between the opening language/thought distinction (lines 201–203) and “The Structure of Language” (line 205), or as a new descriptive subsection.
- If it becomes a formal Ch9 target, revise objective 4 (line 38), Language summary (line 340), Key Terms (lines 348–369), one review item in lines 373–413, Connections lines 417–428, and References lines 432–496. Add Nielsen/Sperry references there. Further Reading need not change unless the author wants an accessible lateralization source.
- Tradeoff: puts hemispheric specialization near language, thought, and myth-resistant interpretation. It increases an already dense Chapter 9 language section and risks implying split-brain research is mainly a language topic rather than also a neuroscience-method case.
- Recommendation: only if Chapter 9 is intended to own language lateralization. Otherwise Option 2 gives the cleaner scope boundary.

Repair category for all three options: author decision. This audit does not choose on the author's behalf.

## 9. Recommended implementation lanes

1. `fix/bookwide-formatting-navigation` — mechanically bold 85 opening verbs; remove the four one-link boxes; add boxes to Ch4 §4, Ch5 §§1–2, and Ch6 §2 after confirming source headings; keep editorial resegmentation separate within this lane or a follow-up branch.
2. `edit/review-answer-balancing` — balance Chapters 2–8 and 13 with rationale-aware option moves; do not touch open-response Chapters 9–12 or acceptable Chapter 1 without another reason.
3. `fix/ch02-deterministic-svg-repairs` — wrap/resize Figure 2.6 footer. Figure 2.2 is a PNG, so its dart correction should use a separate `fix/ch02-accuracy-precision-panel` branch rather than being mislabeled an SVG repair.
4. `fix/ch03-scientific-figures` — block on Figure 3.6 arrow direction; separately evaluate the Figure 3.5 magnification cue and Figure 3.2 replacement.
5. `design/ch01-language-figure` — human-reviewed color redesign of Figure 1.2 only if functional color is approved.
6. `edit/ch03-split-brain-scope` — implement only the author-selected Option 1, 2, or 3.

Do not combine these repairs in the audit branch. Chapters 6 and 7 remain paused image lanes; the navigation and answer findings do not authorize reopening their paused image work.

## 10. Exact proposed validation checks for each lane

### Mechanical/book-wide formatting and navigation

- Re-run `pipeline/bookwide_textbook_qc_audit.cjs` and require 92 objectives, 92 measurable opening verbs, and 92 bold opening verbs unless the author explicitly exempts one.
- Regenerate only through checked-in generators/workflows; compare source and rendered objective text byte-for-byte except `<strong>` markup.
- Require zero one-link `.in-section-nav` boxes; zero boxes for zero subsections; exactly one box with exactly N links for every numbered section with N≥2 genuine `<h3>` headings.
- Require every nav href and every internal hash href to resolve exactly once; require zero duplicate IDs and zero console errors at 1440×900 and 390×844.
- Editorial chunking validation: headings must summarize real following content, not split approved paragraphs or create empty/artificial sections.

### Review-question answer balancing

- Re-run answer counts, percentages, longest runs, unused letters, and >45% flags for Chapters 1–13.
- For every moved option, compare old/new option text and verify grammar, parallelism, pronoun/reference dependencies, “why X is tempting” text, answer letters, and rationale accuracy.
- Render every changed question and inspect ordered-list letters and `<details>` answers. A balanced distribution is a diagnostic, not a hard equality target.

### Chapter 2 deterministic SVG repairs

- Parse Figure 2.6 viewBox and require all text coordinates/bounds inside it.
- Confirm both wrapped footer lines lie inside the rounded rectangle with visible top, bottom, left, and right clearance.
- Inspect intrinsic 1920×1080, desktop collapsed/expanded, 390×844, and 844×390. Require no boundary touch and no page overflow.
- For the separate Figure 2.2 branch, require the fourth darts to be visibly dispersed, not clustered; keep all four panel meanings distinct; update alt/caption only if the visual meaning changes.

### Chapter 3 scientific figure repairs

- Figure 3.6: every reuptake arrow must proceed cleft → transporter → presynaptic interior; no arrow may imply outward secretion. Compare against caption, alt, and metadata accuracy notes.
- Figure 3.5: show the full-scale-to-enlarged-terminal relationship with an inset boundary/connector if revised; conduct first-year-student human review.
- Figure 3.2: if replaced, require readable labels at 390px, explicit signal direction, correct PNS/CNS myelin distinctions, source/license metadata, and a deliberate expand/no-expand decision.
- Render desktop and phone collapsed/expanded states and require zero overflow and zero console errors.

### Chapter 1 visual redesign

- Approve a figure spec before generation. Use color to encode the three accounts, not decorate them or imply a ranking.
- Preserve the core claim, caption meaning, alt-text relationship, no embedded figure number, 1920×1080-friendly layout, and phone legibility.
- Human review for conceptual neutrality and visual fit with the shared figure style.

### Chapter 3 split-brain editorial decision

- Search both Ch3 and Ch9 for every split-brain/hemispheric occurrence after the decision.
- Verify objective, prose, heading, summary, Connections, review, Key Terms, references, inventory, and active figures are mutually consistent.
- If moved, validate new Ch9 anchors and cross-chapter links; if de-assessed, ensure no orphaned review number or glossary entry remains.

## 11. Limitations and unresolved questions

- The in-app browser's Playwright surface successfully rendered all 14 pages at 1440×900 and the named figures at 390×844; Figure 2.6 was additionally checked at 844×390 and intrinsic size. It reported zero broken images, zero duplicate IDs, zero bad internal links, and zero console errors.
- The standalone `pipeline/figure_expansion_regression.cjs` could not run in the bundled shell runtime because `require('playwright')` failed with `Cannot find module 'playwright-core'`. This limitation does not erase the successful in-app browser validation, but the standalone regression should be rerun in the repository's normal Playwright environment before merging a future repair.
- SVG text overflow detection is conservative. Static coordinate/width heuristics produced several candidates; only Figure 2.6 was promoted because direct rendering confirmed the boundary crossing. Browser image documents did not expose usable SVG `getBBox()` calls, so the Figure 2.6 conclusion rests on declared SVG geometry plus direct intrinsic/chapter visual inspection.
- Whether to split the four broad learning objectives is editorial. Whether to redesign Ch1 Figure 1.2, replace Ch3 Figure 3.2, or add a magnification cue to Figure 3.5 requires human visual review.
- The Chapter 3 split-brain scope decision remains with the author. Option 2 is recommended for the cleanest assessment scope, but no option was selected or implemented.
- The Prologue P.5 inventory entry is stale relative to the active Figure P.5. This audit records the discrepancy but does not modify `source/visuals-inventory.md`.

Audit script command:

```powershell
& 'C:\Users\oxfor\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' pipeline\bookwide_textbook_qc_audit.cjs 'C:\GitHub\psych101-bookwide-qc'
```

Result: completed successfully; 14 pages, 13 chapters, 95 multiple-choice questions, 92 objectives, 62 numbered sections, 108 section-navigation links, 191 internal hash links, 102 active figures, and 19 active SVGs inspected.
