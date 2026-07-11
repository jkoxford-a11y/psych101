# Codex/GPT Task Template — Narrow Repair Jobs

> Source-of-truth template for handing bounded, mechanical repair work to Codex/ChatGPT
> Work, so it doesn't have to be reconstructed by hand each time. Modeled on the Ch5/7/8
> anchor + literal-Markdown-heading repair prompt (Session 93), which worked cleanly on
> the first pass. Pair with `pipeline/chatgpt-instructions.md` for the project's general
> voice/content rules — this template is specifically for narrow, verifiable, non-editorial
> fixes: broken links, malformed render output, missing IDs, structural markup defects,
> linter regressions. Not for prose revision, voice work, or anything requiring editorial
> judgment — keep those with Jon + Claude, cross-checked, per established practice.

## When to use this template

Good fit: the defect is mechanical and precisely describable (a link doesn't resolve, a
heading rendered as literal text, a tag isn't balanced, a build script has a narrow bug),
the fix is independently verifiable by a script or a grep, and scope can be bounded to a
specific, named list of files.

Bad fit: anything touching chapter prose, voice, sourcing, or pedagogical judgment —
those need cross-checking between Claude and GPT, not solo delegation to either.

## Fill in the brackets, keep everything else

```
Work in the canonical [PROJECT] repository:
`[CANONICAL REPO PATH]`
Do not use or trust [ANY KNOWN STALE/DUPLICATE COPY PATHS] or any similarly named directory.

## Objective
Repair [PRECISE DEFECT DESCRIPTION] in [SCOPE: e.g., "Chapters 5, 7, and 8"]. This is a
narrow [render-output / structural / build-script] repair. Do not revise chapter prose or
perform unrelated cleanup.

## Read first
Before editing, read:
- `AGENTS.md`
- `HANDOFF.md`
- [ANY RELEVANT SPEC DOC, e.g. `pipeline/html-conversion-spec.md`]
- The relevant source Markdown and built HTML/output files
Treat `source/chapters/*.md` (or equivalent) as authoritative for wording/structure. The
repair must preserve the source text exactly.

## Files in scope
Primary editable files:
- [LIST EXACT FILES]
You may also edit:
- [BUILD/LINT SCRIPT], but only to add a narrowly targeted regression check for this
  specific defect class, if no equivalent check already exists.
- `HANDOFF.md` to record completion and remove/revise the resolved item.
- `GPT_project_log.md` only if required by `AGENTS.md` or established logging practice.
Do not edit chapter prose in source Markdown unless the source itself is found malformed.
Do not edit CSS, JavaScript, images, references, figures, captions, review questions, or
unrelated chapters. Do not regenerate the entire site.

## Required repairs
[PER-FILE OR PER-CHAPTER BREAKDOWN. For each: describe the defect precisely, give the
known/confirmed instances as a concrete list, and explicitly say the list may not be
exhaustive — require a full compare against source before treating it as complete. This
is the single most load-bearing instruction in the whole prompt: named examples anchor
the fix, but "do not assume this list is exhaustive" is what catches the rest.]

## [Fix-specific] rules
[Any house-style constraints that would otherwise be guessed at: slug/ID conventions,
heading-level mapping, punctuation handling, whatever a human editor would apply by
convention but a fresh agent has no way to infer. Spell it out.]

## Root-cause check
Determine whether a checked-in [conversion/build] script caused this defect.
- If there is a clearly identifiable bug and it can be fixed narrowly with a regression
  test, describe the proposed change before making it.
- Do not modify a broad or uncertain generation pipeline merely to repair the named files.
- The required outcome is correct, source-consistent output now. A narrow direct repair
  is authorized even if the root cause in the pipeline isn't fully resolved.

## Validation
After editing:
1. Run the project's linter/build check.
2. Confirm zero failures/warnings, or clearly explain any pre-existing unrelated warning.
3. Search the full output tree for the defect pattern to confirm elimination everywhere,
   not just in the named files.
4. Validate every changed link/reference: target exists, target is unique, no malformed
   artifacts (e.g. accidental double hyphens).
5. Confirm everything outside the defect's scope — prose, references, figures, captions,
   callouts, markup, navigation, scripts — is unchanged.
6. [Any structural sanity check specific to the fix, e.g. heading hierarchy nesting.]

Because this repository has a documented stale/truncated sandbox-mount problem, do not
trust a bash read alone as proof of final content. Verify edited files using the reliable
file-reading method specified in `HANDOFF.md`; re-materialize touched files before any
bash-based validation if necessary.

## Reporting
Report:
- Every file changed.
- Every instance of the defect fixed, itemized.
- Whether additional defects beyond the known list were found.
- Linter/validation results.
- Whether a regression guard was added.
- Any remaining issue.

Do not commit or push. Jon will review and commit through GitHub Desktop.
```

## Notes on why this shape works

- **Named examples + "don't assume exhaustive"** does double duty: it gives Codex a
  concrete target so it doesn't go hunting blind, but the explicit disclaimer is what
  catches the instances a human didn't spot yet (this is exactly how the Ch07/Ch08 count
  went from 4 known to 8 and 6 confirmed).
- **The sandbox-mount caution is boilerplate, not optional.** Drop it and the validation
  step (both Codex's own and Claude's follow-up check) risks trusting a stale read.
- **"Do not commit"** keeps the human review gate intact — this is what caught the
  leftover `[FLAG for Jon]` note and the "Chapter 6" cross-reference this last round;
  neither would have been caught by an automated linter.
- **Scope fences ("do not edit X, do not regenerate Y") are cheap insurance.** They cost
  a sentence each and prevent an agent from "helpfully" expanding scope.
