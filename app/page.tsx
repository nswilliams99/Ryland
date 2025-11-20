import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Ryland Environmental provides professional waste management, trash pickup, and recycling services in Tifton and Tift County, Georgia. Reliable, eco-friendly solutions for residential and commercial needs.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ryland Environmental",
    "image": "https://www.rylandenvironmental.us/logo.png",
    "@id": "https://www.rylandenvironmental.us/",
    "url": "https://www.rylandenvironmental.us/",
    "telephone": "+1234567890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Tifton",
      "addressRegion": "GA",
      "postalCode": "",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.4504,
      "longitude": -83.5085
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/rylandenvironmental"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Tifton"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Tift County"
      }
    ],
    "serviceType": ["Waste Management", "Trash Pickup", "Recycling Services", "Environmental Solutions"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Professional Waste Management
              <span className="block text-primary-200">for Tifton & Tift County</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-primary-100">
              Reliable trash pickup, recycling services, and environmental solutions 
              for residential and commercial customers throughout Georgia.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="#services"
                className="rounded-md bg-white px-8 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-primary-50 transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="#contact"
                className="rounded-md bg-primary-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-400 border-2 border-white transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive waste management solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Residential Trash Pickup */}
            <div className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential Trash Pickup</h3>
              <p className="text-gray-600">
                Weekly curbside collection for homes throughout Tifton and Tift County. 
                Reliable service you can count on.
              </p>
              <Link href="/tifton-trash" className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Commercial Services */}
            <div className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-100 text-accent-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Waste Solutions</h3>
              <p className="text-gray-600">
                Customized waste management programs for businesses of all sizes. 
                Flexible scheduling and container options.
              </p>
              <Link href="/tift-co" className="mt-4 inline-flex items-center text-accent-600 hover:text-accent-700 font-medium">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Recycling Services */}
            <div className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Recycling Programs</h3>
              <p className="text-gray-600">
                Comprehensive recycling services to reduce waste and protect our environment. 
                Making sustainability easy.
              </p>
              <Link href="#contact" className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Roll-Off Containers */}
            <div className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-100 text-accent-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Roll-Off Containers</h3>
              <p className="text-gray-600">
                Dumpster rentals for construction, renovation, and large cleanup projects. 
                Multiple sizes available.
              </p>
              <Link href="#contact" className="mt-4 inline-flex items-center text-accent-600 hover:text-accent-700 font-medium">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Special Waste */}
            <div className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Waste Handling</h3>
              <p className="text-gray-600">
                Safe disposal of hazardous materials and special waste items. 
                Compliant with all environmental regulations.
              </p>
              <Link href="#contact" className="mt-4 inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Yard Waste */}
            <div className="relative rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-100 text-accent-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Yard Waste Collection</h3>
              <p className="text-gray-600">
                Seasonal yard waste pickup including leaves, branches, and grass clippings. 
                Keep your property looking great.
              </p>
              <Link href="/tifton-trash" className="mt-4 inline-flex items-center text-accent-600 hover:text-accent-700 font-medium">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Ryland Environmental?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary-600 text-white mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Service</h3>
              <p className="text-gray-600">On-time pickup, every time. We value your schedule.</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary-600 text-white mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Committed to sustainable waste management practices.</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary-600 text-white mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of Tifton and Tift County needs.</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary-600 text-white mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">Affordable rates without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to get started with reliable waste management services? 
                Contact us today for a free quote or to schedule service.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Phone</p>
                    <p className="mt-1 text-base text-gray-600">
                      <a href="tel:+1234567890" className="hover:text-primary-600">(123) 456-7890</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Email</p>
                    <p className="mt-1 text-base text-gray-600">
                      <a href="mailto:info@rylandenvironmental.us" className="hover:text-primary-600">info@rylandenvironmental.us</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Service Area</p>
                    <p className="mt-1 text-base text-gray-600">Tifton & Tift County, GA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 px-4 py-2 border"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 px-4 py-2 border"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 px-4 py-2 border"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-900">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 px-4 py-2 border"
                  >
                    <option>Residential Pickup</option>
                    <option>Commercial Service</option>
                    <option>Roll-Off Container</option>
                    <option>Recycling</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 px-4 py-2 border"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
