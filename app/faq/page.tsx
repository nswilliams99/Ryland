import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQs | Ryland Environmental",
  description: "Frequently asked questions about Ryland Environmental waste management services. Learn about residential trash pickup, recycling, dumpster rental, and more.",
  keywords: "trash service FAQ, recycling questions, dumpster rental FAQ, Ryland Environmental",
};

const faqCategories = [
  {
    category: "Residential Service",
    faqs: [
      {
        question: "What day is my trash pickup?",
        answer: "Pickup days vary by location. Use our address search on the residential page to find your specific pickup schedule, or contact your local Ryland office.",
      },
      {
        question: "How should I place my cart for pickup?",
        answer: "Place carts 3-5 feet from the roadway and 3-5 feet from any obstructions such as poles, mailboxes, cars, or other carts. Handles should face the house with arrows on the lid facing toward the curb.",
      },
      {
        question: "What time should my cart be out?",
        answer: "Carts must be at the curb by 6:00 AM on your pickup day. We recommend placing them out the night before to ensure they're ready when our trucks arrive.",
      },
      {
        question: "Can I schedule bulky item pickup?",
        answer: "Yes! Each customer can schedule 2 bulky items per week as part of standard residential service. Bulky items include furniture and appliances. Construction debris and extra garbage bags are not included.",
      },
      {
        question: "Do I need to bag my trash?",
        answer: "Yes, please bag all trash to help prevent litter and keep your cart clean. This also helps our automated trucks operate efficiently.",
      },
      {
        question: "How do I start residential service?",
        answer: "Visit our residential page and enter your address to check availability in your area. You can sign up online or contact your local office for assistance.",
      },
      {
        question: "What if my trash wasn't picked up?",
        answer: "First, verify it was your scheduled pickup day. If so, contact your local Ryland office. Common reasons for missed pickups include blocked access, carts not at the curb by 6 AM, or holiday schedule changes.",
      },
      {
        question: "Do you offer recycling service?",
        answer: "Yes, recycling is available at most locations. Check with your local office for recycling guidelines and pickup schedules in your area.",
      },
    ],
  },
  {
    category: "Commercial Dumpsters",
    faqs: [
      {
        question: "What size dumpsters are available for businesses?",
        answer: "We offer 4, 6, and 8 cubic yard front-load dumpsters for commercial customers. Larger roll-off containers are also available for businesses with higher waste volumes.",
      },
      {
        question: "How often will my dumpster be emptied?",
        answer: "Pickup frequency depends on your business needs. We offer weekly, bi-weekly, or custom schedules. Contact us to determine the best pickup schedule for your waste volume.",
      },
      {
        question: "Can I change my pickup schedule?",
        answer: "Yes, we can adjust your pickup schedule as your business needs change. Contact your local office to modify your service.",
      },
      {
        question: "What can I put in a commercial dumpster?",
        answer: "Commercial dumpsters are for general business waste. Hazardous materials, liquids, electronics, and certain other items are prohibited. Contact us for a complete list of accepted materials.",
      },
    ],
  },
  {
    category: "Roll-Off Dumpsters",
    faqs: [
      {
        question: "What sizes of roll-off containers do you offer?",
        answer: "We offer 20, 30, and 40 cubic yard roll-off containers for construction, demolition, and large cleanout projects.",
      },
      {
        question: "How long can I keep a roll-off dumpster?",
        answer: "Standard rental periods vary. Contact us to discuss your project timeline and we'll work with you on a rental period that fits your needs.",
      },
      {
        question: "How do I order a roll-off dumpster?",
        answer: "You can order online at app.trashjoes.com/h/ryland or call us at (229) 382-4411. We'll schedule delivery based on your project start date.",
      },
      {
        question: "What can I put in a roll-off dumpster?",
        answer: "Roll-offs accept construction debris, demolition materials, furniture, appliances, and general cleanout waste. Hazardous materials, tires, batteries, and certain other items are prohibited.",
      },
      {
        question: "Do you offer same-day delivery?",
        answer: "Same-day delivery may be available depending on location and container availability. Call us to check availability for your area.",
      },
    ],
  },
  {
    category: "Billing & Account",
    faqs: [
      {
        question: "How do I pay my bill?",
        answer: "You can pay online through our customer portal at rylandenvironmental-portal.amcsplatform.com, or call our office to pay by phone.",
      },
      {
        question: "When is my payment due?",
        answer: "Payment terms vary by service type. Check your invoice or customer portal for your specific due date.",
      },
      {
        question: "How do I update my account information?",
        answer: "Log into the customer portal to update your contact information, or call your local Ryland office for assistance.",
      },
      {
        question: "How do I cancel service?",
        answer: "Contact your local Ryland office to cancel or suspend service. We'll coordinate cart pickup if applicable.",
      },
    ],
  },
  {
    category: "HOA & Municipal Services",
    faqs: [
      {
        question: "Do you offer HOA waste management contracts?",
        answer: "Yes! We partner with homeowners associations to provide community-wide trash and recycling service. Contact us to discuss your HOA's needs.",
      },
      {
        question: "Can our town contract with Ryland for residential service?",
        answer: "Absolutely. We work with municipalities and towns across Georgia to provide residential waste services. Contact us to learn more about municipal partnerships.",
      },
      {
        question: "What are the benefits of an HOA or municipal contract?",
        answer: "Contract customers benefit from consistent community-wide service, simplified billing, dedicated support, and often competitive pricing.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "FAQs" },
      ]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
              Find answers to common questions about our waste management services.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-6 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {faqCategories.map((cat, index) => (
              <a
                key={index}
                href={`#${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              id={category.category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <div
                    key={faqIndex}
                    className="bg-white rounded-xl border border-gray-200 p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Contact our team and we'll be happy to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:229-382-4411"
              className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
            >
              Call (229) 382-4411
            </a>
            <Link
              href="/residential#contact-form"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary-600 px-8 py-3 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
