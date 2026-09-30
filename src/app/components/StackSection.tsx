'use client';

import React, { useEffect, useRef } from 'react';

interface Tool {
  name: string;
  category: string;
  url?: string;
  renderIcon: () => React.ReactNode;
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 38 57" className="w-5 h-8 sm:w-[22px] sm:h-[33px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

function NotionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
        fill="#000000"
      />
    </svg>
  );
}

function FramerIcon() {
  return (
    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black rounded-[8px] flex items-center justify-center flex-shrink-0">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    </div>
  );
}

function JiraIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.42 1.458a1.144 1.144 0 0 0-1.618 0l-7.73 7.73a7.487 7.487 0 0 0 0 10.588l4.475 4.474a1.144 1.144 0 0 0 1.618 0l7.73-7.73a7.487 7.487 0 0 0 0-10.588l-4.475-4.474z"
        fill="#2684FF"
      />
      <path
        d="M14.61 7.155a7.488 7.488 0 0 0-4.475 2.193l-7.73 7.73a1.144 1.144 0 0 0 0 1.618l4.475 4.475a7.487 7.487 0 0 0 10.588 0l7.73-7.73a1.144 1.144 0 0 0 0-1.618l-4.475-4.475a7.487 7.487 0 0 0-6.113-2.193z"
        fill="#0052CC"
      />
    </svg>
  );
}

function WebflowIcon() {
  return (
    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#146EF5] rounded-[8px] flex items-center justify-center flex-shrink-0">
      <svg width="19" height="19" viewBox="0 0 24 24" fill="white">
        <path d="M19.984 6.756c-1.36 0-2.43 1.01-2.923 2.198l-2.073 5.378-1.92-5.385c-.48-1.182-1.547-2.191-2.903-2.191s-2.423 1.009-2.903 2.19l-4.265 11.054h3.693l1.83-5.263 1.835 5.263h3.407l3.666-9.756.008 9.756h3.468V6.756h-3.823z" />
      </svg>
    </div>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" fill="#E01E5A" />
      <path d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A" />
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36C5F0" />
      <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0" />
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" fill="#2EB67D" />
      <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D" />
      <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ECB22E" />
      <path d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E" />
    </svg>
  );
}

const tools: Tool[] = [
  {
    name: 'Figma',
    category: 'Interface Design Tool',
    url: 'https://www.figma.com',
    renderIcon: FigmaIcon,
  },
  {
    name: 'Notion',
    category: 'Productivity Tool',
    url: 'https://www.notion.so',
    renderIcon: NotionIcon,
  },
  {
    name: 'Framer',
    category: 'Interface Design Tool',
    url: 'https://www.framer.com',
    renderIcon: FramerIcon,
  },
  {
    name: 'Jira',
    category: 'Interface Design Tool',
    url: 'https://www.atlassian.com/software/jira',
    renderIcon: JiraIcon,
  },
  {
    name: 'Webflow',
    category: 'Interface Design Tool',
    url: 'https://webflow.com',
    renderIcon: WebflowIcon,
  },
  {
    name: 'Slack',
    category: 'Productivity Tool',
    url: 'https://slack.com',
    renderIcon: SlackIcon,
  },
];

function ToolRow({ tool, index }: { tool: Tool; index: number }) {
  const rowRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={rowRef}
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="scroll-reveal group flex items-center justify-between py-3.5 px-3 -mx-3 hover:bg-gray-50/80 rounded-xl transition-all duration-200 cursor-pointer"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Left: Icon + Info */}
      <div className="flex items-center gap-4">
        {/* Tool icon */}
        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
          {tool.renderIcon()}
        </div>
        {/* Tool info */}
        <div className="flex flex-col">
          <div className="font-semibold text-black text-[16px] sm:text-[17px] leading-tight">
            {tool.name}
          </div>
          <div className="text-gray-500 text-[14px] sm:text-[15px] leading-normal font-normal mt-0.5">
            {tool.category}
          </div>
        </div>
      </div>

      {/* Right: Arrow */}
      <div className="text-gray-400 group-hover:text-black group-hover:translate-x-1.5 transition-all duration-200 flex-shrink-0 pr-1">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </div>
    </a>
  );
}

export default function StackSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
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
    <section id="stack" className="py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="mb-8 sm:mb-10 md:mb-12">
          <h2
            className="mb-2 sm:mb-3 text-3xl sm:text-4xl md:text-[44px]"
            style={{
              fontWeight: 500,
              fontStyle: 'normal',
              fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
              color: '#000000',
              letterSpacing: '0em',
              lineHeight: '1.2',
            }}
          >
            My Stack
          </h2>
          <p className="text-black text-[15px] sm:text-[16px] leading-relaxed">
            Commitment to staying updated with the latest design trends and techniques.
          </p>
        </div>

        {/* 2-column grid of tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-2 sm:gap-y-3 max-w-4xl">
          {tools.map((tool, index) => (
            <ToolRow key={tool.name} tool={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}