import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import ServicesCarousel from "./components/ServicesCarousel";
import MyRylandSection from "./components/MyRylandSection";
import OfficeLocations from "./components/OfficeLocations";
import HeroButtons from "./components/HeroButtons";

export const metadata: Metadata = {
  title: "Ryland Environmental | Waste Management & Recycling Services",
  description: "Family owned since 2014. Waste management and recycling services for Georgia. Residential, commercial, roll-off dumpster rental, and municipal services.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Waste Management & Recycling Services
              </h1>
              <p className="mt-4 text-lg text-primary-100">
                Family owned since 2014. You're not just a number, you're our neighbor.
              </p>
              <HeroButtons />
            </div>
            <div className="hidden md:flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/ryland-dogs-best-friend.png"
                  alt="Ryland Environmental waste management driver in safety vest greeting friendly white dog next to red Ryland trash cart in Georgia neighborhood"
                  className="w-80 lg:w-96 h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* My Ryland & More */}
      <MyRylandSection />

      {/* Find Your Local Office */}
      <OfficeLocations />

      {/* Safety First Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Safety First
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everyone Home Safe, Every Night</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We hold regular safety meetings for all of our employees—for them and for you. Our goal is simple: everyone goes home safe every night. This commitment extends to our Ryland team and the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/ryland-safety-meeting.png"
                alt="Ryland Environmental team at a safety meeting"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/ryland-safety-meeting-2.png"
                alt="Ryland Environmental employees attending safety training session"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dogs Best Friend */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">We're a Dog's Best Friend</h2>
              <p className="text-xl text-gray-700 mb-4">
                Just think what we can do for you!
              </p>
              <p className="text-gray-600 mb-6">
                Our drivers are part of your neighborhood. They know the routes, the families, and yes—even the friendly dogs along the way. That's the difference when you choose a family-owned company that treats you like a neighbor, not a number.
              </p>
              <a
                href="tel:229-382-4411"
                className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
              >
                Call Us Today
              </a>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg max-w-sm">
                <img
                  src="/images/ryland-dogs-best-friend.png"
                  alt="Ryland Environmental driver greeting a friendly dog on his route"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Love Trash Trucks */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg max-w-sm">
                <img
                  src="/images/ryland-kids-love-trucks.png"
                  alt="Young child watching a Ryland Environmental truck drive by"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Kids Can't Get Enough</h2>
              <p className="text-xl text-gray-700 mb-4">
                Every week, our drivers get a little fan club waiting at the driveway.
              </p>
              <p className="text-gray-600 mb-6">
                You can expect your trashman to give a wave—and hope to see your little one next week. It's the small moments that make our job special.
              </p>
              <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                <p className="text-primary-800 font-medium">
                  Stop by any of our offices to pick up a free Ryland Trash Truck toy for your little one!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Year Celebration */}
      <section className="py-12 bg-primary-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white text-center lg:text-left">
              <span className="inline-block px-4 py-1 bg-primary-500 rounded-full text-sm font-semibold mb-4">
                August 20, 2024
              </span>
              <h2 className="text-3xl font-bold mb-4">Celebrating 10 Years!</h2>
              <p className="text-xl text-primary-100 mb-4">
                A decade of serving Georgia communities with reliable waste management and recycling services.
              </p>
              <p className="text-primary-200">
                From our humble beginnings in 2014 to serving 10 offices across the state, we're grateful for every customer, employee, and community that's been part of our journey. Here's to the next 10 years!
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/10-year-celebration.png"
                alt="Ryland Environmental team celebrating 10 years in business - August 2024"
                className="w-full h-72 object-cover"
              />
              <div className="bg-white px-4 py-3">
                <p className="text-gray-700 text-center text-sm">
                  <strong>The Ryland Environmental team</strong> celebrating 10 years of service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">See why Georgia families and businesses choose Ryland Environmental</p>
          </div>
          <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-0c95dd6e-620c-4ffb-a584-f7180d8a80fe" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Need Help? Section */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Take care of your issue online or connect with our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-accent-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent-700 transition-colors"
            >
              Contact Support
            </Link>
            <a
              href="tel:229-382-4411"
              className="text-lg font-semibold text-primary-600 hover:text-primary-700"
            >
              (229) 382-4411
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
