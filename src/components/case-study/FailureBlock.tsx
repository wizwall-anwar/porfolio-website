interface FailureBlockProps {
  title: string;
  children: React.ReactNode;
}

export function FailureBlock({ title, children }: FailureBlockProps) {
  return (
    <div className="my-8 rounded-lg border border-status-wip/30 bg-status-wip-bg/20 p-5 sm:p-6 not-prose">
      <p className="text-xs font-mono text-status-wip uppercase tracking-wider mb-2 flex items-center gap-2">
        <span aria-hidden="true">⚠</span>
        {title}
      </p>
      <div className="text-sm text-text-secondary leading-relaxed">{children}</div>
    </div>
  );
}
