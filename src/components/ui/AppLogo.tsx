'use client';

import React, { memo } from 'react';

export function BrandLogoMark({ className = "w-16 h-16 sm:w-[72px] sm:h-[72px]" }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-[20px] sm:rounded-[22px] bg-[#F5F5F7] p-3 sm:p-3.5 flex items-center justify-center flex-shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-black/[0.04]`}
    >
      <svg
        viewBox="0 0 52 52"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left column: 4 stacked color bars */}
        {/* Bar 1: Mustard Yellow with rounded top-left corner */}
        <path
          d="M6 10C6 7.79086 7.79086 6 10 6H24V14H6V10Z"
          fill="#C4A647"
        />
        {/* Bar 2: Coral / Salmon Pink */}
        <rect x="6" y="16" width="18" height="8" fill="#E58885" />
        {/* Bar 3: Orchid / Magenta Purple */}
        <rect x="6" y="26" width="18" height="8" fill="#B974AE" />
        {/* Bar 4: Cool Slate / Grey with rounded bottom-left corner */}
        <path
          d="M6 36H24V44H10C7.79086 44 6 42.2091 6 40V36Z"
          fill="#98A1A8"
        />

        {/* Right column: Soft Lavender / Lilac Pill Shape */}
        <path
          d="M28 16H38C42.4183 16 46 19.5817 46 24V24C46 28.4183 42.4183 32 38 32H28V16Z"
          fill="#D8C4E8"
        />
      </svg>
    </div>
  );
}

const AppLogo = memo(function AppLogo({
  className = '',
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div className={`cursor-pointer ${className}`} onClick={onClick}>
      <BrandLogoMark />
    </div>
  );
});

export default AppLogo;
