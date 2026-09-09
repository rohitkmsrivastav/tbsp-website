# TBSP Spec page concept — V1

Date: 8 September 2026
Status: Recommended direction for discussion; draft copy is not approved public copy. Revised 8 September after a length review against comparable product pages (see "Length benchmark").
Route: `/products/spec`
Depends on: [Website IA](WEBSITE-IA-V1.md) (module-page template), [Brand language](BRAND-LANGUAGE-V1.md), [Visual guideline](BRAND-VISUAL-GUIDELINE-V1.md), [Homepage concept](HOMEPAGE-CONCEPT-V1.md), product anchor section 8.4 (the module's canonical definition, internal name Grooming)

Where this document and the earlier page-level content specification (7 September, in the neosapien folder) disagree on visuals, this document and the visual guideline win. That specification predates the palette rethink: its blue accent, Geist type and mono labels are superseded. Its content requirements are carried forward here.

## Page job

Spec is the first module page and the template for Code, Review and On-call. A visitor arriving directly, without reading the homepage, should be able to:

1. Say what job the module completes, in their own words.
2. See the product do it, step by step, on one recognisable ticket.
3. See at least one thing the system admits it does not know.
4. Read the artifact it produces and see where a human decides.
5. Know what is demonstrated, what needs confirming, and what to bring to an evaluation.

Primary audience: product manager, business analyst, engineering manager. Secondary: architect or senior engineer in planning; VP Engineering evaluating the suite. The module name "Spec" reads clearly to a CTO but under-serves the PM/BA reader, so the eyebrow, lede and Record carry the requirements vocabulary (requirements, acceptance criteria, PRD) deliberately.

## One scenario across the site

The page uses the same work item the homepage, Review and On-call pages already use: **ENG-2841, "Add regional failover to the customer identity service."** The ticket omits what happens to active sessions during failover. Spec surfaces that gap, resolves a constraint (existing token replication supports cross-region recovery), and writes acceptance criteria. One of them, per-region health-check state, is the criterion Review later finds unmet on the homepage and resource pages. Keep that continuity; it is the site's argument.

All product content is labelled ILLUSTRATIVE until a real capture exists. Nothing is presented as a screenshot.

## Length benchmark

Read on 8 September 2026. Comparable single-product pages run five to eight content sections and roughly 600 to 1,200 words, with one dominant product visual and 20 to 80 words of copy per section elsewhere. Trust content lives on Security and Enterprise pages; availability caveats live in a collapsed FAQ.

| Page | Sections | Words | Shape |
|---|---|---|---|
| Augment Code, one workflow page (PR author, incident investigator) | 5 | ~650 | Hero, description, one diagram with human gates and legend, integrations, the artifact |
| Augment Code, Cosmos platform page | 10 | ~1,500 | Demo video, two diagrams, use-case cards, proof, enterprise, CTA |
| CodeRabbit, Plan | 7 | ~400 plus ~800 FAQ | Screenshot, problem, four-step how it works, six benefits, quote, FAQ |
| Graphite, AI reviews | 11 | ~1,080 | Screenshot hero, code example, three-step how it works, use cases, quotes, FAQ |
| Linear, Plan | 12 | ~600 | Screenshot-led, very short copy |
| TBSP Spec, V1 wireframe | 9 | ~1,240 | Every section equal weight, three ledgers, a full document |
| TBSP Spec, V2 (this document) | 6 | ~800 | One dominant dark panel, condensed record, one ledger, handoff, close |

Two things comparables do that this page will not: customer logos and metrics, which are not approved, and a free-trial button, which has no destination yet.

## Section sequence

Six sections. Surface alternation: paper with a strip, dark panel, paper-2 band, paper, paper, closing on paper, dark footer. Two dark bands never touch.

| # | Section | Surface | Question it answers | Carries from V1 |
|---|---|---|---|---|
| — | Intro with strip | Paper, then paper-2 strip | What is this, who starts it | The job (as a one-sentence strip with four persona chips) |
| 01 | Walkthrough | Dark panel, full width | What the user sees, and what Spec knows | Known, inferred, unwritten (as the evidence grid at the foot of the panel) |
| 02 | The output | Paper-2 band, the Record | What artifact results, and what it took | What it connects to (as a status-chip strip under the Record) |
| 03 | Control | Paper, two-column ledger | What is automatic, where a human decides | Unchanged; boundary statement moves into the lede |
| 04 | Handoff | Paper, stage row | How work moves to Code and what Review measures against | Unchanged; the platform gets one link |
| — | Closing | Paper | What to bring to an evaluation | Trimmed |

Optional at build: a collapsed FAQ of about five questions between Handoff and Closing, carrying the reads-versus-writes and availability caveats. Collapsed by default, so it adds no height. CodeRabbit and Graphite both close this way.

Section indices are used because this is a genuine sequence: demonstration, output, control, handoff.

The shared `TrustStrip` used on the current stubs is dropped from module pages. Section 03 and the status chips answer trust in module terms, and the full version stays on Security and Enterprise.

## Section direction and draft copy

### Intro

**Eyebrow:** `MODULE 01 / SPEC · EXPLORE & DEFINE`. The functional subtitle is required by the IA until the name is familiar. It uses the module lockup wording from the guideline.

**Headline, recommended:** Write the spec with the system *in the room.* The amber highlight sits on "in the room", reusing the hero `em` rule. It pairs with the homepage's "Ship with the whole picture": both are about seeing the whole system.

**Headline, descriptive fallback:** Turn an unclear request into development-ready work. This is the brand-language specimen and the current stub title. Use it if the recommended line tests as too oblique.

**Lede (32 words):** TBSP Spec explores how your systems behave today, asks the questions the ticket left out, and produces a PRD or specification with acceptance criteria grounded in the existing codebase.

**Status mark:** Demonstrated · ticket clarification to PRD. Set in the `--ok` status mark. Not "available now", not "GA". This is the anchor's status note for the module.

**Actions:** Evaluate Spec (accent button, to `/demo`). See the walkthrough (text link, anchor to 02). Keep the same verbs on every module page.

No product imagery in the intro. The dark walkthrough panel is the first product surface and should arrive as a deliberate change of ground.

**Strip under the intro** (the homepage origin-strip device, on paper-2): left, "Started by" with four chips: Product manager, Business analyst, Engineering manager, Architect in planning. Right, one sentence: For the ticket that lacks acceptance criteria, scope or technical grounding, before senior-engineer time is spent finding out. Only personas from the anchor.

### 01 Walkthrough

The flagship and the one place the page spends length. A dark panel in the product-panel grammar already on the site: topline, title, source chips, six-node stage row with Spec active, the steps beside one capture plate, then the evidence grid.

**Section headline:** A specification is only as good as its understanding of the system it changes.

**Section lede:** One ticket, seven steps, every statement with its source. What Spec could not verify is marked, not hidden.

**Topline:** left `TBSP SPEC · ENG-2841`, right `ILLUSTRATIVE · CAPTURE PENDING` in amber until a capture exists, then the environment and date of capture.

**Title:** Add regional failover to the customer identity service.

**Source chips:** Jira ENG-2841 · identity-service · session-store · ADR-014 · auth/health.ts · INC-0912.

**Seven steps** (anchor 8.4, core workflow), one sentence and one source line each:

1. Start from the ticket. It asks for failover; it does not say what happens to active sessions. Jira ENG-2841.
2. Explore current behaviour. Tokens are issued per region and replicated asynchronously. identity-service, session-store.
3. Find the comparable implementation. Multi-region reads for the loyalty ledger, and why. ADR-014.
4. Ask the human. "What must happen to active sessions?" Answer recorded: they survive; admin scopes may re-authenticate. Platform lead.
5. Map the impact. identity-service, session-store, gateway health checks; existing replication supports recovery. Service graph, auth/health.ts.
6. Write the criteria. Edge cases, migration, non-functional requirements, AC-1 to AC-6. Specification v3.
7. Route for approval, with the gate badge. Nothing moves to Code until the Platform lead approves.

**Evidence grid at the foot of the panel**, three cells with status marks, the pattern the homepage hero panel used:

- **Verified** (`--ok`): Token replication is asynchronous. Health checks read primary-region state only. Sources: session-store config, ADR-014, auth/health.ts.
- **Inferred** (`--pending`): Failover traffic will exceed the secondary region's session cache. Load profiles in INC-0912; confirm with SRE.
- **Not written down** (`--muted`, outlined dot): Who owns the DNS failover runbook. Expected behaviour for admin sessions. Both asked back to the owner.

This grid is the most differentiating content on the page. Every module page carries a "what it does not know" block in the form that fits the module. It sits inside the product panel so it reads as part of the product, not as a marketing section about it.

Layout and motion: all seven steps readable at rest; any click-to-highlight is user-controlled and never hides content; no auto-play; reduced-motion respected. The capture plate is labelled illustrative until a real capture exists.

### 02 The output

The Record: the specification rendered as a document on the paper-2 band, hairline structure, condensed labels, no chrome. Condensed: the header, the problem, two context cells and the six criteria are rendered; the remaining fields are named in one line.

**Topline:** `SPECIFICATION · ENG-2841 · V3` and `AWAITING APPROVAL · PLATFORM LEAD`.

**Rendered:** problem statement; how it works today with sources; proposed behaviour; acceptance criteria AC-1 to AC-6, individually numbered; approval footer with the gate badge and what approval unlocks.

**Named in one line ("Also in the document"):** scope; affected services; edge cases; migration behaviour; non-functional requirements; open questions with owners; clarification log; sources.

Draft acceptance criteria for the scenario:

- AC-1 Active sessions survive a regional failover without re-authentication.
- AC-2 Admin-scoped sessions may require re-authentication; all others may not.
- AC-3 Token replication lag under failover stays within the agreed bound.
- AC-4 Health checks report per-region state, so traffic can promote to the secondary.
- AC-5 Failover and failback are runbook-driven and logged.
- AC-6 No change to the public authentication API.

AC-4 is the criterion Review finds unmet elsewhere on the site.

Use "specification" and "PRD" together at least once. Numbered criteria are the join between Spec and Review and the reason a requirement can later be reported as met or not met.

Gate badge on paper: the "H" is set in `--oxide-text`, not amber, for contrast.

**Status-chip strip under the Record, "Connected to produce this":** Work tracking, read (Demonstrated) · Documentation, read (Demonstrated) · Repositories, read (Demonstrated) · Services and architecture (Demonstrated) · Approval routing (Confirm) · Ticket write-back (Confirm) · Learning from outcomes (Planned). Same facts as the V1 connections ledger, one line. Read access and write-back remain different claims; if write-back is unsupported the chip says Confirm or Planned, never Demonstrated. The longer explanation of reads versus writes and behaviour when a source is missing moves to the optional FAQ.

### 03 Control

**Headline:** Spec drafts. A person decides.

**Lede (the anchor's boundary statement, in substance):** Spec does not replace product judgment, customer discovery, prioritisation or architecture ownership. It brings the context forward and structures the path to an approved specification.

**Two-column ledger, hairline between, five rows:**

| Spec does | A person decides |
|---|---|
| Retrieves system, product and historical context | Whether the change should be made at all |
| Identifies affected services and dependencies | Scope, priority and trade-offs |
| Asks clarifying product and technical questions | The answers, and which constraints are real |
| Drafts the specification and acceptance criteria | Final architecture ownership |
| Routes the document for approval | Approval (gate badge on this row) |

### 04 Handoff

**Headline:** The specification is what the rest of the lifecycle is measured against.

The six-node stage row with Spec active, then three cells:

- **To Code:** the approved specification, affected services and clarification log arrive as one work item. No re-briefing.
- **To Review:** AC-1 to AC-6 become the checklist Review reports against: met, partially met, not met.
- **To On-call:** a production incident links back to the requirement and the decisions behind the change.

Links: Explore Code, Explore Review, Explore the platform. This is the competitive argument against standalone spec tools and is not cut for length.

### Optional FAQ

Collapsed by default, five questions, between Handoff and Closing: Does Spec write back into Jira? What happens when a source is not connected? Which surfaces can start a Spec workflow? What does approval routing look like in our process? What is demonstrated today versus planned? Answers carry the availability caveats that V1 showed as a table.

### Closing

**Headline:** Bring one underspecified ticket.

Module-specific expectations beside the action:

- Bring one real ticket in a real repository.
- TBSP needs read access to the repository, documentation and the ticket.
- You get back a specification to compare with what your team would have written.
- In the room: a technical champion and whoever owns access and security review.

**Action:** Evaluate Spec, to `/demo`. If the demo form gains module preselection, pass `?module=spec`.

## Visual rhythm

1. Paper intro, two-column heading grid, no image, then a paper-2 strip with persona chips.
2. Dark walkthrough panel with the amber offset shadow: steps band, one raised plate, evidence grid.
3. Paper-2 band holding the condensed Record and the status-chip strip.
4. Paper two-column ledger with one gate badge.
5. Paper stage row and three cells.
6. Closing on paper, then the dark footer.

Everything is built from the guideline's construction grammar: hairline bands, rule with punched nodes, topline, chips, raised plate, gate badge, status marks. No new shapes.

## What not to place on this page

- The word "grooming", "backlog refinement" as a headline term, or "outer loop" without a concrete definition in the same sentence.
- Any figure from the claims ledger: repositories indexed, setup time, cost reduction, debugging time, hit rates, meeting reduction, pilot or user counts.
- Customer or design-partner names. Capillary is the origin and validation environment, not a logo.
- A fabricated screenshot. Illustrative panels carry the ILLUSTRATIVE label.
- Integration logos that are not verified connections.
- Amber text on paper, mono labels, rounded corners, gradients, module colour-coding.
- The homepage TrustStrip.
- A section for every question. Anything that can be a strip, a chip row or an FAQ item is one; the page spends length only on the walkthrough.

## Decisions needed before final copy

1. Headline: recommended line or descriptive fallback.
2. Walkthrough capture: available, from which environment, by when. Until then the panel is illustrative.
3. Routing through the customer's approval process: does it work today.
4. Write-back into the ticket system: supported or planned.
5. Surfaces confirmed for Spec at launch.
6. Whether the demo form preselects a module.
7. Whether the shared-foundation name and "Story PR" affect section 07's forward links.

These change labels and status marks, not the section sequence.
