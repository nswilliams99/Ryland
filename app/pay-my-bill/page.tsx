import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pay My Bill | Ryland Environmental",
  description: "Pay your Ryland Environmental bill online. Access your account, view invoices, and make secure payments.",
};

export default function PayMyBillPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-600 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold">Pay My Bill</h1>
          <p className="mt-2 text-primary-100">Access your account to view and pay invoices</p>
        </div>
      </div>
      
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mx-auto w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Payment Portal</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Access your Ryland Environmental account to view invoices, make payments, and manage your billing information.
          </p>
          
          <a
            href="https://rylandenvironmental-portal.amcsplatform.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Go to Payment Portal
          </a>
          
          <p className="mt-6 text-sm text-gray-500">
            Opens in a new secure window
          </p>
        </div>
        
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-2">New Customer?</h3>
            <p className="text-gray-600 text-sm mb-4">
              If this is your first time, click "Sign Up" on the portal to create your account.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Contact our team for billing questions or payment assistance.
            </p>
            <a href="tel:229-382-4411" className="text-primary-600 font-semibold hover:text-primary-700">
              (229) 382-4411
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
