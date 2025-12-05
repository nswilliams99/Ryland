import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Tift County GA | Ryland Environmental",
  description: "Roll-off dumpster rentals in Tift County GA. 10-40 yard dumpsters for construction, cleanouts, renovations. Same-day delivery available. Call (229) 382-4411.",
};

export default function RollOffPage() {
  return (
    <>
      {/* Hero + Quote Form */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Hero Content */}
            <div className="pt-4">
              <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
                All of Tift County
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Roll-Off Dumpster Rentals in Tift County, GA
              </h1>
              <p className="text-xl text-primary-100 mb-6">
                Temporary dumpsters for construction, renovations, cleanouts, and more. Serving all of Tift County.
              </p>
              <div className="flex items-center gap-4 text-primary-100">
                <a href="tel:229-382-4411" className="flex items-center gap-2 hover:text-white">
                  <span>📞</span> (229) 382-4411
                </a>
                <span>Mon-Fri 8am-5pm</span>
              </div>
            </div>

            {/* Right - Quote Form */}
            <div className="bg-white rounded-xl shadow-2xl p-6 lg:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Request a Roll-Off Dumpster</h2>
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
                      <option value="10">10 Yard</option>
                      <option value="15">15 Yard</option>
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
            <p className="text-gray-600">From small cleanouts to major construction—we have the right size.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* 10 Yard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">10</div>
                  <div className="text-sm font-semibold text-gray-600">YARD</div>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1 text-xs text-gray-600 mb-3">
                  <li>12' L x 8' W x 4' H</li>
                  <li>~3 pickup truck loads</li>
                  <li>Weight: 2 tons</li>
                </ul>
                <p className="text-xs text-primary-700 font-medium">Best For: Small cleanouts, garage cleanup</p>
              </div>
            </div>

            {/* 15 Yard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">15</div>
                  <div className="text-sm font-semibold text-gray-600">YARD</div>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1 text-xs text-gray-600 mb-3">
                  <li>14' L x 8' W x 4.5' H</li>
                  <li>~4-5 pickup truck loads</li>
                  <li>Weight: 3 tons</li>
                </ul>
                <p className="text-xs text-primary-700 font-medium">Best For: Medium cleanouts, flooring removal</p>
              </div>
            </div>

            {/* 20 Yard - Most Popular */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary-500 relative">
              <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-xs font-bold py-1 text-center">MOST POPULAR</div>
              <div className="h-32 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">20</div>
                  <div className="text-sm font-semibold text-gray-600">YARD</div>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1 text-xs text-gray-600 mb-3">
                  <li>22' L x 8' W x 4.5' H</li>
                  <li>~6 pickup truck loads</li>
                  <li>Weight: 4 tons</li>
                </ul>
                <p className="text-xs text-primary-700 font-medium">Best For: Large cleanouts, remodels, roofing</p>
              </div>
            </div>

            {/* 30 Yard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">30</div>
                  <div className="text-sm font-semibold text-gray-600">YARD</div>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1 text-xs text-gray-600 mb-3">
                  <li>22' L x 8' W x 6' H</li>
                  <li>~9 pickup truck loads</li>
                  <li>Weight: 5 tons</li>
                </ul>
                <p className="text-xs text-primary-700 font-medium">Best For: Major renovations, new construction</p>
              </div>
            </div>

            {/* 40 Yard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">40</div>
                  <div className="text-sm font-semibold text-gray-600">YARD</div>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1 text-xs text-gray-600 mb-3">
                  <li>22' L x 8' W x 8' H</li>
                  <li>~12 pickup truck loads</li>
                  <li>Weight: 6 tons</li>
                </ul>
                <p className="text-xs text-primary-700 font-medium">Best For: Commercial, large demolition</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">Not sure which size? Call <a href="tel:229-382-4411" className="text-primary-600 font-semibold">(229) 382-4411</a> and describe your project. We'll recommend the right dumpster.</p>
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

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Rent? Let's Talk.</h2>
            <p className="text-gray-600">Get a quote in minutes. Tell us about your project.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-center lg:text-left">
              <a href="tel:229-382-4411" className="text-4xl font-bold text-primary-600 hover:text-primary-700">(229) 382-4411</a>
              <p className="text-gray-600 mt-2">Monday - Friday, 8am - 5pm</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <textarea placeholder="Describe your project..." rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Get Quote
                </button>
              </form>
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
              <a href="/recycling" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</a>
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
                <p className="mb-2">It depends on your project:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>10 yard: Small garage cleanout, single room renovation</li>
                  <li>15 yard: Multi-room cleanout, deck removal</li>
                  <li>20 yard: Whole house cleanout, large remodel, roofing (most popular)</li>
                  <li>30 yard: Major renovation, new construction</li>
                  <li>40 yard: Commercial construction, demolition</li>
                </ul>
                <p className="mt-2">Not sure? Call (229) 382-4411 and describe your project.</p>
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
