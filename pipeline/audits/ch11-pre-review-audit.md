# Chapter 11 Pre-Review Audit — Social Psychology

**Audit date:** 2026-07-14  
**Audit rubric:** `pipeline/audits/chapter-pre-review-audit-prompt-v3.md`  
**Status:** Diagnostic only. No chapter, HTML, figure, lab, metadata, or project-state files were changed during the audit.

## A. Executive judgment

Chapter 11 has a strong, teachable argument: people systematically overestimate character and autonomy while underestimating situations, norms, groups, and person × situation interactions. The Milgram opener, experimental examples, Stanford Prison correction, bystander model, and climate-versus-weather personality analogy make that story memorable in the instructor's voice. It is conceptually sound overall, but it is not ready for line editing: the Milgram interpretation needs updating, the AI section conflates several constructs, and three figures have evidence-integrity problems. The personality merger also leaves the chapter over target and unevenly assessed: the body is approximately 6,294 words, with 8 objectives and 37 key terms. Scientific qualification is generally proportionate rather than excessive. A focused conceptual and visual repair pass should precede line editing.

Repository authority is clear: `source/chapters/ch11-social-psychology.md` is the prose source of truth, and `docs/chapters/11-social-psychology.html` is generated output. The HTML passes the repository linter with zero Chapter 11 failures or warnings, contains all seven images, and has no ` ? ` separator or replacement-character mojibake. Source and HTML appear semantically current. Live responsive rendering could not be certified because the in-app browser could not reach the workspace's local preview server.

## B. Semantic and narrative skeleton

### Core argument

Social behavior cannot be predicted from character alone. People interpret others through biased attributions, alter beliefs and actions under social pressure, organize behavior through group identities and norms, and express personality differently across situations. Personality is real, but as a statistical pattern interacting with context—not as a fixed script for each act.

### Two-week takeaways

1. People overattribute others' behavior to disposition and underweight situations.
2. Dissonance can change beliefs to make behavior feel coherent.
3. Conformity and harmful compliance depend on identifiable social structures, not simply “bad people.”
4. Unanimity, authority relationships, group norms, and responsibility diffusion alter behavior.
5. Stereotypes, prejudice, and discrimination are belief, feeling, and behavior—not synonyms.
6. Helping and aggression are multiply determined at evolutionary, psychological, learned, and situational levels.
7. Traits predict patterns across time better than isolated acts, especially in weak situations.
8. Fluent AI output can exploit peripheral processing, but AI analogies must not be mistaken for identical social mechanisms.

### Narrative progression

“I would never do that” opens the person-versus-situation problem. Sections 1–2 establish attribution and social influence; Section 3 extends the analysis to groups; Section 4 applies it to helping and harm; Section 5 returns to the person side and resolves the apparent conflict through interactionism. That circular return is the chapter's strongest organizational move. The story becomes catalog-like in Sections 3–4 and is interrupted by the long AI passage, but it reappears clearly in the personality ending.

### Reconstruction and story visibility

Students could reconstruct the argument from headings, figures, retrieval prompts, summary, and most review questions. Objectives and glossary are less helpful because their breadth makes the chapter look like a topic inventory. The chapter needs pruning and realignment, not a new organizing metaphor.

## C. Must-Preserve Ledger

| Asset | Instructional role | What makes it effective | Accuracy status | What must survive |
|---|---|---|---|---|
| “I would never do that” Milgram opener | Narrative hook | Activates confident self-prediction and sets up the person–situation gap | Study result sound; mechanism needs revision | The prediction gap and incremental situation |
| FAE/self-serving-bias distinction | Worked application | Concrete and immediately discriminable | Sound | The directional contrast and dry final sentence |
| “The $1 group. Not the $20 group.” | Evidence | Excellent pacing and a memorable counterintuitive result | Broadly sound | The study and punchy landing |
| Asch unanimity and one ally | Evidence | Shows a manipulable social mechanism rather than vague “peer pressure” | Sound | Unanimity as the decisive variable |
| Stanford Prison critique | Evidence-calibration example | Preserves the situationist insight without laundering weak evidence | Strongly calibrated | “Flawed illustration, not clean evidence” |
| Genovese correction plus five-step model | Hook plus mechanism | Corrects a famous myth and replaces it with better evidence | Sound | The myth correction and intervention chain |
| Three-level altruism table | Comparative framework | Separates evolutionary function from momentary motivation | Broadly sound | The levels-of-explanation distinction |
| Climate-versus-weather trait analogy | Mnemonic analogy | Makes aggregation and limited prediction intuitive | Sound | The analogy and interactionist payoff |
| Figures 11.5–11.7 teaching sequence | Visual explanation | Moves from joint influence to aggregation to situation strength | Concept sound; quantitative presentation needs repair | The three-step visual logic |
| ELM–AI fluency connection | Application | Gives students a practical reason to evaluate argument quality | Broadly sound | This strongest AI connection, with narrower claims |

