import type { Metadata } from "next";
import SignupForm from "../components/SignupForm";

export const metadata: Metadata = {
  title: "City of Tifton Services",
  description: "Ryland Environmental provides exclusive residential trash service and comprehensive commercial waste solutions within Tifton city limits.",
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
            <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Residential Service</h3>
              <p className="text-gray-600 mb-4">Exclusive provider for City of Tifton homes</p>
              <ul className="space-y-2 text-sm text-gray-700">
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
            </div>

            {/* Commercial */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Service</h3>
              <p className="text-gray-600 mb-4">Flexible solutions for businesses</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span> 
                  <span>96-gallon carts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span> 
                  <span>4, 6, 8-yard front-load dumpsters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span> 
                  <span>Customized pickup schedules</span>
                </li>
              </ul>
            </div>

            {/* Roll-offs */}
            <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Roll-Off Containers</h3>
              <p className="text-gray-600 mb-4">Large projects and construction</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span> 
                  <span>20-yard containers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span> 
                  <span>30-yard containers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span> 
                  <span>40-yard containers</span>
                </li>
              </ul>
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
              <img src="/images/96-gallon-cart.png" alt="96-Gallon Cart" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">96-Gallon Carts</h3>
                <p className="text-gray-600 text-sm mt-2">Residential and small business service</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/4-yard-frontload.png" alt="Front-Load Dumpster" className="w-full h-64 object-contain bg-gray-100" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Front-Load Dumpsters</h3>
                <p className="text-gray-600 text-sm mt-2">4, 6, and 8-yard for businesses</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/images/20-yard-rolloff.jpg" alt="Roll-Off Container" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Roll-Off Containers</h3>
                <p className="text-gray-600 text-sm mt-2">20, 30, and 40-yard options</p>
              </div>
            </div>
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
          <div className="flex justify-center">
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=1gZY1wK9ewdqzWZqFtF_8sFxS82rgMM&ehbc=2E312F" 
                className="w-full h-[500px] md:h-[600px]"
                style={{ border: 0 }}
                loading="lazy"
                title="Tifton Service Schedule and Routes Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-16 bg-white">
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
