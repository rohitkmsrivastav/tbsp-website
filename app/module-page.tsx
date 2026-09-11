import type { ReactNode } from 'react';
import {
  Arrow,
  modules,
  PageCta,
  PageFrame,
  PageIntro,
  siteHref,
} from './site';

// The module-page template. One component, four pages: Spec, Code, Review and
// On-call each supply a ModulePageData object and nothing else. The block order
// is fixed so the four pages read as one product: intro, who starts it, the
// artefact (input on the left, output on the right), the walkthrough ledger,
// inputs / outputs / the human decision, what it connects to, the handoff to
// the next module, FAQ, closing.

export type RecordRow = {
  num?: string; // 'AC-1' for numbered criteria or findings
  text: string;
  chips?: string[]; // sources or evidence, rendered as chips under the text
  owner?: string; // for open questions: who owns the answer
  status?: 'met' | 'partial' | 'unmet'; // Review findings, later
};

export type RecordSection = {
  label: string;
  rows: RecordRow[];
  chips?: string[]; // a chip row for the whole section, e.g. affected services
};

export type ModulePageData = {
  module: (typeof modules)[number];
  subtitle: string; // workflow-family name, e.g. 'PLAN AND SPECIFY'
  title: ReactNode;
  metaTitle: string;
  lede: string;
  startedBy: string[];
  startedFor: string;
  artefact: {
    title: string;
    lede: string;
    ariaLabel: string;
    topline: [string, string];
    input: {
      label: string;
      title: string;
      meta: string;
      body: string;
      missingLabel: string;
      missing: string[];
    };
    output: {
      topline: [string, string];
      sections: RecordSection[];
      gate: string;
      alsoIn: string;
    };
  };
  walkthrough: {
    title: string;
    lede: string;
    steps: Array<{ name: string; copy: string; source: string; gate?: boolean }>;
  };
  control: {
    title: string;
    lede: string;
    columns: [string, string]; // left: what the module does; right: what a person decides
    rows: Array<[string, string]>;
  };
  connects: {
    title: string;
    lede: string;
    rows: Array<[string, string]>;
    links: Array<[string, string]>;
  };
  handoff: {
    title: string;
    lede: string;
    done: string[];
    active: string;
    cells: Array<{ to: string; copy: string; href: string; label: string }>;
  };
  faqLede: string;
  faqs: Array<[string, string]>;
  cta: { title: string; copy: string };
};

const STAGES = ['Spec', 'Code', 'Review', 'Release', 'On-call'];

// The H badge marks a human decision. It is decorative here: the text beside
// it always names the decision, so assistive tech reads that instead.
function GateBadge() {
  return (
    <b className="gate-badge" aria-hidden="true">
      H
    </b>
  );
}

