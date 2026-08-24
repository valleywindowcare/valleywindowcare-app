import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import CanonicalURL from "@/components/CanonicalURL";
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
  metadataBase: new URL("https://valleyexteriorpros.com"),
  title: {
    default: "Pressure Washing & Roof Cleaning Green Bay | Valley Property Services",
    template: "%s | Valley Property Services",
  },
  description: "Northeast Wisconsin's elite exterior restoration specialists. Get an instant quote for high-end pressure washing, paver sealing, and safe soft-wash roof restoration. Call (920) 609-7085 today!",
  openGraph: {
    title: "Valley Property Services | Exterior Restoration & Pressure Washing | De Pere, WI",
    description: "Valley Property Services specializes in premium exterior restoration, soft wash roof cleaning, pressure washing, paver sealing, and window cleaning across De Pere, Green Bay, and the Fox Valley.",
    url: "https://valleyexteriorpros.com",
    siteName: "Valley Property Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <CanonicalURL />
        <Script
          id="openai-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
             __html: `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"UEmYjhDavsEzcQmQozCHgV",debug:true});`
          }}
        />
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
             __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','GTM-MC25G2RK');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Valley Property Services",
              "alternateName": ["Valley Exterior Pros", "Valley Exterior Restoration"],
              "legalName": "Valley Property Services",
              "url": "https://valleyexteriorpros.com",
              "telephone": "+1-920-609-7085",
              "email": "info@valleywindowcare.com",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "462 S Good Hope Rd",
                "addressLocality": "De Pere",
                "addressRegion": "WI",
                "postalCode": "54115",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.4287,
                "longitude": -88.0289
              },
              "areaServed": [
                {"@type": "City", "name": "De Pere"},
                {"@type": "City", "name": "Green Bay"},
                {"@type": "City", "name": "Appleton"},
                {"@type": "City", "name": "Neenah"},
                {"@type": "City", "name": "Fox Valley"}
              ],
              "knowsAbout": [
                "Pressure Washing",
                "Soft-Wash Roof Cleaning",
                "Paver Sealing",
                "Window Cleaning",
                "Commercial Hood Cleaning",
                "Permanent LED Lighting"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Exterior Restoration Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Premium Pressure Washing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Safe Soft-Wash Roof Restoration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Paver Restoration & Sealing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Hood Cleaning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Permanent LED Lighting Installation"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "100"
              }
            }).replace(/</g, '\\u003c')
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} font-inter tracking-wide leading-relaxed antialiased min-h-screen flex flex-col relative pb-16 md:pb-0 bg-slate-50 text-[#353738]`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MC25G2RK"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SpeedInsights />
        <Analytics />
        {/* Commented out Google Ads Call Conversion DNI script to prevent dynamic number replacements */}
        {/* {process.env.NEXT_PUBLIC_GADS_ID && (
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GADS_ID}`}
            />
            <Script
              id="google-ads-init"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GADS_ID}', {
                    'phone_conversion_number': '(920) 609-7085'
                  });
                `,
              }}
            />
          </>
        )} */}
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
        <MobileFooter />
      </body>
    </html>
  );
}
