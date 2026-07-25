# Ch 11 (spine conversion) — Verification Residue

**Draft reviewed:** `source/chapters/ch11-social-psychology.md` (converted in place)
**Packet:** `line-edit-packets/Chapter_11_Social_Psychology_Line_Edit.docx`
**Seeds:** `pipeline/ch11-spine-seeds.md` — all 13 decisions applied
**Purpose:** scope the line-edit pass. Everything below is spine-consistent and deliberate. It needs *your* sign-off because it was imported, simplified, or added — not because it is wrong.

---

## A. Imported facts and citations

*Three citations were added to the reference list during verification because the body cited them and the list did not: Bond & Smith (1996), Baumeister & Leary (1995), and Steele (1988). Without the last one, the in-text "Steele (1988)" would have resolved to Steele & Aronson (1995) — the stereotype-threat paper — which is a different claim entirely.* A full check now shows every in-text citation resolving to a reference entry.

1. **Section 2, Asch —** *"conformity in the line-judgment task has declined in the United States since the 1950s, and it runs higher in more collectivist cultures."* Bond & Smith (1996), verified this session against multiple independent records; the meta-analysis covers 133 studies, 17 countries, 4,627 participants. **The specific numbers are not in the chapter text** — only the two directional findings. Add the counts if you want them, or leave as is.

2. **Section 2, Asch —** *"the participants split. Some were genuinely persuaded… Others saw the line perfectly well and said the wrong number anyway."* This is the conceptual claim only. Per `theoretical-foundations.md` §22, Asch's own category scheme was **not** confirmable from secondary sources this session, so no taxonomy is named and no percentages are attached. → If you ever want the three-way perception/judgment/action breakdown, the 1956 monograph has to be pulled directly first.

3. **Section 3, belonging —** *"the drive to form and maintain bonds is basic equipment rather than a preference."* Baumeister & Leary (1995), now cited. Fair paraphrase of the belongingness hypothesis, stated more flatly than the original.

## B. Teaching-simplifications to sign off on

4. **Section 2, opener —** *"Forty people have eyes, and thirty-nine of them are unbothered."* Invented specifics. The smoke-filled-room paradigm has no such numbers. Reads as illustration rather than data, but it is adjacent to a real study. → Keep, or soften to "a room full of people."

5. **Section 2, Milgram —** *"Deciding what to do next is normally your own job. Here, part of it had been handed off."* This is the agentic-state idea in plain language. It is your spine framing (obedience narrows the perceived action set), but it states as mechanism something Milgram's own data cannot establish — and the walkthrough two paragraphs earlier correctly says the mechanism is contested. → Keep knowingly, or add "one account holds that…".

6. **Section 4, kin selection —** *"'I would do anything for my kid' is not a figure of speech and 'I would do anything for a stranger' usually is."* Vivid, and it makes Hamilton's rule land. It also overstates a probabilistic gradient as a categorical difference. → Your call.

7. **Section 1, compression —** the FAE is presented as the same operation as gist memory (Ch. 8) and prototype formation (Ch. 9). Spine-supported and the through-line the chapter needed, but "same machinery" is a teaching claim, not a demonstrated identity of mechanism.

## C. Agent interpolations (mine — keep or cut)

8. **Section 5, "What Survived" —** *"Freud's… central bet did [hold]: people protect themselves through motivated processes running outside awareness."* Calling it Freud's "central bet" is my framing. Baumeister, Dale, & Sommer (1998) supports the substance; the editorial verdict is mine. This section is now four sentences per your instruction — **confirm the cut is deep enough**, since it removed id/ego/superego, the psychosexual stages, defense mechanisms, self-concept, and unconditional positive regard as bolded terms. None were glossary entries. Farber et al. (2018) was dropped from References as a consequence.

9. **Closing paragraph —** *"the honest answer to 'would I have continued?' is not yes or no. It is: tell me the room."* Entirely mine. It closes the opener's loop and lands the person × situation resolution. It is also the most stylized sentence in the chapter. → Keep or cut.

10. **Section 4 opener —** *"This is the section where caring stops."* Mine, following from the new spine question. Sets up the section as conditions rather than moral failure.

11. **Section 1 → Section 5 plant and payoff —** *"psychologists made the same mistake about traits that you just made about the driver."* This is seed-approved (DECIDE 3) but the specific wording is mine, and it characterizes Mischel's critique target somewhat sharply.

12. **Register residue — most likely to read a notch too informal:**
    - Section 1: *"You did not weigh the two. One arrived, and it arrived as a fact about the driver."*
    - Section 2: *"That is not weakness. It is arithmetic."*
    - Section 3: *"Being left out is not a bruise. It just gets your attention like one."*
    - Section 5: *"He showed that one observation is one day of weather, and everyone had been reporting it as climate."* (your analogy, my sentence)
    → Trim as you go.

---

## D. Open items — not residue, but pending

- **Word count is up.** 7,071 → 8,648 (+22%). Reported and deliberately not compressed at your instruction: the additions carry meaning rather than padding, and what came out was catalog while what went in is story. Worth revisiting only if the chapter reads long in practice. Longest stretches are S1 (1,275) and S2 (1,380).
- **Learning objectives were not touched.** All seven still map to body content, but none names belonging, beliefs-versus-feelings, or the caring frame — the chapter now teaches three things its objectives do not claim. The audit separately asked for objectives 7–8 to be consolidated. Both are pedagogical commitments and yours to make.
- **Apparatus retrofit not done.** Per the protocol it runs last, after your line edit, so the retrieval prompts test the chapter as it finally reads. Four Stop and Retrieve, two Think About It, three Do Not Confuse, seventeen review questions — mostly testing term discrimination rather than relations.
- **HTML not regenerated.** Source is ahead of `docs/chapters/11-social-psychology.html`. The linter currently passes against the *old* build; regenerate after the line edit.
- **AI Connection moved** from a top-level section to a subsection at the end of Section 3. Heading level changed from `##` to `###`, which will change its anchor on regeneration.
