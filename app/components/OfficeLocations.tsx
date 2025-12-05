"use client";

import Link from "next/link";

const offices = [
  {
    name: "Tifton Office",
    areas: "City of Tifton, Tift County",
    href: "/tifton",
  },
  {
    name: "Augusta Office",
    areas: "Augusta, Evans, Martinez, Grovetown, Waynesboro",
    href: "/",
  },
  {
    name: "Baxley Office",
    areas: "Baxley, Jesup, Vidalia",
    href: "/",
  },
  {
    name: "Dublin Office",
    areas: "Dublin, Eastman",
    href: "/",
  },
  {
    name: "Houston County Office",
    areas: "Warner Robins, Perry, Centerville",
    href: "/",
  },
  {
    name: "Macon Office",
    areas: "Macon, Forsyth",
    href: "/",
  },
  {
    name: "Milledgeville Office",
    areas: "Milledgeville",
    href: "/",
  },
  {
    name: "Sandersville Office",
    areas: "Sandersville (Transfer Station only)",
    href: "/",
  },
  {
    name: "Savannah Office",
    areas: "Savannah, Pooler, Rincon, Richmond Hill, Statesboro, Garden City",
    href: "/",
  },
  {
    name: "Waycross Office",
    areas: "Waycross",
    href: "/",
  },
];

export default function OfficeLocations() {
  return (
    <section id="office-locations" className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Proudly Serving Georgia</h2>
          <p className="text-gray-600">Find Your Local Office</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{office.name}</h3>
                  <p className="text-sm text-gray-600">{office.areas}</p>
                </div>
                <Link
                  href={office.href}
                  className="ml-4 inline-flex items-center justify-center rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-700 transition-colors whitespace-nowrap"
                >
                  Location Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
