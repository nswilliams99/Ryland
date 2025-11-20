import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ryland Environmental - Waste Management & Roll Off Dumpster Rental",
    template: "%s | Ryland Environmental"
  },
  description: "Roll off dumpster rental and waste management services in Tifton and Tift County, Georgia. Rolloff dumpsters for rent - 20, 30, 40-yard containers. Roll off rental near me for construction, demolition, and cleanup projects.",
  keywords: ["roll off dumpster rental", "roll off rental", "rolloff dumpsters for rent", "roll off dumpsters near me", "waste management", "trash pickup", "Tifton", "Tift County", "Georgia", "dumpster rental", "construction waste"],
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
