type CalloutType = 'info' | 'warning' | 'question' | 'lesson';

const styles: Record<CalloutType, string> = {
  info: 'border-accent bg-accent-subtle/30',
  warning: 'border-status-wip bg-status-wip-bg/30',
  question: 'border-text-tertiary bg-surface-raised',
  lesson: 'border-status-complete bg-status-complete-bg/30',
};

const icons: Record<CalloutType, string> = {
  info: '→',
  warning: '⚠',
  question: '?',
  lesson: '✓',
};

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <aside
      className={`border-l-3 pl-5 py-4 pr-4 my-6 rounded-r-md ${styles[type]}`}
      role="note"
    >
      {title && (
        <p className="font-display font-semibold text-sm mb-1 flex items-center gap-2">
          <span className="font-mono text-text-tertiary">{icons[type]}</span>
          {title}
        </p>
      )}
      <div className="text-sm text-text-secondary leading-relaxed">{children}</div>
    </aside>
  );
}
