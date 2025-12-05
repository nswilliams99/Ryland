import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "City of Tifton Trash Service | Commercial Dumpster Service Tifton GA",
  description: "Exclusive residential trash service and commercial dumpster service Tifton GA. Business trash service Tifton, front load dumpster service, and 4 yard dumpster Tifton. Weekly trash pickup for businesses inside city limits.",
};

export default function CityServices() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            Exclusive City Partner
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            City of Tifton Services
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Inside city limits: residential, commercial, and roll-off services
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="bg-primary-50 rounded-xl p-6 border-4 border-primary-400 shadow-lg flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Residential Service</h3>
              <p className="text-gray-600 mb-4">Exclusive provider for City of Tifton homes</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 flex-grow">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span> 
                  <span>Weekly curbside pickup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span> 
                  <span>96-gallon carts provided</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span> 
                  <span>Recycling included</span>
                </li>
              </ul>
              <a 
                href="#signup-form" 
                className="flex items-center justify-center w-full text-center px-4 py-3 min-h-[4.5rem] bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm sm:text-base mt-auto"
              >
                Click here to sign up for trash service in Tifton
              </a>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-xl p-6 border-4 border-primary-400 shadow-lg flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Dumpster Service Tifton GA</h3>
              <p className="text-gray-600 mb-4">Business trash service Tifton - Flexible solutions for businesses</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 flex-grow">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span> 
                  <span>96-gallon carts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span> 
                  <span>4 yard dumpster, 6, 8-yard front load dumpster service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span> 
                  <span>Weekly trash pickup for businesses Tifton</span>
                </li>
              </ul>
              <a 
                href="tel:229-382-4411" 
                className="flex items-center justify-center w-full text-center px-4 py-3 min-h-[4.5rem] bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm sm:text-base mt-auto"
              >
                Call to get your right sized commercial container
              </a>
            </div>

            {/* Roll-offs */}
            <div className="bg-white rounded-xl p-6 border-4 border-primary-400 shadow-lg flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Roll Off Dumpster Rental</h3>
              <p className="text-gray-600 mb-4">Rolloff dumpsters for rent - Large projects and construction in Tifton GA</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-4 flex-grow">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span> 
                  <span>20-yard roll off rental</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span> 
                  <span>30-yard rolloff dumpsters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span> 
                  <span>40-yard containers</span>
                </li>
              </ul>
              <a 
                href="tel:229-382-4411" 
                className="flex items-center justify-center w-full text-center px-4 py-3 min-h-[4.5rem] bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm sm:text-base mt-auto"
              >
                Call to start your project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Photos */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                <img src="/images/96-gallon-cart.png" alt="96-Gallon Cart" className="h-full w-auto object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">96-Gallon Carts</h3>
                <p className="text-gray-600 text-sm mt-2">Residential and small business service</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 flex items-center justify-center bg-black p-4">
                <img src="/images/6-yard-frontload.png" alt="6-Yard Front-Load Dumpster" className="h-full w-auto object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Front Load Dumpster Service Tifton GA</h3>
                <p className="text-gray-600 text-sm mt-2">4 yard dumpster Tifton, 6, and 8-yard for businesses</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 flex items-center justify-center bg-white p-4 border-b border-gray-200">
                <img src="/images/20-yard-rolloff.jpg" alt="Roll Off Dumpster Rental - 20-Yard Rolloff Dumpsters for Rent" className="h-full w-auto object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Roll Off Dumpster Rental</h3>
                <p className="text-gray-600 text-sm mt-2">20, 30, and 40-yard rolloff dumpsters for rent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Placement Guidelines */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cart Placement Guidelines</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8">
            <img 
              src="/images/cart-placement.png" 
              alt="Proper cart placement - lid opening towards road" 
              className="w-full h-auto"
            />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Proper Spacing and Positioning</h3>
            <p className="text-xl font-semibold text-primary-600 mb-4">3 Feet Apart, Wheels Towards House</p>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Proper cart placement ensures efficient pickup and helps our drivers serve you better. 
              Place carts at the curb by 6 AM on your pickup day.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Signup Section */}
      <section id="signup-form" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Welcome to Tifton from Ryland Environmental
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ryland Environmental is proud to be the exclusive residential trash provider for the City of Tifton. 
              Whether you're new to town or just getting set up, we're here to help you get started with curbside service.
            </p>
          </div>

          {/* Already Signed Up Callout */}
          <div className="bg-primary-600 text-white rounded-xl p-6 mb-8 shadow-lg">
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">🏠</span>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Already signed up for utilities but haven't received your cart?
                </h3>
                <p className="text-primary-100 mb-3">Contact Ryland Environmental:</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <a href="tel:229-382-4411" className="flex items-center gap-2 text-white font-semibold hover:text-primary-200">
                    <span>📞</span> (229) 382-4411
                  </a>
                  <span className="text-primary-200">Mon-Fri 8am-5pm</span>
                </div>
                <p className="text-primary-100 mt-2 text-sm">We'll check on your delivery status.</p>
              </div>
            </div>
          </div>

          {/* How to Start Service */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Start Residential Trash Service</h3>
            <p className="text-gray-600 text-lg">
              Trash service in Tifton is included on your City of Tifton utility bill. You must sign up with the city first — Ryland will then deliver your cart.
            </p>
          </div>

          {/* In-Person Required Warning */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">⚠️</span>
              <div>
                <h4 className="text-lg font-bold text-amber-800 mb-1">IN-PERSON SIGNUP REQUIRED</h4>
                <p className="text-amber-700">
                  You must visit City Hall to start service.<br />
                  <strong>Online applications are not available at this time.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Where to Sign Up - City Hall Card */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Where to Sign Up</h3>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">📍</span>
                  <div>
                    <p className="font-bold text-gray-900">City of Tifton Customer Service</p>
                    <p className="text-gray-600">130 1st Street East</p>
                    <p className="text-gray-600">Tifton, GA 31794</p>
                    <p className="text-gray-500 text-sm">(Inside City Hall main entrance)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl flex-shrink-0">📞</span>
                  <a href="tel:229-391-3957" className="text-primary-600 font-semibold hover:text-primary-700">(229) 391-3957</a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">🕗</span>
                  <div>
                    <p className="font-medium text-gray-900">Monday – Friday</p>
                    <p className="text-gray-600">8:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                <a 
                  href="https://maps.google.com/?q=130+1st+Street+East+Tifton+GA+31794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a 
                  href="https://tifton.net/184/Customer-Service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  City of Tifton Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* What to Bring */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Bring</h3>
            <p className="text-gray-600 mb-4">You will need the following documents:</p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-6 py-4 font-bold text-gray-900">Document</th>
                    <th className="text-left px-6 py-4 font-bold text-gray-900">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-900">Photo ID</td>
                    <td className="px-6 py-4 text-gray-600">Driver's License or Passport</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Proof of Residence</td>
                    <td className="px-6 py-4 text-gray-600">Lease agreement OR home purchase contract</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3 flex items-start gap-2">
              <span>💡</span>
              <span><strong>Tip:</strong> Make sure your documents show the service address where you need trash pickup.</span>
            </p>
          </div>

          {/* What Happens Next */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <p className="font-bold text-gray-900">You sign up at City Hall</p>
                  <p className="text-gray-600">Complete the Utility Service Application and select "Sanitation Service"</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <p className="font-bold text-gray-900">City notifies Ryland</p>
                  <p className="text-gray-600">New signups are sent to Ryland Environmental at the end of each business day</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <p className="font-bold text-gray-900">We deliver your cart</p>
                  <p className="text-gray-600">Your 96-gallon trash cart will be delivered within a few business days</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <p className="font-bold text-gray-900">Service begins</p>
                  <p className="text-gray-600">Pickup starts on your next scheduled service day (see map below)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Schedule & Routes Map */}
      <section id="pickup-schedule" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Pickup Day</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check your pickup day and route on our interactive service map
            </p>
          </div>

          {/* Zone Map */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=1gZY1wK9ewdqzWZqFEf__8sFxS82rgMM&ehbc=2E312F&noprof=1&z=14" 
                className="w-full h-[500px] md:h-[600px]"
                style={{ border: 0 }}
                loading="lazy"
                title="Tifton Service Schedule and Routes Map"
              ></iframe>
            </div>
          </div>

          {/* Pickup Days Table */}
          <div className="max-w-md mx-auto mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Pickup Days by Route Color:</h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-6 py-3 font-bold text-gray-900">Color</th>
                    <th className="text-left px-6 py-3 font-bold text-gray-900">Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-600"></div>
                        <span className="text-gray-700">Red</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-gray-900">Monday</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                        <span className="text-gray-700">Blue</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-gray-900">Tuesday</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                        <span className="text-gray-700">Yellow</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-gray-900">Thursday</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                        <span className="text-gray-700">Purple</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-gray-900">Friday</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pro Tip */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
              <p className="text-primary-800">
                <strong>Pro Tip:</strong> Place your cart at the curb by <strong>6:00 AM</strong> on your pickup day. Wheels against curb, handle facing your house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Schedule */}
      <section id="holiday-schedule" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Holiday Schedule</h2>
              <p className="text-gray-600">
                Pickup is delayed by ONE day after these holidays:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">New Year's Day</span>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">Memorial Day</span>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">Thanksgiving</span>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-900 font-medium">Christmas</span>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800">
                    <strong>Example:</strong> If the holiday is Monday, Monday pickup moves to Tuesday, Tuesday to Wednesday, and so on through Saturday.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>
          <div className="space-y-2">
            <a href="/tifton/faq/what-time-does-trash-truck-come" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
              <span className="text-primary-600">→</span>
              <span className="text-gray-900 group-hover:text-primary-600">What time does the trash truck come?</span>
            </a>
            <a href="/tifton/faq/where-to-place-trash-can-for-pickup" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
              <span className="text-primary-600">→</span>
              <span className="text-gray-900 group-hover:text-primary-600">Where should I place my cart?</span>
            </a>
            <a href="/tifton/faq/holiday-pickup-schedule" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
              <span className="text-primary-600">→</span>
              <span className="text-gray-900 group-hover:text-primary-600">What's the holiday pickup schedule?</span>
            </a>
            <a href="/tifton/faq/what-can-i-put-in-trash" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
              <span className="text-primary-600">→</span>
              <span className="text-gray-900 group-hover:text-primary-600">What can I put in my trash?</span>
            </a>
            <a href="/tifton/faq/how-to-get-rid-of-trash-can-smell" className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
              <span className="text-primary-600">→</span>
              <span className="text-gray-900 group-hover:text-primary-600">How do I get rid of the smell in my trash can?</span>
            </a>
          </div>
          <div className="mt-4">
            <a 
              href="/tifton/faq" 
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
            >
              View All FAQs
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Area</h2>
          <p className="text-gray-600 mb-4">
            Residential curbside service is available <strong>inside Tifton city limits only</strong> through our exclusive contract with the city.
          </p>
          <p className="text-gray-600 mb-4">
            Not sure if you're in the city? Check the service area map above or call City Hall at <a href="tel:229-391-3957" className="text-primary-600 font-semibold hover:text-primary-700">(229) 391-3957</a>.
          </p>
          <p className="text-gray-600">
            <strong>Live outside city limits?</strong> We offer <a href="/tift-co" className="text-primary-600 font-semibold hover:text-primary-700">roll-off dumpster rentals</a> throughout Tift County.
          </p>
        </div>
      </section>

      {/* Free Recycling Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 text-white">
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-2xl mr-2">♻️</span>
                  <span className="text-lg font-bold text-white">FREE FOR TIFTON RESIDENTS</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Free Recycling Drop-Off
                </h2>
                <p className="text-primary-100 text-lg mb-6">
                  Make a difference for our community! Ryland Environmental provides free recycling 
                  drop-off for all City of Tifton residents at our Carpenter Road location.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-200 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Aluminum & metal cans</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-200 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Paper & cardboard</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-200 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Plastics #1-#7</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/recycling"
                    className="inline-flex items-center justify-center bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                  >
                    View Full Recycling Guide
                  </a>
                  <a 
                    href="https://maps.google.com/?q=2508+Carpenter+Road+S+Tifton+GA+31793" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary-500/30 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-primary-500/50 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="/images/recycling-center.jpg" 
                  alt="Free recycling drop-off center in Tifton GA at Ryland Environmental" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-primary-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Questions? We're here to help.</h2>
          <div className="bg-primary-800/50 rounded-xl p-6 inline-block">
            <p className="text-lg font-bold text-white mb-3">Ryland Environmental - Tifton Office</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-primary-100">
              <a href="tel:229-382-4411" className="flex items-center gap-2 hover:text-white">
                <span>📞</span> (229) 382-4411
              </a>
              <span className="hidden sm:inline text-primary-400">|</span>
              <span className="flex items-center gap-2">
                <span>📍</span> 2508 Carpenter Rd, Tifton, GA 31793
              </span>
              <span className="hidden sm:inline text-primary-400">|</span>
              <span className="flex items-center gap-2">
                <span>🕗</span> Mon-Fri 8am-5pm
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
