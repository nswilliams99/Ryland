import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Schedule Bulk Pickup | Tifton GA | Ryland Environmental",
  description: "Schedule bulk item pickup in Tifton for large items like furniture, appliances, and mattresses. Call to arrange special collection.",
};

export default function BulkPickup() {
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
            How Do I Schedule a Bulk Pickup?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Call our Tifton office at (229) 382-4411 to schedule a bulk pickup. We'll arrange a date for collection of large items that won't fit in your regular cart.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Qualifies as Bulk Items?</h2>
            <p className="text-gray-700 mb-6">
              Bulk items are large household items that won't fit in your 96-gallon cart. These require special scheduling for pickup.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accepted Bulk Items
                </h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Sofas and couches</li>
                  <li>• Mattresses and box springs</li>
                  <li>• Tables and chairs</li>
                  <li>• Dressers and cabinets</li>
                  <li>• Large appliances*</li>
                  <li>• Grills (propane removed)</li>
                  <li>• Exercise equipment</li>
                  <li>• Large toys/playsets</li>
                </ul>
                <p className="text-green-600 text-xs mt-3">*Refrigerators, freezers, and AC units require Freon removal certification</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Not Accepted
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• Construction debris</li>
                  <li>• Tires</li>
                  <li>• Hazardous materials</li>
                  <li>• Electronics</li>
                  <li>• Car parts</li>
                  <li>• Dirt, rocks, concrete</li>
                  <li>• Tree stumps</li>
                </ul>
                <p className="text-red-600 text-xs mt-3">For these items, consider a roll-off dumpster rental</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Schedule</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span><strong>Call our office</strong> at (229) 382-4411 during business hours</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <span><strong>Describe your items</strong> - tell us what you need picked up</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <span><strong>Get your pickup date</strong> - we'll schedule based on availability</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  <span><strong>Place items at curb</strong> - by 6:00 AM on your scheduled day</span>
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Important Notes</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">!</span>
                  <span>Bulk pickup may have additional fees depending on item type and quantity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">!</span>
                  <span>Items must be at curb, not inside garage or behind fence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">!</span>
                  <span>City of Tifton residents only - this service is part of your city contract</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/what-cant-go-in-trash" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What can't go in my trash cart?</span>
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Schedule Your Bulk Pickup?</h2>
          <p className="text-primary-100 mb-6">Call our Tifton office to arrange collection of your large items.</p>
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
