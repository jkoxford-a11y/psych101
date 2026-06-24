from pathlib import Path
import html
import math


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs" / "images" / "ch08"
OUT.mkdir(parents=True, exist_ok=True)

for stale in [
    "ch08_wason_selection_task_rule_testing.svg",
    "ch08_wason_selection_task_rule_testing.png",
]:
    stale_path = OUT / stale
    if stale_path.exists():
        stale_path.unlink()

W, H = 1600, 900
FONT = "Aptos, Arial, sans-serif"


def esc(value):
    return html.escape(value, quote=True)


def text(x, y, value, size=28, weight=500, fill="#243b53", anchor="start", extra=""):
    return (
        f'<text x="{x}" y="{y}" font-family="{FONT}" font-size="{size}" '
        f'font-weight="{weight}" fill="{fill}" text-anchor="{anchor}" {extra}>{esc(value)}</text>'
    )


def multiline(x, y, lines, size=28, weight=500, fill="#243b53", anchor="start", leading=1.25):
    tspans = []
    for i, line in enumerate(lines):
        dy = 0 if i == 0 else size * leading
        tspans.append(f'<tspan x="{x}" dy="{dy}">{esc(line)}</tspan>')
    return (
        f'<text x="{x}" y="{y}" font-family="{FONT}" font-size="{size}" '
        f'font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">'
        + "".join(tspans)
        + "</text>"
    )


def shell(title, subtitle=None):
    subtitle_svg = (
        text(96, 152, subtitle, 22, 400, "#52606d")
        if subtitle
        else ""
    )
    return f'''<rect width="{W}" height="{H}" fill="#ffffff"/>
<rect x="52" y="54" width="1496" height="792" rx="24" fill="#f8fbfd" stroke="#dde7ee" stroke-width="2"/>
{text(96, 116, title, 42, 700, "#102a43")}
{subtitle_svg}'''


def save(stem, svg):
    path = OUT / f"{stem}.svg"
    path.write_text(svg, encoding="utf-8")
    return path


defs = '''<defs>
  <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
    <feDropShadow dx="0" dy="8" stdDeviation="9" flood-color="#102a43" flood-opacity="0.12"/>
  </filter>
  <marker id="arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0,0 L10,5 L0,10 Z" fill="#52606d"/>
  </marker>
</defs>'''


# 1. Linda nested set conjunction fallacy
stem = "ch08_linda_nested_set_conjunction_fallacy"
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="title desc">
<title id="title">Nested sets and the conjunction fallacy</title>
<desc id="desc">A large circle for bank tellers contains a smaller circle for feminist bank tellers, showing that the subset cannot be more probable than the containing set.</desc>
{defs}
{shell("The Conjunction Fallacy", "A specific combination can feel more plausible while being less probable.")}
<g filter="url(#softShadow)">
  <circle cx="800" cy="440" r="285" fill="#eaf4f8" stroke="#2f5d7c" stroke-width="5"/>
  <circle cx="875" cy="470" r="138" fill="#f7d5c2" stroke="#c65f4b" stroke-width="5"/>
