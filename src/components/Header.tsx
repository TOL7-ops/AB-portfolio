'use client';

import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Left: Avatar + Home label */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_14ff30f05-1763294027584.png"
              alt="Eric's profile avatar"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority />
            
          </div>
          <Link href="/" className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors">
            Home
          </Link>
        </div>

        {/* Right: Nav links */}
        <nav className="flex items-center gap-8">
          <Link href="#projects" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
            Project
          </Link>
          <Link href="#about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
            Contact
          </Link>
          <a 
            href="https://docs.google.com/document/d/1UKovLviOsYOcy3R3mzYDpuiNb9keo2ygue_DtGtQFzo/export?format=pdf" 
            download
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer">
            Get CV
          </a>
        </nav>
      </div>
    </header>);

}