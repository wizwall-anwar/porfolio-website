interface CaseStudySectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export function CaseStudySection({ number, title, children }: CaseStudySectionProps) {
  return (
    <section className="py-10 sm:py-12 border-t border-border-subtle first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-mono text-sm text-accent-text">{number}</span>
        <h2 className="font-display font-semibold text-xl sm:text-2xl text-text-primary">
          {title}
        </h2>
      </div>
      <div className="prose">{children}</div>
    </section>
  );
}

export function PendingNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose border border-dashed border-border rounded-lg p-6 text-sm text-text-tertiary italic">
      {children}
    </div>
  );
}
