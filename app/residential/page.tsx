import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Residential Waste Services | Ryland Environmental Georgia",
  description: "Residential garbage and recycling services across Georgia. HOA contracts, subscription service, and municipal partnerships. Serving Augusta, Macon, Savannah, Tifton, and more.",
  keywords: "residential trash service Georgia, HOA waste management, garbage pickup Georgia, recycling service, Ryland Environmental",
};

const serviceAreas = [
  {
    office: "Augusta Area",
    towns: ["Augusta", "Evans", "Martinez", "Grovetown", "Waynesboro"],
    services: ["Residential Waste Removal", "Recycling", "Commercial Dumpsters", "Roll-Off Dumpsters"],
  },
  {
    office: "Baxley Area",
    towns: ["Baxley", "Jesup", "Vidalia"],
    services: ["Residential Waste Removal", "Recycling", "Commercial Dumpsters", "Roll-Off Dumpsters"],
  },
  {
    office: "Dublin Area",
    towns: ["Dublin", "Eastman"],
    services: ["Residential Waste Removal", "Recycling", "Commercial Dumpsters", "Roll-Off Dumpsters"],
  },
  {
    office: "Houston County",
    towns: ["Warner Robins", "Perry", "Centerville"],
    services: ["Residential Waste Removal", "Recycling", "Commercial Dumpsters", "Roll-Off Dumpsters"],
  },
  {
    office: "Macon Area",
    towns: ["Macon", "Forsyth"],
    services: ["Residential Waste Removal", "Recycling", "Commercial Dumpsters", "Roll-Off Dumpsters"],
  },
  {
    office: "Milledgeville Area",
    towns: ["Milledgeville", "Sandersville"],
    services: ["Residential Waste Removal", "Recycling", "Commercial Dumpsters", "Roll-Off Dumpsters"],
  },
  {
    office: "Savannah Area",
    towns: ["Pooler", "Rincon", "Richmond Hill", "Statesboro", "Garden City"],
    services: ["Commercial Dumpsters", "Roll-Off Dumpsters", "Portable Toilets", "Transfer Station"],
  },
  {
    office: "Tifton Area",
    towns: ["Tifton", "Tift County"],
    services: ["Residential Waste Removal", "Recycling", "Commercial Dumpsters", "Roll-Off Dumpsters"],
    link: "/tifton",
  },
  {
    office: "Waycross Area",
    towns: ["Waycross"],
    services: ["Residential Waste Removal", "Recycling", "Commercial Dumpsters", "Roll-Off Dumpsters"],
  },
];

