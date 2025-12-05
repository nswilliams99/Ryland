import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Can't Go in a Roll-Off Dumpster? | Tift County | Ryland Environmental",
  description: "Prohibited items for roll-off dumpsters in Tift County. No hazardous waste, tires, batteries, paint, or certain appliances allowed.",
};

export default function RollOffProhibited() {
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
            Roll-Off - All of Tift County
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What Can't Go in a Roll-Off Dumpster?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-red-800 mb-2">Quick Answer</h2>
            <p className="text-red-700">
              Hazardous waste, tires, batteries, paint, appliances with Freon, and liquids are NOT allowed. Putting prohibited items in your dumpster may result in additional fees.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Items</h2>
            <p className="text-gray-700 mb-6">
              These items are banned from roll-off dumpsters due to environmental regulations, safety concerns, or disposal requirements.
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
                  <li>• Paints, stains, lacquers</li>
                  <li>• Chemicals and solvents</li>
                  <li>• Motor oil and antifreeze</li>
                  <li>• Pesticides and herbicides</li>
                  <li>• Asbestos materials</li>
                  <li>• Flammable liquids</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Appliances & Electronics
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Refrigerators & freezers*</li>
                  <li>• Air conditioners*</li>
                  <li>• TVs and monitors</li>
                  <li>• Computers</li>
                  <li>• Any Freon-containing unit*</li>
                </ul>
                <p className="text-red-600 text-xs mt-2">*Unless Freon has been professionally removed and certified</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Automotive Items
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Tires (all sizes)</li>
                  <li>• Batteries</li>
                  <li>• Fuel tanks</li>
                  <li>• Vehicle fluids</li>
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
                  <li>• Propane tanks</li>
                  <li>• Medical waste</li>
                  <li>• Food waste (large quantities)</li>
                  <li>• Liquids of any kind</li>
                  <li>• Railroad ties</li>
                  <li>• Stumps (over 12" diameter)</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-3">What CAN Go in Your Dumpster</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-green-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Construction debris</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Roofing materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Drywall and plaster</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Wood and lumber</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Furniture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Yard waste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>General household junk</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Concrete/brick (weight limits apply)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Weight Limits for Heavy Materials</h3>
              <p className="text-amber-700 mb-3">
                Concrete, brick, dirt, and asphalt are allowed but have weight restrictions. If you're disposing of heavy materials, let us know when ordering so we can advise on limits and provide proper pricing.
              </p>
              <p className="text-amber-700 text-sm">
                <strong>Note:</strong> Mixing heavy materials with regular debris may result in overage fees.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/what-size-dumpster-do-i-need" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What size roll-off dumpster do I need?</span>
                </Link>
                <Link href="/tifton/faq/dumpster-rental-cost" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">How much does dumpster rental cost?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About What You Can Dispose?</h2>
          <p className="text-primary-100 mb-6">Call us before your project and we'll help you plan.</p>
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
