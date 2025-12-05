import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Time Does the Trash Truck Come in Tifton? | Ryland Environmental",
  description: "Trash trucks in Tifton begin routes at 6:30 AM. Learn pickup times, holiday schedules, and cart placement tips for City of Tifton residents.",
};

export default function TrashTruckTime() {
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
            <span className="text-gray-600">What Time Does the Trash Truck Come?</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            General
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What Time Does the Trash Truck Come in Tifton?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Trash trucks in Tifton begin routes at 6:30 AM. Your cart should be at the curb by 6:00 AM on your scheduled pickup day.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Details</h2>
            <p className="text-gray-700 mb-6">
              Ryland Environmental services the City of Tifton under an exclusive residential contract. Pickup times vary depending on where you are on the route - some homes are serviced early morning, others mid-day or afternoon. The only guarantee is that your trash will be collected on your scheduled day, so make sure your cart is out by 6:00 AM.
            </p>
            <p className="text-gray-700 mb-8">
              Routes may run later than usual due to weather, holidays, or heavy volume. If it's past 6:00 PM and your trash hasn't been picked up, report a missed pickup by calling our Tifton office.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Holiday Delays
              </h3>
              <p className="text-amber-700 mb-4">
                Pickup is pushed back one day after these holidays:
              </p>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">•</span>
                  New Year's Day
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">•</span>
                  Memorial Day
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">•</span>
                  Thanksgiving
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-2">•</span>
                  Christmas
                </li>
              </ul>
              <p className="text-amber-700 mt-4 text-sm">
                <strong>Example:</strong> If your normal pickup is Wednesday and the holiday falls on Monday, your pickup moves to Thursday that week.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pro Tips
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span>Set your cart out the night before if you leave for work early</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span>Wheels against the curb, handle facing your house</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span>Keep 3 feet of space between your trash and recycling carts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 mt-1">✓</span>
                  <span>Don't block mailboxes, fire hydrants, or parked cars</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/what-if-trash-wasnt-picked-up" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What if my trash wasn't picked up?</span>
                </Link>
                <Link href="/tifton/faq/where-to-place-trash-can-for-pickup" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">Where should I place my trash can for pickup?</span>
                </Link>
                <Link href="/tifton/faq/holiday-pickup-schedule" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What's the holiday pickup schedule?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-primary-100 mb-6">Call our Tifton office - we're here to help!</p>
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
