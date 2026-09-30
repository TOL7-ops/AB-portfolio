'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface CaseHeroProps {
  projectName: string;
  year: string;
  tagline: string;
  coverImage: string;
  slug?: string;  // Add slug to determine if green bg needed
}

export default function CaseHero({ projectName, year, tagline, coverImage, slug }: CaseHeroProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Apply green background for GetVax project
  const isGetVax = slug === 'getvax';

  return (
    <section className="relative pt-24 pb-6 md:pt-32 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Small label */}
        <div className="mb-4 sm:mb-6">
          <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wider">
            {projectName} · {year}
          </span>
        </div>

        {/* Large heading */}
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] font-medium mb-12 sm:mb-16 md:mb-20 max-w-[29rem]"
          style={{
            fontFamily: '"Manrope", sans-serif',
            lineHeight: '1.2',
            color: '#000000'
          }}
        >
          {tagline}
        </h1>

        {/* Full-bleed cover image with conditional green background */}
        <div 
          className="relative w-full rounded-2xl overflow-hidden" 
          style={{ 
            aspectRatio: '16 / 9',
            backgroundColor: isGetVax ? '#195243' : 'transparent'
          }}
        >
          {isGetVax ? (
            // GetVax: Image positioned absolutely with 70% width
            <div 
              style={{ 
                position: 'absolute',
                inset: '0',
                width: '70%',
                left: '15%',
                top: '0',
                right: '0',
                bottom: '0'
              }}
            >
              <AppImage
                src={coverImage}
                alt={`${projectName} cover image`}
                fill
                style={{
                  objectFit: 'cover',
                  color: 'transparent'
                }}
                sizes="100vw"
                priority
              />
            </div>
          ) : (
            // Other projects: Full-width image
            <AppImage
              src={coverImage}
              alt={`${projectName} cover image`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          )}
        </div>

        {/* Scroll to top arrow */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg z-40"
          aria-label="Scroll to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
