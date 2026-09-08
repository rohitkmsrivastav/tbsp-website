# TBSP visual guideline V1

Status: working guideline for the September 2026 build. Applies to the marketing site as shipped in `app/globals.css`, and defines how the same system carries into the product UI.

Depends on: [Brand language](BRAND-LANGUAGE-V1.md) for words and claims, [Website IA](WEBSITE-IA-V1.md) for page structure, [Homepage concept](HOMEPAGE-CONCEPT-V1.md) for the fold.

Source of truth for values: the `:root` block in `app/globals.css`. If this document and the stylesheet disagree, the stylesheet wins and this document gets corrected.

---

## 1. What the system is

TBSP looks like an engineering drawing, not an AI brand. Cool drafting paper, dense drafting ink, and one amber marker that behaves like a highlighter or a review pencil: it fills, it never writes small text on paper.

Five rules cover most decisions:

1. **Two grounds, one marker.** Paper and ink are the only surfaces. Amber is a fill, applied to nodes, shadows, button grounds and highlighted phrases. It is not a text colour on paper.
2. **Construction over decoration.** Structure comes from hairlines and bands. Cells share borders edge to edge. No gaps between boxes, no rounded corners, no blurred shadows.
3. **One decorative gesture.** A hard, zero-blur offset shadow in amber. It appears on dark panels and the primary dark button and nowhere else.
4. **Labels are condensed, not mono.** Metadata is set in IBM Plex Sans Condensed, uppercase, tracked. Monospace is reserved for code samples and glyph icons.
5. **Derive, do not invent.** New illustrations and components reuse the grammar in section 5. A new visual vocabulary reads as off-brand immediately.

Why the palette is this and not the previous one: the cream, rust and italic-serif combination sits in the same cluster as Anthropic and Cursor and reads as a generated template. A cool ground with amber is unclaimed in the agentic dev-tools field as of September 2026.

---

## 2. Colour

### 2.1 Tokens

| Token | Value | Role |
|---|---|---|
| `--paper` | `#eceef0` | Page ground. Cool blue-grey, chosen not neutral. |
| `--paper-2` | `#e1e4e8` | Second light surface: bands, form panels, token rails. |
| `--ink` | `#0f1720` | Text on paper. Primary dark button ground. |
| `--forest` | `#141c26` | Dark panel ground. Name kept for stylesheet continuity; the colour is drafting ink, not green. |
| `--oxide` | `#f2b23a` | Amber. Fill only. Name kept for continuity. |
| `--oxide-text` | `#8a5a00` | Deep amber for the rare case where an accent must be text on paper. |
| `--muted` | `#5a6472` | Secondary text on paper. |
| `--line` | `#c3c9d0` | Hairlines on paper. |
| `--pale-line` | `rgba(255,255,255,.14)` | Hairlines on dark panels. |
| `--ok` | `#3d6b4b` | Semantic: available, demonstrated. |
| `--pending` | `#8a6612` | Semantic: preview, confirm. |
| `--risk` | `#9c3a2c` | Semantic: risk, failure. |

Dark-panel greys used as literals in the stylesheet, all slate-cast to match the panel:

| Value | Role on `#141c26` |
|---|---|
| `#ffffff` | Headings inside dark panels. |
| `#c4ccd4` | Primary small text, digits in nodes, chip text. |
| `#aeb7c0` | Body copy inside dark panels. |
| `#98a3ae` | Toplines, secondary labels. |
| `#85919c` | Tertiary labels, inactive stage names. |
| `#76828e` | Footnotes, figcaptions. Minimum grey; do not go lighter in weight or darker in colour. |
| `#1a2431` | Raised surface inside a panel, for example the inner-loop plate. |
| `#56636f` | Node outlines. |
| `#3a4756` | Chip outlines, the rule that nodes sit on. |
| `#26313d` / `#2c3946` | Panel and plate borders. |
| `#0c121a` | Footer only. |

### 2.2 Contrast, measured

| Pair | Ratio | Use |
|---|---|---|
| Ink on paper | 15.5 | Body, headings |
| Muted on paper | 5.2 | Secondary text, passes AA |
| Deep amber on paper | 5.1 | Accent as text, passes AA |
| Amber on paper | 1.6 | Fails. This is why amber is fill only. |
| Ink on amber | 9.6 | Text on buttons, nodes, highlights |
| Paper on panel | 14.8 | Headings in dark panels |
| `#c4ccd4` on panel | 10.6 | Primary panel text |
| `#aeb7c0` on panel | 8.4 | Panel body |
| `#98a3ae` on panel | 6.7 | Panel labels |
| `#85919c` on panel | 5.3 | Tertiary, passes AA |
| `#76828e` on panel | 4.4 | Footnotes only, at or above 12px |
| Amber on panel | 9.2 | Accent text is allowed on dark surfaces |

