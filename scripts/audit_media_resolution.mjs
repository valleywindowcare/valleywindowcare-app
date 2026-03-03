import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import https from 'https';

const MEDIA_POOL_P1_WP = {
    "Window Cleaning": [
        "https://valleywindowcare.com/wp-content/uploads/2022/02/window-cleaning-8-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/window-cleaning-6-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/window-cleaning-5-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/window-cleaning-2-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/Window_cleaning_company-scaled.jpeg"
    ],
    "Roof Cleaning": [
        "https://valleywindowcare.com/wp-content/uploads/2022/02/roof-cleaning-1-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/roof-cleaning-5-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/Roof-soft-washing-company-wi-scaled.jpeg"
    ],
    "Permanent LED Lighting": [
        "https://valleywindowcare.com/wp-content/uploads/2022/10/Christmas-light-installers-green-bay-1.jpg",
        "https://valleywindowcare.com/wp-content/uploads/2022/10/Christmas-light-company-green-bay.jpg",
        "https://valleywindowcare.com/wp-content/uploads/2022/10/Permanent-holiday-lights-scaled.jpg"
    ],
    "House Washing": [
        "https://valleywindowcare.com/wp-content/uploads/2022/02/house-washing-green-bay-1-1-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/house-washing-green-bay-8-1-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/house-washing-1-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/Soft_Washing_company-scaled.jpeg"
    ],
    "Concrete Cleaning": [
        "https://valleywindowcare.com/wp-content/uploads/2022/02/concrete-cleaning-2-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/concrete-power-washing-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/concrete-cleaning-4-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/Concrete-cleaning-company-1-scaled.jpeg"
    ],
    "Gutter Cleaning": [
        "https://valleywindowcare.com/wp-content/uploads/2022/02/gutter-cleaning-3-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/gutter-cleaning-5-scaled.jpeg"
    ],
    "City Hub": [
        "https://valleywindowcare.com/wp-content/uploads/2022/02/house-washing-green-bay-1-1-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/Soft_Washing_company-scaled.jpeg"
    ]
};

const MEDIA_POOL_P2_AUTHENTIC = {
    "House Washing": [
        "/gallery/authentic/power-washing-green-bay-2048x1148.jpg",
        "/gallery/authentic/House-washing-company-in-green-bay-2048x1154.jpg",
        "/gallery/authentic/Soft-washing-company-in-green-bay-wi-1-scaled.jpg.webp",
        "/gallery/authentic/Soft-washing-company-in-green-bay-wi-1.jpg"
    ],
    "City Hub": [
        "/gallery/authentic/power-washing-green-bay-2048x1148.jpg",
        "/gallery/authentic/House-washing-company-in-green-bay-2048x1154.jpg",
        "/gallery/authentic/Soft-washing-company-in-green-bay-wi-1-scaled.jpg.webp",
        "/gallery/authentic/Soft-washing-company-in-green-bay-wi-1.jpg",
        "/gallery/authentic/IMG_5520-600x653.jpg.webp",
        "/gallery/authentic/IMG_5423-600x653.jpg",
        "/gallery/authentic/IMG_5575-150x150.jpg"
    ]
};

const cwd = process.cwd();

async function downloadBuffer(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                return reject(new Error('Failed to fetch ' + url));
            }
            const data = [];
            res.on('data', chunk => data.push(chunk));
            res.on('end', () => resolve(Buffer.concat(data)));
        }).on('error', reject);
    });
}

async function auditPool() {
    let validP1 = 0;
    let validP2 = 0;
    let invalid = 0;

    for (const [category, urls] of Object.entries(MEDIA_POOL_P1_WP)) {
        for (const url of urls) {
            try {
                const buffer = await downloadBuffer(url);
                const metadata = await sharp(buffer).metadata();
                if (metadata.width >= 1200 && metadata.height >= 675) {
                    validP1++;
                } else {
                    console.log(`[P1 Failed Resolution] ${url}: ${metadata.width}x${metadata.height}`);
                    invalid++;
                }
            } catch (err) {
                console.log(`[P1 Error] ${url}: ${err.message}`);
                invalid++;
            }
        }
    }

    for (const [category, paths] of Object.entries(MEDIA_POOL_P2_AUTHENTIC)) {
        for (const p of paths) {
            try {
                const fullPath = path.join(cwd, 'public', p);
                if (fs.existsSync(fullPath)) {
                    const metadata = await sharp(fullPath).metadata();
                    if (metadata.width >= 1200 && metadata.height >= 675) {
                        validP2++;
                    } else {
                        console.log(`[P2 Failed Resolution] ${p}: ${metadata.width}x${metadata.height}`);
                        invalid++;
                    }
                }
            } catch (err) {
                console.log(`[P2 Error] ${p}: ${err.message}`);
                invalid++;
            }
        }
    }

    console.log(`\n=== Audit Complete ===`);
    console.log(`Valid P1 (WP): ${validP1}`);
    console.log(`Valid P2 (Authentic): ${validP2}`);
    console.log(`Failed/Invalid: ${invalid}`);
}

auditPool().catch(console.error);
