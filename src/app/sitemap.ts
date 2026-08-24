import { MetadataRoute } from 'next';
import { blogData } from '@/data/blogData';
import serviceData from '@/data/serviceAreasContent.json';

interface ServiceContent {
    type: string;
    citySlug: string;
    serviceSlug: string;
}
const typedServiceData = serviceData as unknown as ServiceContent[];

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
    "/quote"
];

// Active services dynamically mapped from services/[service]/page.tsx array (32 services) + 6 static services
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
    "apartment-exterior-cleaning",
    "apartment-hoa-cleaning",
    "building-wash",
    "permanent-holiday-lighting",
    "residential-rust-removal",
    "rust-and-oxidation-removal",
    "winter-salt-removal"
];

// 19 city hub routes in validLocations
const validLocations = [
    "appleton",
    "green-bay",
    "de-pere",
    "door-county",
    "neenah",
    "oshkosh",
    "manitowoc",
    "algoma",
    "kewaunee",
    "kimberly",
    "little-chute",
    "two-rivers",
    "wrightstown",
    "sturgeon-bay",
    "egg-harbor",
    "fish-creek",
    "sister-bay",
    "howard",
    "suamico"
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

    // 3. Location Hubs
    const locationRoutes: MetadataRoute.Sitemap = validLocations.map((city) => ({
        url: `${baseUrl}/service-areas/${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
    }));

    // 4. Intersections
    const targetCities = ['green-bay', 'neenah', 'appleton', 'ashwaubenon', 'menasha', 'kaukauna'];
    const targetServices = ['roof-cleaning', 'permanent-led-lighting', 'paver-patio-restorations', 'commercial-pressure-washing'];

    const specificRoutes = typedServiceData
        .filter(d => d.type === 'service')
        .map(d => `/service-areas/${d.citySlug}/${d.serviceSlug}`);

    const intersectionPaths = new Set<string>();
    
    // Add explicit valid intersections
    intersectionPaths.add("/service-areas/green-bay/pressure-washing");
    intersectionPaths.add("/service-areas/green-bay/roof-cleaning");
    intersectionPaths.add("/service-areas/appleton/pressure-washing");
    intersectionPaths.add("/service-areas/appleton/house-washing");

    // Add target intersections matching target criteria
    specificRoutes.forEach((route) => {
        const isTarget = targetCities.some(city => route.includes(`/${city}/`)) && targetServices.some(service => route.endsWith(`/${service}`));
        if (isTarget) {
            intersectionPaths.add(route);
        }
    });

    const intersectionRoutes: MetadataRoute.Sitemap = Array.from(intersectionPaths).map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // 5. Blog Posts (programmatically map active slugs from blogData)
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

    // Canonical Equality Filter Predicates
    const isSelfCanonical = (routePath: string, declaredCanonical: string) => {
        const expectedUrl = new URL(routePath, 'https://valleyexteriorpros.com').href;
        const normalize = (u: string) => u.replace(/\/$/, "");
        return normalize(declaredCanonical) === normalize(expectedUrl);
    };

    const getDeclaredCanonical = (routePath: string): string => {
        // Special case: /quote/success is noindexed and not self-canonical
        if (routePath === "/quote/success") return "";

        // Special case: shawano is noindexed and not self-canonical
        if (routePath === "/service-areas/shawano") return "";

        // Special case: duplicate routes
        if (routePath === "/services/blog") return "https://valleyexteriorpros.com/blog";

        // Dynamic blog posts
        if (routePath.startsWith("/blog/")) {
            const slug = routePath.split("/")[2];
            if (redirectedSlugs.includes(slug)) return "";
            return `https://valleyexteriorpros.com/blog/${slug}`;
        }

        // Cities:
        if (routePath.startsWith("/service-areas/") && !routePath.includes("/", 15)) {
            const city = routePath.split("/")[2];
            const redirects: Record<string, string> = {
                "de-pere": "green-bay",
                "howard": "green-bay",
                "suamico": "green-bay",
                "sturgeon-bay": "door-county",
                "egg-harbor": "door-county",
                "fish-creek": "door-county",
                "sister-bay": "door-county"
            };
            if (city in redirects) {
                return `https://valleyexteriorpros.com/service-areas/${redirects[city]}`;
            }
            return `https://valleyexteriorpros.com/service-areas/${city}`;
        }

        // Intersections:
        if (routePath.startsWith("/service-areas/") && routePath.includes("/", 15)) {
            const parts = routePath.split("/");
            const city = parts[2];
            const service = parts[3];
            
            const explicit = [
                "/service-areas/green-bay/pressure-washing",
                "/service-areas/green-bay/roof-cleaning",
                "/service-areas/appleton/pressure-washing",
                "/service-areas/appleton/house-washing"
            ];
            
            if (explicit.includes(routePath)) {
                return `https://valleyexteriorpros.com/service-areas/${city}/${service}`;
            }
            
            return `https://valleyexteriorpros.com/services/${service}`;
        }

        return `https://valleyexteriorpros.com${routePath}`;
    };

    const allRoutes = [
        ...coreRoutes,
        ...serviceRoutes,
        ...locationRoutes,
        ...intersectionRoutes,
        ...blogRoutes
    ];

    return allRoutes.filter((route) => {
        const routePath = route.url.replace(baseUrl, "");
        const declaredCanonical = getDeclaredCanonical(routePath);
        return isSelfCanonical(routePath, declaredCanonical);
    });
}
