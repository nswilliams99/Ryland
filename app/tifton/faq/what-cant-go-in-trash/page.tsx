import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Can't Go in My Trash Cart? | Tifton GA | Ryland Environmental",
  description: "Prohibited items for residential trash in Tifton GA. No hazardous waste, electronics, tires, appliances, or construction debris.",
};

export default function WhatCantGo() {
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
            Residential - City of Tifton
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What Can't Go in My Trash Cart?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-red-800 mb-2">Quick Answer</h2>
            <p className="text-red-700">
              Hazardous waste, electronics, tires, large appliances, construction debris, and liquids are NOT allowed in your residential trash cart.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Items</h2>
            <p className="text-gray-700 mb-6">
              These items can damage our trucks, injure workers, or contaminate the waste stream. They must be disposed of properly.
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
                  <li>• Paints and stains</li>
                  <li>• Motor oil and antifreeze</li>
                  <li>• Pesticides and herbicides</li>
                  <li>• Pool chemicals</li>
                  <li>• Propane tanks</li>
                  <li>• Ammunition</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Electronics (E-Waste)
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• TVs and monitors</li>
                  <li>• Computers and laptops</li>
                  <li>• Printers</li>
                  <li>• Cell phones</li>
                  <li>• Batteries (all types)</li>
                  <li>• Light bulbs (CFL, LED)</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Large Items
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Refrigerators and freezers</li>
                  <li>• Air conditioners</li>
                  <li>• Water heaters</li>
                  <li>• Washers and dryers</li>
                  <li>• Mattresses</li>
                  <li>• Large furniture</li>
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
                  <li>• Tires</li>
                  <li>• Construction debris</li>
                  <li>• Medical/sharps waste</li>
                  <li>• Liquids of any kind</li>
                  <li>• Dirt, rocks, concrete</li>
                  <li>• Hot ashes or coals</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">How to Dispose of These Items</h3>
              <ul className="space-y-3 text-primary-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Large items:</strong> Schedule a bulk pickup by calling our office</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Construction debris:</strong> Rent a roll-off dumpster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Electronics:</strong> Take to a certified e-waste recycler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Hazardous waste:</strong> Contact Tift County for household hazardous waste collection events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Tires:</strong> Take to a tire retailer or auto shop</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/what-can-i-put-in-trash" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What can I put in my trash cart?</span>
                </Link>
                <Link href="/tifton/faq/how-to-schedule-bulk-pickup" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">How do I schedule a bulk pickup?</span>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need Help Disposing of Large Items?</h2>
          <p className="text-primary-100 mb-6">Call us about bulk pickup or roll-off dumpster rental.</p>
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
