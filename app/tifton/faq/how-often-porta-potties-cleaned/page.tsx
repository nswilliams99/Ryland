import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "How Often Are Porta Potties Cleaned? | Tift County | Ryland Environmental",
  description: "Porta potty cleaning schedule in Tift County. Weekly service is standard for job sites, with daily service available for events.",
};

export default function PortaPottyCleaning() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tifton Office", href: "/tifton" },
          { label: "FAQs", href: "/tifton/faq" },
          { label: "How Often Are Porta Potties Cleaned?" },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            Porta Potties - All of Tift County
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How Often Are Porta Potties Cleaned?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Weekly service is standard for construction sites and long-term rentals. For events, we offer daily or on-demand service to keep facilities fresh throughout your event.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 flex items-center">
            <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-green-700">
              <strong>Service Area:</strong> Porta potty service is available throughout all of Tift County.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Frequency Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Weekly Service</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Standard for construction sites and long-term rentals. Includes pumping, cleaning, restocking, and sanitizing.
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Best for:</strong> Job sites, farm operations, property maintenance
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Twice Weekly</h3>
                <p className="text-gray-600 text-sm mb-3">
                  For busier job sites or locations with higher usage.
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Best for:</strong> Large crews, busy commercial sites
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-400">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Event Service</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Daily or on-demand servicing during your event to keep units fresh.
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Best for:</strong> Weddings, festivals, multi-day events
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Schedule</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We'll work with you to create a service schedule that fits your needs.
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Best for:</strong> Unique situations, variable usage
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included in Each Service</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span><strong>Waste removal:</strong> Complete pump-out of the holding tank</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span><strong>Cleaning:</strong> Interior surfaces wiped down and sanitized</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span><strong>Deodorizing:</strong> Fresh chemicals added to control odor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span><strong>Restocking:</strong> Toilet paper and hand sanitizer refilled</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span><strong>Inspection:</strong> Check for damage or needed repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3">Need an Extra Service?</h3>
              <p className="text-amber-700">
                If your unit needs attention between scheduled services, just call us. We can arrange an extra pump-out or cleaning as needed. This is common during busy periods or unexpected high usage.
              </p>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Choosing the Right Frequency</h3>
              <p className="text-primary-700 mb-4">
                Not sure how often you need service? Here's a general guide:
              </p>
              <ul className="space-y-2 text-primary-700 text-sm">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>1-10 users:</strong> Weekly service is usually sufficient</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>10-20 users:</strong> Consider twice weekly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span><strong>Events:</strong> Daily service recommended for guest satisfaction</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/how-many-porta-potties-for-event" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">How many porta potties do I need for my event?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Rent Porta Potties?</h2>
          <p className="text-primary-100 mb-6">Call us to discuss your needs and set up a service schedule.</p>
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
