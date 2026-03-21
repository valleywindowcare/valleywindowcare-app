import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import MobileFooter from "@/components/MobileFooter";
import { GoogleTagManager } from '@next/third-parties/google';
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
              name: "Valley Window Care and Exterior Cleaning",
              telephone: "+1-920-609-7085",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4551 Trellis Drive E-2",
                addressLocality: "De Pere",
                addressRegion: "WI",
                postalCode: "54115"
              },
              areaServed: [
                "Green Bay",
                "Appleton",
                "De Pere",
                "Neenah",
                "Fox Valley"
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Exterior Cleaning Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Soft Washing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Cleaning" } }
                ]
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "100"
              }
            }).replace(/</g, '\\u003c').replace(/'/g, "&apos;")
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} font-inter antialiased min-h-screen flex flex-col relative pb-16 md:pb-0 bg-slate-50 text-[#353738]`}
      >
        <SpeedInsights />
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script
            id="fb-pixel"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                 !function(f,b,e,v,n,t,s)
                 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                 n.queue=[];t=b.createElement(e);t.async=!0;
                 t.src=v;s=b.getElementsByTagName(e)[0];
                 s.parentNode.insertBefore(t,s)}(window, document,'script',
                 'https://connect.facebook.net/en_US/fbevents.js');
                 fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                 fbq('track', 'PageView');
               `,
            }}
          />
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