## D. Construct map and load-bearing claims

### Construct map

| Construct | Type and framework | Nearest confusion | Stability |
|---|---|---|---|
| Attribution and FAE | Construct; attribution theory | Any dispositional explanation being an “error” | Stable and well distinguished |
| Cognitive dissonance | Motivational mechanism | Reward learning or conscious hypocrisy | Stable |
| ELM | Dual-route persuasion framework | Central/peripheral as message types rather than processing routes | Stable |
| Conformity and obedience | Social-influence constructs | Peer agreement versus authority relationship | Definitions clear; Milgram mechanism overstated |
| Group polarization and groupthink | Group-process frameworks | Extremity shift versus premature consensus | Well distinguished |
| Social identity | Intergroup theory | In-group favoritism automatically requiring prejudice or low self-esteem | Self-esteem mechanism overstated |
| Helping and aggression | Multilevel outcomes | One theory supplying a complete explanation | Strong multilevel treatment |
| Trait × situation interaction | Interactionist framework | Traits as types or deterministic causes | Stable; exact visual numbers unsupported |

### Load-bearing claims and inference ladders

1. **Situational forces are systematically underweighted.** Direct evidence is strong; the broader situationist inference is strongly supported.
2. **Social pressure operates through distinguishable mechanisms.** Asch's unanimity result is directly demonstrated; Milgram's exact psychological mechanism remains contested.
3. **Group membership and group norms reorganize judgment and behavior.** Strongly supported, but positive self-esteem is not a sufficient universal mechanism.
4. **Helping and aggression are multiply determined.** Broadly supported; particular mechanisms vary in evidentiary strength.
5. **Traits predict aggregate patterns better than single acts and interact with situation strength.** Strongly supported conceptually; the chapter's exact synthetic values are illustrative, not evidence.

## E. Root-cause repair table

| Severity | Root cause and affected surfaces | Evidence | What must be preserved and risk of overcorrection | Minimum effective repair | Action route | Confidence |
|---|---|---|---|---|---|---|
| **High** | Milgram is framed as obedience to explicit orders and as showing that a situation made “good people” act badly | Source lines 133–141; summary; glossary; Q4 | Preserve the opener, 65% result, escalation, proximity, distress, and person–situation lesson. Do not replace Milgram with a generic ethics paragraph. | State that harmful continuation was produced by the structured authority relationship, but the precise mechanism is contested. Appeals to science/identification may have mattered more than direct orders; the order-like prod was least effective in experimental follow-up work. Remove “good people,” which the experiment did not establish. Put the boundary once in the walkthrough and adjust downstream surfaces. | Authoritative source revision, then HTML regeneration | High |
| **High** | AI section turns analogies into construct identity | Source lines 314–324; summary; Q2 | Preserve the ELM/fluency application and the restrained final rhythm. Do not eliminate useful AI literacy. | Stop calling anthropomorphism “FAE”; do not describe one AI answer as conformity to a consensus; present responsibility diffusion as a human organizational analogy, not the bystander model itself. Delete the claim that every listed mechanism presupposes a mental-state-bearing source. Update the 2023-only ToM evidence. | Authoritative source revision, then HTML regeneration | High |
| **High** | Figures communicate inaccurate or undisclosed evidence | Figure 11.2; Figures 11.6–11.7 and their captions | Preserve the visual jobs: incorrect consensus, aggregation, and strong-situation compression. Do not replace them with decorative art. | In 11.2, make the unanimous answer visibly wrong—the displayed standard currently appears to match C, while every confederate says C. For 11.6–11.7, either replace invented numbers with sourced data or label them prominently as illustrative synthetic examples and remove unsupported empirical precision. | Figure revision, source captions, metadata, and regeneration | High |
| **High** | The merged chapter exceeds its cognitive budget and assessment does not represent that breadth | 6,294 body words; 8 objectives; 37 terms; 420-word summary; 7 readings; review gaps | Preserve the five-section arc and personality's interactionist resolution. The targets are guides, not automatic cut commands. | Consolidate Objectives 7–8; trim catalog material and the AI block before touching hooks or explanatory payoffs. Rebalance review toward dissonance, polarization, aggression, and personality evidence. Add one self-referential Think About It per section or explicitly waive that pattern. | Authoritative source revision | High |
| **Medium** | Several intergroup/aggression claims use older, stronger formulations | Social identity at line 202; stereotype threat at line 204; deindividuation at line 250 | Preserve minimal groups, stereotype-threat cross-link, and online-crowd application. Avoid literature-review prose. | Describe positive distinctiveness without making self-esteem the single causal motive; add one compact boundary that stereotype-threat performance effects are context-sensitive and often small in operational settings; replace classical “loss of self → aggression” with anonymity increasing conformity to salient group norms, which may be prosocial or antisocial. | Authoritative source revision | High |
| **Medium** | Source, HTML, metadata, and linking conventions are only partly synchronized | Five broken Markdown image paths; unlinked Connections; metadata only for 11.6–11.7; References precede Further Reading | Preserve the existing semantically aligned HTML. | Correct the five source paths during the source pass; add concept anchors and chapter links to Connections; document attribution, license, and public-sharing status for Figures 11.1–11.5; place Further Reading before References when regenerating. | Source and metadata revision, then regeneration | High |
| **Medium** | The lab bypasses its required explain-before-transfer gate | `feed-is-not-the-world.html` lines 190–198; lab JS lines 349–351 | Preserve prediction, adaptive feed, event log, before/after ratings, privacy, and instructor calibration. | Require and save a non-empty explanation before revealing and focusing the transfer panel. No new lab is needed. | Lab revision | High |

