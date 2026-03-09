const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'serviceAreasContent.json');
let data;
try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
} catch (e) {
    console.error("Could not parse serviceAreasContent.json");
    process.exit(1);
}

let changes = 0;

data.forEach(item => {
  let newImage = '/images/portfolio/valley-window-care-truck.webp';

  if (item.service) {
    // Some services have "in City, WI" attached in their title, so we use the base service name
    let rootService = item.service.replace(/ in .*/i, '').trim();
    rootService = rootService.toLowerCase();
    
    if (rootService.includes('hoa') || rootService.includes('apartment')) {
        newImage = '/images/portfolio/commercial-cleaning.webp';
    } else if (rootService.includes('building wash')) {
        newImage = '/images/portfolio/building-wash-copy.webp';
    } else if (rootService === 'commercial roof cleaning') {
        newImage = '/images/portfolio/roof-cleaning-copy-2.webp';
    } else if (rootService.includes('awning')) {
        newImage = '/images/portfolio/awning-cleaning.webp';
    }
  }

  if (item.headerImage !== newImage) {
      item.headerImage = newImage;
      changes++;
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
console.log(`Reverted ${changes} entries in serviceAreasContent.json.`);
