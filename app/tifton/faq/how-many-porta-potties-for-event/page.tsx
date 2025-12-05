import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "How Many Porta Potties Do I Need for My Event? | Tift County | Ryland Environmental",
  description: "Porta potty rental guide for events in Tift County. Generally 1 unit per 50 guests for a 4-hour event. More for longer events or alcohol service.",
};

export default function PortaPottyCount() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tifton Office", href: "/tifton" },
          { label: "FAQs", href: "/tifton/faq" },
          { label: "How Many Porta Potties Do I Need for My Event?" },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            Porta Potties - All of Tift County
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            How Many Porta Potties Do I Need for My Event?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Generally 1 porta potty per 50 guests for a 4-hour event. Add more for longer events, alcohol service, or if no other restrooms are available.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 flex items-center">
            <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-green-700">
              <strong>Service Area:</strong> Porta potty rental is available throughout all of Tift County.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference Guide</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-gray-50 rounded-xl overflow-hidden">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Event Size</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">4 Hours</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">8 Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-700">Up to 50 guests</td>
                    <td className="px-6 py-4 text-gray-700">1 unit</td>
                    <td className="px-6 py-4 text-gray-700">2 units</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">50-100 guests</td>
                    <td className="px-6 py-4 text-gray-700">2 units</td>
                    <td className="px-6 py-4 text-gray-700">3-4 units</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">100-250 guests</td>
                    <td className="px-6 py-4 text-gray-700">3-5 units</td>
                    <td className="px-6 py-4 text-gray-700">5-7 units</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-4 text-gray-700">250-500 guests</td>
                    <td className="px-6 py-4 text-gray-700">5-8 units</td>
                    <td className="px-6 py-4 text-gray-700">8-12 units</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-700">500+ guests</td>
                    <td className="px-6 py-4 text-gray-700">Call for quote</td>
                    <td className="px-6 py-4 text-gray-700">Call for quote</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Factors That Increase Your Needs</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-amber-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">+</span>
                  <span><strong>Alcohol being served:</strong> Add 20-30% more units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">+</span>
                  <span><strong>Mostly female guests:</strong> Add 20% more units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">+</span>
                  <span><strong>No other restrooms nearby:</strong> Add 20% more units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">+</span>
                  <span><strong>Food-heavy event:</strong> Add 1-2 extra units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 font-bold">+</span>
                  <span><strong>Multi-day event:</strong> More units + scheduled servicing</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Type Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Weddings</h3>
                <p className="text-gray-600 text-sm">
                  1 per 35-40 guests recommended. Consider adding a luxury restroom trailer for the wedding party.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Construction Sites</h3>
                <p className="text-gray-600 text-sm">
                  OSHA requires 1 unit per 20 workers for full-time job sites. Weekly service included.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Festivals & Fairs</h3>
                <p className="text-gray-600 text-sm">
                  1 per 50-75 guests with frequent servicing throughout the event.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Family Reunions</h3>
                <p className="text-gray-600 text-sm">
                  1 per 25-35 guests for all-day outdoor events.
                </p>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Let Us Help You Plan</h3>
              <p className="text-primary-700">
                Not sure how many you need? Tell us about your event - the type, guest count, duration, and location - and we'll recommend the right number. It's better to have one extra than to run short!
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                <Link href="/tifton/faq/how-often-porta-potties-cleaned" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors group">
                  <span className="text-primary-600 group-hover:text-primary-700 font-medium">How often are porta potties cleaned?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Planning an Event?</h2>
          <p className="text-primary-100 mb-6">Call us for a free quote customized to your event needs.</p>
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
