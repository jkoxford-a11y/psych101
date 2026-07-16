# Chapter 2: Research Methods and Statistics

> Drafting history & provenance: see `_provenance/ch02-research-methods.md` (and git log).

---

## Misconception Opener

*It is hard not to believe this, at least some of the time: if two things are correlated, one of them must be causing the other.*

News stories about psychology and health lean on this logic constantly: a study finds that people who do X also tend to have outcome Y, and the headline writes itself — X causes Y. Eat more chocolate, live longer. Spend more time on social media, get more depressed. Own more books as a child, score higher on intelligence tests as an adult.

Here is the problem: a correlation tells you that two things move together. It does not tell you which one, if either, is causing the other — or whether something else entirely is causing both. The childhood-books-and-intelligence correlation is real, and the honest story is more complicated than either the headline version or its easy debunking. Some of the effect likely reflects parental education and household income, which shape both how many books are in a house and a child's broader cognitive environment. But growing up with more books at home also predicts better adult literacy, numeracy, and technology skills even after accounting for parental and personal education (Sikora, Evans, & Kelley, 2019) — so the books may be doing some real work too, not just marking something else. What the correlation alone cannot tell you is how to separate those possibilities.

This is one of the most common reasoning errors in how the public — and, often, the media reporting on psychology — interprets behavioral science. The good news is that psychology has a well-developed toolkit for telling the difference between "these two things travel together" and "this one thing produces that one." That toolkit is what this chapter is about.

---

## Where This Fits

Chapter 1 ended with a problem: common sense about behavior is unreliable, and even systematic science can go wrong — sometimes for years, as the replication crisis showed. This chapter is the resolution to that problem. It is the actual machinery — descriptive methods, correlational designs, true experiments, and the statistics that interpret all three — that lets psychology tell a good explanation from a comforting one. Nearly every finding referenced in every later chapter of this book rests on the logic developed here.

---

## Learning Objectives

By the end of this chapter, you should be able to:

1. Distinguish descriptive, correlational, and experimental research designs, and identify which kind of question each one can and cannot answer.
2. Explain why correlation does not establish causation, and identify the third-variable problem in a real example.
3. Distinguish the consistency or precision of observed scores from evidence supporting their intended interpretation and use, and apply both questions to a real operational definition.
4. Distinguish random sampling from random assignment, and explain how each supports a different part of a study's inference.
5. Identify the independent variable, dependent variable, and control condition in a described experiment.
6. Explain what a p-value does and does not tell you, and explain why effect size and confidence intervals add information that significance alone does not (Theme 1: psychological science relies on empirical evidence and adapts as new evidence emerges).
7. Evaluate a research claim — including an AI-generated one — for sampling bias, operational vagueness, and overstated certainty.

---

## A Map Before the Details: The Research Cycle

Before the details accumulate, here is the shape of the whole chapter — not a ladder to climb toward some superior method, but a cycle: **Observe → Define → Relate → Test → Estimate → Replicate → Revise.** Descriptive work observes and turns up a question worth asking; operational definitions make that question measurable; correlational work relates variables to each other; causal designs test whether one variable changes another; statistics estimate how large an effect is and how confidently you can say so; replication checks whether the finding survives contact with a new sample; and a result that doesn't survive — or that raises a sharper question than it answers — sends you back to Observe with something better to look for. None of this is a hierarchy with experiments at the top. Each method below answers a different kind of question. The rule to commit to memory is that a simple correlation cannot establish causation. Randomized experiments provide psychology's clearest ordinary basis for causal inference because researchers manipulate the suspected cause and assign conditions by chance; other causal designs can sometimes support causal conclusions, but only with additional design features and assumptions (Shadish, Cook, & Campbell, 2002).

![Figure 2.1 — Circular infographic showing seven recurring stages of psychological research: Observe, Define, Relate, Test, Estimate, Replicate, and Revise, connected by arrows forming a cycle, with a central note that science is iterative rather than a search for final answers.](../images/ch02/ch02_research_process_cycle.png)
*Figure 2.1. The research process is a cycle, not a ladder. Descriptive methods reveal patterns and generate questions; operational definitions make those questions measurable; correlational and causal designs test different claims; effect sizes and confidence intervals quantify magnitude and uncertainty; and replication turns results into better questions. Researchers often move backward, repeat stages, or revise a design as evidence accumulates.*

| Method | Main question it answers | Can it show causation? | Main strength | Main limitation | Common student mistake |
|---|---|---|---|---|---|
| Case study | What happened in this one, unusual case? | Not by itself | Rich detail; can reveal the unanticipated | Cannot show how common something is; no comparison group | Assuming one vivid case proves a general rule |
| Naturalistic observation | What does behavior look like in its normal setting? | Not by itself | High ecological validity | No control over competing explanations | Treating an observed pattern as an explanation |
| Survey | What do people report about their own attitudes or behavior? | Not by itself | Efficient; can reach large samples | Depends on accurate, honest self-report | Assuming self-report is automatically accurate |
| Correlation | Do two variables move together, and how strongly? | Not from the association alone | Can study relationships that cannot be ethically manipulated | Cannot by itself rule out reverse causation or a third variable | Treating association as proof of cause |
| Randomized experiment | Does manipulating X change Y? | Usually, when the design and analysis support it | Manipulation plus random assignment provides the clearest ordinary causal test | Attrition, contamination, poor measurement, and limited settings can still damage inference | Assuming random assignment guarantees equivalent groups or a representative sample |
| Statistics | What can this sample tell us about the population, and how confident should we be? | — (a tool for analyzing data, not a way of collecting it) | Quantifies uncertainty | Easy to mistake for proof; cannot fix a flawed design | Treating "statistically significant" as "proven" or "important" |
| Replication | Does the finding hold up when someone else tries it? | — (a verification step, not a data-collection method) | Builds genuine confidence in a finding | Costly, time-consuming, and historically under-rewarded | Trusting a single study because it was well-designed |

Keep this table in view as you read. The first five rows are *ways of collecting data* — they map onto Observe, Relate, and Test in the cycle above; the last two are *what you do once you have it* — Estimate and Replicate. Confusing those two categories — treating "it was statistically significant" as if it were a research method in its own right — is itself a common source of confusion, which is exactly why it gets its own section later in this chapter.

---

## Section 1: Asking Questions Without Touching the System

Long before I taught psychology, I spent time doing fieldwork in animal behavioral ecology — the kind of research where you do not get to manipulate anything. Some questions can only be answered by watching carefully and not interfering.

Psychology inherited a version of the same constraint. You cannot ethically or practically assign people to develop a childhood trauma, lose a spouse, or experience a manic episode in order to study the effects. For a wide range of psychological questions, the only available approach is to describe what is already happening, as precisely and systematically as possible. This is **descriptive research**, and it comes in a few standard forms.

