# Active Learning Activity Library

> Reusable activity patterns for chapter lecture decks, selected by what the material is — not invented per chapter.
> Author: Jon Oxford Ph.D. | Drafted 2026-07-29 | Version 0.1
> **Status: PROPOSAL — not adopted.** Companion to `pipeline/deck-spec.md`. Open questions in §7.

---

## 1. Why this exists

### 1.1 The evidence argument specific to this book

Active learning's general case is settled. Freeman et al.'s (2014) meta-analysis of 225 studies found examination and concept-inventory performance up **0.47 SD** under active learning, with an odds ratio of **1.95** for failing under traditional lecturing. Effects held across STEM disciplines and all class sizes, largest in small classes.

But the finding that actually governs *this* book is narrower and sharper.

Every chapter opens with a **Misconception Opener** — state the common wrong belief, activate it, refute it, replace it. That is precisely the structure the conceptual-change literature calls a **refutation text**, and it is described as one of the most effective text-based means of modifying misconceptions.

The same literature reports two limits:

1. Refutation-text effects **may be short-lived when the text works alone**, without further instructional activity to consolidate what the reading set in motion — especially for robust misconceptions about complex material.
2. Refutation texts are **not very effective at getting students to construct correct explanations themselves.**

So the deck's activities are not decoration on top of good prose. They are the consolidation step the book's own design implies. And they need to be **generative** — produce an explanation, a prediction, a discriminating case — rather than recognition-only, because recognition is the thing the reading already covers.

That is the standard this library is built to.

### 1.2 What it is not

Not a menu to pick from by taste, and not a quota. `deck-spec.md` §7.5's rule applies here too: a mechanical one-activity-per-section produces filler.

---

## 2. How to select

Three gates, in order. An activity must pass all three.

1. **The room criterion** (`deck-spec.md` §1.1) — would this fail if a student just read it?
2. **A failure mode** (`deck-spec.md` §6.1) — can a student's own answer be wrong, and will they find out?
3. **A material trigger** (§3) — the chapter contains the structure this pattern needs.

Selection runs from the material outward. Never start from "we need an activity here."

---

## 3. Trigger table

The chapters are already marked up for this. Counts are live as of 2026-07-29.

| Chapter signal | Present | Candidate patterns |
|---|---|---|
| `## Misconception Opener` | all 14 | AL-01, AL-12 |
| `#### Do Not Confuse` | 13 across 6 chapters | AL-02, AL-03, AL-04 |
| `#### Classic Study` | 6 across 5 chapters | AL-01, AL-11 |
| `> **Stop and Retrieve:**` / `> **Think About It:**` | 82 across 13 chapters | already retrieval — upgrade to AL-02 when the room is quiet |
| `**Try it yourself:**` + lab link | 11 across 6 chapters | **the lab is the activity** — do not add a second |
| Table of competing accounts or perspectives | common | AL-05, AL-06 |
| Table of disorders, types, or mechanisms | common | AL-09, AL-04 |
| Prose flagging *contested · mixed · developing · more limited* | common | AL-06 |
| A counterintuitive statistic in prose | common | AL-08 |
| Any inference-from-behavior claim | common | AL-07 |
| Methods or causal-claim content | Ch2, and any study description | AL-10 |
| Module boundary | every section | AL-15 |
| Chapter close | all 14 | AL-12 |

**The distribution is uneven and that is fine.** Chapters 1, 5, 9, 12, and 13 carry no `#### Do Not Confuse` block; Chapters 1, 2, 5, and 9 carry no `#### Classic Study`. Those chapters draw on the always-present triggers instead. Do not add markup to a chapter to make an activity fire — that is the tail wagging the book.

---

## 4. The patterns

Fields are uniform so the generator can consume them. **Fail** = the failure mode required by `deck-spec.md` §6.1.

---

