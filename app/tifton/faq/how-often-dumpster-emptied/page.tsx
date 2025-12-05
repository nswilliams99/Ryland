import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Often Is My Commercial Dumpster Emptied? | Tifton GA | Ryland Environmental",
  description: "Commercial dumpster pickup frequency in Tifton. Weekly service is standard, with more frequent pickups available for high-volume businesses.",
};

export default function DumpsterEmptied() {
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
            How Often Is My Dumpster Emptied?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Weekly service is standard for most businesses. We offer twice-weekly, three times weekly, or even daily pickup for high-volume businesses like restaurants and grocery stores.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pickup Frequency Options</h2>
            <p className="text-gray-700 mb-6">
              We customize pickup schedules based on your business needs. The right frequency prevents overflow and keeps your property clean.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Weekly</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Standard service for most small to medium businesses with moderate waste volume.
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Best for:</strong> Small offices, retail shops, salons
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Twice Weekly</h3>
                <p className="text-gray-600 text-sm mb-3">
                  For businesses that generate more waste and need mid-week service.
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Best for:</strong> Restaurants, cafes, medical offices
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Three Times Weekly</h3>
                <p className="text-gray-600 text-sm mb-3">
                  High-frequency service for businesses with significant daily waste.
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Best for:</strong> Grocery stores, large restaurants
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Daily / Custom</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Maximum frequency for the highest volume operations.
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Best for:</strong> Hotels, shopping centers, manufacturing
                </p>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">How to Choose the Right Frequency</h3>
              <p className="text-primary-700 mb-4">
                If your dumpster is regularly overflowing before pickup day, you need more frequent service. If it's consistently less than half full, you might save money with less frequent pickup.
              </p>
              <p className="text-primary-700 text-sm">
                Call us anytime to adjust your pickup schedule as your business needs change.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Holiday Schedule</h3>
              <p className="text-amber-700">
                Commercial pickup follows the same holiday schedule as residential. Service is delayed one day after New Year's Day, Memorial Day, Thanksgiving, and Christmas.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/what-size-dumpster-for-business" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What size dumpster does my business need?</span>
                </Link>
                <Link href="/tifton/faq/what-cant-go-in-commercial-dumpster" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What can't go in a commercial dumpster?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need to Change Your Pickup Schedule?</h2>
          <p className="text-primary-100 mb-6">Call us to adjust your service frequency anytime.</p>
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
