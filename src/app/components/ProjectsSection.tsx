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
      <div className="flex flex-col mb-4">
        <h3 className="text-gray-900 text-xl font-semibold">{project.name}</h3>
        <span className="text-gray-500 text-sm">{project.year}</span>
      </div>
      
      {/* Project image - conditional rendering based on project ID */}
      {project.id === 1 ? (
        // First project: Green background with centered image, clickable
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full transition-opacity hover:opacity-90">
          <div
            className="w-full flex flex-col justify-center items-center overflow-clip rounded-[32px] mb-6 cursor-pointer"
            style={{ 
              backgroundColor: '#195243',
              minHeight: '528px',
            }}>
            
            <div className="relative w-full max-w-3xl" style={{ aspectRatio: '1.5 / 1' }}>
              <AppImage
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          </div>
        </a>
      ) : project.link ? (
        // 2nd project: Full-width image with link
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
        // 3rd project: Full-width image, no link
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
      <div className="mb-4">
        <span className="inline-block text-sm font-medium text-gray-700">
          {project.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug mb-6">
        {project.description}
      </p>

      {/* Note & Deliverables box */}
      <div className="border border-gray-200 rounded-2xl p-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Note column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Note:</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {project.note}
            </p>
          </div>
          
          {/* Deliverables column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Deliverables:</h3>
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
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-[76rem] mx-auto">
        {/* Section header - Centered with dotted line */}
        <div ref={headingRef} className="mb-14 text-center">
          {/* Dotted line decoration */}
          <div className="flex items-center justify-center mb-6 scroll-reveal">
            <div className="border-t-2 border-dotted border-black w-[12rem]"></div>
          </div>
          
          {/* Featured Projects label */}
          <div className="flex items-center justify-center gap-2 mb-6 scroll-reveal stagger-1">
            <span className="w-2 h-2 rounded-full bg-gray-900" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-600">
              Featured Projects
            </span>
          </div>
          
          {/* Main heading - centered */}
          <div className="scroll-reveal stagger-2">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
              <span className="block">Delivering Tangible Results</span>
              <span className="block">That Propel Success</span>
            </h2>
          </div>
        </div>

        {/* Projects list */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) =>
          <ProjectCard key={project.id} project={project} index={index} />
          )}
        </div>
      </div>
    </section>);

}