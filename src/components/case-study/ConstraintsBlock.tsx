interface Constraint {
  label: string;
  detail: string;
}

export function ConstraintsBlock({ constraints }: { constraints: Constraint[] }) {
  return (
    <div className="my-10 not-prose">
      <p className="text-eyebrow mb-4">Constraints</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {constraints.map((c) => (
          <div
            key={c.label}
            className="p-4 rounded-lg border border-border bg-surface"
          >
            <p className="font-mono text-xs text-accent-text mb-1">{c.label}</p>
            <p className="text-sm text-text-secondary leading-relaxed">{c.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
