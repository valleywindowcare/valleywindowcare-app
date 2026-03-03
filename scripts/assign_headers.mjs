import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const cwd = process.cwd();

const JSON_PATH = path.join(cwd, 'src/data/serviceAreasContent.json');

const content = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));

// The 3 Media Pools mathematically mapped by category

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
        // Using team/crew photo or general house washing for Hub
        "https://valleywindowcare.com/wp-content/uploads/2022/02/house-washing-green-bay-1-1-scaled.jpeg",
        "https://valleywindowcare.com/wp-content/uploads/2022/02/Soft_Washing_company-scaled.jpeg"
    ]
};

const MEDIA_POOL_P2_AUTHENTIC = {
    "Window Cleaning": [],
    "Roof Cleaning": [],
    "Permanent LED Lighting": [],
    "House Washing": [
        "/gallery/authentic/power-washing-green-bay-2048x1148.jpg",
        "/gallery/authentic/House-washing-company-in-green-bay-2048x1154.jpg",
        "/gallery/authentic/Soft-washing-company-in-green-bay-wi-1-scaled.jpg.webp",
        "/gallery/authentic/Soft-washing-company-in-green-bay-wi-1.jpg"
    ],
    "Concrete Cleaning": [],
    "Gutter Cleaning": [],
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

// Autoload all AI Generated images from directory
const aiGenDir = path.join(cwd, 'public/gallery/ai-generated');
const aiFiles = fs.existsSync(aiGenDir) ? fs.readdirSync(aiGenDir).filter(f => f.endsWith('.png')) : [];

const MEDIA_POOL_P3_AI = {
    "Window Cleaning": aiFiles.filter(f => f.includes('window-cleaning')).map(f => `/gallery/ai-generated/${f}`),
    "Roof Cleaning": aiFiles.filter(f => f.includes('roof-cleaning')).map(f => `/gallery/ai-generated/${f}`),
    "Permanent LED Lighting": aiFiles.filter(f => f.includes('permanent-led')).map(f => `/gallery/ai-generated/${f}`),
    "House Washing": aiFiles.filter(f => f.includes('house-washing')).map(f => `/gallery/ai-generated/${f}`),
    "Concrete Cleaning": aiFiles.filter(f => f.includes('concrete-cleaning')).map(f => `/gallery/ai-generated/${f}`),
    "Gutter Cleaning": aiFiles.filter(f => f.includes('gutter-cleaning')).map(f => `/gallery/ai-generated/${f}`),
    "City Hub": []
};

// The Tracker that prevents using any single image more than 3 times
const GLOBAL_TRACKER = {};

function getImageForCategory(category) {
    // Try P1 (WP Content)
    if (MEDIA_POOL_P1_WP[category]) {
        for (const img of MEDIA_POOL_P1_WP[category]) {
            if ((GLOBAL_TRACKER[img] || 0) < 3) {
                GLOBAL_TRACKER[img] = (GLOBAL_TRACKER[img] || 0) + 1;
                return img;
            }
        }
    }

    // Try P2 (Authentic Scratch)
    if (MEDIA_POOL_P2_AUTHENTIC[category]) {
        for (const img of MEDIA_POOL_P2_AUTHENTIC[category]) {
            if ((GLOBAL_TRACKER[img] || 0) < 3) {
                GLOBAL_TRACKER[img] = (GLOBAL_TRACKER[img] || 0) + 1;
                return img;
            }
        }
    }

    // Try P3 (Generated AI)
    if (MEDIA_POOL_P3_AI[category]) {
        for (const img of MEDIA_POOL_P3_AI[category]) {
            if ((GLOBAL_TRACKER[img] || 0) < 3) {
                GLOBAL_TRACKER[img] = (GLOBAL_TRACKER[img] || 0) + 1;
                return img;
            }
        }
    }

    // P4 (Fallback / Placebolder)
    return "/coming-soon-placeholder.png";
}

let placeholderCount = 0;
let authenticCount = 0;

for (let i = 0; i < content.length; i++) {
    const page = content[i];
    const category = page.category || "City Hub";
    const assignedImage = getImageForCategory(category);

    // Update the JSON mapping entirely
    page.headerImage = assignedImage;

    if (assignedImage.includes('coming-soon')) placeholderCount++;
    else authenticCount++;
}

fs.writeFileSync(JSON_PATH, JSON.stringify(content, null, 2), 'utf8');

console.log(`\n=== STRICT RULE OF 3 REWRITE COMPLETE ===`);
console.log(`Successfully mapped ${authenticCount} dynamic authentic/AI assets across 756 routes.`);
console.log(`Safely deployed ${placeholderCount} blurred 'Coming Soon' placeholders to protect layout stability limit.`);
console.log(`No individual image was used more than 3 times.`);