### AL-01 · Commit Then Reveal
**Trigger:** counterintuitive empirical result; `#### Classic Study` with a surprising outcome.
**Students do:** commit to a prediction — written, voted, or on a card — *before* the result exists. The reveal comes later, ideally across the mid-class break.
**Fail:** their prediction is wrong and they have a record of having made it.
**Time:** 3–5 min to commit, 2–3 to reveal.
**Evidence:** the pretesting / prequestioning effect. Attempting and failing to answer before instruction improves later retention relative to reading alone, and the benefit survives high error rates and delayed testing (Pan & Carpenter, 2023). The proposed mechanism is a prediction-error signal that sharpens processing of the correction.
**In the book:** Ch1 Milgram. Candidates: Ch4 illusions, Ch8 misinformation effect, Ch11 conformity.
**Note:** the commitment must be *recorded*. An unrecorded prediction is reconstructed after the fact, which is hindsight bias rather than a test of it.

---

### AL-02 · Peer Instruction (vote → discuss → revote)
**Trigger:** a discrimination students reliably get wrong; any `#### Do Not Confuse`.
**Students do:** answer individually, argue with a neighbour, answer again.
**Fail:** the revote distribution is visible, and a student can watch their own answer move.
**Time:** 4–6 min.
**Evidence:** Peer Instruction (Mazur, 1991) is among the most studied active-learning methods; a 384-instructor survey reported an average 39% gain on the Force Concept Inventory across 30 courses at 11 institutions, and PI has reduced or eliminated pre-existing gender gaps on post-assessments. Its mechanism is largely retrieval practice plus explanation to a peer (Vickrey et al., 2015).
**Note:** worthless if the first vote is near-unanimous. Requires an item with a genuinely attractive wrong answer — which is exactly what `concepts.yml`-style named misconceptions supply.

---

### AL-03 · Two-Pass Sort
**Trigger:** categories that genuinely overlap, where the overlap is the lesson.
**Students do:** sort the same items twice on two different dimensions.
**Fail:** pass 1 produces confident sorting; pass 2 reveals that an item they placed cleanly belongs to two things at once.
**Time:** 3–4 min.
**Evidence:** no distinct literature — this is a construction rule, not a method. It exists because forcing exclusive buckets onto overlapping dimensions produces incoherent items (see §6).
**In the book:** Ch1 camera test. *What is directly recorded vs. inferred*, then *what kind of evidence is being used* — "a student says 'I am not nervous'" is simultaneously observable behavior and self-report evidence, and a single three-way sort makes that item unanswerable.

---

### AL-04 · Discrimination Pair
**Trigger:** `#### Do Not Confuse`; any two confusable terms in Key Terms.
**Students do:** produce a case that the two concepts would classify differently — not a definition.
**Fail:** most first attempts are cases both concepts handle identically, which is the diagnostic.
**Time:** 3–4 min.
**In the book:** Ch6 NREM arousal parasomnia vs. REM sleep behavior disorder; Ch6 sleep paralysis vs. the incubus interpretation.

---

### AL-05 · Lens Switch
**Trigger:** a phenomenon the chapter explains at more than one level.
**Students do:** generate an explanation from each of N perspectives, then name the evidence that would weight one over another.
**Fail:** the second half. Generating plausible explanations is easy; specifying discriminating evidence is where answers thin out.
**Time:** 6–7 min.
**In the book:** Ch1 phone checking across seven perspectives. Candidates: Ch12 stress, Ch13 depression.
**Note:** debrief while their own answers are still visible. "These explanations don't automatically compete" lands far harder against work they just produced than on a following slide.

---

### AL-06 · What Would Change Your Mind
**Trigger:** prose flagging contested, mixed, developing, or limited evidence.
**Students do:** name the observation that would falsify a claim the chapter presents favourably.
**Fail:** most first answers name evidence that would *support* the claim.
**Time:** 3–5 min.
**In the book:** Ch6 glymphatic clearance — strong in mice, indirect in humans — is close to ideal. Also Ch6's "Strong Sleep Science vs. Sleep Hype." Ch1 ultimate/function claims.

---

### AL-07 · Mechanism vs. Performance
**Trigger:** any claim inferring an internal mechanism from observed behavior.
**Students do:** given several systems producing identical output, propose converging evidence that would distinguish them.
**Fail:** a proposal that the class can show would not actually discriminate.
**Time:** 4–5 min.
**Evidence categories** (reveal only after they try): novel transfer · learning trajectory · error patterns · intervention · internal measurement · response to changed conditions.
**In the book:** Ch1 black-box inference — person, scripted lookup, language model. Doubles as the Chapter 1 AI module (`deck-spec.md` §7.4): the psychology leads, AI is the modern instance.

