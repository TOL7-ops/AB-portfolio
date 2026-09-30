'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface Project {
  id: number;
  name: string;
  year: string;
  category: string;
  image: string;
  imageAlt: string;
  description: string;
  bgColor: string;
  note: string;
  noteSubtext?: string;
  deliverables: string;
  deliverablesSubtext?: string;
  stat1Value?: string;
  stat1Label?: string;
  stat2Value?: string;
  stat2Label?: string;
  link?: string;
  slug?: string;
}

const projects: Project[] = [
{
  id: 1,
  name: 'GetVax',
  year: '2026',
  category: 'Health Tech Website',
  image: "/iPad Pro.png",
  imageAlt: 'Health tech dashboard interface displayed on a tablet, dark green background, medical data visualization with charts and tables',
  description: 'Modern healthcare for Africans. Highly crafted and user-centered-designed landing page and web app.',
  bgColor: '#1B4332',
  note: 'Note:',
  noteSubtext: 'This product is in active development',
  deliverables: 'Deliverables:',
  deliverablesSubtext: 'Website, Web App & Admin Portal',
  link: 'https://www.lafyai.com/',
  slug: 'getvax'
},
{
  id: 2,
  name: 'Olive Stock App',
  year: '2025',
  category: "SolveraLabHQ's Website",
  image: "/afya.jpg",
  imageAlt: 'Olive Stock App interface showing high-performance interactive design',
  description: 'High-performance interactive website with seamless animations and optimized load times.',
  bgColor: '#E8F4F8',
  note: '47% New Customers',
  noteSubtext: 'Increase new users based, demonstrating Credibility.',
  deliverables: '15%',
  deliverablesSubtext: 'Increase in daily active users shows enhanced engagement.',
  link: 'https://useafiyai.com/',
  slug: 'afya'
},
{
  id: 3,
  name: 'Olive Website',
  year: '2025',
  category: "SolveraLabHQ's Website",
  image: "/image3.jpg",
  imageAlt: 'Olive website interface showing high-performance interactive design',
  description: 'High-performance interactive website with seamless animations and optimized load times.',
  bgColor: '#7F1D1D',
  note: '47% New Customers',
  noteSubtext: 'Increase new users based, demonstrating Credibility.',
  deliverables: '15%',
  deliverablesSubtext: 'Increase in daily active users shows enhanced engagement.',
}];


function ProjectCard({ project, index }: {project: Project;index: number;}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="scroll-reveal"
      style={{ transitionDelay: `${index * 0.12}s` }}>
      
      {/* Project name and year - left-aligned above image */}
      <div className="flex flex-col items-start mb-3 -ml-[5%]">
        <h3 className="text-[18px] font-semibold text-black">{project.name}</h3>
        <span className="text-[15px] text-black">{project.year}</span>
      </div>

      {/* Project image */}
      {project.slug ? (
        <Link
          href={`/work/${project.slug}`}
          className="block mb-6 rounded-[32px] overflow-hidden transition-opacity hover:opacity-90 cursor-pointer relative"
          style={{ backgroundColor: project.bgColor, height: '560px', width: '110%', marginLeft: '-5%' }}
        >
          <div style={{ position: 'absolute', width: '85%', left: '8%', top: '-5%', bottom: '0' }}>
            <AppImage src={project.image} alt={project.imageAlt} fill style={{ objectFit: 'cover', color: 'transparent' }} sizes="100vw" />
          </div>
        </Link>
      ) : project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-6 rounded-[32px] overflow-hidden transition-opacity hover:opacity-90 cursor-pointer relative"
          style={{ backgroundColor: project.bgColor, height: '560px', width: '110%', marginLeft: '-5%' }}
        >
          <div style={{ position: 'absolute', width: '85%', left: '8%', top: '-5%', bottom: '0' }}>
            <AppImage src={project.image} alt={project.imageAlt} fill style={{ objectFit: 'cover', color: 'transparent' }} sizes="100vw" />
          </div>
        </a>
      ) : (
        <div
          className="mb-6 rounded-[32px] overflow-hidden relative"
          style={{ backgroundColor: project.bgColor, height: '560px', width: '110%', marginLeft: '-5%' }}
        >
          <div style={{ position: 'absolute', width: '85%', left: '8%', top: '-5%', bottom: '0' }}>
            <AppImage src={project.image} alt={project.imageAlt} fill style={{ objectFit: 'cover', color: 'transparent' }} sizes="100vw" />
          </div>
        </div>
      )}

      {/* Category tag */}
      <div className="mb-3 sm:mb-4">
        <span className="inline-block text-[15px] font-medium text-black">
          {project.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-[18px] font-medium text-black leading-snug mb-4 sm:mb-6">
        {project.description}
      </p>

      {/* Note & Deliverables box */}
      <div className="border border-black rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h3 className="text-[18px] font-[500] text-black mb-2">{project.note}</h3>
            {project.noteSubtext && <p className="text-[15px] text-black leading-relaxed">{project.noteSubtext}</p>}
          </div>
          <div>
            <h3 className="text-[18px] font-[500] text-black mb-2">{project.deliverables}</h3>
            {project.deliverablesSubtext && <p className="text-[15px] text-black leading-relaxed">{project.deliverablesSubtext}</p>}
          </div>
        </div>
      </div>
    </div>);

}

export default function ProjectsSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.scroll-reveal').forEach((child) => {
            (child as HTMLElement).classList.add('revealed');
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header - Centered with dotted line */}
        <div ref={headingRef} className="mb-10 sm:mb-12 md:mb-14 text-center">
          {/* Dotted line decoration */}
          <div className="flex items-center justify-center mb-2">
            <div className="border-t-2 border-dotted border-black w-[8rem] sm:w-[12rem]"></div>
          </div>
          
          {/* Featured Projects label */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 scroll-reveal stagger-1">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="text-[16px] font-semibold tracking-widest text-black">
              Featured Projects
            </span>
          </div>
          
          {/* Main heading - centered */}
          <div className="scroll-reveal stagger-2 px-4">
            <h2 
              className="leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
              style={{
                fontWeight: 500,
                fontStyle: 'normal',
                fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
                color: '#000000',
                letterSpacing: '0em',
                lineHeight: '1.2'
              }}
            >
              <span className="block">Delivering Tangible Results</span>
              <span className="block ml-[16ch]">That Propel Success</span>
            </h2>
          </div>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {projects.map((project, index) =>
          <ProjectCard key={project.id} project={project} index={index} />
          )}
        </div>
      </div>
    </section>);

}