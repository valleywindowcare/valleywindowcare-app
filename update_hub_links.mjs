import * as fs from 'fs';
import * as path from 'path';

const TARGET_FILE = path.join(process.cwd(), "src", "app", "service-areas", "[city]", "page.tsx");

function updateHubLinks() {
  console.log(`[START] Repairing Hub GEO Links inside ${TARGET_FILE}...`);
  if (!fs.existsSync(TARGET_FILE)) return console.error("Missing Hub File");

  let content = fs.readFileSync(TARGET_FILE, 'utf8');

  // 1. Rewrite the Hardcoded HREFS to the new GEO-Slugs dynamically evaluated
  content = content.replace(/href=\{`\/services\/rust-removal-in-green-bay-wisconsin`\}/g, 
    "href={`/services/residential-rust-removal-${content.citySlug}`}"
  );
  content = content.replace(/href=\{`\/services\/soft-washing-company-in-green-bay-wisconsin`\}/g, 
    "href={`/services/soft-wash-${content.citySlug}`}"
  );
  content = content.replace(/href=\{`\/services\/driveway-cleaning-company-in-green-bay-wisconsin`\}/g, 
    "href={`/services/driveway-cleaning-${content.citySlug}`}"
  );
  content = content.replace(/href=\{`\/services\/solar-panel-cleaning-in-green-bay-wisconsin`\}/g, 
    "href={`/services/solar-panel-cleaning-${content.citySlug}`}"
  );

  // 2. Fix the Generic Image Mappings in the Hub
  // We apply ternary logic inside the component to render the Green Bay image (_1) vs Appleton image (_4)
  // E.g., src={content.citySlug === 'green-bay' ? '/gallery/rust_removal_1.jpg' : '/gallery/rust_removal_4.jpg'}

  content = content.replace(
    /src="\/site-gallery\/authentic-IMG_5941\.jpg"/g,
    `src={content.citySlug === 'green-bay' ? '/gallery/rust_removal_1.jpg' : '/gallery/rust_removal_4.jpg'}`
  );

  content = content.replace(
    /src="\/site-gallery\/authentic-IMG_8432\.jpg"/g,
    `src={content.citySlug === 'green-bay' ? '/gallery/soft_wash_1.jpg' : '/gallery/soft_wash_4.jpg'}`
  );

  content = content.replace(
    /src="\/gallery\/audit-replacements\/audit-1772396199144-839\.webp"/g,
    `src={content.citySlug === 'green-bay' ? '/gallery/driveway_1.jpg' : '/gallery/driveway_4.jpg'}`
  );

  content = content.replace(
    /src="\/gallery\/audit-replacements\/audit-1772396199746-444\.webp"/g,
    `src={content.citySlug === 'green-bay' ? '/gallery/solar_1.jpg' : '/gallery/solar_4.jpg'}`
  );

  fs.writeFileSync(TARGET_FILE, content, 'utf8');
  console.log(`[DONE] Dynamic City Routing Mapped.`);
}

updateHubLinks();
