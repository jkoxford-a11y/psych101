# Chapter 9 Comparison Draft — Figure and Conjunction Follow-up

Apply these edits only to `source/chapters/09-thinking-language-intelligence-2.md`. Do not modify the authoritative `ch09-thinking-language-intelligence.md` or generated HTML yet.

## 1. Restore Figure 9.1

Replace the temporary HTML comment after the category-hierarchy paragraph with:

```markdown
![Figure 9.1: A category hierarchy begins with the broad superordinate category Animal, branches to the basic-level categories Dog, Bird, and Fish, and then narrows to the subordinate categories Golden retriever, Robin, and Salmon. The basic-level row is emphasized as the everyday naming default: specific enough to guide action, but broad enough to generalize.](../../images/ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg)
*Figure 9.1. Category hierarchy from superordinate to basic-level to subordinate categories. The basic level is often the everyday naming default. Original figure.*
```

## 2. Replace the Linda/bank-teller material

Replace the entire passage beginning `The best-known demonstration is the Linda problem:` and ending with the current Linda walkthrough with:

```markdown
Try an original campus version:

> **Stop and Decide**
>
> Jordan carries a reusable water bottle, bikes to class, volunteers at campus cleanups, and regularly argues that the college should reduce its carbon emissions.
>
> Which is more probable?
>
> **A.** Jordan works in the campus library.
>
> **B.** Jordan works in the campus library and belongs to the campus sustainability club.

Option B fits the description better. That feeling of fit is representativeness. But every library worker who belongs to the sustainability club is still a library worker. B describes a smaller subset of A, so it cannot be more probable. Adding a plausible detail can make a story feel better while making it mathematically less likely. This is the **conjunction fallacy** (Tversky & Kahneman, 1983).

![Figure 9.6: A large set labeled All campus library workers contains a smaller nested subset labeled Library workers who also belong to the sustainability club. The diagram shows that every member of Option B is also included in Option A, so the probability of the conjunction cannot exceed the probability of the larger category.](../../images/ch09/ch09_conjunction_fallacy_nested_sets.svg)
*Figure 9.6. A conjunction describes a subset of a larger category. The extra detail may increase representativeness, but it cannot increase probability beyond the containing set. Original figure.*

> **Classic Finding, New Example**
> Tversky and Kahneman's conjunction studies showed that people can rank a detailed, representative conjunction above a broader category that necessarily contains it. The campus case above preserves the logical structure without reusing the familiar published scenario. Frequency and diagrammatic formats often reduce the error (Gigerenzer, 1991), showing that reasoning depends partly on how a problem is represented.
```

Validation: the comparison draft should contain no `Linda`, `bank teller`, or `fig_linda_conjunction_fallacy` strings.

## 3. Do not restore the former Figure 9.9

Keep the bias comparison as a Markdown table. Do not wire `fig_bias_question_substitution.png`; it misleadingly implies one shared mechanism.

Because the old Figure 9.9 remains omitted, renumber the IQ standardization figure and caption from Figure 9.10 to Figure 9.9. The existing filename `fig_iq_bell_curve.png` may remain unchanged.

## 4. Update `source/visuals-inventory.md`

Revise the Chapter 9 summary and rows to state:

- Figure 9.1: corrected hierarchy, `ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg`, wired in comparison draft only.
- Figure 9.6: original campus conjunction nested-set diagram, `ch09/ch09_conjunction_fallacy_nested_sets.svg`, wired in comparison draft only.
- Former question-substitution figure: held/not approved; replaced by the bias comparison table.
- IQ standardization becomes Figure 9.9 in the comparison draft.
- The authoritative chapter and generated HTML remain unchanged pending approval of the comparison draft.

## 5. Validation

- Confirm both new SVG paths exist.
- Confirm non-empty alt text and captions.
- Confirm the comparison draft has sequential figure labels 9.1 through 9.9.
- Confirm the original chapter and generated HTML were not modified.
- Do not update `GPT_project_log.md` until the comparison draft is approved or promoted.
