import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
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
    default: "Pressure Washing & Roof Cleaning Green Bay | Valley Exterior Restoration",
    template: "%s | Valley Exterior Restoration",
  },
  description: "Northeast Wisconsin's elite exterior restoration specialists. Get an instant quote for high-end pressure washing, paver sealing, and safe soft-wash roof restoration. Call (920) 609-7085 today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
             __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','GTM-PKHVCB3X');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Valley Exterior Restoration",
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
                name: "Exterior Restoration Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Premium Pressure Washing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Safe Soft-Wash Roof Restoration" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paver Restoration & Sealing" } }
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
        className={`${outfit.variable} ${inter.variable} font-inter tracking-wide leading-relaxed antialiased min-h-screen flex flex-col relative pb-16 md:pb-0 bg-slate-50 text-[#353738]`}
      >
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKHVCB3X"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SpeedInsights />
        <Analytics />
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
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
        <MobileFooter />
      </body>
    </html>
  );
}
