#!/usr/bin/env python3
"""Check a chapter's apparatus against its own body prose.

`lint_chapters.py` checks structure on generated HTML -- required sections,
review-question counts, anchors, alt text. It passes all fourteen chapters and
catches none of the failures this script exists for, because they are semantic.

The failure class: a spine conversion rewrites the body and leaves the apparatus
describing the chapter that used to be there. After Chapter 11's conversion,
Learning Objective 5 and the Chapter Summary both taught "multiple levels of
explanation" -- the framing the instructor had cut -- while seven threads the
chapter now teaches were named in no objective at all.

Run against the authoritative markdown, never the generated HTML.

    python pipeline/check_chapter_coherence.py source/chapters/ch12-*.md
    python pipeline/check_chapter_coherence.py --all

FAIL    provable: a citation with no reference, a key term absent from the body,
        a proper noun or defined term the apparatus teaches and the body lacks.
REVIEW  judgement: drift that may be deliberate. A thread can be intentionally
        unnamed in the objectives -- but that should be a decision, not an
        oversight, and surfacing it is the point.

Known limitation, documented rather than patched further: parenthetical
citations of institutional authors and of surnames carrying a particle
("de Gelder", "van den Pol") can still key incorrectly and show up as
"cited, no reference entry". Check that class by eye before treating it as a
defect. Add institutional authors to ORGS as they appear.

Design note, learned the hard way: an earlier version tested apparatus prose
against body prose with content-word n-grams. It produced 25 findings on
Chapter 11 of which about three were real, because objectives legitimately
paraphrase the body. A checker that cries wolf trains you to skim it. Only
tokens that must match literally are tested here -- proper nouns, glossary
terms, citation keys. Paraphrase is not checkable and is not checked.
"""

from __future__ import annotations

import argparse
import glob
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SPINE = ROOT / "pipeline" / "theoretical-spine.md"

APPARATUS = ("Chapter Summary", "Connections", "Review Questions", "Key Terms",
             "Further Reading", "References", "Learning Objectives")

# Capitalised words that are not proper nouns in this corpus.
NOT_NAMES = set("""A An The This That These Those If When Where Why How What Which Who
And But Or So Then Now Here There Use Explain Describe Distinguish Identify Compare
Select Apply Give Name Predict State Chapter Section Figure Table Learning Objectives
Review Questions Key Terms Summary Connections Further Reading References Stop Retrieve
Think About It Do Not Confuse Classic Study Walkthrough AI Connection Where Fits
Emotion Stress Coping Social Psychology Memory Learning Sleep Consciousness Development
Big Five English Western European American African Asian Hispanic White Black
Monday Tuesday Wednesday Thursday Friday Saturday Sunday
Yet Both Each Some Most Many Few One Two Three Four Five Six Seven Eight Nine Ten
Because Although Though While Since Unless Whether Instead Rather Notice Consider
Across Under Over After Before During Within Without Between Among Their Your Our
It She He They We You I No Not Never Always Often Sometimes""".split())


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def split_sections(text: str) -> dict[str, str]:
    out, cur, buf = {}, "_preamble", []
    for line in text.split("\n"):
        m = re.match(r"^##\s+(.+?)\s*$", line)
        if m:
            out[cur] = "\n".join(buf)
            cur, buf = m.group(1).strip(), []
        else:
            buf.append(line)
    out[cur] = "\n".join(buf)
    return out


def section(sec: dict[str, str], name: str) -> str:
    for k, v in sec.items():
        if k.lower().startswith(name.lower()):
            return v
    return ""


def body_of(sec: dict[str, str]) -> str:
    return "\n".join(v for k, v in sec.items()
                     if not any(k.lower().startswith(a.lower()) for a in APPARATUS))


def norm(s: str) -> str:
    s = re.sub(r"[‘’]", "'", s)
    s = re.sub(r"[“”]", '"', s)
    s = re.sub(r"[—–]", " ", s)
    return re.sub(r"\s+", " ", s.lower()).strip()


