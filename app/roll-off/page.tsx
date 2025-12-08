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
      
      {/* Hurricane Notice */}
      <section className="bg-amber-500 text-white py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
            <span className="font-bold">Hurricane Delays:</span>
            <span>We stop operations when dangerous for our staff. Service resumes with delays—goal to catch up within a week.</span>
            <a href="tel:229-382-4411" className="underline font-semibold hover:text-amber-100 whitespace-nowrap">
              Call to order: (229) 382-4411
            </a>
          </div>
        </div>
      </section>

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

      {/* Featured Images */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/rolloff-truck-dublin.png"
                alt="Ryland Environmental roll-off truck delivering container in Dublin, Georgia"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/rolloff-construction-site.png"
                alt="Ryland Environmental roll-off dumpster at commercial construction site"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
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

      {/* Rain or Shine Section */}
      <section className="py-12 bg-primary-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/rolloff-rain-mud-delivery.png"
                alt="Ryland Environmental crew delivering roll-off container in muddy conditions"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Rain or Shine, Ryland is There for You</h2>
              <p className="text-xl text-primary-100 mb-4">
                When you need a roll-off, we deliver—no matter the weather or conditions.
              </p>
              <p className="text-primary-200 mb-6">
                Our experienced drivers and crews work through rain, mud, and tough terrain to make sure your project stays on schedule. That's the Ryland difference.
              </p>
              <a
                href="https://app.trashjoes.com/h/ryland"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
              >
                Order Your Roll-Off Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* We Go Anywhere Section */}
      <section className="py-12 bg-primary-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">We Literally Go Wherever You Need Us</h2>
              <p className="text-xl text-primary-100 mb-6">
                Construction sites, remote locations, waterfront projects—if you need a roll-off dumpster, we'll get it there. No job is too challenging.
              </p>
              <ul className="space-y-3 text-primary-100">
                <li className="flex items-center gap-3">
                  <span className="text-white text-xl">✓</span>
                  Marine and waterfront construction
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white text-xl">✓</span>
                  Barge and boat delivery available
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white text-xl">✓</span>
                  Remote job sites across Georgia
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white text-xl">✓</span>
                  Industrial and commercial projects
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/rolloff-on-barge.png"
                alt="Ryland Environmental roll-off dumpster on a barge for waterfront construction project"
                width={800}
                height={600}
                className="w-full h-80 object-cover"
              />
            </div>
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

      {/* FAQs */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Roll-Off Dumpster FAQs</h2>
            <p className="text-gray-600">Common questions about roll-off container rental</p>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What size roll-off dumpsters are available?</h3>
              <p className="text-gray-600">Our industrial roll-off dumpsters range from 20-yard to 40-yard containers, perfect for construction projects, renovations, cleanouts, and large-scale waste disposal needs.</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I rent a roll-off dumpster?</h3>
              <p className="text-gray-600">Contact your local Ryland Environmental office or order online to schedule roll-off delivery. We&apos;ll discuss your project, recommend the appropriate size, and arrange delivery and pickup dates that work for your timeline.</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What can I put in a roll-off dumpster?</h3>
              <p className="text-gray-600">Roll-off dumpsters accept construction debris, furniture, appliances (with doors removed), yard waste, and general household junk. Hazardous materials, tires, batteries, and certain electronics are prohibited.</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long can I keep a roll-off dumpster?</h3>
              <p className="text-gray-600">Standard rental periods vary by location and project type. Contact us to discuss your timeline—we offer flexible rental periods to accommodate your needs.</p>
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

      {/* Residential Roll-Off Section */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/rolloff-residential-home.png"
                alt="Ryland Environmental roll-off dumpster at residential home for renovation project"
                width={800}
                height={600}
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">When You Need a Roll-Off at Home</h2>
              <p className="text-lg text-gray-600 mb-6">
                Home renovations, cleanouts, roofing projects, or landscaping—we deliver roll-off dumpsters right to your driveway.
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  Home renovations & remodeling
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  Garage & basement cleanouts
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  Roofing & siding projects
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  Landscaping & yard debris
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  Estate cleanouts & moving
                </li>
              </ul>
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
        </div>
      </section>

      {/* Driver / Team Image */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/ryland-rolloff-driver.png"
              alt="Ryland Environmental roll-off driver with truck ready for delivery"
              width={800}
              height={600}
              className="w-full h-80 object-cover"
            />
            <div className="bg-gray-100 px-6 py-4">
              <p className="text-gray-700 text-center text-sm">
                <strong>Reliable service, friendly team.</strong> Our experienced drivers deliver roll-off dumpsters across Georgia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
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

      {/* SEO Service Area Text */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Roll-Off Dumpster Rental Across Georgia</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ryland Environmental provides roll-off dumpster rental for construction, demolition, and cleanout projects throughout Georgia. Our <strong>Augusta office</strong> delivers to Augusta, Evans, Martinez, Grovetown, and Waynesboro. The <strong>Baxley office</strong> covers Baxley, Jesup, and Vidalia. Our <strong>Dublin office</strong> serves Dublin and Eastman. The <strong>Houston County office</strong> provides roll-off service to Warner Robins, Perry, and Centerville. Our <strong>Macon office</strong> serves Macon and Forsyth. The <strong>Milledgeville office</strong> covers Milledgeville and Sandersville. Our <strong>Savannah office</strong> serves Savannah, Pooler, Rincon, Richmond Hill, Statesboro, and Garden City. The <strong>Tifton office</strong> provides roll-off containers to Tifton and Tift County. Our <strong>Waycross office</strong> serves the Waycross area. We offer 20-yard, 30-yard, and 40-yard roll-off containers with fast delivery and flexible rental periods.
          </p>
        </div>
      </section>
    </div>
  );
}
