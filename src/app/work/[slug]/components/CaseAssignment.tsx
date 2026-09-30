'use client';

import React from 'react';

interface CaseAssignmentProps {
  heading: string;
  body: string[];
}

export default function CaseAssignment({ heading, body }: CaseAssignmentProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
        
        <div className="prose prose-lg max-w-none">
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
      </div>
    </section>
  );
}