def proper_nouns(text: str) -> set[str]:
    """Capitalised tokens not at sentence start, minus known non-names."""
    out = set()
    for sent in re.split(r"(?<=[.!?:])\s+|\n", text):
        # strip list numbering, bullets and bold/italic markers so the first real
        # word is recognised as sentence-initial rather than as a proper noun
        sent = re.sub(r"^\s*(?:[-*>]|\d+\.|\(\d+\)|[a-z]\))\s*", "", sent)
        sent = sent.lstrip("*_ ")
        toks = re.findall(r"\b([A-Z][^\W\d_][\w’'\-]*?[\w’'\-]{2,})\b", sent)
        for i, t in enumerate(toks):
            if i == 0 and sent.strip().startswith(t):
                continue
            t = re.sub(r"(’s|'s)$", "", t)
            if t in NOT_NAMES or len(t) < 3:
                continue
            out.add(t)
    return out


def numbered(text: str) -> list[str]:
    return [m.group(1).strip() for m in re.finditer(r"^\s*\d+\.\s+(.*)$", text, re.M)]


# Institutional authors: citations name them by their leading word or an acronym,
# reference entries spell them out. Neither surname rule works, so both sides map
# to a single canonical token.
ORGS = {
    "american": "org-apa", "apa": "org-apa", "association": "org-apa",
    "national": "org-nat", "nimh": "org-nat", "nida": "org-nat", "nice": "org-nat",
    "institute": "org-nat", "abuse": "org-nat", "health": "org-nat",
    "excellence": "org-nat",
    "world": "org-who", "who": "org-who", "organization": "org-who",
    "centers": "org-cdc", "cdc": "org-cdc", "prevention": "org-cdc",
    "department": "org-dept", "services": "org-dept",
    "open": "org-osc", "collaboration": "org-osc", "science": "org-osc",
    "cogitate": "org-cog", "consortium": "org-cog",
    "office": "org-ohrp", "protections": "org-ohrp", "welfare": "org-ohrp",
    "research": "org-ohrp",
}


PARTICLES = {"le", "la", "van", "von", "de", "den", "der", "du", "da", "di", "el"}


def _surname(s: str) -> str:
    """Canonical citation key. Handles possessives, institutions and particles."""
    s = re.sub(r"[’']s?$", "", s.strip()).rstrip(".").lower()
    s = re.sub(r"\s+", " ", s)
    if s in ORGS:
        return ORGS[s]
    parts = s.split()
    # "le texier" / "van den pol" -> keep the substantive element
    while len(parts) > 1 and parts[0] in PARTICLES:
        parts = parts[1:]
    return ORGS.get(parts[-1], parts[-1]) if parts else s


def citation_keys(text: str) -> set[tuple[str, str]]:
    """(surname, year) pairs from parenthetical and narrative citations."""
    keys = set()
    for m in re.finditer(r"\(([^()]{0,200}?(?:19|20)\d{2}[a-z]?[^()]{0,200}?)\)", text):
        inner = m.group(1)
        for cm in re.finditer(
                r"([A-Z][^\W\d_][\w’'\-]*?[\w’'\-]+)(?:\s*(?:,|&|and|et al\.)\s*[A-Z][A-Za-z’'\-.]*)*"
                r"[^;]*?((?:19|20)\d{2})", inner):
            keys.add((_surname(cm.group(1)), cm.group(2)))
    # narrative: "Festinger and Carlsmith (1959)", "Milgram's (1963)", "Adolphs et al. (1994)"
    for m in re.finditer(r"\b((?:Le|La|Van|Von|De|Den|Der|Du|Da|Di|El)\s+)?"
                         r"([A-Z][^\W\d_][\w’'\-]*?[\w’'\-]*)(?:’s|'s|’)?"
                         r"(?:\s+(?:et al\.|and\s+[A-Z][^\W\d_][\w’'\-]*?[\w’'\-]+|&\s*[A-Z][^\W\d_][\w’'\-]*?[\w’'\-]+))?"
                         r"(?:’s|'s)?\s*\(((?:19|20)\d{2})", text):
        particle, name, year = m.group(1), m.group(2), m.group(3)
        if name in NOT_NAMES:
            continue
        keys.add((_surname((particle or "") + name), year))
    return keys


