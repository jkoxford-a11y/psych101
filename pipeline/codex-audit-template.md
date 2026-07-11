# Codex/GPT Task Template — Pre-Review Chapter Audit

> Source-of-truth template for handing a chapter to Codex/ChatGPT Work for a **read-only
> audit and report**, before Jon and Claude sit down for the actual line-by-line editorial
> pass. Modeled on the Session 97 Ch3 pass (Sections 3-4 + back matter), which surfaced:
> two orphaned references, a stale "Ch. 11 — Personality" cross-reference (chapter no
> longer exists under that name post-Session-60), 8 bolded terms missing from the Key
> Terms glossary, a figure caption introducing vocabulary the body text never explains, and
> a paragraph that exists in the built HTML but not in the source Markdown at all. None of
> those required editorial judgment to *find* — only to decide what to do about them. That
> split is exactly what this template is for: Codex finds and itemizes, Jon and Claude
> decide.
>
> Companion to `pipeline/codex-task-template.md` (narrow mechanical *repair* jobs). This
> template is for *detection*, not repair — the output is a report, and no chapter content
> changes as a result of running it.

## When to use this template

Good fit: a chapter is queued for its line-by-line editorial pass, and you want the
mechanical, checklist-style problems already itemized before that session starts, so the
editorial time goes to judgment calls instead of discovery.

Bad fit: don't use this to decide whether a paragraph *should* be cut, whether a voice
choice lands, or whether a simplification is pedagogically sound — Codex can flag a
paragraph as untested by any review question, but "cut it" is Jon's call, the same way the
86-billion-neuron paragraph and the tend-and-befriend addition were both decided in
conversation, not by a script.

## Fill in the brackets, keep everything else

```
Work in the canonical [PROJECT] repository:
`[CANONICAL REPO PATH]`
Do not use or trust [ANY KNOWN STALE/DUPLICATE COPY PATHS] or any similarly named directory.

## Objective
Audit [CHAPTER NUMBER AND TITLE] and produce a written report of findings. This is a
read-only audit — make no edits to chapter content, HANDOFF.md, or any other file. The
report itself is the deliverable, written to `[REPORT OUTPUT PATH, e.g.
pipeline/audits/ch0X-pre-review-audit.md]`.

## Read first
- `AGENTS.md`
- `HANDOFF.md` (Current Status + Next Up; skip Session Log unless it names this chapter)
- `source/concept_lineage_revised.csv` (for the copyright-rule check below)
- `source/voice_profile_merged.csv` (for the voice-fit spot-check below)
- The chapter's own source Markdown (`source/chapters/[FILE].md`) and built HTML
  (`docs/chapters/[FILE].html`) — read both in full before starting; do not sample.

## Checks to run

For each check, report every instance found, and explicitly state whether the search was
exhaustive (full-file grep/diff) or partial. Do not silently drop a check because nothing
was found — report "none found" as a result, not silence.

1. **Citation integrity.** Every in-text citation, e.g. `(Author, Year)`, must resolve to
   an entry in the chapter's References list. Every References entry must be cited
   in-text at least once (in the chapter body, a figure caption, or a review-question
   rationale). Report orphaned references (in the list, never cited) and missing
   references (cited, not in the list) separately.

2. **Key Terms completeness.** Every bolded term introduced in the chapter body
   (`**term**`) that functions as core vocabulary (not just emphasis) should have a
   corresponding Key Terms glossary entry. Report bolded terms with no glossary entry.
   Also report glossary entries that never appear bolded in the body (the reverse gap).

3. **Cross-reference accuracy.** For every row in the Connections table, and every
   in-body "Chapter N" reference, confirm the target chapter's current title and number
   by reading its actual source file's `# Chapter N: Title` header — not by assuming the
   name is stable. This project has renamed/dissolved chapters before (Personality →
   folded into Ch. 11 Social Psychology, Session 60); a Connections row can go stale
   without anyone editing the chapter it's *in*. Report any mismatch between the cited
   chapter name and that chapter's actual current title.

