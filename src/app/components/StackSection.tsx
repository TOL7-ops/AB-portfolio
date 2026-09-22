'use client';

import React, { useEffect, useRef } from 'react';

interface Tool {
  name: string;
  category: string;
  color: string;
  svgPath: string;
}

const tools: Tool[] = [
  {
    name: 'Figma',
    category: 'Interface Design Tool',
    color: '#F24E1E',
    svgPath: 'M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5zM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2zM12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0zM5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z',
  },
  {
    name: 'Notion',
    category: 'Productivity Tool',
    color: '#000000',
    svgPath: 'M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z',
  },
  {
    name: 'Framer',
    category: 'Interface Design Tool',
    color: '#0055FF',
    svgPath: 'M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z',
  },
  {
    name: 'Jira',
    category: 'Project Management',
    color: '#0052CC',
    svgPath: 'M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.004-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.762a1.001 1.001 0 0 0-1.001-1.005zM17.294 0H5.736a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057a5.215 5.215 0 0 0 5.215 5.215V1.005A1.001 1.001 0 0 0 17.294 0z',
  },
  {
    name: 'Webflow',
    category: 'Interface Design Tool',
    color: '#4353FF',
    svgPath: 'M24 5.456l-8.826 13.088-.034.046H11.8l3.73-5.783h-.073C13.226 16.25 9.584 18.71 4.73 18.71H0L6.252 9.55h.073l-2.88 4.194h.073c3.57-.025 6.315-1.854 7.878-4.244H5.27L9.008 4h5.028l-2.808 4.194h.073c.73-.998 1.73-1.997 2.882-2.87L11.87 8.556h5.028L24 5.456z',
  },
  {
    name: 'Slack',
    category: 'Productivity Tool',
    color: '#E01E5A',
    svgPath: 'M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zm2.521-10.123a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z',
  },
];

function ToolRow({ tool, index }: { tool: Tool; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className="scroll-reveal group cursor-pointer"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Tool card */}
      <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
        {/* Left: Icon + Info */}
        <div className="flex items-center gap-3">
          {/* Tool icon */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${tool.color}15` }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill={tool.color}>
              <path d={tool.svgPath} />
            </svg>
          </div>

          {/* Tool info */}
          <div>
            <div className="font-semibold text-gray-900 text-base">{tool.name}</div>
            <div className="text-gray-600 text-sm">{tool.category}</div>
          </div>
        </div>

        {/* Right: Arrow */}
        <div className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function StackSection() {
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
    <section id="stack" className="py-20 px-6 bg-white">
      <div className="max-w-[76rem] mx-auto">
        {/* Header */}
        <div ref={headingRef} className="mb-12">
          <h2 
            className="mb-3 scroll-reveal"
            style={{
              width: 'auto',
              height: 'auto',
              whiteSpace: 'pre',
              fontWeight: 500,
              fontStyle: 'normal',
              fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
              color: '#000000',
              fontSize: '48px',
              letterSpacing: '0em',
              // textAlign: 'center',
              lineHeight: '1.2'
            }}
          >
            My Stack
          </h2>
          <p className="text-gray-600 text-base leading-relaxed scroll-reveal stagger-1">
            Commitment to staying updated with the latest design trends and techniques.
          </p>
        </div>

       <div className='max-w-4xl mx-auto'>
         {/* 2-column grid of tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {tools.map((tool, index) => (
            <ToolRow key={tool.name} tool={tool} index={index} />
          ))}
        </div>
       </div>
      </div>
    </section>
  );
}