import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Tifton Trash Service FAQ | Ryland Environmental",
  description: "Frequently asked questions about trash pickup, dumpster rental, and waste services in Tifton GA and Tift County. Get answers about schedules, pricing, and service areas.",
};

const faqCategories = [
  {
    title: "General Questions",
    description: "Common questions about our services",
    faqs: [
      {
        question: "What time does the trash truck come in Tifton?",
        answer: "Trash trucks begin routes at 6:30 AM. Have your cart at the curb by 6:00 AM.",
        href: "/tifton/faq/what-time-does-trash-truck-come",
      },
      {
        question: "What if my trash wasn't picked up?",
        answer: "Call our office by 6:00 PM on your pickup day to report a missed collection.",
        href: "/tifton/faq/what-if-trash-wasnt-picked-up",
      },
      {
        question: "What's the holiday pickup schedule?",
        answer: "Pickup is delayed one day after New Year's, Memorial Day, Thanksgiving, and Christmas.",
        href: "/tifton/faq/holiday-pickup-schedule",
      },
      {
        question: "How do I pay my bill online?",
        answer: "Pay online through our customer portal or call our office for payment options.",
        href: "/tifton/faq/how-to-pay-bill-online",
      },
    ],
  },
  {
    title: "Residential Service",
    description: "City of Tifton limits only",
    faqs: [
      {
        question: "How do I get rid of trash can smell?",
        answer: "Rinse your cart regularly, use baking soda, and bag all waste before placing in cart.",
        href: "/tifton/faq/how-to-get-rid-of-trash-can-smell",
      },
      {
        question: "How do I keep animals out of my trash?",
        answer: "Keep lid closed, use animal-resistant containers, and don't put carts out too early.",
        href: "/tifton/faq/how-to-keep-animals-out-of-trash",
      },
      {
        question: "Where should I place my trash can for pickup?",
        answer: "Place at curb with wheels toward house, 3 feet apart from recycling, by 6:00 AM.",
        href: "/tifton/faq/where-to-place-trash-can-for-pickup",
      },
      {
        question: "What can I put in my trash cart?",
        answer: "Household waste in bags, small yard debris, and non-hazardous materials.",
        href: "/tifton/faq/what-can-i-put-in-trash",
      },
      {
        question: "What can't go in my trash cart?",
        answer: "Hazardous waste, electronics, tires, appliances, and construction debris.",
        href: "/tifton/faq/what-cant-go-in-trash",
      },
      {
        question: "How do I schedule a bulk pickup?",
        answer: "Call our office to schedule pickup of large items like furniture and appliances.",
        href: "/tifton/faq/how-to-schedule-bulk-pickup",
      },
    ],
  },
  {
    title: "Commercial Service",
    description: "City of Tifton limits only",
    faqs: [
      {
        question: "What size dumpster does my business need?",
        answer: "We offer 96-gallon carts, 4, 6, and 8-yard front-load dumpsters based on your volume.",
        href: "/tifton/faq/what-size-dumpster-for-business",
      },
      {
        question: "How often is my dumpster emptied?",
        answer: "Weekly service is standard, with more frequent pickups available as needed.",
        href: "/tifton/faq/how-often-dumpster-emptied",
      },
      {
        question: "What can't go in a commercial dumpster?",
        answer: "Hazardous materials, liquids, medical waste, and electronics are prohibited.",
        href: "/tifton/faq/what-cant-go-in-commercial-dumpster",
      },
    ],
  },
  {
    title: "Roll-Off Dumpster Rental",
    description: "Available throughout Tift County",
    faqs: [
      {
        question: "What size roll-off dumpster do I need?",
        answer: "20-yard for small projects, 30-yard for medium, 40-yard for large construction jobs.",
        href: "/tifton/faq/what-size-dumpster-do-i-need",
      },
      {
        question: "How much does dumpster rental cost?",
        answer: "Pricing varies by size and rental duration. Call for a free quote.",
        href: "/tifton/faq/dumpster-rental-cost",
      },
      {
        question: "How long can I keep a roll-off dumpster?",
        answer: "Standard rental is 7-14 days, with extensions available for longer projects.",
        href: "/tifton/faq/how-long-can-i-keep-dumpster",
      },
      {
        question: "Do I need a permit for a dumpster?",
        answer: "Permits may be required if placing on public property. We can help you check.",
        href: "/tifton/faq/do-i-need-permit-for-dumpster",
      },
      {
        question: "What can't go in a roll-off dumpster?",
        answer: "Hazardous waste, tires, batteries, paint, and certain appliances are prohibited.",
        href: "/tifton/faq/what-cant-go-in-rolloff-dumpster",
      },
    ],
  },
  {
    title: "Porta Potty Rental",
    description: "Available throughout Tift County",
    faqs: [
      {
        question: "How many porta potties do I need for my event?",
        answer: "Generally 1 unit per 50 guests for a 4-hour event. More for longer events.",
        href: "/tifton/faq/how-many-porta-potties-for-event",
      },
      {
        question: "How often are porta potties cleaned?",
        answer: "Weekly service is standard, with daily service available for events.",
        href: "/tifton/faq/how-often-porta-potties-cleaned",
      },
    ],
  },
];

export default function FAQHub() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Tifton Office", href: "/tifton" },
          { label: "FAQs" },
        ]}
      />

      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Find answers to common questions about trash pickup, dumpster rental, and waste services in Tifton and Tift County.
          </p>
        </div>
      </section>

      <section className="py-8 bg-primary-50 border-b border-primary-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-primary-800">
              <strong>Service Area Note:</strong> Residential and commercial service available inside Tifton city limits. Roll-off dumpsters and porta potties available throughout Tift County.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <Link
                      key={faqIndex}
                      href={faq.href}
                      className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all group"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                      <span className="inline-flex items-center text-primary-600 text-sm font-medium mt-3">
                        Read more
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-primary-100 mb-6">Our team is here to help with any questions about service in Tifton and Tift County.</p>
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
