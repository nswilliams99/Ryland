import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ryland Environmental - Tifton Waste Management & Roll Off Dumpster Rental",
  description: "Professional waste management and roll off dumpster rental in Tifton and Tift County, Georgia. Rolloff dumpsters for rent, exclusive trash service, and roll off rental near me. 20-40 yard roll off dumpsters near me.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Professional Waste Management
              <span className="block text-primary-200">for Tifton & Tift County</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-primary-100">
              Ryland Environmental is your trusted partner for residential, commercial, and industrial waste solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/tifton"
                className="rounded-md bg-white px-8 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 transition-colors"
              >
                City Services
              </Link>
              <Link
                href="/tift-co"
                className="rounded-md bg-primary-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 border-2 border-white transition-colors"
              >
                County Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive waste management solutions for homes and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Residential */}
            <div className="relative rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white">
              <div className="h-48 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
                <img src="/images/96-gallon-cart.png" alt="96-Gallon Residential Cart" className="h-full w-auto object-contain" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential Service</h3>
                <p className="text-gray-600 mb-4">
                  Exclusive trash service provider for City of Tifton homes. Weekly curbside pickup with 96-gallon carts.
                </p>
                <div className="flex flex-col gap-2">
                  <Link href="/tifton#signup" className="text-primary-600 hover:text-primary-700 font-medium">
                    Sign Up Today →
                  </Link>
                  <Link href="/tifton#holiday-schedule" className="text-gray-600 hover:text-gray-700 font-medium text-sm">
                    View Holiday Schedule →
                  </Link>
                </div>
              </div>
            </div>

            {/* Commercial */}
            <div className="relative rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white">
              <div className="h-48 bg-gradient-to-br from-accent-50 to-accent-100 flex items-center justify-center p-4">
                <img src="/images/6-yard-frontload.png" alt="6-Yard Front-Load Dumpster" className="h-full w-auto object-contain" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Business waste services inside city limits. 96-gallon carts and 4, 6, 8-yard front-load dumpsters.
                </p>
                <Link href="/tifton" className="text-accent-600 hover:text-accent-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Roll-offs */}
            <div className="relative rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white">
              <div className="h-48 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
                <img src="/images/20-yard-rolloff.jpg" alt="Roll Off Dumpster Rental - Rolloff Dumpsters for Rent" className="h-full w-auto object-contain" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Roll Off Dumpster Rental</h3>
                <p className="text-gray-600 mb-4">
                  Roll off rental for construction and large cleanup projects. Rolloff dumpsters for rent - 20, 30, and 40-yard roll off dumpsters near me.
                </p>
                <Link href="/tift-co" className="text-primary-600 hover:text-primary-700 font-medium">
                  Get a Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving Tifton & Tift County
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ryland Environmental proudly serves the Tifton area with reliable waste management services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inside City Limits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Residential trash service (exclusive)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Commercial carts & dumpsters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Roll-off containers</span>
                </li>
              </ul>
              <Link href="/tifton" className="mt-6 inline-block text-primary-600 hover:text-primary-700 font-semibold">
                View City Services →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tift County (Outside City)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Roll-off containers only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Construction & demolition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Large cleanup projects</span>
                </li>
              </ul>
              <Link href="/tift-co" className="mt-6 inline-block text-accent-600 hover:text-accent-700 font-semibold">
                View County Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for reliable waste management services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tifton#signup"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 transition-colors"
            >
              Sign Up for City Service
            </Link>
            <a
              href="tel:+12293824411"
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 border-2 border-white transition-colors"
            >
              Call (229) 382-4411
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
