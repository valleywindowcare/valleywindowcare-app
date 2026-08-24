import { MetadataRoute } from 'next';
import { blogData } from '@/data/blogData';
import serviceData from '@/data/serviceAreasContent.json';

// Static / Core 200 OK routes
const coreRoutesList = [
    "",
    "/contact",
    "/about-us",
    "/reviews",
    "/blog",
    "/pricing",
    "/expert-guides/diy-vs-professional-pressure-washing",
    "/service-areas/wisconsin-coverage",
    "/careers",
    "/faq",
    "/services",
    "/service-areas",
    "/gallery",
    "/privacy-policy",
    "/terms-and-conditions",
    "/service-guarantee",
    "/wisconsin-maintenance-calendar",
    "/quote",
    "/quote/success"
];

// Active services dynamically mapped from services/[service]/page.tsx array (32 services)
const validServices = [
    "roof-cleaning",
    "house-washing",
    "gutter-cleaning",
    "concrete-cleaning",
    "window-cleaning",
    "christmas-lighting",
    "pressure-washing",
    "residential-permanent-led-lighting",
    "fence-cleaning",
    "deck-cleaning",
    "oxidation-removal",
    "soft-wash",
    "driveway-cleaning",
    "solar-panel-cleaning",
    "rust-removal",
    "building-washing",
    "dumpster-pad-cleaning",
    "permanent-led-lighting",
    "commercial-roof-cleaning",
    "commercial-pressure-washing",
    "graffiti-removal",
    "hoa-multi-unit-cleaning",
    "storefront-cleaning",
    "premium-drive-thru-cleaning",
    "parking-lot-and-garage-cleaning",
    "chewing-gum-removal",
    "commercial-awning-cleaning",
    "gas-station-cleaning",
    "post-construction-cleanup",
    "paver-patio-restorations",
    "commercial-hood-cleaning",
    "apartment-exterior-cleaning"
];

// Excluded cities (noindexed/soft-404/redirected)
const excludedCities = [
    "shawano",
    "marinette",
    "peshtigo",
    "oconto"
];

// Child Geo-Service Intersection Routes (4 valid intersections)
const intersections = [
    { city: "green-bay", service: "pressure-washing" },
    { city: "green-bay", service: "roof-cleaning" },
    { city: "appleton", service: "pressure-washing" },
    { city: "appleton", service: "house-washing" }
];

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://valleyexteriorpros.com';

    // 1. Core Routes
    const coreRoutes: MetadataRoute.Sitemap = coreRoutesList.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" || route === "/blog" ? 'weekly' : 'monthly',
        priority: route === "" ? 1.0 : 0.8,
    }));

    // 2. Services Routes
    const serviceRoutes: MetadataRoute.Sitemap = validServices.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // 3. Location Hubs (programmatically load active hubs from serviceAreasContent.json)
    const activeCities = Array.from(
        new Set(
            serviceData
                .filter((item) => item.type === 'hub' && item.citySlug)
                .map((item) => item.citySlug)
        )
    ).filter((citySlug) => citySlug && !excludedCities.includes(citySlug));

    const locationRoutes: MetadataRoute.Sitemap = activeCities.map((city) => ({
        url: `${baseUrl}/service-areas/${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
    }));

    // 4. Intersections
    const intersectionRoutes: MetadataRoute.Sitemap = intersections.map((item) => ({
        url: `${baseUrl}/service-areas/${item.city}/${item.service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.85,
    }));

    // 5. Blog Posts (programmatically map active slugs from blogData)
    // Filter out legacy redirected posts
    const redirectedSlugs = [
        "window-cleaning",
        "permanent-lighting-green-bay-wi",
        "how-to-restore-and-maintain-your-pavers-a-complete-guide-to-paver-cleaning-and-sealing-cloned"
    ];

    const blogRoutes: MetadataRoute.Sitemap = blogData
        .filter((post) => post.slug && !redirectedSlugs.includes(post.slug))
        .map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly',
            priority: 0.7,
        }));

    return [
        ...coreRoutes,
        ...serviceRoutes,
        ...locationRoutes,
        ...intersectionRoutes,
        ...blogRoutes
    ];
}
