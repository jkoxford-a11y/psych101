# Gate 3 Blind Audit Packet — Chapter 2 Exam Bank

> For an independent reviewer (fresh Claude session, GPT, or Gemini) that has **not** seen `pipeline/exam-bank/ch02-exam-bank.md`. That file contains the intended answer key and misconception rationale for every item below — reading it first defeats the point of this pass. Work only from what's given here.

## Your task

You are reviewing 28 candidate multiple-choice items for a Chapter 2 (Research Methods & Statistics) college exam. For **each item**:

1. Pick the single best answer.
2. State, in one short phrase, what concept or distinction you think the item is testing.
3. Note anything about the item itself — independent of which answer is correct — that would make it a bad exam question: more than one defensible answer, the stem or an option's wording giving away the answer, a distinction finer than the passage actually supports, outside knowledge (not the passage) making a "wrong" option arguable, or the item testing a wording quirk rather than the concept.

**Do not suggest a rewrite merely because you would have phrased it differently.** Flag an item only if the defect would materially affect validity, fairness, or clarity for a real student taking a real exam — not stylistic preference.

## Response format

One line per item, in this exact form, then a short list of flagged items at the end:

```
1.1: <letter> — <one-phrase concept>
1.2: <letter> — <one-phrase concept>
...
I.2: <letter> — <one-phrase concept>

FLAGGED:
- <item id>: <one-sentence defect, or "none">
```

---

## Grounding passages

Short excerpts from the source chapter, provided so you can judge correctness without needing the textbook itself. Quoted directly from `source/chapters/ch02-research-methods.md` (and one Ch. 1 reference for the two Integration items).

**Descriptive methods (LO1 — Items 1.1–1.4):** "The case study examines one individual or small group in depth, usually because the case is rare or extreme... What they cannot deliver is frequency: one case, no comparison group. Naturalistic observation means watching behavior unfold in its normal setting without interfering... The survey method asks large numbers of people to report on their own attitudes, experiences, or behavior... Descriptive methods are the gateway to experimental research... A case study reveals a phenomenon no one expected; naturalistic observation shows when and where it occurs; a survey estimates how common it is." None of the three descriptive methods can, alone, establish causation.

**Correlation and the third-variable problem (LO2 — Items 2.1–2.4):** "A correlation describes how strongly two variables change together. The correlation coefficient (r) runs from −1.00 to +1.00... Any correlation has at least three live explanations: X causes Y, Y causes X, or a third variable drives both. Two of them can be true at once. The association alone cannot tell them apart." Worked example given in the chapter: children's shoe size and reading ability are correlated because both grow with age (a third variable), not because one causes the other.

**Reliability and validity (LO3 — Items 3.1–3.3):** "Reliability is the consistency of observed scores... Validity is whether evidence and theory support the interpretation a researcher wants to put on those scores... A bathroom scale that reads three pounds heavy every time is perfectly reliable and still tells you the wrong weight... Too much measurement error leaves too little stable signal to interpret, so weak reliability caps how strong a validity claim can get. Reliability is necessary. It is not sufficient." Worked example given in the chapter: a depression questionnaire can give nearly identical scores every time and still be tracking sleep loss or fatigue rather than depression.

**Random sampling vs. random assignment (LO4 — Items 4.1–4.2):** "Random sampling means every member of the population has an equal chance of being selected. A representative sample buys you one piece of external validity... Random assignment: participants land in conditions by chance, never by a characteristic of their own... That is internal validity... Random sampling (who gets into the study) supports representativeness. Random assignment (how the people already in it get divided) supports the causal claim. A study can have either one without the other."

**IV, DV, control group (LO5 — Items 5.1–5.3):** "The variable the researcher manipulates is the independent variable (IV) — the suspected cause. The variable the researcher measures is the dependent variable (DV) — the suspected effect. The control group provides the comparison... What separates a randomized experiment from a correlational study is random assignment... systematic preexisting differences become unlikely — so an outcome difference can be pinned on the manipulation."

