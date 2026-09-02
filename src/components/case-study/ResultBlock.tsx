interface ResultBlockProps {
  label: string;
  value: string;
  detail?: string;
  verified?: boolean;
  flag?: 'caveat' | 'invalid';
}

const flagStyles: Record<'caveat' | 'invalid', { badge: string; border: string; valueClass: string }> = {
  caveat: {
    badge: 'text-status-wip',
    border: 'border-status-wip/30',
    valueClass: 'text-text-primary',
  },
  invalid: {
    badge: 'text-red-500 dark:text-red-400',
    border: 'border-red-500/30',
    valueClass: 'text-text-tertiary line-through decoration-2',
  },
};

export function ResultBlock({ label, value, detail, verified = false, flag }: ResultBlockProps) {
  const flagStyle = flag ? flagStyles[flag] : null;
  return (
    <div
      className={`p-5 rounded-lg border bg-surface not-prose ${
        flagStyle ? flagStyle.border : 'border-border'
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider">{label}</p>
        {verified && !flag && (
          <span className="text-[10px] font-mono text-status-complete shrink-0">verified</span>
        )}
        {flag && (
          <span className={`text-[10px] font-mono shrink-0 ${flagStyle!.badge}`}>
            {flag === 'invalid' ? 'discarded — bug' : 'needs caveat'}
          </span>
        )}
      </div>
      <p className={`font-display font-semibold text-xl mb-1 ${flagStyle?.valueClass ?? 'text-text-primary'}`}>
        {value}
      </p>
      {detail && <p className="text-sm text-text-secondary leading-relaxed">{detail}</p>}
    </div>
  );
}

export function ResultsGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 not-prose">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{children}</div>
    </div>
  );
}
