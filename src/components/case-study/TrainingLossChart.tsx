'use client';

interface LossPoint {
  epoch: number;
  loss: number;
}

// Real values from the completed 5-epoch training run on 2,975 Cityscapes
// training images (reported by Anwar, not measured by re-running the code).
export const fastSCNNLossHistory: LossPoint[] = [
  { epoch: 1, loss: 0.8076 },
  { epoch: 2, loss: 0.5865 },
  { epoch: 3, loss: 0.5254 },
  { epoch: 4, loss: 0.4875 },
  { epoch: 5, loss: 0.4603 },
];

export function TrainingLossChart() {
  const max = Math.max(...fastSCNNLossHistory.map((p) => p.loss));
  const min = Math.min(...fastSCNNLossHistory.map((p) => p.loss));
  const first = fastSCNNLossHistory[0].loss;
  const last = fastSCNNLossHistory[fastSCNNLossHistory.length - 1].loss;
  const pctDrop = ((first - last) / first) * 100;

  return (
    <div className="my-8 rounded-lg border border-border bg-surface p-5 sm:p-6 not-prose">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
        <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider">
          Average training loss per epoch
        </p>
        <span className="text-xs font-mono text-status-complete">
          −{pctDrop.toFixed(0)}% over 5 epochs
        </span>
      </div>

      <div className="flex items-end gap-3 sm:gap-6" style={{ height: 120 }}>
        {fastSCNNLossHistory.map((point) => {
          const heightPct = 20 + ((point.loss - min) / (max - min || 1)) * 80;
          return (
            <div key={point.epoch} className="flex flex-col items-center flex-1">
              <span className="text-xs font-mono text-text-primary mb-1.5">
                {point.loss.toFixed(4)}
              </span>
              <div className="w-full flex items-end" style={{ height: 90 }}>
                <div
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${heightPct}%`,
                    background: 'color-mix(in srgb, var(--accent) 70%, var(--surface-raised))',
                  }}
                />
              </div>
              <span className="text-[11px] font-mono text-text-tertiary mt-2">
                epoch {point.epoch}
              </span>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-text-tertiary mt-5 pt-4 border-t border-border-subtle">
        Training loss only — this run did not include a validation split, so this chart
        can&apos;t tell you whether the model generalizes, only that it fit the training
        data more closely over time.
      </p>
    </div>
  );
}