**Statistical significance, effect size, confidence intervals (LO6 — Items 6.1–6.4):** "A p-value measures how incompatible the observed data are with a null model... It does not give you the probability your hypothesis is true, the probability the finding is real, the size of the effect, or whether it will replicate... A trivial effect clears significance if the sample is large enough; a real, meaningful effect misses it in a small or noisy sample... Effect size asks how large the result is. Confidence intervals show how uncertain the estimate is by giving a range of plausible values for the true effect."

**Evaluating a research claim / operational vagueness (LO7 — Items 7.1–7.2):** "Every one of these methods depends on a step that is cheap to skip and expensive to skip badly: the operational definition — a precise, measurable specification of what you mean by a concept... 'Write me something good' gets you nothing you can check. 'Summarize the three main arguments in this article in under 100 words' gets you something you can grade. Saying what you want precisely enough to tell whether you got it — that is the skill, in both places."

**Ethics and bias controls (§4 — Items E.1–E.4):** "A placebo is an inactive treatment or simulated procedure used as a comparison condition. The placebo effect is the change that comes from the treatment ritual itself, measured against an appropriate control... Placebo response is everything that changes in a placebo group; placebo effect is only the extra change the ritual buys over no intervention at all... The double-blind procedure: neither the participant nor the researcher in the room knows who is in which group. It blocks participants from performing what they are 'supposed' to feel, and researchers from unconsciously treating the groups differently [the Clever Hans problem]... An Institutional Review Board (IRB) reviews covered human research so that researchers are not the sole judges of whether their own study is ethically acceptable... The Three Rs: replacement (use a non-animal method when one can answer the question), reduction (use no more animals than a sound design requires), and refinement (minimize pain, distress, and disruption)."

**Integration (Items I.1–I.2):** Ch. 2: "a direct guard against the confirmation bias from Chapter 1" (referring to the double-blind procedure vs. the Clever Hans horse, who was reading unconscious cues from his questioner). Ch. 2: "Because every statistical decision rule permits some errors, a significant result still requires replication." Ch. 1 (referenced, not quoted here) introduced confirmation bias and the replication crisis as evidence psychological science is self-correcting.

---

## Items

### LO1

**1.1** A researcher wants to know whether a new anti-anxiety app reduces anxiety more than no app at all, and wants to be confident the app itself — not something else — caused any change. Which design is most appropriate?
a) a randomized experiment comparing app users to a control group
b) naturalistic observation
c) a case study
d) a survey of app users' self-reported anxiety

**1.2** Which of the following questions could a case study answer, but a large-sample survey could not?
a) What percentage of college students report feeling test anxiety?
b) What unusual and previously undocumented symptom pattern might follow a rare kind of brain injury?
c) Whether sleep deprivation causes lower quiz scores.
d) Whether two variables are correlated in the general population.

**1.3** A researcher watches, without interfering, how strangers behave while waiting together in a crowded elevator, recording proximity and eye contact. This is best classified as:
a) an experiment, because behavior is being measured
b) a correlational study, because two variables are being compared
c) naturalistic observation, because behavior is recorded in its normal setting without interference
d) a case study, because only a few elevator rides are observed

**1.4** Descriptive methods (case study, naturalistic observation, survey) share which limitation, according to the chapter?
a) They cannot generate any research questions.
b) They require random assignment to be valid.
c) They can only be used with animal subjects.
d) None of them can, by itself, establish what is causing an observed pattern.

### LO2

**2.1** Ice cream sales and drowning deaths rise and fall together across the months of the year. The most accurate interpretation is:
a) A third variable, such as warm weather increasing both swimming and ice cream purchases, likely explains the association.
b) Buying ice cream makes people more likely to drown.
c) Drowning makes people crave ice cream afterward.
d) Because the correlation is strong, one of the first two explanations must be correct.

**2.2** A university finds that students who eat breakfast score higher on morning exams than students who skip it. A campus newsletter concludes breakfast improves exam performance. Which alternative explanation does the newsletter fail to rule out?
a) That eating breakfast is impossible to operationally define.
b) That students who are more conscientious or better-rested may be both more likely to eat breakfast and to perform well, regardless of the meal itself.
c) That exam scores cannot be measured reliably.
d) That the sample size was too small to calculate a correlation coefficient.