### 2.3 Rules

- Amber as text is allowed only on dark surfaces. On paper, use `--oxide-text` or ink.
- Amber fills always carry ink text, never white.
- Semantic colours are not accents. They mark status and nothing else. Do not use amber for a status that means "pending"; in the product, amber means a human is needed.
- No blue accent, ever. Under IBM Plex a blue reads as IBM Carbon first and as the Cognition and Warp cluster second.
- No warm cream, terracotta, rust or forest green. Those are the previous system.
- Washes: an active cell may take `rgba(242,178,58,.16)` on dark and `rgba(242,178,58,.07)` for a gate card. Nothing stronger.

---

## 3. Typography

### 3.1 Faces

| Role | Face | Weights |
|---|---|---|
| Display and body | IBM Plex Sans | 400, 500, 600, 700 |
| Labels, eyebrows, toplines, node digits, chips | IBM Plex Sans Condensed | 500, 600 |
| Code samples and glyph icons only | IBM Plex Mono | 400 |

Loaded from Google Fonts in `app/layout.tsx`. Fallback stack: Helvetica Neue, Arial, sans-serif.

No serif anywhere. No italic anywhere except quotations. The hero phrase is emphasised with an amber highlight, not with a change of face or slant.

### 3.2 Scale

| Element | Size | Weight | Tracking | Line height |
|---|---|---|---|---|
| Hero headline | clamp(60px, 7.4vw, 108px) | 500 | -.065em | .93 |
| Section headline (h2) | clamp(42px, 4.7vw, 68px) | 500 | -.055em | 1.02 |
| Card heading (h3) | 21 to 35px by context | 500 | -.025 to -.04em | 1.25 |
| Panel heading | 22px inside the circuit, 29px on a workflow title | 600 / 500 | -.03em | 1.1 |
| Body | 16px | 400 | 0 | 1.55 |
| Lede | 17px | 400 | 0 | 1.7 |
| Card copy | 13 to 15px | 400 | 0 | 1.65 |
| Label | 10 to 12px | 500 | .07 to .09em | 1 |
| Panel micro-label | 9px | 500 or 600 | .06 to .09em | 1 |

Nothing bolder than 600 in running content. The ink is heavy enough.

### 3.3 The label spec

Every label, eyebrow, section index, topline, chip and node digit is:

```css
font-family: "IBM Plex Sans Condensed", "IBM Plex Sans", Arial, sans-serif;
font-weight: 500;          /* 600 for node digits and chips inside the circuit */
font-size: 9px to 12px;
letter-spacing: .07em to .09em;
text-transform: uppercase;
```

### 3.4 The highlight

The emphasised phrase in a headline is an inline `em` with:

- upright, same face and weight as the headline;
- an amber band drawn as a sized background from just above cap height to just under the baseline, so it does not ride into the line above at tight line heights;
- `box-decoration-break: clone` so each wrapped line gets its own band;
- `mix-blend-mode: multiply` so a descender from the line above shows through.

The exact rule is `.hero h1 em` in the stylesheet. Reuse it; do not restyle it per page.

### 3.5 Rendering

Every dark band sets `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale`. Light-on-dark Plex renders heavy and soft without it on macOS.

---

## 4. Layout

- **Shell.** Content width `min(1240px, 100% - 64px)`, centred. On phones, `100% - 36px`.
- **Vertical rhythm.** Sections are 112px top and bottom. Bands (origin strip, enterprise) are shorter and hairline-bound.
- **Alternation.** The page alternates paper, dark panel, paper. A band (`--paper-2`) may sit between two paper sections. Two dark bands never touch, including the footer. The homepage runs: paper, band, paper, dark, paper, paper, dark, paper, band, paper, dark footer.
- **Heading grid.** Every section heading is a two-column grid, 1.35fr and .65fr, 80px gap, aligned to the bottom. Headline left, lede right. The hero uses the same grid.
- **Grids.** Cards sit in grids with collapsed shared borders. `article + article { border-left }`, `:nth-child(n+3) { border-top }`. No gap property between cards.
- **Numbering.** Section indices (01 / THE DELIVERY GAP) are used only where the content is a real sequence down the page. Do not number a grid of peers.