---

### AL-08 · Estimate Then Reveal
**Trigger:** a counterintuitive number in the prose.
**Students do:** write a numeric estimate before the statistic appears.
**Fail:** the size of their own miss.
**Time:** 2–3 min.
**Evidence:** same pretesting mechanism as AL-01, cheaper to run.
**In the book:** Ch1's 26-of-40 against a predicted 1-in-1,000. Ch6's 60% greater amygdala reactivity under sleep deprivation.

---

### AL-09 · Diagnostic Case Sort
**Trigger:** a table of disorders, types, or mechanisms with multiple evidence channels.
**Students do:** classify simplified cases using several kinds of evidence at once.
**Fail:** cases where one channel points the wrong way — the point being that no single channel identifies the category.
**Time:** 5–8 min.
**In the book:** Ch6's Sleep-State Detective lab already does this — **use the lab, do not rebuild it**. Candidates: Ch13 disorders, Ch3 lesion cases.
**Boundary:** simplified educational cases, never a diagnostic instrument. State that aloud.

---

### AL-10 · Find the Flaw
**Trigger:** methods content; any causal claim resting on correlational evidence.
**Students do:** locate the failure in a plausible-sounding claim or design.
**Fail:** many students accept a design that does not support its conclusion.
**Time:** 4–6 min.
**In the book:** Ch2 throughout. Also Ch6's Cohen et al. cold-susceptibility study, where prior sleep was observed rather than assigned — the chapter already flags it, which makes it a clean item.

---

### AL-11 · Miniature Replication
**Trigger:** `#### Classic Study` describing a demonstrable effect.
**Students do:** run the effect on themselves, then compare with the published result.
**Fail:** the room's data may not reproduce the effect, which is itself the lesson.
**Time:** 6–10 min.
**In the book:** Ch8 levels of processing and self-reference labs; Ch4 illusions; Ch9 anchoring.
**Note:** budget the debrief. An unreplicated classroom effect teaches sampling and power, but only if someone says so.

---

### AL-12 · Explain to a Skeptic
**Trigger:** the chapter's Misconception Opener; the chapter close.
**Students do:** two sentences in prose — concede what makes the misconception attractive, then explain why it fails.
**Fail:** conceding is harder than refuting; answers that skip the concession are visibly thinner.
**Time:** 3–4 min.
**Evidence:** this is the generative follow-up §1.1 says refutation texts need. Recognition tasks — fill-in-the-blank, matching — do not do this work.
**In the book:** Ch1's close. Applies to every chapter by construction.
**Note:** prose first, skeleton second. Revealing a fill-in-the-blank skeleton first converts a generation task into a recognition task.

---

### AL-13 · Calibrated Confidence
**Trigger:** overconfidence topics; any AI assessment bridge.
**Students do:** answer, then rate confidence; score calibration rather than accuracy.
**Fail:** high confidence on wrong answers, made visible.
**Time:** 3–5 min.
**In the book:** the Prologue's Dunning-Kruger figure; Ch9 judgment. Natural fit for the AI Psych Pilot's pre/post measures.

---

### AL-14 · AI Output Audit
**Trigger:** AI assessment bridge (`deck-spec.md` §7.2).
**Students do:** annotate an AI-generated psychological explanation for claim quality, evidence, calibration, and overreach — **after** producing their own answer first.
**Fail:** students mark fluent-but-unsupported claims as good, which is the pilot's whole target.
**Time:** 6–10 min.
**Note:** commit-before-consulting is required, not optional (`deck-spec.md` §7.3). Reversing the order measures nothing.

---

### AL-15 · Exit Ticket
**Trigger:** module boundary.
**Students do:** one sentence — the muddiest point, or the claim they would most want to challenge.
**Fail:** none. This is instrumentation, not assessment.
**Time:** 1–2 min.
**Note:** the only pattern here that does not need a failure mode, because its job is telling you where the next meeting starts.