</g>
{text(695, 290, "Bank tellers", 40, 700, "#102a43", "middle")}
{multiline(875, 457, ["Feminist", "bank tellers"], 32, 700, "#8f3d2e", "middle")}
<line x1="400" y1="742" x2="1200" y2="742" stroke="#c9d6df" stroke-width="2"/>
{text(800, 786, "A subset cannot be more probable than the set that contains it.", 28, 700, "#102a43", "middle")}
</svg>'''
save(stem, svg)


# 2. Bias question substitution matrix
stem = "ch08_bias_question_substitution_matrix"
rows = [
    ("Availability", "How common is it?", "What examples come to mind quickly?"),
    ("Representativeness", "How likely is this case?", "What does it resemble?"),
    ("Confirmation bias", "Is this belief true?", "What supports my first belief?"),
    ("Framing", "What are the actual outcomes?", "Does this sound like a gain or a loss?"),
    ("Anchoring", "What is a fair estimate?", "What number did I hear first?"),
]
row_h = 96
y0 = 254
svg_rows = []
for i, (bias, hard, easy) in enumerate(rows):
    y = y0 + i * row_h
    fill = "#ffffff" if i % 2 == 0 else "#f3f8fb"
    svg_rows.append(f'<rect x="140" y="{y}" width="1320" height="{row_h}" fill="{fill}" stroke="#dde7ee" stroke-width="1.5"/>')
    svg_rows.append(text(176, y + 59, bias, 26, 700, "#102a43"))
    svg_rows.append(text(520, y + 59, hard, 24, 500, "#243b53"))
    svg_rows.append(text(980, y + 59, easy, 24, 500, "#243b53"))
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="title desc">
<title id="title">Biases as question substitution</title>
<desc id="desc">A matrix pairs five cognitive biases with hard questions and simpler shortcut questions that fast thinking tends to answer instead.</desc>
{defs}
{shell("Biases as Question Substitution", "Fast thinking often answers a simpler question than the one actually asked.")}
<g filter="url(#softShadow)">
  <rect x="140" y="196" width="1320" height="538" rx="18" fill="#ffffff" stroke="#c9d6df" stroke-width="2.5"/>
</g>
<rect x="140" y="196" width="1320" height="58" rx="18" fill="#2f5d7c"/>
<rect x="140" y="225" width="1320" height="29" fill="#2f5d7c"/>
{text(176, 234, "Bias", 24, 700, "#ffffff")}
{text(520, 234, "Hard question", 24, 700, "#ffffff")}
{text(980, 234, "Shortcut question", 24, 700, "#ffffff")}
<line x1="480" y1="196" x2="480" y2="734" stroke="#c9d6df" stroke-width="2"/>
<line x1="940" y1="196" x2="940" y2="734" stroke="#c9d6df" stroke-width="2"/>
{''.join(svg_rows)}
<rect x="140" y="196" width="1320" height="538" rx="18" fill="none" stroke="#c9d6df" stroke-width="2.5"/>
</svg>'''
save(stem, svg)


# 3. IQ standardization curve
stem = "ch08_iq_standardization_curve"
baseline_y = 640
left_x = 260
right_x = 1340
mean = 100
sd = 15
points = []
for i in range(0, 241):
    z = -3.4 + (6.8 * i / 240)
    x = 800 + z * 160
    y = baseline_y - 330 * math.exp(-(z * z) / 2)
    points.append((x, y))
curve_d = "M" + " L".join(f"{x:.1f},{y:.1f}" for x, y in points)
fill_d = curve_d + f" L{points[-1][0]:.1f},{baseline_y} L{points[0][0]:.1f},{baseline_y} Z"
markers = []
for score in [70, 85, 100, 115, 130]:
    z = (score - mean) / sd
    x = 800 + z * 160
    y = baseline_y - 330 * math.exp(-(z * z) / 2)
    color = "#c65f4b" if score == 100 else "#466b80"
    markers.append(f'<line x1="{x:.1f}" y1="{baseline_y}" x2="{x:.1f}" y2="{y:.1f}" stroke="{color}" stroke-width="3"/>')
    markers.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="8" fill="{color}" stroke="#ffffff" stroke-width="3"/>')
    markers.append(text(x, baseline_y + 46, str(score), 25, 700, "#243b53", "middle"))
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="title desc">
<title id="title">IQ standardization curve</title>
<desc id="desc">A normal curve centered at IQ 100 with score markers at 70, 85, 100, 115, and 130, and labels for mean and standard deviation.</desc>
{defs}
{shell("IQ Scores Are Standardized", "The number is interpreted relative to a norming sample.")}
<g filter="url(#softShadow)">
  <rect x="160" y="216" width="1280" height="520" rx="18" fill="#ffffff" stroke="#c9d6df" stroke-width="2.5"/>
