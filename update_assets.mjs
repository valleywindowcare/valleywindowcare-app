import * as fs from 'fs';
import * as path from 'path';

// Define the 5 target pages and their corresponding explicit image arrays
const ASSIGNMENTS = {
  "solar-panel-cleaning": {
    images: [
      "/synthetic-cache/ai-solar-panel-cleaning-in-green-bay-wi-1.png",
      "/synthetic-cache/ai-solar-panel-cleaning-in-appleton-wi-2.png",
      "/synthetic-cache/ai-solar-panel-cleaning-in-oshkosh-wi-3.png"
    ],
    altModifier: "Professional solar panel cleaning"
  },
  "residential-rust-removal": {
    images: [
      "/gallery/geo-bellevue-oxidation-removal-151.webp",
      "/gallery/geo-appleton-oxidation-removal-11.webp",
      "/gallery/geo-hobart-oxidation-removal-319.webp"
    ],
    altModifier: "Residential rust and oxidation removal"
  },
  "driveway-cleaning": {
    images: [
      "/gallery/driveway-cleaning/driveway-cleaning-appleton.webp",
      "/gallery/driveway-cleaning/driveway-cleaning-green bay.webp",
      "/gallery/driveway-cleaning/driveway-cleaning-howard.webp"
    ],
    altModifier: "Professional concrete driveway cleaning"
  },
  "commercial-awning-cleaning": {
    images: [
      "/gallery/geo-green-bay-professional-awning-cleaning-23.webp",
      "/gallery/geo-howard-professional-awning-cleaning-107.webp",
      "/gallery/geo-ashwaubenon-professional-awning-cleaning-303.webp"
    ],
    altModifier: "Commercial awning and storefront cleaning"
  },
  "soft-wash": {
    images: [
      "/gallery/geo-allouez-house-washing-282.webp",
      "/gallery/geo-howard-house-washing-198.webp",
      "/gallery/geo-suamico-house-washing-114.webp"
    ],
    altModifier: "Exterior soft washing and siding algae removal"
  }
};

const GEO_MODIFIERS = ["Green Bay Wisconsin", "Appleton WI", "the Fox Valley"];
const BASE_DIR = path.join(process.cwd(), "src", "app", "services");

function executeAssetSwap() {
  const slugs = Object.keys(ASSIGNMENTS);
  console.log(`[START] Initiating Surgical Asset Alignment for ${slugs.length} targets...`);

  slugs.forEach(slug => {
    const targetPath = path.join(BASE_DIR, slug, "page.tsx");
    try {
      if (!fs.existsSync(targetPath)) {
        console.error(`[ERROR] File missing: ${targetPath}`);
        return;
      }

      let content = fs.readFileSync(targetPath, 'utf8');
      const pageConfig = ASSIGNMENTS[slug];

      // Inject strict Next.js Image import if absent
      if (!content.includes("import Image from 'next/image';")) {
        content = content.replace(
          "import React from 'react';", 
          "import React from 'react';\nimport Image from 'next/image';"
        );
      }

      // We need to find the specific injection points from the previous sync string.
      // We'll surgically replace the `<img src="/gallery/audit-replacements/` loops.

      let matchIndex = 0;
      const injectionPattern = /<img\s+src="\/gallery\/audit-replacements\/[^"]+"\s+alt="[^"]+"\s+className="w-full h-auto rounded-lg shadow-md mb-8"\s*\/>/g;

      content = content.replace(injectionPattern, (match) => {
        const imagePath = pageConfig.images[matchIndex];
        const locationStr = GEO_MODIFIERS[matchIndex];
        const newAlt = `${pageConfig.altModifier} in ${locationStr} by Valley Window Care`;
        matchIndex++;
        
        // Output strict Next.js Image schema
        return `<div className="relative w-full h-[300px] sm:h-[400px] mb-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="${imagePath}"
              alt="${newAlt}"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>`;
      });

      fs.writeFileSync(targetPath, content, 'utf8');
      console.log(`[SUCCESS] Re-mapped 3 explicit Assets + Next.js schemas into /services/${slug}`);

    } catch (err) {
      console.error(`[CRITICAL EXPERROR] ${targetPath} -> ${err}`);
    }
  });

  console.log(`[DONE] Deep Image Sync Complete.`);
}

executeAssetSwap();
