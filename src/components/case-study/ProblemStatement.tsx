interface ProblemStatementProps {
  children: React.ReactNode;
}

export function ProblemStatement({ children }: ProblemStatementProps) {
  return (
    <div className="my-10 not-prose">
      <p className="text-eyebrow mb-3">The Friction</p>
      <p className="text-xl sm:text-2xl font-display font-semibold leading-snug text-text-primary">
        {children}
      </p>
    </div>
  );
}
