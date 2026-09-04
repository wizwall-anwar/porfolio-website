import { Hero } from '@/components/homepage/Hero';
import { VisitorLens } from '@/components/homepage/VisitorLens';
import { VisitorLensProvider } from '@/components/homepage/VisitorLensContext';
import { FeaturedProjects } from '@/components/homepage/FeaturedProjects';
import { ProblemSolvingLoop } from '@/components/homepage/ProblemSolvingLoop';
import { PhilosophyTeaser } from '@/components/homepage/PhilosophyTeaser';
import { HomepageCTA } from '@/components/homepage/HomepageCTA';

export default function HomePage() {
  return (
    <VisitorLensProvider>
      <Hero />
      <VisitorLens />
      <FeaturedProjects />
      <ProblemSolvingLoop />
      <PhilosophyTeaser />
      <HomepageCTA />
    </VisitorLensProvider>
  );
}