The **case study** is an intensive examination of a single individual or small group, usually because the case is rare, extreme, or otherwise unusually informative — Phineas Gage's personality change after frontal lobe damage, discussed in Chapter 1, is a case study. Case studies generate rich detail and can reveal phenomena no one anticipated, but a single case cannot tell you how common something is, and there is no comparison group to rule out competing explanations.

**Naturalistic observation** means watching behavior unfold in its normal environment without interfering. The strength is ecological validity: you are watching the real thing. The weakness is the same one above — no control over competing explanations, so a pattern you notice cannot yet be explained.

The **survey method** asks large numbers of people to report on their own attitudes, experiences, or behavior. Surveys are efficient and can sample huge populations, but they depend entirely on people accurately knowing and honestly reporting their own internal states — a shakier assumption than it sounds. People misremember, round their answers toward what seems socially acceptable, and sometimes lack introspective access to the thing being asked about.

Descriptive methods are not merely what researchers use when they cannot run an experiment — they often determine what experiment should be run. A case study can reveal a phenomenon no one expected; naturalistic observation can show when and where it occurs; a survey can estimate how common it is and which experiences travel alongside it. When a similar pattern turns up across different samples and methods — what researchers call **convergence** — it becomes harder to dismiss as an accident, even though convergence still does not establish what caused it. Description frames the question. The methods in the rest of this chapter test the explanation.

Whatever the method, descriptive research depends on a step that is easy to skip and expensive to skip badly: the **operational definition** — a precise, measurable specification of exactly what you mean by a concept. "Aggression" is not a usable scientific variable until you decide it means something concrete and measurable. Without that translation step, you cannot collect data, because you do not yet know what to count.

> **Stop and Retrieve:** Before reading further — what is the key limitation that case studies, naturalistic observation, and surveys all share, even though they differ in method?

### Two More Questions Every Measure Has to Answer

Writing down an operational definition is not the end of the job. Once a concept has been translated into something measurable, two further questions decide whether the measurement is any good.

**Reliability** concerns the consistency or precision of observed scores under specified conditions. Depending on the measurement problem, researchers might ask whether scores are stable across occasions, consistent across items, or similar across trained observers. There is no single reliability check that fits every measure.

**Validity** concerns whether evidence and theory support the interpretation and use a researcher intends for those scores (American Educational Research Association, American Psychological Association, & National Council on Measurement in Education, 2014). The question is not simply whether a test is "accurate" in the abstract. It is whether a particular interpretation is justified for a particular purpose and population.

These are different questions, but they are not independent boxes a measure can pass or fail once and forever. A bathroom scale that reads three pounds heavy every time is highly reliable — consistent — but its readings do not support an accurate interpretation of your weight. A set of readings can also center on the correct value on average while varying too widely to support a dependable conclusion about any one person. Inadequate reliability limits strong validity claims because excessive measurement error leaves too little stable information to interpret. Reliability is necessary for many uses. It is not sufficient.

A psychology-specific version of the same gap: a depression questionnaire could be highly reliable — a student gets nearly the same score every time they take it — while still being a questionable measure of depression if what it is actually tracking is sleep loss or fatigue, which have plenty of causes besides depression. Reliable scores do not guarantee you are measuring the thing you think you are measuring.

![Figure 2.2 — Four-panel target diagram comparing measurement accuracy and precision. The first panel shows darts tightly clustered at the center, labeled accurate on average and high reliability. The second shows darts tightly clustered away from the center, labeled biased on average and high reliability. The third shows darts widely dispersed around the center, labeled accurate on average and low reliability, representing observations too imprecise for dependable individual interpretation. The fourth shows darts scattered away from the center, labeled biased on average and low reliability. A note explains that validity concerns evidence and theory supporting an intended score interpretation and use.](../images/ch02/ch02_reliability_validity_accuracy_precision.png)
*Figure 2.2. The target analogy is a useful first approximation, not a definition of psychometric validity. Reliability concerns the consistency or precision of observed scores under specified conditions; validity concerns whether evidence and theory support an intended interpretation and use. A measure may be consistent but systematically wrong. Observations may also center on the correct value on average while varying too widely for dependable individual interpretation. Inadequate reliability limits strong validity claims, but reliability alone does not establish validity.*

We will put both questions to work directly in Section 3, on a real, named measure.

> **Think About It:** Operationalizing a concept precisely enough to measure it is not just a research skill — it is the same move you have to make any time you ask an AI tool for something useful. "Write me something good" gets you nothing testable; "summarize the three main arguments in this article in under 100 words" gets you something you can evaluate. Specifying what you actually want, precisely enough to check whether you got it, is the same underlying skill in both places.

---

## Section 2: The Trap of "Together Means Together"

Descriptive methods tell you what is happening. The next step is asking whether two things happen *together* in a reliable way — which is where this chapter's opening misconception lives.

A **correlation** describes the degree to which two variables change together. The **correlation coefficient** (symbolized *r*) ranges from −1.00 to +1.00. A positive correlation means the variables move in the same direction; a negative correlation means they move in opposite directions. The magnitude tells you how tight the relationship is; the sign tells you the direction. A correlation near 0 means the variables show little or no *linear* relationship — a strong nonlinear pattern (for instance, a relationship that rises then falls) can still produce an r near zero, since r specifically measures straight-line association.

![Figure 2.3 — Five side-by-side scatterplots illustrating correlations ranging from strong positive to strong negative, labeled with approximate r values from +0.90 down to −0.90, with the middle panel showing scattered points near zero. A brief legend explains that the sign indicates direction and values closer to −1 or +1 indicate stronger linear relationships.](../images/ch02/ch02_correlation_direction_strength.png)
*Figure 2.3. Correlation describes both direction and strength. Positive values indicate that two variables tend to increase together; negative values indicate that one tends to decrease as the other increases. Values closer to −1 or +1 indicate a tighter linear relationship, while a value near zero indicates little or no linear relationship. The coefficient summarizes a pattern across the sample — it does not prove that either variable caused the other.*

Correlational research has a genuine strength: it can study relationships that cannot ethically or practically be created in a lab. Nobody is going to randomly assign infants to neglectful versus attentive caregiving to study attachment, so what we know about attachment and later relationship functioning comes substantially from correlational work, with appropriate caveats.

Those caveats matter, because correlational data alone cannot establish what is causing what.

---

#### Do Not Confuse: Correlation vs. Causation

Children's shoe size and reading ability are positively correlated — kids with bigger feet tend to read better. Bigger feet do not improve reading comprehension. Both shoe size and reading ability increase with **age**, which is doing the actual causal work. Age is a **third variable** — something correlated with both measured variables that produces the appearance of a direct relationship where none exists.

Causal alternatives for a correlation include X causing Y, Y causing X, and one or more third variables influencing both. More than one of those processes can operate at once. The simple association alone cannot distinguish among them.

