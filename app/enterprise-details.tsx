import { Arrow, siteHref } from './site';

const connections = [
  [
    'Source control',
    'Code, diffs, pull requests, ownership, and change history',
    'Creating branches, code changes, or review findings',
    'Repository selection, service identity, and separate read/write scopes',
  ],
  [
    'Work tracking & documentation',
    'Requirements, acceptance criteria, architecture, and decisions',
    'Creating or updating work items and specifications',
    'Selected projects and spaces, source ownership, and permission mapping',
  ],
  [
    'CI/CD & release systems',
    'Tests, build results, deployment history, and released versions',
    'Triggering a configured check or approved workflow',
    'Pipeline selection, environment boundaries, and approval requirements',
  ],
  [
    'Observability',
    'Logs, traces, metrics, alerts, and incident context',
    'Any corrective action requires its own explicit scope and approval',
    'Data filters, access window, sensitive-data handling, and permitted environments',
  ],
];

export function IntegrationMatrix() {
  return (
    <section className="integration-detail page-shell">
      <h2>Understand the scope of each connection.</h2>
      <p className="matrix-intro">
        Use this map to identify the sources a workflow needs. It describes
        connection scope; exact vendor support and setup options must be
        confirmed for your stack.
      </p>
      <div className="connector-list">
        {connections.map(([name, reads, writes, setup]) => (
          <article key={name}>
            <h3>{name}</h3>
            <dl>
              <div>
                <dt>Context to read</dt>
                <dd>{reads}</dd>
              </div>
              <div>
                <dt>Writes to scope separately</dt>
                <dd>{writes}</dd>
              </div>
              <div>
                <dt>Setup prerequisites to agree</dt>
                <dd>{setup}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <div className="technical-followup">
        <h3>Confirm the connector, then connect the source.</h3>
        <p>
          For each system, establish the supported version, native or assisted
          setup, authentication method, allowed operations, and support
          limitations before granting access.
        </p>
        <a className="section-link" href={siteHref('/docs/integrations')}>
          Read the setup guide <Arrow />
        </a>
      </div>
    </section>
  );
}

export function SecurityOverview() {
  return (
    <section className="security-overview page-shell">
      <h2>Follow the data. See the decision points.</h2>
      <ol className="security-flow">
        <li>
          <strong>Approved sources</strong>
          <p>Selected repositories, work items, and production signals.</p>
        </li>
        <li>
          <strong>Workflow context</strong>
          <p>The sources and constraints needed for the selected task.</p>
        </li>
        <li>
          <strong>Scoped execution</strong>
          <p>Configured tools, checks, and required human approvals.</p>
        </li>
        <li>
          <strong>Linked evidence</strong>
          <p>
            Outputs, actions, sources, and decisions retained with the work.
          </p>
        </li>
      </ol>
      <p className="matrix-intro">
        This describes the workflow, not a deployment topology. Hosting
        locations, network paths, model providers, and retention rules are
        specific to the agreed environment.
      </p>
    </section>
  );
}