4. **Source/HTML parity.** Compare the Markdown source and built HTML paragraph by
   paragraph. Report: paragraphs present in one file but not the other; paragraphs in a
   different order between the two; figure captions, alt text, or diagnostic-question
   answers that differ in content (not just formatting) between the two files.

5. **Figure/caption self-containment.** For every figure caption and image alt-text
   string, check whether any term or claim it introduces is ever explained in the running
   body text. Report captions that introduce vocabulary the prose never defines.

6. **Review question coverage and ceiling.** Count the review questions. Report if the
   count falls outside the project's 8-12 spec range. Separately, list which major
   chapter concepts (bolded Key Terms, named theories/studies, Learning Objectives) have
   no corresponding review question — do not recommend adding or cutting questions, just
   report the gap.

7. **Learning Objectives coverage.** For each stated Learning Objective, identify the
   section(s) of the chapter that address it. Report any Learning Objective with no
   clearly corresponding content.

8. **Copyright/lineage flags.** Cross-reference this chapter's concepts against
   `source/concept_lineage_revised.csv`. For any concept flagged `needs-verification` or
   with `wording_change_driver = book-adoption`, report whether the chapter's current
   definition traces to Noba Project / APA IPI materials (compliant) or shows signs of
   proximity to Wade, King, or Myers phrasing (flag for review — do not conclude
   infringement, just flag for a human read).

9. **Voice spot-check (report only, not a judgment).** Cross-reference
   `source/voice_profile_merged.csv` for this chapter's topic area. Report whether the
   chapter's signature analogies (Tesla Vision, automatic camera, video-camera memory
   misconception, Sapolsky/dopamine, Herr Prof. Dr. Awesome-Sauce persona lines) appear
   where the voice profile suggests they should, without judging whether the execution is
   good — that judgment stays with Jon and Claude.

10. **Orphaned or placeholder text.** Search for leftover editorial artifacts: `[FLAG for
    Jon]`, `TODO`, `[Jon:`, `coming soon` placeholders, or any bracketed note that reads
    like an internal comment rather than finished chapter text.

## Do not

Do not edit the chapter, HANDOFF.md, or any file other than the report output. Do not
propose specific rewritten prose — describe the defect and its location, not a fix. Do not
resolve any finding by guessing intent (e.g., do not decide an orphaned reference should be
deleted vs. that supporting text is missing) — report the finding and let it stand as an
open question.

## Reporting

Write the report to `[REPORT OUTPUT PATH]` with one section per check above. For each
finding: exact location (file, line or section heading), a one- or two-sentence
description, and — where relevant — the exact conflicting text quoted from both files. End
with a short summary list of open decisions for Jon, ordered by how much they affect
chapter meaning (structural/factual first, cosmetic last).

Because this repository has a documented stale/truncated sandbox-mount problem, do not
trust a bash read alone as proof of file content for files last touched via Edit/Write or
outside this session's own bash writes. If a bash-based read looks truncated or
inconsistent with expectations, note that in the report rather than silently trusting it.

Do not commit or push.
```

## Notes on why this shape works

- **"Report, don't fix" is the whole point.** The Ch5/7/8 repair template exists because
  that class of defect is mechanical enough to fix unsupervised. Chapter content isn't —
  every real finding from the Ch3 pass (Key Terms gaps, the stale Ch11 name, the
  freeze/tend-and-befriend caption, the markdown-missing paragraph) needed a decision, not
  just a patch. Keeping Codex on "find and describe" preserves the review gate without
  losing the labor-saving part.
- **Cross-reference accuracy check reads the actual target file, not the citing chapter's
  memory of it.** This is what would have caught "Ch. 11 — Personality" without anyone
  needing to already know about the Session 60 dissolution — it's a mechanical file read,
  not domain knowledge.
- **Source/HTML parity as a paragraph-level diff, not a line-count check.** A `wc -l`
  comparison would have caught neither the LeDoux paragraph gap nor the paragraph-order
  swap around Figure 3.9 — both needed an actual read-through diff.
- **The voice and copyright checks are deliberately "report only."** Codex flagging
  "voice profile suggests X here and I don't see it" is useful; Codex deciding the chapter
  sounds right is not — that's exactly the kind of judgment call this project has
  consistently kept between Jon and Claude.
