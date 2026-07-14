# Chapter 9 Comparison Draft — Figure Follow-up

Apply these edits only to `source/chapters/09-thinking-language-intelligence-2.md`. Do not modify the authoritative `ch09-thinking-language-intelligence.md` until Jon approves promotion. Update generated HTML only after the comparison source is settled.

## 1. Restore Figure 9.1

Replace the temporary HTML comment after the category-hierarchy paragraph with:

```markdown
![Figure 9.1: A category hierarchy begins with the broad superordinate category Animal, branches to the basic-level categories Dog, Bird, and Fish, and then narrows to the subordinate categories Golden retriever, Robin, and Salmon. The basic-level row is emphasized as the everyday naming default: specific enough to guide action, but broad enough to generalize.](../../images/ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg)
*Figure 9.1. Category hierarchy from superordinate to basic-level to subordinate categories. The basic level is often the everyday naming default. Original figure.*
```

## 2. Retain the Linda conjunction-fallacy example

Keep the Linda/bank-teller passage and its nested-set figure. The example comes from Tversky and Kahneman's published research paradigm, not from commercial textbook copy. It is appropriate to retain as a clearly labeled classic study with the primary-source citation.

Do not replace Linda with the Jordan campus-library/sustainability-club scenario. Do not wire `ch09_conjunction_fallacy_nested_sets.svg` into the chapter. That SVG may remain in the repository as an unused candidate/reference asset, but it is not part of the approved Chapter 9 figure set.

Retain the existing Figure 9.6 path:

```markdown
../../images/ch09/fig_linda_conjunction_fallacy.png
```

Before final promotion, verify that the Linda wording is a concise description of the research task rather than copied commercial-text wording, and retain the Tversky and Kahneman (1983) citation.

## 3. Do not restore the former Figure 9.9

Keep the bias comparison as a Markdown table. Do not wire `fig_bias_question_substitution.png`; it misleadingly implies one shared mechanism.

Because the old Figure 9.9 remains omitted, renumber the IQ standardization figure and caption from Figure 9.10 to Figure 9.9. The existing filename `fig_iq_bell_curve.png` may remain unchanged.

## 4. Update `source/visuals-inventory.md`

Revise the Chapter 9 summary and rows to state:

- Figure 9.1: corrected hierarchy, `ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg`, wired in comparison draft only.
- Figure 9.6: Linda conjunction-fallacy nested-set diagram, `ch09/fig_linda_conjunction_fallacy.png`, retained as the classic research example.
- `ch09/ch09_conjunction_fallacy_nested_sets.svg`: unused candidate/reference; not approved for chapter wiring.
- Former question-substitution figure: held/not approved; replaced by the bias comparison table.
- IQ standardization becomes Figure 9.9 in the comparison draft.
- The authoritative source remains unchanged pending approval of the comparison draft.

## 5. Validation

- Confirm the new Figure 9.1 SVG path exists.
- Confirm Figure 9.1 and all retained figures have non-empty alt text and captions.
- Confirm the comparison draft retains the Linda passage, the Tversky and Kahneman (1983) citation, and `fig_linda_conjunction_fallacy.png`.
- Confirm no Jordan campus example or `ch09_conjunction_fallacy_nested_sets.svg` reference is wired into the chapter.
- Confirm the comparison draft has sequential figure labels 9.1 through 9.9.
- Confirm the authoritative chapter is not modified before promotion is approved.
- Rebuild or patch generated HTML only after the comparison source is finalized, then rerun structural and content validation.
