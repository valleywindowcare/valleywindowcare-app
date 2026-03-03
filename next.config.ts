import type { NextConfig } from "next";

const legacyToNestedMap: Record<string, string> = {
  '/pressure-washing-company-in-green-bay-wisconsin': '/pressure-washing-green-bay-wi',
  '/rust-removal-in-green-bay-wisconsin': '/rust-removal-green-bay-wi',
  '/paver-patio-restorations-in-green-bay-wisconsin': '/paver-patio-restorations-green-bay-wi',
  '/expert-exterior-cleaning-for-apartment-complexes-in-green-bay-wisconsin': '/hoa-services-green-bay-wi',
  '/professional-exterior-cleaning-for-hoas-in-green-bay-wisconsin': '/hoa-services-green-bay-wi',
  '/gas-station-cleaning-in-green-bay-wisconsin': '/gas-station-cleaning-green-bay-wi',
  '/post-construction-cleanup-in-green-bay-wisconsin': '/post-construction-cleanup-green-bay-wi',
  '/roof-cleaning-company-in-green-bay-wisconsin': '/roof-cleaning-green-bay-wi',
  '/house-washing-company-in-green-bay-wisconsin': '/house-washing-green-bay-wi',
  '/building-washing-in-green-bay-wisconsin': '/building-washing-green-bay-wi',
  '/window-cleaning-company-in-green-bay-wisconsin': '/window-cleaning-green-bay-wi',
  '/led-lighting-green-bay-wi': '/permanent-led-lighting-green-bay-wi',
  '/services/led-lighting': '/services/permanent-led-lighting',
  '/christmas-lighting-installation-in-green-bay-wisconsin': '/christmas-lighting-green-bay-wi',
  '/soft-washing-company-in-green-bay-wisconsin': '/soft-washing-green-bay-wi',
  '/gutter-cleaning-company-in-green-bay-wisconsin': '/gutter-cleaning-green-bay-wi',
  '/commercial-pressure-washing-company-in-green-bay-wisconsin': '/commercial-pressure-washing-green-bay-wi',
  '/concrete-cleaning-company-in-green-bay-wisconsin': '/concrete-cleaning-green-bay-wi',
  '/permanent-lighting-solutions-green-bay-wi': '/permanent-led-lighting-green-bay-wi',
  '/driveway-cleaning-company-in-green-bay-wisconsin': '/concrete-cleaning-green-bay-wi',
  '/professional-awning-cleaning-in-green-bay-wisconsin': '/professional-awning-cleaning-green-bay-wi',
  '/commercial-vent-hood-cleaning-in-green-bay-appleton-wiay-wi': '/commercial-vent-hood-cleaning-green-bay-wi',
  '/expert-hood-vent-cleaning-green-bay-hhood-vent-cleaning-green-bay': '/commercial-vent-hood-cleaning-green-bay-wi',
  '/solar-panel-cleaning-in-green-bay-wisconsin': '/solar-panel-cleaning-green-bay-wi',
  '/fence-cleaning-in-green-bay-wisconsin': '/fence-cleaning-green-bay-wi',
  '/deck-cleaning-in-green-bay-wisconsin': '/deck-cleaning-green-bay-wi',
  '/parking-lot-and-garage-cleaning-in-green-bay-wisconsin': '/parking-lot-and-garage-cleaning-green-bay-wi',
  '/premium-drive-thru-cleaning-in-green-bay-wisconsin': '/premium-drive-thru-cleaning-green-bay-wi',
  '/storefront-cleaning-in-green-bay-wisconsin': '/storefront-cleaning-green-bay-wi',
  '/professional-graffiti-removal-in-green-bay-wisconsin': '/graffiti-removal-green-bay-wi',
  '/dumpster-pad-cleaning-services-in-green-bay-wisconsin': '/dumpster-pad-cleaning-green-bay-wi',
  '/chewing-gum-removal-in-green-bay-wisconsin': '/chewing-gum-removal-green-bay-wi',
  '/appleton-wi-pressure-washing': '/pressure-washing-appleton-wi',
  '/sidewalk-cleaning-company-in-green-bay-wisconsin': '/concrete-cleaning-green-bay-wi'
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'valleywindowcare.com',
      },
    ],
  },
  async redirects() {
    return Object.entries(legacyToNestedMap).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  }
};

export default nextConfig;
