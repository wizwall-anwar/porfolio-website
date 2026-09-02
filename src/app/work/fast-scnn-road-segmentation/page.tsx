import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Tag } from '@/components/shared/Tag';
import { Callout } from '@/components/shared/Callout';
import { CaseStudySection, PendingNote } from '@/components/case-study/CaseStudySection';
import { ProblemStatement } from '@/components/case-study/ProblemStatement';
import { AssumptionBlock } from '@/components/case-study/AssumptionBlock';
import { ReframingBlock } from '@/components/case-study/ReframingBlock';
import { ConstraintsBlock } from '@/components/case-study/ConstraintsBlock';
import { DecisionBlock } from '@/components/case-study/DecisionBlock';
import { FastSCNNArchitectureDiagram } from '@/components/case-study/FastSCNNArchitectureDiagram';
import { TrainingLossChart } from '@/components/case-study/TrainingLossChart';
import { ResultsGrid, ResultBlock } from '@/components/case-study/ResultBlock';
import { FailureBlock } from '@/components/case-study/FailureBlock';
import { BeforeAfterReflection } from '@/components/case-study/BeforeAfterReflection';
import { LessonBlock } from '@/components/case-study/LessonBlock';
import { VisitorQuestion } from '@/components/case-study/VisitorQuestion';

export const metadata: Metadata = {
  title: 'Fast-SCNN Road Segmentation',
  description:
    'A lightweight, Fast-SCNN-inspired semantic segmentation prototype for road scenes, built around the accuracy-latency-model-size tradeoff that matters for edge-deployed autonomous perception.',
};

