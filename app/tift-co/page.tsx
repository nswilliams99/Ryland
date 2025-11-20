import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tift County Services",
  description: "Professional waste management and environmental services throughout Tift County, Georgia. Commercial and residential solutions for all communities.",
};

export default function TiftCounty() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-700 to-accent-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Tift County Services
          </h1>
          <p className="text-xl text-accent-100 max-w-3xl">
            Serving all of Tift County with professional waste management solutions. 
            From small communities to large commercial operations, we've got you covered.
          </p>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service Area
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ryland Environmental proudly serves communities throughout Tift County, 
              providing reliable waste management services to residential and commercial customers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Tifton",
              "Omega",
              "Ty Ty",
              "Brookfield",
              "Eldorado",
              "Chula",
              "Unionville",
              "And surrounding areas"
            ].map((area) => (
              <div key={area} className="bg-accent-50 rounded-lg p-4 text-center">
                <svg className="w-8 h-8 text-accent-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-semibold text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Commercial Waste Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide customized waste management programs for businesses, 
                institutions, and organizations throughout Tift County. Our commercial 
                services are designed to meet your specific needs and schedule.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-accent-600 mr-3">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Container Options</h3>
                    <p className="text-gray-600">2-yard to 8-yard dumpsters, compactors, and specialized containers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-accent-600 mr-3">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customized Pickup Schedules</h3>
                    <p className="text-gray-600">Daily, weekly, or on-call service to match your business needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-accent-600 mr-3">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Recycling Programs</h3>
                    <p className="text-gray-600">Commercial recycling to reduce costs and environmental impact</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Restaurants", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
                  { name: "Retail Stores", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
                  { name: "Hotels", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                  { name: "Schools", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
                  { name: "Medical Facilities", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                  { name: "Manufacturing", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
                  { name: "Apartments", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                  { name: "Offices", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                ].map((industry) => (
                  <div key={industry.name} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-accent-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={industry.icon} />
                    </svg>
                    <span className="text-sm text-gray-700">{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roll-Off Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Roll-Off Container Rentals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Perfect for construction projects, home renovations, estate cleanouts, 
              and large-scale cleanup jobs throughout Tift County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8">
              <div className="text-4xl font-bold text-accent-600 mb-2">10-Yard</div>
              <p className="text-gray-700 mb-4">Ideal for small renovations and cleanouts</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  12' x 8' x 3.5'
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  3-4 pickup truck loads
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl p-8 transform md:scale-105 shadow-lg">
              <div className="text-4xl font-bold text-accent-700 mb-2">20-Yard</div>
              <p className="text-gray-800 mb-4 font-semibold">Most Popular</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  22' x 8' x 4.5'
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  6-8 pickup truck loads
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8">
              <div className="text-4xl font-bold text-accent-600 mb-2">30-Yard</div>
              <p className="text-gray-700 mb-4">For major construction and demolition</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  22' x 8' x 6'
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  9-12 pickup truck loads
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Construction Debris</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized handling of construction and demolition waste including concrete, 
                wood, metal, and building materials.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-accent-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Proper sorting and disposal
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-accent-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compliance with regulations
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Event Waste Management</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Temporary waste solutions for festivals, fairs, sporting events, 
                and special occasions throughout Tift County.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-accent-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Portable containers
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-accent-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible scheduling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Serving All of Tift County
          </h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
            Whether you're in Tifton, Omega, Ty Ty, or anywhere in between, 
            Ryland Environmental is here to serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-accent-600 shadow-sm hover:bg-accent-50 transition-colors"
            >
              Request Service
            </Link>
            <Link
              href="/tifton-trash"
              className="inline-flex items-center justify-center rounded-md bg-accent-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-400 border-2 border-white transition-colors"
            >
              View Tifton Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
