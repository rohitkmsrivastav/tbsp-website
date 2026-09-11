'use client';

import { useState } from 'react';

function DesktopPanel() {
  const stages = ['Spec', 'Code', 'Review', 'Release', 'On-call'];
  return (
    <figure className="ui ui-desktop" aria-label="Illustrative TBSP desktop view of work item EX-104">
      <div className="ui-topline">
        <span>TBSP · Desktop</span>
        <span>EX-104 · Review</span>
      </div>
      <div className="ui-title">
        <small>Customer identity service</small>
        <strong>Add customer-data exports</strong>
      </div>
      <ol className="ui-stages">
        {stages.map((stage, index) => (
          <li key={stage} className={stage === 'Review' ? 'on' : undefined}>
            <b>{String(index + 1).padStart(2, '0')}</b>
            <span>{stage}</span>
          </li>
        ))}
      </ol>
      <div className="ui-cells">
        <div>
          <small>Requirement</small>
          <p>Only authorised users can export customer data.</p>
        </div>
        <div>
          <small>Finding</small>
          <p>Permission check has no test. auth/export.ts:88</p>
        </div>
        <div className="gate">
          <small>Human gate</small>
          <p>Platform lead to approve before release.</p>
        </div>
      </div>
    </figure>
  );
}

function TerminalPanel() {
  return (
    <figure className="ui terminal" aria-label="Illustrative terminal session running a TBSP review">
      <div className="ui-topline">
        <span>Terminal · TBSP Review</span>
        <span>EX-104</span>
      </div>
      <pre>
        <code>
          <span className="t-prompt">$</span> tbsp review EX-104{'\n'}
          <span className="t-dim">reading</span>  spec EX-104 · 4 acceptance criteria{'\n'}
          <span className="t-dim">reading</span>  PR #482 · 14 files · 142 tests passed{'\n'}
          <span className="t-dim">tracing</span>  changes → criteria{'\n'}
          {'\n'}
          <span className="t-amber">finding</span>  permission check has no test{'\n'}
          {'         '}auth/export.ts:88 · criterion 2{'\n'}
          {'\n'}
          <span className="t-amber">gate</span>     approval requested · platform lead{'\n'}
          <span className="t-dim">record</span>   spec · PR · tests · finding · decision pending
        </code>
      </pre>
    </figure>
  );
}

function ChatPanel() {
  return (
    <figure className="ui chat" aria-label="Illustrative Slack message from TBSP requesting an approval">
      <div className="ui-topline">
        <span># platform-eng</span>
        <span>Slack · Teams</span>
      </div>
      <div className="chat-msg">
        <i aria-hidden="true">T</i>
        <div>
          <div className="chat-meta">
            <strong>TBSP</strong>
            <span>APP</span>
            <span>14:02</span>
          </div>
          <p>
            Review of <b>EX-104 · Add customer-data exports</b> found one gap
            against the spec. Needs your decision before release.
          </p>
          <div className="chat-card">
            <small>Finding · criterion 2</small>
            <p>Permission check has no test · auth/export.ts:88</p>
            <span className="chat-gate">Needs a human · platform lead</span>
          </div>
          <div className="chat-actions">
            <span>Request changes</span>
            <span>Open in TBSP</span>
          </div>
        </div>
      </div>
    </figure>
  );
}

const surfaces = [
  {
    num: '01',
    name: 'Desktop',
    copy: 'Inspect the full working set: sources, plans, artifacts, evidence and decisions.',
    Figure: DesktopPanel,
  },
  {
    num: '02',
    name: 'Terminal',
    copy: 'Run a scoped module action without losing the context and controls set on the platform.',
    Figure: TerminalPanel,
  },
  {
    num: '03',
    name: 'Slack and Teams',
    copy: 'Turn a request or a production signal into the same governed work item, then follow it and decide.',
    Figure: ChatPanel,
  },
];

export function InterfacesSwitcher() {
  const [active, setActive] = useState(0);
  const current = surfaces[active];
  const Figure = current.Figure;
  return (
    <div className="switcher">
      <ol className="switcher-list" role="tablist" aria-label="Interfaces">
        {surfaces.map((surface, index) => {
          const selected = index === active;
          return (
            <li key={surface.name}>
              <button
                type="button"
                role="tab"
                id={`surface-tab-${index}`}
                aria-selected={selected}
                aria-controls="surface-stage"
                className={selected ? 'is-active' : undefined}
                onClick={() => setActive(index)}
              >
                <span>{surface.num}</span>
                <strong>{surface.name}</strong>
                <p>{surface.copy}</p>
              </button>
            </li>
          );
        })}
      </ol>
      <div
        className="switcher-stage"
        id="surface-stage"
        role="tabpanel"
        aria-labelledby={`surface-tab-${active}`}
      >
        <div className="switcher-frame" key={current.name}>
          <Figure />
        </div>
      </div>
    </div>
  );
}
