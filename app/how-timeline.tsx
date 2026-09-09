'use client';

import { useState } from 'react';
import { Arrow, modules, siteHref } from './site';

// How TBSP works: one work item across a 24-segment timeline, with the module
// that acts at each stage. Hovering (or focusing) a stage, a segment or a card
// lights that stage's segments and card and dims the rest, so the mapping
// between stages and modules is read by pointing, not by reading.

type SegKind = 'on' | 'off' | 'gate' | 'done';
type Seg = { kind: SegKind; span: number; stage: string };

const STAGES: Array<{ name: string; start: number; span: number }> = [
  { name: 'Spec', start: 1, span: 5 },
  { name: 'Code', start: 6, span: 6 },
  { name: 'Review', start: 12, span: 5 },
  { name: 'Release', start: 17, span: 4 },
  { name: 'On-call', start: 21, span: 4 },
];

const TIMELINE: Seg[] = [
  { kind: 'off', span: 1, stage: 'Spec' }, { kind: 'on', span: 2, stage: 'Spec' }, { kind: 'on', span: 1, stage: 'Spec' }, { kind: 'off', span: 1, stage: 'Spec' },
  { kind: 'off', span: 1, stage: 'Code' }, { kind: 'on', span: 3, stage: 'Code' }, { kind: 'off', span: 1, stage: 'Code' }, { kind: 'off', span: 1, stage: 'Code' },
  { kind: 'on', span: 2, stage: 'Review' }, { kind: 'gate', span: 2, stage: 'Review' }, { kind: 'off', span: 1, stage: 'Review' },
  { kind: 'off', span: 1, stage: 'Release' }, { kind: 'gate', span: 1, stage: 'Release' }, { kind: 'off', span: 1, stage: 'Release' }, { kind: 'off', span: 1, stage: 'Release' },
  { kind: 'on', span: 2, stage: 'On-call' }, { kind: 'done', span: 2, stage: 'On-call' },
];

const CARDS: Array<{ name: string; side: 'top' | 'bottom'; col: string; stem: number; human?: boolean; agents?: boolean }> = [
  { name: 'Spec', side: 'top', col: '1 / span 7', stem: 3 },
  { name: 'Review', side: 'top', col: '11 / span 7', stem: 13, human: true },
  { name: 'Code', side: 'bottom', col: '5 / span 7', stem: 8, agents: true },
  { name: 'On-call', side: 'bottom', col: '18 / span 7', stem: 22 },
];

const AGENTS = ['Claude Code', 'Codex', 'Devin', 'TBSP Code'];

// Release has no module card: it runs through the customer's pipeline.
const RELEASE_NOTE = 'Your CI/CD. TBSP logs the approval and the deployed version.';

export function HowTimeline() {
  const [active, setActive] = useState<string | null>(null);
  const cls = (base: string, stage: string) =>
    active === null ? base : active === stage ? `${base} is-active` : `${base} is-dim`;
  const enter = (stage: string) => () => setActive(stage);
  const leave = () => setActive(null);

  return (
    <figure
      className={active ? 'tl has-active' : 'tl'}
      aria-label="How TBSP works: one work item moving from Spec to On-call, with the module that acts at each stage"
      onMouseLeave={leave}
    >
      {CARDS.map((card) => {
        const module = modules.find((m) => m.name === card.name)!;
        return (
          <article
            key={card.name}
            className={cls(`tl-card tl-card-${card.side}`, card.name)}
            style={{ gridColumn: card.col }}
            onMouseEnter={enter(card.name)}
            onFocus={enter(card.name)}
            onBlur={leave}
          >
            <span className={card.human ? 'tl-tag tl-tag-human' : 'tl-tag'}>{card.name}</span>
            <h3>TBSP {card.name}</h3>
            <p>{module.problem}</p>
            {card.agents && (
              <ul className="tl-agents">
                {AGENTS.map((agent) => (
                  <li key={agent}>{agent}</li>
                ))}
              </ul>
            )}
            <a href={siteHref(module.path)}>
              Explore {card.name} <Arrow />
            </a>
          </article>
        );
      })}

      {CARDS.map((card) => (
        <i
          key={`stem-${card.name}`}
          className={cls(`tl-stem tl-stem-${card.side}`, card.name)}
          style={{ gridColumn: card.stem }}
          aria-hidden="true"
        />
      ))}

      <div className="tl-bar" aria-hidden="true">
        {TIMELINE.map((seg, index) => (
          <span
            key={index}
            className={cls(`tl-seg tl-seg-${seg.kind}`, seg.stage)}
            style={{ gridColumn: `span ${seg.span}` }}
            onMouseEnter={enter(seg.stage)}
          >
            {seg.kind === 'gate' ? 'H' : seg.kind === 'done' ? '✓' : ''}
          </span>
        ))}
      </div>

      <div className="tl-stages">
        {STAGES.map((stage) => (
          <button
            type="button"
            key={stage.name}
            className={cls('tl-stage', stage.name)}
            style={{ gridColumn: `${stage.start} / span ${stage.span}` }}
            onMouseEnter={enter(stage.name)}
            onFocus={enter(stage.name)}
            onBlur={leave}
            aria-pressed={active === stage.name}
          >
            {stage.name}
            {stage.name === 'Release' && active === 'Release' && (
              <small className="tl-release-note">{RELEASE_NOTE}</small>
            )}
          </button>
        ))}
      </div>
    </figure>
  );
}
