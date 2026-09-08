import { Arrow, modules, PageFrame, siteHref, PageCta } from './site';

export const dynamic = 'force-static';

const journey = [
  {
    name: 'Spec',
    kind: 'Module',
    title: 'Make the requirement complete.',
    copy: 'A request to add customer-data exports becomes acceptance criteria, system constraints, and a plan.',
    record: 'Requirement + source links',
    decision: 'The requirement owner approves the scope.',
  },
  {
    name: 'Code',
    kind: 'Module',
    title: 'Build with the system in view.',
    copy: 'The implementation carries the approved export behaviour, repository conventions, and test requirements.',
    record: '+ Implementation + test results',
  },
  {
    name: 'Review',
    kind: 'Module',
    title: 'Check the change against its intent.',
    copy: 'A reviewer can trace export permissions and test coverage back to the original acceptance criteria.',
    record: '+ Findings + review decision',
    decision: 'The reviewer approves or requests changes.',
  },
  {
    name: 'Release',
    kind: 'Delivery step',
    title: 'Keep the approved change connected.',
    copy: 'The release record links the deployed export feature to its tests and approval evidence.',
    record: '+ Deployed version',
    decision: 'Your release approval process still applies.',
  },
  {
    name: 'On-call',
    kind: 'Module',
    title: 'Investigate with the history attached.',
    copy: 'An export failure can be investigated alongside the deployed version, implementation, and earlier decisions.',
    record: '+ Production evidence',
    decision: 'An operator approves any remediation.',
  },
];

