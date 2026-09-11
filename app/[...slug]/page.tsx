import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DemoBriefForm } from '../demo-brief-form';
import { IntegrationMatrix, SecurityOverview } from '../enterprise-details';
import { ModulePage, type ModulePageData } from '../module-page';
import { specModule } from '../module-spec';
import {
  Arrow,
  PageCta,
  PageFrame,
  PageIntro,
  siteHref,
  TrustStrip,
} from '../site';

type Section = {
  label: string;
  title: string;
  copy: string;
  items?: Array<[string, string]>;
};

type PageConfig = {
  eyebrow: string;
  title: string;
  lede: string;
  sections: Section[];
};

// Module pages built on the module-page template. Each entry is one data file;
// Code, Review and On-call move here from productPages as their content is
// rewritten for the EX-104 story.
const modulePages: Record<string, ModulePageData> = {
  'products/spec': specModule,
};

const productPages: Record<
  string,
  PageConfig & {
    stages: Array<[string, string]>;
    artifact: Array<[string, string]>;
  }
> = {
  'products/code': {
    eyebrow: 'MODULE / CODE',
    title: 'Build and debug with the system in view.',
    lede: 'TBSP Code plans, implements, tests, and diagnoses work with the relevant specification, architecture, dependencies, and production evidence attached.',
    stages: [
      [
        'Plan',
        'Translate approved work into an implementation plan and affected-system map.',
      ],
      [
        'Build',
        'Create the change within repository conventions and configured permissions.',
      ],
      [
        'Test',
        'Run the relevant checks and retain their results with the work item.',
      ],
      [
        'Debug',
        'Connect failures to code, configuration, release, and runtime evidence.',
      ],
      [
        'Hand off',
        'Send code, tests, evidence, and unresolved risks to Review.',
      ],
    ],
    artifact: [
      ['Development input', 'Approved specification and affected services'],
      ['Implementation', 'Code change with tests and dependency evidence'],
      [
        'Debugging input',
        'Failure, logs, traces, deployed version, prior changes',
      ],
      ['Output', 'Implementation or corrective change ready for Review'],
    ],
    sections: [
      {
        label: 'DEVELOPMENT',
        title: 'Plan, implement, and verify a change.',
        copy: 'Code carries the approved requirement forward so the implementation can be assessed against its intent rather than only its syntax.',
      },
      {
        label: 'DEBUGGING',
        title: 'Diagnose with code and runtime context together.',
        copy: 'A failure becomes a grounded investigation across the deployed version, recent changes, logs, traces, dependencies, and known operating constraints.',
      },
    ],
  },
  'products/review': {
    eyebrow: 'MODULE / REVIEW',
    title: 'Review the change against its intent and impact.',
    lede: 'TBSP Review evaluates code, tests, requirements, dependencies, and supporting evidence together, then presents findings for a human decision.',
    stages: [
      ['Read intent', 'Load the approved requirement and acceptance criteria.'],
      [
        'Inspect change',
        'Trace code and test changes across affected dependencies.',
      ],
      [
        'Find gaps',
        'Identify unmet requirements, risks, and missing evidence.',
      ],
      ['Explain', 'Attach each finding to its source and affected behaviour.'],
      [
        'Decide',
        'A human reviewer approves, requests changes, or rejects the change.',
      ],
    ],
    artifact: [
      ['Requirement', 'Regional failure preserves active customer sessions'],
      ['Finding', 'Health-check state remains tied to the primary region'],
      [
        'Evidence',
        'Changed code, tests, deployment configuration, requirement source',
      ],
      ['Decision', 'Changes requested by Platform lead'],
    ],
    sections: [
      {
        label: 'REVIEW ARTIFACT',
        title: 'A finding should show its reason, source, and consequence.',
        copy: 'Review keeps the evidence inspectable so a human can make the decision without reconstructing the work from multiple tools.',
      },
    ],
  },
  'products/on-call': {
    eyebrow: 'MODULE / ON-CALL',
    title: 'Investigate production before changing it.',
    lede: 'TBSP On-call brings AI SRE investigation into the shared lifecycle: connect an alert to logs, traces, code, releases, and prior decisions, then place a visible human approval before remediation.',
    stages: [
      [
        'Receive signal',
        'Start with an alert, symptom, incident thread, or operator question.',
      ],
      [
        'Establish version',
        'Identify the deployed code, configuration, and recent changes.',
      ],
      [
        'Investigate',
        'Inspect logs, traces, dependencies, and known operating constraints.',
      ],
      [
        'Rank causes',
        'Present likely causes with supporting and contradicting evidence.',
      ],
      [
        'Gate action',
        'A human approves remediation or returns corrective work to Code.',
      ],
    ],
    artifact: [
      ['Signal', 'Elevated authentication failures in one region'],
      ['Deployment', 'Version 2026.09.07 and its approved change record'],
      ['Hypothesis', 'Region-local health state prevents traffic promotion'],
      [
        'Boundary',
        'Investigation is read-only until a named human approves action',
      ],
    ],
    sections: [
      {
        label: 'PRODUCTION BOUNDARY',
        title:
          'Investigate freely inside the approved scope. Gate remediation.',
        copy: 'The module can assemble and explain evidence without implying that production changes should happen without an accountable human decision.',
      },
    ],
  },
};

