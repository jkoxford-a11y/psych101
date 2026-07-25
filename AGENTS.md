# Repository Agent Instructions

These instructions apply to all agents — GPT, Codex, Claude, and Cowork — working in this Psych 101 textbook repository.

## Start-of-session read order

1. `AGENTS.md` (this file) — routing and operating rules.
2. `HANDOFF.md` — current state, active work, immediate next actions.
3. Task-specific source/specification files for whatever you're actually working on.
4. `pipeline/claude-work-environment.md` — only when operating in Claude or Cowork.
5. `GPT_project_log.md` — only when historical context on a specific past decision is needed.

Don't load the entire chronological project log for every task — `HANDOFF.md` should already tell you what's current.

## Project-state files

Read these files according to the task:

- `HANDOFF.md` — current state, active work, immediate next actions, and decisions needed. Overwrite rather than append. Keep concise (~500–1,000 words).
- `GPT_project_log.md` — reverse-chronological record of major completed agent-assisted work. Add entries for major completed tasks; don't rewrite history. Entry format and placement are specified under `## Logging` — follow it exactly.
- `PROJECT_BACKLOG.md` — durable future and deferred work (editorial review, labs, figures, HTML/rendering, repository/workflow, open decisions). This repository does not use GitHub Issues for work tracking; `PROJECT_BACKLOG.md` is the durable backlog until that changes. Do not duplicate the full backlog inside `HANDOFF.md` — only the next 3–5 immediate actions belong there.
- `HANDOFF-ARCHIVE.md` — frozen historical record of past Session Log entries and superseded Current Status snapshots, preserved verbatim. Not actively maintained; read only when tracing specific past history that isn't in `GPT_project_log.md`.
- `pipeline/claude-work-environment.md` — Claude/Cowork-specific environment cautions (sandbox-mount staleness, canonical repo path, commit workflow). Read when operating in Claude or Cowork; other agents don't need it.
- `AGENTS.md` — permanent repository instructions and routing rules (this file).

Do not maintain the same information in multiple project-state files. If you find duplication, fix it in the file where it belongs and point the other file at it instead of copying content.

## Source of Truth

- Chapter prose and content changes belong in `source/chapters/*.md`.
- Generated chapter HTML lives in `docs/chapters/*.html`.
- Do not patch generated HTML directly unless explicitly asked or no checked-in generator exists.
- `pipeline/html-conversion-spec.md` defines HTML/render expectations.
- `source/visuals-inventory.md` tracks figure status (known to drift stale — cross-check per-chapter `docs/images/chXX/README*.md` files).

## Style

- Preserve the instructor-authored voice.
- Do not genericize prose into publisher prose.
- Keep explanations student-facing, precise, and teachable.

### Voice (Herr Prof. Dr. Awesome-Sauce)

The instructor's voice is **confident, forward, exciting, vivid, fun, and deeply intellectual.**
The audience is mostly first-year students straight out of high school — curious non-scientists,
not researchers. The job is to get real ideas *into their heads* and make them want more, not to
publish a defensible paper. Draft and edit to that standard. Consult `source/voice_profile_merged.csv`
before drafting any chapter.

### Pre-line-edit checklist (apply to every chapter BEFORE line editing)

These rules are generalized from the instructor's completed line edits (Ch 1–8). Applying them up
front stops the same corrections from being redone by hand in every chapter.

1. **Do not qualify — and never over-qualify.** State the point with authority. Cut academic hedges
   the moment they blunt the idea: "if imperfect," "though those are variable," "reliably harder,
   because…," "remains an area of active research," "not by itself explain," "this doesn't prove."
   These read as research-paper caution and cost students the very point they needed. When a genuine
   caveat matters, state it **once, plainly, and move on** — never stack a second sentence that
   re-hedges the same idea (see the Ch 4 predictive-coding rule: keep one qualification, delete the
   repeat).

2. **Cut epistemological throat-clearing.** Delete meta-commentary about what a study "does not
   establish," "why a vivid case is not a surgical experiment," "none of this is a hierarchy," etc.
   Teach the finding; don't narrate the philosophy of science around it unless that IS the lesson.

3. **Lower cognitive load; cut word count.** Recurring instructor notes: "Quite wordy, lets adjust,"
   "Shorten, high cognitive load," "Make it easier to read," "Need to simplify." Shorter sentences,
   fewer clauses, one idea at a time. If a sentence survives having words removed with the same
   meaning, remove them.

4. **Keep the real mechanism — in vivid plain language.** Cutting hedges is not cutting substance.
   The instructor *adds* concrete causal mechanism when it's missing (reuptake → enzyme breakdown;
   ATP → adenosine → sleep pressure → caffeine "crash"; BOLD hemodynamics). Explain how it actually
   works, in words a freshman can picture.

