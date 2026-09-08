'use client';

import { useState } from 'react';
import type { SyntheticEvent } from 'react';

export function DemoBriefForm() {
  const [status, setStatus] = useState('');
  function submitBrief(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      'Demo booking is not open yet. Your details have not been sent or saved.',
    );
  }
  return (
    <form className="demo-form" action="#" onSubmit={submitBrief}>
      <p className="booking-notice">
        <strong>Demo booking opens soon.</strong> This preview form does not
        send or save your details.
      </p>
      <div className="form-grid">
        <label>
          Name
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          Work email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
        <label>
          Company
          <input
            name="company"
            autoComplete="organization"
            required
            maxLength={180}
          />
        </label>
        <label>
          Area of interest <span className="optional">Optional</span>
          <select name="workflow" defaultValue="">
            <option value="">Not sure yet</option>
            <option>Spec</option>
            <option>Code</option>
            <option>Review</option>
            <option>On-call</option>
            <option>Connected lifecycle</option>
          </select>
        </label>
      </div>
      <label>
        What would you like to explore?{' '}
        <span className="optional">Optional</span>
        <textarea
          name="context"
          rows={3}
          maxLength={2500}
          placeholder="For example, review bottlenecks or investigating production issues."
        />
      </label>
      <button
        className="button button-accent"
        type="button"
        onClick={(event) => {
          if (event.currentTarget.form?.reportValidity())
            setStatus(
              'Demo booking is not open yet. Your details have not been sent or saved.',
            );
        }}
      >
        Request a demo <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        Please leave out confidential code, customer information, or
        credentials.{' '}
        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/privacy`}>
          Privacy information
        </a>
      </p>
      <output className="form-status" aria-live="polite">
        {status}
      </output>
    </form>
  );
}