---

## 5. Construction grammar

These are the shapes that make something look like TBSP. Reuse them.

**Hairline band.** A container with a 1px border, cells divided by 1px rules, no padding between cells, cell content padded inside. On paper the line is `--line`; on a panel it is `--pale-line`.

**Rule with punched nodes.** A continuous 1px horizontal rule with small circular nodes sitting on it. Each node carries the ground colour as its background so it masks the line, 19 to 21px, 1px outline, digit inside in condensed 9px. The active node is amber with an ink digit. This is the signature. It appears in the hero panel, the outer-loop circuit, and the Spec walkthrough steps.

**Panel topline.** Every dark panel opens with a one-line uppercase condensed label row, left and right aligned, and a hairline under it. The left side is the title of the panel and reads at 600 in `#c4ccd4`; the right side is state or metadata at 500 in `#98a3ae`.

**Chip.** An outlined tag: 1px `#3a4756` border on dark or `--line` on paper, condensed uppercase 9 to 10px, 6px by 8px padding, no fill, no radius. Chips list sources and agents. They are never large or bright.

**Active state.** A wash, a 2px inner-edge rule on one side, and a solid amber node. Never a flat flood of the whole cell.

**Offset shadow.** `box-shadow: 22px 22px 0 var(--oxide)` on a full-width dark panel, `4px 4px 0` on the primary dark button, `9px 9px 0` on phones. Zero blur, always amber, never on paper-coloured elements.

**Raised plate.** A surface inside a panel that must read as "inside the machine": `#1a2431` with a `#2c3946` border. One per panel at most.

**Gate badge.** A 17px circle, 1px amber outline, amber "H" in condensed 600 9px. It marks a human decision and is the only place the letter H appears as a symbol.

---

## 6. Components

**Buttons.** 50px tall, 1px border, 14px 600 label, 20px horizontal padding, arrow glyph at the right, no radius.

| Variant | Ground | Text | Border | Extra |
|---|---|---|---|---|
| Accent | amber | ink | amber | none |
| Dark | ink | paper | ink | 4px amber offset shadow |
| Outline | transparent | ink | ink | none |

Hover lifts the button 2px. Focus is the browser ring; do not remove it.

**Eyebrow.** Condensed 12px 500 in `--muted`, preceded by an 8px amber square. On dark bands the light variant uses `--muted` text and the same square.

**Section index.** Same as eyebrow, with a 22px amber rule instead of a square on dark bands.

**Cards.** No card chrome. A card is a cell in a hairline band: label on top, heading, copy, optional link at the bottom. Minimum heights are set per grid so rows stay level.

**Forms.** Inputs sit on `--paper` inside a `--paper-2` panel, 48px tall, 1px `--line` border, no radius. Focus is a 1px amber border and a 2px `rgba(242,178,58,.35)` outline. Labels are condensed 10px uppercase.

**Status marks.** A 7px dot before condensed 10px uppercase text. Available and demonstrated in `--ok`; preview and confirm in `--pending`; planned in `--muted` with an outlined dot; none as a `--line` dot.

**Wordmark.** A 30px ink square with a paper "T" in Plex Sans 600 18px, then "TBSP" in 19px 700 with -.02em tracking. On dark grounds the square inverts to paper with an ink letter.

---

## 7. Motion

- One ambient animation on the whole site: the outer-loop circuit pulses through its cells on a 16s linear loop, each cell lit for one eighth of the cycle with the amber wash, inner-edge rule and node.
- Everything else is a 200ms ease on hover. No bounces, no springs, no parallax, no scroll-triggered reveals. Content is visible at rest.
- `prefers-reduced-motion: reduce` stops the circuit animation and leaves the resting state.

---

## 8. Illustration

Illustrations are built from sections 5 and 6, not drawn. The test: could this figure be produced with the site's own CSS classes? If it needs new shapes, arrows drawn as graphics, drop shadows, gradients or icons with fills, it is wrong.

Do not use: box-and-arrow diagrams with gaps, bright pill chips, circular arrow badges, 3D device mockups, screenshots with browser chrome, gradients, glows, illustrations of people or robots, stock imagery.

