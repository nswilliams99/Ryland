import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Can't Go in a Commercial Dumpster? | Tifton GA | Ryland Environmental",
  description: "Prohibited items for commercial dumpsters in Tifton. No hazardous materials, liquids, medical waste, or electronics allowed.",
};

export default function CommercialProhibited() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/tifton/faq" className="inline-flex items-center text-primary-200 hover:text-white mb-4 text-sm">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to FAQ
          </Link>
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            Commercial - City of Tifton
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What Can't Go in a Commercial Dumpster?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-red-800 mb-2">Quick Answer</h2>
            <p className="text-red-700">
              Hazardous materials, liquids, medical/sharps waste, electronics, and certain industrial byproducts are prohibited. Violations may result in additional fees or service termination.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Items</h2>
            <p className="text-gray-700 mb-6">
              These items pose safety risks, can contaminate the waste stream, or violate environmental regulations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Hazardous Materials
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Chemicals and solvents</li>
                  <li>• Paints and stains</li>
                  <li>• Motor oil and lubricants</li>
                  <li>• Pesticides and herbicides</li>
                  <li>• Batteries (all types)</li>
                  <li>• Propane tanks</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Medical & Biohazard
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Needles and sharps</li>
                  <li>• Medical waste</li>
                  <li>• Pharmaceuticals</li>
                  <li>• Biohazardous materials</li>
                  <li>• Pathological waste</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Liquids & Sludge
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Free liquids of any kind</li>
                  <li>• Grease (not in containers)</li>
                  <li>• Industrial sludge</li>
                  <li>• Wastewater</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Other Prohibited Items
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Electronics (computers, TVs)</li>
                  <li>• Tires</li>
                  <li>• Large appliances</li>
                  <li>• Hot ashes or coals</li>
                  <li>• Construction debris*</li>
                </ul>
                <p className="text-red-600 text-xs mt-2">*Unless you have a construction-specific container</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Restaurant & Food Service Note</h3>
              <p className="text-amber-700 mb-3">
                Cooking oil must be properly contained. We recommend using a licensed grease recycling service for used cooking oil. Do not pour grease into the dumpster.
              </p>
              <p className="text-amber-700 text-sm">
                Food waste should be bagged to reduce odors and pest attraction.
              </p>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Proper Disposal Options</h3>
              <ul className="space-y-2 text-primary-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Medical waste:</strong> Use a licensed medical waste disposal service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Electronics:</strong> Contact a certified e-waste recycler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Hazardous materials:</strong> Use a licensed hazardous waste hauler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Construction debris:</strong> Rent a roll-off dumpster for renovation projects</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/what-size-dumpster-for-business" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What size dumpster does my business need?</span>
                </Link>
                <Link href="/tifton/faq/what-size-dumpster-do-i-need" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What size roll-off dumpster do I need?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Waste Disposal?</h2>
          <p className="text-primary-100 mb-6">Call us - we can help you find the right solution for any waste type.</p>
          <a
            href="tel:229-382-4411"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-primary-600 shadow-sm hover:bg-gray-100 transition-colors"
          >
            Call (229) 382-4411
          </a>
        </div>
      </section>
    </>
  );
}
