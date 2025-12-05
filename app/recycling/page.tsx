import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Recycling Drop-Off Tifton GA | Recycling Center",
  description: "Free recycling drop-off for Tifton residents at 2508 Carpenter Road S. Tifton GA recycling center accepts aluminum, paper, cardboard, and plastics. Make a difference - recycle free in Tifton Georgia.",
  keywords: ["Tifton GA recycling drop-off", "free recycling Tifton", "recycling center Tifton", "where to recycle Tifton Georgia", "Ryland Environmental recycling", "Tifton recycling location"],
};

export default function RecyclingPage() {
  return (
    <>
      {/* Hero Section - Inspiring & Modern */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl mr-2">♻️</span>
            <span className="text-sm font-medium">100% Free for Tifton Residents</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Make a Difference.<br />
            <span className="text-primary-200">Recycle Free in Tifton.</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Join your neighbors in protecting our community and planet. 
            Drop off your recyclables at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maps.google.com/?q=2508+Carpenter+Road+S+Tifton+GA+31793" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white text-primary-700 px-8 py-4 text-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
            <a 
              href="https://www.tifton.net/263/Recycling" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary-500/30 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 text-lg font-semibold hover:bg-primary-500/50 transition-colors"
            >
              City of Tifton Info
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact Matters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every item you recycle makes a real difference for Tifton and our planet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-4 border-primary-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🥫</span>
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">5,000+</div>
              <div className="text-gray-600">Gallons of gasoline saved weekly by recycling all aluminum cans in Tifton</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-4 border-primary-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📄</span>
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">33%</div>
              <div className="text-gray-600">Paper makes up 1/3 of landfill waste - you can change that</div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-4 border-primary-100 hover:border-primary-300 transition-colors">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Free for all City of Tifton residents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Drop-Off Location Card */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 text-white">
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-lg font-bold text-white">FREE DROP-OFF</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Recycling Center Location
                </h2>
                <p className="text-primary-100 text-lg mb-6">
                  Ryland Environmental proudly partners with the City of Tifton to provide 
                  free recycling services for all city residents.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-200 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-lg">2508 Carpenter Road S</div>
                      <div className="text-primary-200">Tifton, GA 31793</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-200 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-lg">Monday - Friday</div>
                      <div className="text-primary-200">8:00 AM - 5:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-200 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-lg">229-382-4411</div>
                      <div className="text-primary-200">Questions? Give us a call</div>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com/?q=2508+Carpenter+Road+S+Tifton+GA+31793" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Open in Google Maps
                </a>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="/images/recycling-center.jpg" 
                  alt="Ryland Environmental Recycling Center with recycling dumpsters in Tifton GA" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Materials Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Can Recycle</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Clean, dry recyclables only. Rinse containers before dropping off.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Aluminum & Metal */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-primary-400 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">🥫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aluminum & Metal</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Aluminum beverage cans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Food cans (rinsed clean)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Steel & tin cans</span>
                </li>
              </ul>
            </div>

            {/* Paper */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-primary-400 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">📰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Paper</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Newspapers & magazines</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Office paper & junk mail</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Phone books & brochures</span>
                </li>
              </ul>
            </div>

            {/* Cardboard */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-primary-400 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cardboard</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Cardboard boxes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Frozen food boxes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Poster board & paperbacks</span>
                </li>
              </ul>
            </div>

            {/* Plastics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-primary-400 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">🧴</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plastics #1-#7</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Milk jugs (rinsed)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Water & soda bottles</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Detergent bottles</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              💡 <strong>Pro Tip:</strong> Look for the recycling number (1-7) on the bottom of plastic containers
            </p>
          </div>
        </div>
      </section>

      {/* Items NOT Accepted - Helpful Reminder */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 lg:p-12 border-2 border-red-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-red-100 rounded-full px-4 py-2 mb-4">
                <span className="text-red-600 font-medium">Help Keep Our Recycling Clean</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Items We Cannot Accept</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                One contaminated item can cause an entire recycling load to be rejected and sent to the landfill. 
                Please keep these items out of recycling.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Pizza boxes (greasy)",
                "Plastic bags",
                "Styrofoam",
                "Food waste",
                "Garden hoses",
                "Christmas lights",
                "Batteries",
                "Diapers",
                "Bubble wrap",
                "Coat hangers",
                "Electrical cords",
                "Waxed cartons",
                "Soiled napkins",
                "Rubber balls",
                "Tires",
                "Syringes/Razors"
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
                  <svg className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recycling Made Easy</h2>
            <p className="text-lg text-gray-600">Follow these simple steps for successful recycling</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rinse It</h3>
              <p className="text-gray-600">
                Quickly rinse containers to remove food residue. They don't need to be spotless!
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sort It</h3>
              <p className="text-gray-600">
                Separate paper, cardboard, plastics, and metals. Keep items clean and dry.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Drop It Off</h3>
              <p className="text-gray-600">
                Bring your recyclables to 2508 Carpenter Road S during business hours. It's free!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Partnership / Authority Section */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-4">
                  <span className="text-primary-700 font-medium">Official City Partner</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Proudly Partnering with the City of Tifton
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Ryland Environmental is honored to provide recycling services in partnership with 
                  the City of Tifton. Together, we're working to create a cleaner, more sustainable 
                  community for generations to come.
                </p>
                <a 
                  href="https://www.tifton.net/263/Recycling" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Visit Official City of Tifton Recycling Page
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block bg-primary-50 rounded-2xl p-8">
                  <div className="text-6xl mb-4">🤝</div>
                  <div className="text-2xl font-bold text-primary-700">Community First</div>
                  <p className="text-gray-600 mt-2">Serving Tifton since day one</p>
                </div>
              </div>
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
              <p className="text-gray-600 mb-4">Curbside pickup for City of Tifton residents. Learn how to start service.</p>
              <Link href="/tifton" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</Link>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Commercial Dumpsters</h3>
              <p className="text-gray-600 mb-4">4, 6, 8 yard dumpsters for Tifton businesses. Up to 3x weekly pickup.</p>
              <Link href="/tifton/commercial" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</Link>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Roll-Off Dumpster Rentals</h3>
              <p className="text-gray-600 mb-4">20-40 yard dumpsters for construction, renovations, cleanouts. All of Tift County.</p>
              <Link href="/tifton/roll-off" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-b from-primary-600 to-primary-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start recycling today. It's free, it's easy, and it helps protect our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maps.google.com/?q=2508+Carpenter+Road+S+Tifton+GA+31793" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white text-primary-700 px-8 py-4 text-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions to Drop-Off
            </a>
            <Link 
              href="/tifton"
              className="inline-flex items-center justify-center rounded-lg bg-primary-500/30 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 text-lg font-semibold hover:bg-primary-500/50 transition-colors"
            >
              View All City Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
