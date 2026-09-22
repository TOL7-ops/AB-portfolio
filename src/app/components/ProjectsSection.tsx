'use client';

import React, { useEffect, useRef } from 'react';
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
  deliverables: string;
  link?: string;
}

const projects: Project[] = [
{
  id: 1,
  name: 'GetVax',
  year: '2026',
  category: 'Health Tech Website',
  image: "/image.png",
  imageAlt: 'Health tech dashboard interface displayed on a tablet, dark green background, medical data visualization with charts and tables',
  description: 'Modern healthcare for Africans. Highly crafted and user-centered-designed landing page and web app.',
  bgColor: '#1B4332',
  note: 'This product is in active development',
  deliverables: 'Website, Web App & Admin Portal',
  link: 'https://www.lafyai.com/'
},
{
  id: 2,
  name: 'Afya',
  year: '2026',
  category: 'Health Tech Mobile App',
  image: "/afya.jpg",
  imageAlt: 'Afya healthcare app interface showing blood pressure monitoring dashboard with hypertension management features',
  description: 'Healthcare platform focused on blood-pressure monitoring, hypertension management, and family health management.',
  bgColor: '#E8F4F8',
  note: 'Currently in beta testing with select users',
  deliverables: 'iOS App, Android App & Web Dashboard',
  link: 'https://useafiyai.com/'
},
{
  id: 3,
  name: 'Petal Finance',
  year: '2025',
  category: 'Mobile App Design',
  image: "/image3.jpg",
  imageAlt: 'Mobile finance app interface mockup showing transaction history and spending analytics on a smartphone, warm coral background',
  description: 'Personal finance mobile app helping millennials track spending and reach savings goals. 4.8★ on App Store with 200k+ downloads.',
  bgColor: '#7F1D1D',
  note: 'Live on App Store & Play Store',
  deliverables: 'iOS App, Android App & Marketing Site'
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
      
      {/* Project name and year - stacked vertically above image */}
      <div className="flex flex-col mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{project.name}</h3>
        <span className="text-sm text-gray-500">{project.year}</span>
      </div>
      
      {/* Project image - conditional styling for GetVax */}
      {project.id === 1 ? (
        // GetVax: Green background with absolutely positioned image
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full mb-6 rounded-[32px] overflow-hidden transition-opacity hover:opacity-90 cursor-pointer relative"
          style={{ 
            backgroundColor: '#195243',
            height: '100%',
            aspectRatio: '1.7916666666666667 / 1'
          }}
        >
          <div 
            style={{ 
              position: 'absolute',
              inset: '0',
              width: '70%',
              left: '10%',
              top: '0',
              right: '0',
              bottom: '0'
            }}
          >
            <AppImage
              src={project.image}
              alt={project.imageAlt}
              fill
              style={{
                objectFit: 'cover',
                color: 'transparent'
              }}
              sizes="100vw"
            />
          </div>
        </a>
      ) : project.link ? (
        // Other projects with links: Full-width image, clickable
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full mb-6 rounded-[32px] overflow-hidden transition-opacity hover:opacity-90 cursor-pointer">
          <div className="relative w-full" style={{ aspectRatio: '1.7916666666666667 / 1' }}>
            <AppImage
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </a>
      ) : (
        // Projects without links: Full-width image, not clickable
        <div className="w-full mb-6 rounded-[32px] overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: '1.7916666666666667 / 1' }}>
            <AppImage
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      {/* Category tag */}
      <div className="mb-3 sm:mb-4">
        <span className="inline-block text-xs sm:text-sm font-medium text-gray-700">
          {project.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 leading-snug mb-4 sm:mb-6">
        {project.description}
      </p>

      {/* Note & Deliverables box */}
      <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Note column */}
          <div>
            <h3 className="text-[24px] font-[500] text-black mb-2">Note:</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.note}
            </p>
          </div>
          
          {/* Deliverables column */}
          <div>
            <h3 className="text-[24px] font-[500] text-black mb-2">Deliverables:</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.deliverables}
            </p>
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
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-[76rem] mx-auto">
        {/* Section header - Centered with dotted line */}
        <div ref={headingRef} className="mb-10 sm:mb-12 md:mb-14 text-center">
          {/* Dotted line decoration */}
          <div className="flex items-center justify-center mb-4 sm:mb-6 scroll-reveal">
            <div className="border-t-2 border-dotted border-black w-[8rem] sm:w-[12rem]"></div>
          </div>
          
          {/* Featured Projects label */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 scroll-reveal stagger-1">
            <span className="w-2 h-2 rounded-full bg-gray-900" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">
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
              <span className="block">That Propel Success</span>
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