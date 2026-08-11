#!/usr/bin/env python3
"""Audit answer-position patterns in active chapter questions and Learning Labs.

Warnings are intentionally conservative:

* all answers occupy one position for at least 3 scored items;
* the same position occurs 4 or more times consecutively;
* one position holds more than 60% of answers for at least 8 scored items;
* a sequence of at least 6 items follows a conspicuous monotonic position march;
* a 2- or 3-position cycle repeats mechanically for at least 6 items.

Unequal distributions do not fail this check. Malformed declarations, positions
outside the available choices, and static-parser failures do produce a nonzero
exit status. Supported lab formats are enumerated below; active non-quiz labs
are reported explicitly as skipped.
"""

from __future__ import annotations

import ast
import re
import sys
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

CHAPTERS = [
    ("Ch 1", "source/chapters/ch01-history-approaches.md"),
    ("Ch 2", "source/chapters/ch02-research-methods.md"),
    ("Ch 3", "source/chapters/ch03-neuroscience-biological-bases.md"),
    ("Ch 4", "source/chapters/ch04-sensation-perception.md"),
    ("Ch 5", "source/chapters/ch05-consciousness.md"),
    ("Ch 6", "source/chapters/ch06-sleep.md"),
    ("Ch 7", "source/chapters/ch07-learning.md"),
    ("Ch 8", "source/chapters/ch08-memory.md"),
    ("Ch 9", "source/chapters/09-thinking-language-intelligence.md"),
    ("Ch 10", "source/chapters/ch10-lifespan-development.md"),
    ("Ch 11", "source/chapters/ch11-social-psychology.md"),
    ("Ch 12", "source/chapters/ch12-emotion-stress-coping.md"),
    ("Ch 13", "source/chapters/ch13-psychological-disorders-therapy.md"),
]

EXAM_BANKS = [
    ("Exam bank Ch 1", "pipeline/exam-bank/ch01-exam-bank.md"),
    ("Exam bank Ch 2", "pipeline/exam-bank/ch02-exam-bank.md"),
]

SKIPPED_LABS = [
    ("docs/labs/ch03/action-potential-threshold.html", "prediction plus simulation; no scored knowledge-choice items"),
    ("docs/labs/ch04/blind-spot-filling-in.html", "perceptual observation; no single objectively correct response"),
    ("docs/labs/ch04/context-and-ambiguous-perception.html", "context-sensitive interpretation; no single objectively correct response"),
    ("docs/labs/ch04/heider-simmel/index.html", "open observation and free response"),
    ("docs/labs/ch04/signal-detection.html", "psychophysical simulation; responses are detections, not quiz answers"),
    ("docs/labs/ch04/webers-law.html", "psychophysical comparison; responses are observations, not scored quiz answers"),
    ("docs/labs/ch07/classical-conditioning.html", "simulation controls; no scored choice items"),
    ("docs/labs/ch08/interactive-imagery.html", "prediction and recall experiment; no scored choice items"),
    ("docs/labs/ch08/levels-of-processing.html", "prediction and recall experiment; no scored choice items"),
    ("docs/labs/ch08/self-reference-effect.html", "prediction and recall experiment; no scored choice items"),
    ("docs/labs/ch08/sperling-partial-report.html", "free-recall experiment; no scored choice items"),
]


@dataclass
class AuditRow:
    source: str
    positions: list[int | None]
    option_counts: list[int]
    warnings: list[str] = field(default_factory=list)

    def validate(self) -> None:
        if len(self.positions) != len(self.option_counts):
            self.warnings.append("malformed: answer/option counts differ")
            return
        for item, (position, option_count) in enumerate(zip(self.positions, self.option_counts), 1):
            if position is None:
                self.warnings.append(f"malformed: item {item} has no declared answer")
            elif position < 1 or position > option_count:
                self.warnings.append(
                    f"malformed: item {item} answer position {position} outside 1-{option_count}"
                )

    @property
    def usable(self) -> list[int]:
        return [position for position in self.positions if isinstance(position, int)]


def read(relative: str) -> str:
    return (ROOT / relative).read_text(encoding="utf-8")