---

## 5. Evidence base

| Claim | Source | Strength |
|---|---|---|
| Active learning raises exam/concept-inventory performance 0.47 SD; failure OR 1.95 | Freeman et al. (2014), *PNAS* 111(23), 8410–8415 — 225 studies | Strong; robust to trim-and-fill and fail-safe *n* |
| Peer Instruction produces large conceptual gains and narrows gender gaps | Crouch & Mazur (2001); Vickrey et al. (2015), *CBE—Life Sciences Education* | Strong in physics; well replicated, less studied in psychology |
| Failed retrieval before instruction improves later retention | Pan & Carpenter (2023), *Educational Psychology Review* | Strong; holds across texts, lectures, video, and delayed tests |
| Refutation texts change misconceptions | two decades of conceptual-change research | Strong |
| Refutation-text effects are short-lived without follow-up activity, and weak for getting students to construct correct explanations | same literature | Moderate; **this is the load-bearing claim for §1.1** |

**Honest limits.** Most of this evidence is from STEM and physics, not introductory psychology. Freeman's meta-analysis covers science, engineering, and mathematics. Transfer to psychology is plausible — the mechanisms are general — but it is transfer, not direct evidence, and the book's own standards say to name that rather than let a citation imply more than it shows.

---

## 6. Anti-patterns

- **No failure mode.** Exposition with a pause in it.
- **Exclusive buckets on overlapping dimensions.** Use AL-03. Ch1's original four-category camera test is the worked failure.
- **Recognition after a refutation text.** The reading already did recognition; §1.1 says the deck owes generation.
- **Two extended bias demonstrations in one lecture.** One is a demonstration; two is a theme the chapter did not choose.
- **An activity whose honest debrief needs a later chapter.** Ch1's Wason 2-4-6 requires hypothesis-space structure to debrief fairly, which Ch9 owns.
- **Adding an activity where a lab already exists.** 11 lab links across 6 chapters already are the activity.
- **A quota per chapter.** Produces filler and, for AI elements, corrupts the pilot's measurements.
- **Adding chapter markup so a trigger will fire.** The book is not written for the deck.

---

## 7. Decisions still open

**7.1 Coverage mapping.** §3 gives the method and §4 names in-book instances for Chapters 1, 2, 4, 6, 8, 9, 11, 12, 13 where I could verify them against the source. A full chapter-by-chapter assignment has **not** been made and should not be guessed — it needs a pass per chapter against the actual prose.

**7.2 Does a pattern library belong in this repo or in Fall2026?** These patterns are course-agnostic and would serve Cognitive, Lifespan, and Statistics equally. But their triggers are this book's markup. Same question the deck generator faced, unresolved in the other direction.

**7.3 Peer Instruction needs items.** AL-02 requires an item with a genuinely attractive wrong answer. Fall2026's `concepts.yml` carries named misconceptions with distractor-selection statistics for exactly this purpose — but for Cognitive, not Gen Psych. Should deck activities draw on that machinery, and if so, when?

**7.4 Are 15 patterns the right number?** Fewer would be easier to choose from; more would cover more material. The risk of a large library is that selection becomes taste again, which is what this document exists to prevent.

**7.5 Should the generator propose activities, or only flag triggers?** Flagging is safe and leaves the judgment with the instructor. Proposing is faster and risks the mechanical quota §6 forbids.

---

## Sources

- [Freeman et al. (2014), *PNAS*](https://www.pnas.org/doi/10.1073/pnas.1319030111)
- [Vickrey et al. (2015), *CBE—Life Sciences Education*](https://www.lifescied.org/doi/10.1187/cbe.14-11-0198)
- [Pan & Carpenter (2023), *Educational Psychology Review*](https://link.springer.com/article/10.1007/s10648-023-09814-5)
- [Refutation text and conceptual change](https://www.sciencedirect.com/science/article/abs/pii/S095947521830817X)
- [Mazur & Watkins, Just-in-Time Teaching and Peer Instruction](https://sites.stat.columbia.edu/gelman/communication/WatkinsMazur2009.pdf)