const pages: Record<string, PageConfig> = {
  platform: {
    eyebrow: 'PLATFORM',
    title: 'One context and control layer across software delivery.',
    lede: 'TBSP connects system knowledge, executable playbooks, permissions, decisions, and evidence so each module can continue the same work item.',
    sections: [
      {
        label: '01 / CONTEXT',
        title: 'Link the sources that explain the system.',
        copy: 'Code, architecture, work items, delivery systems, runtime signals, artifacts, and decisions remain attached to the work they informed.',
        items: [
          ['Identity', 'Every source and artifact stays attributable.'],
          [
            'Continuity',
            'The next module receives the same work item and prior evidence.',
          ],
        ],
      },
      {
        label: '02 / PLAYBOOKS',
        title: 'Make the way your organisation works executable.',
        copy: 'A playbook defines the steps, tools, evidence requirements, and decision points for a workflow.',
        items: [
          ['Inputs', 'Required sources and preconditions'],
          ['Actions', 'Permitted tools and operations'],
          ['Approvals', 'The people who approve governed transitions'],
        ],
      },
      {
        label: '03 / CONTROL',
        title: 'Set access and action boundaries before execution.',
        copy: 'Connector scopes, workflow permissions, server-side execution boundaries, and human approvals constrain what a module can do.',
      },
      {
        label: '04 / EVIDENCE',
        title: 'Keep the basis for every output inspectable.',
        copy: 'Sources, generated artifacts, tool actions, test results, findings, approvals, and deployed versions form a continuous record.',
      },
    ],
  },
  surfaces: {
    eyebrow: 'INTERFACES',
    title: 'Use the same platform where the work happens.',
    lede: 'TBSP carries identity, permissions, context, and the underlying work item across desktop, terminal, Slack, and Teams.',
    sections: [
      {
        label: 'DESKTOP',
        title: 'Inspect the full working set.',
        copy: 'Explore sources, plans, artifacts, evidence, and decisions in a dedicated product view.',
      },
      {
        label: 'TERMINAL',
        title: 'Continue inside the engineering flow.',
        copy: 'Run a scoped module action without discarding the context and controls configured on the platform.',
      },
      {
        label: 'SLACK + TEAMS',
        title: 'Begin from a conversation.',
        copy: 'Turn a request, question, or production signal into the same governed work item, then follow progress and hand off to the desktop view.',
      },
    ],
  },
  enterprise: {
    eyebrow: 'ENTERPRISE',
    title: 'Adopt one workflow at a time without losing platform coherence.',
    lede: 'TBSP is designed for brownfield estates, established SDLC controls, and engineering organisations that need AI agents to work inside existing ownership and approval structures.',
    sections: [
      {
        label: '01 / START',
        title: 'Choose a bounded workflow with a known baseline.',
        copy: 'Begin with one application, repository, team, or recurring production problem and define the outcome the evaluation should improve.',
      },
      {
        label: '02 / CONNECT',
        title: 'Add the minimum context and access required.',
        copy: 'Document the systems involved, the data each contributes, the permissions TBSP receives, and the accountable owner.',
      },
      {
        label: '03 / GOVERN',
        title: 'Configure playbooks and named decision points.',
        copy: 'Agree what the system may inspect, what it may execute, what evidence it must retain, and where a human approval applies.',
      },
      {
        label: '04 / EXPAND',
        title: 'Reuse the foundation across modules and teams.',
        copy: 'Once the first workflow is understood, reuse context models and playbook patterns, while configuring access and approvals for each new workflow.',
      },
    ],
  },
  security: {
    eyebrow: 'SECURITY',
    title: 'Make access, execution, and accountability reviewable.',
    lede: 'A TBSP evaluation begins by documenting the data flow, connector permissions, execution boundary, human decisions, and evidence retained for the selected workflow.',
    sections: [
      {
        label: 'DATA FLOW',
        title: 'Know which systems contribute context.',
        copy: 'Each source is connected for a stated purpose. The technical review identifies the data read, the artifacts created, and where information moves.',
      },
      {
        label: 'IDENTITY + PERMISSIONS',
        title: 'Scope access to the workflow.',
        copy: 'Connector permissions and module actions are configured around the minimum required sources and operations. Read and write access are assessed separately.',
      },
      {
        label: 'EXECUTION',
        title: 'Constrain tools and actions with playbooks.',
        copy: 'Server-side execution boundaries and executable playbooks define the tools available, their sequence, and the evidence required.',
      },
      {
        label: 'HUMAN APPROVALS',
        title: 'Keep accountable decisions visible.',
        copy: 'Material transitions such as approval, release, or remediation can require a named human decision, retained with its supporting evidence.',
      },
      {
        label: 'SECURITY REVIEW',
        title:
          'Confirm deployment, secrets, and model handling for your environment.',
        copy: 'Agree the environment-specific answers before granting access. The review should identify where data goes, who can access it, and how it is retained.',
        items: [
          [
            'Deployment and residency',
            'Hosting and execution locations, network boundaries, and permitted data regions.',
          ],
          [
            'Models and secrets',
            'Model providers, data sent to each provider, training and retention terms, and credential handling.',
          ],
          [
            'Identity and access',
            'User and service identities, role mapping, authentication requirements, and access revocation.',
          ],
          [
            'Evidence and deletion',
            'Records captured, retention periods, export needs, and deletion responsibilities.',
          ],
        ],
      },
    ],
  },
  integrations: {
    eyebrow: 'INTEGRATIONS',
    title: 'Connect the systems that already hold the answer.',
    lede: 'TBSP uses approved sources from the existing engineering stack. Exact connector support, prerequisites, and read/write scope are confirmed for each evaluation.',
    sections: [
      {
        label: 'SOURCE CONTROL',
        title: 'Code, change history, pull requests, and ownership.',
        copy: 'Used to explore implementation context, create or inspect changes, connect findings, and trace a deployed version.',
        items: [
          [
            'Data used',
            'Repositories, branches, diffs, reviews, ownership metadata',
          ],
          ['Scope', 'Read or write according to the selected workflow'],
        ],
      },
      {
        label: 'WORK TRACKING + DOCUMENTATION',
        title: 'Requirements, decisions, and operating knowledge.',
        copy: 'Used to ground specifications and reviews in the intent, constraints, and prior decisions behind the work.',
      },
      {
        label: 'CI/CD',
        title: 'Tests, build evidence, approvals, and releases.',
        copy: 'Used to retain verification results and connect an approved change to the version that reached an environment.',
      },
      {
        label: 'OBSERVABILITY',
        title: 'Logs, traces, metrics, alerts, and incident context.',
        copy: 'Used by Code and On-call to connect a symptom to the deployed system and rank likely causes.',
      },
      {
        label: 'SETUP',
        title: 'Review each connector before it is enabled.',
        copy: 'For every system, document the owner, authentication method, required scopes, data used, permitted writes, prerequisites, and support boundary.',
      },
    ],
  },
  privacy: {
    eyebrow: 'PRIVACY',
    title: 'Your information on this website.',
    lede: 'The demo form is currently a preview. It does not send, save, or email the information entered into it.',
    sections: [
      {
        label: 'DEMO FORM',
        title: 'No demo request is submitted yet.',
        copy: 'Selecting Request a demo displays a notice on the page. Your entries remain in the current browser page and are not submitted to TBSP. Do not enter confidential information.',
      },
      {
        label: 'WEBSITE DELIVERY',
        title: 'Services used to display this site.',
        copy: 'This website is hosted on GitHub Pages. Fonts are loaded from Google Fonts. Visiting the site makes requests to these services, which may process connection information under their own privacy practices. The site does not add marketing analytics or tracking cookies.',
      },
      {
        label: 'WHEN BOOKING OPENS',
        title: 'Privacy information will accompany the booking service.',
        copy: 'Before a live form is enabled, this page will identify the responsible business, the information collected, its purpose, retention arrangements, and a privacy contact.',
      },
    ],
  },
  about: {
    eyebrow: 'ABOUT',
    title:
      'Built from an enterprise engineering problem at Capillary Technologies.',
    lede: 'TBSP began with a practical question: how can AI agents move software work forward when the context, controls, and consequences live across an established engineering system?',
    sections: [
      {
        label: 'THE PROBLEM',
        title: 'The code was only one part of the work.',
        copy: 'Requirements, architecture, repository conventions, delivery controls, operational history, and human decisions all shaped whether a change could ship safely.',
      },
      {
        label: 'THE RESPONSE',
        title: 'Carry the work item and its evidence across the lifecycle.',
        copy: 'TBSP was shaped around one connected flow from specification through implementation, review, release, and production investigation.',
      },
      {
        label: 'OUR ORIGIN',
        title: 'Enterprise experience shapes the product.',
        copy: 'TBSP grew from Capillary Technologies’ own engineering challenge: connecting AI-assisted work to the requirements, decisions, and systems that determine whether software can ship.',
      },
      {
        label: 'GET IN TOUCH',
        title: 'See how the approach fits your team.',
        copy: 'Start with a product demonstration and a conversation about your engineering workflow.',
        items: [['Book a demo', '/demo']],
      },
    ],
  },
  resources: {
    eyebrow: 'RESOURCES',
    title: 'Inspect TBSP through concrete engineering work.',
    lede: 'These illustrative walkthroughs show the inputs, sources, artifacts, evidence, and human boundaries behind two representative workflows.',
    sections: [
      {
        label: 'WALKTHROUGH / 12 MIN',
        title: 'From an incomplete requirement to a reviewed change',
        copy: 'Follow a regional-failover request through Spec, Code, Review, and a named human approval.',
        items: [['Read', '/resources/requirement-to-reviewed-change']],
      },
      {
        label: 'TECHNICAL GUIDE / 9 MIN',
        title: 'Debugging with code, release, and runtime context',
        copy: 'Trace an authentication failure from a production signal to the deployed version and a governed corrective change.',
        items: [['Read', '/resources/context-based-debugging']],
      },
    ],
  },
  docs: {
    eyebrow: 'DOCUMENTATION',
    title: 'Understand the platform before connecting a system.',
    lede: 'Start with the core model, choose an evaluation path, then inspect architecture, integration, and deployment-security detail.',
    sections: [
      {
        label: 'START HERE',
        title: 'Evaluation guide',
        copy: 'Choose a bounded workflow, identify owners and sources, define access, and agree how success will be assessed.',
        items: [['Open guide', '/docs/evaluation']],
      },
      {
        label: 'CORE CONCEPTS',
        title: 'Architecture',
        copy: 'Understand shared context, playbooks, execution, permissions, evidence, and module handoffs.',
        items: [['Open guide', '/docs/architecture']],
      },
      {
        label: 'CONNECT',
        title: 'Integration setup',
        copy: 'Prepare source control, work tracking, documentation, CI/CD, and observability systems.',
        items: [['Open guide', '/docs/integrations']],
      },
      {
        label: 'ASSESS',
        title: 'Deployment and security',
        copy: 'Structure the review of data flow, scopes, secrets, models, execution, approvals, and audit evidence.',
        items: [['Open guide', '/docs/deployment-security']],
      },
    ],
  },
  'docs/evaluation': {
    eyebrow: 'DOCS / EVALUATION',
    title: 'Evaluate one real workflow with explicit boundaries.',
    lede: 'A useful evaluation starts from real work, a known owner, the minimum required context, and a result the team can assess.',
    sections: [
      {
        label: '01 / CHOOSE',
        title: 'Select a bounded workflow.',
        copy: 'Use one application, repository, recurring request type, review pattern, or production problem.',
      },
      {
        label: '02 / BASELINE',
        title: 'Describe how the work happens today.',
        copy: 'Record the handoffs, systems consulted, time-consuming reconstruction, controls, and accountable people.',
      },
      {
        label: '03 / ACCESS',
        title: 'List sources and permissions.',
        copy: 'For each connector, define the data used, read and write scope, authentication owner, and prerequisites.',
      },
      {
        label: '04 / SUCCESS',
        title: 'Measure the work you want to improve.',
        copy: 'Compare similar work before and during the evaluation. Measure speed alongside output quality and adherence to your controls.',
        items: [
          [
            'Specification',
            'Clarification cycles and acceptance-criteria completeness.',
          ],
          ['Review', 'Review turnaround, reviewer effort, and rework.'],
          [
            'Production',
            'Investigation time and time spent reconstructing change context.',
          ],
          [
            'Method',
            'Agree the sample, start and end points, baseline, and review period before drawing conclusions. These are candidate measures, not achieved results.',
          ],
        ],
      },
    ],
  },
  'docs/architecture': {
    eyebrow: 'DOCS / ARCHITECTURE',
    title: 'Follow one work item across shared context and controls.',
    lede: 'TBSP modules operate on the same work item. Sources, generated artifacts, tool actions, decisions, and deployed versions stay linked as the work moves.',
    sections: [
      {
        label: 'CONTEXT',
        title: 'Sources remain attributable.',
        copy: 'Every requirement, finding, plan, hypothesis, and artifact should preserve the source that informed it.',
      },
      {
        label: 'PLAYBOOK',
        title: 'The workflow is executable.',
        copy: 'A playbook defines preconditions, steps, tools, permitted actions, evidence requirements, and human approvals.',
      },
      {
        label: 'HANDOFF',
        title: 'Modules continue the same work.',
        copy: 'Spec hands an approved artifact to Code; Code sends implementation evidence to Review; Release identifies the deployed version; On-call can return a corrective work item to Code.',
      },
      {
        label: 'RECORD',
        title: 'Outputs and decisions stay inspectable.',
        copy: 'The resulting record connects sources, artifacts, tool activity, tests, findings, approvals, and production evidence.',
      },
    ],
  },
  'docs/integrations': {
    eyebrow: 'DOCS / INTEGRATIONS',
    title: 'Prepare each system connection deliberately.',
    lede: 'Connector setup begins with the workflow, then documents the source owner, data used, authentication, permissions, writes, and support boundary.',
    sections: [
      {
        label: 'INVENTORY',
        title: 'List only the systems the workflow needs.',
        copy: 'Typical categories include source control, work tracking, documentation, CI/CD, release systems, observability, and collaboration.',
      },
      {
        label: 'SCOPE',
        title: 'Separate reads from writes.',
        copy: 'Document which objects TBSP can inspect, which artifacts it can create, and which operations remain unavailable.',
      },
      {
        label: 'VERIFY',
        title: 'Test access with a representative work item.',
        copy: 'Confirm the module can retrieve the intended context, attribute its sources, and respect the configured boundary.',
      },
    ],
  },
  'docs/deployment-security': {
    eyebrow: 'DOCS / DEPLOYMENT + SECURITY',
    title: 'Structure the technical review around the selected environment.',
    lede: 'Deployment and security answers depend on the approved topology and providers. The review should resolve each boundary before production access is granted.',
    sections: [
      {
        label: 'DATA',
        title: 'Map information movement and retention.',
        copy: 'Identify source systems, data classes, generated artifacts, storage locations, retention rules, and deletion responsibilities.',
      },
      {
        label: 'IDENTITY',
        title: 'Define authentication and permissions.',
        copy: 'Record service identities, user attribution, connector scopes, write permissions, secrets handling, and access review.',
      },
      {
        label: 'EXECUTION',
        title: 'Confirm where tools run.',
        copy: 'Document the execution environment, available tools, network boundaries, playbook constraints, and any human approval.',
      },
      {
        label: 'MODELS',
        title: 'Review model-provider handling.',
        copy: 'Confirm the providers used for the deployment, the data sent, applicable retention settings, and contractual controls.',
      },
      {
        label: 'AUDIT',
        title: 'Retain an evidence trail.',
        copy: 'Define which sources, tool actions, outputs, approvals, and deployment records must be available for review.',
      },
    ],
  },
  'resources/requirement-to-reviewed-change': {
    eyebrow: 'ILLUSTRATIVE WALKTHROUGH',
    title: 'From an incomplete requirement to a reviewed change.',
    lede: 'A representative regional-failover request shows how Spec, Code, Review, and a human approval can share the same evidence.',
    sections: [
      {
        label: '01 / REQUEST',
        title: '“Add regional failover to the customer identity service.”',
        copy: 'The Jira request identifies the goal but does not say what must happen to active sessions or which recovery constraint applies.',
      },
      {
        label: '02 / SPEC',
        title: 'Explore the system and surface the missing decision.',
        copy: 'Spec connects the request to the identity-service code, architecture decision, token replication, and prior incident notes. It asks the owner to define session behaviour during failover.',
      },
      {
        label: '03 / CODE',
        title: 'Build against the approved acceptance criteria.',
        copy: 'Code receives the clarified specification, affected components, dependency map, and approval. It produces an implementation plan, code, tests, and verification evidence.',
      },
      {
        label: '04 / REVIEW',
        title: 'Find the gap against intent.',
        copy: 'Review connects the pull request to the requirement and identifies that health-check state remains region-local, with the relevant code and deployment configuration attached.',
      },
      {
        label: '05 / GATE',
        title: 'Let the accountable human decide.',
        copy: 'The Platform lead inspects the finding and evidence, then requests a correction before release. The decision remains attached to the work item.',
      },
    ],
  },
  'resources/context-based-debugging': {
    eyebrow: 'ILLUSTRATIVE TECHNICAL GUIDE',
    title: 'Debugging with code, release, and runtime context.',
    lede: 'A representative authentication failure shows how production evidence can return to Code without losing the deployed version or prior decisions.',
    sections: [
      {
        label: '01 / SIGNAL',
        title: 'Authentication failures rise in one region.',
        copy: 'On-call begins from the alert and incident conversation, then identifies the affected service, environment, and time window.',
      },
      {
        label: '02 / VERSION',
        title: 'Establish what is actually running.',
        copy: 'The investigation connects the symptom to the deployed version, its pull request, tests, approval record, configuration, and recent operational changes.',
      },
      {
        label: '03 / EVIDENCE',
        title: 'Inspect logs, traces, dependencies, and code together.',
        copy: 'The evidence supports a region-local health-state hypothesis and contradicts token-expiry and database-saturation alternatives.',
      },
      {
        label: '04 / BOUNDARY',
        title: 'Investigate before changing production.',
        copy: 'The investigation remains read-only. A named operator reviews the ranked causes and chooses whether to mitigate, gather more evidence, or create corrective work.',
      },
      {
        label: '05 / HANDOFF',
        title: 'Return a grounded defect to Code.',
        copy: 'Code receives the production signal, deployed version, evidence, prior review, and human decision as one connected work item.',
      },
    ],
  },
};

