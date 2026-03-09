import fs from 'fs';
import path from 'path';

const targetJsonPath = path.join(process.cwd(), 'src', 'data', 'serviceAreasContent.json');

const categoryFallbacks = {
    "Roof Cleaning": "/images/portfolio/roof-cleaning.webp",
    "House Washing": "/images/portfolio/house-wash-before-after.webp",
    "Gutter Cleaning": "/images/portfolio/gutter-cleaning.webp",
    "Concrete Cleaning": "/images/portfolio/concrete-cleaning.webp",
    "Window Cleaning": "/images/portfolio/window-cleaning-before-after.JPG.webp",
    "Christmas Lighting": "/images/portfolio/permanent-lights.webp",
    "Permanent LED Lighting": "/images/portfolio/permanent-lights.webp",
    "Pressure Washing": "/images/portfolio/pressure-washing.webp",
    "Commercial Roof Cleaning": "/images/portfolio/roof-cleaning.webp",
    "Building Washing": "/images/portfolio/building-washing.webp",
    "Hood Vent Cleaning": "/images/portfolio/building-washing.webp",
    "Commercial Hood Vent Cleaning": "/images/portfolio/building-washing.webp",
    "City Hub": "/images/portfolio/valley-window-care-truck.webp",
    "Deck/Patio Restoration": "/images/portfolio/house-wash-before-after.webp",
    "Default": "/images/portfolio/valley-window-care-truck.webp"
};

if (fs.existsSync(targetJsonPath)) {
    try {
        const rawData = fs.readFileSync(targetJsonPath, 'utf8');
        const jsonArray = JSON.parse(rawData);
        let modifiedCount = 0;

        for (let i = 0; i < jsonArray.length; i++) {
            const obj = jsonArray[i];
            
            // Re-map every single header image directly mapped to the safe category dictionary 
            // bypassing ALL legacy scraped imagery globally.
            let safeImage = categoryFallbacks[obj.category] || categoryFallbacks[obj.service] || categoryFallbacks["Default"];
            
            // Strict override for specific services that might be sub-categorized weirdly
            if (obj.service === "Window Cleaning") safeImage = categoryFallbacks["Window Cleaning"];
            if (obj.service === "Permanent LED Lighting") safeImage = categoryFallbacks["Permanent LED Lighting"];
            
            if (obj.headerImage !== safeImage) {
                obj.headerImage = safeImage;
                modifiedCount++;
            }
        }

        if (modifiedCount > 0) {
            fs.writeFileSync(targetJsonPath, JSON.stringify(jsonArray, null, 4), 'utf8');
            console.log(`✅ Absolute JSON Map Injection complete. Modified ${modifiedCount} legacy routes.`);
        } else {
            console.log('No modifications needed.');
        }

    } catch (e) {
        console.error("Failed to parse JSON", e);
    }
} else {
    console.log('File not found.');
}
