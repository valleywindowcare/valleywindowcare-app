import * as fs from 'fs';
import * as path from 'path';

// Define the precise mapping logic ordered by the user
const DEEP_MAPPINGS = {
  "solar-panel-cleaning": {
    baseFileName: "solar_",
    serviceString: "Solar Panel Cleaning"
  },
  "residential-rust-removal": {
    baseFileName: "rust_removal_",
    serviceString: "Residential Rust Removal"
  },
  "driveway-cleaning": {
    baseFileName: "driveway_",
    serviceString: "Driveway Cleaning"
  },
  "commercial-awning-cleaning": {
    baseFileName: "awning_",
    serviceString: "Commercial Awning Cleaning"
  },
  "soft-wash": {
    baseFileName: "soft_wash_",
    serviceString: "Soft Wash"
  }
};

const GEO_CITIES = ["Green Bay", "Appleton", "Oshkosh"];
const BASE_DIR = path.join(process.cwd(), "src", "app", "services");

function injectExplicitDeepAssets() {
  const slugs = Object.keys(DEEP_MAPPINGS);
  console.log(`[START] Firing Deep Asset Diversification on ${slugs.length} targets...`);

  slugs.forEach(slug => {
    const targetPath = path.join(BASE_DIR, slug, "page.tsx");
    try {
      if (!fs.existsSync(targetPath)) {
        console.error(`[ERROR] Missing Template: ${targetPath}`);
        return;
      }

      let content = fs.readFileSync(targetPath, 'utf8');
      const pageLogic = DEEP_MAPPINGS[slug];

      // Re-inject strict Next.js Image import if swept out
      if (!content.includes("import Image from 'next/image';")) {
        content = content.replace(
          "import React from 'react';", 
          "import React from 'react';\nimport Image from 'next/image';"
        );
      }

      let matchIndex = 0;

      // The AST string from the file system physically looks like this:
      // <div className="my-8 rounded-2xl overflow-hidden shadow-md">
      //    <img src={'/gallery/audit-replacements/audit-1772396199544-473.webp'} alt="Professional pure water solar panel cleaning services in Green Bay Wisconsin by Valley Window Care" className="w-full h-auto object-cover max-h-[400px]" />
      // </div>
      
      const imageBlockRegex = /<div className="my-8 rounded-2xl overflow-hidden shadow-md">\s*<img src=\{*['"`][^'"`]+['"`]\}*.*?alt="[^"]+".*?\/>\s*<\/div>/g;

      content = content.replace(imageBlockRegex, () => {
        // Construct the strict rules
        const indexNumber = matchIndex + 1;
        const exactImagePath = `/gallery/${pageLogic.baseFileName}${indexNumber}.jpg`;
        const exactGeoMod = GEO_CITIES[matchIndex];
        const exactAltString = `${pageLogic.serviceString} in ${exactGeoMod} Wisconsin by Valley Window Care`;
        
        matchIndex++;

        return `<div className="relative w-full h-[300px] sm:h-[400px] mb-8 rounded-lg overflow-hidden shadow-md">
            <Image
              src="${exactImagePath}"
              alt="${exactAltString}"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
          </div>`;
      });

      fs.writeFileSync(targetPath, content, 'utf8');
      console.log(`[LOCKED] ${matchIndex}/3 explicit schemas forced into /services/${slug}`);

    } catch (err) {
      console.error(`[CRITICAL CATCH] ${targetPath} -> ${err}`);
    }
  });

  console.log(`[DONE] Deep Asset Schema Injector Complete.`);
}

injectExplicitDeepAssets();
