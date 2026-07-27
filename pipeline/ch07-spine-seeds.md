# Chapter 7 (Learning) — Spine Seeds and Decision Record

**Pass run:** 2026-07-27. Workflow: chat iteration, not a `.docx` packet.
**Source:** `source/chapters/ch07-learning.md` — 4,172 body words before this pass, excluding Learning Objectives; accepted substitutions reduce the body by 13 words.
**Layer 3 notes:** `pipeline/theoretical-spine.md` §8, `### Ch. 7 — Learning`.

---

## Step 1 — Thread-count diagnostic

| Thread | Full source | Body | Reading |
|---|---:|---:|---|
| Student-facing spine question | 1 | 1 | Installed exactly in `Where This Fits` |
| `extinct*` / `new learning` | 28 / 2 | 16 / 2 | Extinction as competing learning is strongly installed |
| `performance` | 15 | 9 | Learning versus visible performance is the chapter's organizing center |
| `prediction error` | 9 | 4 | Present around dopamine, but zero occurrences in Section 1's extinction discussion before this pass |
| `proximate` / `ultimate` | **0 / 0** | **0 / 0** | Missing despite Chapter 1's promise that both terms reappear in Chapter 7 |
| `wanting` / `liking` | 2 / 2 | 2 / 2 | Present and bounded |

The formal Chapter 7 Layer 3 threads were already present. The measurable gap was separation: extinction was never
named as an instance of the broader prediction-error principle, while dopamine reward prediction error appeared as
an isolated neural topic. A second cross-chapter gap came from Chapter 1's explicit promise that the proximate /
ultimate pair would reappear here even though both terms scored zero.

## Constraints read

- `pipeline/theoretical-spine.md` §7 and §8, including the Chapter 7 map row.
- `pipeline/evidence-commitments.md`, Chapter 7 rows.
- `source/chapters/ch07-learning.md`, including the instructor-reconciled learning-versus-performance framing.
- `pipeline/theoretical-foundations.md` §4 and §6 on keeping generic prediction error distinct from dopamine RPE.
- `source/voice_profile_merged.csv`, Learning-tagged examples.

The accepted substitutions preserve the extinction, preparedness, reinforcement-schedule, dopamine, intrinsic-
motivation, and Bobo-doll evidence commitments. Generic prediction error remains a computational relationship;
dopamine RPE remains one bounded neural signal in reward-learning tasks.

---

## Chapter engine

> Learning updates what an organism predicts and does; behavior reveals which learning currently controls action,
> not everything the organism has acquired.

## Spine question

> Why can learning occur without being visible in behavior?

Already installed in `Where This Fits`; no alternative or duplicate placement was needed.

---

## Per-section seeds

### Misconception Opener + Where This Fits

- **Spine claim:** Learning and current performance are different things.
- **Lead with:** The candy-as-bribery misconception already in place.
- **Arc:** suspicion → ancient survival process → hidden learning.
- **Payoff line seed:** Existing line 13 already lands the distinction; no new line.
- **Prune candidate:** None; no additive content proposed.
- **Watch:** Preserve the bounded intrinsic-motivation claim.

### Section 1 — Classical Conditioning

- **Spine claim:** Extinction begins when an expected outcome fails to arrive; new learning competes with the old prediction.
- **Lead with:** Pavlov's supposedly annoying dogs.
- **Arc:** prediction → contingency → violated expectation → competing learning.
- **Payoff line seed:** “Extinction begins with a prediction error: the expected UCS fails to arrive.”
- **Prune candidate:** Replace the 43-word two-sentence close with the accepted 29-word formulation.
- **Watch:** Preserve context sensitivity, the CS–UCS relation, and non-erasure; do not imply a demonstrated differential decay rate.

### Section 2 — Operant Conditioning

- **Spine claim:** Consequences select behavior; habits exchange flexibility for speed.
- **Lead with:** Thorndike's puzzle-box cats.
- **Arc:** trial and error → functional categories → schedules → habits.
- **Payoff line seed:** The existing habit paragraph already carries the trade-off.
- **Prune candidate:** None; no additive content proposed.
- **Watch:** Schedule effects remain conditional, not universal.

