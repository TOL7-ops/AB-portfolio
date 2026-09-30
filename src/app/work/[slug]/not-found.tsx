'use client';

import React from 'react';
import Link from 'next/link';
import AppIcon from '@/components/ui/AppIcon';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
          </div>
        </div>

        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          Project Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          This project doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            <AppIcon name="House" size={16} />
            Back to Home
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
