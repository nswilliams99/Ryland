import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Size Roll-Off Dumpster Do I Need? | Tift County | Ryland Environmental",
  description: "Roll-off dumpster sizes for Tift County projects. 20-yard for small jobs, 30-yard for medium, 40-yard for large construction. Available throughout Tift County.",
};

export default function RollOffSize() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/tifton" className="text-primary-600 hover:text-primary-700 hover:underline">Tifton Office</Link>
            <span className="text-gray-400">&gt;</span>
            <Link href="/tifton/faq" className="text-primary-600 hover:text-primary-700 hover:underline">FAQs</Link>
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-600">What Size Dumpster Do I Need?</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            Roll-Off - All of Tift County
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What Size Roll-Off Dumpster Do I Need?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              20-yard for garage cleanouts and small renovations, 30-yard for medium construction projects, 40-yard for large construction, demolition, or whole-house cleanouts.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 flex items-center">
            <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-green-700">
              <strong>Service Area:</strong> Roll-off dumpsters are available throughout all of Tift County - inside and outside Tifton city limits.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Roll-Off Container Sizes</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">20-Yard Dumpster</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Small Projects</span>
                </div>
                <p className="text-gray-600 mb-4">Our smallest roll-off, perfect for residential cleanouts and small renovation projects.</p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">22' L</div>
                    <div className="text-gray-500">Length</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">8' W</div>
                    <div className="text-gray-500">Width</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">4' H</div>
                    <div className="text-gray-500">Height</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Best for:</strong> Garage cleanouts, single room remodel, deck removal, roofing (15-20 squares)
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">30-Yard Dumpster</h3>
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">Medium Projects</span>
                </div>
                <p className="text-gray-600 mb-4">Our most popular size - handles most home renovation and construction projects.</p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">22' L</div>
                    <div className="text-gray-500">Length</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">8' W</div>
                    <div className="text-gray-500">Width</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">6' H</div>
                    <div className="text-gray-500">Height</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Best for:</strong> Multi-room remodel, new construction debris, whole-house cleanout, roofing (25-30 squares)
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-primary-400">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">40-Yard Dumpster</h3>
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">Large Projects</span>
                </div>
                <p className="text-gray-600 mb-4">Our largest container for major construction, demolition, and commercial projects.</p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">22' L</div>
                    <div className="text-gray-500">Length</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">8' W</div>
                    <div className="text-gray-500">Width</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">8' H</div>
                    <div className="text-gray-500">Height</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Best for:</strong> Major renovation, demolition, new home construction, commercial projects
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Not Sure? Here's a Quick Guide</h3>
              <ul className="space-y-2 text-primary-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Cleaning out a garage or basement:</strong> 20-yard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Remodeling a kitchen or bathroom:</strong> 20-yard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Roof replacement:</strong> 20-30 yard depending on roof size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>Estate cleanout:</strong> 30-40 yard depending on home size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span><strong>New construction or demolition:</strong> 30-40 yard</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/dumpster-rental-cost" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">How much does dumpster rental cost?</span>
                </Link>
                <Link href="/tifton/faq/how-long-can-i-keep-dumpster" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">How long can I keep a roll-off dumpster?</span>
                </Link>
                <Link href="/tifton/faq/what-cant-go-in-rolloff-dumpster" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What can't go in a roll-off dumpster?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get a Free Quote</h2>
          <p className="text-primary-100 mb-6">Tell us about your project and we'll recommend the right size dumpster.</p>
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
