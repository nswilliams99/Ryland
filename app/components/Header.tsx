"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-3">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Ryland Environmental" className="h-10 w-auto" />
            <span className="text-lg font-bold text-gray-900 hidden sm:inline">Ryland Environmental</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/" className="p-2 text-gray-600 hover:text-primary-600 transition-colors" aria-label="Search">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link href="/" className="p-2 text-gray-600 hover:text-primary-600 transition-colors" aria-label="Location">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
            <Link href="/" className="p-2 text-gray-600 hover:text-primary-600 transition-colors" aria-label="Account">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