![Figure 2.4 — Diagram showing Age as a third variable with arrows pointing to both Shoe Size and Reading Ability. A dashed line marks the association between shoe size and reading ability as correlated but not necessarily causal, illustrating that both measured variables change with age rather than one directly causing the other.](../images/ch02/ch02_third_variable_age_shoe_size_reading.png)
*Figure 2.4. A third variable can create a misleading association. Older children tend to have both larger feet and stronger reading skills, so shoe size and reading ability are correlated. Age explains why they change together; larger feet do not cause better reading.*

*Diagnostic question:* A study finds that teenagers who play more violent video games report more aggressive behavior. A news article concludes that violent games cause aggression. What is at least one alternative explanation the article is ignoring? *(Reverse causation — already-aggressive teens may be drawn to violent games — or a third variable, such as family conflict or impulsivity, independently increasing both.)*

**Try it yourself:** the [Correlation vs. Causation Classifier](../labs/ch02/correlation-causation.html) lets you examine fictional headlines, reveal the underlying study designs, and judge causal support, reverse causation, and third-variable alternatives separately.

---

Two further problems concern *who* ends up in your sample.

**Random sampling** means every member of the population you are studying has an equal chance of being selected. It supports population representativeness and therefore one important component of **external validity** — whether a result generalizes beyond the particular study. External validity also depends on the settings, measures, treatments, attrition patterns, and processes involved: a representative sample cannot make an artificial task realistic or guarantee that an effect travels across contexts. True random sampling is difficult and expensive, which is part of why so much psychology research has historically relied on whoever was willing and available. This pattern has been influentially summarized as the **WEIRD** problem: a large share of psychology's research base draws from people who are Western, Educated, Industrialized, Rich, and Democratic — a narrow and unusual slice of humanity to generalize claims about "human" behavior from (Henrich, Heine, & Norenzayan, 2010).

This connects to **volunteer bias** (sometimes called **sampling bias** more broadly): the systematic difference between people who agree to participate in research and the population a researcher actually wants to draw conclusions about. People who volunteer for psychology studies are not a random slice of the population — they differ in personality, motivation, and circumstance from people who do not volunteer, a pattern documented across decades of methodological research (Rosenthal & Rosnow, 1975) and still relevant to how findings should be read today (Chance & Rossman, 2026; Mehl, 2026).

> **Think About It:** A large language model's training data has a version of this same problem — it overrepresents recent English-language internet text and the people who had the time, access, and inclination to write it, which is a different population than "everything any human has ever known." Sampling bias and training-data bias are the same underlying shape: who ends up in the data determines what conclusions the data can support.

> **Stop and Retrieve:** Random sampling supports population representativeness, one part of external validity. Section 3 introduces random *assignment*, which supports a causal inference within the study. Before reading on — what do you think the difference is?

---

## Section 3: Experiments and Causal Claims

Correlational research can tell you that two things are related. A randomized **experiment** provides psychology's clearest ordinary basis for concluding that one thing *causes* another.

An experiment works by deliberately manipulating one variable and measuring its effect on another, while holding everything else as constant as possible. The variable the researcher manipulates is the **independent variable (IV)** — the suspected cause. The variable the researcher measures afterward is the **dependent variable (DV)** — the suspected effect. Participants who receive the manipulation make up the **experimental group**; the **control group** is the comparison condition evaluated against it — sometimes participants who receive no manipulation at all, sometimes participants who receive a placebo or an alternative treatment, whichever gives the researcher the baseline the question requires.

The feature that separates a randomized experiment from a correlational study is **random assignment**: participants are assigned to conditions entirely by chance, not by any characteristic of their own. Randomization balances participant characteristics *in expectation*. In the groups that actually form, chance differences can remain, especially in small samples, but systematic preexisting differences become unlikely. An outcome difference can therefore be attributed more confidently to the manipulation when the study is otherwise well-conducted and analyzed. Randomization does not repair uneven dropout, contamination between conditions, poor measurement, failed manipulation, or a biased analysis. Those features also matter for **internal validity** — how strongly the study supports the conclusion that the manipulation, rather than another factor, produced the observed difference.

Random assignment is not the only route by which researchers ever reason about causes. Natural experiments, strong quasi-experiments, and some longitudinal designs can support causal conclusions when their structure and assumptions make alternative explanations implausible. Those designs require more argument than the randomized experiment does, so this chapter keeps the randomized experiment as the clearest introductory model without pretending it is the only causal tool researchers have (Shadish et al., 2002).

Random sampling and random assignment solve different problems at different stages of a study, even though both involve the word "random." Random *sampling* (Section 2) is about who gets *into* the study, and supports population representativeness. Random *assignment* (here) is about how participants already in the study get *divided*, and supports a causal claim within it. A study can have one without the other. Neither feature, by itself, settles every question about internal or external validity.

![Figure 2.5 — A flow diagram shows a population leading through random sampling to a study sample, then through random assignment to an experimental group and a control group. Labels distinguish who enters the study from who enters each condition.](../images/ch02/fig2-5-random-sampling-vs-assignment.svg)
*Figure 2.5. Random sampling and random assignment answer different research-design questions. Random sampling determines who gets into the study and supports population representativeness, one component of external validity. Random assignment determines who goes into which condition, balances participant characteristics in expectation, and strengthens causal inference within the study.*

**Worked example: the hot sauce paradigm.** The hot sauce allocation task was first used by McGregor and colleagues (1998) in terror-management research, testing whether reminding people of their own mortality increases aggression toward someone who threatens their cultural worldview. Participants who wrote about their own death, then encountered someone who criticized their political views, allocated more hot sauce to that person than participants who had written about a neutral topic. Lieberman and colleagues (1999) then formalized hot sauce allocation as a general laboratory measure of aggression, independent of the terror-management question that introduced it — establishing it as a reusable tool other researchers could apply to different questions, rather than a one-off solution.

The logic solves a real problem: "aggression" is not directly observable, and you cannot ethically let participants actually hurt each other. The operational definition is the amount of hot sauce a participant allocates to someone described as disliking spicy food, who will have to consume whatever is given. Working through the design: the **IV** is whichever manipulation varies between groups — for instance, a mortality reminder versus a neutral prompt. The **DV** is the amount of hot sauce allocated. The **control group** receives the neutral prompt. **Random assignment** makes it unlikely that mortality-reminder participants were systematically more aggressive people to begin with — strengthening internal validity for the causal claim.

Now return to the two questions from Section 1. *Are hot sauce scores reliable enough for this use?* A simple test–retest question may not fit a reactive behavioral task: repeating the procedure can change what participants expect or how they respond. Researchers instead need evidence that the observed score is sufficiently consistent under the conditions relevant to the intended interpretation — for example, across comparable trials, raters, or versions of the task. *What interpretation does the validity evidence support?* Allocating hot sauce to someone who dislikes spicy food plausibly captures willingness to cause discomfort, but a methodological critique of laboratory aggression paradigms has specifically questioned whether the task might instead reflect something adjacent to aggression — like indifference to wasting a condiment, or a norm violation that reads as transgressive without being aggressive in the way a punch or an insult is (Ritter & Eslea, 2005). This is not a flaw unique to this measure; it is the normal condition of operationalizing any psychological construct, and it is exactly why reliability and validity evidence must be evaluated for a particular interpretation and use rather than stamped onto a measure once and assumed forever after.

