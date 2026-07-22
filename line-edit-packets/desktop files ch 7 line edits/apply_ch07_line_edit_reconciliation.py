#!/usr/bin/env python3
"""
Apply the approved 2026-07-22 Chapter 7 instructor line-edit reconciliation.

Run from the psych101 repository root:
    python apply_ch07_line_edit_reconciliation.py

Edits only:
    source/chapters/ch07-learning.md
    pipeline/audits/ch07-line-edit-reconciliation-2026-07-22.md

It intentionally does not touch generated HTML, the HTML builder, figures,
visual inventories, HANDOFF.md, GPT_project_log.md, or Git staging.
"""

from __future__ import annotations

from pathlib import Path
import re
import sys

SOURCE = Path("source/chapters/ch07-learning.md")
AUDIT = Path("pipeline/audits/ch07-line-edit-reconciliation-2026-07-22.md")

REPLACEMENTS: list[tuple[str, str, str]] = [
    (
        "where-this-fits",
        """Chapter 6 closed by framing sleep as the model's offline maintenance window — the brain taken off duty to consolidate, restore, and reorganize. This chapter is about the model getting updated while online. In the master loop this book keeps returning to — partial input, prediction, action, outcome, then updating or defense — learning is the revision step made visible. Experience changes what an organism expects and what it does next. The question that organizes the chapter is **why is unlearning often harder than learning?** Extinction shows that new learning can compete with old learning without simply erasing it. Bandura and Tolman show the other side of the same distinction: learning can occur before behavior reveals it. These principles return in Chapter 13, where exposure therapy uses expectancy violation and inhibitory learning rather than deleting fear, and in Chapter 11, where behavior spreads through observation without direct reinforcement of every learner.""",
        """Chapter 4 asked how an organism extracts useful information from its environment. This chapter asks how experience changes which cues and actions matter. In the animal-model sequence, an organism takes in information, learns which events predict food, danger, or opportunity, and stores those relationships for later use. Chapter 8 turns to that final step. The complication here is that behavior is not a transparent readout of learning: organisms can learn without showing it, and old learning can survive after responding declines. Two cases organize the chapter:

- Extinction shows that new learning can compete with old learning without simply erasing it.
- Bandura and Tolman show the other side of the same distinction: learning can occur before behavior reveals it.

These principles return in Chapter 13, where exposure therapy uses expectancy violation and inhibitory learning rather than deleting fear, and in Chapter 11, where behavior can spread through observation without direct reinforcement of every learner."""
    ),
    (
        "learning-objective-7",
        """7. Interpret cue, reward, and omission responses as reward-prediction-error signals, and explain why this evidence does not make dopamine a universal pleasure, uncertainty, or motivation chemical.""",
        """7. Interpret cue, expected-reward, and omission responses as reward-prediction-error signals, and explain why this evidence does not make dopamine a universal pleasure or motivation chemical."""
    ),
    (
        "generalization-discrimination",
        """Two more processes round out the basic toolkit. **Generalization** is the tendency for a CR to occur to stimuli that resemble the original CS. A dog conditioned to one tone may also salivate to a similar tone that was never paired with food. **Discrimination** is learning to respond differently to similar stimuli because they predict different outcomes. These are not opposite theories. They are outcomes of experience: generalization spreads a prediction to similar cues; discrimination narrows it when the environment provides evidence that the cues mean different things.""",
        """Two more processes round out the basic toolkit. **Generalization** is the tendency for a CR to occur to stimuli that resemble the original CS. A dog conditioned to one tone may also salivate to a similar tone that was never paired with food. **Discrimination** is learning to respond differently to similar stimuli because they predict different outcomes. These are not opposite theories. Generalization can occur because two cues are perceptually difficult to distinguish or because the organism has not learned that their differences predict different outcomes. Discrimination requires both detecting a difference and learning that the difference matters. This is where sensation and learning meet: experience can sharpen responding only when the sensory system provides information that can be used."""
    ),
    (
        "little-albert-evidence-and-ethics",
        """The study is historically important, vivid, and ethically disturbing. It is not clean evidence by modern standards. It involved one infant, lacked the controls and standardized response measurement expected today, and produced a record later accounts often exaggerated or simplified. Even the strength and breadth of the reported generalization are difficult to establish from the surviving report and film (Harris, 1979). Little Albert is therefore best treated as an early, flawed illustration of conditioned emotional responding — not as definitive proof of how human phobias develop.

> **Stop and Retrieve:** What did Watson and Rayner claim to demonstrate? Then identify two reasons the study cannot carry the evidential weight that later textbook retellings often give it.

The ethics are less ambiguous. Watson and Rayner deliberately produced distress in an infant who could not consent, and they did not complete a deconditioning procedure before Albert left the hospital. A modern review board would not approve the study. The lasting lesson is therefore double: emotional responses can be shaped by experience, and a memorable demonstration can become a myth when later retellings outrun the quality of the original evidence.

> **Think About It:** Think of an everyday fear, dislike, or preference you have that does not seem fully rational. What learning history could plausibly contribute to it? What evidence would you need before concluding that classical conditioning actually caused it?""",
        """Little Albert is memorable, but it is weak evidence by modern standards: one infant, no control group, inconsistent response measurement, and uncertain generalization. The ethics are clearer. Watson and Rayner deliberately produced distress and did not complete a deconditioning procedure before Albert left the hospital. Treat the study as a historically important, ethically troubling illustration of conditioned emotional responding — not as a definitive explanation of how human phobias develop (Harris, 1979).

> **Stop and Retrieve:** What did Watson and Rayner claim to demonstrate? Then identify two reasons the study cannot carry the evidential weight that later textbook retellings often give it."""
    ),
    (
        "mirror-neuron-detour",
        """**Evidence boundary: mirror neurons.** Single-neuron recordings in macaques identified cells active during both action and observation (di Pellegrino et al., 1992). Human imaging shows overlapping action-observation networks, but this does not prove that mirror neurons explain observational learning, intention understanding, or autism. Bandura's behavioral evidence stands without that neural story; the mirror-neuron literature is useful mainly as a lesson in not turning a suggestive mechanism into the phenomenon itself.

""",
        ""
    ),
    (
        "dopamine-uncertainty-and-wanting-liking",
        """A related but distinct finding concerns uncertainty during a delay. Fiorillo, Tobler, and Schultz (2003) reported sustained activity between cue and possible reward that was greatest near 50% reward probability in their task. That is not the same signal as the brief cue, reward, and omission responses in Figure 7.9. One varies across the waiting period with uncertainty; the other reflects a momentary prediction error. Both are informative, but combining them into one sentence — "dopamine peaks during uncertain anticipation" — erases the distinction the experiments were designed to reveal.

![Figure 7.8. Two dopamine signals must be kept separate. A cue-related phasic response can vary with expected reward value, while sustained activity during the waiting period can be greatest near 50% reward probability, where uncertainty is highest. This schematic refers to the specific delayed-reward task studied by Fiorillo and colleagues, not to dopamine activity everywhere in the brain.](../images/ch07/fig_dopamine_uncertainty_curve.png)

Dopamine also contributes to motivation, action, and incentive salience, but those functions are not identical to reward prediction error. The **wanting–liking distinction** is useful here. Wanting refers to incentive salience — how strongly a cue pulls behavior toward a reward. Liking refers to the hedonic pleasure of receiving it. In addiction, wanting can remain intense even when liking has diminished (Berridge & Robinson, 1998). The distinction helps explain why compulsive pursuit is not simply pleasure seeking, but it should not be treated as one universal dopamine job. Dopamine's effects depend on pathway, cell population, receptor, task, and timescale (Berke, 2018).

> **Stop and Retrieve:** A cue predicts a reward. After learning, what should happen to the phasic signal at the cue, at an expected reward, and when the expected reward is omitted? Answer before looking back at Figure 7.9.

> **Think About It:** Think of something you have strongly wanted after it stopped being especially enjoyable. How does wanting-versus-liking describe the behavior without claiming that one chemical fully explains it?""",
        """#### Do Not Confuse: Wanting vs. Liking

Wanting is the motivational pull a cue or reward exerts on behavior; liking is the pleasure produced by receiving it. They can come apart, including in addiction. The distinction is useful, but it is not one universal account of dopamine: effects depend on pathway, receptor, task, and timescale (Berridge & Robinson, 1998; Berke, 2018).

> **Stop and Retrieve:** A cue predicts a reward. After learning, what should happen to the phasic signal at the cue, at an expected reward, and when the expected reward is omitted? Answer before looking back at Figure 7.9."""
    ),
    (
        "rlhf-detour",
        """#### AI Connection: RLHF Is Selection Without a Motivated Organism

Large language models can be fine-tuned using **reinforcement learning from human feedback (RLHF)**. Human preferences help select outputs that the model becomes more likely to produce. The structural analogy to operant shaping is useful: both processes select progressively better approximations.

The analogy stops before experience and motivation. Mathematical optimization changes model parameters; the model does not feel relief, want a reward, or carry a biological drive state from one trial to the next. RLHF resembles selection by consequences at the level of output probability, not the full psychology of reinforcement in an organism.

""",
        ""
    ),
    (
        "summary-classical",
        """Classical conditioning is learning that one stimulus predicts another. UCS, UCR, CS, and CR identify the unlearned stimulus-response relation and the learned predictive cue. Acquisition depends on predictive contingency, not repetition alone. Extinction weakens responding by adding new, context-sensitive learning; spontaneous recovery and renewal show why reduced responding does not prove erasure. Little Albert remains a historically influential and ethically important illustration, but its single-case design and uneven record cannot carry the weight later textbook retellings often place on it.""",
        """Classical conditioning is learning that one stimulus predicts another. UCS, UCR, CS, and CR identify the unlearned stimulus-response relation and the learned predictive cue. Acquisition depends on predictive contingency, not repetition alone. Extinction weakens responding by adding new, context-sensitive learning; spontaneous recovery and renewal show why reduced responding does not prove erasure. Little Albert is historically influential and ethically important, but its single-case design and uneven record make it an illustration rather than definitive evidence about phobias."""
    ),
    (
        "summary-learning-performance",
        """Learning is constrained and can remain hidden from immediate performance. Garcia and Koelling demonstrated selective cue–consequence learning; an evolutionary history of recurrent ecological pairings is a strong interpretation rather than the observation itself. Bandura showed that observing a model can produce learning before the observer performs the behavior. Tolman and Honzik showed that experience in a maze can matter before reward reveals what was learned.""",
        """Learning is constrained, and current behavior is not a transparent readout of what has been learned. Garcia and Koelling demonstrated selective cue–consequence learning; an evolutionary history of recurrent ecological pairings is a strong interpretation rather than the observation itself. Bandura showed that observing a model can produce learning before the observer performs the behavior. Tolman and Honzik showed that experience in a maze can matter before reward reveals what was learned."""
    ),
    (
        "summary-dopamine",
        """Reward-prediction-error signals provide a neural example of updating: some dopamine neurons respond when outcomes are better or worse than expected and shift their response to predictive cues. Sustained uncertainty-related activity, incentive salience, and motivational vigor are related dopamine findings, not interchangeable names for the same signal. Intrinsic and extrinsic motivation can also interact; external rewards sometimes undermine later free-choice engagement, but not under every condition.""",
        """Reward-prediction-error signals provide a neural example of updating: some dopamine neurons respond when outcomes are better or worse than expected and shift their response to predictive cues. This does not make dopamine a universal pleasure or motivation chemical. Intrinsic and extrinsic motivation can also interact; external rewards sometimes undermine later free-choice engagement, but not under every condition."""
    ),
    (
        "review-question-10",
        """d) The strongest response must occur whenever reward probability is 50%, regardless of when activity is measured  

*Answer: b. Why (d) is tempting: uncertainty-related sustained activity can be greatest near 50% probability in a specific delayed-reward task, but that is distinct from the cue, expected-reward, and omission pattern tested here.*""",
        """d) The signal disappears entirely once learning is complete because no further updating can occur  

*Answer: b. Why (a) is tempting: both the cue and juice matter during learning, but once the cue fully predicts the juice, the phasic error shifts to the cue and the expected juice produces little additional error.*"""
    ),
    (
        "sapolsky-annotation",
        """A vivid public lecture on dopamine and anticipation. Read it as an analogy-rich interpretation, then compare its broader claims with the narrower experimental distinctions in Section 4.""",
        """A vivid public lecture on dopamine and anticipation. Compare its broad framing with the cue, expected-reward, and omission pattern described in Section 4."""
    ),
    (
        "remove-di-pellegrino-reference",
        """di Pellegrino, G., Fadiga, L., Fogassi, L., Gallese, V., & Rizzolatti, G. (1992). Understanding motor events: A neurophysiological study. *Experimental Brain Research, 91*(1), 176–180.

""",
        ""
    ),
    (
        "remove-fiorillo-reference",
        """Fiorillo, C. D., Tobler, P. N., & Schultz, W. (2003). Discrete coding of reward probability and uncertainty by dopamine neurons. *Science, 299*(5614), 1898–1902.

""",
        ""
    ),
]

