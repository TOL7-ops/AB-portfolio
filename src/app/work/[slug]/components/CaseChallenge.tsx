'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface CaseChallengeProps {
  heading: string;
  body: string[];
  bullets: string[];
  image?: string;
}

export default function CaseChallenge({ heading, body, bullets, image }: CaseChallengeProps) {
  // Array of lafy images to stack (lafy3 is missing, so we skip it)
  const lafyImages = [
    '/lafy1-Greenshot.png',
    '/lafy2.jpg',
    '/lafy4.jpg',
    '/lafy5.jpg',
    '/lafy6.jpg',
    '/lafy7.jpg',
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[73rem] mx-auto px-4 sm:px-6">
        <h2 
          style={{
            width: '100%',
            height: 'auto',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            fontWeight: 500,
            fontStyle: 'normal',
            fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
            color: '#000000',
            fontSize: '2.5rem',
            letterSpacing: '0em',
            textAlign: 'left',
            lineHeight: '1.2'
          }}
          className="mb-8 sm:mb-10"
        >
          {heading}
        </h2>

        {/* Body text paragraphs */}
        <div className="mb-6">
          {body.map((paragraph, idx) => (
            <p 
              key={idx}
              style={{
                width: '100%',
                height: 'auto',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
                fontWeight: 400,
                fontStyle: 'normal',
                fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
                color: '#69707c',
                fontSize: '18px',
                letterSpacing: '0em',
                lineHeight: '1.5'
              }}
              className="mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bullet list */}
        <ul className="space-y-3 mb-10">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
              <span className="text-base sm:text-lg text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Stacked lafy images (lafy1, lafy2, lafy4-lafy7) */}
        <div className="space-y-6 mb-10">
          {lafyImages.map((imgSrc, idx) => (
            <div 
              key={idx} 
              className="relative w-full rounded-lg overflow-hidden" 
              style={{ aspectRatio: '16 / 9' }}
            >
              <AppImage
                src={imgSrc}
                alt={`Challenge illustration ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
