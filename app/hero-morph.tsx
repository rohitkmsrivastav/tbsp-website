'use client';

import { useCallback, useEffect, useRef } from 'react';

// "Code" breaks into square pixels that fly into place as "Ship".
// The DOM always carries the final word, so the headline reads correctly
// without JavaScript and for assistive tech. The canvas is an overlay.

type Particle = {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  delay: number;
  heat: number; // 0 = stays ink, 1 = flashes amber mid-flight
  fade: boolean; // surplus pixel that fades out instead of landing
};

const INK = [15, 23, 32];
const AMBER = [242, 178, 58];

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function rasterise(word: string, font: string, cell: number, width: number, height: number, baseline: number, xOffset = 0) {
  const c = document.createElement('canvas');
  c.width = width;
  c.height = height;
  const g = c.getContext('2d')!;
  g.font = font;
  g.textBaseline = 'alphabetic';
  g.fillStyle = '#000';
  g.fillText(word, xOffset, baseline);
  const data = g.getImageData(0, 0, width, height).data;
  const cells: Array<[number, number]> = [];
  for (let y = 0; y < height; y += cell) {
    for (let x = 0; x < width; x += cell) {
      // sample the cell centre
      const sx = Math.min(width - 1, x + (cell >> 1));
      const sy = Math.min(height - 1, y + (cell >> 1));
      if (data[(sy * width + sx) * 4 + 3] > 110) cells.push([x, y]);
    }
  }
  return cells;
}

