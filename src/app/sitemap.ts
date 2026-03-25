import { MetadataRoute } from 'next';
import { blogData } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://valleywindowcare.com';

    // Core Pages (8)
    const coreRoutes: MetadataRoute.Sitemap = [
        { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/expert-guides/diy-vs-professional-pressure-washing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/service-areas/wisconsin-coverage`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/careers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ];

    // High-Ticket Services (32)
    const validServices = [
        "roof-cleaning", "house-washing", "gutter-cleaning", "concrete-cleaning",
        "window-cleaning", "christmas-lighting", "pressure-washing",
        "residential-permanent-led-lighting", "fence-cleaning", "deck-cleaning",
        "oxidation-removal", "soft-wash", "driveway-cleaning", "solar-panel-cleaning",
        "rust-removal", "building-washing", "dumpster-pad-cleaning", "permanent-led-lighting",
        "commercial-roof-cleaning", "commercial-pressure-washing", "graffiti-removal",
        "hoa-multi-unit-cleaning", "storefront-cleaning", "premium-drive-thru-cleaning",
        "parking-lot-and-garage-cleaning", "chewing-gum-removal", "commercial-awning-cleaning",
        "gas-station-cleaning", "post-construction-cleanup", "paver-patio-restorations",
        "commercial-hood-cleaning", "apartment-exterior-cleaning"
    ];

    const serviceRoutes: MetadataRoute.Sitemap = validServices.map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // Location Hubs (11)
    const validLocations = [
        "appleton", "green-bay", "door-county", "neenah", "oshkosh",
        "de-pere", "shawano", "ashwaubenon", "kaukauna", "manitowoc", "marinette"
    ];

    const locationRoutes: MetadataRoute.Sitemap = validLocations.map((location) => ({
        url: `${baseUrl}/service-areas/${location}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Blog Posts (40)
    const blogRoutes: MetadataRoute.Sitemap = blogData.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...coreRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