**2.3** Which of the following is one of the three live explanations the chapter says must always be considered for any observed correlation between X and Y?
a) The sample must have been randomly assigned
b) The correlation coefficient must be above .50
c) X causes Y
d) The variables must be normally distributed

**2.4** A researcher reports r = −0.72 between hours spent on social media and self-reported life satisfaction. Which conclusion is best supported by this number alone?
a) Social media use directly reduces life satisfaction, and the relationship is causal because the coefficient is large.
b) Life satisfaction directly reduces social media use.
c) Because the value is negative, no meaningful relationship exists between the two variables.
d) Social media use is strongly, and negatively, associated with life satisfaction in this sample, but the correlation alone does not establish that social media use reduces satisfaction.

### LO3

**3.1** A company builds an employee "leadership potential" test. Employees who retake it a month later score almost identically each time, but interviews with high scorers reveal the test is actually tracking general verbal fluency rather than anything specific to leadership. What is the best assessment?
a) The test appears reliable (consistent scores across retakes), but the evidence does not support interpreting those scores specifically as leadership potential.
b) The test is both reliable and valid for measuring leadership potential.
c) The test is neither reliable nor valid, since it measures the wrong construct.
d) The test cannot be reliable, because it is measuring verbal fluency instead of leadership.

**3.2** A kitchen scale gives a different reading every time the same object is weighed — sometimes 2 pounds high, sometimes 3 pounds low, with no consistent pattern. This scale has a problem with:
a) validity only
b) reliability
c) neither reliability nor validity, because scales cannot have either property
d) operational definition

**3.3** Why does the chapter argue that weak reliability caps how strong a validity claim can be?
a) Because validity and reliability are the same property under different names.
b) Because reliability is only relevant to physical measurements, not psychological ones.
c) Because too much measurement error leaves too little stable signal to support any interpretation of what the scores mean.
d) Because validity is established before reliability is ever assessed.

### LO4

**4.1** A study recruits a perfectly representative random sample of the U.S. adult population, but then lets participants choose which of two conditions they want to be in. This study has:
a) strong support for both external and internal validity
b) strong support for internal validity, but not for external validity
c) no support for either kind of validity
d) strong support for external validity, but not for internal validity

**4.2** Which pair correctly matches each concept to what it decides?
a) Random sampling decides who gets into the study; random assignment decides who goes into which condition
b) Random sampling decides who goes into which condition; random assignment decides who gets into the study
c) Both random sampling and random assignment decide who gets into the study
d) Both random sampling and random assignment decide who goes into which condition

### LO5

**5.1** Researchers want to know whether background noise affects reading comprehension. They randomly assign participants to read a passage either in silence or with café noise playing, then give everyone the same comprehension quiz. What is the independent variable?
a) Comprehension quiz score
b) Whether café noise was present during reading
c) The passage participants read
d) Random assignment itself

**5.2** In the same noise-and-reading-comprehension study, participants in the silent condition serve as the:
a) independent variable
b) dependent variable
c) control group
d) confound

**5.3** A separate researcher studies the same question by comparing reading comprehension scores of students who happened to study in a noisy dorm versus a quiet library, without assigning anyone to either location. Compared to the randomized noise experiment above, this design:
a) is stronger for causal conclusions, because it uses real-world settings
b) is identical in causal strength, because both designs measure the same dependent variable
c) cannot be analyzed statistically at all
d) is weaker for causal conclusions, because without random assignment, students who choose quiet study spaces may differ systematically from those who don't

### LO6

**6.1** A study reports p = .21 for a treatment effect. The most accurate interpretation is:
a) The observed data are not unusual enough, under the assumption of no real effect, to be considered statistically significant at the conventional threshold.
b) The treatment definitely has no effect.
c) There is a 21% chance the treatment works.
d) The effect size must be small.

