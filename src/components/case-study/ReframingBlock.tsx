interface ReframingBlockProps {
  before: React.ReactNode;
  after: React.ReactNode;
}

export function ReframingBlock({ before, after }: ReframingBlockProps) {
  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 items-center not-prose">
      <div className="p-5 rounded-lg border border-border bg-surface-raised">
        <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-2">
          Initial Question
        </p>
        <p className="text-text-secondary leading-relaxed">{before}</p>
      </div>
      <div className="flex justify-center text-text-tertiary font-mono text-lg" aria-hidden="true">
        →
      </div>
      <div className="p-5 rounded-lg border border-accent/30 bg-accent-subtle/30">
        <p className="text-xs font-mono text-accent-text uppercase tracking-wider mb-2">
          Better Question
        </p>
        <p className="text-text-primary leading-relaxed font-medium">{after}</p>
      </div>
    </div>
  );
}
