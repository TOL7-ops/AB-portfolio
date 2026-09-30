'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface CaseClosingProps {
  closingImage: string;
  nextProjectSlug: string;
}

export default function CaseClosing({ closingImage, nextProjectSlug }: CaseClosingProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Full-bleed closing image */}
        <div className="relative w-full rounded-2xl overflow-hidden mb-10 sm:mb-12" style={{ aspectRatio: '16 / 9' }}>
          <AppImage
            src={closingImage}
            alt="Project closing image"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Next Project link */}
        <div className="text-center">
          <Link
            href={`/work/${nextProjectSlug}`}
            className="inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors group"
          >
            Next Project
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