**6.2** Two studies test the same drug. Study A has 40,000 participants; Study B has 40 participants. Both find the identical small effect size, but only Study A reaches statistical significance. The best explanation is:
a) Study A's effect is more real than Study B's, because it was significant.
b) Larger samples make it easier to detect the same-sized effect as statistically significant, independent of whether that effect is practically important.
c) Study B's result is a Type II error and should be ignored.
d) The two studies cannot be compared because their p-values are calculated differently.

**6.3** A confidence interval for a treatment effect runs from −2 to +9 on the outcome scale. What does this most accurately indicate?
a) The true effect is definitely 3.5, the midpoint of the interval.
b) The effect is definitely positive, since most of the interval is above zero.
c) The data are compatible with a range of true effects including negative, zero, and positive values, so the direction of the true effect remains genuinely uncertain.
d) The study should be discarded because the interval includes zero.

**6.4** What is the key difference between what a p-value tells you and what an effect size tells you?
a) A p-value tells you how large an effect is; effect size tells you whether it's statistically significant.
b) They measure exactly the same thing, expressed on different scales.
c) A p-value applies only to experiments; effect size applies only to correlational studies.
d) A p-value tells you how incompatible the data are with a null model; effect size tells you the magnitude of the result, independent of significance.

### LO7

**7.1** An advertisement claims: "Our brain-training app improves cognitive performance." Which criticism most directly targets a weakness in how the claim is stated, independent of any study design issue?
a) The claim uses an operationally vague term ("cognitive performance") that could mean many different, not-necessarily-related things — until it's specified, there's no way to know what was actually measured or check the claim.
b) The claim was probably not peer-reviewed.
c) The app likely costs money.
d) The claim does not mention a control group.

**7.2** A student asks an AI chatbot to summarize research on a supplement, and it responds: "Studies show this supplement significantly boosts memory." Which follow-up question best targets the claim's operational vagueness specifically?
a) "Was the sample randomly selected from the general population?"
b) "Which specific memory measure was used, and what exactly counts as a meaningful improvement?"
c) "Did the researchers have a financial conflict of interest?"
d) "Was the study published in a peer-reviewed journal?"

### §4

**E.1** A pharmaceutical trial gives one group the real drug and another group a pill with no active ingredient, tracking symptom change in each group from baseline. According to the chapter's distinction, everything that changes in the sugar-pill group — including natural recovery over time — is best described as the:
a) placebo effect
b) double-blind procedure
c) placebo response
d) Type I error

**E.2** Why does a double-blind design add protection beyond a single-blind (participants-only-blinded) design?
a) It eliminates the need for a control group entirely.
b) It guarantees the study will reach statistical significance.
c) It replaces the need for informed consent.
d) It also prevents researchers from unconsciously treating groups differently based on which condition they believe a participant is in.

**E.3** Which of the following is the primary purpose of Institutional Review Board (IRB) review, as described in the chapter?
a) To ensure researchers are not the sole judges of whether their own study's risks, consent process, and participant selection are ethically acceptable
b) To guarantee a study will produce statistically significant results
c) To replace the need for a control group in ethically sensitive research
d) To determine whether a study's hypothesis is correct before it is run

**E.4** A researcher studying a new surgical technique in laboratory rats designs the study to use the minimum number of animals a sound design requires, and to minimize pain and disruption wherever possible. This reflects which two of the Three Rs?
a) Replacement and Reduction
b) Reduction and Refinement
c) Replacement and Refinement
d) All three Rs equally

### Integration

**I.1** Chapter 1 introduced confirmation bias as a barrier to noticing when we're wrong. Which safeguard from this chapter exists specifically to prevent researchers from unconsciously acting on their own expectations in a way that confirms their hypothesis?
a) Random sampling
b) Effect size reporting
c) The double-blind procedure
d) The third-variable problem

**I.2** Chapter 1 described the replication crisis as evidence that psychological science is self-correcting. Which concept from this chapter explains, statistically, why even a single well-designed, significant study should not be fully trusted until it replicates?
a) Operational definitions are always imprecise.
b) Case studies cannot be replicated.
c) Random assignment guarantees a result is true.
d) Significance testing permits some false positives by design, so any individual significant result carries some chance of being one.
