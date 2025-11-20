import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roll Off Dumpster Rental - Tift County | Rolloff Dumpsters for Rent",
  description: "Roll off dumpster rental in Tift County, Georgia. Rolloff dumpsters for rent near me - 20, 30, 40-yard roll off rental for construction, demolition, and cleanup projects. Affordable roll off dumpsters near me.",
};

export default function TiftCounty() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-accent-700 to-accent-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Roll Off Dumpster Rental - Tift County
          </h1>
          <p className="text-xl text-accent-100 max-w-3xl">
            Rolloff dumpsters for rent near me - Professional roll off rental for construction, demolition, and cleanup projects outside Tifton city limits
          </p>
        </div>
      </section>

      {/* Service Notice */}
      <section className="py-12 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-accent-600">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">Roll Off Dumpsters Near Me - Outside City Limits</h3>
                <p className="mt-2 text-gray-600">
                  For properties outside Tifton city limits, Ryland Environmental provides roll off dumpster rental services. Our rolloff dumpsters for rent are perfect for all your project needs.
                  <Link href="/tifton" className="ml-1 text-accent-600 hover:text-accent-700 font-medium">
                    View City of Tifton services →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roll-off Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Roll Off Dumpster Rental Sizes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Affordable roll off rental options - Rolloff dumpsters for rent perfect for construction, demolition, renovation, and large cleanup projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 20 Yard */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <div className="text-center mb-4">
                <div className="inline-block px-4 py-2 bg-accent-600 text-white rounded-lg font-bold text-2xl">
                  20 Yard
                </div>
              </div>
              <div className="w-full h-48 bg-white rounded-lg mb-4 flex items-center justify-center p-4">
                <img src="/images/20-yard-rolloff.jpg" alt="20-Yard Roll Off Dumpster Rental - Rolloff Dumpsters for Rent" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small to Medium Projects</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Roof replacements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Deck removal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Garage cleanouts</span>
                </li>
              </ul>
            </div>

            {/* 30 Yard */}
            <div className="bg-accent-50 rounded-xl p-6 border-2 border-accent-300">
              <div className="text-center mb-4">
                <div className="inline-block px-4 py-2 bg-accent-700 text-white rounded-lg font-bold text-2xl">
                  30 Yard
                </div>
                <div className="mt-1 text-xs font-semibold text-accent-700">MOST POPULAR</div>
              </div>
              <div className="w-full h-48 bg-white rounded-lg mb-4 flex items-center justify-center p-4">
                <img src="/images/30-yard-rolloff.jpg" alt="30-Yard Roll Off Rental - Roll Off Dumpsters Near Me" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Large Projects</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Home additions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Major renovations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>New construction</span>
                </li>
              </ul>
            </div>

            {/* 40 Yard */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <div className="text-center mb-4">
                <div className="inline-block px-4 py-2 bg-accent-600 text-white rounded-lg font-bold text-2xl">
                  40 Yard
                </div>
              </div>
              <div className="w-full h-48 bg-white rounded-lg mb-4 flex items-center justify-center p-4">
                <img src="/images/40-yard-rolloff.jpg" alt="40-Yard Roll Off Dumpster Rental for Commercial Projects" className="h-full w-auto object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Projects</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Commercial demolition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Large construction sites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Industrial cleanups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Accept */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Accept</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Accepted Materials
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Construction debris</li>
                <li>• Demolition waste</li>
                <li>• Household junk</li>
                <li>• Yard waste</li>
                <li>• Furniture & appliances</li>
                <li>• Roofing materials</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Not Accepted
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hazardous materials</li>
                <li>• Chemicals & paint</li>
                <li>• Tires</li>
                <li>• Electronics</li>
                <li>• Batteries</li>
                <li>• Medical waste</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Roll Off Dumpster Rental Near Me?
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Contact Ryland Environmental for affordable roll off rental - Free quotes and fast delivery on all rolloff dumpsters for rent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12293824411"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-accent-600 shadow-sm hover:bg-accent-50 transition-colors"
            >
              Call (229) 382-4411
            </a>
            <Link
              href="/tifton"
              className="inline-flex items-center justify-center rounded-md bg-accent-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-400 border-2 border-white transition-colors"
            >
              View City Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
