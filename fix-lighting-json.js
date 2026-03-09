const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'serviceAreasContent.json');
let rawData = fs.readFileSync(filePath, 'utf8');
let data = JSON.parse(rawData);

let updatedCount = 0;

const lightingServices = [
  "Christmas Lighting",
  "Permanent LED Lighting",
  "Permanent Holiday Lighting",
  "Residential Permanent LED Lighting"
];

for (let i = 0; i < data.length; i++) {
  const item = data[i];
  
  // Only target the specific lighting configurations
  if (lightingServices.includes(item.service)) {
    // Check if the current headerImage is a pressure washing image
    if (item.headerImage && (
        item.headerImage.includes("pressure-washing") || 
        item.headerImage.includes("valley-window-care-truck") ||
        item.headerImage.includes("surface-cleaner") ||
        item.headerImage.includes("water-spray")
    )) {
      item.headerImage = "/images/portfolio/permanent-lighting-night-suamico.webp";
      updatedCount++;
    }
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully remediated ${updatedCount} mismatched lighting assets in serviceAreasContent.json.`);
