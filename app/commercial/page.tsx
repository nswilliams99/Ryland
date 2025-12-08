import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Commercial Dumpster Rental | Ryland Environmental Georgia",
  description: "Commercial dumpster rental services across Georgia. 4, 6, and 8 yard containers for businesses. Serving Augusta, Macon, Savannah, Tifton, and more.",
  keywords: "commercial dumpster rental Georgia, business waste management, dumpster service, Ryland Environmental",
};

const serviceAreas = [
  { office: "Augusta", towns: ["Augusta", "Evans", "Martinez", "Grovetown", "Waynesboro"] },
  { office: "Baxley", towns: ["Baxley", "Jesup", "Vidalia"] },
  { office: "Dublin", towns: ["Dublin", "Eastman"] },
  { office: "Houston County", towns: ["Warner Robins", "Perry", "Centerville"] },
  { office: "Macon", towns: ["Macon", "Forsyth"] },
  { office: "Milledgeville", towns: ["Milledgeville", "Sandersville"] },
  { office: "Savannah", towns: ["Savannah", "Pooler", "Rincon", "Richmond Hill", "Statesboro", "Garden City"] },
  { office: "Tifton", towns: ["Tifton", "Tift County"], link: "/tifton/commercial" },
  { office: "Waycross", towns: ["Waycross"] },
];