AUDIT_TEXT = """# Chapter 7 line-edit reconciliation — 2026-07-22

## Status

Approved instructor line edit reconciled into the authoritative Markdown. Generated HTML and figure wiring remain deferred.

## Authority and reference

- Authoritative prose: `source/chapters/ch07-learning.md`
- Instructor record: `line-edit-packets/Chapter_7_Learning_Line_Edit.docx`
- Source snapshot reviewed: 2026-07-19
- Reconciliation decision date: 2026-07-22

## Approved conceptual decisions

1. Use **learning versus observable performance** as the chapter's explicit spine.
2. Replace the online/offline model language in **Where This Fits** with the established animal-model sequence: environmental information → learning → later storage and use.
3. Explain that generalization may reflect perceptual similarity or insufficient differential learning; discrimination requires both detecting a difference and learning that it matters.
4. Condense Little Albert into one evidence-calibrated paragraph plus one retrieval prompt. Do not add the disputed hydrocephalus identification. Keep the thumb-sucking detail out of the chapter.
5. Remove the mirror-neuron detour.
6. Retain reward prediction error as the chapter's neural mechanism; remove the sustained-uncertainty detour and its Figure 7.8 source reference.
7. Convert wanting versus liking into a brief **Do Not Confuse** distinction.
8. Remove the RLHF box because it does not earn its cognitive-load cost here.
9. Align Learning Objective 7, the chapter summary, Review Question 10, Further Reading, and References with those decisions.

## Deliberate exclusions

- Do not edit `docs/chapters/07-learning.html`.
- Do not edit `pipeline/build_chapter_html.mjs`.
- Do not wire, promote, regenerate, renumber, or delete Chapter 7 figure assets in this task.
- The retained prediction-error image remains labeled Figure 7.9 for now; figure numbering is resolved when the paused Chapter 7 image lane resumes.
- Do not stage, commit, push, or clean unrelated working-tree changes.

## Validation expectations

- Each approved replacement applies exactly once.
- `source/chapters/ch07-learning.md` retains 11 review questions.
- `fig_dopamine_prediction_error_schultz.png` remains referenced.
- `fig_dopamine_uncertainty_curve.png`, RLHF prose, and mirror-neuron prose are absent.
- The di Pellegrino (1992) and Fiorillo et al. (2003) references are absent because their supporting prose was removed.
- Berridge and Robinson (1998), Berke (2018), Schultz et al. (1997), and Deci (1971) remain.
- Generated HTML remains unchanged pending figure approval.

## Suggested project-log entry

### 2026-07-22 — Chapter 7 instructor line-edit reconciliation

Reconciled the approved Chapter 7 instructor line edit into `source/chapters/ch07-learning.md`. The chapter now uses learning versus observable performance as its explicit spine; connects generalization and discrimination to perceptual discriminability; condenses Little Albert; removes the mirror-neuron, sustained-uncertainty, and RLHF detours; and retains reward prediction error with a short wanting-versus-liking distinction. Learning Objective 7, the summary, Review Question 10, Further Reading, and References were aligned. `docs/chapters/07-learning.html`, the shared builder, figure assets, and figure wiring were intentionally left unchanged pending the paused Chapter 7 image lane.

## Suggested handoff update

Mark Chapter 7's instructor line edit as reconciled in the authoritative source. Chapters 8–13 remain in the instructor line-edit queue. Keep Chapter 7 HTML regeneration and figure wiring deferred. Note that the uncertainty Figure 7.8 is no longer supported by chapter prose and should be handled only when the Chapter 7 image lane resumes.
"""


