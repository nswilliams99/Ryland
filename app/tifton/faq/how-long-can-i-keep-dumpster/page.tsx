import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Can I Keep a Roll-Off Dumpster? | Tift County | Ryland Environmental",
  description: "Roll-off dumpster rental periods in Tift County. Standard rental is 7-14 days with extensions available for longer projects.",
};

export default function DumpsterDuration() {
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
            <span className="text-gray-600">How Long Can I Keep a Roll-Off Dumpster?</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            Roll-Off - All of Tift County
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How Long Can I Keep a Roll-Off Dumpster?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Standard rental is 7-14 days, depending on your project. Extensions are available at a daily rate for longer projects. Just call us when you need more time.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rental Periods</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">7</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Days</div>
                <p className="text-gray-600 text-sm">
                  Quick cleanouts, small projects
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 text-center border-2 border-primary-400">
                <div className="text-4xl font-bold text-primary-600 mb-2">14</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Days</div>
                <p className="text-gray-600 text-sm">
                  Most common - renovations, construction
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">30+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Days</div>
                <p className="text-gray-600 text-sm">
                  Extended rentals for larger projects
                </p>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Need More Time?</h3>
              <p className="text-primary-700 mb-4">
                No problem! Just call us before your rental period ends and we'll extend it. Extensions are charged at a reasonable daily rate. We understand projects don't always go as planned.
              </p>
              <p className="text-primary-700 text-sm">
                <strong>Pro Tip:</strong> If you know your project will take longer than 14 days, let us know upfront and we can set up a longer rental from the start.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span><strong>Schedule delivery</strong> - Tell us when and where you need the dumpster</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <span><strong>Fill it up</strong> - Take your time during the rental period</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <span><strong>Call for pickup</strong> - When you're done or need an extension</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  <span><strong>We haul it away</strong> - Usually within 24-48 hours of your call</span>
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Tips for Your Rental</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Load heavy items first, lighter items on top</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Break down boxes and flatten bulky items to maximize space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Don't overfill - debris should be level with the top</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Call for early pickup if you finish ahead of schedule</span>
                </li>
              </ul>
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Rent a Dumpster?</h2>
          <p className="text-primary-100 mb-6">Call us to schedule delivery and discuss your project timeline.</p>
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
