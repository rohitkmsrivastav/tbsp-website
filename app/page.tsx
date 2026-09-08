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

const loopTop = [
  ['01', 'Spec', 'Define the work'],
  ['02', 'Code', 'Build and debug'],
  ['03', 'Review', 'Evaluate the change'],
];

const loopBottom = [
  ['04', 'Gate', 'Make the decision'],
  ['05', 'Release', 'Deploy approved work'],
  ['06', 'On-call', 'Investigate production'],
];

const innerLoopAgents = ['Claude Code', 'Codex', 'Devin', 'TBSP Harness'];

const adoption = [
  'Choose one application, repository, team, or workflow.',
  'Connect only the context sources it requires.',
  'Confirm connector permissions and execution boundaries.',
  'Configure its playbook and named human Gate.',
  'Evaluate a defined outcome against an agreed baseline.',
];

export default function Home() {
  return (
    <PageFrame>
      <section className="hero page-shell" id="top">
        <p className="eyebrow">Agentic software development for enterprise engineering</p>
        <div className="hero-heading">
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
        </div>
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
            <h2>Coding agents close the inner loop. TBSP closes the outer one.</h2>
            <p>Spec through On-call runs as one circuit. Each step inspects the artifacts and decisions produced before it.</p>
          </div>
          <div className="circuit-scroll">
            <figure className="circuit">
              <div className="circuit-topline">
                <span>TBSP · The outer loop</span>
                <span>Spec → On-call · one circuit</span>
              </div>
              <div className="circuit-arc">
                {loopTop.map(([num, name, role], index) => (
                  <article className="circuit-cell" key={name}>
                    <b className="circuit-node">{num}</b>
                    <h3>{name}</h3>
                    <p>{role}</p>
                    {index < 2 && <i className="circuit-step" aria-hidden="true">→</i>}
                  </article>
                ))}
              </div>
              <div className="circuit-core">
                <i className="circuit-edge circuit-edge-right" aria-hidden="true">
                  <b>↓</b>
                </i>
                <div className="circuit-plate">
                  <span>Inner loop / where coding agents operate</span>
                  <strong>Write code, tests, and make them pass</strong>
                  <ul>
                    {innerLoopAgents.map((agent) => <li key={agent}>{agent}</li>)}
                  </ul>
                </div>
                <i className="circuit-edge circuit-edge-left" aria-hidden="true">
                  <b>↑</b>
                </i>
              </div>
              <div className="circuit-arc circuit-arc-return">
                {loopBottom.map(([num, name, role], index) => (
                  <article className={name === 'Gate' ? 'circuit-cell circuit-human' : 'circuit-cell'} key={name}>
                    <b className="circuit-node">{num}</b>
                    <h3>{name}</h3>
                    <p>{role}</p>
                    {index < 2 && <i className="circuit-step" aria-hidden="true">←</i>}
                  </article>
                ))}
              </div>
            </figure>
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


      <section className="enterprise" id="enterprise">
        <div className="page-shell enterprise-layout">
          <div>
            <p className="section-index">06 / ENTERPRISE EVALUATION</p>
            <h2>Begin with one workflow. Expand on shared context.</h2>
            <p className="enterprise-lede">Evaluate TBSP against real work, defined access, and an outcome your team already understands.</p>
            <a className="button button-dark" href={siteHref('/demo')}>Plan an enterprise evaluation <Arrow /></a>
          </div>
          <ol className="adoption-list">
            {adoption.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}
          </ol>
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