def extract_balanced(text: str, start: int, opener: str, closer: str) -> str:
    if start < 0 or text[start] != opener:
        raise ValueError(f"expected {opener!r} at offset {start}")
    depth = 0
    quote = ""
    escaped = False
    for index in range(start, len(text)):
        char = text[index]
        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = ""
            continue
        if char in "'\"`":
            quote = char
        elif char == opener:
            depth += 1
        elif char == closer:
            depth -= 1
            if depth == 0:
                return text[start : index + 1]
    raise ValueError(f"unclosed {opener!r} block")


def named_array(text: str, name: str) -> str:
    match = re.search(rf"\b(?:const|var)\s+{re.escape(name)}\s*=\s*\[", text)
    if not match:
        raise ValueError(f"array {name} not found")
    start = text.find("[", match.start())
    return extract_balanced(text, start, "[", "]")


def keyed_array(obj: str, key: str) -> str:
    match = re.search(rf"\b{re.escape(key)}\s*:\s*\[", obj)
    if not match:
        raise ValueError(f"array field {key} not found")
    start = obj.find("[", match.start())
    return extract_balanced(obj, start, "[", "]")


def top_level_objects(array_text: str) -> list[str]:
    objects: list[str] = []
    square_depth = 0
    brace_depth = 0
    start = -1
    quote = ""
    escaped = False
    for index, char in enumerate(array_text):
        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = ""
            continue
        if char in "'\"`":
            quote = char
        elif char == "[":
            square_depth += 1
        elif char == "]":
            square_depth -= 1
        elif char == "{":
            if square_depth == 1 and brace_depth == 0:
                start = index
            brace_depth += 1
        elif char == "}":
            brace_depth -= 1
            if square_depth == 1 and brace_depth == 0 and start >= 0:
                objects.append(array_text[start : index + 1])
                start = -1
    return objects


def field_string(obj: str, key: str) -> str:
    match = re.search(rf"\b{re.escape(key)}\s*:\s*(['\"])([^'\"]+)\1", obj)
    if not match:
        raise ValueError(f"string field {key} not found")
    return match.group(2)


def field_bool(obj: str, key: str) -> bool:
    match = re.search(rf"\b{re.escape(key)}\s*:\s*(true|false)\b", obj)
    if not match:
        raise ValueError(f"boolean field {key} not found")
    return match.group(1) == "true"


def field_int(obj: str, key: str) -> int:
    match = re.search(rf"\b{re.escape(key)}\s*:\s*(\d+)\b", obj)
    if not match:
        raise ValueError(f"integer field {key} not found")
    return int(match.group(1))


def html_attrs(tag: str) -> dict[str, str]:
    return {
        match.group(1).lower(): match.group(3)
        for match in re.finditer(r"""([\w:-]+)\s*=\s*(["'])(.*?)\2""", tag, re.S)
    }


def radio_order(html_path: str, name: str) -> list[str]:
    values = []
    for match in re.finditer(r"<input\b[^>]*>", read(html_path), re.I):
        attrs = html_attrs(match.group(0))
        if attrs.get("type", "").lower() == "radio" and attrs.get("name") == name:
            values.append(attrs.get("value", ""))
    if not values:
        raise ValueError(f"radio group {name} not found in {html_path}")
    return values


def select_order(html_path: str, select_id: str) -> list[str]:
    html = read(html_path)
    match = re.search(
        rf"<select\b[^>]*\bid=(['\"]){re.escape(select_id)}\1[^>]*>(.*?)</select>",
        html,
        re.I | re.S,
    )
    if not match:
        raise ValueError(f"select {select_id} not found in {html_path}")
    values = []
    for option in re.finditer(r"<option\b[^>]*>", match.group(2), re.I):
        value = html_attrs(option.group(0)).get("value", "")
        if value:
            values.append(value)
    return values


def data_order(html_path: str, tag_name: str, data_name: str) -> list[str]:
    values = []
    for match in re.finditer(rf"<{tag_name}\b[^>]*>", read(html_path), re.I):
        value = html_attrs(match.group(0)).get(f"data-{data_name}", "")
        if value:
            values.append(value)
    if not values:
        raise ValueError(f"data-{data_name} controls not found in {html_path}")
    return values


def position(order: list[str], answer: str) -> int:
    try:
        return order.index(answer) + 1
    except ValueError as error:
        raise ValueError(f"answer {answer!r} absent from choices {order!r}") from error


