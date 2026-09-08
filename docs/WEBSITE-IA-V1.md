# TBSP website information architecture — V1

Updated: 7 September 2026  
Status: Aligned working structure; not approved public copy  
Scope: Public marketing website and connected documentation, not the product application's internal navigation

## Planning direction

Launch a complete platform-led product website with 13 core marketing pages, a small documentation section, initial resource content, and supporting policy and utility pages.

The governing story is: shared organisational context and delivery practices support connected workflows from exploration and requirements through development, review, release, production investigation, and debugging.

Use **agentic software development platform for enterprise engineering** as the working category in analyst and market-facing contexts. Delivery and lifecycle language remains central to the broader explanation. “Outer loop” is supporting vocabulary rather than the homepage category.

The user's 6 September instruction is to assume that the first release has all the product prowess described in the available context. The 7 September IA alignment organises that prowess as four job-named modules—Spec, Code, Review, and On-call—plus the surfaces through which people access the same platform. Slack remains in V1 as a surface rather than a peer product module. Earlier maturity gaps do not reduce the proposed page scope. This document does not establish final commercial terms, deployment specifications, or publication rights for customer claims.

## Primary navigation

Logo → Home | Platform | Products | Enterprise | Resources | Docs | Book a demo

- Platform links directly to the platform overview. Its navigation panel also exposes Surfaces and Integrations.
- Products is a menu containing four module destinations: Spec, Code, Review, and On-call. It does not need a separate product-index page because the platform overview already explains the suite.
- Enterprise links to the adoption page, with Security directly discoverable in its navigation panel and on the page.
- Resources contains technical articles, walkthroughs, and future customer evidence in one collection.
- Docs is a direct, ungated destination.
- About, Security, Integrations, contact details, and policy links are also available in the footer.
- Once immediate product access is confirmed, add Get started as the primary action and retain Book a demo for enterprise buyers. Sign in links to the application when available; it is not a marketing content page.

## Core marketing pages

| # | Page and proposed path | Visitor question | Minimum V1 content | Main next step |
|---|---|---|---|---|
| 1 | Home `/` | What is TBSP, and why should I care? | Concrete product explanation; shipping bottleneck; one connected lifecycle; four job-based modules; available surfaces; visible product demonstration; shared context and control; Capillary origin; adoption choices | Watch the walkthrough, explore a module, or book a demo |
| 2 | Platform `/platform` | What connects the products, and how does it work? | Context engine; executable playbooks; server-side execution; permissions and human approvals; linked artifacts and evidence; feedback from production; one example moving across modules | Explore the relevant module or read technical documentation |
| 3 | TBSP Spec `/products/spec` | How do we turn an unclear request into development-ready work? | Product/system exploration; clarification; requirements; acceptance criteria; dependencies; PRD/specification example; approved handoff to Code | Watch the requirement-to-spec workflow; evaluate Spec |
| 4 | TBSP Code `/products/code` | How does this help me build and debug an existing system? | Development and debugging as two clear workflows; context retrieval; dependency and blast-radius analysis; planning; approvals; code and tests; release handoff; real product output | Watch Code in action; evaluate Code |
| 5 | TBSP Review `/products/review` | How do we review changes with their intent and system impact? | Requirement-aware review; code and test findings; dependencies; missing evidence; review artifact; human approval; handoff for fixes | Inspect a review example; evaluate Review |
| 6 | TBSP On-call `/products/on-call` | How do we investigate a production alert? | AI SRE and production-investigation context; alert intake; logs, traces, code and release context; likely causes and evidence; a visible Gate before remediation; handoff to Code | Watch an investigation; evaluate On-call |
| 7 | Surfaces — Where TBSP works `/surfaces` | Where can our team use the same platform? | Desktop, terminal, Slack, Teams, and mobile as confirmed; identity and permission continuity; example questions and actions; links into Spec, Code, Review, and On-call | Choose a supported surface or read its setup documentation |
| 8 | Enterprise `/enterprise` | How would we adopt this across our engineering organisation? | Fit for brownfield enterprises/GCCs; engineering leadership and Platform/DevEx outcomes; beginning with one team or workflow; evaluation and rollout process; ownership and implementation support; modular expansion | Discuss an enterprise evaluation |
| 9 | Security `/security` | Can our security team assess this product? | Data-flow explanation; execution and storage boundaries; identity and permissions; secrets/model data handling; human approvals; audit evidence; verified deployment options; security-review contact | Read deployment/security documentation or request a security review |
| 10 | Integrations `/integrations` | Does this work with our stack, and what does connecting it involve? | Verified systems grouped by source control, work tracking, documentation, CI/CD, and observability; data used; read/write scope; prerequisites; native versus assisted/custom setup; links to setup instructions | Check a connector's documentation or discuss the stack |
| 11 | Resources `/resources` | Can I inspect useful technical material before contacting Sales? | A small populated collection of walkthroughs and technical articles, with direct links to related modules and documentation | Read/watch, then explore or evaluate the related workflow |
| 12 | About `/about` | Who built this, and why should we trust them? | Capillary engineering origin; reason for building TBSP; team/accountability; clear relationship to Capillary Technologies | Explore the product or contact the team |
| 13 | Book a demo `/demo` | What happens if I speak to the team? | Demo/evaluation expectations; short contact form; company and use-case context; optional module selection; confirmed next step | Submit or schedule successfully |

