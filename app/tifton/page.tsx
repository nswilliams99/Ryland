import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Waste Management Tifton GA | Ryland Environmental",
  description: "Residential trash, commercial dumpsters, roll-off rentals, and free recycling in Tifton GA. Serving City of Tifton and Tift County. Call (229) 382-4411.",
};

export default function TiftonPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            Tifton Office
          </h1>
          <p className="text-2xl text-primary-100 mb-2">Waste Management Services</p>
          <p className="text-xl text-primary-200 max-w-3xl mb-8">
            Serving the City of Tifton and Tift County
          </p>
          <a href="tel:229-382-4411" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
            <span>📞</span> (229) 382-4411
          </a>
        </div>
      </section>

      {/* Our Services - 4 Cards */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Choose the service you need</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Residential */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Residential Trash Service</h3>
              <p className="text-gray-600 mb-2 flex-grow">Weekly curbside pickup for City of Tifton residents</p>
              <p className="text-primary-600 text-sm font-medium mb-4">Service through City of Tifton utilities</p>
              <Link
                href="/tifton/residential"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Commercial */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Dumpsters</h3>
              <p className="text-gray-600 mb-2 flex-grow">4, 6, and 8 yard dumpsters for businesses</p>
              <p className="text-primary-600 text-sm font-medium mb-4">City of Tifton only</p>
              <Link
                href="/tifton/commercial"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Roll-Off & Industrial */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Roll-Off & Industrial</h3>
              <p className="text-gray-600 mb-2 flex-grow">Dumpster rentals, compactors, scheduled service</p>
              <p className="text-primary-600 text-sm font-medium mb-4">Serving ALL of Tift County</p>
              <Link
                href="/tifton/roll-off"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Recycling */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Recycling Drop-Off</h3>
              <p className="text-gray-600 mb-2 flex-grow">Drop off recyclables at Carpenter Road</p>
              <p className="text-primary-600 text-sm font-medium mb-4">City of Tifton residents</p>
              <Link
                href="/recycling"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* City of Tifton */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">City of Tifton</h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">Full-service waste management:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Residential curbside pickup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Commercial dumpsters
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Roll-off rentals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Free recycling drop-off
                </li>
              </ul>
            </div>

            {/* Tift County */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tift County (Outside City)</h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">Roll-off and industrial services:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Roll-off dumpster rentals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Compactors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Scheduled industrial service
                </li>
              </ul>
              <Link
                href="/tift-county"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                View Tift County services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">Ryland Environmental - Tifton Office</p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">2508 Carpenter Road South</p>
                  <p className="text-gray-600">Tifton, GA 31793</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:229-382-4411" className="text-2xl font-bold text-primary-600 hover:text-primary-700">(229) 382-4411</a>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Friday</p>
                  <p className="text-gray-600">8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <a 
                  href="https://maps.google.com/?q=2508+Carpenter+Road+South+Tifton+GA+31793"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors text-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Have Questions? */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-6">Find answers about services, pickup schedules, billing, and more.</p>
          <Link
            href="/tifton/faq"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            View Frequently Asked Questions
          </Link>
        </div>
      </section>
    </>
  );
}
