# Website review implementation — 8 September 2026

Implements the accepted ICP review and the user's six annotations. This revision supersedes the older homepage composition and visual rules wherever they conflict.

## User decisions

- Replace the proposed literal hero copy with a new buyer-outcome headline: “Turn faster coding into better delivery.”
- Keep an explicitly illustrative product-view placeholder until the real image is supplied.
- Do not promote the regional-failure Review-page example. Use a separate customer-export example for the accepted connected-work demonstration.
- Add a fictional case-study placeholder, clearly labeled; no invented customer endorsement or measured result.
- Do not add a product-readiness audit or an adoption-owner section.
- Keep the demo form destination at `#`; no live lead capture or email-client handoff. Retain the existing hosting/domain.

## Accepted review coverage

| Review points | Change |
| --- | --- |
| 1–6 | Buyer-outcome hero; connected-delivery explanation; enterprise fit; explicit coding-tool relationship; clarification, review, and investigation pain points. |
| 7 | Omitted at user request. |
| 8–9 | Labeled product-view placeholder and one connected customer-export example. |
| 10 | Omitted at user request. |
| 11–14 | Record additions visible at each step; Release distinguished from modules; approval decisions at multiple stages; module-specific problems with inputs/outputs. |
| 15 | Fictional, replaceable case-study placeholder with candidate measures rather than fabricated results. |
| 16 | Omitted at user request. |
| 17 | Current-tool coordination / internal build / TBSP comparison. |
| 18–27 | Near-white reading surfaces, restrained amber, higher contrast, smaller headings, tighter spacing, simplified type/decoration, consistent buttons, refined brand mark. |
| 28–33 | Consolidated foundation/trust content; compact interface strip; single closing CTA; plain language; scoped reuse; buyer FAQ. |
| 34–38 | Demo CTA/destination aligned; email-client handoff removed; booking preview at `#`; workflow/context optional; no preselected Code; meeting expectations clarified. |
| 39 | Read/write/setup scope matrix and security data-flow overview added. Named supported vendors, deployment modes, model terms, and retention specifics still require real technical inputs; none invented. |
| 40 | Evaluation guide now provides candidate baseline/quality measures. An adoption ownership section remains excluded per annotation. No implementation timelines or support terms invented. |
| 41 | Capillary origin clarified; Contact and Privacy links added; preview privacy behavior documented. Full live-form business/privacy details remain dependent on the booking service and responsible entity. |
| 42 | Deferred by user: keep the existing host/domain. |
| 43–46 | Mobile menu, Escape handling, stacked workflow, shorter hero, keyboard focus, skip link, form labels/validation, reduced-motion styles, and responsive checks. |

## Validation

- Production build passes with the GitHub Pages base path; 22 routes prerendered.
- Published-target checker passes: 28 links and asset references across 23 HTML pages.
- TypeScript and lint for `app/` pass.
- Repository-wide lint has pre-existing errors in unused generated UI components and hooks; those files were not changed.
- Browser checks: desktop full-page layout; mobile at 390px; 320px reflow with no horizontal overflow; menu expansion and Escape dismissal; FAQ expansion; required-field validation; optional workflow/context; preview feedback with `action="#"`.
- Main text/background contrast pairs range from 7.24:1 to 16.96:1. This is a targeted verification, not a full accessibility certification.

## Replaceable inputs

Actual product screenshot; approved customer/internal story; confirmed connector/deployment matrix; booking destination and accompanying business/privacy information; production brand domain if desired later.
