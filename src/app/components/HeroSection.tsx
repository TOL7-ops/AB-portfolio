'use client';

import React, { useState } from 'react';
import AnimatedIcon from '@/components/ui/AnimatedIcon';


interface Slide {
  heading: string;
  bio: React.ReactNode;
  ctaLabel: string;
  customOffset?: string; // Optional custom offset for specific slides
}

const slides: Slide[] = [
  {
    heading: 'Web & Mobile App\nDesign Expert',
    bio: (
      <span>
        <span className="text-[#7c6a5e] font-medium">Eric here</span>
        {' – Driven by curiosity and a love for great, high-quality and thoughtful design. Striving to create something truly unique and meaningful.'}
      </span>
    ),
    ctaLabel: 'For Recruiters',
  },
  {
    heading: '2 Years Of Web & Mobile App\nDesign Experience',
    bio: (
      <span>
        {"I'm a product designer specializing in web and mobile apps for "}
        <span className="text-[#7c6a5e]">FinTech</span>
        {', '}
        <span className="text-[#7c6a5e]">eCommerce</span>
        {', and '}
        <span className="text-[#7c6a5e]">SaaS</span>
        {'. I craft user-focused designs that drive conversions and resonate with audiences. Currently based in '}
        <span className="text-[#7c6a5e]">Ho</span>
        {', '}
        <span className="text-[#7c6a5e]">Dzodze</span>
        {', '}
        <span className="text-[#7c6a5e]">Aflao</span>
        {', '}
        <span className="text-[#7c6a5e]">Tema</span>
        {', '}
        <span className="text-[#7c6a5e]">Accra</span>
        {'.'}
      </span>
    ),
    ctaLabel: 'For Engineers',
  },
  {
    heading: 'I design highly technically useful,\nsimple & well-made products.',
    bio: (
      <span>
        {'While I am ≠ an engineer, I am highly technical, I know my way around and I can communicate my ideas fluently. I can tell you how I built '}
        <a href="#" className="text-[#7c6a5e] hover:underline">(this.site)</a>
        {' from scratch & '}
        <a href="#" className="text-[#7c6a5e] hover:underline">(this.one)</a>
        {' && '}
        <a href="#" className="text-[#7c6a5e] hover:underline">(this.too)</a>
        {'.'}
      </span>
    ),
    ctaLabel: 'For Everyone',
    customOffset: '9ch', // "simple" aligns under "highly"
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSecondaryCTA = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 pb-0 bg-white">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 text-center mt-[7rem]">
        {/* Animated Icon */}
        <AnimatedIcon className="mb-8 text-gray-900" />
        
        {/* Heading - Staggered/Cascading Layout */}
        <h1 
          className="mb-6"
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
            textAlign: 'center',
            lineHeight: '1.2'
          }}
        >
          {currentSlide.heading.split('\n').map((line, index) => {
            // Use custom offset if provided, otherwise use default responsive offsets
            const offsetClass = currentSlide.customOffset
              ? `ml-0 sm:ml-[${currentSlide.customOffset}]`
              : 'ml-0 sm:ml-[10ch] md:ml-[12ch] lg:ml-[8ch]';
            
            return (
              <span
                key={index}
                className={`block mb-[10px]  ${index === 1 ? offsetClass : ''}`}
              >
                {line}
              </span>
            );
          })}
        </h1>

        {/* Bio */}
        <div className="min-h-[5rem] mb-8 max-w-xl mx-auto">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
            {currentSlide.bio}
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeSlide
                  ? 'w-3 h-3 bg-gray-800' :'w-2.5 h-2.5 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-gray-900 text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            Contact Me
          </a>
          <button
            onClick={handleSecondaryCTA}
            className="flex items-center gap-2 border border-gray-300 text-gray-800 text-sm font-medium px-8 py-3 rounded-full hover:border-gray-500 transition-colors bg-white"
          >
            {currentSlide.ctaLabel}
            <span className="text-base">→</span>
          </button>
        </div>
      </div>

      {/* Footer social links */}
      <div className="w-full flex items-center justify-center gap-6 py-8 mt-4">
        <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">SAY HELLO</span>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}