Do use: hairline bands, nodes on rules, toplines, chips, one raised plate, the gate badge, real product terms as content (ENG-2841, auth/health.ts, Gate 2 of 3).

---

## 9. Product UI

The marketing site already depicts the product as dark panels on paper. The product itself is those panels, full screen. Everything below is a mapping of the same tokens onto a working surface, with the density and states a tool needs.

### 9.1 Default surface

The product defaults to the dark panel system. Reasons: it is what the site shows as the product; it sits comfortably beside terminals and IDEs; and amber, which means "a human is needed here", reads best on ink.

A light theme is defined too, for Slack and Teams embeds and for users who work in light editors. It is the paper system.

### 9.2 Product tokens

Name product tokens by role, not by material, so themes can swap.

| Token | Dark (default) | Light | Role |
|---|---|---|---|
| `--surface-0` | `#141c26` | `#eceef0` | App ground |
| `--surface-1` | `#1a2431` | `#e1e4e8` | Raised: side panels, cards, table headers |
| `--surface-2` | `#0c121a` | `#ffffff` | Sunken or editorial: code, logs, input wells |
| `--text-1` | `#ffffff` | `#0f1720` | Headings, primary values |
| `--text-2` | `#c4ccd4` | `#0f1720` | Body, table cells |
| `--text-3` | `#98a3ae` | `#5a6472` | Labels, secondary |
| `--text-4` | `#85919c` | `#5a6472` | Tertiary; minimum for anything read |
| `--line-1` | `rgba(255,255,255,.14)` | `#c3c9d0` | Hairlines, dividers, table rules |
| `--line-2` | `#3a4756` | `#c3c9d0` | Outlines: chips, inputs, node rules |
| `--accent` | `#f2b23a` | `#f2b23a` | Human attention, active step, primary action ground |
| `--accent-ink` | `#0f1720` | `#0f1720` | Text on accent |
| `--accent-text` | `#f2b23a` | `#8a5a00` | Accent as text |
| `--accent-wash` | `rgba(242,178,58,.16)` | `rgba(242,178,58,.12)` | Active row or cell |
| `--ok` | `#6fb383` | `#3d6b4b` | Passed, approved, healthy |
| `--risk` | `#e07a66` | `#9c3a2c` | Failed, blocked, incident |
| `--neutral` | `#98a3ae` | `#5a6472` | Pending, queued, unknown |

Measured on the dark ground: `--text-2` 10.6, `--text-3` 6.7, `--text-4` 5.3, `--accent` 9.2, `--ok` 6.9, `--risk` 5.8. All pass AA for normal text.

Note the semantic change from the site: the product has no amber-coloured "pending". Pending is neutral grey. Amber in the product means exactly one thing: a person must look at or decide this. Gates, approvals, review findings awaiting a human, and the primary action all use it. Nothing automated is amber.

### 9.3 Type in the product

| Role | Face | Size | Weight |
|---|---|---|---|
| Page and panel titles | Plex Sans | 20 to 24px | 600 |
| Item titles, row primary text | Plex Sans | 14px | 500 |
| Body, table cells | Plex Sans | 13px | 400 |
| Small body, help | Plex Sans | 12px | 400 |
| Labels, column headers, toplines | Plex Sans Condensed | 10 to 11px, uppercase, .08em | 500 |
| Node digits, badges, counts | Plex Sans Condensed | 9 to 10px | 600 |
| Code, diffs, logs, paths | Plex Mono | 12 to 13px | 400 |

Tabular numerals on every metric and every column of digits. Line height 1.45 in tables, 1.55 in prose. No headline sizes from the site inside the product; the largest text on a working screen is 24px.

### 9.4 Density and structure

- Base unit 4px. Row height 36px in dense tables, 44px in lists with two lines. Panel padding 16 to 20px.
- Structure comes from hairlines, exactly as on the site. Tables have 1px rules between rows and no zebra striping. Panels have a topline with a hairline under it. Side panels are separated from the main area by a single 1px `--line-1`.
- No radius on anything except the node and gate circles. No shadows in the product. The offset shadow is a marketing gesture and reads as decoration on a working screen.
- Surfaces nest at most two levels: `--surface-0` holding `--surface-1` panels, which may hold a `--surface-2` well. Never a card inside a card inside a card.

### 9.5 States

