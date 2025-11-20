"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/logo.png" alt="Ryland Environmental" className="h-10 w-auto" />
              <div className="text-xl font-bold text-gray-900">
                Ryland Environmental
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-base font-medium text-gray-900 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/tifton" className="text-base font-medium text-gray-900 hover:text-primary-600 transition-colors">
              City of Tifton
            </Link>
            <Link href="/tift-co" className="text-base font-medium text-gray-900 hover:text-primary-600 transition-colors">
              Tift County
            </Link>
            <Link 
              href="/#contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-2.5 text-base font-medium text-white hover:bg-primary-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/tifton" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              City of Tifton
            </Link>
            <Link 
              href="/tift-co" 
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tift County
            </Link>
            <Link 
              href="/#contact" 
              className="block px-3 py-2 text-base font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-md text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
