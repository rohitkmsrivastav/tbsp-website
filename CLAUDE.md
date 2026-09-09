# TBSP website — project context

This file is read by Claude Code at the start of every session in this folder. It is the router for building or changing pages. Read the linked documents only when the task needs them.

## What this is

The marketing site for TBSP, Capillary Technologies' platform for the work around AI coding: context, workflows, approvals and evidence across the software delivery loop. Deployed on GitHub Pages at https://rohitkmsrivastav.github.io/tbsp-website/ under the base path `/tbsp-website`.

Stack: React 19 with the Next app directory, built and served by `vinext`, static export. Styling is one hand-written stylesheet, `app/globals.css`. No component library is used on the pages. pnpm is the package manager.

## Commands

```bash
pnpm dev --port 3111      # dev server; the launcher config in ../.claude uses this port
pnpm build                # static export to dist/client
node_modules/.bin/tsc --noEmit -p tsconfig.json   # type check, must be clean before a commit
pnpm lint                 # oxlint
```

Node, pnpm and `gh` are installed through Homebrew. In non-login shells prefix `PATH=/opt/homebrew/bin:$PATH`.

## Branch and deploy flow

- Work on the `homepage` branch. `main` deploys to Pages automatically on push, and nothing else does.
- Ship through a pull request: `gh pr create --base main --head homepage`. Rohit merges. The deploy takes about two minutes and the HTML is cached for ten, so a hard refresh may be needed to see it.
- Before every commit: type check clean, page returns 200 on the dev server, no console errors, a scroll through the whole page.
- Never commit `.claude/`, `tsconfig.tsbuildinfo`, `dist/` or `node_modules/`. They are ignored.
- One session edits `app/globals.css` at a time. Two sessions in that file at once caused broken selector lists and overwritten sections on 2026-09-09.

## File map

| Path | What it is |
|---|---|
| `app/page.tsx` | The homepage. Section data lives at the top of the file, sections in order below. |
| `app/site.tsx` | Shared pieces: `modules` data (used by cards, nav and footer), `siteHref`, `Arrow`, `SiteHeader`, `SiteFooter`, `PageFrame`, `PageIntro`, `PageCta`, `TrustStrip`. |
| `app/[...slug]/page.tsx` | Every inner page, driven by config objects keyed by path: products, docs, resources, platform, security, integrations, surfaces, enterprise, about, demo, privacy. Add a page by adding a config entry. |
| `app/interfaces-switcher.tsx` | The only client component. The Interfaces tabs and the three panel illustrations. |
| `app/layout.tsx` | Root layout, metadata, Google Fonts link for IBM Plex. |
| `app/globals.css` | The whole design system. `:root` tokens are the source of truth for colour. |
| `public/guideline/index.html` | Rendered visual guideline, served at `/guideline/`. Regenerate it when the markdown guideline changes. |
| `docs/` | Briefs and guidelines, listed below. |

## Documents to read for a task

- `docs/BRAND-VISUAL-GUIDELINE-V1.md` — colour, type, construction grammar, components, motion, the product UI mapping. Read before any visual work.
- `docs/HOMEPAGE-SECTIONS-V1.md` — how each homepage section is built, with class names to reuse and the copy pattern it follows. Read before building a new section or page.
- `docs/BRAND-LANGUAGE-V1.md` — words and claims. `docs/WEBSITE-IA-V1.md` — page structure. `docs/HOMEPAGE-CONCEPT-V1.md` and `docs/SPEC-PAGE-CONCEPT-V1.md` — page briefs.
- `../context/EVIDENCE-AND-CLAIMS.md` in the parent folder — what may and may not be said publicly. Binding.

## Design rules that decide most things

Full detail is in the visual guideline. The short version:

