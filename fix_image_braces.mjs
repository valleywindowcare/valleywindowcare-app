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

function repairJSXProperties() {
  console.log(`[START] Firing JSX Repair on ${TARGET_SLUGS.length} targets...`);

  TARGET_SLUGS.forEach(slug => {
    const targetPath = path.join(BASE_DIR, slug, "page.tsx");
    try {
      if (!fs.existsSync(targetPath)) {
        console.error(`[ERROR] Missing Template: ${targetPath}`);
        return;
      }

      let content = fs.readFileSync(targetPath, 'utf8');

      // The AST string from the file system physically looks like this:
      // <Image
      //    src="/gallery/awning_1.jpg"
      //    alt="Commercial Awning Cleaning in Green Bay Wisconsin by Valley Window Care"
      //    fill
      //    className="object-cover"
      //    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      //    loading="lazy"
      //  />
      
      // We must wrap the src, alt, className, sizes, and loading string values in {} for TSX
      // e.g., src={"/gallery/awning_1.jpg"}

      const imageRegex = /<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s+fill\s+className="([^"]+)"\s+sizes="([^"]+)"\s+loading="([^"]+)"\s*\/>/g;

      content = content.replace(imageRegex, (match, srcVal, altVal, classVal, sizesVal, loadVal) => {
        return `<Image
              src={"${srcVal}"}
              alt={"${altVal}"}
              fill
              className={"${classVal}"}
              sizes={"${sizesVal}"}
              loading={"${loadVal}"}
            />`;
      });

      fs.writeFileSync(targetPath, content, 'utf8');
      console.log(`[REPAIRED] JSX Properties locked for /services/${slug}`);

    } catch (err) {
      console.error(`[CRITICAL CATCH] ${targetPath} -> ${err}`);
    }
  });

  console.log(`[DONE] Deep Asset Schema JSX Repair Complete.`);
}

repairJSXProperties();
