'use client';

import { useState } from 'react';
import { SectionContainer } from '../layout/SectionContainer';

const steps = [
  {
    id: 'notice',
    label: 'Notice friction',
    example: {
      project: 'Form Correction',
      text: "People training alone get no feedback on their form. Trainers are expensive and not always available. The friction isn't the exercise — it's the absence of accessible correction.",
    },
  },
  {
    id: 'question',
    label: 'Question the framing',
    example: {
      project: 'Financial Well-Being',
      text: 'The standard question was "Where did the money go?" But people already knew where it went. The better question: "What behavioral patterns drive my financial decisions?"',
    },
  },
  {
    id: 'understand',
    label: 'Understand the system',
    example: {
      project: 'Fast-SCNN',
      text: "Before choosing an architecture, I studied why existing segmentation models were heavy. Much of their complexity served accuracy gains that real-time applications couldn't use.",
    },
  },
  {
    id: 'build',
    label: 'Build the workable version',
    example: {
      project: 'Form Correction',
      text: 'The first version only detected two exercises and gave binary feedback (correct/incorrect). Intentionally limited — the goal was testing whether the detection pipeline worked before investing in nuance.',
    },
  },
  {
    id: 'observe',
    label: 'Observe reality',
    example: {
      project: 'Fast-SCNN',
      text: 'The model performed well on clean road images but struggled at transitions between road types. Reality exposed assumptions the training data had hidden.',
    },
  },
  {
    id: 'refactor',
    label: 'Refactor the solution',
    example: {
      project: 'Financial Well-Being',
      text: "Initial visualizations showed accurate data but didn't help users act. Refactored to highlight behavioral anomalies rather than just spending categories.",
    },
  },
];

export function ProblemSolvingLoop() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <SectionContainer className="py-16 sm:py-20">
      <div className="border-t border-border pt-12 sm:pt-16">
        <p className="text-eyebrow mb-3">How I Work</p>
        <h2 className="text-display text-2xl sm:text-3xl font-bold mb-4">
          The loop
        </h2>
        <p className="text-text-secondary text-sm mb-10 max-w-lg">
          Not a linear process. Each step feeds back into the others. 
          Select a step to see a real example from my work.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
          {/* Steps */}
          <div className="space-y-1">
            {steps.map((step, i) => {
              const isActive = activeStep === i;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  onFocus={() => setActiveStep(i)}
                  className={`w-full text-left flex items-center gap-4 px-4 py-3.5 rounded-md transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-subtle/40 border border-accent/20'
                      : 'hover:bg-surface-raised border border-transparent'
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs border transition-colors ${
                      isActive
                        ? 'border-accent text-accent bg-accent-subtle/60'
                        : 'border-border text-text-tertiary'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`font-medium text-sm transition-colors ${
                      isActive ? 'text-text-primary' : 'text-text-secondary'
                    }`}
                  >
                    {step.label}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden" aria-hidden="true" />
                  )}
                </button>
              );
            })}
            {/* Loop indicator */}
            <div className="flex items-center gap-4 px-4 py-2 text-text-tertiary">
              <span className="w-8 flex justify-center font-mono text-sm">↺</span>
              <span className="text-xs font-mono">Repeat with new understanding</span>
            </div>
          </div>

          {/* Example panel */}
          <div className="bg-surface border border-border rounded-lg p-6 sm:p-8 min-h-[200px]">
            <p className="text-xs font-mono text-accent-text uppercase tracking-wider mb-1">
              {steps[activeStep].example.project}
            </p>
            <p className="text-xs font-mono text-text-tertiary mb-4">
              {steps[activeStep].label}
            </p>
            <p className="text-text-primary leading-relaxed">
              {steps[activeStep].example.text}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
