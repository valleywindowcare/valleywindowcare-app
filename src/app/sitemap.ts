import { MetadataRoute } from 'next';
import { blogData } from '@/data/blogData';
import serviceData from '@/data/serviceAreasContent.json';
import fs from 'fs';
import path from 'path';

interface ServiceContent {
    type: string;
    citySlug: string;
    serviceSlug: string;
}
const typedServiceData = serviceData as unknown as ServiceContent[];

function getDynamicServicesList(): string[] {
    try {
        const filePath = path.join(process.cwd(), 'src/app/services/[service]/page.tsx');
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            const match = content.match(/const\s+validServices\s*=\s*\[([\s\S]*?)\];/);
            if (match) {
                const arrayContent = match[1];
                const services: string[] = [];
                const regex = /["']([^"']+)["']/g;
                let m;
                while ((m = regex.exec(arrayContent)) !== null) {
                    services.push(m[1]);
                }
                return services;
            }
        }
    } catch (err) {
        console.error("Error parsing dynamic services list:", err);
    }
    return [];
}

function getDynamicIntersectionsList(): string[] {
    try {
        const filePath = path.join(process.cwd(), 'src/app/service-areas/[city]/[service]/page.tsx');
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            const routes: string[] = [];
            const blockMatch = content.match(/const\s+VALID_INTERSECTIONS\s*=\s*\{([\s\S]*?)\};/);
            if (blockMatch) {
                const blockContent = blockMatch[1];
                const cityRegex = /"([^"]+)"\s*:\s*\{([\s\S]*?)\}\s*,\s*\n/g;
                let cityMatch;
                while ((cityMatch = cityRegex.exec(blockContent)) !== null) {
                    const city = cityMatch[1];
                    const serviceBlock = cityMatch[2];
                    const serviceRegex = /"([^"]+)"\s*:\s*\{/g;
                    let serviceMatch;
                    while ((serviceMatch = serviceRegex.exec(serviceBlock)) !== null) {
                        const service = serviceMatch[1];
                        routes.push(`/service-areas/${city}/${service}`);
                    }
                }
            }
            return routes;
        }
    } catch (err) {
        console.error("Error parsing dynamic intersections list:", err);
    }
    return [];
}

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
    "/paver-patio-restorations",
    "/service-areas/service-areas-window-cleaning-gutter-cleaning-pressure-washing-leaf-cleanups"
];

// Active services dynamically mapped from services/[service]/page.tsx array (36 services) + 6 static services
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
    "winter-salt-removal",
    "hoa-services",
    "deck-restoration",
    "hood-vent-cleaning",
    "professional-awning-cleaning-in-green-bay-wisconsin"
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

    // Dynamically discover all static service subdirectories in src/app/services/ containing page.tsx
    const servicesDir = path.join(process.cwd(), 'src/app/services');
    const staticServices = new Set<string>();
    try {
        if (fs.existsSync(servicesDir)) {
            const files = fs.readdirSync(servicesDir);
            files.forEach((file) => {
                const subPath = path.join(servicesDir, file);
                if (fs.statSync(subPath).isDirectory()) {
                    if (file !== '[service]' && file !== 'blog' && fs.existsSync(path.join(subPath, 'page.tsx'))) {
                        staticServices.add(file);
                    }
                }
            });
        }
    } catch (err) {
        console.error("Error reading services directory:", err);
    }

    // Merge static discovered services with predefined valid services and dynamically parsed services
    const dynamicServicesList = getDynamicServicesList();
    const allServices = Array.from(new Set([
        ...validServices,
        ...dynamicServicesList,
        ...Array.from(staticServices)
    ]));

    // 2. Services Routes
    const serviceRoutes: MetadataRoute.Sitemap = allServices.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // 3. Location Hubs
    const dynamicLocations = (serviceData as any[])
        .filter((d) => d.type === 'hub')
        .map((d) => d.citySlug);
    const allLocations = Array.from(new Set([
        ...validLocations,
        ...dynamicLocations
    ]));

    const locationRoutes: MetadataRoute.Sitemap = allLocations.map((city) => ({
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

    // Add dynamic intersections from generateStaticParams in [city]/[service]/page.tsx
    const dynamicIntersections = getDynamicIntersectionsList();
    dynamicIntersections.forEach((route) => {
        intersectionPaths.add(route);
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
