# Chapter 9 Comparison Draft — Figure Follow-up

Apply these edits only to `source/chapters/09-thinking-language-intelligence-2.md`. Do not modify the authoritative `ch09-thinking-language-intelligence.md` until Jon approves promotion. Update generated HTML only after the comparison source is settled.

## 1. Restore Figure 9.1

Replace the temporary HTML comment after the category-hierarchy paragraph with:

```markdown
![Figure 9.1: A category hierarchy begins with the broad superordinate category Animal, branches to the basic-level categories Dog, Bird, and Fish, and then narrows to the subordinate categories Golden retriever, Robin, and Salmon. The basic-level row is emphasized as the everyday naming default: specific enough to guide action, but broad enough to generalize.](../../images/ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg)
*Figure 9.1. Category hierarchy from superordinate to basic-level to subordinate categories. The basic level is often the everyday naming default. Original figure.*
```

## 2. Keep the Linda/bank-teller material — superseded, do not replace

**Decision reversed 2026-07-14:** Jon decided to keep the Linda/bank-teller conjunction-fallacy passage as-is. Unlike the group-differences or figure issues, Linda is not publisher/commercial-textbook material — it is Tversky and Kahneman's own original research example (1983) — so the copyright-driven replacement rationale doesn't apply here. Do not write the Jordan campus-library/sustainability-club material into `09-thinking-language-intelligence-2.md`. The existing `fig_linda_conjunction_fallacy.svg`/`.png` is already correctly labeled for Linda and needs no replacement; leave Figure 9.6 as originally wired.

The Jordan example and its purpose-built figure remain specified below for the record, but are **not to be applied**:

<details>
<summary>Superseded Jordan replacement (do not apply)</summary>

```markdown
../../images/ch09/fig_linda_conjunction_fallacy.png
```

</details>

**`ch09_conjunction_fallacy_nested_sets.svg` disposition:** the "campus library workers" / "sustainability club" labels are baked directly into this SVG's text elements — it cannot be relabeled for Linda without redrawing. Jon's call: leave the file and its metadata entry in the repo, unused. It is not wired into Chapter 9 and should not be treated as pending work; it's simply an available original asset if a campus-library/sustainability-club example is wanted somewhere else later.

Validation: the comparison draft should still contain the Linda/bank-teller passage unchanged, and should still reference `fig_linda_conjunction_fallacy` — do not strip these.

## 3. Do not restore the former Figure 9.9

Keep the bias comparison as a Markdown table. Do not wire `fig_bias_question_substitution.png`; it misleadingly implies one shared mechanism.

Because the old Figure 9.9 remains omitted, renumber the IQ standardization figure and caption from Figure 9.10 to Figure 9.9. The existing filename `fig_iq_bell_curve.png` may remain unchanged.

## 4. Update `source/visuals-inventory.md`

Revise the Chapter 9 summary and rows to state:

- Figure 9.1: corrected hierarchy, `ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg`, wired in comparison draft only.
- Figure 9.6: unchanged — the existing Linda/bank-teller nested-set diagram, `ch09/fig_linda_conjunction_fallacy.svg`, stays as originally wired. Not a pending item.
- `ch09_conjunction_fallacy_nested_sets.svg`: original campus-library/sustainability-club nested-set diagram, built for a since-superseded Linda replacement (see §2). Not used in Chapter 9. Record as an available, unused original asset — not a defect, not pending work.
- Former question-substitution figure: held/not approved; replaced by the bias comparison table.
- IQ standardization becomes Figure 9.9 in the comparison draft.
- The authoritative source remains unchanged pending approval of the comparison draft.

## 5. Validation

- Confirm the category-hierarchy SVG path exists and is wired at Figure 9.1.
- Confirm non-empty alt text and captions.
- Confirm the comparison draft has sequential figure labels 9.1 through 9.9, with Figure 9.6 unchanged (Linda/bank-teller).
- Confirm the comparison draft still contains the Linda/bank-teller passage and `fig_linda_conjunction_fallacy` reference — these are not defects to remove.
- Confirm the original chapter and generated HTML were not modified.
- Do not update `GPT_project_log.md` until the comparison draft is approved or promoted.
