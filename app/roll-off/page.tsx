import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental | Ryland Environmental Georgia",
  description: "Roll-off dumpster rental for construction, demolition, and cleanouts across Georgia. 20, 30, and 40 yard containers available. Serving all of Georgia.",
  keywords: "roll-off dumpster rental Georgia, construction dumpster, demolition waste, Ryland Environmental",
};

const serviceAreas = [
  { office: "Augusta Area", towns: ["Augusta", "Evans", "Martinez", "Grovetown", "Waynesboro"] },
  { office: "Baxley Area", towns: ["Baxley", "Jesup", "Vidalia"] },
  { office: "Dublin Area", towns: ["Dublin", "Eastman"] },
  { office: "Houston County", towns: ["Warner Robins", "Perry", "Centerville"] },
  { office: "Macon Area", towns: ["Macon", "Forsyth"] },
  { office: "Milledgeville Area", towns: ["Milledgeville", "Sandersville"] },
  { office: "Savannah Area", towns: ["Savannah", "Pooler", "Rincon", "Richmond Hill", "Statesboro", "Garden City"] },
  { office: "Tifton Area", towns: ["Tifton", "Tift County"], link: "/tifton/roll-off" },
  { office: "Waycross Area", towns: ["Waycross"] },
];

const containers = [
  {
    size: "20 Yard",
    dimensions: "15' L x 8' W x 4' H",
    ideal: "Small cleanouts, bathroom renovations, garage cleanups",
    image: "/images/20-yard-container-branded.png",
  },
  {
    size: "30 Yard",
    dimensions: "22' L x 8' W x 6' H",
    ideal: "Medium construction projects, roofing, home renovations",
    image: "/images/30-yard-container-branded.png",
  },
  {
    size: "40 Yard",
    dimensions: "22' L x 8' W x 8' H",
    ideal: "Large construction, demolition, commercial cleanouts",
    image: "/images/40-yard-rolloff.jpg",
  },
];

export default function RollOffPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Roll-Off Dumpsters" },
      ]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Roll-Off Dumpster Rental
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
              Construction, demolition, and cleanout containers available across Georgia. Fast delivery, flexible rental periods.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.trashjoes.com/h/ryland"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
              >
                Order Online
              </a>
              <a
                href="tel:229-382-4411"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Call (229) 382-4411
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Truck Image */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/rolloff-truck-dublin.png"
              alt="Ryland Environmental roll-off truck delivering container in Dublin, Georgia"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Container Sizes */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Container Sizes</h2>
            <p className="text-gray-600">Choose the right size for your project</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {containers.map((container, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={container.image}
                    alt={`${container.size} Roll-Off Container`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{container.size}</h3>
                  <p className="text-sm text-gray-500 mb-3">{container.dimensions}</p>
                  <p className="text-gray-600">{container.ideal}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="https://app.trashjoes.com/h/ryland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
            >
              Order Your Dumpster
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Roll-Off Service Areas</h2>
            <p className="text-gray-600">Delivery available across Georgia</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.office}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {area.towns.join(", ")}
                </p>
                {area.link ? (
                  <Link href={area.link} className="text-sm text-accent-600 font-medium hover:text-accent-700">
                    View Details →
                  </Link>
                ) : (
                  <a
                    href="https://app.trashjoes.com/h/ryland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-600 font-medium hover:text-accent-700"
                  >
                    Order Online →
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Order?</h2>
          <p className="text-gray-600 mb-6">
            Order online for fast delivery or call us for custom needs and large projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.trashjoes.com/h/ryland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
            >
              Order Online
            </a>
            <a
              href="tel:229-382-4411"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary-600 px-8 py-3 text-base font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
            >
              Call (229) 382-4411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