function Chips({ items, className }: { items: string[]; className: string }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Artefact({ data }: { data: ModulePageData['artefact'] }) {
  const { input, output } = data;
  return (
    <section className="module-output" id="output">
      <div className="page-shell">
        <div className="section-heading inverse">
          <h2>{data.title}</h2>
          <p>{data.lede}</p>
        </div>
        <figure className="ui module-panel" aria-label={data.ariaLabel}>
          <div className="ui-topline">
            <span>{data.topline[0]}</span>
            <span>{data.topline[1]}</span>
          </div>
          <div className="module-panel-body">
            <div className="ticket-plate">
              <small>{input.label}</small>
              <strong>{input.title}</strong>
              <span className="ticket-meta">{input.meta}</span>
              <p>{input.body}</p>
              <div className="ticket-missing">
                <small>{input.missingLabel}</small>
                <ul>
                  {input.missing.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="record">
              <div className="record-topline">
                <span>{output.topline[0]}</span>
                <span className="is-human">{output.topline[1]}</span>
              </div>
              {output.sections.map((section) => (
                <div className="record-section" key={section.label}>
                  <small>{section.label}</small>
                  {section.rows.map((row) => (
                    <div
                      className={row.num ? 'record-row record-ac' : 'record-row'}
                      key={row.text}
                    >
                      {row.num && <b>{row.num}</b>}
                      <div>
                        <p>{row.text}</p>
                        {row.chips && (
                          <Chips items={row.chips} className="record-chips" />
                        )}
                      </div>
                      {row.owner && (
                        <span className="record-owner">{row.owner}</span>
                      )}
                    </div>
                  ))}
                  {section.chips && (
                    <Chips items={section.chips} className="record-chips" />
                  )}
                </div>
              ))}
              <div className="record-foot">
                <p>
                  <GateBadge /> {output.gate}
                </p>
                <p>{output.alsoIn}</p>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export function ModulePage({ data }: { data: ModulePageData }) {
  const mod = data.module;
  return (
    <PageFrame>
      <PageIntro
        eyebrow={`MODULE ${mod.number} / ${mod.name.toUpperCase()} · ${data.subtitle}`}
        title={data.title}
        lede={data.lede}
        action={{ label: 'Book a demo', href: '/demo' }}
        secondary={{ label: 'See the walkthrough', href: '#walkthrough' }}
      />

      <aside className="module-strip">
        <div className="page-shell module-strip-row">
          <div className="module-strip-start">
            <span className="module-strip-label">Who uses it</span>
            <Chips items={data.startedBy} className="module-strip-chips" />
          </div>
          <p>{data.startedFor}</p>
        </div>
      </aside>

      <Artefact data={data.artefact} />

      <section className="module-section page-shell" id="walkthrough">
        <div className="section-heading">
          <h2>{data.walkthrough.title}</h2>
          <p>{data.walkthrough.lede}</p>
        </div>
        <ol
          className="walk"
          aria-label={`${mod.name} walkthrough, ${data.walkthrough.steps.length} steps`}
        >
          {data.walkthrough.steps.map((step, index) => (
            <li key={step.name} className={step.gate ? 'gate' : undefined}>
              <b aria-hidden="true">
                {step.gate ? 'H' : String(index + 1).padStart(2, '0')}
              </b>
              <strong>{step.name}</strong>
              <p>{step.copy}</p>
              <small>{step.source}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className="module-control">
        <div className="page-shell">
          <div className="section-heading">
            <h2>{data.control.title}</h2>
            <p>{data.control.lede}</p>
          </div>
          <div className="split" role="table" aria-label={data.control.title}>
            <div className="split-head" role="columnheader">
              {data.control.columns[0]}
            </div>
            <div className="split-head split-right" role="columnheader">
              {data.control.columns[1]}
            </div>
            {data.control.rows.map(([left, right], index) => {
              const last = index === data.control.rows.length - 1;
              return (
                <div className="split-row" role="row" key={left}>
                  <p role="cell">{left}</p>
                  <p role="cell" className={last ? 'split-right is-gate' : 'split-right'}>
                    {right}
                    {last && <GateBadge />}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="module-section page-shell" id="fit">
        <div className="section-heading">
          <h2>{data.connects.title}</h2>
          <p>{data.connects.lede}</p>
        </div>
        <dl className="fit-ledger">
          {data.connects.rows.map(([label, fact]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{fact}</dd>
            </div>
          ))}
        </dl>
        <div className="fit-links module-links">
          {data.connects.links.map(([label, href]) => (
            <a href={siteHref(href)} key={href}>
              {label} <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="module-section page-shell" id="next">
        <div className="section-heading">
          <h2>{data.handoff.title}</h2>
          <p>{data.handoff.lede}</p>
        </div>
        <ol
          className="stage-row"
          aria-label={`Where ${mod.name} hands over: ${data.handoff.active} is next`}
        >
          {STAGES.map((stage, index) => {
            const done = data.handoff.done.includes(stage);
            const on = stage === data.handoff.active;
            return (
              <li
                key={stage}
                className={done ? 'done' : on ? 'on' : undefined}
                aria-current={on ? 'step' : undefined}
              >
                <b aria-hidden="true">
                  {done ? '✓' : String(index + 1).padStart(2, '0')}
                </b>
                <span>{stage}</span>
              </li>
            );
          })}
        </ol>
        <div className="handoff-cells">
          {data.handoff.cells.map((cell) => (
            <article key={cell.to}>
              <small>{cell.to}</small>
              <p>{cell.copy}</p>
              <a href={siteHref(cell.href)}>
                {cell.label} <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="buyer-faq page-shell">
        <div>
          <h2>A few practical answers.</h2>
          <p className="faq-lede">{data.faqLede}</p>
        </div>
        <div className="faq-list">
          {data.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <PageCta title={data.cta.title} copy={data.cta.copy} />
    </PageFrame>
  );
}