const faqs = [
  [
    'Does TBSP replace our coding assistant?',
    'TBSP is designed to work around existing coding tools and engineering systems. It adds shared system context, reusable workflows, approvals, and delivery evidence. TBSP Code is the development module within that workflow; the tool and agent configuration depends on your environment.',
  ],
  [
    'Do we need all four modules?',
    'You can start with one workflow across Spec, Code, Review, or On-call. The modules share a foundation, so you can explore a focused problem before considering a wider rollout.',
  ],
  [
    'How would we know whether it is helping?',
    'Choose a baseline for the work you want to improve: clarification cycles, review turnaround, time spent reconstructing context, or incident investigation time. Assess output quality and adherence to your controls alongside speed. These are evaluation measures, not promised results.',
  ],
  [
    'Will it fit our stack and security requirements?',
    'The integration and security pages explain the data and permissions involved. Exact connector support, deployment options, model handling, and retention settings need to match your environment before systems are connected.',
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
            Turn faster coding
            <br className="desktop-break" /> into <em>better delivery.</em>
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
            <h2>Add customer-data exports</h2>
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
                <h3>Permission checks need test coverage.</h3>
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

      <section className="problem page-shell">
        <p className="section-index">The delivery gap</p>
        <div className="section-heading">
          <h2>
            Code is moving faster.
            <br />
            The handoffs still take work.
          </h2>
          <p>
            AI coding tools accelerate implementation. Requirements, reviews,
            and production investigations still depend on people finding the
            context.
          </p>
        </div>
        <div className="problem-grid">
          <article>
            <h3>Before the code</h3>
            <p>
              Engineers chase missing requirements and reconstruct how the
              existing system works.
            </p>
            <span>Repeated clarification</span>
          </article>
          <article>
            <h3>Before the release</h3>
            <p>
              Senior reviewers piece together intent, dependencies, and checks
              across tools.
            </p>
            <span>Review and rework</span>
          </article>
          <article>
            <h3>After the change</h3>
            <p>
              On-call teams recover what shipped, why it changed, and what was
              approved.
            </p>
            <span>Investigation time</span>
          </article>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="page-shell">
          <p className="section-index section-index-light">
            One example, from request to production
          </p>
          <div className="section-heading inverse">
            <h2>
              The work moves on.
              <br />
              The context comes with it.
            </h2>
            <p>
              Follow the customer-data export example. Each step adds to the
              same work record, with decisions visible along the way.
            </p>
          </div>
          <ol className="delivery-journey">
            {journey.map((step, index) => (
              <li
                key={step.name}
                className={
                  step.kind === 'Delivery step'
                    ? 'journey-step delivery-step'
                    : 'journey-step'
                }
              >
                <div className="journey-label">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step.name}</strong>
                  <small>{step.kind}</small>
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                  {step.decision && (
                    <p className="human-decision">
                      <span aria-hidden="true">↳</span> {step.decision}
                    </p>
                  )}
                </div>
                <div className="record-addition">
                  <span>Carried forward</span>
                  <p>{step.record}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="agent-relationship">
            <strong>Your coding tools remain part of the workflow.</strong>
            <p>
              TBSP connects the work around implementation: system context,
              playbooks, checks, and approval records. Agent and connector
              choices are established for your stack.
            </p>
            <a href={siteHref('/platform')}>
              See the platform <Arrow />
            </a>
          </div>
          <p className="illustration-note">
            Illustrative workflow. Release is a delivery step; approvals apply
            at the relevant decisions rather than forming a separate product
            module.
          </p>
        </div>
      </section>

      <section className="modules page-shell" id="products">
        <p className="section-index">Four modules, a shared foundation</p>
        <div className="section-heading">
          <h2>Start where work gets stuck.</h2>
          <p>
            Explore one engineering problem first. Reuse the context model and
            playbook patterns, with permissions and approvals configured for
            each workflow.
          </p>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.name}>
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

      <section
        className="proof-example page-shell"
        aria-labelledby="proof-title"
      >
        <div>
          <p className="section-index">Illustrative case study · fictional</p>
          <h2 id="proof-title">
            A review that starts
            <br /> with the evidence.
          </h2>
          <p>
            A fictional enterprise team uses the export workflow to explore a
            familiar bottleneck: reviewers spending time recovering the
            requirement and test history.
          </p>
          <p className="placeholder-note">
            Placeholder story for this design. This is not a customer
            endorsement or a measured TBSP result.
          </p>
        </div>
        <div className="case-comparison">
          <article>
            <span>Starting point</span>
            <h3>Reconstruct the change.</h3>
            <p>
              The requirement is in a ticket, the implementation is in a pull
              request, and the approval discussion is in a separate thread.
            </p>
          </article>
          <article>
            <span>With a connected work record</span>
            <h3>Review the change in context.</h3>
            <p>
              The reviewer can follow the acceptance criteria, source links,
              test evidence, and earlier decisions together.
            </p>
          </article>
          <div className="case-measures">
            <strong>What an evaluation would measure</strong>
            <p>Review turnaround · clarification cycles · missing evidence</p>
          </div>
        </div>
      </section>

      <section className="enterprise-fit page-shell" id="enterprise">
        <div className="section-heading">
          <div>
            <p className="section-index">
              Built around your engineering system
            </p>
            <h2>
              Keep your tools.
              <br />
              Connect the decisions.
            </h2>
          </div>
          <p>
            Work across existing repositories and established delivery
            processes, with explicit boundaries for the context TBSP reads and
            the actions it can take.
          </p>
        </div>
        <div className="fit-grid">
          <article>
            <h3>Context with its sources</h3>
            <p>
              Trace requirements, findings, and production evidence back to the
              work they explain.
            </p>
            <a href={siteHref('/integrations')}>
              Integration scope <Arrow />
            </a>
          </article>
          <article>
            <h3>Approval where it matters</h3>
            <p>
              Keep designated reviewers involved in approval, release, and
              remediation decisions.
            </p>
            <a href={siteHref('/security')}>
              Security and controls <Arrow />
            </a>
          </article>
          <article>
            <h3>A record you can inspect</h3>
            <p>
              Carry sources, outputs, checks, and decisions through the
              lifecycle.
            </p>
            <a href={siteHref('/docs/architecture')}>
              Architecture <Arrow />
            </a>
          </article>
        </div>
        <div className="surface-strip">
          <span>Where your team uses TBSP</span>
          <p>Desktop · Terminal · Slack · Teams</p>
          <a href={siteHref('/surfaces')}>
            Explore interfaces <Arrow />
          </a>
        </div>
      </section>

      <section className="alternatives page-shell">
        <p className="section-index">Why add TBSP?</p>
        <h2>Choose how you connect delivery.</h2>
        <div className="alternative-grid">
          <article>
            <h3>Coding tools + coordination</h3>
            <p>
              Keep the current stack. Your teams assemble requirements, review
              context, approvals, and delivery evidence across tools.
            </p>
            <span>Fits when manual handoffs remain manageable.</span>
          </article>
          <article>
            <h3>Build internally</h3>
            <p>
              Design the context layer and workflow controls around your needs,
              then maintain the integrations and operating model.
            </p>
            <span>Fits when you want to own the full implementation.</span>
          </article>
          <article>
            <h3>Evaluate TBSP</h3>
            <p>
              Assess a shared context and workflow platform around one delivery
              problem before considering a broader rollout.
            </p>
            <span>
              Fits when connecting the surrounding work is the bottleneck.
            </span>
          </article>
        </div>
      </section>

      <section className="buyer-faq page-shell">
        <div>
          <p className="section-index">Before you start</p>
          <h2>A few practical answers.</h2>
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