export default function FastSCNNCaseStudy() {
  return (
    <SectionContainer className="py-16 sm:py-24" narrow>
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/work" className="text-text-tertiary hover:text-text-secondary transition-colors">
          Work
        </Link>
        <span className="text-text-tertiary mx-2">/</span>
        <span className="text-text-secondary">Fast-SCNN Road Segmentation</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <StatusBadge status="complete" />
          <span className="text-xs font-mono text-text-tertiary">May 2025</span>
        </div>
        <h1 className="text-display text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          How can road scenes be segmented efficiently without requiring an
          unnecessarily heavy model?
        </h1>
        <div className="flex flex-wrap gap-2">
          <Tag>Computer Vision</Tag>
          <Tag>Semantic Segmentation</Tag>
          <Tag>PyTorch</Tag>
          <Tag>Cityscapes</Tag>
          <Tag>Edge / CPS</Tag>
        </div>
      </div>

      <Callout type="info" title="How to read this page">
        Everything marked <strong>grounded in code</strong> is verified directly from the
        model, dataset, and training scripts. Everything else below comes from Anwar&apos;s
        own account of the project&apos;s history and results. Where his own account flags a
        caveat or a bug in the evaluation — and there are real ones here — I&apos;ve kept
        that caveat visible rather than smoothing it over.
      </Callout>

      {/* 1. The Friction */}
      <CaseStudySection number="01" title="The Friction">
        <ProblemStatement>
          An autonomous vehicle has to turn a camera image into an actionable understanding
          of the road fast enough to influence navigation and control — not just accurately.
        </ProblemStatement>
        <p>
          The motivation sits at the intersection of computer vision, autonomous driving, and
          cyber-physical systems: a physical camera feed has to become a driving decision in
          real time. That framing turns road segmentation into a pipeline, not just a model:
        </p>
        <div className="not-prose my-6 flex flex-wrap items-center gap-2 text-sm font-mono text-text-secondary">
          {['Physical world', 'Vehicle camera', 'Semantic segmentation', 'Scene understanding', 'Navigation decision', 'Vehicle action'].map(
            (step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-md border border-border bg-surface-raised">
                  {step}
                </span>
                {i < arr.length - 1 && <span className="text-text-tertiary" aria-hidden="true">→</span>}
              </span>
            )
          )}
        </div>
        <p>
          A highly accurate perception model that can&apos;t respond in real time is of
          limited use in that pipeline — which is what eventually pulled the project toward
          the lightweight end of the segmentation-model spectrum rather than the most
          accurate one available.
        </p>
      </CaseStudySection>

      {/* 2. My Initial Understanding */}
      <CaseStudySection number="02" title="My Initial Understanding">
        <AssumptionBlock>
          The project started as a simpler question than the one it ended on: could semantic
          segmentation work on Cityscapes at all. At that stage the focus was on getting a
          working segmentation pipeline running, before the latency and model-size
          constraints a real autonomous system would impose were fully weighed in.
        </AssumptionBlock>
      </CaseStudySection>

      {/* 3. Reframing */}
      <CaseStudySection number="03" title="Reframing The Problem">
        <ReframingBlock
          before="Can we segment the road?"
          after="Can we perform meaningful road-scene segmentation using a model small and fast enough for an edge device?"
        />
        <p>
          That reframe is why the project moved away from heavier, more accurate options —
          DeepLabV3+, SegFormer — and toward Fast-SCNN specifically. The interesting question
          stopped being segmentation accuracy alone and became the accuracy–latency–model-size
          tradeoff.
        </p>
      </CaseStudySection>

      {/* 4. Constraints */}
      <CaseStudySection number="04" title="Constraints">
        <p className="text-sm text-status-complete font-mono mb-4">✓ grounded in code + confirmed</p>
        <ConstraintsBlock
          constraints={[
            {
              label: 'Hardware',
              detail:
                'Training paths are hardcoded to a local Windows machine (C:/Users/anwar07/Downloads/...), not a shared cluster or cloud instance.',
            },
            {
              label: 'Batch size',
              detail:
                'batch_size=2 — small enough to matter, and directly responsible for the PPM training crash discussed below.',
            },
            {
              label: 'Training time',
              detail: 'The training loop runs for 5 epochs with no early-stopping or resume logic.',
            },
            {
              label: 'Dataset scale',
              detail:
                '2,975 Cityscapes training images across 19 usable semantic classes — everything else masked out as ignore_index=255.',
            },
            {
              label: 'No pretrained weights',
              detail: 'The model trains from random initialization, nothing loads pretrained weights.',
            },
            {
              label: 'Target deployment context',
              detail:
                'An edge device inside a cyber-physical system — meaning inference latency and model size are first-class constraints, not afterthoughts.',
            },
          ]}
        />
      </CaseStudySection>

      {/* 5. Approaches Considered */}
      <CaseStudySection number="05" title="Approaches Considered">
        <p className="text-sm text-status-complete font-mono mb-4">✓ confirmed</p>
        <DecisionBlock
          decision="Use Fast-SCNN rather than a heavier, more accurate segmentation architecture."
          alternatives={[
            'DeepLabV3+ — stronger accuracy, but too heavy and slow for an edge-deployment latency budget',
            'SegFormer — strong transformer-based accuracy, similarly impractical for the target model-size and latency constraints',
          ]}
          tradeoff="Fast-SCNN was chosen specifically for the accuracy-latency-model-size tradeoff that matters in a cyber-physical, real-time system: a highly accurate perception model that can't respond fast enough is of limited use for navigation decisions."
        />
        <p>
          Underneath that choice, the implementation leans on the same efficiency mechanism
          throughout — depthwise separable convolutions in the downsampling stage, the global
          feature extractor, and the classifier — the standard MobileNet-style trick of
          splitting a convolution into a cheap per-channel pass and a cheap channel-mixing pass.
        </p>
      </CaseStudySection>

      {/* 6. Architecture */}
      <CaseStudySection number="06" title="Architecture">
        <p className="text-sm text-status-complete font-mono mb-2">✓ grounded in code</p>
        <p>
          Traced directly from <code>fast_scnn.py</code>: a 512×1024 input is downsampled by
          a factor of 32 before the classifier, then bilinearly upsampled back to full
          resolution for the final per-pixel prediction — roughly 120K trainable parameters
          by direct count of every Conv2d and BatchNorm2d layer&apos;s weights. That figure
          independently matches the 0.46 MB model-size estimate from evaluation (120,419
          params x 4 bytes ≈ 0.46 MB) — two different ways of counting arriving at the same
          number.
        </p>
        <FastSCNNArchitectureDiagram />
        <FailureBlock title="Resolved: the frozen global-context branch">
          <p className="mb-2">
            This turned out to be a real training crash, not just a stylistic patch. With
            2,975 training images and <code>batch_size=2</code>, the final mini-batch of each
            epoch contains exactly one sample (2,975 = 1,487x2 + 1). Inside the PPM branch,{' '}
            <code>AdaptiveAvgPool2d(1)</code> collapses that single sample down to a
            1x1 feature map, so <code>BatchNorm2d</code> receives a tensor of shape{' '}
            <code>[1, 128, 1, 1]</code> — one value per channel, from one sample. PyTorch
            can&apos;t compute batch statistics from that and throws:
          </p>
          <pre className="text-xs bg-code-bg border border-border rounded p-3 my-3 overflow-x-auto">
            <code>ValueError: Expected more than 1 value per channel when training, got input size torch.Size([1, 128, 1, 1])</code>
          </pre>
          <p className="mb-2">
            Wrapping the PPM branch in <code>.eval()</code> + <code>torch.no_grad()</code>{' '}
            stopped BatchNorm from trying to compute new statistics on that batch, and
            training completed. But it&apos;s a workaround, not a fix: <code>no_grad()</code>{' '}
            also blocks gradients from reaching that branch entirely, so its ~16,640
            parameters (13.8% of the model) stay at random initialization for the whole run.
          </p>
          <p>
            A cleaner fix would use a normalization scheme that doesn&apos;t depend on batch
            statistics for that pooled branch, drop BatchNorm from it entirely, or set{' '}
            <code>drop_last=True</code> on the DataLoader so a batch of size 1 never occurs
            in the first place.
          </p>
        </FailureBlock>
        <p className="text-xs text-text-tertiary">
          For the record: my original guess (posted before Anwar confirmed this) was in the
          right neighborhood — small-batch BatchNorm instability — but wasn&apos;t precise.
          The actual trigger was a specific final batch of exactly one sample from an
          odd-sized dataset, not general instability across small batches.
        </p>
      </CaseStudySection>

      {/* 7. Building the Workable Version */}
      <CaseStudySection number="07" title="Building The Workable Version">
        <p className="text-sm text-status-complete font-mono mb-4">✓ grounded in code + confirmed</p>
        <p>
          <code>train.py</code> handles the core loop simply: <code>CrossEntropyLoss(ignore_index=255)</code>{' '}
          correctly excludes unlabeled pixels, and the 19-class Cityscapes remapping is
          careful even where the training loop itself is minimal. The completed run trained
          for 5 epochs on all 2,975 training images.
        </p>
        <TrainingLossChart />
        <PendingNote>
          One honest gap: the version of <code>train.py</code> reviewed here doesn&apos;t
          include the code that saved a checkpoint (<code>fast_scnn_final.pth</code>) or ran
          evaluation — Anwar&apos;s account mentions those, plus a <code>config.py</code> for
          reproducibility, which weren&apos;t part of the five files shared for this write-up.
          The results below come from his account of that run, not from code I&apos;ve
          personally read.
        </PendingNote>
      </CaseStudySection>

      {/* 8. What Happened */}
      <CaseStudySection number="08" title="What Happened">
        <p className="text-sm text-status-wip font-mono mb-4">
          ⚠ real results, with real caveats — read the flags, not just the numbers
        </p>
        <ResultsGrid>
          <ResultBlock
            label="Model size"
            value="~120K params / 0.46 MB"
            detail="Two independent counting methods agree."
            verified
          />
          <ResultBlock
            label="Inference speed"
            value="20.62 ms/frame · 48.51 FPS"
            detail="CPU forward-pass time."
            verified
          />
          <ResultBlock
            label="Pixel accuracy"
            value="86.59%"
            detail="Measured on the training set, not a held-out validation/test set — this is training-set evaluation accuracy, not generalization accuracy."
            flag="caveat"
          />
          <ResultBlock
            label='"mIoU"'
            value="0.6853"
            detail="Computed as total intersection over total union across all classes (an aggregate/global IoU), not true per-class-averaged mIoU. Shouldn't be presented as official mIoU without recomputing per class."
            flag="caveat"
          />
          <ResultBlock
            label="F1 score"
            value="414.2829"
            detail="Mathematically impossible — F1 must fall between 0 and 1. This came from an accumulation/averaging bug and should be discarded until recomputed."
            flag="invalid"
          />
          <ResultBlock
            label="Qualitative output"
            value="Road & large regions: good"
            detail="Predictions captured broad scene geometry well, especially road area, with rougher boundaries and lost smaller objects — expected for an aggressively lightweight model trained 5 epochs."
            verified
          />
        </ResultsGrid>
      </CaseStudySection>

      {/* 9. How My Understanding Changed */}
      <CaseStudySection number="09" title="How My Understanding Changed">
        <p className="text-xs text-text-tertiary mb-4 italic">
          Synthesized from Anwar&apos;s account of the project, not a verbatim quote.
        </p>
        <BeforeAfterReflection
          before="A training loop that converges and produces plausible pixel-accuracy and mIoU numbers means the model basically works."
          during="Reading the evaluation code closely showed the accuracy was measured on the training set rather than held out, the 'mIoU' was really an aggregate IoU across all classes, and the F1 score was an impossible value produced by an averaging bug."
          after="For a resource-constrained, safety-adjacent problem like autonomous perception, evaluation methodology deserves the same scrutiny as the architecture. A good-looking number isn't the same as a correctly computed one."
        />
      </CaseStudySection>

      {/* 10. What I Would Change */}
      <CaseStudySection number="10" title="What I Would Change">
        <p className="text-sm text-status-complete font-mono mb-4">✓ Anwar&apos;s own list</p>
        <ul className="space-y-3">
          <li>
            <strong>Restore the proper Fast-SCNN feature-fusion path.</strong> Bring back the
            high-resolution skip connection from the downsampling stage into fusion, instead
            of only fusing the global-extractor branch with its own pooled context.
          </li>
          <li>
            <strong>Recompute true per-class mIoU and a correct F1</strong> on a proper
            held-out Cityscapes validation split — not the training set, and not an aggregate
            IoU presented as mIoU.
          </li>
          <li>
            <strong>Benchmark inference on the actual intended edge device</strong> rather
            than extrapolating from CPU numbers on a development machine.
          </li>
          <li>
            <strong>Fix the PPM branch properly</strong> — batch-independent normalization,
            dropping BatchNorm from the pooled branch, or <code>drop_last=True</code>, instead
            of the eval()/no_grad() workaround.
          </li>
        </ul>
        <LessonBlock>
          These three changes would turn this from a good course prototype into a much
          stronger experimental project — the architecture already does what it needs to;
          the evaluation methodology is what needs to catch up.
        </LessonBlock>
      </CaseStudySection>

      {/* 11. What Happened Next */}
      <CaseStudySection number="11" title="What Happened Next">
        <p className="text-sm text-status-complete font-mono mb-4">✓ confirmed</p>
        <p>
          The project reached the prototype-and-evaluation stage — trained, checkpointed, and
          benchmarked on the development machine — but didn&apos;t progress to actual hardware
          deployment. Specifically, it did not yet include:
        </p>
        <ul className="space-y-2">
          <li>Deployment to a Jetson, Raspberry Pi, or other physical edge board</li>
          <li>ONNX / TensorRT / TFLite conversion</li>
          <li>Inference benchmarking on the actual target edge hardware</li>
          <li>A head-to-head comparison against BiSeNet or SegFormer under matched conditions</li>
          <li>ROS or simulator integration</li>
          <li>Converting segmentation output into steering/braking commands, or closed-loop testing</li>
        </ul>
        <p>
          The fair summary: this established feasibility for edge-oriented road-scene
          perception — a working, very small model with a real (if train-set) accuracy signal
          and a real CPU latency number — without yet closing the loop into an actual
          autonomous system.
        </p>
      </CaseStudySection>

      {/* 12. Visitor Participation */}
      <VisitorQuestion projectTitle="Fast-SCNN" />
    </SectionContainer>
  );
}