![Figure 2.6 — Flowchart from sample of participants, through random assignment, branching into experimental group (IV: mortality-reminder prompt) and control group (neutral prompt), both measured on the same DV: hot sauce allocated.](../images/ch02/fig_experiment_flowchart.svg)
*Figure 2.6. The logic of a randomized experiment, mapped onto the hot sauce paradigm. Participants enter conditions by chance; the researcher manipulates the prompt and measures hot sauce allocation in both groups. Randomization strengthens the causal comparison but does not substitute for sound measurement, implementation, or analysis.*

> **Stop and Retrieve:** A researcher wants to know whether sleep deprivation increases hot sauce allocation. Participants are randomly assigned to either a full night's sleep or a sleep-restricted night, then complete the hot sauce task the next day. Identify the IV, the DV, and which alternative explanation random assignment makes less plausible in this design.

---

## Section 4: Bias Controls and Research Ethics

A randomized design makes systematic preexisting differences between groups unlikely, but two further sources of bias can still distort a clean experiment, and a separate set of ethical obligations constrains the whole enterprise regardless of how clean the design is.

A **placebo** is an inactive treatment or simulated procedure used as a comparison condition. The **placebo effect** is the change attributable to receiving the treatment context or ritual relative to an appropriate control. Expectation, learning, conditioning, the patient–clinician interaction, and reporting processes may all contribute; the label does not name one universal mechanism. An influential 1955 paper claimed roughly a third of patients improve on placebo alone (Beecher, 1955), but more rigorous later reviews comparing placebo against no treatment found little to no average effect on objective outcomes, with modest and inconsistent effects more often detected in subjective, self-reported outcomes (Hróbjartsson & Gøtzsche, 2001, 2010). Treat that contrast itself as a small case study in this chapter's argument: a single influential finding is not the same as a finding that has held up.

One well-designed study makes the same point more concretely, and adds a distinction worth keeping separate. Wechsler and colleagues (2011) randomly assigned asthma patients to an active albuterol inhaler, a placebo inhaler, sham acupuncture, or no intervention, then measured both objective lung function (forced expiratory volume, FEV₁) and patients' reported improvement. Only albuterol improved objective lung function — about 20%, versus roughly 7% for the other three conditions. But on self-reported improvement, albuterol, the placebo inhaler, and sham acupuncture were statistically indistinguishable from each other — about 50%, 45%, and 46% — and all three beat the no-intervention control's 21%. This separates the **placebo response** (everything that changes in a placebo group: natural recovery, symptom fluctuation, reporting, and any genuine placebo effect, all mixed together) from the **placebo effect** specifically (the increment associated with the placebo ritual or procedure relative to an appropriate comparison) — which is why a no-intervention arm, not just a placebo arm, is needed here to estimate it. Participants in the placebo conditions reported improvement while their objective airway function did not improve. The subjective outcome is still an outcome; it is not unreal simply because the physiological measure did not change. Only the four-way comparison design tells you which kind of change you are looking at. (This was a small pilot study — 46 patients randomized, 39 completed — so treat the specific numbers as illustrating the pattern rather than as a large, precisely estimated finding.)

![Figure 2.7 — Two-panel bar chart based on a four-condition asthma study comparing active albuterol, a placebo inhaler, sham acupuncture, and no intervention. The left panel shows objective improvement in lung function: active albuterol improves FEV1 by about 20 percent, while the other three conditions are each near 7 percent. The right panel shows subjective symptom improvement: about 50 percent report substantial improvement with albuterol, 45 percent with the placebo inhaler, 46 percent with sham acupuncture, and 21 percent with no intervention. A definition strip explains that placebo response includes all change in the placebo group, while placebo effect refers to the difference between placebo and no treatment.](../images/ch02/ch02_placebo_response_vs_effect_asthma.png)
*Figure 2.7. Placebo response and placebo effect are not the same thing. In this asthma study, active albuterol produced a substantial improvement in objectively measured lung function, whereas the placebo inhaler, sham acupuncture, and no-intervention conditions produced little objective change. Subjective reports differed: participants often reported feeling better after both active and placebo treatments. The placebo response includes all change observed in a placebo condition; the placebo effect is the additional change associated with receiving the placebo ritual or procedure compared with receiving no intervention. Source: Wechsler et al. (2011), doi:10.1056/NEJMoa1103319.*

The **double-blind procedure** goes a step further: neither the participant nor the researcher interacting with them knows who is in which group. This guards against participants behaving differently because they know what they are "supposed" to feel, and against researchers unconsciously treating groups differently. That second risk is not hypothetical — it is named directly after a horse. Clever Hans appeared to solve arithmetic by tapping a hoof, until investigation revealed he was reading unconscious postural cues from his questioner, who unknowingly signaled the correct answer (Pfungst, 1965/1911). Blinding exists because researchers are not immune to doing the human equivalent without realizing it — a direct descendant of the confirmation bias discussed in Chapter 1.

Running any experiment on human participants also carries an ethical obligation that constrains every design choice above, regardless of how methodologically clean it is.

| Safeguard | What it protects against |
|---|---|
| Informed consent | Participants agreeing to take part without understanding what the study involves or what risks are reasonably foreseeable |
| IRB review | Researchers being the sole judge of whether their own study is ethically acceptable |
| Belmont principles (respect for persons, beneficence, justice) | Research that treats participants as a means to an end, ignores risk/benefit balance, or unfairly selects vulnerable populations |
| Debriefing | Participants leaving a study deceived, confused, or distressed without explanation |

**Informed consent** means participants receive the information needed to decide voluntarily whether to take part, including what the study involves and what risks are reasonably foreseeable. At colleges, universities, hospitals, and other research institutions, covered research involving human participants is submitted for **Institutional Review Board (IRB)** determination before it begins — not because researchers cannot be trusted, but because an independent body, rather than the research team itself, is positioned to evaluate the design. Some projects may be exempt from parts of the regulations or qualify for expedited rather than full-board review, but researchers do not simply self-certify that covered human-subjects research is ethically acceptable (U.S. Department of Health and Human Services, 2018). The U.S. Public Health Service study of untreated syphilis at Tuskegee involved deception, withholding of information and available treatment, unjust selection of Black men in rural Alabama, and no meaningful informed consent (Centers for Disease Control and Prevention, 2024). The National Research Act of 1974 strengthened independent oversight after abuses including Tuskegee, and the Belmont Report articulated the ethical framework IRBs still apply: respect for persons, beneficence, and justice (National Commission for the Protection of Human Subjects, 1979).

