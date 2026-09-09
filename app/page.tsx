import { HeroMorph } from './hero-morph';
import { HowTimeline } from './how-timeline';
import { InterfacesSwitcher } from './interfaces-switcher';
import { Arrow, modules, PageFrame, siteHref, PageCta } from './site';

export const dynamic = 'force-static';

const innerLoopAgents = ['Claude Code', 'Codex', 'Devin', 'TBSP Code'];

const fitFacts: Array<[string, string]> = [
  [
    'Connects to',
    'Source control, work tracking and docs, CI/CD, observability. Each connector is enabled for a stated purpose, with its owner, scopes and permitted writes documented first.',
  ],
  [
    'Reads',
    'Only the sources approved for the workflow: repositories, diffs and reviews, tickets and decisions, test and build results, logs, alerts and incidents. Read and write access are assessed separately.',
  ],
  [
    'Writes',
    'What the playbook permits and nothing else. Specs, PRs, findings and proposed fixes are created as artifacts; tools run inside server-side execution boundaries.',
  ],
  [
    'Who approves',
    'Named people at the transitions you designate: scope, review, release, remediation. The decision and its evidence are retained together.',
  ],
  [
    'Records',
    'Sources, generated artifacts, tool actions, test results, findings, approvals and the deployed version, kept as one record per work item.',
  ],
];

const faqs = [
  [
    'Does TBSP replace our coding agents?',
    'No. Keep the coding agents you use; TBSP runs the loop around them: shared context, playbooks, approvals and the delivery record. If you want one from us, TBSP Code is a coding agent too.',
  ],
  [
    'Do we need all four modules?',
    'No. Start with one. The four share the same context, playbooks and permissions, so adding a second module is configuration, not a second project.',
  ],
  [
    'How would we know whether it is helping?',
    'Choose a baseline for the work you want to improve: clarification cycles, review turnaround, time spent reconstructing context, or incident investigation time. Judge quality and whether it kept to your controls, not just speed. These are evaluation measures, not promised results.',
  ],
  [
    'Will it fit our stack and security requirements?',
    'Every connector is agreed before it is switched on: what it reads, what it may write, who owns it. Deployment, model handling and retention are settled in the security review. The Fit and control section above and the security page carry the detail.',
  ],
  [
    'What happens in the first conversation?',
    'Start with a product demonstration. See how context, outputs, and approvals stay connected, discuss your current bottlenecks, and decide whether a focused evaluation is useful. You do not need a prepared repository or evaluation brief.',
  ],
  [
    'How is TBSP priced?',
    'Pricing and evaluation terms are discussed for the scope you are considering. There is no published price list or self-serve checkout on this site.',
  ],
];

