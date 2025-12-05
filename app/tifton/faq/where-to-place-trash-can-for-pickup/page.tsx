import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Where to Place Trash Can for Pickup | Tifton GA | Ryland Environmental",
  description: "Proper trash cart placement in Tifton: wheels toward house, 3 feet apart, at curb by 6 AM. Learn correct positioning for automated pickup.",
};

export default function WhereToPlaceCart() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tifton Office", href: "/tifton" },
          { label: "FAQs", href: "/tifton/faq" },
          { label: "Where Should I Place My Trash Can for Pickup?" },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            Residential - City of Tifton
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Where Should I Place My Trash Can for Pickup?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Place your cart at the curb with wheels facing your house, handle facing the street. Keep 3 feet between trash and recycling carts. Have it out by 6:00 AM on your pickup day.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cart Placement Guidelines</h2>
            <p className="text-gray-700 mb-6">
              Our automated trucks use a mechanical arm to lift and empty your cart. Proper placement ensures efficient pickup and prevents damage to your cart.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The 3-Foot Rule</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-3xl font-bold text-primary-600 mb-2">3 ft</div>
                  <p className="text-sm text-gray-600">Between carts</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-3xl font-bold text-primary-600 mb-2">3 ft</div>
                  <p className="text-sm text-gray-600">From mailboxes</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-3xl font-bold text-primary-600 mb-2">3 ft</div>
                  <p className="text-sm text-gray-600">From cars & obstacles</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Wheels Toward House
                </h3>
                <p className="text-gray-700">
                  Position your cart with the wheels touching the curb and the handle/lid opening facing the street. This allows the truck arm to grab and lift correctly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  At the Curb, Not in the Street
                </h3>
                <p className="text-gray-700">
                  Place your cart on the grass or sidewalk edge, right at the curb line. Don't put it in the street where it can block traffic or get hit.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Lid Closed Completely
                </h3>
                <p className="text-gray-700">
                  Make sure your lid is fully closed. Overflowing carts or open lids can cause spillage and may result in your cart being skipped.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Out by 6:00 AM
                </h3>
                <p className="text-gray-700">
                  Have your cart at the curb by 6:00 AM on your scheduled pickup day. You can set it out the night before if you leave for work early.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-3">Don't Block These</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Mailboxes - postal carriers need access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Fire hydrants - emergency access required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Driveways - yours or your neighbors'</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Parked cars - our arm needs clearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Low-hanging branches or wires</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/what-time-does-trash-truck-come" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What time does the trash truck come?</span>
                </Link>
                <Link href="/tifton/faq/what-if-trash-wasnt-picked-up" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What if my trash wasn't picked up?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Cart Placement?</h2>
          <p className="text-primary-100 mb-6">Call our Tifton office - we're happy to help!</p>
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