The hot sauce paradigm itself typically involves mild **deception** — participants are not always told the study concerns aggression, since knowing the real purpose would change how they behave — which is why a full **debriefing**, explaining the study's actual purpose and confirming no one was harmed, is a required part of the procedure once data collection ends.

### Animal Research: Ethics Is Part of the Design

The same logic reaches back to the animal behavioral ecology that opened this chapter. In the United States, covered animal research receives independent **Institutional Animal Care and Use Committee (IACUC)** oversight under federal policy and regulation. A good protocol also works through the **Three Rs**: replacement (use a non-animal method when it can answer the question), reduction (use no more animals than a sound design requires), and refinement (change procedures to minimize pain, distress, and disruption) (Office of Laboratory Animal Welfare, 2025). These constraints are not paperwork added after the scientific design. A study that uses the wrong model, unnecessary animals, or avoidable distress is ethically weaker and often scientifically weaker too.

> **Think About It:** Imagine you are an IRB member reviewing the hot sauce study design before it could run. What is the actual risk to participants, and why might a reviewer judge it acceptable despite the deception involved?

---

## Section 5: Knowing What to Believe — Statistics, Significance, and Replication

A finished study produces a pile of numbers, and two different jobs need to be done with them. **Descriptive statistics** summarize and organize a data set — the mean, the standard deviation, a percentage. They describe *this* sample. **Inferential statistics** use sample data and a statistical model to estimate what the data support about a broader population or process, including the uncertainty in that inference.

| Quantity | What it tells you | Common mistake |
|---|---|---|
| Center | A typical value, often summarized with a mean or median | Reporting the average as though everyone scored near it |
| Variability | How spread out the observations are, often summarized with a range or standard deviation | Ignoring that two groups can share a mean but differ greatly in spread |
| Effect magnitude | How large a difference or relationship is on a meaningful or standardized scale | Treating statistical significance as evidence that an effect is large |
| Uncertainty | How precisely the effect has been estimated, often summarized with a confidence interval | Treating an interval as a guarantee or using it as a binary truth test |

The most commonly reported inferential result in psychology is **statistical significance**, usually reported as a *p*-value. A *p*-value tells us how incompatible the observed data are with a specified null model — typically, the assumption that no real effect exists — assuming that model and its underlying assumptions are appropriate (Wasserstein & Lazar, 2016). That is a precise and limited claim. A *p*-value does **not** tell you the probability that your hypothesis is true, the probability the finding is real, the size of the effect, or whether the finding will replicate. Conventionally, *p* < .05 is treated as the threshold for "significant" — meaning that if there were truly no effect, a result this extreme would occur by chance less than 5% of the time.

![Figure 2.8 — A slide titled "What a p-value does - and does not - tell you." Left panel (blue): one correct interpretation — how unusual the observed data are under the null model, assuming the model is appropriate. Right panel: four incorrect interpretations marked with X: probability the hypothesis is true, effect size, practical importance, and whether the finding will replicate.](../images/ch02/fig_p_value_misconceptions.svg)
*Figure 2.8. A p-value describes how unusual the observed data would be under the null model, assuming the model is appropriate. It does not tell whether the hypothesis is true, how large or important an effect is, or whether a finding will replicate.*

> **Do Not Confuse: Type I vs. Type II Errors:** A **Type I error** is a false positive: concluding that an effect exists when it does not. A **Type II error** is a false negative: missing an effect that does exist (Neyman & Pearson, 1933). Tightening a decision threshold can reduce false positives while increasing false negatives when other features of the study stay fixed. **Statistical power** is the probability that a study will detect an effect of a specified size when that effect is present; larger samples often increase it.

It is tempting to read "5% false-positive rate" as "5% of published findings are false," but that is not quite right either. Under ideal conditions, a .05 threshold means some null effects will appear significant by chance alone, simply because thousands of studies are run every year. In the real published literature, that baseline problem can be amplified by small sample sizes, unreported analyses that never make it into the paper, publication bias toward positive results, and a habit of treating "statistically significant" as more definitive than the term was ever meant to claim.

### Beyond Significance: Effect Size and Confidence Intervals

A *p*-value answers one specific question — is this result unlikely under the null model? — and stops there. Two further questions matter just as much for deciding whether a finding is worth caring about.

**Effect size** asks how large the result actually is. **Confidence intervals** show the range of plausible values for the true effect, given the data and the statistical model used to analyze it — not certainty about a single number, but a calibrated range.

These matter because significance and size are not the same thing. A tiny, practically unimportant effect can reach statistical significance if the sample is large enough. Conversely, a meaningful effect can fail to reach significance in a small or noisy sample because the estimate is too uncertain. A result's *p*-value, by itself, cannot tell you which situation you are looking at; effect size and confidence intervals can.

![Figure 2.9 — Three-row dot-and-whisker diagram using fictional training-program results. The first row, Tiny and precise, shows a small positive dot with a short horizontal interval. The second row, Promising but uncertain, shows a positive dot with a very wide interval extending across the vertical zero line into negative and positive values. The third row, Moderate and precise, shows a larger positive dot with a narrower interval entirely to the positive side of zero. A legend states that the dot is the estimated effect size and the line is the confidence interval.](../images/ch02/ch02_effect_size_confidence_intervals_magnitude_uncertainty.png)
*Figure 2.9. Effect size tells us how much; a confidence interval shows how uncertain the estimate is. The dot marks the estimated direction and magnitude of an effect, while the horizontal line shows a range of values compatible with the data and statistical model. A narrow interval can precisely estimate a very small effect. A wide interval can leave negative, zero, and positive effects compatible with the data. Magnitude and uncertainty therefore answer different questions.*

Even a well-designed, significant, properly randomized single study is not the end of the story. **Replication** — repeating a study, ideally with a new sample, to see whether the result holds up — is what actually builds confidence in a finding, not any individual result. Chapter 1 introduced the replication crisis: beginning around 2011, systematic attempts to replicate published psychological findings revealed that a substantial number did not hold up (Open Science Collaboration, 2015). The methods in this chapter are not a guarantee against that outcome. Replication is the check on that risk — not any single design feature, however careful.

> **Think About It:** Has a study result you encountered outside of class — in the news, on social media, in a supplement or product claim — turned out, on a closer look, to rest on a single unreplicated study, a correlation reported as causation, or a sample too narrow to generalize from?

---

## Chapter Summary

Psychology answers different kinds of questions with different methods, and matching the method to the question is the central skill of this chapter — summarized in the research-cycle table near the start. Descriptive methods describe what is happening but cannot identify causes by themselves, and depend on precise operational definitions to be usable at all. Once a concept is operationalized, researchers need evidence about the consistency or precision of observed scores and about whether theory and evidence support the intended interpretation and use. Inadequate reliability limits strong validity claims.

