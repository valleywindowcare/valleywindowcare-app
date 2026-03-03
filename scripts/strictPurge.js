const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SCRATCH_DIR = '/Users/james/.gemini/antigravity/scratch/organized-media';
const TARGET_CATEGORIES = [
    ":apartment-cleaning", ":christmas-lighting", ":commercial-pressure-wash",
    ":commercial-window-clean", ":concrete-cleaning", ":driveway-cleaning",
    ":gutter-cleaning", ":gutter-guard", ":house-wash", ":pressure-washing",
    ":roof-cleaning", ":window-cleaning"
];

async function run() {
    console.log("== Initiating Strict File-System Purge (<150KB or <1200px) ==");

    const deficitMap = {};

    for (let cat of TARGET_CATEGORIES) {
        const catDir = path.join(SCRATCH_DIR, cat);
        if (!fs.existsSync(catDir)) {
            fs.mkdirSync(catDir, { recursive: true });
        }

        let validCount = 0;
        const items = fs.readdirSync(catDir);
        for (let file of items) {
            const fpath = path.join(catDir, file);
            if (fs.statSync(fpath).isFile()) {
                const ext = path.extname(file).toLowerCase();
                if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
                    continue;
                }

                const sizeKB = fs.statSync(fpath).size / 1024;
                let isDeleted = false;

                if (sizeKB < 150) {
                    console.log(`[DELETED] ${file} in ${cat} (Under 150KB: ${Math.round(sizeKB)}KB)`);
                    fs.unlinkSync(fpath);
                    isDeleted = true;
                } else {
                    try {
                        const metadata = await sharp(fpath).metadata();
                        if (metadata.width < 1200) {
                            console.log(`[DELETED] ${file} in ${cat} (Under 1200px width: ${metadata.width}px)`);
                            fs.unlinkSync(fpath);
                            isDeleted = true;
                        }
                    } catch (err) {
                        console.log(`[DELETED] ${file} in ${cat} (Corrupt or unreadable image)`);
                        fs.unlinkSync(fpath);
                        isDeleted = true;
                    }
                }

                if (!isDeleted) {
                    validCount++;
                }
            }
        }

        console.log(`[Validated] ${cat}: ${validCount} absolute high-res assets survived the purge.`);
        if (validCount < 11) {
            deficitMap[cat] = 11 - validCount;
        }
    }

    if (Object.keys(deficitMap).length > 0) {
        console.log("\\n[CRITICAL DEFICIT] The following categories lack the 11 unique assets required for the 2-use max rule:");
        for (const [cat, deficit] of Object.entries(deficitMap)) {
            console.log(` -> ${cat} requires ${deficit} new AI generated assets.`);
        }
        process.exit(200);
    } else {
        console.log("\\n[OK] All categories possess 11+ unique, >150KB, >1200px assets. Ready for sync.");
        process.exit(0);
    }
}

run().catch(console.error);