The working module grammar is `<Brand> <Job noun>`: Spec, Code, Review, and On-call. The surface grammar is `<Brand> in <Surface>` or `<Brand> <Surface>`. Functional subtitles should accompany Spec and On-call until the names are familiar. This architecture does not presume separate module licences. The shared foundation still needs a product-grade name, and Story PR remains a working review-artifact name pending validation.

## Homepage sequence

1. Explain what the product does and whom it serves, in language that does not require familiarity with “outer loop.”
2. Show an actual product workflow near the top of the page.
3. Explain the problem: code generation can accelerate while requirements, review, coordination, and production diagnosis remain bottlenecks.
4. Show the connected journey: Spec → Code → Review → release → On-call → Code.
5. Introduce the four modules, each with a concrete job and its own page link.
6. Explain that the same system is available through desktop, terminal, Slack, Teams, and mobile where confirmed.
7. Explain the common foundation: reusable context, executable process, approvals, and evidence.
8. Show how TBSP fits into an existing stack and how a team begins an evaluation.
9. Present the Capillary origin and any separately approved evidence, then the primary action.

Do not display the lifecycle as an unconditional autonomous sequence. Show the human handoffs and approvals that are part of the product.

## Standard module-page structure

Use one reusable template for all four module pages:

1. Job, intended user, and concrete problem.
2. Short real walkthrough with a recognizable input.
3. Workflow steps and the organisational context used.
4. Visible output: specification, code/tests, review findings, or production investigation.
5. Human control, permissions, and relevant boundaries.
6. Required integrations and setup.
7. Connection to the shared platform and next module.
8. Relevant evidence, FAQs, and an accurate next action.

Development and Debugging are anchored sections within Code for V1, with context-based debugging as the flagship Code walkthrough. Shared context, playbooks, and evidence are substantial sections within Platform. Surfaces uses a related information-page layout rather than the module template.

## Documentation and supporting pages

Documentation is part of the launch experience. It should be reachable without completing a sales form, although confidential security material may have a separate sharing process.

Minimum documentation destinations:

- `/docs` — overview, core concepts, module selection, and where to start.
- `/docs/evaluation` — prerequisites, access process, supported scope, and how to assess a first workflow.
- `/docs/architecture` — shared context, execution, permissions, artifacts, and module handoffs.
- `/docs/integrations` — supported connectors, setup requirements, and troubleshooting.
- `/docs/deployment-security` — current deployment options and technical security detail.

If self-serve product access is part of the launch, add a working quickstart for every self-serve entry point. A general evaluation guide is insufficient for a visitor expected to onboard independently.

Initial resource content should include two substantial items under `/resources/<slug>`, using one reusable detail template. Recommended subjects are a requirement-to-reviewed-change walkthrough and a context-based debugging walkthrough. Base them on actual product material; customer logos or quantitative outcomes are not prerequisites for demonstrating the product.

Supporting scope outside the 13 marketing pages:

- Privacy notice and applicable website/product terms using the responsible entity's reviewed text.
- Cookie information or controls as appropriate to the implemented tracking setup.
- Successful form/scheduling confirmation and a useful 404 page.
- Application access, download, installation, or sign-in destinations when confirmed by Product.

## Visitor journeys and links

| Visitor | Typical route | Desired outcome |
|---|---|---|
| CTO, VP Engineering, GCC leader | Home → Enterprise → Platform/Security → Demo | Understand organisational fit and begin a qualified evaluation |
| Developer or technical lead | Module page → walkthrough/output → integration requirements → Docs → access/evaluation | Understand a specific job and take a credible technical next step |
| Platform/DevEx owner or architect | Platform → Integrations → architecture/deployment docs → evaluation | Assess fit, implementation effort, and shared controls |
| Security approver | Security → technical data/deployment documentation → security review | Establish what information is needed for approval |
| Reader arriving through technical content | Resource → relevant module → Docs or Demo | Move from a specific problem to the product workflow that addresses it |

Each module page must work as a direct landing page. Visitors should not have to read Home or Platform first to understand it. Enterprise and Security serve different questions: adoption and organisational value versus technical trust and review.

## Assumptions and consequences

