const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'serviceAreasContent.json');
let rawData = fs.readFileSync(filePath, 'utf8');
let data = JSON.parse(rawData);

const rotationImages = [
  "/images/portfolio/commercial-cleaning.webp",
  "/images/portfolio/building-wash-copy.webp",
  "/images/portfolio/roof-cleaning-copy-2.webp",
  "/images/portfolio/awning-cleaning.webp",
  "/images/portfolio/house-washing.webp",
  "/images/portfolio/window-cleaning-8.jpg"
];

let imageIndex = 0;
let updatedHubs = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i].type === 'hub') {
    data[i].headerImage = rotationImages[imageIndex % rotationImages.length];
    imageIndex++;
    updatedHubs++;
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully hardcoded a rotating cast of ${rotationImages.length} images across ${updatedHubs} geographic hubs.`);
