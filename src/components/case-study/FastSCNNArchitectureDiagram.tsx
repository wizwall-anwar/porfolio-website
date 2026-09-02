'use client';

import { useState, useMemo } from 'react';
import {
  archStages,
  TOTAL_PARAMS,
  FROZEN_PARAMS,
} from './fast-scnn-architecture-data';

// Visual scale for the "funnel" bars: spatial resolution -> bar height.
// sqrt scale keeps the 512 -> 16 -> 512 range visually legible without
// making the bottleneck stages disappear entirely.
function barHeight(h: number): number {
  const min = 16;
  const max = 512;
  const t = (Math.sqrt(h) - Math.sqrt(min)) / (Math.sqrt(max) - Math.sqrt(min));
  return 28 + t * 88; // px, range 28–116
}

function channelOpacity(ch: number): number {
  return 0.25 + Math.min(ch / 256, 1) * 0.65;
}

function fmtParams(p: number): string {
  if (p === 0) return '—';
  if (p >= 1000) return `${(p / 1000).toFixed(p % 1000 === 0 ? 0 : 1)}K`;
  return `${p}`;
}

export function FastSCNNArchitectureDiagram() {
  const [view, setView] = useState<'simplified' | 'technical'>('simplified');
  const [activeId, setActiveId] = useState<string>('gf-ppm');

  const visibleStages = useMemo(() => {
    if (view === 'technical') return archStages;
    // Simplified view: collapse each group to one representative stage
    // (its last/bottleneck layer), keeping input and output visible.
    const seen = new Set<string>();
    return archStages.filter((s) => {
      if (s.id === 'input' || s.id === 'output' || s.id === 'gf-ppm') return true;
      if (seen.has(s.group)) return false;
      seen.add(s.group);
      return true;
    });
  }, [view]);

  const active = archStages.find((s) => s.id === activeId) ?? archStages[0];

  return (
    <div className="my-10 not-prose">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <p className="text-eyebrow mb-1">Architecture — traced from the actual code</p>
          <p className="text-xs text-text-tertiary">
            Bar height ≈ spatial resolution · fill intensity ≈ channel depth · tap or focus a stage for detail
          </p>
        </div>
        <div className="inline-flex rounded-md border border-border p-0.5" role="tablist" aria-label="Diagram detail level">
          {(['simplified', 'technical'] as const).map((v) => (
            <button
              key={v}
              role="tab"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className={`px-3 py-1.5 text-xs font-mono rounded transition-colors capitalize ${
                view === v
                  ? 'bg-accent text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Diagram track */}
      <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
        <div className="overflow-x-auto pb-2">
          <div className="flex items-end gap-1.5 sm:gap-2 min-w-max px-1" style={{ minHeight: 140 }}>
            {visibleStages.map((stage) => {
              const isActive = stage.id === activeId;
              const isFrozen = !!stage.frozen;
              return (
                <div key={stage.id} className="flex flex-col items-center">
                  <div className="flex items-end" style={{ height: 116 }}>
                    <button
                      onClick={() => setActiveId(stage.id)}
                      onFocus={() => setActiveId(stage.id)}
                      aria-pressed={isActive}
                      aria-label={`${stage.groupLabel}: ${stage.label}, ${stage.inChannels} to ${stage.outChannels} channels, ${stage.height} by ${stage.width}`}
                      className={`w-9 sm:w-11 rounded-t-sm rounded-b-[2px] transition-all duration-200 border ${
                        isFrozen
                          ? 'border-dashed border-status-wip'
                          : isActive
                          ? 'border-accent'
                          : 'border-transparent hover:border-accent/40'
                      } ${isActive ? 'ring-2 ring-accent/30' : ''}`}
                      style={{
                        height: barHeight(stage.height),
                        background: isFrozen
                          ? `repeating-linear-gradient(135deg, var(--status-wip-bg), var(--status-wip-bg) 4px, transparent 4px, transparent 8px)`
                          : `color-mix(in srgb, var(--accent) ${Math.round(
                              channelOpacity(stage.outChannels) * 100
                            )}%, var(--surface-raised))`,
                      }}
                    />
                  </div>
                  <span
                    className={`mt-2 text-[10px] font-mono text-center leading-tight max-w-[64px] sm:max-w-[76px] ${
                      isActive ? 'text-accent-text' : 'text-text-tertiary'
                    }`}
                  >
                    {stage.label}
                  </span>
                  {isFrozen && (
                    <span className="text-[9px] font-mono text-status-wip mt-0.5">frozen</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-border-subtle">
          <span className="text-[11px] text-text-tertiary flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm inline-block" style={{ background: 'color-mix(in srgb, var(--accent) 80%, var(--surface-raised))' }} />
            higher channel depth
          </span>
          <span className="text-[11px] text-text-tertiary flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-sm inline-block border border-dashed border-status-wip"
              style={{ background: 'var(--status-wip-bg)' }}
            />
            frozen branch (no gradient)
          </span>
        </div>
      </div>

      {/* Detail panel */}
      <div className="mt-4 rounded-lg border border-border bg-surface-raised p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
          <div>
            <p className="text-xs font-mono text-accent-text uppercase tracking-wider">
              {active.groupLabel}
            </p>
            <p className="font-display font-semibold text-lg text-text-primary">
              {active.label}
            </p>
          </div>
          {active.frozen && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-full bg-status-wip-bg text-status-wip">
              Never trained
            </span>
          )}
        </div>

        <p className="text-sm text-text-secondary mb-4">{active.layerType}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-[11px] font-mono text-text-tertiary uppercase mb-0.5">Channels</p>
            <p className="text-text-primary font-mono">
              {active.inChannels} → {active.outChannels}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-mono text-text-tertiary uppercase mb-0.5">Resolution</p>
            <p className="text-text-primary font-mono">
              {active.height}×{active.width}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-mono text-text-tertiary uppercase mb-0.5">Parameters</p>
            <p className="text-text-primary font-mono">{fmtParams(active.params)}</p>
          </div>
          <div>
            <p className="text-[11px] font-mono text-text-tertiary uppercase mb-0.5">Share of model</p>
            <p className="text-text-primary font-mono">
              {active.params > 0 ? `${((active.params / TOTAL_PARAMS) * 100).toFixed(1)}%` : '—'}
            </p>
          </div>
        </div>

        {active.note && (
          <div className="mt-4 pt-4 border-t border-border-subtle">
            <p className="text-sm text-text-secondary leading-relaxed">{active.note}</p>
          </div>
        )}
      </div>

      {/* Aggregate facts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div className="p-4 rounded-lg border border-border-subtle bg-surface">
          <p className="text-[11px] font-mono text-text-tertiary uppercase mb-1">Total parameters</p>
          <p className="font-display font-semibold text-text-primary">
            {TOTAL_PARAMS.toLocaleString()} (~{(TOTAL_PARAMS / 1e6).toFixed(2)}M)
          </p>
        </div>
        <div className="p-4 rounded-lg border border-border-subtle bg-surface">
          <p className="text-[11px] font-mono text-text-tertiary uppercase mb-1">Frozen at init</p>
          <p className="font-display font-semibold text-status-wip">
            {FROZEN_PARAMS.toLocaleString()} ({((FROZEN_PARAMS / TOTAL_PARAMS) * 100).toFixed(1)}%)
          </p>
        </div>
        <div className="p-4 rounded-lg border border-border-subtle bg-surface">
          <p className="text-[11px] font-mono text-text-tertiary uppercase mb-1">Max downsampling</p>
          <p className="font-display font-semibold text-text-primary">1/32 resolution</p>
        </div>
      </div>

      <p className="text-xs text-text-tertiary mt-3">
        Parameter counts computed directly from the Conv2d/BatchNorm2d layer definitions in{' '}
        <code>fast_scnn.py</code>, not measured at runtime.
      </p>
    </div>
  );
}