def reference_keys(refs: str) -> tuple[set, set]:
    """Return (all-author keys, first-author-only keys).

    Citations name the first author; reference entries list every author. Testing
    "is this reference cited" against all authors reports every co-author as
    uncited, which is noise. Use first-author keys for that direction and the
    full set for the reverse.
    """
    every, first_only = set(), set()
    for line in refs.split("\n"):
        line = line.strip().lstrip("-* ")
        if not line:
            continue
        m = re.match(r"^\*{0,2}([A-Z][^(]{1,200}?)\*{0,2}\s*\((\d{4})[a-z]?\)", line)
        if not m:
            continue
        authors, year = m.group(1), m.group(2)
        for am in re.finditer(r"([A-Z][^\W\d_][\w’'\-]*?[\w’'\-]{1,})\s*,\s*[A-Z]\.", authors):
            every.add((_surname(am.group(1)), year))
        lead = re.split(r"[,&]", authors)[0].strip()
        if lead:
            key = (_surname(lead.split()[-1]), year)
            every.add(key)
            first_only.add(key)
    return every, first_only


def spine_info(chnum: int) -> tuple[str, list[str]]:
    if not SPINE.exists():
        return "", []
    m = re.search(r"### Ch\.\s*%d\b(.*?)(?=\n### |\Z)" % chnum, read(SPINE), re.S)
    if not m:
        return "", []
    blk = m.group(1)
    q = re.search(r"\*\*Student-facing spine question:\*\*\s*\*?_?(.+?)\*?_?\s*$", blk, re.M)
    threads = [t.strip() for t in re.findall(r"^\*\*(.+?)\*\*", blk, re.M)
               if "spine question" not in t.lower()]
    return (q.group(1).strip() if q else ""), threads


