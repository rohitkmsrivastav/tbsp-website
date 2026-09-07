import {
  Arrow,
  modules,
  PageFrame,
  siteHref,
  TrustStrip,
} from './site';

export const dynamic = 'force-static';

const foundations = [
  ['Context', 'Code, architecture, tickets, delivery systems, and runtime signals remain linked.'],
  ['Playbooks', 'Turn the way your organisation works into executable, reusable workflows.'],
  ['Control', 'Apply scoped permissions, human Gates, and server-side execution boundaries.'],
  ['Evidence', 'Retain sources, decisions, approvals, and artifacts as the work progresses.'],
];

const adoption = [
  'Choose one application, repository, team, or workflow.',
  'Connect only the context sources it requires.',
  'Confirm connector permissions and execution boundaries.',
  'Configure its playbook and named human Gate.',
  'Evaluate a defined outcome against an agreed baseline.',
];

function ProductWorkflow() {
  const stages = ['Spec', 'Code', 'Review', 'Gate', 'Release', 'On-call'];

  return (
    <figure className="product-workflow" aria-label="Illustrative TBSP product workflow">
      <div className="product-workflow-topline">
        <span>ILLUSTRATIVE WORKFLOW / ENG-2841</span>
        <span className="workflow-status">HUMAN REVIEW</span>
      </div>
      <div className="product-workflow-title">
        <span>Customer identity service</span>
        <h2>Add regional failover</h2>
      </div>
      <div className="source-row" aria-label="Connected sources">
        <span>Jira request</span>
        <span>Service code</span>
        <span>Architecture decision</span>
        <span>Deploy history</span>
        <span>Runtime signals</span>
      </div>
      <div className="product-stage-row">
        {stages.map((stage, index) => (
          <div className={stage === 'Gate' ? 'product-stage active' : 'product-stage'} key={stage}>
            <b>{String(index + 1).padStart(2, '0')}</b>
            <span>{stage}</span>
          </div>
        ))}
      </div>
      <div className="product-evidence-grid">
        <article>
          <span>REQUIREMENT</span>
          <p>Regional failure must preserve active customer sessions.</p>
          <small>Source: ENG-2841 · one clarification resolved</small>
        </article>
        <article>
          <span>REVIEW FINDING</span>
          <p>Health-check state remains tied to the primary region.</p>
          <small>Evidence: auth/health.ts · deployment configuration</small>
        </article>
        <article className="gate-card">
          <span>HUMAN GATE</span>
          <p>Platform lead reviews the finding before release.</p>
          <small>Decision and supporting evidence are retained</small>
        </article>
      </div>
      <figcaption>
        Representative product workflow. Final interfaces may vary by deployment and connected systems.
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <PageFrame>
      <section className="hero page-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Agentic software development for enterprise engineering</p>
          <h1>
            Ship with the
            <br />
            <em>whole picture.</em>
          </h1>
          <p className="hero-lede">
            TBSP is one platform with four modules—Spec, Code, Review, and On-call.
            They share system context, executable playbooks, and governed human
            decisions from the first request through production.
          </p>
          <div className="hero-actions">
            <a className="button button-accent" href="#workflow">
              Inspect the workflow <Arrow />
            </a>
            <a className="button button-outline" href={siteHref('/demo')}>
              Plan an evaluation
            </a>
            <a className="text-link" href={siteHref('/docs')}>
              Read the docs <Arrow />
            </a>
          </div>
        </div>
        <ProductWorkflow />
      </section>

      <aside className="origin-strip">
        <p>
          Built from <strong>Capillary Technologies&apos;</strong> own enterprise
          engineering challenge.
        </p>
        <div className="audience-signals" aria-label="Designed for">
          <span>Brownfield systems</span>
          <span>Established SDLC controls</span>
          <span>Teams adopting AI coding agents</span>
        </div>
      </aside>

      <section className="problem page-shell">
        <p className="section-index">01 / THE DELIVERY GAP</p>
        <div className="problem-heading">
          <h2>AI made coding faster. Shipping still depends on everything around it.</h2>
          <p>
            Every handoff asks someone to reconstruct the context, constraints, and
            decisions that shaped the work.
          </p>
        </div>
        <div className="problem-grid">
          <article>
            <span>CONTEXT</span>
            <h3>The system is distributed</h3>
            <p>Code, tickets, architecture, delivery systems, and production each hold part of the answer.</p>
          </article>
          <article>
            <span>PROCESS</span>
            <h3>The rest of delivery must keep pace</h3>
            <p>Requirements, reviews, tests, releases, and approvals need to move with generated code.</p>
          </article>
          <article>
            <span>PRODUCTION</span>
            <h3>Incidents begin with reconstruction</h3>
            <p>Teams must recover what changed, why it changed, and which controls were applied.</p>
          </article>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="page-shell">
          <p className="section-index section-index-light">02 / CONNECTED WORK</p>
          <div className="section-heading inverse">
            <h2>One work item. Context carried forward.</h2>
            <p>Each step can inspect the sources, artifacts, and decisions produced by the step before it.</p>
          </div>
          <div className="lifecycle">
            {[
              ['01', 'Spec', 'Define the work', 'Request → specification'],
              ['02', 'Code', 'Build and debug', 'Spec → implementation'],
              ['03', 'Review', 'Evaluate the change', 'PR → findings'],
              ['04', 'Gate', 'Make the decision', 'Evidence → approval'],
              ['05', 'Release', 'Deploy approved work', 'Approval → version'],
              ['06', 'On-call', 'Investigate production', 'Signal → next action'],
            ].map(([num, name, title, meta], index) => (
              <article className={name === 'Gate' ? 'lifecycle-card lifecycle-human' : 'lifecycle-card'} key={name}>
                <div><span>{num}</span><span>{name === 'Gate' ? 'HUMAN' : 'TBSP'}</span></div>
                <h3>{name}</h3>
                <p>{title}</p>
                <small>{meta}</small>
                {index < 5 && <b aria-hidden="true">→</b>}
              </article>
            ))}
          </div>
          <div className="workflow-note">
            <span>↳</span>
            <p>When production reveals corrective work, On-call returns the deployed version, evidence, and prior decisions to Code.</p>
          </div>
        </div>
      </section>

      <section className="modules page-shell" id="products">
        <p className="section-index">03 / PRODUCTS</p>
        <div className="section-heading">
          <h2>Start with the job in front of you.</h2>
          <p>Four modules use the same context and controls. Start with one workflow and expand without rebuilding the foundation.</p>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" id={module.name.toLowerCase()} key={module.name}>
              <div className="module-top"><span>{module.number}</span><Arrow /></div>
              <h3>TBSP {module.name}</h3>
              <p>{module.description}</p>
              <dl>
                <div><dt>INPUT</dt><dd>{module.input}</dd></div>
                <div><dt>OUTPUT</dt><dd>{module.output}</dd></div>
              </dl>
              <a href={siteHref(module.path)}>Explore {module.name} <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <TrustStrip />

      <section className="foundation" id="platform">
        <div className="page-shell foundation-grid">
          <div className="foundation-copy">
            <p className="section-index section-index-light">04 / SHARED FOUNDATION</p>
            <h2>Configure context and controls once. Reuse them across the lifecycle.</h2>
            <p>The platform gives every module a common model of the engineering system and the rules under which it can act.</p>
            <div className="foundation-links">
              <a href={siteHref('/platform')}>Explore the platform <Arrow /></a>
              <a href={siteHref('/security')}>Security <Arrow /></a>
              <a href={siteHref('/integrations')}>Integrations <Arrow /></a>
            </div>
          </div>
          <div className="foundation-cards">
            {foundations.map(([title, copy], index) => (
              <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="surfaces page-shell">
        <p className="section-index">05 / SURFACES</p>
        <div className="section-heading">
          <h2>The same system, where the work happens.</h2>
          <p>Identity, permissions, context, and the work item carry across desktop, terminal, Slack, and Teams.</p>
        </div>
        <div className="surface-demo">
          <article><span className="surface-icon">◌</span><small>SLACK + TEAMS</small><h3>Begin in the conversation</h3><p>Turn a request or production signal into a governed TBSP work item.</p></article>
          <span className="surface-arrow" aria-hidden="true">→</span>
          <article><span className="surface-icon">▣</span><small>DESKTOP</small><h3>Inspect the full picture</h3><p>Explore sources, plans, evidence, and decisions in one working view.</p></article>
          <span className="surface-arrow" aria-hidden="true">→</span>
          <article><span className="surface-icon">›_</span><small>TERMINAL</small><h3>Continue in the flow</h3><p>Execute a scoped action while retaining the platform&apos;s context and controls.</p></article>
        </div>
        <a className="section-link" href={siteHref('/surfaces')}>See where TBSP works <Arrow /></a>
      </section>

      <section className="evidence-section">
        <div className="page-shell evidence-layout">
          <div>
            <p className="section-index section-index-light">06 / BUILT FROM THE WORK</p>
            <h2>Capillary&apos;s engineering reality shaped the product boundary.</h2>
          </div>
          <div className="evidence-list">
            <article><span>THE PROBLEM</span><p>Critical context lived across requests, code, delivery controls, and production systems.</p></article>
            <article><span>THE PRODUCT TEST</span><p>Carry one work item through definition, implementation, review, release, and investigation.</p></article>
            <article><span>THE EVIDENCE</span><p>Keep sources, generated artifacts, tool actions, human decisions, and the deployed version connected.</p></article>
            <a href={siteHref('/about')}>Read the origin story <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="enterprise" id="enterprise">
        <div className="page-shell enterprise-layout">
          <div>
            <p className="section-index">07 / ENTERPRISE EVALUATION</p>
            <h2>Begin with one workflow. Expand on shared context.</h2>
            <p className="enterprise-lede">Evaluate TBSP against real work, defined access, and an outcome your team already understands.</p>
            <a className="button button-dark" href={siteHref('/demo')}>Plan an enterprise evaluation <Arrow /></a>
          </div>
          <ol className="adoption-list">
            {adoption.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="resources page-shell" id="resources">
        <p className="section-index">08 / FIELD NOTES</p>
        <div className="section-heading">
          <h2>Inspect the system through real work.</h2>
          <p>Illustrative walkthroughs make the product&apos;s inputs, reasoning, evidence, and boundaries concrete.</p>
        </div>
        <div className="resource-grid">
          <article><span>WORKFLOW WALKTHROUGH · 12 MIN</span><h3>From an incomplete requirement to a reviewed change</h3><p>Follow one work item through Spec, Code, Review, and a named human Gate.</p><a href={siteHref('/resources/requirement-to-reviewed-change')}>Read the walkthrough <Arrow /></a></article>
          <article><span>TECHNICAL GUIDE · 9 MIN</span><h3>Debugging with code, release, and runtime context</h3><p>See how a production signal connects to the deployed version and a governed fix.</p><a href={siteHref('/resources/context-based-debugging')}>Read the guide <Arrow /></a></article>
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="page-shell closing-layout">
          <div><p className="eyebrow eyebrow-light">A CONCRETE PLACE TO START</p><h2>Bring one real workflow.</h2></div>
          <div className="closing-action"><p>We will map its context, permissions, human decisions, controls, and a useful evaluation scope.</p><a className="button button-accent" href={siteHref('/demo')}>Plan an evaluation <Arrow /></a><a href={siteHref('/docs/evaluation')}>Read the evaluation guide <Arrow /></a></div>
        </div>
      </section>
    </PageFrame>
  );
}