Correlational research quantifies how strongly two variables move together, but a simple association cannot distinguish among causal direction and third-variable alternatives. Random sampling supports population representativeness, one component of external validity, while volunteer bias and the broader WEIRD-sample problem can undermine generalization even in well-analyzed studies. Settings, measures, treatments, and attrition matter too.

Randomized experiments provide psychology's clearest ordinary basis for causal inference through manipulation of an independent variable, measurement of a dependent variable, and random assignment, which makes systematic preexisting differences unlikely. Other causal designs can sometimes support causal conclusions with additional structure and assumptions. Placebo controls and double-blind procedures reduce further sources of bias. Ethical constraints are part of the design: human research requires appropriate consent and independent review, and covered animal research requires independent oversight plus attention to replacement, reduction, and refinement.

Once data exist, descriptive statistics summarize the sample, and inferential statistics estimate what it tells you about the population — most visibly through statistical significance, a narrow claim about the probability of the data under a null model, not a measure of a finding's size, importance, or truth. Effect size and confidence intervals answer the questions a p-value cannot: how large is this, and how precisely do we know it? Because any individual study carries some chance of error, replication — not any single result — is what ultimately earns a finding scientific trust.

---

## Connections

| Concept from this chapter | Reappears in | Why it matters there |
|---|---|---|
| [Correlation vs. causation / third-variable problem](#section-2-the-trap-of-together-means-together) | Ch. 11 — Social Psychology | Classic correlational findings on media violence and aggression are exactly the kind of result this chapter teaches you to interrogate before accepting a causal story |
| [Hot sauce paradigm / experimental aggression manipulation](#section-3-experiments-and-causal-claims) | Ch. 11 — Social Psychology | The same operationalization problem — how to measure aggression without anyone getting hurt — recurs throughout the social psychology literature on frustration and aggression |
| [Reliability and validity](#two-more-questions-every-measure-has-to-answer) | Ch. 9 — Thinking, Language & Intelligence | IQ test standardization is the clearest applied case of these two questions — a test can be highly reliable while its validity as a measure of "intelligence" remains genuinely contested |
| [Placebo effect](#section-4-bias-controls-and-research-ethics) | Ch. 13 — Psychological Disorders & Therapy | Treatment claims require an appropriate comparison; placebo or attention controls can help separate a treatment's specific ingredients from context, ritual, expectation, and change over time |
| [Volunteer bias / WEIRD samples](#section-2-the-trap-of-together-means-together) | Ch. 10 — Lifespan Development | Longitudinal studies lose participants non-randomly over years of follow-up, which can quietly bias conclusions about how people change across the lifespan |
| [Effect size and statistical significance](#beyond-significance-effect-size-and-confidence-intervals) | Ch. 6 — Learning | Effect sizes in reinforcement-schedule research, not significance alone, determine which findings about what actually strengthens behavior get taken seriously |
| [Double-blind procedure / observer-expectancy effects](#section-4-bias-controls-and-research-ethics) | Ch. 1 — History & Approaches | This method exists specifically to guard against the confirmation bias discussed in Chapter 1 — Clever Hans is confirmation bias with hooves |
| [Replication](#section-5-knowing-what-to-believe-statistics-significance-and-replication) | Ch. 1 — History & Approaches | Chapter 1 introduced the replication crisis as evidence the field is self-correcting; this chapter explains the statistical reason any single study needs that check |

---

## Review Questions

**1.** A researcher finds that people who own more houseplants report lower stress levels. Which is the most accurate interpretation?

a) Owning houseplants reduces stress
b) Lower stress causes people to buy more houseplants
c) The two variables are correlated, but the direction of causation — if any — cannot be determined from this data alone
d) The finding is meaningless because correlations are never useful in psychology

*Answer: c. Why (a) and (b) are tempting: both are possible, but so is a third variable (income, free time, life stability) influencing both — the data alone cannot adjudicate. (d) overcorrects; correlational findings are genuinely useful for relationships that cannot be experimentally manipulated.*

---

**2.** Which method would be most appropriate for studying how children naturally resolve conflicts during unstructured play, preserving authentic behavior?

a) A controlled laboratory experiment
b) A case study of one child
c) Naturalistic observation
d) A double-blind survey

*Answer: c. (a) risks disrupting the behavior under study; (b) cannot establish how children in general behave; (d) is not a real method — "double-blind" applies to experiments, not surveys.*

---

**3.** A researcher develops a new questionnaire to measure "test anxiety." Students who retake the questionnaire a week later get nearly identical scores each time, but follow-up interviews suggest the questionnaire is actually capturing general nervousness rather than anything specific to testing. Which conclusion best fits the evidence?

a) The scores appear consistent across occasions, but the evidence does not support interpreting them specifically as scores of test anxiety.
b) The scores appear inconsistent across occasions, but the evidence supports interpreting them specifically as scores of test anxiety.
c) The scores appear consistent across occasions, and consistency alone supports interpreting them specifically as scores of test anxiety.
d) The scores appear inconsistent across occasions, and the interviews show that they measure neither anxiety nor nervousness.

*Answer: a. Nearly identical scores across retakes are evidence of reliability, or consistency under these conditions. But validity concerns whether evidence and theory support a particular interpretation and use of scores. Here, the interviews do not support the intended interpretation of these scores as specifically measuring test anxiety.*

---

**4.** Random assignment primarily supports which kind of validity, and why?

a) External validity, because it makes the sample more representative of the population
b) Internal validity, because it balances participant characteristics in expectation and makes systematic preexisting differences unlikely
c) External validity, because it guarantees statistical significance
d) Internal validity, because it eliminates the need for a control group

*Answer: b. Why (a) is tempting: representativeness is the job of random *sampling*, a related but distinct concept. Random assignment strengthens causal inference within the study; it does not guarantee perfectly equivalent realized groups or generalizability beyond them.*

---

**5.** A study gives one group a real pill and another a sugar pill, with neither participants nor administering researchers told which is which. This design controls for:

a) random sampling error
b) both participant expectation effects and researcher expectation effects
c) only the placebo effect
d) Type I error specifically

*Answer: b. The placebo control alone addresses participant expectation; the "double" in double-blind specifically adds protection against researcher-side bias — the Clever Hans problem — that a single-blind design would not catch.*

---

**6.** Which statement most accurately describes the role of IRB review?

a) Every human-participants study must undergo the same full review process with no exceptions
b) Research involving human participants is normally submitted for IRB determination before it begins, though some minimal-risk projects may qualify for exempt or expedited review
c) IRB review is a formality that has no effect on study design
d) Researchers are trusted to determine for themselves whether their own study is ethical

*Answer: b. Why (a) is tempting: it overstates the rule — not every study requires the same intensity of review, but the underlying principle (researchers do not self-certify) holds in every case.*

---

**7.** A *p*-value of .03 for a study result means:

a) There is a 97% chance the finding is true
b) The effect is large and practically important
c) The observed data are unlikely under the assumption that no real effect exists, given the statistical model used
d) The study has been successfully replicated