| State | Treatment |
|---|---|
| Hover on a row or cell | `rgba(255,255,255,.04)` on dark, `rgba(15,23,32,.04)` on light |
| Selected | `--accent-wash` plus a 2px inner-edge rule on the leading side in `--accent` |
| Active step in a sequence | Solid amber node with ink digit; the rule to its left in `--line-2`, to its right in `--line-1` |
| Needs a human | Gate badge and an amber topline right-side label such as HUMAN REVIEW |
| Focus | 2px `--accent` outline, 2px offset. Always visible. |
| Disabled | Text at `--text-4`, outline at `--line-1`, no wash |
| Live activity | The circuit pulse, reused: wash and node light for a moment when an agent step completes. The only ambient motion in the product. |

### 9.6 Components carried over

- **Stage row.** The rule-with-punched-nodes from the site becomes the pipeline header for a work item: Spec, Code, Review, Gate, Release, On-call. Same 21px nodes, same condensed labels below.
- **Chips.** Sources and agents render as the site's outlined chips. Clickable chips gain the hover wash only.
- **Evidence cells.** The three-column hairline band from the hero panel (label, statement, source line) is the pattern for findings, requirements and decisions. The gate card variant, with the amber left edge and wash, is the pattern for anything awaiting a person.
- **Topline.** Every panel, drawer and modal opens with the condensed topline: what this is on the left, its state on the right.
- **Status marks.** The dot-and-label mark from the site, with the product semantic colours.
- **Raised plate.** Used once per view for the thing the user acts on, for example the inner-loop plate that lists which agents are running.

### 9.7 What does not carry over

- Display type above 24px.
- The amber offset shadow.
- Full-bleed amber fills larger than a button or a node.
- The 112px section rhythm. Product spacing is 4px based and tight.
- Section numbering as decoration. Numbers in the product are counts, steps or IDs.

### 9.8 Iconography

Line icons only, 16px on a 16px grid, 1.5px stroke, square caps, no fills, no rounded joins beyond the stroke's own. Colour follows the text they sit next to. No emoji in the interface. Glyph icons such as `›_` for the terminal are set in Plex Mono, as on the site.

### 9.9 Accessibility floor

Every text pair meets 4.5:1. Amber never carries small text on light surfaces. Every interactive element has a visible focus state in `--accent`. Status is never colour alone: each status mark has its label, each gate has its badge letter. Motion respects `prefers-reduced-motion`.

---

## 10. Do not

- Add a blue, purple, green or teal accent.
- Set any label in monospace.
- Use italic or a serif for emphasis.
- Round a corner, blur a shadow, add a gradient or a glow.
- Put amber text on paper.
- Put white text on amber.
- Place two dark bands next to each other.
- Draw a diagram with gaps between boxes or with arrows as artwork.
- Use a screenshot with browser chrome, a device mockup, a photograph of a person, or a robot.
- Number a grid of equal items.

---

## 11. Token export for product teams

```css
:root[data-theme="dark"], :root {
  --surface-0:#141c26; --surface-1:#1a2431; --surface-2:#0c121a;
  --text-1:#ffffff; --text-2:#c4ccd4; --text-3:#98a3ae; --text-4:#85919c;
  --line-1:rgba(255,255,255,.14); --line-2:#3a4756;
  --accent:#f2b23a; --accent-ink:#0f1720; --accent-text:#f2b23a; --accent-wash:rgba(242,178,58,.16);
  --ok:#6fb383; --risk:#e07a66; --neutral:#98a3ae;
  --font-sans:"IBM Plex Sans","Helvetica Neue",Arial,sans-serif;
  --font-label:"IBM Plex Sans Condensed","IBM Plex Sans",Arial,sans-serif;
  --font-mono:"IBM Plex Mono","SFMono-Regular",Consolas,monospace;
}
:root[data-theme="light"] {
  --surface-0:#eceef0; --surface-1:#e1e4e8; --surface-2:#ffffff;
  --text-1:#0f1720; --text-2:#0f1720; --text-3:#5a6472; --text-4:#5a6472;
  --line-1:#c3c9d0; --line-2:#c3c9d0;
  --accent:#f2b23a; --accent-ink:#0f1720; --accent-text:#8a5a00; --accent-wash:rgba(242,178,58,.12);
  --ok:#3d6b4b; --risk:#9c3a2c; --neutral:#5a6472;
}
```

---

## Change log

- 2026-09-08 V1. Written against the homepage as merged to `main` in PR #2. Supersedes the visual notes in the earlier brand language document where they conflict on colour or type.
