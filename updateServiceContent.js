const fs = require('fs');

const file = 'src/data/serviceContent.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `export const serviceContentMap: Record<string, { description: string, benefits: string[], process: string[] }> = {`,
  `export const serviceContentMap: Record<string, { description: string, benefits: string[], process: string[], image?: string }> = {`
);

const imageMapping = {
    "roof-cleaning": "/gallery/Roof-Cleaning-in-green-bay.png",
    "house-washing": "/gallery/House-washing-company-in-suamico-wi-1-scaled.jpg",
    "gutter-cleaning": "/gallery/IMG_1013.jpg",
    "concrete-cleaning": "/gallery/IMG_5602.jpg",
    "window-cleaning": "/gallery/Window_cleaning_company-scaled.jpeg",
    "pressure-washing": "/gallery/Green-bay-pressure-washing-scaled.jpg",
    "building-washing": "/gallery/Commercial-power-washing-company-scaled.jpg",
    "led-lighting": "/gallery/Permanent-Holiday-Lighting.webp",
    "commercial-roof-cleaning": "/gallery/Roof_Cleaning_Company_in_Appleton-scaled.jpg",
    "commercial-pressure-washing": "/gallery/Drive-Through-Cleaning-1024x673-1.webp",
    "paver-patio-restorations": "/gallery/Gyo75oBXIAAeZMT.jpg",
    "premium-drive-thru-cleaning": "/gallery/Drive-Through-Cleaning-1024x673-1.webp",
    "parking-lot-and-garage-cleaning": "/gallery/Commercial-power-washing-company-scaled.jpg",
    "storefront-cleaning": "/gallery/Commercial-power-washing-company-scaled.jpg",
    "post-construction-cleanup": "/gallery/Commercial-power-washing-company-scaled.jpg",
    "fence-cleaning": "/gallery/IMG_5510.jpg",
    "deck-cleaning": "/gallery/IMG_5511.jpg",
    "solar-panel-cleaning": "/gallery/Window_cleaning_company-scaled.jpeg"
};

for (const [key, value] of Object.entries(imageMapping)) {
    const regex = new RegExp(`("${key}"|\`${key}\`|${key}):\\s*\\{([\\s\\S]*?process:[\\s\\S]*?\\])(\\s*\\})`);
    content = content.replace(regex, `$1: {$2,\n        image: "${value}"$3`);
}

fs.writeFileSync(file, content);
console.log("Updated serviceContent.ts");
