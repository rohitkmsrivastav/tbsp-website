import type { ReactNode } from 'react';

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const modules = [
  {
    number: '01',
    name: 'Spec',
    path: '/products/spec',
    description:
      'Turn an incomplete request into development-ready work grounded in the existing system.',
    input: 'Request or ticket',
    output: 'Specification + acceptance criteria',
  },
  {
    number: '02',
    name: 'Code',
    path: '/products/code',
    description:
      'Plan, build, test, and debug with architecture, conventions, and production context in view.',
    input: 'Approved work or defect',
    output: 'Code + tests + implementation evidence',
  },
  {
    number: '03',
    name: 'Review',
    path: '/products/review',
    description:
      'Evaluate a change against its requirement, dependencies, controls, and supporting evidence.',
    input: 'Pull request + requirement',
    output: 'Findings + approval evidence',
  },
  {
    number: '04',
    name: 'On-call',
    path: '/products/on-call',
    description:
      'Connect a production symptom to the deployed version, relevant code, and prior decisions.',
    input: 'Alert or symptom',
    output: 'Ranked hypotheses + governed next action',
  },
];

export function siteHref(path: string) {
  if (path.startsWith('#') || path.startsWith('mailto:') || path.startsWith('http')) {
    return path;
  }
  return `${basePath}${path}`;
}

export function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function NavPanel({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <details className="nav-menu">
      <summary>{label}</summary>
      <div className="nav-panel">{children}</div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href={siteHref('/')} aria-label="TBSP home">
        <span className="wordmark-mark" aria-hidden="true">
          T
        </span>
        <span>TBSP</span>
      </a>
      <nav className="primary-nav" aria-label="Primary navigation">
        <NavPanel label="Platform">
          <a href={siteHref('/platform')}>Platform overview</a>
          <a href={siteHref('/surfaces')}>Surfaces</a>
          <a href={siteHref('/security')}>Security</a>
          <a href={siteHref('/integrations')}>Integrations</a>
        </NavPanel>
        <NavPanel label="Products">
          {modules.map((module) => (
            <a href={siteHref(module.path)} key={module.name}>
              <strong>TBSP {module.name}</strong>
              <span>{module.input}</span>
            </a>
          ))}
        </NavPanel>
        <a href={siteHref('/enterprise')}>Enterprise</a>
        <a href={siteHref('/resources')}>Resources</a>
        <a href={siteHref('/docs')}>Docs</a>
      </nav>
      <a className="button button-small button-dark" href={siteHref('/demo')}>
        Book a demo
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="page-shell footer-grid">
        <div>
          <a className="wordmark wordmark-light" href={siteHref('/')}>
            <span className="wordmark-mark">T</span>
            <span>TBSP</span>
          </a>
          <p>Agentic software development for enterprise engineering.</p>
        </div>
        <div>
          <strong>PLATFORM</strong>
          <a href={siteHref('/platform')}>Overview</a>
          <a href={siteHref('/surfaces')}>Surfaces</a>
          <a href={siteHref('/integrations')}>Integrations</a>
          <a href={siteHref('/security')}>Security</a>
        </div>
        <div>
          <strong>PRODUCTS</strong>
          {modules.map((module) => (
            <a href={siteHref(module.path)} key={module.name}>
              {module.name}
            </a>
          ))}
        </div>
        <div>
          <strong>RESOURCES</strong>
          <a href={siteHref('/resources')}>Field notes</a>
          <a href={siteHref('/enterprise')}>Enterprise</a>
          <a href={siteHref('/docs')}>Documentation</a>
          <a href={siteHref('/about')}>About</a>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© 2026 TBSP</span>
        <span>Built for complex engineering systems.</span>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <main>
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
  action,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  action?: { label: string; href: string };
}) {
  return (
    <section className="page-intro page-shell">
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-intro-grid">
        <h1>{title}</h1>
        <div>
          <p>{lede}</p>
          {action && (
            <a className="button button-accent" href={siteHref(action.href)}>
              {action.label} <Arrow />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export function PageCta({
  title = 'Bring one real workflow.',
  copy = 'We will map its context, permissions, human decisions, and a useful evaluation scope.',
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="closing compact-closing">
      <div className="page-shell closing-layout">
        <h2>{title}</h2>
        <div className="closing-action">
          <p>{copy}</p>
          <a className="button button-accent" href={siteHref('/demo')}>
            Plan an evaluation <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    ['Access', 'Only the sources approved for the workflow'],
    ['Scope', 'Read and write permissions set per connector'],
    ['Execution', 'Actions constrained by executable playbooks'],
    ['Decisions', 'Named human Gates before governed changes'],
    ['Record', 'Sources, actions, artifacts, and approvals retained'],
  ];

  return (
    <section className="trust-section page-shell" id="trust">
      <div className="trust-heading">
        <p className="section-index">TECHNICAL TRUST</p>
        <h2>Know what the system can see, do, and record.</h2>
        <p>
          The exact deployment boundary and connector scope are documented before an
          evaluation begins.
        </p>
      </div>
      <div className="trust-grid">
        {items.map(([title, copy]) => (
          <article key={title}>
            <span>{title}</span>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <div className="trust-links">
        <a href={siteHref('/security')}>Security <Arrow /></a>
        <a href={siteHref('/integrations')}>Integrations <Arrow /></a>
        <a href={siteHref('/docs/architecture')}>Architecture <Arrow /></a>
      </div>
    </section>
  );
}
