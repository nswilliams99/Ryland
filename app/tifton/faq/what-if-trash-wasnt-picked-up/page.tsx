import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What If My Trash Wasn't Picked Up? | Tifton GA | Ryland Environmental",
  description: "Missed trash pickup in Tifton? Call our office by 6:00 PM on your pickup day to report. Learn why pickups may be missed and what to do.",
};

export default function MissedPickup() {
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
            <span className="text-gray-600">What If My Trash Wasn't Picked Up?</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            General
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What If My Trash Wasn't Picked Up?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              If it's past 6:00 PM on your scheduled pickup day and your trash wasn't collected, call our Tifton office at (229) 382-4411 to report a missed pickup. Leave your cart at the curb - we'll send a truck back.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Reasons for Missed Pickup</h2>
            <p className="text-gray-700 mb-4">
              Before calling, check these common reasons why your trash may not have been collected:
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span><strong>Cart wasn't out by 6:00 AM</strong> - Our trucks start early and won't circle back during regular routes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span><strong>Cart was blocked</strong> - Parked cars, other carts, or obstacles prevent the truck from reaching your cart</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span><strong>Lid wasn't closed</strong> - Overflowing carts with open lids may be skipped</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span><strong>Holiday delay</strong> - Pickup may be delayed one day after New Year's, Memorial Day, Thanksgiving, or Christmas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">✗</span>
                  <span><strong>Prohibited items</strong> - Hazardous materials or oversized items in the cart</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do</h2>
            <div className="bg-primary-50 rounded-xl p-6 mb-8">
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span><strong>Wait until 6:00 PM</strong> - Routes sometimes run late due to weather or volume</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <span><strong>Check for issues</strong> - Make sure cart is accessible and lid is closed</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <span><strong>Call us</strong> - Report the missed pickup to (229) 382-4411</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  <span><strong>Leave cart out</strong> - Keep your cart at the curb until we can send a truck</span>
                </li>
              </ol>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/what-time-does-trash-truck-come" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What time does the trash truck come?</span>
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
          <h2 className="text-2xl font-bold text-white mb-4">Report a Missed Pickup</h2>
          <p className="text-primary-100 mb-6">Call our Tifton office and we'll get your trash collected.</p>
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
