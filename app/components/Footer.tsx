"use client";

import Link from "next/link";
import { useState } from "react";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}

function AccordionSection({ title, children }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left text-white font-medium hover:text-gray-300 transition-colors"
      >
        <span>{title}</span>
        <svg
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="pb-4 text-gray-400">{children}</div>}
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:hidden">
          <AccordionSection title="Products & Services">
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Residential Pickup</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Commercial Dumpsters</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Roll-Off Rental</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Municipal Services</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Transfer Station</Link></li>
            </ul>
          </AccordionSection>
          
          <AccordionSection title="Service Areas">
            <ul className="space-y-2">
              <li><Link href="/tifton" className="hover:text-white transition-colors">Tifton, GA</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Augusta, GA</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Savannah, GA</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Macon, GA</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">View All Locations</Link></li>
            </ul>
          </AccordionSection>
          
          <AccordionSection title="Our Company">
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </AccordionSection>
          
          <AccordionSection title="Quick Info">
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><a href="tel:229-382-4411" className="hover:text-white transition-colors">(229) 382-4411</a></li>
              <li><span>Mon – Fri 8am-5pm</span></li>
            </ul>
          </AccordionSection>
        </div>

        <div className="hidden md:grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Products & Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Residential Pickup</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Commercial Dumpsters</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Roll-Off Rental</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Municipal Services</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Transfer Station</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/tifton" className="hover:text-white transition-colors">Tifton, GA</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Augusta, GA</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Savannah, GA</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Macon, GA</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">View All Locations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><a href="tel:229-382-4411" className="hover:text-white transition-colors">(229) 382-4411</a></li>
              <li><span>Mon – Fri 8am-5pm</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/rylandenvironmentalinc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Ryland Environmental. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
