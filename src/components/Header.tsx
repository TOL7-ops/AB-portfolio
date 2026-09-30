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
    <header className="fixed top-6 left-0 right-0 w-full z-50">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between gap-16 bg-white">
        {/* Left: Avatar + Home */}
        <Link href="/" className="flex items-center gap-3 -ml-6" onClick={closeMenu}>
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_14ff30f05-1763294027584.png"
              alt="Avatar"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="text-[16px] font-medium text-black hover:text-gray-600 transition-colors">
            Home
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-9 -mr-6">
          <Link
            href="/#projects"
            className="text-[16px] font-medium text-black hover:text-gray-600 transition-colors"
          >
            Project
          </Link>
          <Link
            href="/#about"
            className="text-[16px] font-medium text-black hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-[16px] font-medium text-black hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://docs.google.com/document/d/1UKovLviOsYOcy3R3mzYDpuiNb9keo2ygue_DtGtQFzo/export?format=pdf"
            download
            className="text-[16px] font-medium text-black hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get CV
          </a>
        </nav>

        {/* Mobile Hamburger button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <AppIcon name="X" size={22} />
          ) : (
            <AppIcon name="Menu" size={22} />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col max-w-2xl mx-auto px-6 py-4 gap-1">
          <Link
            href="/#projects"
            className="text-[16px] font-medium text-gray-900 hover:text-gray-600 transition-colors py-2"
            onClick={closeMenu}
          >
            Project
          </Link>
          <Link
            href="/#about"
            className="text-[16px] font-medium text-gray-500 hover:text-gray-900 transition-colors py-2"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="text-[16px] font-medium text-gray-500 hover:text-gray-900 transition-colors py-2"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a
            href="https://docs.google.com/document/d/1UKovLviOsYOcy3R3mzYDpuiNb9keo2ygue_DtGtQFzo/export?format=pdf"
            download
            className="text-[16px] font-medium text-gray-500 hover:text-gray-900 transition-colors py-2"
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