5. **Gloss terms inline with `(i.e., …)`.** Define on the spot rather than in dense stand-alone
   sentences: "ganglia (i.e., group of neuron cell bodies)," "chatbot (i.e., LLM, generative AI like
   ChatGPT or Claude)." Fast, low-load, keeps momentum.

6. **Tune every example to THIS cohort.** Reach for what first-years care about: SAT/IQ scores,
   video-game performance, texting while studying, all-nighters vs. spaced practice, COVID as their
   generation's flashbulb memory, ChatGPT/Claude. Prefer the relatable everyday *consequence*
   ("pulling an all-nighter is more work and less payoff than 15–30 minutes every day").

7. **Stay current and forward-looking.** "Chatbots are yesterday; they need to know about tomorrow —
   it's college." Where tech is the example, reach for the frontier (agentic AI, current models),
   not last year's version.

8. **Mirror how the instructor actually teaches — prune what he doesn't.** Content he skips or finds
   dull in lecture (e.g., sleep apnea/insomnia detail, self-reference effect) is a candidate for
   cutting, not padding. The book should track his emphasis, not exhaustively cover a syllabus.

9. **Make the point land — and give it the "why."** State the takeaway plainly and anchor it in the
   recurring **evolutionary / comparative "animal model"** framing (an organism remembers what helps
   it predict *now*; connections that aren't used decay). Don't bury the payoff under caveats.

10. **Format for the eye.** Bold the load-bearing verbs/terms, and convert dense serial prose into
    parallel bullets where it lowers load (misconception demos, hit/miss/false-alarm/correct-rejection,
    rods/cones, bottom-up/top-down, Gestalt principles). Paragraph breaks separate demonstration,
    interpretation, and forward pointer.

**One-line test before submitting prose:** *Would this excite a curious 18-year-old and make the
point unmissable — or does it read like a hedged journal paragraph?* Edit toward the former.

### Register calibration (learned from instructor line edits)

The subtractive checklist under-cuts relative to the instructor's actual tolerance. When converting,
apply these on top of it:

- **Vivid, not chatty.** Keep concrete images and the evolutionary through-line; cut conversational
  scaffolding ("here's the…", "now the…"), showy verbs ("throw," "wreckage"), and attention-grabbing
  metaphors ("placing a bet," "ship the brain early and finish it outside"). Vivid is the instructor's
  own image; chatty is the connective tissue around it.
- **Cut residual qualifiers even harder — when in doubt, cut the caveat.** A subtractive pass still
  leaves too many. The instructor routinely deletes surviving hedges ("not a permanent script,"
  "not because insurance rates prove a neural mechanism," "not a design flaw," style disclaimers).
  One plain caveat at most; usually none.
- **Avoid the absolute "this is THE central/key fact" tic.** Superlative framing ("the central fact
  that makes human psychology possible") reads as overstatement and the instructor flags it on sight —
  "there are several in this chapter." Make the point and move on; reserve emphasis for rare moments.
- **Prune side-content as "beyond scope," don't catalog it.** A full mechanism list (e.g. "genetic
  maturation, spontaneous activity, hormones, immune processes, local cellular signals…") is load the
  instructor cuts to "there are other influences, beyond the scope here." Mirror what he teaches.

### Keep the story (the additive half — don't let compression flatten the narrative)

The checklist above is mostly *subtractive*. Applied alone it produces prose that is accurate, lean,
and lifeless. Cutting hedges is necessary but not sufficient — every passage also needs a **narrative
spine**, or the story is lost even when every sentence is correct.

Diagnose the failure by asking: **is this term-driven or story-driven?** If the sentences exist to
deliver definitions in sequence (term → definition → next term → definition — a "definition march"),
the story is gone. Terms should be *earned by* the story, not the thing the story is built around.

Restore the spine:

- **Lead with the image or the stakes, not the definition.** Open on something the student can
  picture or care about; let the technical terms arrive to explain what they're already looking at.
  (E.g. a newborn brain is "*overgrown*" — start there, then name synaptogenesis.)
- **Give every passage one clear arc:** setup → tension/process → payoff. Most chapter passages have
  all three beats already but ordered as definitions, so the arc never lands.
- **Put the payoff to work as the engine, not a tacked-on final clause.** The most exciting line
  (usually the evolutionary / "why it matters for the organism" point) should drive the passage, not
  trail it. If the best sentence is stranded at the end, the paragraph is built backwards.
- **Turn flat catalogs into part of the story.** A bare list of mechanisms is inert; frame what the
  list is *doing* in the narrative (e.g. "experience does much of the carving — but not alone: …").
- **Prefer verbs with motion and images** (overbuilt, carves, sculpted, exploding) over static
  is/are/consists-of constructions. The animal-model / evolutionary frame is the recurring engine.

### Install the spine (required drafting input)

The subtractive checklist removes publisher hedging; it does not supply the lens. That comes from the
project's theoretical spine, which must be loaded before drafting or converting any chapter. A draft
that applies the checklist without installing the spine is **spine-disconnected** — clean but
voiceless, which is the failure mode most of the base drafts already show.

Before drafting or line-editing a chapter, read its Layer 3 material and student-facing spine
question, and **name the spine connection early** in the prose (per the drafting rules):

- `pipeline/theoretical-spine.md` — §8 has per-chapter Layer 3 notes and the spine question; §7 has
  the drafting rules and the **"do not overclaim" list**. If a Layer 3 note conflicts with the trunk
  (§1–5), the trunk governs, and not all Layer 3 detail needs to reach student-facing text.
- `pipeline/theoretical-foundations.md`, `GPT_spine.md`, `pipeline/concepts-semanticization-log.md`
  — deeper elaborations of the same framework; consult as the chapter requires.

The spine is the additive half of every conversion; `voice_profile_merged.csv` supplies persona and
signature analogies. Use both.

### Human verification pass (residue check)

Instruction-plus-spine conversion is carried by an agent; the required author/editorial pass is
**scoped to verifying interpolations, not rewriting voice** (the calibrated register holds across a
full chapter). When converting a chapter, produce a short residue list flagging three things for
author sign-off, and keep that same list in mind when reviewing any converted draft:

1. **Imported facts without a citation.** Any quantitative claim or specific fact drawn from the spine
   notes but not supported by a source in the *chapter's own* reference list. Spine-sourced ≠ cited.
2. **Teaching-simplifications.** Any mechanism stated more simply than its source (these are often
   intended — keep them, but mark them so the author signs off knowingly).
3. **Agent interpolations.** Any cross-chapter link, analogy, or inference not present in the source
   draft or the spine — keep or cut, author's call.

**Reconcile against the instructor's markup, not just the base source.** When a chapter has an
in-progress line-edit packet (tracked changes in `line-edit-packets/`, including on a prior Claude
draft), that markup — not the base source markdown — is the source of truth for the instructor's
decisions. Read it before drafting or before writing a residue list, or you will re-import content he
has already cut.

## Figures

- Prefer original explanatory diagrams.
- Do not embed figure numbers inside images.
- Preserve captions, alt text, attribution, and public-sharing status.
- Keep figure creation and figure wiring as separate steps — do not wire a figure into chapter HTML unless explicitly asked, even if you just created it.
- Expandable-figure implementation details (the `.expandable` CSS / `figure-expand.js` pattern) live in `pipeline/html-conversion-spec.md` §9.

## Validation

- Check content, not just tag existence — this applies to generated chapter HTML as much as to source markdown.
- Validate no bad ` ? ` separator mojibake.
- Validate populated key terms when source has terms.
- Validate figure paths, non-empty alt text, and no leading dash artifacts.
- Validate Further Reading items are separated.
- Validate review/details structure is preserved.

## Logging

For major completed tasks, add a concise entry to `GPT_project_log.md`. Do not include private chain-of-thought.

### Where the entry goes — read this before writing one

**`GPT_project_log.md` is newest-first. Insert new entries at the TOP, immediately below the `## Log Entries` heading — never at the bottom of the file.**

This is stated because it previously went wrong. The file's header used to say only "chronological," which agents read in both directions: half the entries accumulated newest-first at the top and half accumulated oldest-first at the bottom, with the two blocks covering overlapping dates. The file was reflowed to uniform newest-first on 2026-07-25. Do not reintroduce the split — if the newest entry in the file is not the one nearest the top, stop and reconcile rather than appending.

### Entry format

Use a level-3 heading with an ISO date and a plain hyphen separator:

```
### YYYY-MM-DD - Title of the completed work (Agent/Tool)
```

- **ISO `YYYY-MM-DD` only** — no other date format, and no time component.
- **A plain hyphen (`-`) between date and title**, not an en or em dash.
- Date the entry to the day the work was completed. If work spans days, use the completion date.
- Multiple entries may share a date; add the newest one above the others from that day.

Body: bolded lead-ins (`**Scope:**`, `**Files changed:**`, `**Validation:**`, `**Not committed / remaining:**`) recording actions, decisions, files changed, validation performed, and remaining issues.

### Keep state claims out of date

An entry describes work as of the moment it was written. Claims like "uncommitted," "untracked," or "not yet committed" go stale the moment the commit lands and then actively mislead the next agent. Prefer describing *what* changed over *what its git status was*; if you must record commit status, the next agent to touch the file should correct it. Current repository state belongs in `HANDOFF.md`, not here.
