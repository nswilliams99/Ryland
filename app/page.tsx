import type { Metadata } from "next";
import Link from "next/link";
import ServicesCarousel from "./components/ServicesCarousel";
import MyRylandSection from "./components/MyRylandSection";
import OfficeLocations from "./components/OfficeLocations";

export const metadata: Metadata = {
  title: "Ryland Environmental | Waste Management & Recycling Services",
  description: "Family owned since 2014. Waste management and recycling services for Georgia. Residential, commercial, roll-off dumpster rental, and municipal services.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Waste Management & Recycling Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
              Family owned since 2014. You're not just a number, you're our neighbor.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
              >
                Find Your Service Area
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Finder */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your address or zip code..."
              className="flex-1 rounded-full border border-gray-300 px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-accent-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* My Ryland & More */}
      <MyRylandSection />

      {/* Find Your Local Office */}
      <OfficeLocations />

      {/* Need Help? Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Take care of your issue online or connect with our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
            >
              Contact Support
            </Link>
            <a
              href="tel:229-382-4411"
              className="text-lg font-semibold text-primary-600 hover:text-primary-700"
            >
              (229) 382-4411
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
