import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ryland Environmental - Waste Management Tifton GA | Commercial Dumpster Service",
    template: "%s | Ryland Environmental"
  },
  description: "Local trash companies and commercial dumpster service in Tifton GA. Business trash service, front load dumpster service, and commercial waste collection in Tift County. Local garbage companies serving Tifton businesses.",
  keywords: ["commercial dumpster service Tifton GA", "business trash service Tifton", "local trash companies", "local garbage companies", "front load dumpster service Tifton GA", "4 yard dumpster Tifton", "commercial waste collection Tift County", "weekly trash pickup for businesses Tifton", "Tifton GA recycling drop-off", "free recycling Tifton", "recycling center Tifton"],
  authors: [{ name: "Ryland Environmental" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rylandenvironmental.us/",
    siteName: "Ryland Environmental",
    title: "Ryland Environmental - Waste Management & Recycling Services",
    description: "Professional waste management, recycling, and environmental services in Tifton and Tift County, Georgia.",
  },
  twitter: {
    card: "summary",
    title: "Ryland Environmental - Waste Management & Recycling Services",
    description: "Professional waste management, recycling, and environmental services in Tifton and Tift County, Georgia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
