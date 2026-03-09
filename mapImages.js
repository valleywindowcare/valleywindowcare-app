const fs = require('fs');
const path = require('path');

const map = {
  "roof-cleaning": "/images/portfolio/roof-cleaning.webp",
  "house-washing": "/images/portfolio/house-washing.webp",
  "gutter-cleaning": "/images/portfolio/gutter-cleaning.webp",
  "concrete-cleaning": "/images/portfolio/concrete-cleaning.webp",
  "window-cleaning": "/images/portfolio/window-cleaning.webp",
  "christmas-lighting": "/images/portfolio/forever-lights.webp",
  "pressure-washing": "/images/portfolio/pressure-washing.webp",
  "residential-permanent-led-lighting": "/images/portfolio/permanent-lights.webp",
  "fence-cleaning": "/images/portfolio/fence-cleaning.webp",
  "deck-cleaning": "/images/portfolio/deck-cleaning.webp",
  "oxidation-removal": "/images/portfolio/oxidation-removal.webp",
  "soft-wash": "/images/portfolio/house-wash-before-after.webp",
  "driveway-cleaning": "/images/portfolio/drive-way-cleaning.webp",
  "solar-panel-cleaning": "/images/portfolio/solar-panel-cleaning.webp",
  "rust-removal": "/images/portfolio/rust-removal.webp",
  "building-washing": "/images/portfolio/building-washing.webp",
  "dumpster-pad-cleaning": "/images/portfolio/restuarnt-cleaning.webp",
  "permanent-led-lighting": "/images/portfolio/permanent-led-lighting.webp",
  "commercial-roof-cleaning": "/images/portfolio/roof-cleaning-copy.webp",
  "commercial-pressure-washing": "/images/portfolio/commerical-pressure-wash.webp",
  "graffiti-removal": "/images/portfolio/graffiti-removal.jpg.webp",
  "hoa-multi-unit-cleaning": "/images/portfolio/commercial-cleaning.webp",
  "storefront-cleaning": "/images/portfolio/store-front-cleaning.webp",
  "premium-drive-thru-cleaning": "/images/portfolio/drive-through-cleaning.webp",
  "parking-lot-and-garage-cleaning": "/images/portfolio/garage-cleaning-before-after.webp",
  "chewing-gum-removal": "/images/portfolio/patio-cleaning.webp",
  "commercial-awning-cleaning": "/images/portfolio/awning-cleaning.webp",
  "gas-station-cleaning": "/images/portfolio/oil-stain-removal.webp",
  "post-construction-cleanup": "/images/portfolio/post-construction-cleaning.webp",
  "paver-patio-restorations": "/images/portfolio/paver-restoration.webp",
  "commercial-hood-cleaning": "/images/portfolio/hood-vent-cleaning.webp",
  "apartment-exterior-cleaning": "/images/portfolio/soft-washing.webp"
};

const filePath = path.join(__dirname, 'src', 'data', 'serviceContent.tsx');
let content = fs.readFileSync(filePath, 'utf8');

for (const [key, imagePath] of Object.entries(map)) {
  const regex = new RegExp('("' + key + '": \\{[\\s\\S]*?image:\\s*)".*?"', 'g');
  content = content.replace(regex, `$1"${imagePath}"`);
}

fs.writeFileSync(filePath, content);
console.log('Successfully updated serviceContent.tsx image paths!');
