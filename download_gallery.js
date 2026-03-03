const fs = require('fs');
const path = require('path');
const https = require('https');

const imageUrls = [
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/09/residential3.webp", category: "House Washing", alt: "Residential Soft Washing in Green Bay - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2026/01/Roof-Cleaning-in-green-bay.png", category: "Roof Cleaning", alt: "Professional Roof Cleaning in Green Bay - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/09/Permanent-Holiday-Lighting.webp", category: "Holiday Lighting", alt: "Permanent Holiday Lighting Installation - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/09/Patio-Deck-Lighting.webp", category: "Holiday Lighting", alt: "Patio & Deck LED Lighting - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2025/08/250310-10654-S-BISON-TRAIL-COVE-S-JORDAN-UT-126-NO-REUSE-5f61761d52bd4840b44087652564e931-scaled.jpg", category: "Commercial", alt: "Multi-Unit Complex Exterior Cleaning - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2025/08/Gyo75oBXIAAeZMT.jpg", category: "Commercial", alt: "Commercial Building Exterior Washing - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/09/holiday2.webp", category: "Holiday Lighting", alt: "Holiday Lights on Roofline - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/09/holiday.webp", category: "Holiday Lighting", alt: "Outdoor Tree Holiday Lighting - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/07/Commercial-power-washing-company-scaled.jpg", category: "Commercial", alt: "Commercial Power Washing Services - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/03/Roof_Cleaning_Company_in_Appleton-scaled.jpg", category: "Roof Cleaning", alt: "Roof Cleaning Company in Appleton - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2025/08/Drive-Through-Cleaning-1024x673-1.webp", category: "Commercial", alt: "Drive-Through Concrete Cleaning - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2025/08/Image-8-17-25-at-9.32-PM-scaled.jpg", category: "Window Cleaning", alt: "High-Rise Commercial Window Cleaning - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/03/Roof_cleaning_company_Green_bay-scaled.jpg", category: "Roof Cleaning", alt: "Roof Cleaning Services in Green Bay Area - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2022/05/IMG_5510.jpg", category: "Window Cleaning", alt: "Residential Window Cleaning In-Progress - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2022/05/IMG_5459.jpg", category: "Gutter Cleaning", alt: "Professional Gutter Cleaning Service - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/03/Green-bay-pressure-washing-scaled.jpg", category: "House Washing", alt: "Pressure Washing Results in Green Bay - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2022/05/IMG_5576.jpg", category: "House Washing", alt: "Exterior House Wash Before and After - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2022/05/IMG_7561.jpg", category: "Concrete Cleaning", alt: "Patio Steam Cleaning and Restoration - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2021/10/window-cleaning-8.jpg", category: "Window Cleaning", alt: "Detailed Interior/Exterior Window Cleaning - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2021/10/window-cleaning-6.jpg", category: "Window Cleaning", alt: "Streak-Free Window Reflection Shot - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2022/05/IMG_1013.jpg", category: "Roof Cleaning", alt: "Roof Moss Removal and Treatment - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2021/10/window-cleaning-5.jpg", category: "Window Cleaning", alt: "Commercial Storefront Window Washing - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2022/05/IMG_5602.jpg", category: "House Washing", alt: "Vinyl Siding Soft Wash - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/03/Soft-washing-company-in-green-bay-wi-1-scaled.jpg", category: "House Washing", alt: "Soft Washing Solution Application - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2021/10/window-cleaning-2.jpg", category: "Window Cleaning", alt: "Post-Cleaning Window Sparkle - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/07/Window_cleaning_company-scaled.jpeg", category: "Window Cleaning", alt: "Window Cleaning Team at Work - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2022/05/IMG_0742-scaled.jpg", category: "Concrete Cleaning", alt: "Brick & Concrete Surface Cleaning - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2022/05/IMG_5511.jpg", category: "House Washing", alt: "Before and After Siding Cleaning Comparison - Valley Window Care and Exterior Cleaning" },
    { url: "https://valleywindowcare.com/wp-content/uploads/2024/03/House-washing-company-in-suamico-wi-1-scaled.jpg", category: "House Washing", alt: "Full House Wash in Suamico, WI - Valley Window Care and Exterior Cleaning" }
];

const galleryDir = path.join(__dirname, 'public', 'gallery');

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
                return;
            }
            const fileStream = fs.createWriteStream(filepath);
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => reject(err));
        });
    });
};

async function main() {
    const imageData = [];
    let count = 0;
    
    for (const item of imageUrls) {
        const filename = path.basename(item.url.split('?')[0]);
        const filepath = path.join(galleryDir, filename);
        
        try {
            await downloadImage(item.url, filepath);
            imageData.push({
                src: `/gallery/${filename}`,
                category: item.category,
                alt: item.alt
            });
            count++;
            console.log(`Downloaded [${count}/${imageUrls.length}]: ${filename}`);
        } catch (err) {
            console.error(err.message);
        }
    }
    
    // Save metadata
    fs.writeFileSync(
        path.join(__dirname, 'src', 'data', 'galleryImages.ts'), 
        `export const galleryImages = ${JSON.stringify(imageData, null, 4)};`,
        'utf8'
    );
    console.log("Gallery images downloaded and metadata saved to src/data/galleryImages.ts");
}

main();
