import * as fs from 'fs';
import * as path from 'path';

const SRC_MAPPINGS = [
  // Solar Panels - Copying from the AI Synthetic Mockups
  {
    src: "synthetic-cache/ai-solar-panel-cleaning-in-green-bay-wi-1.png",
    dest: "gallery/solar_1.jpg"
  },
  {
    src: "synthetic-cache/ai-solar-panel-cleaning-in-appleton-wi-2.png",
    dest: "gallery/solar_2.jpg"
  },
  {
    src: "synthetic-cache/ai-solar-panel-cleaning-in-oshkosh-wi-3.png",
    dest: "gallery/solar_3.jpg"
  },
  // Rust Removal - Copying from Oxidation Removal folder
  {
    src: "gallery/geo-bellevue-oxidation-removal-151.webp",
    dest: "gallery/rust_removal_1.jpg"
  },
  {
    src: "gallery/geo-appleton-oxidation-removal-11.webp",
    dest: "gallery/rust_removal_2.jpg"
  },
  {
    src: "gallery/geo-hobart-oxidation-removal-319.webp",
    dest: "gallery/rust_removal_3.jpg"
  },
  // Driveway Cleaning
  {
    src: "gallery/driveway-cleaning/driveway-cleaning-appleton.webp",
    dest: "gallery/driveway_1.jpg"
  },
  {
    src: "gallery/driveway-cleaning/driveway-cleaning-green bay.webp",
    dest: "gallery/driveway_2.jpg"
  },
  {
    src: "gallery/driveway-cleaning/driveway-cleaning-howard.webp",
    dest: "gallery/driveway_3.jpg"
  },
  // Commercial Awning
  {
    src: "gallery/geo-green-bay-professional-awning-cleaning-23.webp",
    dest: "gallery/awning_1.jpg"
  },
  {
    src: "gallery/geo-howard-professional-awning-cleaning-107.webp",
    dest: "gallery/awning_2.jpg"
  },
  {
    src: "gallery/geo-ashwaubenon-professional-awning-cleaning-303.webp",
    dest: "gallery/awning_3.jpg"
  },
  // Soft Wash (Banning Generic White House)
  {
    src: "gallery/geo-allouez-house-washing-282.webp",
    dest: "gallery/soft_wash_1.jpg"
  },
  {
    src: "gallery/geo-suamico-house-washing-114.webp",
    dest: "gallery/soft_wash_2.jpg"
  },
  {
    src: "gallery/geo-shawano-house-washing-422.webp",
    dest: "gallery/soft_wash_3.jpg"
  }
];

const basePath = path.join(process.cwd(), "public");

function copyAssets() {
  console.log("[START] Initiating physical asset duplication...");

  let successCount = 0;

  SRC_MAPPINGS.forEach(mapping => {
    const srcPath = path.join(basePath, mapping.src);
    const destPath = path.join(basePath, mapping.dest);

    try {
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`[COPIED] -> ${destPath}`);
        successCount++;
      } else {
        console.error(`[ERROR] Source not found: ${srcPath}`);
      }
    } catch (err) {
      console.error(`[FS ERROR] Could not copy ${mapping.src}: ${err.message}`);
    }
  });

  console.log(`\n[COMPLETE] Successfully created ${successCount} out of ${SRC_MAPPINGS.length} explicit image links in /public/gallery/`);
}

copyAssets();
