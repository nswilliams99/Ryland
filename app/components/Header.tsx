"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Residential", href: "/tifton/residential" },
  { name: "Commercial", href: "/tifton/commercial" },
  { name: "Rolloffs", href: "/tifton/roll-off" },
  { name: "Locations", href: "/#office-locations" },
  { name: "Contact", href: "/tifton#contact" },
  { name: "Order Service", href: "https://app.trashjoes.com/h/ryland", external: true },
  { name: "Pay My Bill", href: "/pay-my-bill" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-3">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Ryland Environmental" className="h-10 w-auto" />
            <span className="text-lg font-bold text-gray-900 hidden sm:inline">Ryland Environmental</span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