| Assumption | Basis/status | Architectural consequence |
|---|---|---|
| All known product capabilities belong in V1 | Explicit user planning instruction, 6 September | Preserve the full capability set while organising it as four modules plus Surfaces |
| Slack is a surface, not a peer module | Latest IA alignment, 7 September | Replace `/products/slack` with `/surfaces`; present Slack alongside desktop, terminal, Teams, and mobile as confirmed |
| TBSP is one platform with modular entry | Product anchor and current product context | Shared Platform page and shared navigation; module pages do not imply separate products or purchasing contracts |
| Enterprise buyers and technical evaluators both matter | ICP, customer voice, GTM, and developer-entry discussions | Enterprise journey plus ungated product detail and Docs |
| Enterprise-led acquisition remains the working commercial motion | Current context; exact product-access action unresolved | Default to Book a demo; add/promote Get started when its real destination and terms are confirmed |
| One English-language site serves India and the US initially | Recommendation based on existing geography scope | No country-specific or localized site branches in V1 |
| TBSP has its own product identity, with a clear Capillary relationship | Brand/website discussions; final name unresolved | Dedicated About page; URLs avoid depending on an expanded brand name |
| Pricing, package boundaries, trial terms, and open-source release are not established by the full-capability assumption | Commercial and decision records | Keep these out of top-level navigation until there is a meaningful offer to explain |
| Named-customer proof and numeric outcomes have separate publication requirements | Evidence-and-claims context | Show real product outputs and Capillary origin; add customer evidence when approved |
| Product breadth does not establish support for every named vendor or deployment topology | Product and commercial records | Populate integration/security pages from a specific technical matrix |
| Website publication and general availability can be separate milestones | Current decision log and launch-date conflicts | Architecture is independent of a promised date; the call to action states the access actually offered |

No answer to an access question should be inferred from elapsed time. The current assisted-access default is a recommendation, not a recorded user decision.

## Defer as separate page families

- Industry pages, country pages, and pages for every persona. Address priority audiences on Enterprise and module pages initially.
- A broad Solutions hub. Start with use cases within module and Enterprise pages; add dedicated pages when campaigns or demonstrated search demand justify them.
- Separate marketing pages for context engine, playbooks, learning loop, and each connector. Cover these fully in Platform, Integrations, and Docs first.
- Public pricing until packaging and numbers are defined. If approved before launch, add `/pricing` to V1 rather than defer useful buying information.
- Open-source/community hub or marketplace until there is a usable release or substantive programme.
- Customer-story index until publishable stories exist; initial stories can use the Resources template.
- Comparison pages and an ROI calculator until the comparisons and inputs can be substantiated.
- Standalone pages for individual surfaces, Careers, Partners, Events, and News unless a concrete launch requirement emerges. Surface-specific campaign pages may be added under `/surfaces/<surface>` when demand supports them.

These are page-structure exclusions, not a reduction of the capability set assumed for V1. Desktop, terminal, Slack, Teams, and confirmed mobile access belong on Surfaces, relevant module pages, and setup documentation.

## Practical build scope

The 13-page recommendation expands the 19 August five-to-six-page brief because the product needs a credible page for each distinct job. The latest alignment preserves the count by converting the former Slack product page into Surfaces. Avoid commissioning 13 unrelated designs: reuse one four-module template, one resource-detail template, and a shared information-page layout where appropriate.

The build brief should include editable page content and navigation, the Resources collection and detail template, a connected documentation experience, reusable campaign landing-page capability, form/scheduling confirmation, and measurement of completed requests and technical engagement. Empty campaign and content sections need not be published.

The required content input is a connected product walkthrough plus module-specific outputs, a supported integration/deployment matrix, and a defined access/evaluation process. Marketing owns the story, Product supplies and validates workflow details, Engineering/Security supplies technical boundaries, Sales owns the response path, and the site agency implements the approved structure. These are recommended responsibilities, not new assignments to named people.

## Source basis

- [Current project priorities](../../NOW.md) and [decision log](../../context/DECISIONS.md).
- [Product context](../../context/PRODUCT.md), [positioning](../../context/POSITIONING.md), [ICP](../../context/ICP.md), [customer voice](../../context/CUSTOMER-VOICE.md), [commercial context](../../context/COMMERCIAL.md), and [claims boundaries](../../context/EVIDENCE-AND-CLAIMS.md).
- [TBSP Product Anchor, 4 September](../../../neosapien/TBSP-PRODUCT-ANCHOR.md), particularly module definitions and the website-architecture section; also the user message in the “TBSP Product Modules” task.
- [Product vision and V1 pipeline discussion, 3 September](../../../neosapien/transcripts/neosapien/2026-09-03--tvsp-product-vision-and-v1-pipeline-definition--6a9cb653-525b-4a8d-82d2-91366f781d6d.md).
- [Draftt workstream context](../../context/partners/draftt.md) and [initial website discussion, 19 August](../../sources/transcripts/neosapien/2026-08-19--tbsp-product-website-branding-discussion-with-agency-partner--98bbcf28-da4b-494a-a324-0c0fd2d5c4b9.md).
- User clarification in the present task, 6 September: “Assume that the website will have all the prowess that you know about in the first release only.”
- Latest module and packaging alignment supplied by the user, dated 6 September and adopted for this working IA on 7 September: four job-named modules plus Surfaces; debugging remains within Code.

The recommendations on page count, navigation, consolidation, documentation minimum, and sequencing are synthesis for this task, not previously approved decisions.
