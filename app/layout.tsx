import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sheraverified.com"),
  title: {
    default: "SheraVerified - Best Verified Businesses in Bangladesh",
    template: "%s | SheraVerified",
  },
  description: "Find trusted and verified businesses in Bangladesh. Check Shera Score, read authentic reviews, and make informed decisions with SheraVerified.",
  keywords: ["SheraVerified", "Verified Business Bangladesh", "Best Business BD", "Shera Score", "Trusted Reviews", "Business Directory Bangladesh"],
  authors: [{ name: "SheraVerified Team" }],
  creator: "SheraVerified",
  publisher: "SheraVerified",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sheraverified.com",
    title: "SheraVerified - Best Verified Businesses in Bangladesh",
    description: "Find trusted and verified businesses in Bangladesh. Check Shera Score, read authentic reviews, and make informed decisions.",
    siteName: "SheraVerified",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public folder later
        width: 1200,
        height: 630,
        alt: "SheraVerified - Trusted Businesses in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SheraVerified - Best Verified Businesses in Bangladesh",
    description: "Find trusted and verified businesses in Bangladesh. Check Shera Score, read authentic reviews, and make informed decisions.",
    images: ["/og-image.jpg"],
    creator: "@sheraverified",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SheraVerified",
              url: "https://www.sheraverified.com",
              logo: "https://www.sheraverified.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+880-1711-000000",
                contactType: "customer service",
                areaServed: "BD",
                availableLanguage: ["en", "bn"],
              },
              sameAs: [
                "https://facebook.com/sheraverified",
                "https://twitter.com/sheraverified",
                "https://instagram.com/sheraverified",
                "https://linkedin.com/company/sheraverified",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
