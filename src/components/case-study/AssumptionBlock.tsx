interface AssumptionBlockProps {
  children: React.ReactNode;
  pending?: boolean;
}

export function AssumptionBlock({ children, pending = false }: AssumptionBlockProps) {
  if (pending) {
    return (
      <div className="my-8 border border-dashed border-border rounded-lg p-6 not-prose">
        <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-2">
          My Initial Understanding — pending
        </p>
        <p className="text-sm text-text-tertiary italic">{children}</p>
      </div>
    );
  }

  return (
    <div className="my-8 border-l-3 border-text-tertiary pl-5 py-1 not-prose">
      <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-2">
        What I Believed Going In
      </p>
      <p className="text-text-secondary leading-relaxed">{children}</p>
    </div>
  );
}
