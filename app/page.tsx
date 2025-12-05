import type { Metadata } from "next";
import Link from "next/link";
import ServicesCarousel from "./components/ServicesCarousel";
import MyRylandSection from "./components/MyRylandSection";
import OfficeLocations from "./components/OfficeLocations";
import HeroButtons from "./components/HeroButtons";

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
            <HeroButtons />
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
