import type { Metadata } from "next";
import SignupForm from "../components/SignupForm";

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

      {/* Service Schedule & Routes Map */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Schedule & Routes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check your pickup day and route on our interactive service map
            </p>
          </div>

          {/* Route Color Legend */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 inline-block">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 text-center">Pickup Days by Route Color</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-600"></div>
                  <span className="text-sm font-medium text-gray-900">Monday</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                  <span className="text-sm font-medium text-gray-900">Tuesday</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  <span className="text-sm font-medium text-gray-900">Thursday</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                  <span className="text-sm font-medium text-gray-900">Friday</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
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
        </div>
      </section>

      {/* Holiday Schedule */}
      <section id="holiday-schedule" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Holiday Schedule</h2>
              <p className="text-lg text-gray-600">
                We are a family owned and operated company and taking care of our employees is important to us. We observe the following holidays so that our employees can spend quality time with their friends and family.
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
                  <p className="text-sm text-blue-800 font-medium">
                    <strong>Important:</strong> Service will be one day behind after each holiday.
                  </p>
                  <p className="text-sm text-blue-700 mt-1">
                    For example, if your normal pickup day is Monday and we observe a holiday on Monday, your service will be on Tuesday that week.
                  </p>
                </div>
              </div>
            </div>
          </div>
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

      {/* Signup Form */}
      <section id="signup-form" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <SignupForm />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Questions?</h2>
          <p className="text-primary-100 mb-6">Call us at (229) 382-4411</p>
        </div>
      </section>
    </>
  );
}
