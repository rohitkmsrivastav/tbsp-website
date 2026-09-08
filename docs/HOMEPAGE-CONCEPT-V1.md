# TBSP homepage concept — V1

Date: 7 September 2026  
Status: Recommended homepage direction for discussion; draft copy is not approved public copy  
Depends on: [Website IA](WEBSITE-IA-V1.md), [Brand language](BRAND-LANGUAGE-V1.md), current product demonstrations, and claims approval

## Homepage job

In one visit, the homepage should let an enterprise engineering buyer or technical evaluator answer five questions:

1. What is TBSP?
2. Which delivery problem does it solve?
3. What does the product actually do?
4. How does it fit our organisation and existing stack?
5. What credible next step can I take?

The page should sell the connected system before the individual modules. It should show an inspectable workflow early, make human control visible, and give technical visitors direct routes to module pages and documentation.

## Recommended narrative

### 1. Hero: the whole picture

**Eyebrow:** Agentic software development for enterprise engineering

**Headline:** Ship with the whole picture.

**Explanation:** TBSP carries engineering context, executable workflows, and human decisions from the first requirement through code, review, release, and production.

**Primary action:** See the product  
**Secondary action:** Book a demo  
**Text link:** Read the docs

Beside the copy, show one real or accurately redrawn work item moving from Spec into Code and Review, through a human Gate, and into an On-call investigation. Use the same artifact ID and visible sources throughout. The hero visual is a product explanation, not a decorative animation.

Recommended alternative headline for testing: **From requirement to production, keep the context.** It is more descriptive but less distinctive. A developer-led campaign can use **Build and debug with your system in view** as a landing-page headline rather than the master homepage line.

### 2. Origin and audience signal

Use one restrained credibility line instead of an unapproved logo wall:

> Built from Capillary Technologies' own enterprise engineering challenge.

Pair it with three unquantified audience signals: brownfield systems, established SDLC controls, and teams adopting AI coding agents. Each should link naturally to Enterprise or the relevant technical explanation. Add customer logos or metrics only after publication approval.

### 3. Reframe the problem

**Headline:** AI made coding faster. Shipping still depends on everything around it.

Explain three linked constraints:

- Context is distributed across code, tickets, architecture, delivery systems, and production.
- Requirements, reviews, and approvals must keep pace with generated code.
- Production investigation must reconstruct what changed, why, and under which controls.

End with the bridge: TBSP carries that context and process into the next step instead of asking every participant to reconstruct them.

### 4. The connected workflow

**Headline:** One work item. Context carried forward.

Show the lifecycle in this order:

1. Spec — explore the existing system and define development-ready work.
2. Code — plan, build, test, and debug with organisational context.
3. Review — evaluate the change against its requirement, dependencies, and evidence.
4. Gate and release — show the required human decision and retained approval record.
5. On-call — connect production signals to the deployed version, code, and prior decisions.
6. Return to Code when corrective work is required.

This is the page's main product demonstration. If only one strong interactive or recorded product asset is available for launch, invest it here.

### 5. Four ways into the platform

**Headline:** Start with the job in front of you.

Use four equal module destinations with a concrete input and output:

| Module | Input shown | Output shown | Link label |
|---|---|---|---|
| Spec | Incomplete request or ticket | Development-ready specification and acceptance criteria | Explore Spec |
| Code | Approved work or production defect | Plan, code, tests, and implementation evidence | Explore Code |
| Review | Pull request and originating requirement | Contextual findings and approval evidence | Explore Review |
| On-call | Production alert or symptom | Ranked hypotheses, sources, and governed next action | Explore On-call |

Avoid feature inventories here. Each card should make its job understandable before the visitor follows the link.

### 6. Shared foundation

**Headline:** Configure the context and controls once. Reuse them across the lifecycle.

Use a dark technical field to explain four platform capabilities:

- Connected engineering context.
- Executable playbooks.
- Server-side permissions and scoped execution.
- Evidence, approvals, and linked artifacts.

“Once” means reusable platform configuration with ongoing maintenance through integrations; it must not imply that context never changes or needs upkeep. Link to Platform, Integrations, and Security.

### 7. Surfaces

**Headline:** The same system, where the work happens.

Show desktop, terminal, and Slack when confirmed for launch. Add Teams and mobile only when their supported workflows are confirmed. A surface demonstrates access to the same identity, permissions, context, and artifacts; it is not presented as another product.

Use one coherent example: begin in Slack, open the underlying work item on desktop, and continue a scoped action in the terminal.

### 8. Enterprise adoption

**Headline:** Begin with one workflow. Expand on shared context.

Explain a practical evaluation sequence without promising a fixed onboarding duration:

1. Select one application, repository, team, or workflow.
2. Connect the minimum required context sources.
3. Configure the relevant playbook, permissions, and Gate.
4. Evaluate a defined outcome with an agreed baseline.
5. Add modules and teams without rebuilding the shared foundation.

Place Security, Integrations, and evaluation documentation next to this section. The primary action remains **Discuss an enterprise evaluation** until a self-serve entry point is confirmed.

### 9. Technical resources

Publish at least two substantial resources rather than an empty content grid:

- From incomplete requirement to reviewed change.
- Debugging with code, release, and runtime context.

Each resource should lead to the relevant module page and documentation.

### 10. Closing action

**Headline:** Bring one real workflow. See what TBSP can carry forward.

**Primary action:** Book a demo  
**Secondary action:** Read the evaluation guide

Set expectations beside the action: the session maps one existing workflow, the context it requires, its human decisions, and a useful evaluation scope.

## Navigation and conversion behaviour

Use the agreed navigation: Platform, Products, Enterprise, Resources, Docs, and Book a demo. The Products menu contains Spec, Code, Review, and On-call. The Platform menu exposes the foundation, Surfaces, Integrations, and Security.

The first screen has one dominant product-exploration action and one commercial action. Repeated calls to action should retain the same labels; avoid inventing a new verb in each section. Module links are contextual navigation rather than competing primary buttons.

## Visual rhythm

1. Light hero with a dark product stage.
2. Quiet origin strip.
3. Spacious problem explanation.
4. Dominant connected-workflow demonstration.
5. Four-module ruled grid.
6. Dark shared-foundation section.
7. Light Surfaces strip.
8. Enterprise evaluation section.
9. Two-resource editorial grid.
10. Strong closing action and structured footer.

This alternation creates pace without introducing a different aesthetic for every section. The oxide path should recur from the hero through the main workflow and the Gate.

## What not to place on the homepage

- A five-module grid or Slack as a peer product.
- A separate Debug product.
- Unapproved customer logos, user counts, productivity figures, or ROI claims.
- A long integration-logo cloud without an accurate supported-integration matrix.
- Pricing, free access, air-gapped deployment, or open-source availability unless the offer is approved and live.
- An abstract architecture diagram before the visitor sees a real product workflow.
- The phrases “fully autonomous software factory,” “10x productivity,” or an unsupported claim that TBSP replaces the customer's SDLC stack.
- Teams or mobile presented as launch-ready before Product confirms their supported scope.

## Decisions still needed before final copy and design

1. Final master brand and Capillary endorsement treatment.
2. Shared-foundation name.
3. Whether Story PR is the public name for the Review artifact.
4. Exact V1 surfaces and supported workflows.
5. Primary launch action: product access, evaluation request, or demo.
6. Product capture or recorded scenario used for the connected workflow.
7. Approved proof points and customer marks, if any.

These decisions change labels and proof, not the core homepage sequence.