### Accuracy sources consulted

- Haslam, Reicher, and Birney (2014), “Nothing by Mere Authority”: https://doi.org/10.1111/josi.12072
- Rubin and Hewstone (1998), social identity theory's self-esteem hypothesis: https://doi.org/10.1207/s15327957pspr0201_3
- Shewach, Sackett, and Quint (2019), operational stereotype-threat meta-analysis: https://doi.org/10.1037/apl0000420
- Postmes and Spears (1998), deindividuation and antinormative behavior meta-analysis: https://research.rug.nl/en/publications/deindividuation-and-antinormative-behavior-a-meta-analysis
- Strachan et al. (2024), human and LLM theory-of-mind task performance: https://doi.org/10.1038/s41562-024-01882-z
- “Language models cannot reliably distinguish belief from knowledge and fact” (2025): https://doi.org/10.1038/s42256-025-01113-8

## F. Hedging and qualification audit

The chapter is not overhedged. Its strongest calibration choices should remain:

- The FAE cultural boundary follows, rather than buries, the main claim.
- The Stanford Prison passage states the situationist takeaway before locating the study's evidentiary limits.
- The contact-hypothesis paragraph correctly distinguishes facilitating conditions from strict prerequisites.
- The aggression section rejects single-cause biological storytelling.
- Rogers and Rorschach receive narrow, proportionate evidence boundaries.

Qualifications needing consolidation or relocation:

- Milgram's “not evil” lesson appears in the opener, walkthrough, summary, and Q4 while the competing mechanism is absent. Put the mechanistic boundary in the walkthrough; let the other surfaces retrieve the calibrated result.
- The AI passage ends with categorical claims about mental states despite saying the evidence is debated. State task-performance evidence first, then one interpretation boundary.
- Stereotype threat needs one body-level scope sentence; do not repeat it in Connections or the summary.
- Deindividuation needs conceptual replacement, not extra hedging.

## G. Alignment decisions

| Objective | Taught, practiced, and tested | Decision |
|---|---|---|
| 1. FAE/self-serving bias | Strong across prose, panel, Q1, and Q12 | Keep |
| 2. Dissonance/routes | Strong prose, figure, and retrieval; no review item | Revise one question to test it |
| 3. Asch/Milgram distinction | Strong prose, panel, Q3, and Q4 | Keep after Milgram calibration |
| 4. Situationist insight/SPE | Taught and retrieved; limited real-world application | Revise Q4 or add application within the existing 12-question cap |
| 5. Polarization/groupthink | Both taught; only groupthink tested | Replace or broaden one question |
| 6. Prejudice/stereotype/discrimination/SIT | Well represented by Q9 and Q10 | Keep after SIT calibration |
| 7. Bystander/altruism/aggression | Three separate tasks; aggression untested | Split or narrow objective; add aggression discrimination/application |
| 8. Four personality traditions/Big Five/person–situation | Too many performances in one objective; only types and interaction are tested | Divide or narrow; prioritize the interactionist resolution |

Additional alignment findings:

- The five Stop-and-Retrieve prompts are well placed, but Section 4 retrieves only bystander reasoning and leaves altruism/aggression unpracticed.
- No student-facing Think About It prompt exists.
- Q2 gives the AI application one-twelfth of the assessment while cognitive dissonance, group polarization, and aggression receive none.
- The open-response questions are often pedagogically stronger than forced multiple choice, but they do not follow the project's MCQ/distractor-rationale template. Jon should decide whether Chapter 11 is an explicit exception.
- The glossary is individually concise but collectively too large. Remove terms not taught as durable targets, especially “personality coefficient,” unless the body explicitly teaches it.
- Connections are meaningful but must be hyperlinked.

