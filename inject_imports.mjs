import * as fs from 'fs';
import * as path from 'path';

const TARGET_SLUGS = [
  "solar-panel-cleaning",
  "residential-rust-removal",
  "driveway-cleaning",
  "commercial-awning-cleaning",
  "soft-wash"
];

const BASE_DIR = path.join(process.cwd(), "src", "app", "services");

function injectImageImport() {
  console.log(`[START] Enforcing Next.js Image Imports on ${TARGET_SLUGS.length} targets...`);

  let successCount = 0;

  TARGET_SLUGS.forEach(slug => {
    const targetPath = path.join(BASE_DIR, slug, "page.tsx");
    try {
      if (!fs.existsSync(targetPath)) return;

      let content = fs.readFileSync(targetPath, 'utf8');

      // Check if `next/image` is already imported
      if (!content.includes("import Image from 'next/image';")) {
        // Standardize the injection point right under the Link import
        content = content.replace(
          "import Link from 'next/link';",
          "import Link from 'next/link';\nimport Image from 'next/image';"
        );
        fs.writeFileSync(targetPath, content, 'utf8');
        console.log(`[INJECTED] -> /services/${slug}/page.tsx`);
        successCount++;
      } else {
        console.log(`[SKIPPED] Import exists in /services/${slug}/page.tsx`);
      }

    } catch (err) {
      console.error(`[CRITICAL CATCH] ${targetPath} -> ${err}`);
    }
  });

  console.log(`[DONE] Recovered ${successCount} missing imports.`);
}

injectImageImport();
