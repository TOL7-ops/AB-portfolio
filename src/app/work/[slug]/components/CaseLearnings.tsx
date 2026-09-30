'use client';

import React from 'react';
import { LearningPoint } from '@/lib/projects';

interface CaseLearningsProps {
  heading: string;
  points: LearningPoint[];
}

export default function CaseLearnings({ heading, points }: CaseLearningsProps) {
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

        {/* Learning points as bullet list without container */}
        <ul className="space-y-6">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 flex-shrink-0" />
              <div>
                <span 
                  className="font-semibold text-gray-900"
                  style={{
                    fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
                    fontSize: '18px'
                  }}
                >
                  {point.title}
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
      </div>
    </section>
  );
}
