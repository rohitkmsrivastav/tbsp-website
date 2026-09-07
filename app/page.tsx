const modules = [
  { number: '01', name: 'Spec', description: 'Turn an incomplete request into development-ready work grounded in the existing system.', input: 'Request or ticket', output: 'Specification + acceptance criteria' },
  { number: '02', name: 'Code', description: 'Plan, build, test, and debug with the architecture, conventions, and production context in view.', input: 'Approved work or defect', output: 'Code + tests + implementation evidence' },
  { number: '03', name: 'Review', description: 'Evaluate a change against its requirement, dependencies, controls, and supporting evidence.', input: 'Pull request + requirement', output: 'Findings + approval evidence' },
  { number: '04', name: 'On-call', description: 'Connect a production symptom to the deployed version, relevant code, and prior decisions.', input: 'Alert or symptom', output: 'Ranked hypotheses + governed next action' },
];

export const dynamic = 'force-static';

const foundations = [
  ['Context', 'Code, architecture, tickets, delivery systems, and runtime signals remain linked.'],
  ['Playbooks', 'Turn the way your organisation works into executable, reusable workflows.'],
  ['Control', 'Apply scoped permissions, human Gates, and server-side execution boundaries.'],
  ['Evidence', 'Retain sources, decisions, approvals, and artifacts as the work progresses.'],
];

