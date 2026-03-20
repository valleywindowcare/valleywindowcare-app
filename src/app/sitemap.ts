import { MetadataRoute } from 'next';
import { blogData } from '@/data/blogData';
import serviceData from '@/data/serviceAreasContent.json';

// Known services available at /services/[service]
const validServices = [
    "roof-cleaning", "house-washing", "gutter-cleaning", "concrete-cleaning",
    "window-cleaning", "christmas-lighting", "pressure-washing",
    "residential-permanent-led-lighting", "fence-cleaning", "deck-cleaning",
    "oxidation-removal", "soft-wash", "driveway-cleaning",

    // Commercial
    "building-washing", "commercial-concrete-cleaning", "commercial-window-cleaning",
    "commercial-roof-cleaning", "parking-lot-and-garage-cleaning",
    "apartment-exterior-cleaning", "graffiti-removal", "dumpster-pad-cleaning",
    "chewing-gum-removal", "premium-drive-thru-cleaning", "storefront-cleaning",
    "commercial-awning-cleaning", "hoa-services", "gas-station-cleaning",
    "commercial-hood-cleaning", "commercial-pressure-washing",
    "paver-patio-restorations", "rust-removal", "solar-panel-cleaning",
    "post-construction-cleanup"
];

// Expanded city service variations based on generated data
interface ServiceContent {
    type: string;
    citySlug: string;
    serviceSlug: string;
    [key: string]: any;
}
const typedServiceData = serviceData as unknown as ServiceContent[];

const getCityServiceRoutes = () => {
    // We strictly map the core city hubs to ensure deep authority
    const hubs = typedServiceData.filter((d) => d.type === 'hub').map(d => d.citySlug);

    return { hubs };
};

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.valleywindowcare.com';

    // Static core routes
    const staticRoutes = [
        '',
        '/about-us',
        '/contact',
        '/gallery',
        '/services',
        '/service-areas',
        '/pricing',
        '/faq',
        '/reviews',
        '/privacy-policy',
        '/service-guarantee',
        '/terms-and-conditions',
        '/blog'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Services routes
    const serviceRoutes = validServices.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic Blog routes
    const blogRoutes = blogData.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic City Hubs & Specific City Services
    const { hubs } = getCityServiceRoutes();

    const cityHubRoutes = hubs.map((city) => ({
        url: `${baseUrl}/service-areas/${city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const allOtherRoutes = [
        ...staticRoutes,
        ...serviceRoutes,
        ...cityHubRoutes,
        ...blogRoutes,
    ];

    const powerHubUrls = allOtherRoutes.filter(route =>
        route.url.includes('/green-bay') || route.url.includes('/appleton')
    );
    const standardUrls = allOtherRoutes.filter(route =>
        !route.url.includes('/green-bay') && !route.url.includes('/appleton')
    );

    return [
        ...powerHubUrls,
        ...standardUrls
    ];
}