*Answer: c. (a) is the single most common misinterpretation of a p-value — it is not a statement about the probability the hypothesis is true.*

---

**8.** A study finds a statistically significant effect (p < .05) in a sample of 50,000 participants, but the effect size is extremely small. The most accurate conclusion is:

a) The finding is definitely important because it reached significance
b) Statistical significance and practical importance are not the same thing — a large enough sample can make even a trivial effect statistically significant
c) The result must be a Type I error
d) Effect size is irrelevant once significance is established

*Answer: b. Why (c) is tempting: it is possible, but not the most accurate conclusion — a tiny, statistically significant effect in a huge sample is exactly the expected, unremarkable outcome of how significance testing interacts with sample size, not necessarily evidence of an error.*

---

**9.** A psychology study recruits participants entirely from introductory psychology students at one university. The most accurate criticism of this sample is that it:

a) is too large to analyze properly
b) lacks random assignment
c) may not generalize well due to volunteer bias and the WEIRD-sample problem
d) cannot produce a correlation coefficient

*Answer: c. Why (b) is tempting: random assignment concerns how participants are divided into groups once recruited, not who gets recruited in the first place — this sample's problem is at the recruitment stage.*

---

**10.** Two studies estimate the same moderate effect. Study A reports a narrow confidence interval entirely above zero; Study B reports a very wide interval that includes negative, zero, and positive effects. What is the best conclusion?

a) Study B proves there is no effect because its interval includes zero
b) Study A's estimate is more precise, while Study B leaves much more uncertainty about the effect's direction and magnitude
c) Both studies are equally informative because their point estimates match
d) Study A's narrow interval guarantees that its design and measurement were unbiased

*Answer: b. Why (a) is tempting: it turns an interval into a binary truth test. Why (d) is tempting: precision addresses random uncertainty, not systematic bias, poor measurement, or a flawed design.*

---

**11.** Why does a single well-designed, statistically significant study not, by itself, establish that a finding will replicate?

a) Significance testing permits some false positives by design, and any individual study carries some chance of being one of them
b) Single studies are always poorly designed
c) Statistical significance has nothing to do with reliability
d) Only correlational studies need replication; experiments do not

*Answer: a. (d) is wrong: experiments are less vulnerable to some confounds than correlational studies, but they are not immune to the basic statistical fact that any threshold permits some false positives — replication matters for both.*

---

## Key Terms

**Case study** — An intensive examination of a single individual or small group, useful for rare or unusually informative cases but unable to establish how common a phenomenon is or to rule out alternative explanations.

**Confidence interval** — A range of plausible values for a true population effect, given the data and the statistical model used to estimate it.

**Control group** — The comparison condition in an experiment against which the experimental condition is evaluated; depending on the design, this may mean no manipulation at all, a placebo, or an alternative treatment.

**Convergence** — When descriptive research turns up a similar pattern across different samples, methods, or contexts; convergence makes a phenomenon harder to dismiss as an accident, but does not by itself establish what causes it.

**Correlation coefficient** — A statistic, ranging from −1.00 to +1.00, describing the strength and direction of the relationship between two variables.

**Dependent variable (DV)** — The variable measured in an experiment; the presumed effect.

**Double-blind procedure** — A design in which neither participants nor the researchers interacting with them know who is in which condition.

**Effect size** — A quantitative measure of how large a result is, independent of whether it reaches statistical significance.

**External validity** — The degree to which a study's results generalize across relevant people, settings, measures, treatments, and contexts; population representativeness is one component.

**Independent variable (IV)** — The variable deliberately manipulated by the researcher; the presumed cause.

**Informed consent** — The ethical requirement that participants be told, in advance, what a study involves and what risks are reasonably foreseeable.

**Institutional Animal Care and Use Committee (IACUC)** — An independent institutional committee that oversees covered animal research and the humane care and use of animals.

**Institutional Review Board (IRB)** — An independent committee that reviews covered research involving human participants before it begins.

**Internal validity** — The degree to which a study supports the conclusion that the manipulation, rather than another factor, produced the observed effect; random assignment is one major support.

**Naturalistic observation** — Watching and recording behavior as it occurs in its normal environment, without interference.

**Operational definition** — A precise, measurable specification of exactly what a researcher means by a concept.

**Placebo / placebo effect** — A placebo is an inactive treatment or simulated procedure used for comparison; a placebo effect is change attributable to treatment context or ritual relative to an appropriate control, potentially involving expectation, learning, conditioning, interaction, or reporting processes.

**Placebo response** — Everything that changes in a group receiving a placebo, including natural recovery, symptom fluctuation, reporting changes, and any genuine placebo effect; estimating the placebo effect requires an appropriate comparison condition.

**Random assignment** — Assigning enrolled participants to conditions by chance, balancing participant characteristics in expectation and strengthening causal inference.

**Random sampling** — Selecting participants such that every member of the population has an equal chance of being chosen, supporting population representativeness and one component of external validity.

**Reliability** — The consistency or precision of observed scores under specified conditions.

**Replication** — Repeating a study, ideally with a new sample, to determine whether a finding holds up.

**Statistical power** — The probability that a study will detect an effect of a specified size when that effect is present.

**Statistical significance** — A finding's estimated incompatibility with a specified null model, commonly reported as a *p*-value; not a measure of a finding's size, importance, or truth.

**Third-variable problem** — The possibility that an observed correlation is produced by a separate variable influencing both measured variables, rather than either causing the other.

**Three Rs** — The animal-research principles of replacement, reduction, and refinement.

**Type I error** — Concluding an effect exists when it does not; a false positive.

**Type II error** — Concluding an effect does not exist when it does; a false negative.

**Validity** — The extent to which evidence and theory support an intended interpretation and use of observed scores.

**Volunteer bias / sampling bias** — The systematic difference between people who agree to participate in research and the broader population a researcher wants to draw conclusions about.

---

## Further Reading

**Noba Project — Statistical Thinking** (Chance & Rossman, 2026)
https://nobaproject.com/modules/statistical-thinking
Open-access treatment of sampling, distributions, and inferential logic, with more statistical depth than this chapter provides.

**Noba Project — Conducting Psychology Research in the Real World** (Mehl, 2026)
https://nobaproject.com/modules/conducting-psychology-research-in-the-real-world
Covers ecological validity and real-world methodological tradeoffs not fully developed here.

**HHS Office for Human Research Protections — Read the Belmont Report**
https://www.hhs.gov/ohrp/regulations-and-policy/belmont-report/read-the-belmont-report/index.html
The original 1979 document establishing the ethical framework behind modern IRB review; short and readable.

**The American Statistical Association's Statement on p-Values** (Wasserstein & Lazar, 2016)
https://doi.org/10.1080/00031305.2016.1154108
A short, authoritative, and surprisingly readable corrective to the most common misinterpretations of statistical significance — written for exactly this purpose.

