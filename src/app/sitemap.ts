import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://valleywindowcare.com';

    // Core Pages
    const coreRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    // High-Ticket Services
    const validServices = [
        "paver-patio-restorations",
        "roof-cleaning",
        "house-washing",
        "gutter-cleaning",
        "concrete-cleaning",
        "window-cleaning",
        "christmas-lighting",
        "pressure-washing",
        "residential-permanent-led-lighting",
        "oxidation-removal",
        "soft-wash",
        "driveway-cleaning",
        "solar-panel-cleaning",
        "rust-removal",
        "building-washing",
        "permanent-led-lighting",
        "commercial-roof-cleaning",
        "winter-salt-removal"
    ];

    const serviceRoutes: MetadataRoute.Sitemap = validServices.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // Location Hubs
    const validLocations = [
        "appleton",
        "green-bay",
        "door-county",
        "neenah",
        "oshkosh",
        "de-pere",
        "shawano",
        "ashwaubenon",
        "kaukauna",
        "manitowoc",
        "marinette"
    ];

    const locationRoutes: MetadataRoute.Sitemap = validLocations.map((location) => ({
        url: `${baseUrl}/service-areas/${location}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...coreRoutes, ...serviceRoutes, ...locationRoutes];
}