</g>
<path d="{fill_d}" fill="#eaf4f8"/>
<path d="{curve_d}" fill="none" stroke="#2f5d7c" stroke-width="5" stroke-linecap="round"/>
<line x1="{left_x}" y1="{baseline_y}" x2="{right_x}" y2="{baseline_y}" stroke="#52606d" stroke-width="3"/>
{''.join(markers)}
<rect x="630" y="238" width="340" height="70" rx="16" fill="#fff8ef" stroke="#e5b088" stroke-width="2"/>
{text(800, 280, "Mean = 100", 28, 700, "#8f3d2e", "middle")}
<line x1="800" y1="536" x2="960" y2="536" stroke="#d97b48" stroke-width="4"/>
<line x1="800" y1="522" x2="800" y2="550" stroke="#d97b48" stroke-width="4"/>
<line x1="960" y1="522" x2="960" y2="550" stroke="#d97b48" stroke-width="4"/>
{text(880, 518, "1 SD = 15", 26, 700, "#8f3d2e", "middle")}
{text(800, 720, "IQ score", 23, 700, "#52606d", "middle")}
<rect x="510" y="736" width="580" height="52" rx="26" fill="#eaf4f8" stroke="#c9d6df" stroke-width="2"/>
{text(800, 771, "Scores are relative to a norming sample.", 25, 700, "#102a43", "middle")}
</svg>'''
save(stem, svg)


# 4. Wason selection task prompt and answer
def wason_cards(highlight=False):
    cards = [
        ("E", 300, highlight),
        ("K", 590, False),
        ("4", 880, False),
        ("7", 1170, highlight),
    ]
    card_svg = []
    for label, x, is_highlighted in cards:
        fill = "#fff8ef" if is_highlighted else "#ffffff"
        stroke = "#d97b48" if is_highlighted else "#c9d6df"
        card_svg.append(f'<rect x="{x}" y="314" width="180" height="240" rx="18" fill="{fill}" stroke="{stroke}" stroke-width="5"/>')
        card_svg.append(text(x + 90, 455, label, 98, 800, "#102a43", "middle"))
        if is_highlighted:
            card_svg.append(f'<rect x="{x - 8}" y="306" width="196" height="256" rx="22" fill="none" stroke="#d97b48" stroke-width="5" stroke-dasharray="14 10"/>')
    return "".join(card_svg)


stem = "ch08_wason_selection_task_prompt"
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="title desc">
<title id="title">Wason selection task prompt</title>
<desc id="desc">Four cards labeled E, K, 4, and 7 under the rule If vowel, then even number, asking which cards must be turned over.</desc>
{defs}
{shell("Testing a Conditional Rule", "Which evidence would actually test the rule?")}
<rect x="456" y="184" width="688" height="72" rx="18" fill="#ffffff" stroke="#c9d6df" stroke-width="2.5"/>
{text(800, 231, 'Rule: "If vowel, then even number."', 32, 700, "#102a43", "middle")}
<g filter="url(#softShadow)">
  {wason_cards(False)}
</g>
<rect x="490" y="680" width="620" height="58" rx="29" fill="#eaf4f8" stroke="#c9d6df" stroke-width="2"/>
{text(800, 718, "Which cards must you turn over?", 28, 700, "#102a43", "middle")}
</svg>'''
save(stem, svg)


stem = "ch08_wason_selection_task_answer"
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="title desc">
<title id="title">Wason selection task answer</title>
<desc id="desc">Four cards labeled E, K, 4, and 7 under the rule If vowel, then even number. E and 7 are highlighted as diagnostic.</desc>
{defs}
{shell("Testing a Conditional Rule", "Diagnostic cards can confirm what is required or reveal a violation.")}
<rect x="456" y="184" width="688" height="72" rx="18" fill="#ffffff" stroke="#c9d6df" stroke-width="2.5"/>
{text(800, 231, 'Rule: "If vowel, then even number."', 32, 700, "#102a43", "middle")}
<g filter="url(#softShadow)">
  {wason_cards(True)}
