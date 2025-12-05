import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Size Dumpster Does My Business Need? | Tifton GA | Ryland Environmental",
  description: "Commercial dumpster sizes for Tifton businesses. 96-gallon carts, 4, 6, and 8-yard front-load dumpsters. Get the right size for your waste volume.",
};

export default function BusinessDumpsterSize() {
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
            <span className="text-gray-600">What Size Dumpster Does My Business Need?</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            Commercial - City of Tifton
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What Size Dumpster Does My Business Need?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              We offer 96-gallon carts for small businesses, and 4, 6, and 8-yard front-load dumpsters for larger operations. The right size depends on your waste volume and pickup frequency.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Commercial Container Options</h2>
            <p className="text-gray-700 mb-6">
              Commercial service is available inside Tifton city limits. We'll help you choose the right size based on your business type and waste volume.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">96-Gallon Cart</h3>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Small Business</span>
                </div>
                <p className="text-gray-600 mb-4">Same size as residential carts. Perfect for small offices, salons, or boutiques with minimal waste.</p>
                <div className="text-sm text-gray-500">
                  <strong>Best for:</strong> Offices, small retail, professional services
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">4-Yard Front-Load Dumpster</h3>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Medium Business</span>
                </div>
                <p className="text-gray-600 mb-4">Compact dumpster ideal for restaurants, small retail stores, and offices with moderate waste.</p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">6' L</div>
                    <div className="text-gray-500">Length</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">4.5' W</div>
                    <div className="text-gray-500">Width</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">4' H</div>
                    <div className="text-gray-500">Height</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Best for:</strong> Restaurants, cafes, retail stores, medical offices
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">6-Yard Front-Load Dumpster</h3>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">Large Business</span>
                </div>
                <p className="text-gray-600 mb-4">Mid-size dumpster for larger restaurants, grocery stores, or multi-tenant buildings.</p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">6' L</div>
                    <div className="text-gray-500">Length</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">5' W</div>
                    <div className="text-gray-500">Width</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">5' H</div>
                    <div className="text-gray-500">Height</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Best for:</strong> Grocery stores, large restaurants, apartment complexes
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-primary-400">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">8-Yard Front-Load Dumpster</h3>
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">High Volume</span>
                </div>
                <p className="text-gray-600 mb-4">Our largest front-load option for high-volume businesses and multi-tenant properties.</p>
                <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">6' L</div>
                    <div className="text-gray-500">Length</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">6' W</div>
                    <div className="text-gray-500">Width</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 border border-gray-200">
                    <div className="font-bold text-primary-600">6' H</div>
                    <div className="text-gray-500">Height</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Best for:</strong> Shopping centers, hotels, large apartment complexes, warehouses
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Not Sure What Size You Need?</h3>
              <p className="text-primary-700 mb-4">
                Call us and we'll assess your business needs. We can start you with one size and adjust if needed. It's better to have slightly more capacity than to have overflowing dumpsters.
              </p>
              <p className="text-primary-700 text-sm">
                We also offer flexible pickup schedules - weekly, twice weekly, or more frequent service based on your volume.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/how-often-dumpster-emptied" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">How often is my dumpster emptied?</span>
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
          <h2 className="text-2xl font-bold text-white mb-4">Get Commercial Service for Your Business</h2>
          <p className="text-primary-100 mb-6">Call for a free consultation and quote tailored to your business needs.</p>
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
