export function LessonBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 flex gap-4 items-start not-prose">
      <span className="shrink-0 w-8 h-8 rounded-full bg-status-complete-bg text-status-complete flex items-center justify-center font-mono text-sm mt-0.5">
        ✓
      </span>
      <div>
        <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-1.5">
          Lesson
        </p>
        <p className="text-text-primary leading-relaxed font-medium">{children}</p>
      </div>
    </div>
  );
}
