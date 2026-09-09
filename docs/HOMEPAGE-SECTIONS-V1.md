# Homepage sections V1

How each section of the homepage is built, as merged to `main` on 2026-09-09 (PR #5). Use this as the parts catalogue for new pages: every pattern here has a class in `app/globals.css` and a copy shape that has been reviewed.

Order on the page: hero, origin strip, How TBSP works, Modules, Fit and control, Interfaces, Agents and models, Before you start, closing, footer.

Band rhythm: paper, band, dark, paper, paper, dark, band, paper, paper, dark footer.

---

## Shared patterns

**Page shell.** `.page-shell`, `min(1240px, 100% - 64px)`, centred. Every section's content sits inside it; dark bands put the shell inside the full-width section.

**Heading grid.** `.section-heading`: two columns, `1.35fr .65fr`, 80px gap, aligned to the bottom. Section index above, h2 left, lede right. On dark bands add `.inverse`. The hero uses the same grid as `.hero-heading`.

**Section index.** `.section-index` (`.section-index-light` on dark). Condensed 11px uppercase. Short noun: "Modules", "Interfaces", "Fit and control". Not numbered.

**Eyebrow.** `.eyebrow`, same type, preceded by an 8px amber square.

**Buttons.** `.button` with `.button-accent` (amber ground, ink text), `.button-dark` (ink ground, paper text, 4px amber offset shadow), `.button-outline`. Arrow glyph via the `Arrow` component.

**Links in running content.** `.text-link`, `.section-link`, `.surface-link`: 13px 600 with a hairline underline.

**Chips.** Outlined, condensed uppercase, no fill, no radius. On paper: `.agents-chips li` (1px ink). On dark: `.circuit-plate li`, `.source-chips span` (1px `#3a4756`, text `#c4ccd4`).

**Panel chrome on dark.** `.ui` (sunken `#0c121a`, 1px `#26313d` border) with `.ui-topline`: condensed 10px row, title left at 600 in `#c4ccd4`, state right at 500 in `#98a3ae`, hairline under it. Amber on the right means a person is needed.

**Rule with punched nodes.** A 1px rule with 21px circles sitting on it, each carrying the ground colour so it masks the line, digit inside in condensed 9px. Active node is amber with an ink digit. Implementations: `.circuit-arc` + `.circuit-node`, `.ui-stages`, `.module-loop`.

**Evidence cells.** Three columns divided by hairlines: condensed label, statement, optional source line. `.ui-cells`; the `.gate` variant takes the amber wash and a 2px amber inner edge.

**Gate badge.** `.circuit-human h3:after` and `.circuit-legend`: 17px amber circle with an H. Marks a human decision.

---

## 1. Hero — `.hero`

Paper. Eyebrow, then the heading grid: h1 left, lede right at 17px. Actions row below: accent button, outline button, text link. Under it, the illustrative work-record panel (`.product-preview`, owned by the other session; still labelled placeholder). Headline size `clamp(60px, 7.4vw, 108px)`, weight 500.

**The bitmap word.** The headline's first word is not type. `app/hero-morph.tsx` renders it as inline SVG from the pixel grids in `app/hero-pixels.ts`: square cells sampled from IBM Plex Sans 500 at 15 cells per em. It is present from first paint with no JavaScript. On load the cells of "Code" fly into the arrangement of "Ship" over about 1.5 seconds, a share flashing amber in transit, and stay there. A visually hidden span carries "Ship" for assistive tech and crawlers; the `<noscript>` style in `app/layout.tsx` and the reduced-motion rule both show the finished word directly. Click the word to replay.

To regenerate the grids (after a change of word or face), run this in the browser console on a page where the font is loaded, then paste the two cell arrays into `hero-pixels.ts`:

```js
await document.fonts.load('500 150px "IBM Plex Sans"');
const SIZE=150, CELL=10, ROWS=30, BASE=22;
const grid=(word)=>{const c=document.createElement('canvas'),g=c.getContext('2d');g.font=`500 ${SIZE}px "IBM Plex Sans"`;
 c.width=Math.ceil(g.measureText(word).width)+CELL*2;c.height=ROWS*CELL;g.font=`500 ${SIZE}px "IBM Plex Sans"`;
 g.textBaseline='alphabetic';g.fillText(word,CELL,BASE*CELL);const d=g.getImageData(0,0,c.width,c.height).data;const cells=[];
 for(let r=0;r<ROWS;r++)for(let q=0;q<c.width/CELL;q++){let s=0;for(let y=0;y<CELL;y+=2)for(let x=0;x<CELL;x+=2)s+=d[((r*CELL+y)*c.width+(q*CELL+x))*4+3];
 if(s/(25*255)>=0.42)cells.push([q,r])}const minC=Math.min(...cells.map(p=>p[0]));return {cols:Math.max(...cells.map(p=>p[0]))-minC+1,cells:cells.map(([q,r])=>[q-minC,r])}};
JSON.stringify({code:grid('Code'),ship:grid('Ship')});
```

Copy shape: a verb-led promise, one lede sentence about what TBSP connects, one qualifying line about who it is for.

## 2. Origin strip — `.origin-strip`

Paper-2 band with hairlines. One sentence on the Capillary origin, three outlined chips for the audience. Do not grow it.

## 3. How TBSP works — `.workflow-section`, `.tl`

Dark. Heading grid with `.inverse`: "One work item, from request to production. TBSP at every step around the code." and a one-line lede that explains the three marks.

The figure follows Augment Code's depiction, in the site grammar:

- `.tl` is a 24-column grid on a sunken ground with six rows: cards above, stems, the bar, stage words, stems, cards below.
- `.tl-bar`: 24 segments of varying width. `tl-seg-on` (light) is where TBSP acts; `tl-seg-off` (raised slate) is your own process; `tl-seg-gate` (amber, H) is a human decision, at Review and Release; `tl-seg-done` carries the check at the end.
- `.tl-stages`: Spec, Code, Review, Release, On-call under the bar, each spanning its columns.
- Four `.tl-card`s, TBSP Spec and TBSP Review above, TBSP Code and TBSP On-call below. Each: a tag with a small square (amber for Review), the module name, its one-line promise from `modules` in `site.tsx`, and an Explore link. The Code card also carries the agent chips: that is the inner loop, stated in one line.
- `.tl-stem`: a dashed vertical rule in one grid column, dropping from each card onto the segment it explains.
- No ambient animation. Below 900px the grid becomes a stack: bar, stage words, then the four cards; stems hide.

Data: `timeline`, `stages` and `cards` in `app/page.tsx`. Column numbers in `cards` place each card and its stem; keep a stem inside a light or amber segment of its stage.

Rejected on the way here on 2026-09-09: the six-cell circuit with three-slot copy (too verbose), the eight-step deck loop with coverage bands and callouts (too much to parse), a two-loop abstraction (too little meaning), a growing-record stack with bare lines (lost the meaning). The deck's eight steps remain the sales artefact; the site shows five stages.

## 4. Modules — `.modules`, `.module-grid`

Paper. Index "Modules". h2 "Start with one module." with a three-fact lede. Four `.module-card`s in a hairline 2×2 grid, each with a flat tone one step apart (`.module-card-01` to `-04`, `#eceef0` to `#dadfe4`), a "01 / 04" counter and a `.module-loop` marker showing where the module sits in the loop. Card body: h3 "TBSP Name", a one-line promise in developer terms, a description, an input/output definition list, an Explore link.

Data lives in `modules` in `app/site.tsx` and also feeds the nav panel and footer, so copy changes there propagate.

## 5. Fit and control — `.enterprise-fit`, `.fit-ledger`

Paper. Heading grid. Then a six-row hairline ledger (`dl.fit-ledger`): label left in condensed 11px, fact right at 15px. Rows: Connects to, Reads, Writes, Who approves, Records, and one more if needed. `.fit-foot`: a footnote pointing to the security review, and `.fit-links`. Every fact restates a published claim from the platform, security, integrations or interfaces pages. Data in `fitFacts` in `app/page.tsx`.

## 6. Interfaces — `.surfaces-section`, `.switcher`

Dark. Heading grid with `.inverse`. Then `InterfacesSwitcher` from `app/interfaces-switcher.tsx`: a tablist on the left (`.switcher-list`, active tab white with a 2px amber inner edge and its description unfolded) and one illustration on the right (`.switcher-stage`, fades and rises 8px on change). Three panels, all `.ui`:

- `DesktopPanel` (`.ui-desktop`): topline, title, `.ui-stages` rule with Review lit, `.ui-cells` for requirement, finding and gate.
- `TerminalPanel` (`.terminal`): Plex Mono session, `.t-prompt`, `.t-dim`, `.t-amber` spans.
- `ChatPanel` (`.chat`): channel topline, `.chat-msg` with a paper-square avatar, `.chat-card` with the finding and the `.chat-gate` label, `.chat-actions` (outlined and amber).

All three tell the same EX-104 moment on three surfaces. Add a surface by adding a panel component and an entry to `surfaces`.

## 7. Agents and models — `.agents-band`

Paper-2 band. Left: index, h2 in two lines, one paragraph placing models in the inner/outer loop frame. Right: `.agents-chips` with two `.agents-group`s, "Inner loop · coding agents" and "Outer loop · Spec, Review, On-call", chips in each, and a closing line. No model or vendor logos until the claims ledger clears them.

## 8. Before you start — `.buyer-faq`

Paper. Left column: index, h2, `.faq-lede` (the qualifying sentence: TBSP fits when connecting the work around the code is the bottleneck), evaluation guide link. Right: `.faq-list` of `details` elements. Six questions, each answer two or three sentences, first word often "No." Data in `faqs` in `app/page.tsx`.

## 9. Closing — `.closing`

Paper with a hairline top, so the page ends paper before the dark footer. Headline left, `.closing-action` right with its own hairline, an accent button and a text link. `PageCta` in `app/site.tsx` renders the compact version on inner pages.

## 10. Footer

Darker ink `#0c121a`. Wordmark inverted, four link columns with condensed headings, bottom row with the year.

---

## Removed on 2026-09-09, do not reintroduce without a reason

- The delivery gap (three-cell problem statement): repeated the hero.
- The fictional case study (`.proof-example`): placeholder content.
- "Why add TBSP?" alternatives comparison: invited a build-versus-buy debate on the homepage.
- "Built around your engineering system" cards: replaced by the Fit and control ledger.
- Section numbering on the homepage indices: the sections are not a sequence.

## Checklist for a new section

- Heading grid, index as a short noun, lede that states facts.
- Fits the band rhythm with its neighbours.
- Built from patterns above; any new class is a standalone rule in `app/globals.css`.
- Labels 9px or larger, text pairs at AA, amber only as fill on paper.
- One illustration per idea, drawn from the grammar, telling the EX-104 story if it needs content.
- Copy read aloud once. If it sounds like a slogan, rewrite it as a fact.
