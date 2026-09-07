'use client';

import { useState } from 'react';
import type { SyntheticEvent } from 'react';

export function DemoBriefForm() {
  const [status, setStatus] = useState('');

  function submitBrief(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (name: string) => {
      const entry = form.get(name);
      return typeof entry === 'string' ? entry : '';
    };
    const subject = `TBSP evaluation — ${value('company') || 'new request'}`;
    const body = [
      `Name: ${value('name')}`,
      `Work email: ${value('email')}`,
      `Company: ${value('company')}`,
      `Workflow: ${value('workflow')}`,
      '',
      `What we should evaluate:`,
      value('context'),
    ].join('\n');

    setStatus('Opening a pre-addressed email with your evaluation brief.');
    window.location.href = `mailto:hello@tbsp.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="demo-form" onSubmit={submitBrief}>
      <div className="form-grid">
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" required />
        </label>
        <label>
          First workflow
          <select name="workflow" defaultValue="Code">
            <option>Spec</option>
            <option>Code</option>
            <option>Review</option>
            <option>On-call</option>
            <option>Connected lifecycle</option>
          </select>
        </label>
      </div>
      <label>
        What real work should we evaluate?
        <textarea
          name="context"
          rows={5}
          placeholder="One application, repository, incident pattern, or delivery workflow."
          required
        />
      </label>
      <button className="button button-accent" type="submit">
        Prepare evaluation request <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        This site does not store your answers. Submitting opens your email client so you
        can review and send the brief.
      </p>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  );
}