const adoption = [
  'Choose one application, repository, team, or workflow.',
  'Connect the minimum context sources it requires.',
  'Configure its playbook, permissions, and human Gate.',
  'Evaluate a defined outcome against an agreed baseline.',
  'Expand to more modules and teams on the same foundation.',
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="TBSP home"><span className="wordmark-mark" aria-hidden="true">T</span><span>TBSP</span></a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#platform">Platform</a><a href="#products">Products</a><a href="#enterprise">Enterprise</a><a href="#resources">Resources</a><a href="#docs">Docs</a>
        </nav>
        <a className="button button-small button-dark" href="#contact">Book a demo</a>
      </header>

      <section className="hero page-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Agentic software development for enterprise engineering</p>
          <h1>Ship with the<br /><em>whole picture.</em></h1>
          <p className="hero-lede">TBSP carries engineering context, executable workflows, and human decisions from the first requirement through code, review, release, and production.</p>
          <div className="hero-actions">
            <a className="button button-accent" href="#workflow">See the product <Arrow /></a>
            <a className="button button-outline" href="#contact">Book a demo</a>
            <a className="text-link" href="#docs">Read the docs <Arrow /></a>
          </div>
        </div>

        <figure className="hero-illustration">
          <img
            src={`${basePath}/illustrations/tbsp-context-lifecycle-v1.webp`}
            alt="An architectural blueprint showing one work item moving through specification, code, review, a human approval gate, and production before looping back."
          />
          <figcaption>
            <span>ONE WORK ITEM / CONTEXT PRESERVED</span>
            <span>SPEC → CODE → REVIEW → GATE → PRODUCTION ↩</span>
          </figcaption>
        </figure>
      </section>

      <aside className="origin-strip">
        <p>Built from <strong>Capillary Technologies&apos;</strong> own enterprise engineering challenge.</p>
        <div className="audience-signals" aria-label="Designed for"><span>Brownfield systems</span><span>Established SDLC controls</span><span>Teams adopting AI coding agents</span></div>
      </aside>

      <section className="problem page-shell">
        <p className="section-index">01 / THE DELIVERY GAP</p>
        <div className="problem-heading"><h2>AI made coding faster. Shipping still depends on <em>everything around it.</em></h2><p>Every handoff asks someone to reconstruct the context, constraints, and decisions that shaped the work.</p></div>
        <div className="problem-grid">
          <article><span>CONTEXT</span><h3>The system is distributed</h3><p>Code, tickets, architecture, delivery systems, and production each hold part of the answer.</p></article>
          <article><span>PROCESS</span><h3>The rest of delivery must keep pace</h3><p>Requirements, reviews, tests, and approvals need to move with generated code.</p></article>
          <article><span>PRODUCTION</span><h3>Incidents begin with reconstruction</h3><p>Teams must recover what changed, why it changed, and which controls were applied.</p></article>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="page-shell">
          <p className="section-index section-index-light">02 / CONNECTED WORK</p>
          <div className="section-heading inverse"><h2>One work item.<br /><em>Context carried forward.</em></h2><p>TBSP makes the work, its sources, and its decisions available to the next step in the lifecycle.</p></div>
          <div className="lifecycle">
            {[
              ['01', 'Spec', 'Define the work', 'Request → specification'],
              ['02', 'Code', 'Build and debug', 'Spec → implementation'],
              ['03', 'Review', 'Evaluate the change', 'PR → findings'],
              ['04', 'Gate', 'Make the decision', 'Evidence → approval'],
              ['05', 'On-call', 'Investigate production', 'Signal → next action'],
            ].map(([num, name, title, meta], index) => (
              <article className={name === 'Gate' ? 'lifecycle-card lifecycle-human' : 'lifecycle-card'} key={name}>
                <div><span>{num}</span><span>{name === 'Gate' ? 'HUMAN' : 'TBSP'}</span></div><h3>{name}</h3><p>{title}</p><small>{meta}</small>{index < 4 && <b aria-hidden="true">→</b>}
              </article>
            ))}
          </div>
          <div className="workflow-note"><span>↳</span><p>When production reveals corrective work, the investigation returns to Code with the deployed version, evidence, and prior decisions already attached.</p></div>
        </div>
      </section>

      <section className="modules page-shell" id="products">
        <p className="section-index">03 / PRODUCTS</p>
        <div className="section-heading"><h2>Start with the job<br /><em>in front of you.</em></h2><p>Four products share the same context, controls, and evidence. Each can solve a focused problem; together they carry work across the lifecycle.</p></div>
        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.name}>
              <div className="module-top"><span>{module.number}</span><Arrow /></div><h3>TBSP <em>{module.name}</em></h3><p>{module.description}</p>
              <dl><div><dt>INPUT</dt><dd>{module.input}</dd></div><div><dt>OUTPUT</dt><dd>{module.output}</dd></div></dl>
              <a href={`#${module.name.toLowerCase()}`}>Explore {module.name} <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="foundation" id="platform">
        <div className="page-shell foundation-grid">
          <div className="foundation-copy">
            <p className="section-index section-index-light">04 / SHARED FOUNDATION</p>
            <h2>Configure the context and controls once. <em>Reuse them across the lifecycle.</em></h2>
            <p>The platform gives every product a common model of your engineering system and the rules under which it can act.</p>
            <div className="foundation-links"><a href="#docs">Explore the platform <Arrow /></a><a href="#docs">Security <Arrow /></a><a href="#docs">Integrations <Arrow /></a></div>
          </div>
          <div className="foundation-cards">{foundations.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="surfaces page-shell">
        <p className="section-index">05 / SURFACES</p>
        <div className="section-heading"><h2>The same system,<br /><em>where the work happens.</em></h2><p>Move between surfaces without losing identity, permissions, context, or the underlying work item.</p></div>
        <div className="surface-demo">
          <article><span className="surface-icon">◌</span><small>SLACK</small><h3>Begin in the conversation</h3><p>Turn a request or production signal into a governed TBSP work item.</p></article>
          <span className="surface-arrow" aria-hidden="true">→</span>
          <article><span className="surface-icon">▣</span><small>DESKTOP</small><h3>Inspect the full picture</h3><p>Explore sources, plans, evidence, and decisions in one working view.</p></article>
          <span className="surface-arrow" aria-hidden="true">→</span>
          <article><span className="surface-icon">›_</span><small>TERMINAL</small><h3>Continue in the flow</h3><p>Execute a scoped action while retaining the platform&apos;s context and controls.</p></article>
        </div>
      </section>

      <section className="enterprise" id="enterprise">
        <div className="page-shell enterprise-layout">
          <div><p className="section-index">06 / ENTERPRISE ADOPTION</p><h2>Begin with one workflow. <em>Expand on shared context.</em></h2><p className="enterprise-lede">Evaluate TBSP against real work, defined controls, and an outcome your team already understands.</p><a className="button button-dark" href="#contact">Discuss an enterprise evaluation <Arrow /></a></div>
          <ol className="adoption-list">{adoption.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol>
        </div>
      </section>

      <section className="resources page-shell" id="resources">
        <p className="section-index">07 / FIELD NOTES</p>
        <div className="section-heading"><h2>See the system<br /><em>through real work.</em></h2><p>Technical walkthroughs for teams evaluating how agentic development fits their existing engineering environment.</p></div>
        <div className="resource-grid">
          <article><span>WORKFLOW WALKTHROUGH · 12 MIN</span><h3>From an incomplete requirement to a reviewed change</h3><p>Follow one work item through Spec, Code, Review, and a human Gate.</p><a href="#docs">Read the walkthrough <Arrow /></a></article>
          <article><span>TECHNICAL GUIDE · 9 MIN</span><h3>Debugging with code, release, and runtime context</h3><p>See how an investigation connects a production signal to the deployed system.</p><a href="#docs">Read the guide <Arrow /></a></article>
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="page-shell closing-layout">
          <div><p className="eyebrow eyebrow-light">A CONCRETE PLACE TO START</p><h2>Bring one real workflow.<br /><em>See what TBSP can carry forward.</em></h2></div>
          <div className="closing-action"><p>We&apos;ll map its context, human decisions, controls, and a useful evaluation scope.</p><a className="button button-accent" href="mailto:hello@tbsp.dev">Book a demo <Arrow /></a><a href="#docs">Read the evaluation guide <Arrow /></a></div>
        </div>
      </section>

      <footer id="docs">
        <div className="page-shell footer-grid">
          <div><a className="wordmark wordmark-light" href="#top"><span className="wordmark-mark">T</span><span>TBSP</span></a><p>Agentic software development for enterprise engineering.</p></div>
          <div><strong>PLATFORM</strong><a href="#platform">Overview</a><a href="#platform">Surfaces</a><a href="#platform">Integrations</a><a href="#platform">Security</a></div>
          <div><strong>PRODUCTS</strong><a href="#products">Spec</a><a href="#products">Code</a><a href="#products">Review</a><a href="#products">On-call</a></div>
          <div><strong>RESOURCES</strong><a href="#resources">Field notes</a><a href="#enterprise">Enterprise</a><a href="#docs">Documentation</a></div>
        </div>
        <div className="page-shell footer-bottom"><span>© 2026 TBSP</span><span>Built for complex engineering systems.</span></div>
      </footer>
    </main>
  );
}
