const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'serviceContent.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const overrides = {
  // Apartment/HOA -> /images/portfolio/commercial-cleaning.webp
  "apartment-exterior-cleaning": "/images/portfolio/commercial-cleaning.webp",
  "hoa-services": "/images/portfolio/commercial-cleaning.webp",
  "hoa-multi-unit-cleaning": "/images/portfolio/commercial-cleaning.webp",
  
  // Building Wash -> /images/portfolio/building-wash-copy.webp
  "building-washing": "/images/portfolio/building-wash-copy.webp",
  
  // Commercial Roof -> /images/portfolio/roof-cleaning-copy-2.webp
  "commercial-roof-cleaning": "/images/portfolio/roof-cleaning-copy-2.webp",
  
  // Awning Cleaning -> /images/portfolio/awning-cleaning.webp
  "commercial-awning-cleaning": "/images/portfolio/awning-cleaning.webp"
};

let replaced = 0;

let result = content.replace(/"([^"]+)"\s*:\s*\{([\s\S]*?)image\s*:\s*"([^"]+)"/g, (match, key, body, oldImage) => {
    let newImage = '/images/portfolio/valley-window-care-truck.webp';
    if (overrides[key]) {
        newImage = overrides[key];
    }
    replaced++;
    return `"${key}": {${body}image: "${newImage}"`;
});

fs.writeFileSync(filePath, result, 'utf8');
console.log(`Reverted ${replaced} image entries in serviceContent.tsx back to the truck.`);