def make_row(source: str, positions: list[int | None], option_counts: list[int]) -> AuditRow:
    row = AuditRow(source, positions, option_counts)
    row.validate()
    add_pattern_warnings(row)
    return row


def add_pattern_warnings(row: AuditRow) -> None:
    values = row.usable
    if not values:
        return
    if len(values) >= 3 and len(set(values)) == 1:
        row.warnings.append("all answers occupy one position")

    longest = 1
    run = 1
    for previous, current in zip(values, values[1:]):
        if current == previous:
            run += 1
            longest = max(longest, run)
        else:
            run = 1
    if longest >= 4:
        row.warnings.append(f"same-position run of {longest}")

    counts = Counter(values)
    max_count = max(counts.values())
    if len(values) >= 8 and max_count / len(values) > 0.60:
        row.warnings.append(
            f"severe concentration: {max_count}/{len(values)} in one position"
        )

    if (
        len(values) >= 6
        and len(set(values)) >= 4
        and (all(a <= b for a, b in zip(values, values[1:])) or all(a >= b for a, b in zip(values, values[1:])))
    ):
        row.warnings.append("conspicuous monotonic position march")

    for period in (2, 3, 4):
        if len(values) >= period * 3 and all(
            values[index] == values[index % period] for index in range(len(values))
        ):
            row.warnings.append(f"mechanical repeating cycle of {period}")
            break


def parse_chapter(label: str, source: str) -> AuditRow:
    markdown = read(source)
    section = re.search(
        r"^##\s+Review Questions\s*$([\s\S]*?)(?=^##\s|\Z)",
        markdown,
        re.M,
    )
    if not section:
        raise ValueError("Review Questions section not found")
    body = section.group(1)
    starts = list(
        re.finditer(r"^(?:\*\*(\d+)\.\*\*|(\d+)\.)\s+", body, re.M)
    )
    positions: list[int | None] = []
    option_counts: list[int] = []
    for index, start in enumerate(starts):
        block = body[start.start() : starts[index + 1].start() if index + 1 < len(starts) else len(body)]
        options = list(re.finditer(r"^\s*([a-z])[\)\.]\s+.+$", block, re.M | re.I))
        if len(options) < 2:
            continue
        answer_match = (
            re.search(r"\*Answer:\s*([a-z])\.", block, re.I)
            or re.search(r"<strong>\s*([a-z])\.\s*</strong>", block, re.I)
            or re.search(r"\*\*Answer:\*\*\s*([a-z])\.", block, re.I)
        )
        positions.append(
            ord(answer_match.group(1).lower()) - ord("a") + 1 if answer_match else None
        )
        option_counts.append(len(options))
    return make_row(label, positions, option_counts)


def parse_exam_bank(label: str, source: str) -> AuditRow:
    """Parse pipeline/exam-bank/chNN-exam-bank.md's Gate 2 candidate pool.

    Format differs from parse_chapter's book Review Questions: items are
    headed '**Item X.Y**' rather than numbered '**N.**', and the keyed
    option is marked inline with '**[KEY]**' rather than a separate
    'Answer:' line, since exam-bank items carry per-option metadata that
    the book's Review Questions don't.
    """
    markdown = read(source)
    section = re.search(
        r"^##\s+Gate 2\b.*$([\s\S]*?)(?=^##\s+Next step|\Z)",
        markdown,
        re.M,
    )
    if not section:
        raise ValueError("Gate 2 candidate-items section not found")
    body = section.group(1)
    starts = list(re.finditer(r"^\*\*Item\s+\S+\*\*\s*$", body, re.M))
    positions: list[int | None] = []
    option_counts: list[int] = []
    for index, start in enumerate(starts):
        block = body[start.start() : starts[index + 1].start() if index + 1 < len(starts) else len(body)]
        options = list(re.finditer(r"^([a-z])\)\s+.+$", block, re.M))
        if len(options) < 2:
            continue
        keyed = None
        for option in options:
            if "[KEY]" in option.group(0):
                keyed = ord(option.group(1).lower()) - ord("a") + 1
                break
        positions.append(keyed)
        option_counts.append(len(options))
    return make_row(label, positions, option_counts)


