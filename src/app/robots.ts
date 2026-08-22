import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/privacy-policy', '/terms-and-conditions', '/service-guarantee'],
        },
        sitemap: 'https://www.valleyexteriorpros.com/sitemap.xml',
    }
}