**Open Science Collaboration. (2015). Estimating the reproducibility of psychological science.**
*Science, 349*(6251), aac4716.
The replication-crisis paper introduced in Chapter 1; directly relevant to this chapter's discussion of why any single significant result is not the end of the story.

**Hróbjartsson, A., & Gøtzsche, P. C. (2001, 2010). Is the placebo powerless? / Placebo interventions for all clinical conditions.**
*New England Journal of Medicine, 344*(21), 1594–1602; *Cochrane Database of Systematic Reviews*, CD003974.
The systematic reanalysis (and later Cochrane update) that substantially revised the popular understanding of placebo effects — a good case study in this chapter's own lesson about not trusting a single influential finding without replication.

**Sikora, J., Evans, M. D. R., & Kelley, J. (2019). Scholarly culture: How books in adolescence enhance adult literacy, numeracy and technology skills in 31 societies.**
*Social Science Research, 77*, 1–15.
The study behind this chapter's softened claim about childhood books and adult skills — useful for seeing how a real correlational literature handles confounds rather than just asserting "correlation isn't causation" in the abstract.

---

## References

*Full citations for factual claims made in this chapter, for instructors or students who want to verify or go deeper. Distinct from Further Reading above, which is curated for student exploration rather than completeness.*

American Educational Research Association, American Psychological Association, & National Council on Measurement in Education. (2014). *Standards for educational and psychological testing*. American Educational Research Association. https://www.testingstandards.net/

Beecher, H. K. (1955). The powerful placebo. *JAMA, 159*(17), 1602–1606. https://doi.org/10.1001/jama.1955.02960340022006

Chance, B., & Rossman, A. (2026). Statistical thinking. In R. Biswas-Diener & E. Diener (Eds.), *Noba textbook series: Psychology*. DEF Publishers. https://nobaproject.com/modules/statistical-thinking

Centers for Disease Control and Prevention. (2024, September 4). *About the untreated syphilis study at Tuskegee*. https://www.cdc.gov/tuskegee/about/index.html

Henrich, J., Heine, S. J., & Norenzayan, A. (2010). The weirdest people in the world? *Behavioral and Brain Sciences, 33*(2–3), 61–83. https://doi.org/10.1017/S0140525X0999152X

Hróbjartsson, A., & Gøtzsche, P. C. (2001). Is the placebo powerless? An analysis of clinical trials comparing placebo with no treatment. *New England Journal of Medicine, 344*(21), 1594–1602. https://doi.org/10.1056/NEJM200105243442106

Hróbjartsson, A., & Gøtzsche, P. C. (2010). Placebo interventions for all clinical conditions. *Cochrane Database of Systematic Reviews*, Issue 1, Art. No. CD003974. https://doi.org/10.1002/14651858.CD003974.pub3

Lieberman, J. D., Solomon, S., Greenberg, J., & McGregor, H. A. (1999). A hot new way to measure aggression: Hot sauce allocation. *Aggressive Behavior, 25*(5), 331–348. https://doi.org/10.1002/(SICI)1098-2337(1999)25:5%3C331::AID-AB2%3E3.0.CO;2-1

McGregor, H. A., Lieberman, J. D., Greenberg, J., Solomon, S., Arndt, J., Simon, L., & Pyszczynski, T. (1998). Terror management and aggression: Evidence that mortality salience motivates aggression against worldview-threatening others. *Journal of Personality and Social Psychology, 74*(3), 590–605. https://doi.org/10.1037/0022-3514.74.3.590

Mehl, M. R. (2026). Conducting psychology research in the real world. In R. Biswas-Diener & E. Diener (Eds.), *Noba textbook series: Psychology*. DEF Publishers. https://nobaproject.com/modules/conducting-psychology-research-in-the-real-world

National Commission for the Protection of Human Subjects of Biomedical and Behavioral Research. (1979). *The Belmont Report: Ethical principles and guidelines for the protection of human subjects of research*. U.S. Department of Health, Education, and Welfare.

Neyman, J., & Pearson, E. S. (1933). On the problem of the most efficient tests of statistical hypotheses. *Philosophical Transactions of the Royal Society A, 231*(694–706), 289–337. https://doi.org/10.1098/rsta.1933.0009

Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science, 349*(6251), aac4716. https://doi.org/10.1126/science.aac4716

Office of Laboratory Animal Welfare. (2025). *Alternatives and NAMs*. National Institutes of Health. https://olaw.nih.gov/AlternativesandNAMs

Pfungst, O. (1965). *Clever Hans: The horse of Mr. von Osten* (C. L. Rahn, Trans.; R. Rosenthal, Ed.). Holt, Rinehart and Winston. (Original work published 1911)

Ritter, D., & Eslea, M. (2005). Hot sauce, toy guns, and graffiti: A critical account of current laboratory aggression paradigms. *Aggressive Behavior, 31*(5), 407–419. https://doi.org/10.1002/ab.20066

Rosenthal, R., & Rosnow, R. L. (1975). *The volunteer subject*. Wiley.

Sikora, J., Evans, M. D. R., & Kelley, J. (2019). Scholarly culture: How books in adolescence enhance adult literacy, numeracy and technology skills in 31 societies. *Social Science Research, 77*, 1–15. https://doi.org/10.1016/j.ssresearch.2018.10.003

Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). *Experimental and quasi-experimental designs for generalized causal inference*. Houghton Mifflin.

U.S. Department of Health and Human Services. (2018). *Protection of human subjects, 45 C.F.R. part 46*. https://www.hhs.gov/ohrp/regulations-and-policy/regulations/45-cfr-46/index.html

Wasserstein, R. L., & Lazar, N. A. (2016). The ASA's statement on p-values: Context, process, and purpose. *The American Statistician, 70*(2), 129–133. https://doi.org/10.1080/00031305.2016.1154108

Wechsler, M. E., Kelley, J. M., Boyd, I. O., Dutile, S., Marigowda, G., Kirsch, I., Israel, E., & Kaptchuk, T. J. (2011). Active albuterol or placebo, sham acupuncture, or no intervention in asthma. *New England Journal of Medicine, 365*(2), 119–126. https://doi.org/10.1056/NEJMoa1103319

> **Note on verification:** DOIs above were checked against publisher/Crossref/PubMed records during drafting. The Ritter & Eslea (2005) author order is confirmed via Crossref metadata for the DOI (Ritter listed first, Eslea second). The Noba module citation year (2026) and citation format were rechecked against the modules' current "How to cite" entries on 2026-07-15; Noba modules are living documents. The testing-standards metadata was checked against the joint AERA/APA/NCME standards site; human-research oversight and Tuskegee claims against HHS/OHRP and CDC; and animal-research oversight and the Three Rs against NIH/OLAW. The Sikora et al. (2019) DOI was previously corrected through a direct Crossref title match (10.1016/j.ssresearch.2018.10.003).