def check(path: Path):
    fails, review = [], []
    text = read(path)
    sec = split_sections(text)
    body = body_of(sec)
    bn = norm(body)
    m_num = re.search(r"(\d+)", path.name)
    chnum = int(m_num.group(1)) if m_num else 0

    # 1. citations <-> references
    refs = section(sec, "References")
    every, lead = reference_keys(refs)
    ck = citation_keys(body) | citation_keys(section(sec, "Review Questions"))
    def label_of(a: str, y: str) -> str:
        return "%s (%s)" % ("an institutional author" if a.startswith("org-") else a.title(), y)

    missing = sorted({label_of(a, y) for a, y in ck if (a, y) not in every})
    if missing:
        fails.append("cited, no reference entry: " + ", ".join(missing))
    uncited = sorted({label_of(a, y) for a, y in lead if (a, y) not in ck})
    if uncited:
        review.append("reference entry not cited (first author): " + ", ".join(uncited))

    # 2. key terms <-> body
    terms = re.findall(r"^\*\*(.+?)\*\*\s*[—–-]", section(sec, "Key Terms"), re.M)
    orph = [t for t in terms if norm(t) not in bn]
    if orph:
        fails.append("key term defined but absent from body: " + ", ".join(orph))
    tn = [norm(t) for t in terms]
    bolded = sorted({b.strip() for b in re.findall(r"\*\*([a-z][a-z0-9 –\-/'’]{2,44})\*\*", body)})
    undef = [b for b in bolded if not any(norm(b) == t or norm(b) in t for t in tn)]
    if undef:
        review.append("bolded in body, no Key Terms entry: " + ", ".join(undef))

    # 3. apparatus tests a *study* the body no longer contains  (provable)
    #
    # Narrowed deliberately. An earlier version flagged every capitalised token in
    # the apparatus, which surfaced gerunds opening MCQ options ("Assuming",
    # "Focusing") and labels ("Theme", "IPI"). Only names that behave like cited
    # authors are tested: a name appearing in the reference list, or one followed
    # by a year. That is the failure this check exists for -- Chapter 11's
    # objectives testing a framing the conversion had removed.
    author_names = {a for a, _ in every}
    for label in ("Learning Objectives", "Chapter Summary", "Review Questions"):
        blk = section(sec, label)
        if not blk.strip():
            continue
        candidates = {n for n in proper_nouns(blk)
                      if _surname(n) in author_names
                      or re.search(re.escape(n) + r"(?:’s|'s)?\s*\((?:19|20)\d{2}", blk)}
        for n in sorted(candidates):
            if _surname(n) not in {_surname(x) for x in proper_nouns(body)} \
                    and _surname(n) not in bn:
                fails.append("%s tests %r, absent from body" % (label, n))

    # 4. spine question present
    question, threads = spine_info(chnum)
    if not question:
        review.append("no spine question in theoretical-spine.md for this chapter")
    elif norm(question.rstrip("?")) not in bn:
        review.append("spine question absent from chapter text: %r" % question)

    # 5. threads taught but named in no objective  (judgement)
    objs = numbered(section(sec, "Learning Objectives"))
    if not objs:
        review.append("no numbered Learning Objectives")
    on = norm(" ".join(objs))
    for t in threads:
        head = norm(re.split(r"\bas\b|\bis\b|\bvs\.?\b|—|,", t)[0])
        head = " ".join(head.split()[:3])
        if len(head.split()) >= 2 and head in bn and head not in on:
            review.append("thread taught, no objective names it: %r" % t[:72])

    # 6. summary omits a thread the body teaches  (judgement)
    summ = section(sec, "Chapter Summary")
    if summ.strip():
        sn = norm(summ)
        for t in threads:
            head = " ".join(norm(re.split(r"\bas\b|\bis\b|—|,", t)[0]).split()[:3])
            if len(head.split()) >= 2 and head in bn and head not in sn:
                review.append("summary omits thread taught in body: %r" % t[:72])
        w = len(summ.split())
        if not 200 <= w <= 400:
            review.append("summary %d words (target 200-400)" % w)
    else:
        review.append("no Chapter Summary")

    # 7. counts
    rq = numbered(section(sec, "Review Questions"))
    if rq and not 8 <= len(rq) <= 12:
        review.append("%d review questions (target 8-12)" % len(rq))
    sr = len(re.findall(r"\*\*Stop and Retrieve:", body))
    if sr < 3:
        review.append("%d Stop and Retrieve prompts (target 3-5)" % sr)

    # 8. connections anchors resolve to a real heading
    slugs = set()
    for h in re.findall(r"^#{2,4}\s+(.+?)\s*$", text, re.M):
        slugs.add(re.sub(r"[^a-z0-9]+", "-", norm(h)).strip("-"))
    for m in re.finditer(r"\[([^\]]+)\]\(#([^)]+)\)", section(sec, "Connections")):
        label, anchor = m.group(1), m.group(2)
        if anchor not in slugs:
            near = [s for s in slugs if anchor.split("-")[0] and anchor.split("-")[0] in s]
            hint = (" (nearest: %s)" % near[0]) if near else ""
            review.append("Connections anchor #%s matches no heading%s" % (anchor, hint))

    return fails, review


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("paths", nargs="*")
    ap.add_argument("--all", action="store_true")
    a = ap.parse_args()
    targets = ([Path(p) for p in sorted(glob.glob(str(ROOT / "source/chapters/*.md")))
                if "_archive" not in p and "pre-audit" not in p]
               if a.all else [Path(p) for p in a.paths])
    if not targets:
        print("nothing to check")
        return 2
    worst = 0
    for p in targets:
        if not p.exists():
            print("missing: %s" % p)
            worst = 2
            continue
        fails, review = check(p)
        status = "FAIL" if fails else ("REVIEW" if review else "CLEAN")
        print("\n%-7s %-44s fail=%d review=%d" % (status, p.name, len(fails), len(review)))
        for f in fails:
            print("   FAIL    " + f)
        for r in review:
            print("   review  " + r)
        worst = max(worst, 1 if fails else 0)
    print("\n%s" % ("FAILURES PRESENT" if worst else "no hard failures"))
    return worst


if __name__ == "__main__":
    sys.exit(main())
