# Psych101 — Current Handoff

**Last updated:** 2026-07-14
**Canonical repository:** `C:\GitHub\psych101`
**Current branch or PR:** `main`. Chapter 9 audit, comparison-draft, figure, metadata, and decision updates have been committed directly to `main` through the GitHub connector.

This file is current-state only and is overwritten rather than appended. See `GPT_project_log.md` for chronological history and `PROJECT_BACKLOG.md` for durable deferred work.

## Current state

Chapter 9 is the active editorial task. A pre-review audit at `pipeline/audits/ch09-pre-review-audit.md` identified several root problems: heterogeneous heuristics were being pulled toward one mechanism, some language-acquisition and intelligence claims exceeded their evidence, a brief group-differences section carried too much causal weight, the chapter was overloaded, and several figures needed reconsideration.

A non-authoritative comparison revision addressing most of those issues exists at `source/chapters/09-thinking-language-intelligence-2.md`. The authoritative source remains `source/chapters/ch09-thinking-language-intelligence.md` until Jon explicitly approves promotion.

The current Chapter 9 HTML at `docs/chapters/09-thinking-language-intelligence.html` was built from the comparison draft and is live. It is structurally valid but not yet the final approved build.

### Confirmed editorial and figure decisions

- **Keep the Linda/bank-teller conjunction-fallacy example.** It comes from Tversky and Kahneman's 1983 research paradigm, not from commercial textbook material. Retain it as a clearly labeled classic study with the primary-source citation.
- Retain the existing Linda nested-set figure, `docs/images/ch09/fig_linda_conjunction_fallacy.png`, as Figure 9.6.
- Do not wire the Jordan campus-library/sustainability-club alternative. `docs/images/ch09/ch09_conjunction_fallacy_nested_sets.svg` remains an unused candidate/reference asset only.
- Wire the corrected category hierarchy, `docs/images/ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg`, as Figure 9.1. The current HTML still has a Figure 9.1 placeholder.
- Keep the former bias/question-substitution Figure 9.9 omitted. The comparison table is more accurate because the biases need not share one mechanism.
- Renumber the IQ standardization figure from Figure 9.10 to Figure 9.9 after the omission.

The revised implementation instructions are at `pipeline/audits/ch09-comparison-figure-followup.md`. Figure metadata and sharing status are at `docs/images/ch09/README_captions_alt_text_attribution.md`.

## Next actions

1. Apply the revised follow-up to `source/chapters/09-thinking-language-intelligence-2.md`: wire the corrected Figure 9.1, retain Linda and the existing Figure 9.6, keep the former bias figure absent, and renumber the IQ figure to 9.9.
2. Update the Chapter 9 section of `source/visuals-inventory.md`, including the Jordan SVG's candidate/reference status.
3. Read the completed comparison draft end to end for argument, cognitive load, voice, citation alignment, figure sequence, and stale references.
4. Decide whether to promote the comparison draft to `source/chapters/ch09-thinking-language-intelligence.md`.
5. After promotion or final source approval, rebuild or patch `docs/chapters/09-thinking-language-intelligence.html` and rerun structural and content validation.
6. Decide whether the ten review questions should remain open-response prompts or be rewritten as authored multiple-choice questions.
7. Browser-check Chapters 6, 7, and the eventual final Chapter 9 build.

## Decisions needed from Jon

- Whether to promote the completed comparison draft to the authoritative Chapter 9 source.
- Whether Chapter 9's review questions should remain open response or become authored multiple choice.

No further decision is needed on Linda or the former Figure 9.9.

## Validation and known risks

- The live Chapter 9 HTML currently retains Linda, which is now the approved content decision. Its remaining known content defects are the Figure 9.1 placeholder and the IQ figure still labeled 9.10.
- The generated HTML must be validated for content, not only tag structure: image paths, non-empty alt text, captions, sequential figure numbering, review/details structure, key terms, references, Further Reading separation, navigation, and mojibake.
- `source/visuals-inventory.md` is known to drift out of sync with chapter-specific metadata; use the Chapter 9 README as the figure-status authority until inventory reconciliation is complete.
- Claude/Cowork sessions must account for the sandbox-mount staleness and CRLF/LF issues documented in `pipeline/claude-work-environment.md`.

## Important files

- `pipeline/audits/ch09-pre-review-audit.md` — full Chapter 9 audit.
- `source/chapters/09-thinking-language-intelligence-2.md` — non-authoritative comparison draft.
- `pipeline/audits/ch09-comparison-figure-followup.md` — revised implementation instructions; Linda retained.
- `docs/images/ch09/ch09_category_hierarchy_superordinate_basic_subordinate.svg` — approved replacement for Figure 9.1.
- `docs/images/ch09/ch09_conjunction_fallacy_nested_sets.svg` — unused candidate/reference only.
- `docs/images/ch09/README_captions_alt_text_attribution.md` — Chapter 9 figure metadata and decisions.
- `docs/chapters/09-thinking-language-intelligence.html` — current comparison-draft build; structurally valid but not final.
- `source/chapters/ch09-thinking-language-intelligence.md` — authoritative chapter; unchanged pending promotion.
