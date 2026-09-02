import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { Tag } from '@/components/shared/Tag';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Anwar Ayoon — data analyst and applied machine learning practitioner. Resume and professional background.',
};

const skillGroups = [
  {
    label: 'Programming & Data',
    skills: ['Python (Pandas, NumPy, Scikit-learn, PyTorch, TensorFlow)', 'SQL', 'R (dplyr, tidyr, Shiny)'],
  },
  {
    label: 'Visualization & BI',
    skills: ['Tableau', 'Power BI', 'Streamlit', 'Excel (Power Query, PivotTables, XLOOKUP)', 'Plotly', 'Seaborn', 'Matplotlib'],
  },
  {
    label: 'Statistics & ML',
    skills: ['Regression', 'Classification', 'Random Forest', 'XGBoost', 'LightGBM', 'LASSO/Ridge', 'Time-Series Forecasting', 'A/B Testing', 'Hypothesis Testing', 'SHAP'],
  },
  {
    label: 'Deep Learning',
    skills: ['CNNs', 'Semantic Segmentation', 'Model Quantization & Pruning', 'Edge Deployment'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'Jupyter', 'AWS (S3, EC2)', 'SQLite/PostgreSQL', 'Microsoft Project'],
  },
];

const experience = [
  {
    role: 'IT Technician | Data & Operations Analytics',
    org: 'TechCyte — Iowa State University Book Store',
    location: 'Ames, Iowa',
    dates: 'Mar 2025 – Present',
    bullets: [
      'Built Excel-based operational dashboards tracking daily repair volume, turnaround time, and customer satisfaction, giving managers a single view of service performance across check-in, repair, and check-out stages.',
      'Analyzed service funnel data to identify workflow bottlenecks, segmenting recurring issue types to prioritize process improvements and reduce resolution delays.',
      'Translated raw service data into concise summaries and recommendations for non-technical managers, supporting faster staffing and workflow decisions.',
      'Maintain documentation for recurring technical issues and support system updates across the service workflow.',
    ],
  },
  {
    role: 'Data Repository Intern',
    org: 'Ministry of Cooperation',
    location: 'Indore, India',
    dates: 'Dec 2022 – May 2023',
    bullets: [
      'Designed SQL workflows to digitize and structure cooperative financial records, improving audit accuracy and cutting query and retrieval time on legacy data.',
      'Built SQL-based migration pipelines to preserve legacy records at risk of loss, converting paper and semi-structured sources into queryable relational databases.',
      'Standardized bilingual data entry and validation rules across archival records, creating searchable digital records and improving data reliability for downstream reporting.',
      'Defined long-term data governance rules covering schema consistency, validation, and access, improving data quality and stakeholder usability across teams.',
    ],
  },
  {
    role: 'Junior Data Scientist',
    org: 'PV Diagnostics — promoted from Data Science Intern (Jan 2022)',
    location: 'Indore, India',
    dates: 'Mar 2022 – Mar 2023',
    bullets: [
      'Built Therma Magic, a thermal-imaging analysis tool that detects overheating faults in PV panels, MCBs, and transformers by computing per-component thermal flare and overlaying it on YOLO-based bounding boxes of the underlying equipment.',
      'Developed an electroluminescence (EL) correlation workflow using IR camera imagery to detect microcracks in PV cells, giving field engineers a repeatable way to catch defects invisible in standard inspections.',
      'Built an IV-Load (IVL) forecasting pipeline that correlated plant IVL data with NASA solar-radiation datasets, then trained an LSTM on combined weather and radiation inputs to forecast future radiation and predict plant yield.',
      'Built predictive models and automated dashboards tracking plant performance, degradation patterns, and operational KPIs, replacing ad hoc reporting for the engineering team and feeding predictions into preventive-maintenance workflows.',
    ],
  },
];