const faqs = [
  {
    question: "What day is my trash pickup?",
    answer: "Your pickup day depends on your location and service type. Log in to your My Account portal to view your schedule, or contact your local office. New customers receive their pickup day during service setup.",
  },
  {
    question: "What time should I have my cart out?",
    answer: "Place your cart at the curb by 6:00 AM on your scheduled pickup day. Drivers may arrive at any time during the day, and carts placed out late may be missed.",
  },
  {
    question: "How should I position my cart for pickup?",
    answer: "Place your cart at the curb with the lid opening facing the street. Keep carts at least 3 feet away from mailboxes, vehicles, and other obstacles. This allows our automated trucks to safely empty your container.",
  },
  {
    question: "What if my trash wasn't picked up?",
    answer: "If your trash wasn't collected on your scheduled day, first verify it was a regular pickup day (not a holiday). Then contact our customer service team to report the missed pickup. We'll work to resolve the issue promptly.",
  },
  {
    question: "What size carts do you offer?",
    answer: "We offer residential carts in multiple sizes to fit your household needs. Standard options include 65-gallon and 95-gallon carts. Contact us to discuss which size is right for your family.",
  },
  {
    question: "How do I schedule a bulk item pickup?",
    answer: "Contact your local Ryland Environmental office to schedule a bulk item pickup. Additional fees may apply depending on the item. Please describe the items when calling so we can provide accurate pricing.",
  },
];

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Residential Services" },
      ]} />
      
      {/* Hurricane Notice */}
      <section className="bg-amber-500 text-white py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
            <span className="font-bold">Hurricane Delays:</span>
            <span>We stop operations when dangerous for our staff. Service resumes with delays—goal to catch up within a week.</span>
            <Link href="/roll-off" className="underline font-semibold hover:text-amber-100 whitespace-nowrap">
              Need a roll-off? Click here
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Residential Waste Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
              Your home's waste management heroes. Weekly curbside trash and recycling pickup across Georgia.
            </p>
            
            {/* Address Search */}
            <div className="mt-8 max-w-2xl mx-auto">
              <p className="text-sm text-primary-200 mb-3">Enter your address to check service availability</p>
              <a
                href="https://go.trashjoes.com/ryland-environmental/app/select-services"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white rounded-full px-6 py-4 text-gray-500 text-left hover:shadow-lg transition-shadow cursor-pointer"
              >
                <span className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Enter your address to start service...
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/residential-carts-neighborhood.png"
              alt="Ryland Environmental residential trash carts lined up for pickup in a Georgia neighborhood"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Your Can is Waiting */}
      <section className="py-12 bg-accent-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Your Can is Waiting to Be Delivered!</h2>
              <p className="text-xl text-accent-100 mb-6">
                We have brand new Ryland carts ready to go. Start your residential service today and we'll have your trash can delivered to your doorstep.
              </p>
              <a
                href="https://go.trashjoes.com/ryland-environmental/app/select-services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-accent-600 shadow-lg hover:bg-gray-100 transition-colors"
              >
                Click Here to Start Service
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl max-w-sm">
                <Image
                  src="/images/ryland-cans-stacked.png"
                  alt="Stack of brand new red Ryland Environmental trash cans ready for delivery"
                  width={400}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Individual Subscription */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Individual Subscription</h3>
              <p className="text-gray-600 mb-4">
                Weekly curbside trash and recycling pickup for individual homeowners. Sign up online and get started quickly.
              </p>
              <a
                href="https://go.trashjoes.com/ryland-environmental/app/select-services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700"
              >
                Start Service
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* HOA Partnerships */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">HOA Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Streamlined waste management for homeowners associations. One contract, consistent service for your entire community.
              </p>
              <a href="#contact-form" className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700">
                Contact Us
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Municipal Contracts */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contract Towns</h3>
              <p className="text-gray-600 mb-4">
                Municipal waste services for cities and towns. We partner with local governments to provide reliable community-wide service.
              </p>
              <a href="#contact-form" className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700">
                Contact Us
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Trade Show / Partnership Image */}
          <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/ryland-trade-show-booth.png"
              alt="Ryland Environmental trade show booth showcasing services for municipalities and HOAs"
              width={1200}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="bg-gray-100 px-6 py-4">
              <p className="text-gray-700 text-center text-sm">
                <strong>Ryland Environmental</strong> — Your one-stop for solid waste collection, disposal, and recycling needs. Partnering with municipalities, HOAs, and communities across Georgia since 1964.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Areas We Serve</h2>
            <p className="text-gray-600">Residential waste services across Georgia</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.office}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {area.towns.join(", ")}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {area.services.slice(0, 2).map((service, i) => (
                    <span key={i} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>
                {area.link ? (
                  <Link href={area.link} className="text-sm text-accent-600 font-medium hover:text-accent-700">
                    View Details →
                  </Link>
                ) : (
                  <span className="text-sm text-gray-400">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 bg-white scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600">
              Interested in HOA or municipal partnership? Get in touch with our team.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization / HOA Name
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your organization or HOA"
                />
              </div>
              
              <div>
                <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select
                  id="service-type"
                  name="service-type"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select service type...</option>
                  <option value="hoa">HOA Partnership</option>
                  <option value="municipal">Municipal / Town Contract</option>
                  <option value="subscription">Individual Subscription</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tell us about your needs..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">Or call us directly:</p>
              <a href="tel:229-382-4411" className="text-xl font-semibold text-primary-600 hover:text-primary-700">
                (229) 382-4411
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about residential trash service</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700"
            >
              View All FAQs
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Service Area Text */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Residential Trash Service Across Georgia</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ryland Environmental provides residential waste removal and recycling services throughout Georgia. Our <strong>Augusta office</strong> serves Augusta, Evans, Martinez, Grovetown, and Waynesboro. The <strong>Baxley office</strong> covers Baxley, Jesup, and Vidalia. Our <strong>Dublin office</strong> serves Dublin and Eastman. The <strong>Houston County office</strong> provides service to Warner Robins, Perry, and Centerville. Our <strong>Macon office</strong> serves Macon and Forsyth. The <strong>Milledgeville office</strong> covers Milledgeville and Sandersville. Our <strong>Savannah office</strong> serves Pooler, Rincon, Richmond Hill, Statesboro, and Garden City with commercial and roll-off services. The <strong>Tifton office</strong> provides service to Tifton and Tift County. Our <strong>Waycross office</strong> serves the Waycross area. Contact your local office for residential trash pickup, recycling services, and weekly curbside collection.
          </p>
        </div>
      </section>
    </div>
  );
}