def parse_correlation() -> AuditRow:
    js = read("docs/js/labs-correlation-causation.js")
    objects = top_level_objects(named_array(js, "items"))
    html_path = "docs/labs/ch02/correlation-causation.html"
    default_orders = {
        "supportsCausation": radio_order(html_path, "causalSupport"),
        "reversePlausible": radio_order(html_path, "reverseCausation"),
        "thirdPlausible": radio_order(html_path, "thirdVariable"),
    }
    positions = []
    for obj in objects:
        for key in ("supportsCausation", "reversePlausible", "thirdPlausible"):
            order = default_orders[key]
            if key == "supportsCausation":
                try:
                    order = ast.literal_eval(keyed_array(obj, "causalSupportOrder"))
                except ValueError:
                    pass
            positions.append(position(order, "yes" if field_bool(obj, key) else "no"))
    return make_row("Lab correlation-causation", positions, [2] * len(positions))


def parse_simple_correct_objects(
    source_name: str,
    js_path: str,
    array_name: str,
    html_path: str,
    control_name: str,
    answer_key: str,
) -> AuditRow:
    objects = top_level_objects(named_array(read(js_path), array_name))
    order = radio_order(html_path, control_name)
    positions = [position(order, field_string(obj, answer_key)) for obj in objects]
    return make_row(source_name, positions, [len(order)] * len(positions))


def parse_consciousness() -> AuditRow:
    rows = ast.literal_eval(named_array(read("docs/js/labs-consciousness-evidence-claim-check.js"), "CASES"))
    order = radio_order(
        "docs/labs/ch05/consciousness-evidence-claim-check.html", "classification"
    )
    positions = [position(order, item[3]) for item in rows]
    return make_row("Lab consciousness-evidence", positions, [len(order)] * len(positions))


def parse_process_s_c() -> AuditRow:
    objects = top_level_objects(named_array(read("docs/js/labs-process-s-process-c.js"), "SCENARIOS"))
    process_choices = radio_order(
        "docs/labs/ch06/process-s-process-c.html", "process-choice"
    )
    positions = []
    option_counts = []
    for obj in objects:
        positions.append(position(process_choices, field_string(obj, "process")))
        option_counts.append(len(process_choices))
        outcomes = ast.literal_eval(keyed_array(obj, "outcomes"))
        outcome_order = [item[0] for item in outcomes]
        positions.append(position(outcome_order, field_string(obj, "correctOutcome")))
        option_counts.append(len(outcome_order))
    return make_row("Lab process-s-process-c", positions, option_counts)


def parse_misinformation() -> AuditRow:
    objects = top_level_objects(
        named_array(read("docs/js/labs-misinformation-effect.js"), "MEMORY_QUESTIONS")
    )
    positions = []
    option_counts = []
    for obj in objects:
        options = top_level_objects(keyed_array(obj, "options"))
        correct = [index + 1 for index, item in enumerate(options) if re.search(r"\bcorrect\s*:\s*true\b", item)]
        positions.append(correct[0] if len(correct) == 1 else None)
        option_counts.append(len(options))
    return make_row("Lab misinformation-effect", positions, option_counts)


def parse_fluid() -> AuditRow:
    objects = top_level_objects(
        named_array(read("docs/js/labs-fluid-intelligence-rule-finding.js"), "puzzles")
    )
    positions = []
    option_counts = []
    for obj in objects:
        choices = ast.literal_eval(keyed_array(obj, "choices"))
        positions.append(field_int(obj, "correct") + 1)
        option_counts.append(len(choices))
    return make_row("Lab fluid-intelligence", positions, option_counts)


def parse_semantic_map() -> AuditRow:
    js = read("docs/js/labs-semantic-map.js")
    positions = []
    option_counts = []
    for obj in top_level_objects(named_array(js, "comparisonQuestions")):
        try:
            answer = field_string(obj, "correct")
        except ValueError:
            continue
        options = ast.literal_eval(keyed_array(obj, "options"))
        order = [item[0] for item in options]
        positions.append(position(order, answer))
        option_counts.append(len(order))
    direction = radio_order("docs/labs/ch09/semantic-map.html", "consequenceDirection")
    behavior = radio_order("docs/labs/ch09/semantic-map.html", "behaviorChange")
    reinforcement = radio_order("docs/labs/ch09/semantic-map.html", "isReinforcement")
    for obj in top_level_objects(named_array(js, "transferCases")):
        for key, order in (
            ("direction", direction),
            ("behavior", behavior),
            ("reinforcement", reinforcement),
        ):
            positions.append(position(order, field_string(obj, key)))
            option_counts.append(len(order))
    return make_row("Lab semantic-map", positions, option_counts)