</g>
{text(390, 618, "E: checks the vowel", 22, 700, "#8f3d2e", "middle")}
{text(680, 618, "K: irrelevant", 23, 700, "#52606d", "middle")}
{text(970, 618, "4: tempting, not diagnostic", 22, 700, "#52606d", "middle")}
{text(1260, 618, "7: could falsify the rule", 22, 700, "#8f3d2e", "middle")}
<path d="M390,586 L390,560" stroke="#d97b48" stroke-width="3" marker-end="url(#arrow)"/>
<path d="M1260,586 L1260,560" stroke="#d97b48" stroke-width="3" marker-end="url(#arrow)"/>
</svg>'''
save(stem, svg)


readme = '''# Chapter 8 Images

## Linda Nested Set Conjunction Fallacy

**Files:** `ch08_linda_nested_set_conjunction_fallacy.png`, `ch08_linda_nested_set_conjunction_fallacy.svg`

**Caption:** The conjunction fallacy occurs when a combined description seems more likely than one of its parts. In probability terms, "feminist bank tellers" is a subset of "bank tellers," so the subset cannot be more probable than the larger set that contains it.

**Alt text:** Simple nested-set diagram with a large circle labeled Bank tellers and a smaller circle fully inside it labeled Feminist bank tellers. A line beneath states that a subset cannot be more probable than the set that contains it.

**Attribution:** Original instructional diagram created for Psychology 101 textbook project, 2026.

## Bias Question Substitution Matrix

**Files:** `ch08_bias_question_substitution_matrix.png`, `ch08_bias_question_substitution_matrix.svg`

**Caption:** Several common biases can be understood as question substitution: fast thinking answers a simpler shortcut question than the harder question actually being asked.

**Alt text:** Matrix listing availability, representativeness, confirmation bias, framing, and anchoring, with columns for the hard question and the shortcut question.

**Attribution:** Original instructional diagram created for Psychology 101 textbook project, 2026.

## IQ Standardization Curve

**Files:** `ch08_iq_standardization_curve.png`, `ch08_iq_standardization_curve.svg`

**Caption:** IQ scores are standardized around a mean of 100 with a standard deviation of 15, so individual scores are interpreted relative to the norming sample rather than as absolute amounts of intelligence.

**Alt text:** Normal curve centered at IQ 100 with markers at 70, 85, 100, 115, and 130. The x-axis is labeled IQ score, a bracket from 100 to 115 is labeled 1 SD equals 15, and a note says scores are relative to a norming sample.

**Attribution:** Original instructional diagram created for Psychology 101 textbook project, 2026.

## Wason Selection Task Prompt

**Files:** `ch08_wason_selection_task_prompt.png`, `ch08_wason_selection_task_prompt.svg`

**Caption:** The Wason selection task asks which evidence is needed to test a conditional rule. In the prompt version, students see the cards and rule before the diagnostic answer is marked.

**Alt text:** Four cards labeled E, K, 4, and 7 under the rule If vowel, then even number. A question asks which cards must be turned over, with no answer highlighting.

**Attribution:** Original instructional diagram created for Psychology 101 textbook project, 2026.

## Wason Selection Task Answer

**Files:** `ch08_wason_selection_task_answer.png`, `ch08_wason_selection_task_answer.svg`

**Caption:** In the Wason selection task, the diagnostic cards are the ones that can test whether the conditional rule is required or violated. For "If vowel, then even number," E checks the vowel and 7 could falsify the rule.

**Alt text:** Four cards labeled E, K, 4, and 7 under the rule If vowel, then even number. E and 7 are highlighted as diagnostic. Labels say E checks the vowel, 7 could falsify the rule, 4 is tempting but not diagnostic, and K is irrelevant.

**Attribution:** Original instructional diagram created for Psychology 101 textbook project, 2026.
'''
(OUT / "README_captions_alt_text_attribution.md").write_text(readme, encoding="utf-8")

for svg_path in sorted(OUT.glob("*.svg")):
    print(svg_path)
