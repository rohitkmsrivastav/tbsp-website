import type { ModulePageData } from './module-page';
import { modules } from './site';

// Visitor's question this page answers:
//   How do we turn an unclear request into development-ready work?
//
// Every section below helps answer it or is not here. The story is EX-104,
// "Add customer-data exports", the same work item the homepage uses. AC-2 is
// the requirement the homepage hero panel shows, and the criterion Review later
// finds without a test at auth/export.ts:88. Keep that join literal.
//
// The panel is presented as Spec's real output (Rohit, 2026-09-11), not as a
// placeholder. No customer, number, vendor or availability claim appears here;
// see the claims ledger.

export const specModule: ModulePageData = {
  module: modules[0],
  subtitle: 'PLAN AND SPECIFY',
  title: (
    <>
      Turn a thin ticket into a spec <em>you can build from</em>.
    </>
  ),
  metaTitle: 'TBSP Spec — Turn a thin ticket into a spec you can build from',
  lede: 'TBSP Spec reads the ticket, the repo and the ADRs, asks the questions the ticket left out, and writes a specification, or PRD, with acceptance criteria, affected services and open questions.',
  startedBy: [
    'Product manager',
    'Business analyst',
    'Engineering manager',
    'Architect',
  ],
  startedFor:
    'For the ticket that lacks acceptance criteria, scope or technical grounding, before senior-engineer time is spent finding out.',

  artefact: {
    index: 'The output',
    title: 'The ticket that came in, and the spec that went out.',
    lede: 'EX-104 as it left Spec. The ticket as filed on the left. On the right, the specification with its acceptance criteria, affected services and open questions, waiting on the platform lead.',
    ariaLabel:
      'TBSP Spec output for EX-104: the ticket as filed on the left, the specification Spec wrote on the right',
    topline: ['TBSP Spec · EX-104', 'Sources: ticket · repo · ADR-006 · ADR-011'],
    input: {
      label: 'Ticket · EX-104 · Feature',
      title: 'Add customer-data exports',
      meta: 'Product manager · Accounts',
      body: 'Customers have asked to download their data. Add an export from the account page. CSV is fine.',
      missingLabel: 'Not in the ticket',
      missing: [
        'Who may run an export',
        'Which fields it contains',
        'How large a file can get',
      ],
    },
    output: {
      topline: ['Specification · EX-104 · v2', 'Awaiting approval · Platform lead'],
      sections: [
        {
          label: 'Problem',
          rows: [
            {
              text: 'Customers need a self-serve export of their profile data. The ticket does not define who may run it, what it contains, or how it behaves at size.',
            },
          ],
        },
        {
          label: 'How it works today',
          rows: [
            {
              text: 'Profile data is served by identity-service behind a permission check.',
              chips: ['ADR-006', 'auth/permissions.ts'],
            },
            {
              text: 'Requests that outlive a web request run as background jobs.',
              chips: ['ADR-011', 'jobs/'],
            },
          ],
        },
        {
          label: 'Acceptance criteria',
          rows: [
            {
              num: 'AC-1',
              text: 'A user with the export permission can request a CSV of a customer’s profile data from the account page.',
            },
            {
              num: 'AC-2',
              text: 'Only authorised users can export customer data. A request without the export permission is refused and no file is produced.',
            },
            {
              num: 'AC-3',
              text: 'The export runs as a background job and the requester is told when the file is ready.',
            },
            {
              num: 'AC-4',
              text: 'Every export request is written to the audit log with the requester, the customer and the time.',
            },
          ],
        },
        {
          label: 'Affected services',
          rows: [],
          chips: ['identity-service', 'jobs worker', 'audit-log', 'account page'],
        },
        {
          label: 'Open questions',
          rows: [
            {
              text: 'How long is the file available for download?',
              owner: 'Security',
            },
            {
              text: 'Does an export by a support agent need the customer’s consent record attached?',
              owner: 'Product',
            },
          ],
        },
      ],
      gate: 'Platform lead approves before Code starts.',
      alsoIn:
        'Also in the document: scope, edge cases, migration, non-functional requirements, clarification log, sources.',
    },
  },

  walkthrough: {
    title: 'Five steps from ticket to approved spec.',
    lede: 'Trimmed from the full workflow. Every statement names its source.',
    steps: [
      {
        name: 'Read the ticket',
        copy: 'EX-104 asks for exports from the account page. It does not say who may run one, which fields, or how large a file can get.',
        source: 'Ticket EX-104',
      },
      {
        name: 'Explore the system',
        copy: 'Profile data is served by identity-service behind a permission check. Long-running requests already run as background jobs.',
        source: 'identity-service · ADR-006 · ADR-011',
      },
      {
        name: 'Ask the human',
        copy: '“Who may request an export, and which fields?” Answer recorded from the product manager who filed the ticket: users with the export permission; profile fields, no payment data.',
        source: 'Clarification log',
      },
      {
        name: 'Write the spec',
        copy: 'Affected services, four acceptance criteria and two open questions with owners. Each statement carries its source.',
        source: 'Specification v2',
      },
      {
        name: 'Route for approval',
        copy: 'The platform lead approves. Nothing moves to Code before that.',
        source: 'Approval record',
        gate: true,
      },
    ],
  },

  facts: [
    {
      label: 'Inputs',
      copy: 'A ticket or request. Read access to the ticket system, the repo, its ADRs and docs. Answers to the questions Spec asks.',
    },
    {
      label: 'Outputs',
      copy: 'The spec: acceptance criteria, affected services, open questions with owners. The clarification log, kept with it.',
    },
    {
      label: 'A person decides',
      copy: 'Whether to make the change at all, and its scope and priority. The answers to the clarifying questions. Approval of the spec before Code starts.',
      gate: true,
    },
  ],

  connects: {
    title: 'What Spec reads, writes and waits for.',
    lede: 'Every boundary is agreed for the workflow before it is switched on, and written down.',
    rows: [
      [
        'Reads',
        'The ticket, the repository, ADRs and documentation. Only the sources approved for the workflow, read-only.',
      ],
      [
        'Writes',
        'The spec and the clarification log, as artifacts on the work item. Writing the spec back into your ticket system is agreed per connector.',
      ],
      [
        'Who approves',
        'A named owner you designate. The approval is a step in the playbook, enforced server-side, so it cannot be prompted away. Spec holds the work until the approval is recorded with the spec.',
      ],
    ],
    links: [
      ['Integration scope', '/integrations'],
      ['Security and controls', '/security'],
    ],
  },

  handoff: {
    title: 'Then Code takes over.',
    lede: 'The approved spec, the affected services and the clarification log arrive in Code as one work item. No re-briefing.',
    done: ['Spec'],
    active: 'Code',
    cells: [
      {
        to: 'To Code',
        copy: 'Opens the PR with tests against AC-1 to AC-4, with the repo’s conventions in context.',
        href: '/products/code',
        label: 'Explore Code',
      },
      {
        to: 'To Review',
        copy: 'The spec, the decisions behind it and the tests travel with the change to the reviewer as one record. AC-1 to AC-4 become the checklist Review reports against: met, partially met, not met. On this site, Review finds AC-2 has no test.',
        href: '/products/review',
        label: 'Explore Review',
      },
    ],
  },

  faqLede:
    'Spec fits when tickets reach engineering without acceptance criteria, scope or technical grounding.',
  faqs: [
    [
      'Does Spec write the spec back into our ticket system?',
      'Spec writes the spec as an artifact on the work item in TBSP. Whether it also writes into your ticket system is agreed per connector, with the owner and permitted writes documented before it is switched on.',
    ],
    [
      'What happens when a source is not connected?',
      'Spec works from the sources it has and lists what it could not verify as open questions with owners. Gaps are not filled with guesses presented as fact.',
    ],
    [
      'Who starts a Spec workflow, and from where?',
      'A product manager, analyst, engineering manager or architect, from the same interfaces as the rest of TBSP: desktop, terminal, Slack and Teams. The interfaces enabled for a workflow are set during the evaluation.',
    ],
    [
      'How does approval fit our process?',
      'You name the approver and the transition. Spec routes the document and holds the work until the approval is recorded. Routing through an existing review step is configured per evaluation.',
    ],
    [
      'Do we need TBSP Code to use Spec?',
      'No. The spec is a document with numbered criteria; hand it to any team or coding agent. Code is the module that receives it with the affected services and the clarification log already attached.',
    ],
  ],

  cta: {
    title: 'Bring one underspecified ticket.',
    copy: 'One real ticket in a real repository, with read access to the repo, the docs and the ticket. You get back a spec to compare with what your team would have written.',
  },
};
