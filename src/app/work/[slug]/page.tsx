import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllSlugs } from '@/lib/projects';
import CaseHero from './components/CaseHero';
import CaseMeta from './components/CaseMeta';
import CaseAssignment from './components/CaseAssignment';
import CaseChallenge from './components/CaseChallenge';
import CaseResearch from './components/CaseResearch';
import CaseSolution from './components/CaseSolution';
import CaseLearnings from './components/CaseLearnings';
import CaseClosing from './components/CaseClosing';
import Header from '@/components/Header';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - ${project.tagline}`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} - ${project.tagline}`,
      description: project.tagline,
      images: [project.coverImage],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white">
      <Header />
      <CaseHero
        projectName={project.title}
        year={project.year}
        tagline={project.tagline}
        coverImage={project.coverImage}
        slug={project.slug}
      />

      <CaseMeta tabs={project.tabs} meta={project.meta} />

      <CaseAssignment
        heading={project.assignment.heading}
        body={project.assignment.body}
      />

      <CaseChallenge
        heading={project.challenge.heading}
        body={project.challenge.body}
        bullets={project.challenge.bullets}
        image={project.challenge.image}
      />

      <CaseResearch
        heading={project.research.heading}
        insights={project.research.insights}
      />

      <CaseSolution
        heading={project.solution.heading}
        intro={project.solution.intro}
        features={project.solution.features}
      />

      <CaseLearnings
        heading={project.learnings.heading}
        points={project.learnings.points}
      />

      <CaseClosing
        closingImage={project.closingImage}
        nextProjectSlug={project.nextProjectSlug}
      />

      {/* Reuse existing sections */}
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
