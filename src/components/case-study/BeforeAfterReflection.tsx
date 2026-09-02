interface BeforeAfterReflectionProps {
  before?: React.ReactNode;
  during?: React.ReactNode;
  after?: React.ReactNode;
  pending?: boolean;
}

export function BeforeAfterReflection({
  before,
  during,
  after,
  pending = false,
}: BeforeAfterReflectionProps) {
  if (pending) {
    return (
      <div className="my-10 border border-dashed border-border rounded-lg p-8 text-center not-prose">
        <p className="text-eyebrow mb-2">How My Understanding Changed</p>
        <p className="text-text-tertiary text-sm">
          Pending — this is one of the most important sections of the case study and needs
          my actual reflection, not a placeholder.
        </p>
      </div>
    );
  }

  const cols = during ? 'sm:grid-cols-3' : 'sm:grid-cols-2';

  return (
    <div className="my-10 not-prose">
      <p className="text-eyebrow mb-4">How My Understanding Changed</p>
      <div className={`grid grid-cols-1 ${cols} gap-3`}>
        <div className="p-5 rounded-lg border border-border bg-surface">
          <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-2">
            I thought
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">{before}</p>
        </div>
        {during && (
          <div className="p-5 rounded-lg border border-border bg-surface">
            <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-2">
              Reality showed
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">{during}</p>
          </div>
        )}
        <div className="p-5 rounded-lg border border-accent/30 bg-accent-subtle/30">
          <p className="text-xs font-mono text-accent-text uppercase tracking-wider mb-2">
            I now believe
          </p>
          <p className="text-sm text-text-primary leading-relaxed font-medium">{after}</p>
        </div>
      </div>
    </div>
  );
}
