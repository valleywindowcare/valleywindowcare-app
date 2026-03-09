import * as fs from 'fs';
import * as path from 'path';

const SRC_SOLAR_MAPPINGS = [
  // Solar Panels - Copying from the AI Synthetic Mockups (New ones for Appleton)
  {
    src: "../.gemini/antigravity/brain/94137aa9-ef83-40ba-be8a-c32b0a10f67d/solar_cleaning_4_1772563429063.png",
    dest: "gallery/solar_4.jpg"
  },
  {
    src: "../.gemini/antigravity/brain/94137aa9-ef83-40ba-be8a-c32b0a10f67d/solar_cleaning_5_1772563442480.png",
    dest: "gallery/solar_5.jpg"
  },
  {
    src: "../.gemini/antigravity/brain/94137aa9-ef83-40ba-be8a-c32b0a10f67d/solar_cleaning_6_1772563455315.png",
    dest: "gallery/solar_6.jpg"
  }
];

const basePath = path.join(process.cwd(), "public");
const homePath = path.join(process.env.HOME || '/Users/james');

function findUniqueAssets(pattern, requiredCount, usedList, dirPath) {
  const files = fs.readdirSync(dirPath);
  const matched = files.filter(f => f.includes(pattern) && (f.endsWith('.jpg') || f.endsWith('.webp') || f.endsWith('.png')));
  const selected = [];
  
  for (const file of matched) {
    if (!usedList.includes(file) && !file.includes('house-washing-generic')) {
      selected.push(path.join(dirPath, file));
      if (selected.length === requiredCount) break;
    }
  }
  return selected;
}

function processAppletonAssets() {
  console.log("[START] Expanding Localized Assets for Appleton Geo-Routes...");
  let successCount = 0;

  // 1. Process explicit mappings (Solar)
  SRC_SOLAR_MAPPINGS.forEach(mapping => {
    // Determine if src is absolute or relative to home
    let srcPath = mapping.src.startsWith('..') ? path.join(homePath, mapping.src.replace('../', '')) : path.join(basePath, mapping.src);
    
    // For the generated AI files, try to match the prefix if exact filename is tricky
    const brainDir = path.dirname(srcPath);
    const basename = path.basename(srcPath);
    const splitName = basename.split('_17')[0]; // Extract 'solar_cleaning_4'

    let actualSrc = srcPath;
    if (fs.existsSync(brainDir)) {
      const brainFiles = fs.readdirSync(brainDir);
      const matchedAI = brainFiles.find(f => f.startsWith(splitName) && f.endsWith('.png'));
      if (matchedAI) {
        actualSrc = path.join(brainDir, matchedAI);
      }
    }

    const destPath = path.join(basePath, mapping.dest);
    try {
      if (fs.existsSync(actualSrc)) {
        fs.copyFileSync(actualSrc, destPath);
        console.log(`[COPIED SOLAR] -> ${destPath}`);
        successCount++;
      } else {
        console.error(`[ERROR] Missing AI Source: ${actualSrc}`);
      }
    } catch (err) {
      console.error(`[FS ERROR] Could not copy ${actualSrc}: ${err.message}`);
    }
  });

  // 2. Dynamically extract the rest
  const galleryDir = path.join(basePath, "gallery");
  const drivewayDir = path.join(galleryDir, "driveway-cleaning");
  
  // Previously used list (from Green Bay mapping)
  const used = [
    "geo-bellevue-oxidation-removal-151.webp", "geo-appleton-oxidation-removal-11.webp", "geo-hobart-oxidation-removal-319.webp",
    "driveway-cleaning-appleton.webp", "driveway-cleaning-green bay.webp", "driveway-cleaning-howard.webp",
    "geo-green-bay-professional-awning-cleaning-23.webp", "geo-howard-professional-awning-cleaning-107.webp", "geo-ashwaubenon-professional-awning-cleaning-303.webp",
    "geo-allouez-house-washing-282.webp", "geo-suamico-house-washing-114.webp", "geo-shawano-house-washing-422.webp"
  ];

  const targetMappingLogic = [
    { pattern: "oxidation-removal", prefix: "rust_removal_", dir: galleryDir },
    { pattern: "driveway-cleaning", prefix: "driveway_", dir: drivewayDir },
    { pattern: "awning-cleaning", prefix: "awning_", dir: galleryDir },
    { pattern: "house-washing", prefix: "soft_wash_", dir: galleryDir }
  ];

  targetMappingLogic.forEach(rule => {
     let assets = [];
     if(fs.existsSync(rule.dir)) {
        assets = findUniqueAssets(rule.pattern, 3, used, rule.dir);
     }
     
     if(assets.length < 3) {
         console.warn(`[WARNING] Failed to find 3 unused assets for ${rule.pattern}. Re-using fallbacks.`);
         // Fallback by just grabbing whatever matches if we didn't find unused ones
         if(fs.existsSync(rule.dir)) {
             assets = fs.readdirSync(rule.dir)
                       .filter(f => f.includes(rule.pattern))
                       .slice(0, 3)
                       .map(f => path.join(rule.dir, f));
         }
     }

     assets.forEach((srcPath, index) => {
        const fileId = index + 4; // 4, 5, 6
        const destPath = path.join(galleryDir, `${rule.prefix}${fileId}.jpg`);
        try {
          fs.copyFileSync(srcPath, destPath);
          console.log(`[EXTRACTED] ${path.basename(srcPath)} -> ${destPath}`);
          successCount++;
        } catch(e) {
          console.error(`Copy error for ${srcPath} -> ${e.message}`);
        }
     });
  });

  console.log(`\n[COMPLETE] Successfully engineered ${successCount}/15 localized visual mappings for the Appleton expansion.`);
}

processAppletonAssets();