### Section 3 — Biological Constraints and Learning Without Immediate Performance

- **Spine claim:** Learning is biologically tuned, and learned information can remain behaviorally hidden.
- **Lead with:** Garcia and Koelling's crossed cue–consequence design.
- **Arc:** prepared bias → learning by watching → latent map revealed.
- **Payoff line seed:** “At the proximate level, learning favors certain cue–consequence pairings. At the ultimate level, natural selection offers the leading explanation for that bias.”
- **Prune candidate:** Replace the 24-word editorial sentence with the accepted 22-word formulation.
- **Watch:** Preparedness names the observed selectivity; natural selection remains the leading interpretation, not the observed result.

### Section 4 — Dopamine, Prediction Error, and Motivation

- **Spine claim:** Prediction error is the broader learning logic; dopamine RPE is one bounded neural example.
- **Lead with:** Unexpected reward → predictive cue → omitted reward.
- **Arc:** mismatch → updating → wanting/liking → motivational interpretation.
- **Payoff line seed:** “Extinction showed the broader learning logic: when outcomes violate expectations, learning updates.”
- **Prune candidate:** Replace the 23-word definition-first lead with the accepted 26-word seam.
- **Watch:** Do not equate dopamine with pleasure, all prediction error, emotion, or stress; keep wanting and liking distinct.

### Chapter Summary

- **Spine claim:** The chapter moves from predictive cues to actions, hidden learning, and one neural updating signal.
- **Lead with:** The existing classical/operant recap.
- **Arc:** prediction → action → hidden knowledge → neural example.
- **Payoff line seed:** The existing “not a transparent readout” sentence remains the chapter-level payoff.
- **Prune candidate:** None.
- **Watch:** No Learning Objective or glossary change is required by the accepted seams.

---

## Decisions — accepted 2026-07-27 in chat

### D1 — Connect extinction to prediction error

**Accepted as two coupled substitutions.**

1. Section 1 replaces its 43-word hedge-heavy close with a 29-word statement naming the omitted UCS as prediction
   error and retaining competing, context-sensitive learning.
2. Section 4 replaces its isolated definition-first opening with a seam identifying dopamine reward prediction
   error as one bounded neural example of the broader learning logic.

**What the change removes:** meta-commentary that researchers debate the exact mechanism and the implication that
dopamine RPE is the chapter's only connection to prediction error.

**What remains bound:** reduced responding does not prove erasure; the earlier CS–UCS learning remains available;
generic prediction error is not equated with dopamine.

### D2 — Fulfill Chapter 1's proximate / ultimate promise

**Accepted.** The Garcia and Koelling paragraph now names selective cue–consequence learning as the proximate level
and natural selection as the leading ultimate explanation.

**What the change removes:** the editorial sentence “The chapter should keep both levels.”

**What remains bound:** the crossed learning pattern is the observation; evolutionary history is the interpretation.

---

## Word trade

| Change | Current | Accepted | Net |
|---|---:|---:|---:|
| D1 — extinction close | 43 | 29 | −14 |
| D1 — dopamine opening | 23 | 26 | +3 |
| D2 — Garcia framing | 24 | 22 | −2 |
| **Total** | **90** | **77** | **−13** |

No new paragraph was added. The pass installs the two missing seams while shortening the chapter.

---

## Step 9 — Apparatus and generated-output validation

- Body word count after the pass: **4,159**, down from 4,172.
- `python -X utf8 pipeline/check_chapter_coherence.py source/chapters/ch07-learning.md`: **0 failures**;
  one pre-existing review item for the Little Albert Connections anchor. The generated HTML contains the correct
  `classic-study-watson-and-rayners-little-albert` ID; this is the checker's documented apostrophe-slug mismatch.
- `python -X utf8 pipeline/lint_chapters.py`: **14/14 PASS**, zero failures and zero warnings.
- `git diff --check`: no whitespace errors.
- All 11 review questions remain.
- Source and generated HTML each contain exactly one instance of all four accepted seam phrases.
- No Learning Objective, Chapter Summary, Key Term, figure, reference, lab, or shared-builder change was required.
