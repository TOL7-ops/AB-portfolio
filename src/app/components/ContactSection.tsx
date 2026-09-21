'use client';

import React, { useRef, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
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
      className="w-full h-min flex flex-col justify-end items-start px-24 pb-48 pt-8 overflow-visible gap-14 bg-white"
    >
      <div ref={sectionRef} className="w-full max-w-[60rem] mx-auto flex flex-col gap-14">
        {/* Top section: Logo + Heading only */}
        <div className="flex items-start gap-8">
          <div className="scroll-reveal" style={{ width: '556px', height: '146px' }}>
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-min h-min flex flex-row justify-start items-start overflow-visible rounded-xl"
                style={{
                  padding: '12.148px',
                  backgroundColor: '#f4f4f4',
                  gap: '3.037px'
                }}
              >
                <AppLogo size={28} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="block">Web &amp; Mobile App</span>
              <span className="block ml-0 sm:ml-[8ch] md:ml-[9ch] lg:ml-[6ch]">
                <span className="italic">Design Expert</span>
              </span>
            </h2>
          </div>
        </div>

        {/* Bottom section: Description + Button (aligned horizontally) */}
        <div className="flex items-center  gap-[6rem]">
          {/* Left: Description */}
          <div className="scroll-reveal stagger-1" style={{ width: '436px' }}>
            <p 
              className="text-gray-900 font-medium whitespace-pre-wrap break-words"
              style={{ 
                fontSize: '18px',
                lineHeight: '1.2',
                letterSpacing: '0em'
              }}
            >
              Ready for a design adventure, or need product design advice? Ping me for fun collaboration
            </p>
          </div>

          {/* Right: Drop a message button with pointer */}
          <div className="scroll-reveal stagger-2 relative">
            <a
              href="mailto:eric@design.studio"
              className="inline-flex items-center justify-center gap-3 bg-gray-800 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-gray-700 transition-all text-base"
            >
              Drop a message
            </a>
            {/* Pointer icon positioned near button */}
            <div className="absolute -bottom-[7rem] right-[12rem] opacity-60">
              <PointerIcon width={72} height={72} />
            </div>
          </div>
        </div>

        {/* Social links section */}
        <div className="scroll-reveal stagger-3 flex items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Say Hello
          </span>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance profile"
            className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-gray-900 transition-colors group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-gray-600 group-hover:text-gray-900 transition-colors">
              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.483 1.827 1.466 2.239.759.313 1.619.195 2.338-.09L22 17zm-5.73-5.707c-.477-.556-1.242-.75-2.054-.75-.75 0-1.396.201-1.836.607-.301.272-.507.65-.607 1.143h4.63c-.052-.527-.259-.931-.133-1z"/>
            </svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) profile"
            className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-gray-900 transition-colors group"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-gray-600 group-hover:text-gray-900 transition-colors">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}