const projects = [
  {
    title: 'Personal Inflation Analytics Dashboard',
    meta: 'BLS Consumer Price Index · June 2026',
    bullets: [
      'Building an interactive analytics dashboard using BLS Consumer Price Index data that lets users calculate personalized inflation rates by weighting their own spending categories against national trends.',
      'Designed an end-to-end Python pipeline (BLS API ingestion → SQLite → Streamlit deployment) processing 10+ years of CPI category data across 200+ item groups.',
      'Implemented interactive Plotly visualizations with category filtering, year-over-year comparison, and side-by-side personal vs. national inflation views, deployed on Streamlit Community Cloud.',
    ],
    href: null,
  },
  {
    title: 'Financial Well-Being Analytics',
    meta: 'CFPB Survey · Aug 2025 – Sept 2025',
    bullets: [
      'Built Python data pipelines to clean, transform, and analyze 6,300+ CFPB survey responses, enabling statistical modeling and feature engineering for financial well-being prediction.',
      'Improved model explanatory power from R² = 0.14 to R² = 0.59 by progressively incorporating economic and behavioral factors into survey-weighted regression models.',
      'Applied LASSO regression to reduce a high-dimensional feature set to ~60 key predictors, balancing interpretability and performance.',
      'Trained a tuned XGBoost regression model with interaction features, achieving 0.64 test R² and validating feature importance using SHAP values.',
    ],
    href: '/work/financial-well-being',
  },
  {
    title: 'Fast-SCNN for Real-Time Road Segmentation',
    meta: 'Autonomous Vehicle Edge Deployment · May 2025 – Jul 2025',
    bullets: [
      'Designed and trained a Fast-SCNN semantic segmentation model in PyTorch for autonomous driving, building an end-to-end pipeline including data preprocessing, model training, evaluation, and edge deployment.',
      'Improved training stability and reduced overfitting through data augmentation, batch normalization, and learning-rate scheduling across training epochs.',
      'Applied quantization and structured pruning to compress the model, achieving a 3× reduction in inference latency while maintaining comparable segmentation accuracy.',
      'Deployed the optimized model on an NVIDIA Jetson Nano for real-time inference under embedded compute constraints suitable for autonomous vehicle applications.',
    ],
    href: '/work/fast-scnn-road-segmentation',
    flagged: true,
  },
  {
    title: 'LinkedIn Job Market Analysis',
    meta: 'Medium Blog · April 2025',
    bullets: [
      'Analyzed 124K+ LinkedIn job postings using XGBoost, Random Forest, and LightGBM to identify key salary drivers, finding experience level as the most predictive factor across industries.',
      'Applied SHAP-based model interpretability and industry-level segmentation to quantify the variable impact of experience across tech, healthcare, and finance.',
      'Visualized remote vs. on-site salary disparities using Seaborn and Plotly, finding remote jobs offered up to 30% higher average pay in knowledge industries across all experience levels.',
      'Conducted a deep-dive into benefit transparency (401(k), childcare, student loan support), uncovering strong correlations between explicit salary information and application rates (+50% engagement in some cases).',
    ],
    href: null,
  },
  {
    title: 'OCR + Object Detection Tool',
    meta: 'Open-Source · Jun 2023 – Aug 2023',
    bullets: [
      'Built an OCR and object detection tool in Python using PyTesseract and YOLOv5, achieving 95% accuracy on text and symbol extraction for medical equipment.',
      'Designed a custom labeling system to support operational efficiency and security requirements in a specialized medical-imaging context.',
    ],
    href: null,
  },
];

