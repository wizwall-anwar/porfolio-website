export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-mono text-text-tertiary bg-surface-raised border border-border-subtle rounded">
      {children}
    </span>
  );
}
