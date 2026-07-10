#!/usr/bin/env python3
"""
Context budget meter for the Psych101 project.

Prints the approximate token weight (bytes / 4) of the files an agent loads in a
typical session, so drift can be watched over time. This is a rough proxy, not a
tokenizer -- use it to compare, not for exact accounting.

  python pipeline/context_budget.py
"""
import pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
def tok(b): return b // 4
def size(p):
    p = ROOT / p
    return p.stat().st_size if p.exists() else 0

def handoff_split():
    p = ROOT / "HANDOFF.md"
    if not p.exists(): return (0, 0)
    raw = p.read_text(encoding="utf-8", errors="replace")
    m = re.search(r"(?m)^## Session Log", raw)
    start = raw[:m.start()] if m else raw
    return (len(start.encode()), len(raw.encode()))

def section(title, rows):
    print(f"\n== {title} ==")
    tot = 0
    for label, b in rows:
        tot += b
        print(f"  {label:46s} {b//4:7d} tok  ({b:8d} B)")
    print(f"  {'-'*46} {'-'*7}")
    print(f"  {'subtotal':46s} {tot//4:7d} tok")
    return tot

def main():
    print("Psych101 context budget  (~tokens = bytes / 4, rough proxy)")

    start_b, full_b = handoff_split()
    section("Session-start read (mandatory per project rules)", [
        ("HANDOFF.md — Current Status + Next Up (intended read)", start_b),
        ("HANDOFF.md — full file (if over-read)", full_b),
    ])

    section("Reference data (pull rows, don't Read whole)", [
        ("concept_lineage_revised.csv", size("source/concept_lineage_revised.csv")),
        ("voice_profile_merged.csv", size("source/voice_profile_merged.csv")),
    ])

    specs = sorted((ROOT/"pipeline").glob("*.md"))
    section("Specs in pipeline/ (know which are draft-time vs archival)",
            [(p.name, p.stat().st_size) for p in specs])

    chs = sorted((ROOT/"source"/"chapters").glob("ch*.md"))
    chs = [p for p in chs if "EDIT-SHEET" not in p.name]
    section("Chapter markdown (hot path — read during editing)",
            [(p.name, p.stat().st_size) for p in chs])

    prov = ROOT/"source"/"chapters"/"_provenance"
    if prov.exists():
        pv = sum(p.stat().st_size for p in prov.glob("*.md"))
        section("Provenance sidecars (now OUT of the hot path)",
                [("_provenance/*.md (loaded only on demand)", pv)])

    htmls = sorted((ROOT/"docs"/"chapters").glob("*.html"))
    section("Built HTML chapters (most expensive single reads)",
            [(p.name, p.stat().st_size) for p in htmls])

if __name__ == "__main__":
    main()