export default function ResumePage() {
  return (
    <SectionContainer className="py-16 sm:py-24" narrow>
      <p className="text-eyebrow mb-3">Resume</p>
      <h1 className="text-display text-3xl sm:text-4xl font-bold mb-4">
        Anwar Ayoon
      </h1>
      <p className="text-text-secondary mb-6 max-w-lg">
        Data analyst and applied machine learning practitioner — predictive models,
        forecasting systems, and analytics dashboards across solar energy, government,
        and operations data.
      </p>

      <div className="flex flex-wrap gap-4 mb-6 text-sm">
        <a href="mailto:anwar.r.752@gmail.com" className="text-accent-text hover:text-accent-hover transition-colors">
          anwar.r.752@gmail.com
        </a>
        <a href="https://linkedin.com/in/anwar-ayoon" target="_blank" rel="noopener noreferrer" className="text-accent-text hover:text-accent-hover transition-colors">
          LinkedIn ↗
        </a>
        <a href="https://github.com/wizwall-anwar" target="_blank" rel="noopener noreferrer" className="text-accent-text hover:text-accent-hover transition-colors">
          GitHub ↗
        </a>
      </div>

      <div className="flex gap-4 mb-12">
        <a
          href="/files/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 
                     bg-accent text-white font-medium text-sm rounded-md
                     hover:bg-accent-hover transition-colors"
        >
          Download PDF
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
        </a>
      </div>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="font-display font-semibold text-xl mb-5">Skills</h2>
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-mono text-text-tertiary uppercase tracking-wider mb-2">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-14">
        <h2 className="font-display font-semibold text-xl mb-5">Experience</h2>
        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.role} className="border-l-2 border-border pl-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <p className="font-medium text-text-primary">{job.role}</p>
                <span className="text-xs font-mono text-text-tertiary shrink-0">{job.dates}</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                {job.org} · {job.location}
              </p>
              <ul className="space-y-1.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                    <span className="text-text-tertiary shrink-0" aria-hidden="true">–</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-14">
        <h2 className="font-display font-semibold text-xl mb-5">Projects</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="border-l-2 border-border pl-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                {project.href ? (
                  <Link href={project.href} className="font-medium text-accent-text hover:text-accent-hover transition-colors">
                    {project.title} →
                  </Link>
                ) : (
                  <p className="font-medium text-text-primary">{project.title}</p>
                )}
                <span className="text-xs font-mono text-text-tertiary shrink-0">{project.meta}</span>
              </div>
              {project.flagged && (
                <p className="text-xs text-status-wip font-mono mb-2">
                  ⚠ some claims here don&apos;t yet match the detailed case study — see note below
                </p>
              )}
              <ul className="space-y-1.5">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                    <span className="text-text-tertiary shrink-0" aria-hidden="true">–</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-lg border border-status-wip/30 bg-status-wip-bg/20 text-sm text-text-secondary leading-relaxed">
          <strong className="text-status-wip">Note on the flagged entry above:</strong> the
          Fast-SCNN bullets here (quantization, structured pruning, 3× latency reduction,
          Jetson Nano deployment) don&apos;t match the detailed account behind the{' '}
          <Link href="/work/fast-scnn-road-segmentation" className="text-accent-text hover:text-accent-hover underline">
            full case study
          </Link>
          , which states those steps were identified as future work, not completed. This is
          flagged here rather than silently resolved one way or the other — it needs to be
          reconciled before this resume and that case study should sit on the same site.
        </div>
      </section>

      {/* Education */}
      <section className="mb-14">
        <h2 className="font-display font-semibold text-xl mb-5">Education</h2>
        <div className="space-y-5">
          <div className="border-l-2 border-border pl-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <p className="font-medium text-text-primary">Master of Science in Information Systems</p>
              <span className="text-xs font-mono text-text-tertiary shrink-0">Expected May 2027</span>
            </div>
            <p className="text-sm text-text-secondary">Ivy College of Business, Iowa State University · Ames, Iowa · 4.0 GPA</p>
          </div>
          <div className="border-l-2 border-border pl-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <p className="font-medium text-text-primary">Bachelor of Technology in Computer Science & Engineering</p>
              <span className="text-xs font-mono text-text-tertiary shrink-0">Sep 2019 – Jul 2023</span>
            </div>
            <p className="text-sm text-text-secondary">Medicaps University of Science & Technology · Indore, India · 3.5 GPA</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-14">
        <h2 className="font-display font-semibold text-xl mb-5">Certifications</h2>
        <ul className="space-y-1.5">
          <li className="text-sm text-text-secondary">Google Data Analytics Professional Certificate — Coursera</li>
          <li className="text-sm text-text-secondary">Mathematics for Machine Learning Specialization — Coursera</li>
          <li className="text-sm text-text-secondary">AWS Academy Cloud Foundations (S3, EC2) — AWS Academy</li>
        </ul>
      </section>

      {/* Honors */}
      <section>
        <h2 className="font-display font-semibold text-xl mb-5">Honors & Publications</h2>
        <ul className="space-y-1.5">
          <li className="text-sm text-text-secondary">
            Turfit: Turf Reservation Systems — Published in Holkar Science College Journal, Apr 2023
          </li>
          <li className="text-sm text-text-secondary">
            Smart India Hackathon (SIH) 2022 — Top-5 nationally for building a college ranking application for prospective students
          </li>
        </ul>
      </section>
    </SectionContainer>
  );
}