export function HeroMorph({ from = 'Code', to = 'Ship' }: { from?: string; to?: string }) {
  const hostRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const runningRef = useRef(false);

  const run = useCallback(async () => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas || runningRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const f = host.querySelector<HTMLElement>('.morph-final');
      if (f) f.style.opacity = '1';
      host.style.setProperty('--start-op', '0');
      return;
    }
    runningRef.current = true;

    await document.fonts.ready;
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    const cs = getComputedStyle(host);
    let size = parseFloat(cs.fontSize);
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    // Metrics from the final word, which defines the layout. If the canvas
    // measurement disagrees with the rendered width (fonts or viewport still
    // settling), scale to the DOM and trust it.
    const probe = document.createElement('canvas').getContext('2d')!;
    probe.font = `${cs.fontWeight} ${size}px ${cs.fontFamily}`;
    const domWidth = host.querySelector('.morph-final')?.getBoundingClientRect().width || 0;
    const measured = probe.measureText(to).width;
    if (domWidth > 0 && measured > 0 && Math.abs(domWidth - measured) / domWidth > 0.08) {
      size = size * (domWidth / measured);
      probe.font = `${cs.fontWeight} ${size}px ${cs.fontFamily}`;
    }
    const font = probe.font;
    const mFrom = probe.measureText(from);
    const mTo = probe.measureText(to);
    const ascent = Math.ceil(Math.max(mFrom.actualBoundingBoxAscent, mTo.actualBoundingBoxAscent)) + 4;
    const descent = Math.ceil(Math.max(mFrom.actualBoundingBoxDescent, mTo.actualBoundingBoxDescent)) + 4;
    const w = Math.ceil(Math.max(mFrom.width, mTo.width)) + 8;
    const h = ascent + descent;
    const cell = Math.max(3, Math.round(size / 15));

    // Place the canvas so its baseline matches the span's. IBM Plex Sans has an
    // ascender of 1.025em and a descender of .275em; with the headline's
    // line-height that puts the baseline at half-leading + ascender from the
    // top of the inline box.
    const lineHeight = parseFloat(cs.lineHeight) || size * 0.93;
    const baselineY = (lineHeight - 1.3 * size) / 2 + 1.025 * size;
    // Right-align the two words so the final word lands exactly on the DOM text
    // and the wider original spills into the left margin, not into the next word.
    const shift = Math.max(0, Math.ceil(mFrom.width - mTo.width));
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    canvas.style.left = `${-shift}px`;
    canvas.style.top = `${Math.round(baselineY - ascent)}px`;
    const ctx = canvas.getContext('2d')!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const A = rasterise(from, font, cell, w, h, ascent);
    const B = rasterise(to, font, cell, w, h, ascent, shift);
    const byPos = (a: [number, number], b: [number, number]) => a[0] - b[0] || a[1] - b[1];
    A.sort(byPos);
    B.sort(byPos);
    const n = Math.max(A.length, B.length);
    const particles: Particle[] = [];
    for (let i = 0; i < n; i++) {
      const a = A[Math.min(A.length - 1, Math.floor((i / n) * A.length))];
      const b = B[Math.min(B.length - 1, Math.floor((i / n) * B.length))];
      const fade = i >= B.length && B.length < A.length && Math.random() < 0.5;
      particles.push({
        x0: a[0],
        y0: a[1],
        x1: fade ? a[0] + (Math.random() - 0.5) * 60 : b[0],
        y1: fade ? a[1] - 30 - Math.random() * 40 : b[1],
        delay: (a[0] / w) * 0.35 + Math.random() * 0.12,
        heat: Math.random() < 0.28 ? 1 : 0,
        fade,
      });
    }

    // timeline (ms)
    const T_PIX = 620; // the DOM word gives way to its pixel version
    const T_FLY = 1750; // pixels arrive
    const T_HOLD = 1950; // hold pixelated final word
    const T_END = 2280; // cross-fade to crisp type

    const finalEl = host.querySelector<HTMLElement>('.morph-final');
    // The DOM shows the original word itself until the pixelation moment, so
    // there is no hand-off to see. Everything below is set in the same frame
    // as the canvas draw; nothing waits on a React render.
    host.style.setProperty('--start-op', '1');
    if (finalEl) finalEl.style.opacity = '0';
    canvas.style.opacity = '1';
    ctx.clearRect(0, 0, w, h);
    const start = performance.now();
    let aborted = false;
    const onResize = () => {
      aborted = true;
    };
    window.addEventListener('resize', onResize, { once: true });

    const frame = (now: number) => {
      const t = now - start;
      if (aborted) {
        ctx.clearRect(0, 0, w, h);
        canvas.style.opacity = '0';
        host.style.setProperty('--start-op', '0');
        if (finalEl) finalEl.style.opacity = '1';
        runningRef.current = false;
        return;
      }
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = `rgb(${INK.join(',')})`;
      if (t < T_PIX) {
        // the DOM word is on screen; the canvas stays empty
      } else if (t < T_HOLD) {
        if (host.style.getPropertyValue('--start-op') !== '0') host.style.setProperty('--start-op', '0');
        if (t < T_PIX + 240) {
          for (const p of particles) ctx.fillRect(p.x0, p.y0, cell - 0.5, cell - 0.5);
        } else {
          const span = T_FLY - T_PIX - 240;
          for (const p of particles) {
            const local = Math.min(1, Math.max(0, (t - T_PIX - 240 - p.delay * span) / (span * 0.65)));
            const e = easeInOut(local);
            const x = p.x0 + (p.x1 - p.x0) * e;
            const arc = Math.sin(Math.PI * e) * (8 + p.heat * 10);
            const y = p.y0 + (p.y1 - p.y0) * e - arc;
            const glow = p.heat * Math.sin(Math.PI * e);
            const col = INK.map((v, i) => Math.round(v + (AMBER[i] - v) * glow));
            const alpha = p.fade ? 1 - e : 1;
            ctx.fillStyle = `rgba(${col.join(',')},${alpha})`;
            ctx.fillRect(x, y, cell - 0.5, cell - 0.5);
          }
        }
      } else if (t < T_END) {
        // cross-fade pixels out and crisp type in, eased, both set this frame
        host.style.setProperty('--start-op', '0'); // in case a slow frame skipped the flight
        const k = easeInOut((t - T_HOLD) / (T_END - T_HOLD));
        canvas.style.opacity = String(1 - k);
        if (finalEl) finalEl.style.opacity = String(k);
        for (const p of particles) {
          if (p.fade) continue;
          ctx.fillRect(p.x1, p.y1, cell - 0.5, cell - 0.5);
        }
      } else {
        ctx.clearRect(0, 0, w, h);
        canvas.style.opacity = '0';
        host.style.setProperty('--start-op', '0');
        if (finalEl) finalEl.style.opacity = '1';
        runningRef.current = false;
        window.removeEventListener('resize', onResize);
        return;
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [from, to]);

  useEffect(() => {
    const id = window.setTimeout(run, 250);
    return () => window.clearTimeout(id);
  }, [run]);

  return (
    <span ref={hostRef} className="morph" data-from={from} onClick={run} title="Replay">
      <span className="morph-final">{to}</span>
      <canvas ref={canvasRef} className="morph-canvas" aria-hidden="true" />
      <noscript>
        <style>{`.morph::before{display:none}.morph-final{opacity:1}`}</style>
      </noscript>
    </span>
  );
}
