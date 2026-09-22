'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[55rem] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
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

        {/* Desktop Nav links - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Hamburger button - visible on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <AppIcon name="X" size={24} />
          ) : (
            <AppIcon name="Menu" size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu - slides down when open */}
      <div
        className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-4">
          <Link 
            href="#projects" 
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            onClick={closeMenu}
          >
            Project
          </Link>
          <Link 
            href="#about" 
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            href="#contact" 
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a 
            href="https://docs.google.com/document/d/1UKovLviOsYOcy3R3mzYDpuiNb9keo2ygue_DtGtQFzo/export?format=pdf" 
            download
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Get CV
          </a>
        </nav>
      </div>
    </header>
  );
}
