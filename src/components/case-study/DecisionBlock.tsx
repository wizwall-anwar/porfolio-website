interface DecisionBlockProps {
  decision: string;
  alternatives?: string[];
  tradeoff: string;
}

export function DecisionBlock({ decision, alternatives, tradeoff }: DecisionBlockProps) {
  return (
    <div className="my-8 rounded-lg border border-border overflow-hidden not-prose">
      <div className="p-5 bg-accent-subtle/30 border-b border-border">
        <p className="text-xs font-mono text-accent-text uppercase tracking-wider mb-1">
          Decision
        </p>
        <p className="font-medium text-text-primary">{decision}</p>
      </div>
      {alternatives && alternatives.length > 0 && (
        <div className="p-5 border-b border-border-subtle">
          <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-2">
            Alternatives considered
          </p>
          <ul className="space-y-1">
            {alternatives.map((alt) => (
              <li key={alt} className="text-sm text-text-secondary flex gap-2">
                <span className="text-text-tertiary" aria-hidden="true">–</span>
                {alt}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="p-5">
        <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-1">
          Tradeoff accepted
        </p>
        <p className="text-sm text-text-secondary leading-relaxed">{tradeoff}</p>
      </div>
    </div>
  );
}
