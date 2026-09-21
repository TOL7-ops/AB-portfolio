"use client";

import { useEffect, useState } from "react";

interface AnimatedIconProps {
  className?: string;
}

function AnimatedIcon({ className = "" }: AnimatedIconProps) {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Icon animation cycle
  useEffect(() => {
    // Initial delay before first animation
    const initialTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 300);

    // Cycle through icons every 4 seconds
    const interval = setInterval(() => {
      setIsAnimating(false);
      
      setTimeout(() => {
        setCurrentIcon((prev) => (prev + 1) % 3); // Cycle through 3 icon variants
        setIsAnimating(true);
      }, 400); // Brief pause between transitions
    }, 4000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Icon container with slide-in animation */}
      <div
        key={currentIcon}
        className={`transition-all duration-700 ease-out ${
          isAnimating
            ? "translate-y-0 opacity-100"
            : "-translate-y-12 opacity-0"
        }`}
      >
        {currentIcon === 0 && (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
          >
            {/* Stack/Layers icon */}
            <rect x="12" y="28" width="24" height="4" rx="2" fill="currentColor" />
            <rect x="8" y="22" width="32" height="4" rx="2" fill="currentColor" />
            <rect x="12" y="16" width="24" height="4" rx="2" fill="currentColor" />
          </svg>
        )}
        
        {currentIcon === 1 && (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
          >
            {/* Grid/Apps icon */}
            <rect x="14" y="14" width="6" height="6" rx="1.5" fill="currentColor" />
            <rect x="24" y="14" width="6" height="6" rx="1.5" fill="currentColor" />
            <rect x="14" y="24" width="6" height="6" rx="1.5" fill="currentColor" />
            <rect x="24" y="24" width="6" height="6" rx="1.5" fill="currentColor" />
          </svg>
        )}
        
        {currentIcon === 2 && (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
          >
            {/* Sparkle/Star icon */}
            <path
              d="M24 12L26.472 19.528L34 22L26.472 24.472L24 32L21.528 24.472L14 22L21.528 19.528L24 12Z"
              fill="currentColor"
            />
            <path
              d="M32 16L33.236 19.764L37 21L33.236 22.236L32 26L30.764 22.236L27 21L30.764 19.764L32 16Z"
              fill="currentColor"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default AnimatedIcon;
