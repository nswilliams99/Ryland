import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Dumpster Service Tifton GA | Ryland Environmental",
  description: "Commercial trash pickup for Tifton businesses. 4, 6, 8 yard dumpsters, up to 3x weekly pickup. Locally owned since 2014. Call (229) 382-4411 for a quote.",
};

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
              City of Tifton
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Commercial Dumpster Service in Tifton, GA
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              Reliable trash pickup for businesses in the City of Tifton. 4, 6, and 8 yard front-load dumpsters with flexible pickup schedules.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:229-382-4411" className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                <span>📞</span> (229) 382-4411
              </a>
              <a href="#request-quote" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Request a Quote
              </a>
            </div>
            <p className="text-primary-200 text-sm mt-4">Mon-Fri 8am-5pm</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Locally Owned Since 2014</h3>
              <p className="text-gray-600">Family-owned with 60 years combined experience. You're not just a number—you're our neighbor.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Pickup up to 3 times per week. Need to adjust? Just call.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Service</h3>
              <p className="text-gray-600">Talk to real people who live in your community. No call centers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Simple Steps */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Service in 3 Simple Steps</h2>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request a Quote</h3>
                <p className="text-gray-600">Fill out our form or call (229) 382-4411. We'll recommend the right dumpster size for your business.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">We Deliver</h3>
                <p className="text-gray-600">Once approved, we deliver your dumpster and place it in a convenient location.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Pickup</h3>
                <p className="text-gray-600">We empty your dumpster on your scheduled days. Manage your account through My Ryland.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dumpster Sizes For Any Business</h2>
            <p className="text-gray-600">All front-load dumpsters include plastic lids and scheduled pickup up to 5x per week.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 4 Yard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-56 bg-gray-900 flex items-center justify-center p-4">
                <img 
                  src="/images/equipment/4_yard_dumpster_FL_1764909784527.png" 
                  alt="4 Yard Commercial Dumpster with Ryland Environmental branding" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4 Yard Commercial Dumpster</h3>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li><strong>Dimensions:</strong> 5'10" W x 5'1" H x 4'2" D</li>
                  <li><strong>Capacity:</strong> 800 lbs / 27 trash bags</li>
                  <li><strong>Weight:</strong> 709 lbs (empty)</li>
                </ul>
                <div className="bg-primary-50 rounded-lg p-3">
                  <p className="text-sm text-primary-800"><strong>Best For:</strong> Smaller companies with up to 25 employees</p>
                </div>
              </div>
            </div>

            {/* 6 Yard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-56 bg-gray-900 flex items-center justify-center p-4">
                <img 
                  src="/images/equipment/6_yard_dumpster_FL_1764909781374.png" 
                  alt="6 Yard Commercial Dumpster with Ryland Environmental branding" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">6 Yard Commercial Dumpster</h3>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li><strong>Dimensions:</strong> 6'0" W x 5'10" H x 5'8" D</li>
                  <li><strong>Capacity:</strong> 1,200 lbs / 41 trash bags</li>
                  <li><strong>Weight:</strong> 900 lbs (empty)</li>
                </ul>
                <div className="bg-primary-50 rounded-lg p-3">
                  <p className="text-sm text-primary-800"><strong>Best For:</strong> Mid to large businesses with up to 250 employees</p>
                </div>
              </div>
            </div>

            {/* 8 Yard */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="h-56 bg-gray-900 flex items-center justify-center p-4">
                <img 
                  src="/images/equipment/8_yard_dumpster_FL_1764909777874.png" 
                  alt="8 Yard Commercial Dumpster with Ryland Environmental branding" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">8 Yard Commercial Dumpster</h3>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li><strong>Dimensions:</strong> 6'10" W x 6'2" H x 6'10" D</li>
                  <li><strong>Capacity:</strong> 1,800 lbs / 54 trash bags</li>
                  <li><strong>Weight:</strong> 1,103 lbs (empty)</li>
                </ul>
                <div className="bg-primary-50 rounded-lg p-3">
                  <p className="text-sm text-primary-800"><strong>Best For:</strong> Large businesses with up to 500 employees</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-primary-800 text-white px-6 py-4">
              <h3 className="text-lg font-bold">Front Load Dumpster Specifications</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 font-semibold text-gray-900">Specification</th>
                    <th className="text-center px-6 py-3 font-semibold text-gray-900">4 Yard</th>
                    <th className="text-center px-6 py-3 font-semibold text-gray-900">6 Yard</th>
                    <th className="text-center px-6 py-3 font-semibold text-gray-900">8 Yard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-6 py-3 font-medium text-gray-900">Plastic Lid Standard</td>
                    <td className="px-6 py-3 text-center text-gray-600">37" x 58" single wall</td>
                    <td className="px-6 py-3 text-center text-gray-600">37" x 58" single wall</td>
                    <td className="px-6 py-3 text-center text-gray-600">37" x 58" single wall</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 font-medium text-gray-900">Sides</td>
                    <td className="px-6 py-3 text-center text-gray-600">12 gauge</td>
                    <td className="px-6 py-3 text-center text-gray-600">12 gauge</td>
                    <td className="px-6 py-3 text-center text-gray-600">12 gauge</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-medium text-gray-900">Bottom</td>
                    <td className="px-6 py-3 text-center text-gray-600">10 gauge</td>
                    <td className="px-6 py-3 text-center text-gray-600">10 gauge</td>
                    <td className="px-6 py-3 text-center text-gray-600">10 gauge</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 font-medium text-gray-900">Weight (empty)</td>
                    <td className="px-6 py-3 text-center text-gray-600">709 lbs</td>
                    <td className="px-6 py-3 text-center text-gray-600">900 lbs</td>
                    <td className="px-6 py-3 text-center text-gray-600">1,103 lbs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-medium text-gray-900">Pickup Frequency</td>
                    <td className="px-6 py-3 text-center text-gray-600">Up to 5x/week</td>
                    <td className="px-6 py-3 text-center text-gray-600">Up to 5x/week</td>
                    <td className="px-6 py-3 text-center text-gray-600">Up to 3x/week</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Need something larger? We offer roll-off dumpsters for construction and high-volume waste.</p>
            <a href="/tifton/roll-off" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              View Roll-Off Dumpsters
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Request Quote Section */}
      <section id="request-quote" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Commercial Service</h2>
              <p className="text-gray-600 mb-6">Fill out the form and we'll get back to you within one business day with a quote for your business.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">No long-term contracts required</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Flexible pickup schedules (1-5x per week)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Local service with real people who answer the phone</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 mb-2"><strong>Prefer to call?</strong></p>
                <a href="tel:229-382-4411" className="text-2xl font-bold text-primary-600 hover:text-primary-700">(229) 382-4411</a>
                <p className="text-gray-600 text-sm mt-1">Monday - Friday, 8am - 5pm</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 lg:p-8 shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name *</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Address *</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <option value="">Select type...</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="retail">Retail</option>
                    <option value="office">Office</option>
                    <option value="industrial">Industrial</option>
                    <option value="church">Church/Nonprofit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dumpster Size</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="">Not sure</option>
                      <option value="4">4 Yard</option>
                      <option value="6">6 Yard</option>
                      <option value="8">8 Yard</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Frequency</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                      <option value="1">1x per week</option>
                      <option value="2">2x per week</option>
                      <option value="3">3x per week</option>
                      <option value="4">4x per week</option>
                      <option value="5">5x per week</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Services in Tifton</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Residential Trash Service</h3>
              <p className="text-gray-600 mb-4">Curbside pickup for City of Tifton residents.</p>
              <a href="/tifton/residential" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</a>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Roll-Off Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">10-40 yard dumpsters for construction, renovations, cleanouts. All of Tift County.</p>
              <a href="/tifton/roll-off" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</a>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free Recycling Drop-Off</h3>
              <p className="text-gray-600 mb-4">Drop off recyclables free at our Carpenter Road location.</p>
              <a href="/recycling" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Notice */}
      <section className="py-8 bg-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-700">
                <strong>Commercial service available within City of Tifton limits only.</strong> Not sure if you qualify? Call <a href="tel:229-382-4411" className="text-primary-600 font-semibold">(229) 382-4411</a>.
              </p>
              <p className="text-gray-600 text-sm mt-1">Outside city limits? We offer <a href="/tifton/roll-off" className="text-primary-600 hover:underline">roll-off rentals</a> throughout Tift County.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Schedule */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Holiday Pickup Schedule</h2>
          <p className="text-gray-600 text-center mb-6">Commercial pickup delayed one day after:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">New Year's Day</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">Memorial Day</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">Thanksgiving Day</span>
            <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">Christmas Day</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Commercial Trash Service FAQs</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                What size dumpster does my business need?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                4 yard for up to 25 employees, 6 yard for 25-75 employees, 8 yard for 75+ employees. Restaurants typically need larger sizes. Not sure? Call (229) 382-4411 and we'll help.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                How often will my dumpster be emptied?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                You choose: 1, 2, or 3 times per week. Most small businesses start with once per week.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                What can't go in my commercial dumpster?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                No hazardous materials, electronics, batteries, tires, appliances with refrigerant, medical waste, concrete, brick, or dirt.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                Where will the dumpster be placed?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                We'll work with you to find the best accessible location, usually behind your building or in your parking lot.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                How do I pay my bill?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Online through My Ryland, by phone at (229) 382-4411, or by mail. Autopay available.
              </div>
            </details>

            <details className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
                What if I need an extra pickup?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Call (229) 382-4411. We can usually accommodate within 1-2 business days. Additional fees may apply.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-primary-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:229-382-4411" className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <span>📞</span> Call (229) 382-4411
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
