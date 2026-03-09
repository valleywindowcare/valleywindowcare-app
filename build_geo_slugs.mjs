import * as fs from 'fs';
import * as path from 'path';

const SERVICES = [
  "solar-panel-cleaning",
  "residential-rust-removal",
  "driveway-cleaning",
  "commercial-awning-cleaning",
  "soft-wash"
];

const BASE_DIR = path.join(process.cwd(), "src", "app", "services");

const GEO_CONFIG = {
  "green-bay": {
    city: "Green Bay",
    landmarks: ["Lambeau Field area", "Fox River", "Lake Michigan lake-effect winds", "Brown County districts"],
    imgOffset: 0
  },
  "appleton": {
    city: "Appleton",
    landmarks: ["Fox River Mall area", "College Avenue", "Fox Valley agricultural dust", "Outagamie County neighborhoods"],
    imgOffset: 3
  }
};

function rebuildGeoSlugs() {
  console.log(`[START] Recompiling ${SERVICES.length} base routes into 10 Geo-Slugs...`);
  let totalBuilt = 0;

  SERVICES.forEach(service => {
    const srcPath = path.join(BASE_DIR, service, "page.tsx");
    if (!fs.existsSync(srcPath)) return;

    const baseContent = fs.readFileSync(srcPath, 'utf8');

    Object.keys(GEO_CONFIG).forEach(geoSlug => {
      const config = GEO_CONFIG[geoSlug];
      const newDir = path.join(BASE_DIR, `${service}-${geoSlug}`);
      const newFilePath = path.join(newDir, "page.tsx");

      if (!fs.existsSync(newDir)) fs.mkdirSync(newDir, { recursive: true });

      let localContent = baseContent;

      // 1. Rewrite Metadata & Title Tags
      const geoTitle = `in ${config.city} Wisconsin`;
      localContent = localContent.replace(/in Northeast Wisconsin/g, geoTitle);
      localContent = localContent.replace(/across Northeast Wisconsin/g, `in the ${config.city} area`);
      localContent = localContent.replace(/Northeast Wisconsin/g, config.city);
      
      // 2. Map Strict Image Asset Blocks
      // Base template uses `_1`, `_2`, `_3`. For Appleton, we shift to `_4`, `_5`, `_6`
      let imgMatchIndex = 0;
      const baseNameStr = service.replace(/-/g, '_').replace('cleaning', '').replace('residential_', '').replace('commercial_', '').replace('__', '_').replace(/_$/, '');
      // For solar and driveway and awning, the prefix mapping is hard:
      const idPrefixes = {
        "solar-panel-cleaning": "solar_",
        "residential-rust-removal": "rust_removal_",
        "driveway-cleaning": "driveway_",
        "commercial-awning-cleaning": "awning_",
        "soft-wash": "soft_wash_"
      };
      
      const pfx = idPrefixes[service];

      // Replace Next.js Object Strings
      localContent = localContent.replace(/src=\{"\/gallery\/[a-z_]+(\d)\.jpg"\}/g, (match, num) => {
        const newNum = parseInt(num) + config.imgOffset;
        return `src={"/gallery/${pfx}${newNum}.jpg"}`;
      });

      // Update their ALT tags
      localContent = localContent.replace(/alt=\{"([^"]+) in (?:Green Bay|Appleton|Oshkosh) Wisconsin by Valley Window Care"\}/g, (match, prefixStr) => {
        return `alt={"${prefixStr} in ${config.city} Wisconsin by Valley Window Care"}`;
      });

      // 3. Systematically inject Landmarks into the 600-word prose (Targeting paragraphs under headers)
      // "Fox Valley" -> Landmark[0]
      // "Green Bay" / "Appleton" hard swapping
      const l1 = config.landmarks[0];
      const l2 = config.landmarks[1];
      const l3 = config.landmarks[2];

      localContent = localContent.replace(/the Fox Valley/g, `the ${config.city} ${l1} area`);
      localContent = localContent.replace(/Green Bay/g, config.city);
      localContent = localContent.replace(/Appleton/g, config.city);
      
      // Injecting localized weather/landmark strings into specific paragraphs to guarantee uniqueness
      localContent = localContent.replace(/corrosive bird droppings rapidly accumulate/g, `corrosive bird droppings rapidly accumulate near ${l2}`);
      localContent = localContent.replace(/agricultural dust/g, `${l3} and high humidity`);

      fs.writeFileSync(newFilePath, localContent, 'utf8');
      console.log(`[BUILT] -> /services/${service}-${geoSlug}`);
      totalBuilt++;
    });
  });

  console.log(`[DONE] ${totalBuilt} Geo-Slugs Generated and Content Shifted.`);
}

rebuildGeoSlugs();
