import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tifton Trash Services",
  description: "Reliable residential and commercial trash pickup services in Tifton, Georgia. Weekly curbside collection, recycling programs, and yard waste removal.",
};

export default function TiftonTrash() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Tifton Trash Services
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Comprehensive waste management solutions for Tifton residents and businesses. 
            Reliable, affordable, and environmentally responsible.
          </p>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Residential Trash Pickup
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our residential trash collection service in Tifton provides convenient, 
                reliable weekly curbside pickup for homeowners throughout the city.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Weekly Pickup:</strong> Scheduled collection every week on your designated day</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Cart Provided:</strong> Standard 96-gallon cart included with service</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Holiday Schedule:</strong> We provide advance notice of any holiday schedule changes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700"><strong>Affordable Rates:</strong> Competitive monthly pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pickup Schedule</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">North Tifton</p>
                  <p className="text-gray-600">Monday & Thursday</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">South Tifton</p>
                  <p className="text-gray-600">Tuesday & Friday</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">East Tifton</p>
                  <p className="text-gray-600">Wednesday</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-semibold text-gray-900">West Tifton</p>
                  <p className="text-gray-600">Wednesday</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                *Schedule may vary by specific address. Contact us to confirm your pickup day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Program */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recycling Program
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Help protect our environment with our comprehensive recycling service. 
              Bi-weekly curbside recycling pickup for Tifton residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Paper & Cardboard</h3>
              <p className="text-sm text-gray-600">Newspapers, magazines, cardboard boxes, office paper</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Plastics</h3>
              <p className="text-sm text-gray-600">Bottles, containers, jugs (types #1-7)</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Glass</h3>
              <p className="text-sm text-gray-600">Bottles and jars (all colors)</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Metal</h3>
              <p className="text-sm text-gray-600">Aluminum cans, tin cans, metal containers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Yard Waste */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4">Seasonal Collection</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Spring: April - May</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Summer: June - August</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fall: October - December</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Yard Waste Collection
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Seasonal yard waste collection helps keep your property looking its best. 
                We handle leaves, branches, grass clippings, and more.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Leaves and grass clippings in biodegradable bags</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Branches up to 4 feet long, bundled and tied</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Plants, shrub trimmings, and garden waste</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Sign up for reliable trash service in Tifton today. 
            Contact us for a free quote and schedule your first pickup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 transition-colors"
            >
              Request Quote
            </Link>
            <Link
              href="tel:+1234567890"
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 border-2 border-white transition-colors"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
