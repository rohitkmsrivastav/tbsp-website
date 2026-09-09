'use client';

import { useCallback, useEffect, useRef } from 'react';
import { BOTTOM_ROW, CELLS_PER_EM, CODE, SHIP, TOP_ROW } from './hero-pixels';

// The hero's first word is a bitmap: square cells sampled from the headline
// face, rendered as inline SVG so it is there from first paint with no
// JavaScript. On load the cells of "Code" fly into the arrangement of "Ship"
// and stay there. A hidden text node carries the word for assistive tech.

const INK = [15, 23, 32];
const AMBER = [242, 178, 58];
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const ROWS = BOTTOM_ROW - TOP_ROW + 1;
const SHIFT = SHIP.cols - CODE.cols; // right-align the wider word; negative
const CELL = 0.9; // cell size in grid units; the gap is what makes it read as pixels

type Track = { x0: number; y0: number; x1: number; y1: number; delay: number; heat: number; fade: boolean };

function pair(): Track[] {
  const byPos = (a: [number, number], b: [number, number]) => a[0] - b[0] || a[1] - b[1];
  const A = [...CODE.cells].sort(byPos);
  const B = [...SHIP.cells].sort(byPos);
  const n = Math.max(A.length, B.length);
  const tracks: Track[] = [];
  for (let i = 0; i < n; i++) {
    const a = A[Math.min(A.length - 1, Math.floor((i / n) * A.length))];
    const b = B[Math.min(B.length - 1, Math.floor((i / n) * B.length))];
    const fade = i >= B.length;
    tracks.push({
      x0: a[0] + SHIFT,
      y0: a[1],
      x1: fade ? a[0] + SHIFT + (Math.random() - 0.5) * 6 : b[0],
      y1: fade ? a[1] - 3 - Math.random() * 3 : b[1],
      delay: (a[0] / CODE.cols) * 0.35 + Math.random() * 0.12,
      heat: Math.random() < 0.28 ? 1 : 0,
      fade,
    });
  }
  return tracks;
}

function Word({ word, className, offset }: { word: typeof CODE; className: string; offset: number }) {
  return (
    <svg
      className={className}
      viewBox={`${SHIFT} ${TOP_ROW} ${CODE.cols} ${ROWS}`}
      style={{ width: `${CODE.cols / CELLS_PER_EM}em`, height: `${ROWS / CELLS_PER_EM}em` }}
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      {word.cells.map(([x, y], i) => (
        <rect key={i} x={x + offset} y={y} width={CELL} height={CELL} fill="currentColor" />
      ))}
    </svg>
  );
}

export function HeroMorph() {
  const hostRef = useRef<HTMLSpanElement>(null);
  const runningRef = useRef(false);

  const run = useCallback(() => {
    const host = hostRef.current;
    if (!host || runningRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const svg = host.querySelector<SVGSVGElement>('.morph-code');
    if (!svg) return;
    const rects = Array.from(svg.querySelectorAll('rect'));
    const tracks = pair();
    while (rects.length < tracks.length) {
      const r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      r.setAttribute('width', String(CELL));
      r.setAttribute('height', String(CELL));
      r.setAttribute('fill', 'currentColor');
      svg.appendChild(r);
      rects.push(r);
    }
    runningRef.current = true;
    host.classList.add('is-animating');
    host.classList.remove('is-shipped');

    rects.forEach((r, i) => {
      const t = tracks[i];
      r.setAttribute('x', String(t.x0));
      r.setAttribute('y', String(t.y0));
      r.setAttribute('fill', 'currentColor');
      r.setAttribute('opacity', '1');
    });

    const T_HOLD = 420; // the bitmap "Code" sits as type would
    const T_FLY = 1500; // last cell lands
    const start = performance.now();
    let aborted = false;
    const onResize = () => {
      aborted = true;
    };
    window.addEventListener('resize', onResize, { once: true });

    const finish = () => {
      rects.forEach((r, i) => {
        const t = tracks[i];
        r.setAttribute('x', String(t.x1));
        r.setAttribute('y', String(t.y1));
        r.setAttribute('fill', 'currentColor');
        r.setAttribute('opacity', t.fade ? '0' : '1');
      });
      host.classList.remove('is-animating');
      host.classList.add('is-shipped');
      runningRef.current = false;
      window.removeEventListener('resize', onResize);
    };

    const frame = (now: number) => {
      const t = now - start;
      if (aborted || t >= T_FLY + 60) return finish();
      if (t >= T_HOLD) {
        const span = T_FLY - T_HOLD;
        rects.forEach((r, i) => {
          const k = tracks[i];
          const local = Math.min(1, Math.max(0, (t - T_HOLD - k.delay * span) / (span * 0.65)));
          const e = easeInOut(local);
          const arc = Math.sin(Math.PI * e) * (1.2 + k.heat * 1.4);
          r.setAttribute('x', (k.x0 + (k.x1 - k.x0) * e).toFixed(2));
          r.setAttribute('y', (k.y0 + (k.y1 - k.y0) * e - arc).toFixed(2));
          const glow = k.heat * Math.sin(Math.PI * e);
          if (glow > 0.02) {
            const col = INK.map((v, c) => Math.round(v + (AMBER[c] - v) * glow));
            r.setAttribute('fill', `rgb(${col.join(',')})`);
          } else if (r.getAttribute('fill') !== 'currentColor') {
            r.setAttribute('fill', 'currentColor');
          }
          if (k.fade) r.setAttribute('opacity', (1 - e).toFixed(2));
        });
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(run, 200);
    return () => window.clearTimeout(id);
  }, [run]);

  return (
    <span ref={hostRef} className="morph" onClick={run} title="Replay">
      <span className="morph-sr">Ship</span>
      <Word word={CODE} className="morph-code" offset={SHIFT} />
      <Word word={SHIP} className="morph-ship" offset={0} />
    </span>
  );
}
