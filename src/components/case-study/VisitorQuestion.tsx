'use client';

import { useState } from 'react';

export function VisitorQuestion({ projectTitle }: { projectTitle: string }) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    // Phase 7: wire to Supabase. For now, this is a structural placeholder —
    // no submission is actually sent or stored.
    setSubmitted(true);
  };

  return (
    <div className="my-12 pt-10 border-t border-border not-prose">
      <p className="text-eyebrow mb-3">Your Turn</p>
      <h2 className="font-display font-semibold text-xl sm:text-2xl mb-3">
        What would you change?
      </h2>
      <p className="text-text-secondary text-sm mb-6 max-w-lg">
        Challenge an assumption, propose a different approach, or point out
        something I missed in the {projectTitle} approach. I read these myself.
      </p>

      {submitted ? (
        <div className="p-5 rounded-lg border border-status-complete/30 bg-status-complete-bg/20">
          <p className="text-sm text-text-primary">
            Thanks — noted. (This is a structural placeholder: responses aren&apos;t yet
            stored anywhere. That&apos;s coming in a later phase.)
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg">
          <label htmlFor="visitor-question" className="sr-only">
            What would you change?
          </label>
          <textarea
            id="visitor-question"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={4}
            placeholder="I'd have tried..."
            className="w-full p-4 text-sm rounded-md border border-border bg-surface text-text-primary
                       placeholder:text-text-tertiary resize-none
                       focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="mt-3 inline-flex items-center gap-2 px-5 py-2.5
                       bg-accent text-white font-medium text-sm rounded-md
                       hover:bg-accent-hover transition-colors"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
