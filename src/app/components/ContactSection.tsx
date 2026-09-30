'use client';

import React, { useRef, useEffect } from 'react';
import { BrandLogoMark } from '@/components/ui/AppLogo';
import PointerIcon from '@/components/ui/PointerIcon';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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
    <section 
      id="contact" 
      className="w-full py-16 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24 bg-white overflow-hidden"
    >
      <div ref={sectionRef} className="w-full max-w-4xl mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Top: Brand Logo + Cascading Heading */}
        <div className="scroll-reveal flex items-start gap-4 sm:gap-6">
          {/* Logo mark */}
          <BrandLogoMark className="w-16 h-16 sm:w-[76px] sm:h-[76px]" />

          {/* Heading */}
          <div className="flex-1">
            <h2 
              className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-black"
              style={{
                fontWeight: 500,
                fontStyle: 'normal',
                fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
                letterSpacing: '0em',
                lineHeight: '1.18'
              }}
            >
              <span className="block">Web &amp; Mobile App</span>
              <span className="block ml-[4ch] sm:ml-[6ch] md:ml-[7ch]">
                Design Expert
              </span>
            </h2>
          </div>
        </div>

        {/* Middle: Description + Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12 mt-2 sm:mt-4">
          {/* Left: Description */}
          <div className="scroll-reveal stagger-1 max-w-[420px]">
            <p 
              className="text-black font-medium text-[17px] sm:text-[18px] leading-snug"
              style={{ letterSpacing: '0em' }}
            >
              Ready for a design adventure, or need product design advice? Ping me for fun collaboration
            </p>
          </div>

          {/* Right: Drop a message button */}
          <div className="scroll-reveal stagger-2 flex-shrink-0">
            <a
              href="mailto:eric@design.studio"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-4 sm:py-4.5 rounded-[14px] bg-[#444444] hover:bg-[#333333] transition-colors border border-black/10 shadow-sm group"
            >
              <span className="text-white font-medium text-[16px] sm:text-[17px] whitespace-nowrap">
                Drop a message
              </span>
            </a>
          </div>
        </div>

        {/* Bottom: SAY HELLO + Socials & Metallic Pointer */}
        <div className="scroll-reveal stagger-3 relative flex items-center justify-between mt-4 sm:mt-8 pt-2">
          {/* Social links */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-widest text-black">
              SAY HELLO
            </span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-400/80 bg-white flex items-center justify-center hover:border-black transition-colors"
            >
              <span className="text-[12px] sm:text-[13px] font-bold text-black leading-none font-sans">
                in
              </span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) profile"
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-black">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Pointer icon */}
          <div className="pointer-events-none absolute left-[45%] sm:left-[50%] -top-4 sm:-top-6 opacity-90">
            <PointerIcon width={68} height={68} />
          </div>
        </div>
      </div>
    </section>
  );
}