const routeKeys = [
  ...Object.keys(modulePages),
  ...Object.keys(productPages),
  ...Object.keys(pages),
  'demo',
];

export const dynamicParams = false;

export function generateStaticParams() {
  return routeKeys.map((key) => ({ slug: key.split('/') }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const key = slug.join('/');
  const modulePage = modulePages[key];
  if (modulePage)
    return { title: modulePage.metaTitle, description: modulePage.lede };
  const page = productPages[key] ?? pages[key];
  if (key === 'demo')
    return {
      title: 'Book a TBSP demo',
      description:
        'See how TBSP connects requirements, code, reviews, and production context. Start with a product demonstration.',
    };
  return page ? { title: `${page.title} — TBSP`, description: page.lede } : {};
}

function ProductPage({ config }: { config: (typeof productPages)[string] }) {
  return (
    <PageFrame>
      <PageIntro
        eyebrow={config.eyebrow}
        title={config.title}
        lede={config.lede}
        action={{ label: 'Book a demo', href: '/demo' }}
      />
      <section className="detail-section page-shell">
        <p className="section-index">REPRESENTATIVE WORKFLOW</p>
        <div className="process-grid">
          {config.stages.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="artifact-section">
        <div className="page-shell artifact-layout">
          <div>
            <p className="section-index section-index-light">
              ILLUSTRATIVE ARTIFACT
            </p>
            <h2>See the sources, result, and decision together.</h2>
            <p>
              This representative output shows the level of detail an evaluator
              should be able to inspect.
            </p>
          </div>
          <div className="artifact-panel">
            {config.artifact.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {config.sections.map((section) => (
        <InfoSection section={section} key={section.label} />
      ))}
      <TrustStrip />
      <PageCta
        title={`See TBSP ${config.eyebrow.split(' / ')[1]} in action.`}
      />
    </PageFrame>
  );
}

function InfoSection({ section }: { section: Section }) {
  return (
    <section className="info-section page-shell">
      <p className="section-index">{section.label}</p>
      <div className="info-section-grid">
        <h2>{section.title}</h2>
        <div>
          <p>{section.copy}</p>
          {section.items && (
            <div className="info-items">
              {section.items.map(([label, value]) =>
                value.startsWith('/') ? (
                  <a href={siteHref(value)} key={label}>
                    {label} <Arrow />
                  </a>
                ) : (
                  <article key={label}>
                    <span>{label}</span>
                    <p>{value}</p>
                  </article>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function GenericPage({
  config,
  routeKey,
}: {
  config: PageConfig;
  routeKey: string;
}) {
  const isResource = routeKey.startsWith('resources/');
  return (
    <PageFrame>
      <PageIntro
        eyebrow={config.eyebrow}
        title={config.title}
        lede={config.lede}
        action={
          routeKey === 'resources' || routeKey === 'docs'
            ? undefined
            : { label: 'Book a demo', href: '/demo' }
        }
      />
      {routeKey === 'security' && <SecurityOverview />}
      {routeKey === 'integrations' ? (
        <IntegrationMatrix />
      ) : (
        <div className={isResource ? 'article-body' : 'info-sections'}>
          {config.sections.map((section) => (
            <InfoSection section={section} key={section.label} />
          ))}
        </div>
      )}
      <PageCta
        title={isResource ? 'Apply this workflow to your system.' : undefined}
      />
    </PageFrame>
  );
}

function DemoPage() {
  return (
    <PageFrame>
      <PageIntro
        eyebrow="PRODUCT DEMO"
        title="See what changes for your team."
        lede="Walk through TBSP with your delivery challenges in mind. See how requirements, implementation, review evidence, and approvals stay connected. No prepared evaluation brief needed."
      />
      <section className="demo-section page-shell">
        <div className="demo-expectations">
          <p className="section-index">WHAT HAPPENS NEXT</p>
          <ol>
            <li>
              <span>01</span>
              <p>
                See a connected workflow, from the original request to a
                reviewable change.
              </p>
            </li>
            <li>
              <span>02</span>
              <p>
                Discuss where your team loses time: clarification, review,
                handoffs, or production investigation.
              </p>
            </li>
            <li>
              <span>03</span>
              <p>
                Decide whether to explore one workflow further, with a clear
                scope and measures of success.
              </p>
            </li>
          </ol>
          <p>
            Useful for engineering leaders and the people evaluating your AI
            development workflow. Start with the problem you want to understand.
          </p>
        </div>
        <DemoBriefForm />
      </section>
    </PageFrame>
  );
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const key = slug.join('/');
  if (key === 'demo') return <DemoPage />;
  if (modulePages[key]) return <ModulePage data={modulePages[key]} />;
  if (productPages[key]) return <ProductPage config={productPages[key]} />;
  if (pages[key]) return <GenericPage config={pages[key]} routeKey={key} />;
  notFound();
}