## H. Figures and lab-gap decision

| Figure | Status | Decision |
|---|---|---|
| 11.1 Dissonance | **Revise** | Change “no dissonance” to “low/little dissonance”; complete metadata |
| 11.2 Asch | **Revise urgently** | Make the majority answer visibly incorrect; complete metadata |
| 11.3 Milgram setup | **Use now after metadata** | Visual setup is clear and accurate |
| 11.4 Belief/feeling/behavior | **Use now after metadata** | Good one-idea distinction figure |
| 11.5 Person + situation | **Use now after metadata** | Strong narrative-spine figure |
| 11.6 Trait aggregation | **Revise** | Disclose synthetic status or use a sourced/data-free design |
| 11.7 Situation strength | **Revise** | Disclose synthetic status or remove invented quantitative bars |

**Lab-gap decision:** Revise and better integrate the existing lab; no new lab is justified. “The Feed Is Not the World” performs useful prediction, manipulation, and transfer work, but it practices algorithmic sampling/perceived consensus more directly than Asch conformity. Its chapter wrapper should name that distinction, and its explain-before-transfer gate must be repaired.

## I. Source/HTML, citation, and pipeline routing

- Prose and conceptual corrections belong in the Markdown source; regenerate HTML afterward.
- Do not patch the HTML independently.
- HTML currently has valid local image/lab links, seven non-empty alt texts, seven captions, collapsible review rationales, and no detected mojibake.
- Markdown paths for Figures 11.1–11.5 resolve to nonexistent `C:\GitHub\psych101\images\ch11`; Figures 11.6–11.7 use the correct `docs/images` route.
- Body citations appear to have corresponding reference entries. Several factual clusters lack direct support: aggression biology, deindividuation, Big Five heritability/outcomes, and temperament.
- References are not fully alphabetized.
- The global visual inventory agrees with actual Chapter 11 files, but chapter metadata is incomplete rather than more current.
- Shared documentation drift exists: `pipeline/chapter-spec.md` still labels Social Psychology as Chapter 9 in its AI touchpoint table.
- Responsive/mobile overflow remains unverified because local browser previewing was unavailable.

## J. Decisions requiring Jon's judgment

1. Keep the full six-part AI block, or retain only the strongest ELM/fluency and responsibility applications? The latter would improve construct precision and recover substantial space.
2. Within the fixed personality merger, should Freud/Rogers/assessment remain survey coverage, or should Section 5 focus more tightly on traits and person × situation—the material that resolves the chapter's main argument?
3. Are Chapter 11's open-response review questions an intentional exception to the MCQ/distractor-rationale requirement?
4. Should Figures 11.6–11.7 remain explicitly labeled synthetic teaching illustrations, or be replaced with empirical/data-free visuals?

## K. Revision constraints

### Must preserve

- The “I would never do that” person–situation opening.
- Festinger's $1/$20 sequence and its rhythm.
- Asch unanimity and ally manipulation.
- The Stanford Prison evidence correction.
- Genovese myth correction and bystander decision chain.
- Multilevel helping/aggression logic.
- Climate-versus-weather analogy.
- Personality as the interactionist resolution.
- The ELM–AI fluency application.
- The figures' underlying teaching jobs.

### Must correct

- Milgram as straightforward compliance with explicit orders.
- FAE equated with anthropomorphism.
- “Every social mechanism requires a mental-state-bearing source.”
- Social identity reduced to self-esteem maintenance.
- Classical deindividuation-as-aggression framing.
- Figure 11.2's visually correct “wrong” answer.
- Undisclosed synthetic values in Figures 11.6–11.7.
- Review/objective imbalance, broken source image paths, incomplete figure metadata, and the lab's transfer gate.

### Must not happen

- Do not flatten the chapter into generic “people are influenced by society” prose.
- Do not remove Milgram, Asch, the SPE critique, or the climate analogy.
- Do not turn every calibration issue into repeated caveats.
- Do not cut personality's interactionist payoff merely to meet a word target.
- Do not retain invented quantitative values with the visual authority of empirical data.
- Do not let AI become the chapter's dominant retrieval cue.

## Appendix: Low-impact mechanical findings

- Targets exceeded: 8 objectives, 420-word summary, 37 key terms, and 7 Further Reading items.
- References should be alphabetized.
- Further Reading should precede References under the current HTML specification.
- Connections contain six good rows but no required hyperlinks.
- Figure metadata records only Figures 11.6–11.7.