export default function Home() {
  return (
    <PageFrame>
      <section className="hero page-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            AI-assisted software delivery for enterprise teams
          </p>
          <h1>
            <HeroMorph /> the way
            <br className="desktop-break" /> your best engineers do.
          </h1>
          <p className="hero-lede">
            TBSP connects requirements, code, reviews, and production context so
            teams can move work forward without rebuilding the story at every
            handoff.
          </p>
          <p className="hero-fit">
            Built for large engineering teams, existing systems, and established
            approval processes.
          </p>
          <div className="hero-actions">
            <a className="button button-accent" href={siteHref('/demo')}>
              Book a demo <Arrow />
            </a>
            <a className="button button-outline" href="#workflow">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <figure
          className="product-preview"
          aria-label="Illustrative product view placeholder"
        >
          <div className="preview-top">
            <span className="preview-brand">TBSP / WORK RECORD</span>
            <span className="preview-label">Product view placeholder</span>
          </div>
          <div className="preview-title">
            <span>Example work item · EX-104</span>
            <p className="preview-heading">Add customer-data exports</p>
            <p>
              Requirement, implementation, and decisions. One connected record.
            </p>
          </div>
          <div className="preview-path" aria-label="Example workflow">
            <span>Spec</span>
            <span>Code</span>
            <strong>Review</strong>
            <span>Release</span>
            <span>On-call</span>
          </div>
          <div className="preview-body">
            <div className="preview-main">
              <span className="preview-caption">Requirement</span>
              <p>Only authorised users can export customer data.</p>
              <div className="preview-finding">
                <span className="preview-caption">Review finding</span>
                <p className="preview-subheading">Permission checks need test coverage.</p>
                <p>
                  The acceptance criteria require an access check. Add a test
                  for users without export permission.
                </p>
                <div className="source-chips">
                  <span>Requirement §2</span>
                  <span>Export handler</span>
                  <span>Test results</span>
                </div>
              </div>
            </div>
            <aside className="preview-decision">
              <span className="preview-caption">Human decision</span>
              <strong>Changes requested</strong>
              <p>
                Reviewer asks for the missing permission test before approval.
              </p>
              <span className="preview-caption">Attached evidence</span>
              <ul>
                <li>Approved specification</li>
                <li>Implementation diff</li>
                <li>Verification results</li>
              </ul>
            </aside>
          </div>
          <figcaption>
            Illustrative interface and sample data. Actual product image to
            replace this view.
          </figcaption>
        </figure>
      </section>

      <aside className="origin-strip">
        <p>
          Built from <strong>Capillary Technologies&apos;</strong> own
          enterprise engineering challenge.
        </p>
        <a className="text-link" href={siteHref('/about')}>
          Our story <Arrow />
        </a>
      </aside>

      <section className="workflow-section" id="workflow">
        <div className="page-shell">
          <p className="section-index section-index-light">How TBSP works</p>
          <div className="section-heading inverse">
            <h2>
              Ticket in, deploy out.
              <br />
              What TBSP does in between.
            </h2>
            <p>
              Spec writes the acceptance criteria. Code opens the PR and runs the
              tests. Review checks the PR against the spec. On-call ties the alert
              back to the deploy. Release is your pipeline. Humans approve at
              review and release.
            </p>
          </div>
          <HowTimeline />
        </div>
      </section>

      <section className="modules page-shell" id="products">
        <p className="section-index">Modules</p>
        <div className="section-heading">
          <h2>Start with one module.</h2>
          <p>
            All four run on the same context model, the same playbooks, and the
            same permissions and approvals. Add the others when you need them.
            Nothing gets set up twice.
          </p>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <article className={`module-card module-card-${module.number}`} key={module.name}>
              <div className="module-top">
                <span className="module-num">{module.number} / 04</span>
                <ol className="module-loop" aria-label={`Where ${module.name} sits in the loop`}>
                  {modules.map((m) => (
                    <li key={m.name} className={m.name === module.name ? 'on' : undefined}>
                      <span>{m.name}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <h3>TBSP {module.name}</h3>
              <p className="module-problem">{module.problem}</p>
              <p>{module.description}</p>
              <dl>
                <div>
                  <dt>Input</dt>
                  <dd>{module.input}</dd>
                </div>
                <div>
                  <dt>Output</dt>
                  <dd>{module.output}</dd>
                </div>
              </dl>
              <a href={siteHref(module.path)}>
                Explore {module.name} <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="enterprise-fit page-shell" id="enterprise">
        <div className="section-heading">
          <div>
            <p className="section-index">Fit and control</p>
            <h2>What TBSP connects to, reads, writes, and records.</h2>
          </div>
          <p>
            TBSP sits around your existing stack. Every boundary below is agreed
            for a workflow before it is switched on, and written down.
          </p>
        </div>
        <dl className="fit-ledger">
          {fitFacts.map(([label, fact]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{fact}</dd>
            </div>
          ))}
        </dl>
        <div className="fit-foot">
          <p>
            Deployment, model handling, data residency and connector
            prerequisites are confirmed for your environment during the security
            review.
          </p>
          <div className="fit-links">
            <a href={siteHref('/integrations')}>
              Integration scope <Arrow />
            </a>
            <a href={siteHref('/security')}>
              Security and controls <Arrow />
            </a>
            <a href={siteHref('/docs/architecture')}>
              Architecture <Arrow />
            </a>
            <a href={siteHref('/surfaces')}>
              Interfaces <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="surfaces-section" id="surfaces">
        <div className="page-shell">
          <p className="section-index section-index-light">Interfaces</p>
          <div className="section-heading inverse">
            <h2>
              The same work item,
              <br />
              wherever the work happens.
            </h2>
            <p>
              Identity, permissions, context and the work item carry across
              desktop, terminal, Slack and Teams. Nothing is re-entered.
            </p>
          </div>
          <InterfacesSwitcher />
          <a className="surface-link" href={siteHref('/surfaces')}>
            Explore interfaces <Arrow />
          </a>
        </div>
      </section>

      <section className="agents-band">
        <div className="page-shell agents-layout">
          <div>
            <p className="section-index">Agents and models</p>
            <h2>
              Bring the agents you use.
              <br />
              Choose the models you run.
            </h2>
            <p>
              Coding agents own the inner loop, and TBSP runs the outer loop
              around them. Both can run on open-weight models served by TBSP,
              or on a frontier model API you already hold.
              Providers, the data sent to each, and retention terms are agreed
              for your environment in the security review.
            </p>
          </div>
          <div className="agents-chips">
            <div className="agents-group">
              <span className="agents-label">Inner loop · coding agents</span>
              <ul>
                {innerLoopAgents.map((agent) => (
                  <li key={agent}>{agent}</li>
                ))}
              </ul>
            </div>
            <div className="agents-group">
              <span className="agents-label">Outer loop · Spec, Review, On-call</span>
              <ul>
                <li>Open-weight model</li>
                <li>Frontier model API</li>
              </ul>
            </div>
            <p>Model choice stays yours, for the agents and for the loop around them.</p>
          </div>
        </div>
      </section>

      <section className="buyer-faq page-shell">
        <div>
          <p className="section-index">Before you start</p>
          <h2>A few practical answers.</h2>
          <p className="faq-lede">
            TBSP fits when connecting the work around the code is the
            bottleneck, not writing the code.
          </p>
          <a className="section-link" href={siteHref('/docs/evaluation')}>
            Read the evaluation guide <Arrow />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <PageCta
        title="See what changes for your team."
        copy="Start with a product demo. Walk through the connected work record, discuss a delivery bottleneck, and decide whether a focused evaluation makes sense."
      />
    </PageFrame>
  );
}
