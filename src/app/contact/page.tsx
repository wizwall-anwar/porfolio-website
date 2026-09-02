import type { Metadata } from 'next';
import { SectionContainer } from '@/components/layout/SectionContainer';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Anwar Ayoon.',
};

export default function ContactPage() {
  return (
    <SectionContainer className="py-16 sm:py-24" narrow>
      <p className="text-eyebrow mb-3">Contact</p>
      <h1 className="text-display text-3xl sm:text-4xl font-bold mb-4">
        Let&apos;s talk
      </h1>
      <p className="text-text-secondary mb-12 max-w-md">
        Whether you&apos;re hiring, collaborating, or have a question about my work — 
        I&apos;m happy to hear from you.
      </p>

      <div className="space-y-6">
        {/* Direct links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="mailto:anwar.r.752@gmail.com"
            className="flex items-center gap-3 p-5 rounded-lg border border-border hover:border-accent/40 transition-colors hover:bg-surface-raised"
          >
            <span className="font-mono text-accent text-lg">@</span>
            <div>
              <p className="font-medium text-sm">Email</p>
              <p className="text-xs text-text-tertiary">anwar.r.752@gmail.com</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/anwar-ayoon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-lg border border-border hover:border-accent/40 transition-colors hover:bg-surface-raised"
          >
            <span className="font-mono text-accent text-lg">in</span>
            <div>
              <p className="font-medium text-sm">LinkedIn</p>
              <p className="text-xs text-text-tertiary">Connect professionally</p>
            </div>
          </a>
          <a
            href="https://github.com/wizwall-anwar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-lg border border-border hover:border-accent/40 transition-colors hover:bg-surface-raised"
          >
            <span className="font-mono text-accent text-lg">gh</span>
            <div>
              <p className="font-medium text-sm">GitHub</p>
              <p className="text-xs text-text-tertiary">See my code</p>
            </div>
          </a>
        </div>

        {/* Feedback form placeholder */}
        <div className="mt-8 border border-border border-dashed rounded-lg p-8 text-center">
          <p className="text-text-tertiary font-mono text-sm mb-2">
            Contact form will be integrated with Supabase in Phase 7
          </p>
          <p className="text-text-tertiary text-xs">
            For now, use the direct links above.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