const dumpsterSizes = [
  {
    size: "4 Yard",
    description: "Perfect for small businesses, offices, and restaurants with light waste volume.",
    dimensions: "6' L x 4' W x 4' H",
    ideal: "Small offices, cafes, retail shops",
  },
  {
    size: "6 Yard",
    description: "Great for medium-sized businesses with regular waste generation.",
    dimensions: "6' L x 5' W x 5' H",
    ideal: "Restaurants, mid-size offices, small warehouses",
  },
  {
    size: "8 Yard",
    description: "Ideal for larger businesses or locations with high waste volume.",
    dimensions: "6' L x 6' W x 6' H",
    ideal: "Large restaurants, hotels, manufacturing",
  },
];

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Commercial Dumpsters" },
      ]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Commercial Dumpster Rental
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
              Front-load dumpster service for businesses across Georgia. Reliable pickups, flexible schedules.
            </p>
            <div className="mt-8">
              <a
                href="tel:229-382-4411"
                className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
              >
                Get a Quote: (229) 382-4411
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* We Handle Any Size Job */}
      <section className="py-12 bg-primary-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">We Can Handle Any Size Commercial Job</h2>
              <p className="text-xl text-primary-100 mb-6">
                From a single dumpster for a small office to multiple containers for large commercial developments—we've got you covered.
              </p>
              <ul className="space-y-3 text-primary-100 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-white text-xl">✓</span>
                  Multiple container deployments
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white text-xl">✓</span>
                  Flexible pickup schedules
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white text-xl">✓</span>
                  Commercial developments & construction sites
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white text-xl">✓</span>
                  Retail centers, hotels, & industrial facilities
                </li>
              </ul>
              <a
                href="tel:229-382-4411"
                className="inline-flex items-center justify-center bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get a Commercial Quote
              </a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/commercial-8yard-dumpsters.png"
                alt="Multiple Ryland Environmental 8-yard commercial dumpsters ready for delivery"
                width={800}
                height={600}
                className="w-full h-80 object-cover"
                priority
              />
              <div className="bg-gray-900 px-4 py-3">
                <p className="text-white text-center text-sm">
                  <strong>8-Yard Front-Load Dumpsters</strong> — Our largest commercial containers, perfect for high-volume businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Container Sizes</h2>
            <p className="text-gray-600">Choose the right size for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {dumpsterSizes.map((dumpster, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{dumpster.size}</h3>
                <p className="text-sm text-gray-500 mb-3">{dumpster.dimensions}</p>
                <p className="text-gray-600 mb-4">{dumpster.description}</p>
                <p className="text-sm text-primary-600 font-medium">Ideal for: {dumpster.ideal}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="tel:229-382-4411"
              className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Industrial Compactors */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Industrial Compactors</h2>
            <p className="text-gray-600">High-volume waste solutions for large businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="relative h-56 bg-gray-800">
                <Image
                  src="/images/stationary-compactor.png"
                  alt="Stationary Compactor"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stationary Compactors</h3>
                <p className="text-gray-600 mb-4">
                  These compactors have a container attached to a compaction unit that is anchored to your property. When emptied, the rear of the container is open. Best for dry waste like cardboard and plastics. These work well for manufacturers.
                </p>
                <a
                  href="tel:229-382-4411"
                  className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-2 text-sm font-semibold text-white hover:bg-primary-800 transition-colors"
                >
                  Get A Quote
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="relative h-56 bg-gray-800">
                <Image
                  src="/images/self-contained-compactor.png"
                  alt="Self-Contained Compactor"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Self-Contained Compactors</h3>
                <p className="text-gray-600 mb-4">
                  These compactors are an all in one unit. The whole unit is sealed and is taken to be emptied. Best for wet wastes like food, medical. These are the best option for businesses like grocery stores, malls, hospitals, etc.
                </p>
                <a
                  href="tel:229-382-4411"
                  className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-2 text-sm font-semibold text-white hover:bg-primary-800 transition-colors"
                >
                  Get A Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Station Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">How a Transfer Station Works</h2>
            <p className="text-gray-600">Efficient waste consolidation for your community</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
            <div className="relative w-full h-48 md:h-64 mb-8 bg-white rounded-lg overflow-hidden">
              <Image
                src="/images/transfer-station-diagram.png"
                alt="Transfer station process diagram showing waste flow from Your Town to landfill"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">What is a Transfer Station?</h3>
                <p className="text-gray-600 mb-4">
                  A transfer station is a facility where waste from your town and surrounding municipalities is collected and consolidated before being transported to its final destination - whether that&apos;s a county landfill, alternative landfill, or materials recovery facility (MRF).
                </p>
                <p className="text-gray-600">
                  This system allows for more efficient waste transportation by combining smaller loads into larger, more cost-effective shipments.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">The Process</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-gray-600"><strong>Collection:</strong> City haulers collect commercial and residential waste from your town</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-gray-600"><strong>Consolidation:</strong> Waste is brought to the local transfer station where it&apos;s consolidated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-gray-600"><strong>Transport:</strong> Private haulers transport larger loads to the county landfill or recycling facility</span>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">Ryland Environmental operates transfer stations in select Georgia locations.</p>
              <a
                href="tel:229-382-4411"
                className="inline-flex items-center justify-center rounded-full bg-primary-700 px-6 py-2 text-sm font-semibold text-white hover:bg-primary-800 transition-colors"
              >
                Contact Us for Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Commercial Service Areas</h2>
            <p className="text-gray-600">Business dumpster service across Georgia</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.office}, Georgia</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {area.towns.join(", ")}
                </p>
                {area.link ? (
                  <Link href={area.link} className="text-sm text-accent-600 font-medium hover:text-accent-700">
                    View Details →
                  </Link>
                ) : (
                  <a href="tel:229-382-4411" className="text-sm text-accent-600 font-medium hover:text-accent-700">
                    Call for Quote →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Commercial Dumpster FAQs</h2>
            <p className="text-gray-600">Common questions about business waste service</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What size dumpsters do you offer for businesses?</h3>
              <p className="text-gray-600">We offer commercial dumpsters ranging from 2-yard to 8-yard containers, suitable for restaurants, retail stores, offices, and other businesses. Our team will help you select the right size based on your waste volume.</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How often can I schedule commercial pickups?</h3>
              <p className="text-gray-600">Commercial pickup frequency is customized to your business needs—from once weekly to multiple times per day. We&apos;ll work with you to create a schedule that keeps your property clean and compliant.</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What can I put in a commercial dumpster?</h3>
              <p className="text-gray-600">Commercial dumpsters are for general business waste. Hazardous materials, liquids, electronics, and certain other items are prohibited. Contact us for a complete list of accepted materials.</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I start commercial service?</h3>
              <p className="text-gray-600">Starting service is easy! Complete our online Service Agreement Form on our website, or call your local Ryland Environmental office. We&apos;ll set up your account and schedule your first pickup, typically within a few business days.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/faq#commercial-and-roll-off-dumpster-service"
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

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for a free quote on commercial dumpster service for your business.
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

      {/* SEO Service Area Text */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Commercial Dumpster Service Across Georgia</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ryland Environmental provides commercial dumpster rental and business waste management throughout Georgia. Our <strong>Augusta office</strong> serves Augusta, Evans, Martinez, Grovetown, and Waynesboro. The <strong>Baxley office</strong> covers Baxley, Jesup, and Vidalia. Our <strong>Dublin office</strong> serves Dublin and Eastman. The <strong>Houston County office</strong> provides service to Warner Robins, Perry, and Centerville. Our <strong>Macon office</strong> serves Macon and Forsyth. The <strong>Milledgeville office</strong> covers Milledgeville and Sandersville. Our <strong>Savannah office</strong> serves Savannah, Pooler, Rincon, Richmond Hill, Statesboro, and Garden City. The <strong>Tifton office</strong> provides commercial dumpster service to Tifton and Tift County. Our <strong>Waycross office</strong> serves the Waycross area. We offer 4-yard, 6-yard, and 8-yard front-load containers, industrial compactors, and transfer station services for businesses of all sizes.
          </p>
        </div>
      </section>
    </div>
  );
}
