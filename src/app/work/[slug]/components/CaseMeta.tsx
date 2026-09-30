'use client';

import React from 'react';
import { ProjectMeta } from '@/lib/projects';

interface CaseMetaProps {
  tabs: string[];
  meta: ProjectMeta;
}

export default function CaseMeta({ tabs, meta }: CaseMetaProps) {
  return (
    <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tab labels row - plain text, no pill styling */}
        <div className="flex flex-wrap gap-6 sm:gap-8 mb-12 sm:mb-16">
          {tabs.map((tab) => (
            <span
              key={tab}
              className="text-sm sm:text-base text-gray-900"
              style={{
                fontFamily: '"Manrope", sans-serif',
                fontWeight: 400
              }}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* 4-column meta grid with tighter spacing */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* My Role */}
            <div>
              <h3 
                className="text-sm font-medium mb-3"
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  color: '#333333',
                  letterSpacing: 'normal'
                }}
              >
                My Role
              </h3>
              <ul className="space-y-2">
                {meta.role.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-sm"
                    style={{
                      fontFamily: '"Manrope", sans-serif',
                      color: '#1a1a1a',
                      fontWeight: 400
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div>
              <h3 
                className="text-sm font-medium mb-3"
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  color: '#333333',
                  letterSpacing: 'normal'
                }}
              >
                Deliverables
              </h3>
              <ul className="space-y-2">
                {meta.deliverables.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-sm"
                    style={{
                      fontFamily: '"Manrope", sans-serif',
                      color: '#1a1a1a',
                      fontWeight: 400
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaborators */}
            <div>
              <h3 
                className="text-sm font-medium mb-3"
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  color: '#333333',
                  letterSpacing: 'normal'
                }}
              >
                Collaborators
              </h3>
              <ul className="space-y-2">
                {meta.collaborators.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-sm"
                    style={{
                      fontFamily: '"Manrope", sans-serif',
                      color: '#1a1a1a',
                      fontWeight: 400
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Year */}
            <div>
              <h3 
                className="text-sm font-medium mb-3"
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  color: '#333333',
                  letterSpacing: 'normal'
                }}
              >
                Year
              </h3>
              <p 
                className="text-sm"
                style={{
                  fontFamily: '"Manrope", sans-serif',
                  color: '#1a1a1a',
                  fontWeight: 400
                }}
              >
                {meta.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
