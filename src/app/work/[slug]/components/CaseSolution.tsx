'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { SolutionFeature } from '@/lib/projects';

interface CaseSolutionProps {
  heading: string;
  intro: string;
  features: SolutionFeature[];
}

export default function CaseSolution({ heading, intro, features }: CaseSolutionProps) {
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

        {/* Intro paragraph */}
        <p 
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
          className="mb-12"
        >
          {intro}
        </p>

        {/* Numbered feature blocks */}
        <div className="space-y-12 sm:space-y-16">
          {features.map((feature, idx) => (
            <div key={idx}>
              {/* Feature title with inline number (no circle badge) */}
              <h3 
                className="mb-6"
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
                  fontSize: '24px',
                  letterSpacing: '0em',
                  lineHeight: '1.2',
                  fontFeatureSettings: 'normal',
                  position: 'relative'
                }}
              >
                {feature.number}. {feature.title}
              </h3>

              {/* Feature points as bullet list matching Section 2 style */}
              <ul className="space-y-6 mb-8">
                {feature.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
                    <div>
                      <span 
                        className="font-semibold text-gray-900"
                        style={{
                          fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
                          fontSize: '18px'
                        }}
                      >
                        {point.label}
                      </span>
                      <p 
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
                        className="mt-1"
                      >
                        {point.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Optional screenshot */}
              {feature.image && (
                <div 
                  className="w-full"
                  style={{
                    maxWidth: '100%',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    marginTop: '2rem'
                  }}
                >
                  <img
                    src={feature.image}
                    alt={`${feature.title} screenshot`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '100%',
                      display: 'block',
                      objectFit: 'contain'
                    }}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
