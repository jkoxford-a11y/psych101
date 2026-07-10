#!/usr/bin/env python3
"""
Context budget meter for the Psych101 project.

Prints the approximate token weight (bytes / 4) of the files an agent loads in a
typical session, so drift can be watched over time. This is a rough proxy, not a
tokenizer -- use it to compare, not for exact accounting.

  python pipeline/context_budget.py           # print snapshot only
  python pipeline/context_budget.py --log     # print + append a summary row to
                                                pipeline/context_budget_log.csv
"""
import argparse
import csv
import datetime
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
LOG_PATH = ROOT / "pipeline" / "context_budget_log.csv"


def tok(b):
    return b // 4


def size(p):
    p = ROOT / p
    return p.stat().st_size if p.exists() else 0


def handoff_split():
    p = ROOT / "HANDOFF.md"
    if not p.exists():
        return (0, 0)
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


def append_log(totals):
    fieldnames = [
        "date",
        "handoff_start_tok",
        "handoff_full_tok",
        "ref_data_tok",
        "specs_tok",
        "chapter_md_tok",
        "provenance_tok",
        "html_tok",
    ]
    is_new = not LOG_PATH.exists()
    row = {
        "date": datetime.date.today().isoformat(),
        "handoff_start_tok": totals["handoff_start"] // 4,
        "handoff_full_tok": totals["handoff_full"] // 4,
        "ref_data_tok": totals["ref_data"] // 4,
        "specs_tok": totals["specs"] // 4,
        "chapter_md_tok": totals["chapter_md"] // 4,
        "provenance_tok": totals["provenance"] // 4,
        "html_tok": totals["html"] // 4,
    }
    with LOG_PATH.open("a", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        if is_new:
            w.writeheader()
        w.writerow(row)
    print(f"\nLogged to {LOG_PATH.relative_to(ROOT)}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--log",
        action="store_true",
        help="append a summary row (tokens per category) to pipeline/context_budget_log.csv",
    )
    args = ap.parse_args()

    print("Psych101 context budget  (~tokens = bytes / 4, rough proxy)")

    totals = {}

    start_b, full_b = handoff_split()
    totals["handoff_start"] = start_b
    totals["handoff_full"] = full_b
    section("Session-start read (mandatory per project rules)", [
        ("HANDOFF.md — Current Status + Next Up (intended read)", start_b),
        ("HANDOFF.md — full file (if over-read)", full_b),
    ])

    ref_rows = [
        ("concept_lineage_revised.csv", size("source/concept_lineage_revised.csv")),
        ("voice_profile_merged.csv", size("source/voice_profile_merged.csv")),
    ]
    totals["ref_data"] = section("Reference data (pull rows, don't Read whole)", ref_rows)

    specs = sorted((ROOT / "pipeline").glob("*.md"))
    spec_rows = [(p.name, p.stat().st_size) for p in specs]
    totals["specs"] = section("Specs in pipeline/ (know which are draft-time vs archival)", spec_rows)

    chs = sorted((ROOT / "source" / "chapters").glob("ch*.md"))
    chs = [p for p in chs if "EDIT-SHEET" not in p.name]
    ch_rows = [(p.name, p.stat().st_size) for p in chs]
    totals["chapter_md"] = section("Chapter markdown (hot path — read during editing)", ch_rows)

    prov = ROOT / "source" / "chapters" / "_provenance"
    totals["provenance"] = 0
    if prov.exists():
        pv = sum(p.stat().st_size for p in prov.glob("*.md"))
        totals["provenance"] = section(
            "Provenance sidecars (now OUT of the hot path)",
            [("_provenance/*.md (loaded only on demand)", pv)],
        )

    htmls = sorted((ROOT / "docs" / "chapters").glob("*.html"))
    html_rows = [(p.name, p.stat().st_size) for p in htmls]
    totals["html"] = section("Built HTML chapters (most expensive single reads)", html_rows)

    if args.log:
        append_log(totals)


if __name__ == "__main__":
    main()
