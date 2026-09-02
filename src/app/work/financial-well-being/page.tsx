import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Tag } from '@/components/shared/Tag';
import { Callout } from '@/components/shared/Callout';
import { ResultsGrid, ResultBlock } from '@/components/case-study/ResultBlock';
import { CaseStudyInProgress } from '@/components/case-study/CaseStudyInProgress';

export const metadata: Metadata = {
  title: 'Financial Well-Being Analytics',
  description:
    'Can financial data help someone understand their behavior instead of merely showing where their money went? A case study using CFPB survey data, in progress.',
};

export default function FinancialWellBeingCaseStudy() {
  return (
    <SectionContainer className="py-16 sm:py-24" narrow>
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/work" className="text-text-tertiary hover:text-text-secondary transition-colors">
          Work
        </Link>
        <span className="text-text-tertiary mx-2">/</span>
        <span className="text-text-secondary">Financial Well-Being Analytics</span>
      </nav>

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <StatusBadge status="complete" />
          <span className="text-xs font-mono text-text-tertiary">Aug – Sept 2025</span>
        </div>
        <h1 className="text-display text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          Can financial data help someone understand their behavior instead of
          merely showing where their money went?
        </h1>
        <div className="flex flex-wrap gap-2">
          <Tag>Data Analytics</Tag>
          <Tag>Python</Tag>
          <Tag>XGBoost</Tag>
          <Tag>CFPB Survey</Tag>
        </div>
      </div>

      <Callout type="info" title="Where this page stands">
        The underlying project is done — the numbers below are real, from Anwar&apos;s resume.
        The full case study (the reasoning, the code, the architecture) is still being written,
        and will include code snippets throughout rather than a wall of text with a code dump
        at the end.
      </Callout>

      <ResultsGrid>
        <ResultBlock
          label="Sample size"
          value="6,300+ responses"
          detail="CFPB financial well-being survey data, cleaned and feature-engineered."
          verified
        />
        <ResultBlock
          label="Model improvement"
          value="R² 0.14 → 0.59"
          detail="Progressively incorporating economic and behavioral factors into survey-weighted regression models."
          verified
        />
        <ResultBlock
          label="Feature selection"
          value="~60 predictors"
          detail="LASSO regression reduced a high-dimensional feature set, balancing interpretability and performance."
          verified
        />
        <ResultBlock
          label="Final model"
          value="0.64 test R² (XGBoost)"
          detail="Tuned XGBoost with interaction features; feature importance validated with SHAP."
          verified
        />
      </ResultsGrid>

      <CaseStudyInProgress />
    </SectionContainer>
  );
}