def parse_zpd() -> AuditRow:
    js = read("docs/js/labs-zpd-fading-support.js")
    html = read("docs/labs/ch10/zpd-fading-support.html")
    required = [
        "state.baseline.classification === 'yes'",
        "worked classification is <strong>No</strong>",
        "state.scaffold.classification === 'no'",
    ]
    for marker in required:
        if marker not in (js + html):
            raise ValueError(f"expected scored-answer marker not found: {marker}")
    groups = [
        ("baseline-classification", "yes"),
        ("complete-answer-classification", "no"),
        ("scaffold-classification", "no"),
    ]
    positions = []
    option_counts = []
    for name, answer in groups:
        order = radio_order("docs/labs/ch10/zpd-fading-support.html", name)
        positions.append(position(order, answer))
        option_counts.append(len(order))
    return make_row("Lab zpd-fading-support", positions, option_counts)


def parse_change_situation() -> AuditRow:
    js = read("docs/js/labs-change-the-situation.js")
    answers = re.findall(r"answers\.(?:variable|behavior|mechanism)\s*!==\s*'([^']+)'", js)
    select_ids = [
        "asch-variable", "asch-behavior", "asch-mechanism",
        "milgram-variable", "milgram-behavior", "milgram-mechanism",
        "bystander-variable", "bystander-behavior", "bystander-mechanism",
    ]
    if len(answers) != len(select_ids):
        raise ValueError(f"expected 9 scored select answers, found {len(answers)}")
    positions = []
    option_counts = []
    for select_id, answer in zip(select_ids, answers):
        order = select_order("docs/labs/ch11/change-the-situation.html", select_id)
        positions.append(position(order, answer))
        option_counts.append(len(order))
    return make_row("Lab change-the-situation", positions, option_counts)


def parse_coping_fit() -> AuditRow:
    objects = top_level_objects(named_array(read("docs/js/labs-coping-fit.js"), "scenarios"))
    orders = {
        "control": select_order("docs/labs/ch12/coping-fit.html", "control-select"),
        "arousal": select_order("docs/labs/ch12/coping-fit.html", "arousal-select"),
        "strategy": select_order("docs/labs/ch12/coping-fit.html", "strategy-select"),
    }
    positions = []
    option_counts = []
    for obj in objects:
        for key in ("control", "arousal", "strategy"):
            positions.append(position(orders[key], field_string(obj, key)))
            option_counts.append(len(orders[key]))
    return make_row("Lab coping-fit", positions, option_counts)


def parse_diagnosis() -> AuditRow:
    objects = top_level_objects(
        named_array(read("docs/js/labs-diagnosis-under-uncertainty.js"), "disclosures")
    )
    positions = []
    option_counts = []
    for obj in objects:
        order = ast.literal_eval(keyed_array(obj, "choiceOrder"))
        positions.append(position(order, field_string(obj, "expected")))
        option_counts.append(len(order))
    return make_row("Lab diagnosis-uncertainty", positions, option_counts)


def parse_lossy() -> AuditRow:
    js = read("docs/js/labs-lossy-compression.js")
    html_path = "docs/labs/integration/lossy-compression.html"
    positions = []
    option_counts = []

    parity_order = data_order(html_path, "button", "parity")
    for number in ast.literal_eval(named_array(js, "DISTRACTOR_NUMBERS")):
        answer = "even" if number % 2 == 0 else "odd"
        positions.append(position(parity_order, answer))
        option_counts.append(len(parity_order))

    memory_order = radio_order(html_path, "memory-choice")
    for obj in top_level_objects(named_array(js, "TEST_WORDS")):
        answer = "shown" if field_bool(obj, "shown") else "not-shown"
        positions.append(position(memory_order, answer))
        option_counts.append(len(memory_order))

    diagnosis_order = radio_order(html_path, "diagnosis-choice")
    positions.append(position(diagnosis_order, "shared-pattern"))
    option_counts.append(len(diagnosis_order))

    for obj in top_level_objects(named_array(js, "TRANSFER_CLAIMS")):
        claim_id = field_string(obj, "id")
        order = select_order(html_path, f"claim-{claim_id}")
        positions.append(position(order, field_string(obj, "correct")))
        option_counts.append(len(order))
    return make_row("Lab lossy-compression", positions, option_counts)


