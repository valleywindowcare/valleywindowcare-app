import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: [
                    'Googlebot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'PerplexityBot',
                    'Claude-Web',
                ],
                allow: '/',
                disallow: ['/api/', '/quote/success'],
            },
            {
                userAgent: [
                    'GPTBot',
                    'ClaudeBot',
                    'Amazonbot',
                    'Bytespider',
                    'CCBot',
                ],
                disallow: ['/'],
            },
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/quote/success'],
            },
        ],
        sitemap: 'https://valleyexteriorpros.com/sitemap.xml',
    };
}
