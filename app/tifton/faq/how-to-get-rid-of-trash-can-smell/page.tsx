import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "How to Get Rid of Trash Can Smell | Tifton GA | Ryland Environmental",
  description: "Tips to eliminate trash can odor in Tifton. Clean your cart, use baking soda, bag all waste, and keep the lid closed between pickups.",
};

export default function TrashCanSmell() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tifton Office", href: "/tifton" },
          { label: "FAQs", href: "/tifton/faq" },
          { label: "How Do I Get Rid of Trash Can Smell?" },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            Residential - City of Tifton
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How Do I Get Rid of Trash Can Smell?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Rinse your cart regularly with a hose, sprinkle baking soda in the bottom, always bag your waste before placing in the cart, and keep the lid closed between pickups.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips to Eliminate Trash Can Odor</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Bag All Waste
                </h3>
                <p className="text-gray-700">
                  Never put loose trash in your cart. Use sturdy garbage bags and tie them securely. This prevents liquids from leaking and food scraps from sticking to the bottom of your cart.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Rinse Your Cart Monthly
                </h3>
                <p className="text-gray-700">
                  After pickup day, rinse your empty cart with a garden hose. Let it dry completely in the sun before putting the lid back on. The sun's UV rays help kill odor-causing bacteria.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Use Baking Soda
                </h3>
                <p className="text-gray-700">
                  Sprinkle a cup of baking soda in the bottom of your clean, dry cart. It absorbs odors naturally. Reapply after each cleaning.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Keep the Lid Closed
                </h3>
                <p className="text-gray-700">
                  Always keep your cart lid closed when not adding trash. This prevents rain from getting in, reduces heat buildup, and keeps animals out.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Store in Shade
                </h3>
                <p className="text-gray-700">
                  When possible, store your cart in a shaded area. Heat accelerates decomposition and odor. A garage or carport is ideal.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Extra Tips for Hot Georgia Summers</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Double-bag meat scraps and diapers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Freeze especially smelly items until pickup day</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Use scented trash bags or add a dryer sheet to the bottom of your cart</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/how-to-keep-animals-out-of-trash" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">How do I keep animals out of my trash?</span>
                </Link>
                <Link href="/tifton/faq/where-to-place-trash-can-for-pickup" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">Where should I place my trash can for pickup?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need a Replacement Cart?</h2>
          <p className="text-primary-100 mb-6">If your cart is damaged or beyond cleaning, call us for a replacement.</p>
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