LAB_PARSERS = [
    parse_correlation,
    lambda: parse_simple_correct_objects(
        "Lab chemical-imbalance",
        "docs/js/labs-chemical-imbalance-claim-check.js",
        "claims",
        "docs/labs/ch03/chemical-imbalance-claim-check.html",
        "classification",
        "correct",
    ),
    lambda: parse_simple_correct_objects(
        "Lab dopamine-prediction-error",
        "docs/js/labs-dopamine-prediction-error.js",
        "trials",
        "docs/labs/ch03/dopamine-prediction-error.html",
        "trialPrediction",
        "error",
    ),
    parse_consciousness,
    parse_process_s_c,
    lambda: parse_simple_correct_objects(
        "Lab sleep-state-detective",
        "docs/js/labs-sleep-state-detective.js",
        "CASES",
        "docs/labs/ch06/sleep-state-detective.html",
        "classification",
        "correct",
    ),
    parse_misinformation,
    parse_fluid,
    parse_semantic_map,
    parse_zpd,
    parse_change_situation,
    parse_coping_fit,
    parse_diagnosis,
    parse_lossy,
]


def sequence_text(row: AuditRow) -> str:
    return "".join(LETTERS[value - 1] if isinstance(value, int) and value <= len(LETTERS) else "?" for value in row.positions) or "-"


def option_text(row: AuditRow) -> str:
    if not row.option_counts:
        return "-"
    counts = Counter(row.option_counts)
    if len(counts) == 1:
        return str(next(iter(counts)))
    return "/".join(f"{size}x{count}" for size, count in sorted(counts.items()))


def counts_text(row: AuditRow) -> str:
    if not row.usable:
        return "-"
    counts = Counter(row.usable)
    return " ".join(f"{LETTERS[index - 1]}:{counts[index]}" for index in range(1, max(counts) + 1))


def longest_text(row: AuditRow) -> str:
    values = row.usable
    if not values:
        return "-"
    best_value = values[0]
    best_length = current_length = 1
    for previous, current in zip(values, values[1:]):
        if current == previous:
            current_length += 1
            if current_length > best_length:
                best_value, best_length = current, current_length
        else:
            current_length = 1
    return f"{LETTERS[best_value - 1]}{best_length}"


def print_table(rows: list[AuditRow]) -> None:
    headers = ["Source", "Items", "Options", "Sequence", "Counts", "Run", "Warnings"]
    data = [
        [
            row.source,
            str(len(row.positions)),
            option_text(row),
            sequence_text(row),
            counts_text(row),
            longest_text(row),
            "; ".join(row.warnings) if row.warnings else "-",
        ]
        for row in rows
    ]
    widths = [len(header) for header in headers]
    for record in data:
        widths = [max(width, len(value)) for width, value in zip(widths, record)]
    print("  ".join(header.ljust(width) for header, width in zip(headers, widths)))
    print("  ".join("-" * width for width in widths))
    for record in data:
        print("  ".join(value.ljust(width) for value, width in zip(record, widths)))


def main() -> int:
    rows: list[AuditRow] = []
    parse_errors: list[str] = []
    for label, source in CHAPTERS:
        try:
            rows.append(parse_chapter(label, source))
        except Exception as error:  # compact tool output is more useful than a traceback
            parse_errors.append(f"{label}: {error}")
    for label, source in EXAM_BANKS:
        try:
            rows.append(parse_exam_bank(label, source))
        except Exception as error:
            parse_errors.append(f"{label}: {error}")
    for parser in LAB_PARSERS:
        try:
            rows.append(parser())
        except Exception as error:
            parse_errors.append(f"{getattr(parser, '__name__', 'lab parser')}: {error}")

    print_table(rows)
    print("\nSkipped active non-quiz lab formats:")
    for source, reason in SKIPPED_LABS:
        print(f"- {source}: {reason}")

    malformed = [
        f"{row.source}: {warning}"
        for row in rows
        for warning in row.warnings
        if warning.startswith("malformed:")
    ]
    if parse_errors or malformed:
        print("\nERRORS:")
        for message in parse_errors + malformed:
            print(f"- {message}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
