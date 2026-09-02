type Status = 'complete' | 'in-progress' | 'archived';

const config: Record<Status, { label: string; className: string }> = {
  complete: {
    label: 'Complete',
    className: 'bg-status-complete-bg text-status-complete',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-status-wip-bg text-status-wip',
  },
  archived: {
    label: 'Archived',
    className: 'bg-surface-raised text-text-tertiary',
  },
};

export function StatusBadge({ status }: { status: Status }) {
  const { label, className } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium font-mono rounded-full ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === 'in-progress' ? 'bg-status-wip animate-pulse' :
          status === 'complete' ? 'bg-status-complete' : 'bg-text-tertiary'
        }`}
      />
      {label}
    </span>
  );
}