- **Two grounds, one marker.** Paper `#eceef0` and ink `#0f1720` are the surfaces; dark panels are `#141c26`. Amber `#f2b23a` is a fill: nodes, offset shadows, button grounds, the highlighted or struck word in a headline. Text on amber is always ink. Amber as text appears only on dark surfaces. On paper, accent text is `#8a5a00`.
- **No blue, purple, green or teal accent. No warm cream, terracotta or forest green.** Those are other people's palettes and the previous version of this one.
- **Construction over decoration.** Hairlines and bands. Cells share borders edge to edge. No gaps between boxes, no rounded corners except node circles, no blurred shadows, no gradients, no glows. The one decorative gesture is a hard amber offset shadow on dark panels and the dark button.
- **Type.** IBM Plex Sans for display and body, weights 400 to 600. IBM Plex Sans Condensed, uppercase and tracked, for every label, eyebrow, topline, chip and node digit, never below 9px. IBM Plex Mono only inside code or terminal samples. No serif, no italic.
- **Band rhythm.** Light sections alternate with dark panels or paper-2 bands. Two dark bands never touch, including the footer.
- **Numbering** marks real sequences only. A grid of peers is not numbered.
- **Illustrations are built from the grammar**, not drawn: rule with punched nodes, panel topline, chips, evidence cells, raised plate, gate badge. If a figure needs new shapes, arrows as artwork, screenshots or device mockups, it is wrong.
- **Dark bands** set grayscale antialiasing. Content is visible at rest; the only ambient motion is the circuit pulse.

## Copy rules

- Plain register. Instructions and facts, not slogans. Rohit rejects copy that reads as marketing ("Choose how you connect delivery", "Keep your tools. Connect the decisions."). Sentences a CTO would say out loud.
- Developer vocabulary where the reader is one: ticket, spec, ADR, repo, PR, diff, tests, deploy, alert, root cause.
- Every cell in a repeated structure answers the same question in the same order.
- Section index labels are short nouns: "Modules", "Interfaces", "Fit and control".
- **Claims.** Nothing that names a customer, a number, an integration vendor, a model provider, a compliance standard, hosting options or pricing goes on the site without the written validation described in the claims ledger. Restate what is already published on the platform, security, integrations and interfaces pages instead. Design properties ("every connector is agreed before it is switched on") are safe; results and third-party names are not.

## Product vocabulary

- The loop: coding agents own the **inner loop** (write code, tests, make them pass); TBSP runs the **outer loop** around it. Stages on the site: Spec, Code, Review, Release, On-call. Release is a delivery step, not a module. The loop **closes at Spec**: production feeds the next requirement. Draw it that way and do not assert a different shape in prose.
- Human decisions are marked with the **H badge** (a 17px amber circle with an H). In the product, amber means exactly one thing: a person must look at or decide this.
- **TBSP Code** is the coding agent and the Code module. The name "TBSP Harness" is retired; do not reintroduce it.
- Four modules: TBSP Spec, TBSP Code, TBSP Review, TBSP On-call. Interfaces: desktop, terminal, Slack and Teams.
- Example work item used throughout illustrations: EX-104, "Add customer-data exports", with the finding "permission check has no test" at `auth/export.ts:88` and a platform lead as the gate.

## Building a new page

1. Decide whether it is an inner page (add a config entry in `app/[...slug]/page.tsx`, rendered with `PageIntro`, sections and `PageCta`) or a page that needs its own layout (new route folder, wrap in `PageFrame`).
2. Pick sections from `docs/HOMEPAGE-SECTIONS-V1.md` and reuse their classes. Add a class to `app/globals.css` only when no pattern fits, and add it as a standalone rule, never inside an existing grouped selector list.
3. Follow the heading grid: section index, h2 left, lede right, aligned to the bottom. One h1 per page. Decorative headings inside panels are paragraphs, not h2 or h3.
4. Check band rhythm against the neighbouring sections.
5. Verify on the dev server: type check, links return 200, contrast, mobile at 375px with no page overflow, no console errors. Then commit on `homepage` and open the PR.

## Working with Rohit

Show, then ask. He decides quickly from a rendered page and rejects verbose or marketing copy on sight. When a request conflicts with the guideline, say so in a sentence and offer the on-brand version rather than refusing. Keep the working tree committable: he merges often.
