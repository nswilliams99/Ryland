import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "What Can I Put in My Trash Cart? | Tifton GA | Ryland Environmental",
  description: "Accepted items for residential trash pickup in Tifton GA. Household waste, small yard debris, and non-hazardous materials.",
};

export default function WhatCanIPut() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tifton Office", href: "/tifton" },
          { label: "FAQs", href: "/tifton/faq" },
          { label: "What Can I Put in My Trash Cart?" },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            Residential - City of Tifton
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What Can I Put in My Trash Cart?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Bagged household waste, small yard debris, and non-hazardous materials. Everything must fit in the cart with the lid closed.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accepted Items</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Household Waste
                </h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Kitchen waste (bagged)</li>
                  <li>• Food scraps and containers</li>
                  <li>• Paper products</li>
                  <li>• Packaging materials</li>
                  <li>• Diapers (double-bagged)</li>
                  <li>• Pet waste (bagged)</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Small Yard Debris
                </h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Grass clippings (bagged)</li>
                  <li>• Small branches (under 4 ft)</li>
                  <li>• Leaves (bagged)</li>
                  <li>• Weeds and trimmings</li>
                  <li>• Small amounts of dirt</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  General Items
                </h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Broken toys and household items</li>
                  <li>• Clothing and textiles</li>
                  <li>• Shoes</li>
                  <li>• Books and magazines</li>
                  <li>• Pillows and bedding</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Small Household Items
                </h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Small broken appliances</li>
                  <li>• Lamps and light fixtures</li>
                  <li>• Picture frames</li>
                  <li>• Small furniture pieces</li>
                  <li>• Rugs (rolled to fit)</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Important Rules</h3>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">!</span>
                  <span><strong>Lid must close</strong> - If it doesn't fit with lid closed, it won't be collected</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">!</span>
                  <span><strong>Bag all loose items</strong> - Loose trash can spill during pickup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">!</span>
                  <span><strong>Weight limit</strong> - Cart should be liftable by the truck arm (under 200 lbs)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Accepted in Your Cart</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-red-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Hazardous Materials
                  </h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Paint, stains, solvents</li>
                    <li>• Batteries (all types)</li>
                    <li>• Motor oil, antifreeze</li>
                    <li>• Pesticides, chemicals</li>
                    <li>• Propane tanks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Large Items & Electronics
                  </h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• TVs, computers, monitors</li>
                    <li>• Appliances (refrigerators, etc.)</li>
                    <li>• Mattresses, large furniture</li>
                    <li>• Tires</li>
                    <li>• Construction debris</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-red-200">
                <Link href="/tifton/faq/what-cant-go-in-trash" className="text-red-700 font-semibold hover:text-red-800 underline">
                  See full list of prohibited items and disposal options →
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/what-cant-go-in-trash" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What can't go in my trash cart?</span>
                </Link>
                <Link href="/tifton/faq/how-to-schedule-bulk-pickup" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">How do I schedule a bulk pickup?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have Items That Won't Fit?</h2>
          <p className="text-primary-100 mb-6">Call us about bulk pickup or roll-off dumpster rental for larger items.</p>
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
