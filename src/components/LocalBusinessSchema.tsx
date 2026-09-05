import React from 'react';

export const localBusinessSchemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://valleyexteriorpros.com/#organization",
  "name": "Valley Property Services",
  "alternateName": ["Valley Exterior Pros", "Valley Exterior Restoration", "VPS"],
  "legalName": "Valley Property Services",
  "url": "https://valleyexteriorpros.com",
  "logo": "https://valleyexteriorpros.com/Blue%20Version%20copy/VPS%20Exterior%20Cleaning/PNG/VPS%20Exterior%20Cleaning.png",
  "image": "https://valleyexteriorpros.com/images/portfolio/house-wash-before-after.webp",
  "email": "info@valleyexteriorpros.com",
  "telephone": "920-609-7085",
  "priceRange": "$$",
  "description": "Northeast Wisconsin's premier exterior restoration company specializing in commercial and residential power washing, roof soft washing, paver restoration, and hood vent cleaning.",
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
    "latitude": 44.433056,
    "longitude": -88.064463
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Green Bay",
      "sameAs": "https://en.wikipedia.org/wiki/Green_Bay,_Wisconsin"
    },
    {
      "@type": "City",
      "name": "Appleton",
      "sameAs": "https://en.wikipedia.org/wiki/Appleton,_Wisconsin"
    },
    {
      "@type": "City",
      "name": "De Pere",
      "sameAs": "https://en.wikipedia.org/wiki/De_Pere,_Wisconsin"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/valleywindowcare",
    "https://www.instagram.com/valleywindowcare",
    "https://www.youtube.com/@valleypropertywash",
    "https://www.google.com/maps?cid=14133068595604156906"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "119",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Exterior Restoration & Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pressure Washing",
          "serviceType": "Pressure Washing",
          "description": "Professional residential and commercial pressure washing for driveways, siding, and flatwork.",
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://valleyexteriorpros.com/#organization",
            "name": "Valley Property Services"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Washing",
          "serviceType": "Power Washing",
          "description": "High-pressure hot-water power washing for tough stains, concrete flatwork, and commercial facilities.",
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://valleyexteriorpros.com/#organization",
            "name": "Valley Property Services"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Cleaning",
          "serviceType": "Roof Cleaning",
          "description": "Safe, manufacturer-approved low-pressure soft wash roof cleaning and moss eradication.",
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://valleyexteriorpros.com/#organization",
            "name": "Valley Property Services"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Kitchen Exhaust Cleaning",
          "serviceType": "Commercial Kitchen Exhaust Cleaning",
          "description": "NFPA 96-compliant commercial kitchen hood exhaust steam cleaning and grease removal.",
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://valleyexteriorpros.com/#organization",
            "name": "Valley Property Services"
          }
        }
      }
    ]
  }
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchemaData) }}
    />
  );
}
