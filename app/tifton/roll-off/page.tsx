import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Roll-Off Dumpsters & Industrial Service Tift County GA | Ryland Environmental",
  description: "Roll-off dumpster rentals, compactors, and industrial waste service in Tift County GA. 20-40 yard dumpsters. Call (229) 382-4411.",
};

export default function RollOffPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tifton Office", href: "/tifton" },
          { label: "Roll-Off & Industrial" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
              All of Tift County
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Roll-Off & Industrial Services in Tift County, GA
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              Roll-off dumpsters, compactors, and industrial waste solutions. Serving all of Tift County—Tifton, Omega, Ty Ty, Chula, and surrounding areas.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#quote-form" className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Get a Quote
              </a>
              <a href="tel:229-382-4411" className="inline-flex items-center gap-2 text-primary-100 hover:text-white">
                <span>📞</span> (229) 382-4411
              </a>
              <span className="text-primary-200">Mon-Fri 8am-5pm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Serving All of Tift County</h3>
              <p className="text-gray-600">Unlike our other services, roll-off dumpsters are available anywhere in Tift County—city limits or not.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Rental Periods</h3>
              <p className="text-gray-600">Keep it as long as you need. Daily, weekly, or monthly rentals available.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day and next-day delivery available. Call for rush orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Simple Steps */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dumpster Rental in 3 Simple Steps</h2>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Size</h3>
                <p className="text-gray-600">Tell us about your project and we'll recommend the right dumpster. Not sure? We'll help you pick.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">We Deliver</h3>
                <p className="text-gray-600">We drop the dumpster at your location. You fill it up on your schedule.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">We Haul It Away</h3>
                <p className="text-gray-600">When you're done, call us. We pick it up and dispose of everything properly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Roll-Off Dumpster Sizes</h2>
            <p className="text-gray-600">Three sizes to fit any project—from home cleanouts to major construction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 20 Yard - Most Popular */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary-500 relative">
              <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-xs font-bold py-1 text-center z-10">MOST POPULAR</div>
              <div className="pt-8">
                <img 
                  src="/images/rolloff/20-yard.jpg" 
                  alt="20 Yard Roll-Off Dumpster - 15' L x 8' W x 4' H" 
                  className="w-full h-48 object-contain bg-white"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">20 Yard Container</h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    15' L x 8' W x 4' H
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    ~6 pickup truck loads
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    Weight limit: 4 tons
                  </li>
                </ul>
                <p className="text-primary-700 font-medium">Best For: Home cleanouts, remodeling projects, roofing jobs</p>
              </div>
            </div>

            {/* 30 Yard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div>
                <img 
                  src="/images/rolloff/30-yard.jpg" 
                  alt="30 Yard Roll-Off Dumpster - 22' L x 8' W x 6' H" 
                  className="w-full h-48 object-contain bg-white"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">30 Yard Container</h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    22' L x 8' W x 6' H
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    ~9 pickup truck loads
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    Weight limit: 5 tons
                  </li>
                </ul>
                <p className="text-primary-700 font-medium">Best For: Major renovations, new construction, large cleanouts</p>
              </div>
            </div>

            {/* 40 Yard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div>
                <img 
                  src="/images/rolloff/40-yard.jpg" 
                  alt="40 Yard Roll-Off Dumpster - 22' L x 8' W x 8' H" 
                  className="w-full h-48 object-contain bg-white"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">40 Yard Container</h3>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    22' L x 8' W x 8' H
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    ~12 pickup truck loads
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    Weight limit: 6 tons
                  </li>
                </ul>
                <p className="text-primary-700 font-medium">Best For: Commercial projects, demolition, large-scale construction</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">Not sure which size? Call <a href="tel:229-382-4411" className="text-primary-600 font-semibold">(229) 382-4411</a> and describe your project. We'll recommend the right dumpster.</p>
          </div>
        </div>
      </section>

      {/* Industrial & Compactor Section */}
      <section id="industrial" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              For Warehouses, Manufacturing & High-Volume Operations
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industrial & Compactor Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reduce waste volume up to 75% and streamline your operations with our industrial waste solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Compactors */}
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <div className="bg-gray-900 p-4">
                <img 
                  src="/images/rolloff/stationary-compactor.png" 
                  alt="Stationary Compactor for industrial waste management" 
                  className="w-full h-48 object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Stationary Compactors</h3>
                <p className="text-gray-600 mb-4">
                  Reduce waste volume up to 75%. Perfect for warehouses, manufacturing, retail, and high-volume operations.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    2-40 cubic yard sizes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    Stationary & self-contained units
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    Reduce hauling frequency & costs
                  </li>
                </ul>
              </div>
            </div>

            {/* Scheduled Industrial */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Scheduled Industrial Service</h3>
              <p className="text-gray-600 mb-4">
                Ongoing roll-off service on your schedule. For industrial facilities and large operations that generate consistent waste.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Weekly, bi-weekly, or custom schedules
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Dedicated containers on-site
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-600">✓</span>
                  Custom industrial solutions
                </li>
              </ul>
            </div>
          </div>

          {/* Trade Show / Partnership Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/images/ryland-trade-show-booth.png" 
              alt="Ryland Environmental trade show booth showcasing industrial waste services, residential carts, and commercial dumpsters" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="bg-gray-100 px-6 py-4">
              <p className="text-gray-700 text-center text-sm">
                <strong>Ryland Environmental</strong> — Your one-stop for solid waste collection, disposal, and recycling needs. Proudly serving Georgia communities since 1964.
              </p>
            </div>
          </div>

          <div className="bg-primary-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Industrial or Compactor Service?</h3>
            <p className="text-primary-100 mb-6">Call us to discuss your specific needs. We'll design a custom solution for your operation.</p>
            <a href="tel:229-382-4411" className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <span>📞</span> Call (229) 382-4411
            </a>
          </div>
        </div>
      </section>

      {/* What Can/Can't Go In */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You Can (and Can't) Put In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accepted */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Accepted Items
              </h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Household junk and furniture
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Construction debris (wood, drywall, siding)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Roofing shingles
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Yard waste and brush
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Concrete, brick, dirt (separate load - call first)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Appliances (no refrigerant)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  Mattresses and box springs
                </li>
              </ul>
            </div>

            {/* Not Accepted */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                NOT Accepted
              </h3>
              <ul className="space-y-2 text-red-800">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  Hazardous materials (paint, oil, chemicals)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  Appliances with refrigerant (AC, refrigerators)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  Tires
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  Batteries
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  Electronics (TVs, computers, monitors)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  Medical waste
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  Asbestos
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> Heavy materials like concrete, brick, and dirt can only go in 10-yard dumpsters and must be scheduled separately. Call for details.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Roll-Off Dumpster</h2>
            <p className="text-gray-600">Get a quote in minutes. Tell us about your project.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <a href="tel:229-382-4411" className="text-4xl font-bold text-primary-600 hover:text-primary-700">(229) 382-4411</a>
                <p className="text-gray-600 mt-2">Monday - Friday, 8am - 5pm</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">Why Choose Ryland?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    Family-owned since 1964
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    Same-day & next-day delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    Flat-rate pricing, no hidden fees
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    Serving all of Tift County
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-gray-200">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address *</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select project type...</option>
                    <option value="cleanout">Home Cleanout</option>
                    <option value="renovation">Renovation/Remodel</option>
                    <option value="construction">Construction</option>
                    <option value="roofing">Roofing</option>
                    <option value="landscaping">Landscaping/Yard Debris</option>
                    <option value="commercial">Commercial Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dumpster Size</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="">Not sure - help me choose</option>
                      <option value="20">20 Yard</option>
                      <option value="30">30 Yard</option>
                      <option value="40">40 Yard</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rental Length</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="3">1-3 days</option>
                      <option value="7">1 week</option>
                      <option value="14">2 weeks</option>
                      <option value="30">1 month</option>
                      <option value="ongoing">Ongoing/Not sure</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Delivery Date</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                  <textarea rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Get Quote
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Need it fast? Call <a href="tel:229-382-4411" className="text-primary-600 font-semibold">(229) 382-4411</a> for same-day or next-day delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Services We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Residential Trash Service</h3>
              <p className="text-gray-600 mb-4">Weekly curbside pickup for City of Tifton residents.</p>
              <a href="/tifton#signup-form" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</a>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Commercial Dumpsters</h3>
              <p className="text-gray-600 mb-4">Permanent dumpsters for businesses. 4, 6, and 8 yard sizes.</p>
              <a href="/tifton/commercial" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</a>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free Recycling Drop-Off</h3>
              <p className="text-gray-600 mb-4">Drop off recyclables free at our Carpenter Road location.</p>
              <a href="/tifton/recycling" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Permit Notice */}
      <section className="py-8 bg-amber-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-amber-800 mb-1">Do I Need a Permit?</h3>
              <p className="text-amber-700 text-sm">
                If the dumpster will be placed on a public street, sidewalk, or right-of-way, you may need a permit from the City of Tifton. Dumpsters placed on private property (your driveway, yard, or parking lot) typically don't require a permit.
              </p>
              <p className="text-amber-700 text-sm mt-2">
                Not sure? Contact Tifton City Hall at <a href="tel:229-391-3957" className="font-semibold">(229) 391-3957</a> or call us and we'll help you figure it out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Roll-Off Dumpster FAQs</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                What size dumpster do I need?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                <p className="mb-2">We offer three sizes to fit any project:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>20 yard:</strong> Home cleanouts, remodeling, roofing jobs (most popular)</li>
                  <li><strong>30 yard:</strong> Major renovations, new construction, large cleanouts</li>
                  <li><strong>40 yard:</strong> Commercial projects, demolition, large-scale construction</li>
                </ul>
                <p className="mt-2">Not sure? Call (229) 382-4411 and describe your project—we'll recommend the right size.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                How much does a roll-off dumpster cost?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Pricing depends on dumpster size, rental length, and debris type. Call (229) 382-4411 for a quote—we'll give you a flat rate with no hidden fees.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                How long can I keep the dumpster?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Standard rental is 7 days. Need it longer? Just let us know. We offer daily, weekly, and monthly rates. Extensions are easy—just call before your rental period ends.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                How quickly can I get a dumpster?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                We offer same-day and next-day delivery when available. Call (229) 382-4411 for rush delivery. For scheduled projects, book a few days ahead to guarantee your preferred date.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                Where will you put the dumpster?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Wherever works best for you—driveway, yard, parking lot, job site. Just make sure there's clear access for our truck (about 60 feet of clearance). We'll place it exactly where you want it.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                Do I need a permit for a dumpster?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Not if it's on your private property. If you need it on a public street or right-of-way, you may need a permit from the City of Tifton. Call us if you're unsure.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                What if I fill it up before my rental ends?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Call us! We can swap it for an empty one or pick it up and bring it back. Additional haul fees apply.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                Can I put concrete or dirt in the dumpster?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Yes, but it requires a special 10-yard "heavy debris" dumpster. Concrete, brick, dirt, and asphalt are very heavy and can't be mixed with regular trash. Call for pricing.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Service Area Callout */}
      <section className="py-8 bg-primary-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-primary-800 mb-1">Serving All of Tift County</h3>
              <p className="text-primary-700">
                Roll-off dumpsters available throughout Tift County including Tifton, Omega, Ty Ty, Chula, and surrounding areas.
              </p>
              <p className="text-primary-600 text-sm mt-2">
                For residential or commercial service inside City of Tifton limits, see our <a href="/tifton" className="underline">other services</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-primary-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to rent a dumpster?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:229-382-4411" className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <span>📞</span> Call (229) 382-4411
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
