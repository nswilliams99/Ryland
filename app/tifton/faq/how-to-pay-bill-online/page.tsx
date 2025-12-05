import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Pay Your Trash Bill Online | Tifton GA | Ryland Environmental",
  description: "Pay your Tifton trash service bill online, by phone, or by mail. Learn about payment options, AutoPay, and paperless billing.",
};

export default function PayBillOnline() {
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
            <span className="text-gray-600">How Do I Pay My Bill Online?</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            General
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How Do I Pay My Bill Online?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Call our Tifton office at (229) 382-4411 to set up online payments, AutoPay, or to pay over the phone. We accept credit cards, debit cards, and bank transfers.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">Pay by Phone</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Call (229) 382-4411 during business hours. Have your account number and payment method ready.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">AutoPay</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Set up automatic payments from your bank account or credit card. Never miss a payment.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">Pay by Mail</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Send a check or money order to our office. Include your account number on the payment.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900">Pay in Person</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Visit our Tifton office during business hours. Cash, check, and cards accepted.
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Go Paperless</h3>
              <p className="text-primary-700 mb-4">
                Sign up for paperless billing and receive your statements by email. It's faster, more convenient, and better for the environment.
              </p>
              <p className="text-primary-700 text-sm">
                Call (229) 382-4411 to switch to paperless billing.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Avoid Late Fees
              </h3>
              <p className="text-amber-700">
                Set up AutoPay to ensure your payment is always on time. Late payments may result in service interruption.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/what-if-trash-wasnt-picked-up" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What if my trash wasn't picked up?</span>
                </Link>
                <Link href="/tifton/faq/what-time-does-trash-truck-come" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">What time does the trash truck come?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Pay Your Bill?</h2>
          <p className="text-primary-100 mb-6">Call our Tifton office to make a payment or set up AutoPay.</p>
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
