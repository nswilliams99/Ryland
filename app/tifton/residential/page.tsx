import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Residential Trash Service Tifton GA | Ryland Environmental",
  description: "Residential trash pickup for City of Tifton residents. Sign up at City Hall. Weekly curbside collection. Call (229) 382-4411 for cart delivery and missed pickups.",
};

export default function ResidentialPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tifton Office", href: "/tifton" },
          { label: "Residential" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
            City of Tifton
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Residential Trash Service in Tifton, GA
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mb-6">
            Weekly curbside pickup for City of Tifton residents
          </p>
          <div className="flex items-center gap-4 text-primary-100">
            <a href="tel:229-382-4411" className="flex items-center gap-2 hover:text-white">
              <span>📞</span> (229) 382-4411
            </a>
            <span>Mon-Fri 8am-5pm</span>
          </div>
        </div>
      </section>

      {/* Residential Trash Service - Help Guide */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Important Notice Banner */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">⚠️</span>
              <div>
                <h2 className="text-lg font-bold text-amber-800 mb-1">You sign up at City Hall, NOT with Ryland</h2>
                <p className="text-amber-700">
                  Trash service is included in your City of Tifton utility bill.
                </p>
              </div>
            </div>
          </div>

          {/* Two Columns: Starting Service / Already Signed Up */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Starting Service */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Starting Service?</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900">City of Tifton Customer Service</p>
                  <p className="text-gray-600">130 1st Street East</p>
                  <p className="text-gray-600">Tifton, GA 31794</p>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:229-391-3957" className="text-primary-600 font-semibold hover:text-primary-700">(229) 391-3957</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>🕗</span>
                  <span className="text-gray-700">Mon-Fri 8am-5pm</span>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-red-800 font-semibold text-sm">IN-PERSON ONLY - Online signup does not work</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a 
                    href="https://maps.google.com/?q=130+1st+Street+East+Tifton+GA+31794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
                  >
                    Get Directions
                  </a>
                  <a 
                    href="https://tifton.net/184/Customer-Service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
                  >
                    City of Tifton Website
                  </a>
                </div>
              </div>
            </div>

            {/* Already Signed Up */}
            <div className="bg-primary-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Already Signed Up?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🏠</span>
                  <div>
                    <p className="font-semibold">Waiting for your cart?</p>
                    <p className="text-primary-100">Call Ryland: <a href="tel:229-382-4411" className="underline hover:text-white">(229) 382-4411</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">📦</span>
                  <div>
                    <p className="font-semibold">Have a missed pickup?</p>
                    <p className="text-primary-100">Call Ryland: <a href="tel:229-382-4411" className="underline hover:text-white">(229) 382-4411</a></p>
                  </div>
                </div>
                <p className="text-primary-200 text-sm pt-2">Mon-Fri 8am-5pm</p>
              </div>
            </div>
          </div>

          {/* What to Bring */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What to Bring to City Hall</h3>
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-semibold text-gray-900">Photo ID</td>
                    <td className="px-6 py-4 text-gray-600">Driver's License or Passport</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Proof of Residence</td>
                    <td className="px-6 py-4 text-gray-600">Lease agreement OR home purchase contract</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What Happens Next</h3>
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-2 lg:gap-0">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 flex-1 w-full lg:w-auto">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mb-3">1</div>
                <p className="font-semibold text-gray-900">You sign up at City Hall</p>
              </div>
              <div className="hidden lg:flex items-center justify-center px-2">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="lg:hidden flex items-center justify-center py-1">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 flex-1 w-full lg:w-auto">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mb-3">2</div>
                <p className="font-semibold text-gray-900">City notifies Ryland</p>
                <p className="text-sm text-gray-600">End of each business day</p>
              </div>
              <div className="hidden lg:flex items-center justify-center px-2">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="lg:hidden flex items-center justify-center py-1">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 flex-1 w-full lg:w-auto">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mb-3">3</div>
                <p className="font-semibold text-gray-900">We deliver your cart</p>
                <p className="text-sm text-gray-600">96-gallon trash cart</p>
              </div>
              <div className="hidden lg:flex items-center justify-center px-2">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="lg:hidden flex items-center justify-center py-1">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 flex-1 w-full lg:w-auto">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mb-3">4</div>
                <p className="font-semibold text-gray-900">Service begins</p>
                <p className="text-sm text-gray-600">On your pickup day</p>
              </div>
            </div>
          </div>

          {/* Pickup Days by Zone */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pickup Days by Zone</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-600"></div>
                <div>
                  <p className="font-semibold text-gray-900">Red</p>
                  <p className="text-gray-600">Monday</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                <div>
                  <p className="font-semibold text-gray-900">Blue</p>
                  <p className="text-gray-600">Tuesday</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
                <div>
                  <p className="font-semibold text-gray-900">Yellow</p>
                  <p className="text-gray-600">Thursday</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-600"></div>
                <div>
                  <p className="font-semibold text-gray-900">Purple</p>
                  <p className="text-gray-600">Friday</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-4">Put cart out by <strong>6:00 AM</strong></p>
          </div>

          {/* Holiday Schedule */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Holiday Schedule</h3>
            <p className="text-gray-600 mb-3">Pickup is delayed ONE day after:</p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border border-gray-200">New Year's Day</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border border-gray-200">Memorial Day</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border border-gray-200">Thanksgiving</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm border border-gray-200">Christmas</span>
            </div>
          </div>

          {/* Service Area Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800">
              <strong>Residential curbside service is available within City of Tifton limits only.</strong>
            </p>
            <p className="text-blue-700 text-sm mt-1">
              Live outside city limits? See our <Link href="/tifton/roll-off" className="underline font-semibold">roll-off services</Link> for Tift County.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-6">Find answers about pickup schedules, billing, cart placement, and more.</p>
          <Link
            href="/tifton/faq"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            View Frequently Asked Questions
          </Link>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Services in Tifton</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Commercial Dumpsters</h3>
              <p className="text-gray-600 mb-4">4, 6, 8 yard dumpsters for Tifton businesses. Up to 3x weekly pickup.</p>
              <Link href="/tifton/commercial" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</Link>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Roll-Off & Industrial</h3>
              <p className="text-gray-600 mb-4">Dumpster rentals, compactors, and industrial service. All of Tift County.</p>
              <Link href="/tifton/roll-off" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</Link>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free Recycling Drop-Off</h3>
              <p className="text-gray-600 mb-4">Drop off recyclables at our Carpenter Road location.</p>
              <Link href="/tifton/recycling" className="text-primary-600 font-semibold hover:text-primary-700">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section className="py-16 bg-primary-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions? We're here to help.</h2>
          <div className="space-y-4 text-white mb-8">
            <a href="tel:229-382-4411" className="block text-3xl font-bold hover:text-primary-200">(229) 382-4411</a>
            <p className="text-primary-200">Monday - Friday, 8am - 5pm</p>
            <p className="text-primary-200">2508 Carpenter Road South, Tifton, GA 31793</p>
          </div>
          <a 
            href="https://maps.google.com/?q=2508+Carpenter+Road+South+Tifton+GA+31793"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}