def replace_exact(text: str, label: str, old: str, new: str) -> str:
    count = text.count(old)
    if count != 1:
        raise RuntimeError(
            f"{label}: expected exactly one source match, found {count}. "
            "Stop and inspect the live file; do not broaden the replacement."
        )
    return text.replace(old, new, 1)


def main() -> int:
    if not SOURCE.exists():
        print(f"ERROR: {SOURCE} not found. Run from the psych101 repository root.", file=sys.stderr)
        return 2

    original = SOURCE.read_text(encoding="utf-8")
    revised = original

    for label, old, new in REPLACEMENTS:
        revised = replace_exact(revised, label, old, new)

    if revised == original:
        raise RuntimeError("No source changes were produced.")

    # Content validation before writing.
    required = [
        "behavior is not a transparent readout of learning",
        "#### Do Not Confuse: Wanting vs. Liking",
        "fig_dopamine_prediction_error_schultz.png",
        "Berridge, K. C., & Robinson, T. E. (1998)",
        "Berke, J. D. (2018)",
        "Schultz, W., Dayan, P., & Montague, P. R. (1997)",
        "Deci, E. L. (1971)",
    ]
    forbidden = [
        "Evidence boundary: mirror neurons",
        "fig_dopamine_uncertainty_curve.png",
        "reinforcement learning from human feedback (RLHF)",
        "Fiorillo, C. D., Tobler, P. N., & Schultz, W. (2003)",
        "di Pellegrino, G., Fadiga, L., Fogassi, L., Gallese, V., & Rizzolatti, G. (1992)",
    ]

    for needle in required:
        if needle not in revised:
            raise RuntimeError(f"Validation failed: required text missing: {needle}")

    for needle in forbidden:
        if needle in revised:
            raise RuntimeError(f"Validation failed: removed text still present: {needle}")

    question_count = len(re.findall(r"^\*\*\d+\.\*\*", revised, flags=re.MULTILINE))
    if question_count != 11:
        raise RuntimeError(f"Validation failed: expected 11 review questions, found {question_count}")

    SOURCE.write_text(revised, encoding="utf-8", newline="\n")
    AUDIT.parent.mkdir(parents=True, exist_ok=True)
    AUDIT.write_text(AUDIT_TEXT, encoding="utf-8", newline="\n")

    print("Applied Chapter 7 line-edit reconciliation.")
    print(f"Updated: {SOURCE}")
    print(f"Created/updated: {AUDIT}")
    print(f"Review questions: {question_count}")
    print("Intentionally untouched: generated HTML, builder, figures, logs, handoff, Git staging.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
