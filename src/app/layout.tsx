import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import MobileFooter from "@/components/MobileFooter";
import MetaPixel from "@/components/MetaPixel";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#1B365D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Valley Window Care | Premium Exterior Cleaning in Green Bay, WI",
    template: "%s | Valley Window Care",
  },
  description: "Northeast Wisconsin's 5-star rated exterior cleaning and architectural maintenance specialists. Serving De Pere, Green Bay, and Appleton.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Valley Window Care",
              telephone: "+1-920-609-7085",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4551 Trellis Drive E-2",
                addressLocality: "De Pere",
                addressRegion: "WI",
                postalCode: "54115"
              },
              areaServed: ["Green Bay", "Appleton", "Oshkosh", "De Pere", "Door County", "Fox Valley"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "100"
              },
              knowsAbout: [
                "Water purification",
                "HOA standards",
                "Paver restoration",
                "Soft washing physics",
                "Commercial grease compliance"
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Exterior Cleaning Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Window Cleaning"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Pressure Washing"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Paver Patio Restorations"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Permanent LED Lighting"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} font-inter antialiased min-h-screen flex flex-col relative pb-16 md:pb-0 bg-slate-50 text-[#353738]`}
      >
        <SpeedInsights />
        <Analytics />
        <MetaPixel />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <MobileFooter />
      </body>
    </html>
  );
}
