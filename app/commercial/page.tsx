import type { Metadata } from "next";
import Link from "next/link";
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

      {/* Contact Section */}
      <section className="py-12 bg-white">
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
    </div>
  );
}
