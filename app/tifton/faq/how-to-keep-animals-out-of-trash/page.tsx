import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Keep Animals Out of Trash | Tifton GA | Ryland Environmental",
  description: "Prevent raccoons, dogs, and other animals from getting into your trash in Tifton. Tips for secure cart placement and deterrents.",
};

export default function AnimalsOutOfTrash() {
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
            How Do I Keep Animals Out of My Trash?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Keep your lid closed, don't put carts out too early, bag all food waste securely, and consider using ammonia or cayenne pepper as deterrents around your cart.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Trash Raiders in Tifton</h2>
            <p className="text-gray-700 mb-6">
              Raccoons, stray dogs, cats, possums, and even crows can make a mess of your trash. Here's how to keep them out:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Keep the Lid Closed
                </h3>
                <p className="text-gray-700">
                  The 96-gallon carts we provide have secure lids. Make sure yours closes completely. If your lid is damaged or won't close, call us for a replacement cart.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Don't Put Carts Out Too Early
                </h3>
                <p className="text-gray-700">
                  The longer your cart sits at the curb, the more time animals have to investigate. Put it out the night before pickup (after dark) or early morning - not days ahead.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Double-Bag Food Waste
                </h3>
                <p className="text-gray-700">
                  Food smells attract animals. Double-bag meat scraps, bones, and other food waste. Tie bags tightly to contain odors.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Use Natural Deterrents
                </h3>
                <p className="text-gray-700">
                  Spray ammonia or sprinkle cayenne pepper around your cart. Animals dislike these strong smells. Reapply after rain.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-primary-600 mr-3">✓</span>
                  Store Cart in Garage Until Pickup Day
                </h3>
                <p className="text-gray-700">
                  If animals are persistent, keep your cart in the garage or shed until pickup day. This eliminates access entirely.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">For Persistent Problems</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Use a bungee cord across the lid (remove before pickup day)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Install motion-activated lights or sprinklers near your cart</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Contact Tifton Animal Control for recurring wildlife issues</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/how-to-get-rid-of-trash-can-smell" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">How do I get rid of trash can smell?</span>
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
          <p className="text-primary-100 mb-6">If your cart lid is damaged, call us for a replacement.</p>
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
