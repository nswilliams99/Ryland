import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Do I Need a Permit for a Dumpster? | Tift County | Ryland Environmental",
  description: "Dumpster permit requirements in Tift County. Permits may be required if placing on public property. We can help you check local requirements.",
};

export default function DumpsterPermit() {
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
            Do I Need a Permit for a Dumpster?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Usually no permit is needed if placing on your own private property (driveway, yard). Permits may be required if placing on a street, sidewalk, or other public property. Check with City of Tifton or Tift County before placement.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When You DON'T Need a Permit</h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Your driveway</strong> - Most common placement, no permit needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Your yard</strong> - On your own property, no permit needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Private parking lot</strong> - With property owner permission</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Construction site</strong> - On your permitted construction property</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">When You MIGHT Need a Permit</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-amber-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">!</span>
                  <span><strong>On the street</strong> - Blocking traffic lanes or parking spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">!</span>
                  <span><strong>On a sidewalk</strong> - Blocking pedestrian walkways</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">!</span>
                  <span><strong>Right-of-way</strong> - The strip between sidewalk and street</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">!</span>
                  <span><strong>HOA communities</strong> - May have their own rules</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How to Check</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">City of Tifton</h4>
                    <p className="text-gray-600 text-sm">For properties inside city limits, contact City Hall</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tift County</h4>
                    <p className="text-gray-600 text-sm">For properties outside city limits, contact County offices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">We Can Help</h3>
              <p className="text-primary-700">
                When you call to schedule your dumpster, tell us where you plan to place it. We've delivered thousands of dumpsters in Tift County and can advise you on typical permit requirements and help you find the best placement location.
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
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Dumpster Placement?</h2>
          <p className="text-primary-100 mb-6">Call us and we'll help you figure out the best location for your project.</p>
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
