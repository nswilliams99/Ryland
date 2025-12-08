import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQs | Ryland Environmental",
  description: "Frequently asked questions about Ryland Environmental waste management services. Learn about residential trash pickup, recycling, dumpster rental, billing, and more.",
  keywords: "trash service FAQ, recycling questions, dumpster rental FAQ, Ryland Environmental, waste management questions",
};

const faqCategories = [
  {
    category: "Billing & Payments",
    faqs: [
      {
        question: "How do I pay my bill?",
        answer: "You can pay your bill online through your My Account portal at any time. We also accept payments by phone, by mail, or in person at any of our local office locations. For your convenience, we offer autopay options to ensure you never miss a payment.",
      },
      {
        question: "How do I set up autopay?",
        answer: "Log in to your My Account portal and navigate to the payment settings section. From there, you can enter your preferred payment method and enable automatic payments. Your account will be charged automatically each billing cycle.",
      },
      {
        question: "When is my bill due?",
        answer: "Bills are due on the date printed on your invoice, typically 30 days from the billing date. Late payments may result in service interruption or additional fees. We recommend setting up autopay to avoid any missed payments.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, electronic checks (ACH), and personal checks. Cash payments can be made in person at our local offices.",
      },
      {
        question: "Why did my bill increase?",
        answer: "Rate adjustments may occur due to fuel surcharges, disposal cost changes, or annual rate updates. If you have questions about a specific charge, please contact our customer service team or check your invoice for detailed line items.",
      },
      {
        question: "How does Ryland handle rate changes for contracted towns?",
        answer: "Ryland Environmental is proactive and transparent about rate changes. For contracted towns and municipalities, we announce any rate increases in advance and work directly with local officials. Rate adjustments are typically tied to the Consumer Price Index to reflect actual cost changes. We value our partnerships and strive to work collaboratively with all parties to ensure fair, sustainable service. If you have questions about rates, please contact your local Ryland office.",
      },
      {
        question: "Can I get a refund if I cancel service?",
        answer: "If you prepaid for services and cancel before the service period ends, you may be eligible for a prorated refund. Please contact our customer service team to discuss your specific situation.",
      },
      {
        question: "Do you offer senior or military discounts?",
        answer: "Discount availability varies by service area. Please contact your local Ryland Environmental office to inquire about available discounts in your community.",
      },
    ],
  },
  {
    category: "Account Management",
    faqs: [
      {
        question: "How do I start new service?",
        answer: "Starting service is easy! Complete our online Service Agreement Form on our website, or call your local Ryland Environmental office. We'll set up your account and schedule your first pickup, typically within a few business days.",
      },
      {
        question: "How do I cancel my service?",
        answer: "To cancel service, please contact our customer service team at least one week before your next scheduled pickup. You'll need to return any Ryland Environmental containers and ensure your account balance is paid in full.",
      },
      {
        question: "How do I update my contact information?",
        answer: "Log in to your My Account portal to update your phone number, email address, or mailing address. You can also call our customer service team to make changes over the phone.",
      },
      {
        question: "How do I access my account online?",
        answer: "Visit the My Account portal link at the top of our website. If you're a new user, you'll need to register using your account number found on your invoice. Existing users can log in with their email and password.",
      },
      {
        question: "Can I transfer my service to a new address?",
        answer: "Yes! If you're moving within our service area, contact us to transfer your service to your new address. We'll coordinate container pickup at your old address and delivery to your new location.",
      },
      {
        question: "How do I request an additional cart or larger container?",
        answer: "Contact our customer service team to request additional or larger containers. Additional containers may result in an adjusted service rate. We offer various cart sizes to meet your household needs.",
      },
    ],
  },
  {
    category: "Pickup Schedule & Service",
    faqs: [
      {
        question: "What day is my trash pickup?",
        answer: "Your pickup day depends on your location and service type. Log in to your My Account portal to view your schedule, or contact your local office. New customers receive their pickup day during service setup.",
      },
      {
        question: "What time should I have my cart out?",
        answer: "Place your cart at the curb by 6:00 AM on your scheduled pickup day. Drivers may arrive at any time during the day, and carts placed out late may be missed.",
      },
      {
        question: "What if my trash wasn't picked up?",
        answer: "If your trash wasn't collected on your scheduled day, first verify it was a regular pickup day (not a holiday). Then contact our customer service team to report the missed pickup. We'll work to resolve the issue promptly.",
      },
      {
        question: "Do you pick up on holidays?",
        answer: "We observe major holidays and adjust pickup schedules accordingly. Check our Holiday Schedule page on our website for specific dates and schedule changes. Generally, if your pickup falls on a holiday, collection moves to the next business day.",
      },
      {
        question: "What if I have extra trash that doesn't fit in my cart?",
        answer: "Occasional overflow can often be placed in bags next to your cart. For regular overages, consider upgrading to a larger cart or adding a second container. Contact us to discuss the best option for your needs.",
      },
      {
        question: "How do I schedule a bulk item pickup?",
        answer: "Contact your local Ryland Environmental office to schedule a bulk item pickup. Additional fees may apply depending on the item. Please describe the items when calling so we can provide accurate pricing.",
      },
      {
        question: "What happens during hurricanes or severe weather?",
        answer: "During hurricanes and severe weather events, Ryland Environmental prioritizes the safety of our employees. We will stop operations when conditions are dangerous and resume service as soon as it is safe to do so. Our goal is to get caught up within one week when possible. We monitor forecasts closely and stay in contact with local officials. Please be patient during storm events—we appreciate your understanding as we work to restore normal service.",
      },
    ],
  },
  {
    category: "Recycling",
    faqs: [
      {
        question: "What items can I recycle?",
        answer: "Accepted recyclables typically include paper, cardboard, plastic bottles and containers (#1-7), aluminum and steel cans, and glass bottles and jars. Please rinse containers and keep materials loose (not bagged) in your recycling cart.",
      },
      {
        question: "What items are NOT recyclable?",
        answer: "Do not place plastic bags, Styrofoam, food-contaminated items, electronics, batteries, hazardous materials, or yard waste in your recycling cart. When in doubt, throw it out—contamination affects the entire recycling stream.",
      },
      {
        question: "Do I need to separate my recyclables?",
        answer: "No, we offer single-stream recycling. Simply place all accepted recyclable materials loose in your recycling cart. Our facilities sort materials after collection.",
      },
      {
        question: "Why is recycling important?",
        answer: "Recycling conserves natural resources, reduces landfill waste, saves energy, and decreases pollution. By recycling with Ryland Environmental, you're helping protect Georgia's environment for future generations.",
      },
    ],
  },
  {
    category: "Residential Service",
    faqs: [
      {
        question: "What size carts do you offer?",
        answer: "We offer residential carts in multiple sizes to fit your household needs. Standard options include 65-gallon and 95-gallon carts. Contact us to discuss which size is right for your family.",
      },
      {
        question: "How should I position my cart for pickup?",
        answer: "Place your cart at the curb with the lid opening facing the street. Keep carts at least 3 feet away from mailboxes, vehicles, and other obstacles. This allows our automated trucks to safely empty your container.",
      },
      {
        question: "What if my cart is damaged or missing?",
        answer: "Report damaged or missing carts to our customer service team immediately. We'll arrange for repair or replacement, typically within a few business days at no charge for normal wear and tear.",
      },
      {
        question: "Can I use my own trash cans instead of your carts?",
        answer: "Our service requires the use of Ryland Environmental carts, which are designed for our automated collection trucks. Using our carts ensures safe, efficient pickup and protects our drivers from injury.",
      },
    ],
  },
  {
    category: "Commercial & Roll-Off Dumpster Service",
    faqs: [
      {
        question: "What size dumpsters do you offer for businesses?",
        answer: "We offer commercial dumpsters ranging from 2-yard to 8-yard containers, suitable for restaurants, retail stores, offices, and other businesses. Our team will help you select the right size based on your waste volume.",
      },
      {
        question: "How often can I schedule commercial pickups?",
        answer: "Commercial pickup frequency is customized to your business needs—from once weekly to multiple times per day. We'll work with you to create a schedule that keeps your property clean and compliant.",
      },
      {
        question: "What size roll-off dumpsters are available?",
        answer: "Our industrial roll-off dumpsters range from 20-yard to 40-yard containers, perfect for construction projects, renovations, cleanouts, and large-scale waste disposal needs.",
      },
      {
        question: "How do I rent a roll-off dumpster?",
        answer: "Contact your local Ryland Environmental office to schedule roll-off delivery. We'll discuss your project, recommend the appropriate size, and arrange delivery and pickup dates that work for your timeline.",
      },
      {
        question: "What can I put in a roll-off dumpster?",
        answer: "Roll-off dumpsters accept construction debris, furniture, appliances (with doors removed), yard waste, and general household junk. Hazardous materials, tires, batteries, and certain electronics are prohibited. Ask us about specific items.",
      },
      {
        question: "How long can I keep a roll-off dumpster?",
        answer: "Standard rental periods vary by location and project type. Contact us to discuss your timeline—we offer flexible rental periods to accommodate your needs.",
      },
    ],
  },
  {
    category: "Special Items & Hazardous Waste",
    faqs: [
      {
        question: "Do you pick up appliances?",
        answer: "Yes, we can pick up most large appliances including refrigerators, washers, dryers, and stoves. Refrigerators and freezers must have doors removed for safety. Additional fees may apply—contact us to schedule.",
      },
      {
        question: "How do I dispose of electronics?",
        answer: "Electronics like TVs, computers, and monitors require special handling and are not accepted in regular trash or recycling. Contact your local office for e-waste disposal options or local drop-off events.",
      },
      {
        question: "Where can I dispose of hazardous waste?",
        answer: "Household hazardous waste (paint, chemicals, batteries, motor oil) cannot be placed in regular trash. Check with your local Georgia county for hazardous waste collection events and permanent drop-off locations.",
      },
      {
        question: "Do you pick up yard waste?",
        answer: "Yard waste services vary by location. Contact your local Ryland Environmental office to learn about yard waste collection options in your area, including seasonal programs.",
      },
      {
        question: "Can I throw away furniture in my regular trash cart?",
        answer: "Small items that fit in your cart with the lid closed can be disposed of normally. Large furniture items require a bulk pickup—contact us to schedule and get pricing.",
      },
    ],
  },
  {
    category: "About Ryland Environmental",
    faqs: [
      {
        question: "Is Ryland Environmental locally owned?",
        answer: "Yes! Ryland Environmental is a true family-owned and locally operated company serving Georgia communities since 2014. Our team lives in the communities we serve—you're not just a number, you're our neighbor.",
      },
      {
        question: "What areas do you serve?",
        answer: "We proudly serve communities across Georgia including Augusta, Baxley, Dublin, Houston County, Macon, Milledgeville, Savannah, Tifton, Waycross, and surrounding areas. Visit our Locations page to find your local office.",
      },
      {
        question: "How do I contact my local office?",
        answer: "Visit our Locations page to find the Ryland Environmental branch serving your area. Each location has dedicated staff ready to assist with your waste management needs.",
      },
      {
        question: "Are you hiring?",
        answer: "We're always looking for great people to join our team! Visit our Careers page to view current job openings and apply online. We offer competitive pay and benefits.",
      },
      {
        question: "Do you offer municipal services?",
        answer: "Yes, we partner with cities and counties throughout Georgia to provide reliable municipal waste collection services. Contact us to learn how we can serve your community.",
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
                href={`#${cat.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
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
              id={category.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
              className="mb-12 scroll-mt-20"
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
            Can&apos;t find what you&apos;re looking for? Contact our team and we&apos;ll be happy to help.
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
