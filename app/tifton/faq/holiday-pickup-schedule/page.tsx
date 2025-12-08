import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Holiday Pickup Schedule | Tifton GA Trash Service | Ryland Environmental",
  description: "Tifton trash pickup holiday schedule. Pickup is delayed one day after New Year's, Memorial Day, Thanksgiving, and Christmas.",
};

export default function HolidaySchedule() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tifton Office", href: "/tifton" },
          { label: "FAQs", href: "/tifton/faq" },
          { label: "Holiday Pickup Schedule" },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            General
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Holiday Pickup Schedule
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl mb-8">
            <h2 className="text-lg font-bold text-primary-800 mb-2">Quick Answer</h2>
            <p className="text-primary-700">
              Trash pickup is delayed by ONE day for the rest of the week after these holidays: New Year's Day, Memorial Day, Thanksgiving, and Christmas. If the holiday falls on Monday, Monday's pickup moves to Tuesday, Tuesday to Wednesday, and so on.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Holidays That Affect Pickup</h2>
            <p className="text-gray-700 mb-6">
              Ryland Environmental observes four major holidays each year. On these days, our crews spend time with their families - because at Ryland, you're not just a number, you're our neighbor.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-bold text-amber-800">New Year's Day</h3>
                </div>
                <p className="text-amber-700 text-sm">January 1</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-bold text-amber-800">Memorial Day</h3>
                </div>
                <p className="text-amber-700 text-sm">Last Monday in May</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-bold text-amber-800">Thanksgiving</h3>
                </div>
                <p className="text-amber-700 text-sm">Fourth Thursday in November</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-8 h-8 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-bold text-amber-800">Christmas Day</h3>
                </div>
                <p className="text-amber-700 text-sm">December 25</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Holidays with Regular Pickup</h2>
            <p className="text-gray-700 mb-6">
              We operate on a normal schedule for these federal holidays. Your trash will be picked up on your regular pickup day.
            </p>
            
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-between items-center py-2 border-b border-primary-200 last:border-0">
                  <span className="font-medium text-primary-800">Martin Luther King Jr. Day</span>
                  <span className="text-primary-600 text-sm">3rd Monday in January</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200 last:border-0">
                  <span className="font-medium text-primary-800">Presidents' Day</span>
                  <span className="text-primary-600 text-sm">3rd Monday in February</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200 last:border-0">
                  <span className="font-medium text-primary-800">Juneteenth</span>
                  <span className="text-primary-600 text-sm">June 19</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200 last:border-0">
                  <span className="font-medium text-primary-800">Independence Day</span>
                  <span className="text-primary-600 text-sm">July 4</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200 last:border-0">
                  <span className="font-medium text-primary-800">Labor Day</span>
                  <span className="text-primary-600 text-sm">1st Monday in September</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200 last:border-0">
                  <span className="font-medium text-primary-800">Columbus Day</span>
                  <span className="text-primary-600 text-sm">2nd Monday in October</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-200 last:border-0 sm:col-span-2">
                  <span className="font-medium text-primary-800">Veterans Day</span>
                  <span className="text-primary-600 text-sm">November 11</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How the Delay Works</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-4">
                When a holiday falls during the week, all pickups from that day forward are pushed back by one day:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 pr-4 font-semibold text-gray-900">If Holiday is On:</th>
                      <th className="text-left py-2 font-semibold text-gray-900">Then Pickup Moves To:</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-4">Monday</td>
                      <td className="py-2">Mon → Tue, Tue → Wed, Wed → Thu, Thu → Fri, Fri → Sat</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-4">Tuesday</td>
                      <td className="py-2">Tue → Wed, Wed → Thu, Thu → Fri, Fri → Sat</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-4">Wednesday</td>
                      <td className="py-2">Wed → Thu, Thu → Fri, Fri → Sat</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-4">Thursday</td>
                      <td className="py-2">Thu → Fri, Fri → Sat</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Friday</td>
                      <td className="py-2">Fri → Sat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Example</h3>
              <p className="text-primary-700">
                If Christmas falls on a Wednesday and your normal pickup day is Thursday, your trash will be picked up on Friday that week. Friday's regular customers will be picked up on Saturday.
              </p>
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
          <h2 className="text-2xl font-bold text-white mb-4">Questions About Your Schedule?</h2>
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
