import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Waste Management & Dumpster Rental Tift County GA | Ryland Environmental",
  description: "Roll-off dumpsters, compactors, and industrial waste services throughout Tift County GA. Serving Tifton, Omega, Ty Ty, Chula. Call (229) 382-4411 for a free quote.",
};

export default function TiftCountyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Tift County" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Waste Services in Tift County, GA
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Roll-off dumpsters, compactors, and industrial waste solutions serving all of Tift County—including areas outside Tifton city limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tifton/roll-off"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg"
              >
                Get a Quote
              </Link>
              <a
                href="tel:229-382-4411"
                className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors text-lg border border-white/30"
              >
                Or call (229) 382-4411
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Clarification */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Where We Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inside City of Tifton */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Inside City of Tifton</h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">Full-service waste management:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Residential curbside pickup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Commercial dumpsters (4, 6, 8 yard)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Roll-off rentals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Industrial & compactors
                </li>
              </ul>
              <Link
                href="/tifton"
                className="inline-flex items-center justify-center w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View Tifton City Services
              </Link>
            </div>

            {/* Outside City Limits */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Outside City Limits (Tift County)</h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">Roll-off and industrial services:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Roll-off dumpster rentals (20, 30, 40 yard)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Compactors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Scheduled industrial pickup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Construction & demolition
                </li>
              </ul>
              <Link
                href="/tifton/roll-off"
                className="inline-flex items-center justify-center w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View Roll-Off & Industrial
              </Link>
            </div>
          </div>

          {/* Residential Notice for Outside City Limits */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-amber-800 font-medium">Looking for residential trash service outside Tifton city limits?</p>
                <p className="text-amber-700 text-sm mt-1">
                  Ryland Environmental does not provide residential curbside pickup outside the City of Tifton. For residential service in other areas of Tift County, contact the waste provider servicing your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* County Services Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Services Available County-Wide</h2>
            <p className="text-lg text-gray-600">Serving Tifton, Omega, Ty Ty, Chula, and all of Tift County</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Roll-Off Dumpsters */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Roll-Off Dumpsters</h3>
              <p className="text-gray-600 mb-6">
                Temporary rentals for construction, renovations, cleanouts, roofing, and demolition. 20, 30, and 40 yard sizes.
              </p>
              <Link
                href="/tifton/roll-off"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Compactors */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compactors</h3>
              <p className="text-gray-600 mb-6">
                Reduce waste volume up to 75%. Perfect for warehouses, manufacturing, and high-volume operations.
              </p>
              <Link
                href="/tifton/roll-off"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Get Quote
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Scheduled Industrial */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scheduled Industrial</h3>
              <p className="text-gray-600 mb-6">
                Ongoing service on your schedule—weekly, bi-weekly, or custom. For industrial facilities and large operations.
              </p>
              <Link
                href="/tifton/roll-off"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Get Quote
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Note for City Residents */}
      <section className="py-8 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border border-blue-200">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Live inside Tifton city limits?</h3>
              <p className="text-gray-600 mb-4">
                You have access to residential curbside pickup and commercial dumpster service—not just roll-offs.
              </p>
              <Link
                href="/tifton"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                View City of Tifton Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-16 bg-primary-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Need Service in Tift County?</h2>
              <p className="text-xl text-primary-100 mb-8">Call us for a free quote. We'll help you find the right solution.</p>
              <a href="tel:229-382-4411" className="text-4xl font-bold hover:text-primary-200 transition-colors block mb-2">
                (229) 382-4411
              </a>
              <p className="text-primary-200">Monday - Friday, 8am - 5pm</p>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select a service...</option>
                    <option value="rolloff">Roll-Off Rental</option>
                    <option value="compactor">Compactor</option>
                    <option value="industrial">Industrial Service</option>
                    <option value="notsure">Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Serving All of Tift County</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-4 text-center shadow-md border border-gray-200">
              <span className="font-semibold text-gray-900">Tifton</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md border border-gray-200">
              <span className="font-semibold text-gray-900">Omega</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md border border-gray-200">
              <span className="font-semibold text-gray-900">Ty Ty</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md border border-gray-200">
              <span className="font-semibold text-gray-900">Chula</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md border border-gray-200">
              <span className="font-semibold text-gray-900">Eldorado</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md border border-gray-200">
              <span className="font-semibold text-gray-900">+ More</span>
            </div>
          </div>
          <p className="text-center text-gray-600">
            Not sure if we service your area? Call <a href="tel:229-382-4411" className="text-primary-600 font-semibold">(229) 382-4411</a>
          </p>
        </div>
      </section>
    </>
  );
}
