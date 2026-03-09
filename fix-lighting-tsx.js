const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'serviceContent.tsx');
let rawData = fs.readFileSync(filePath, 'utf8');

// Target the specific blocks for lighting and replace their 
// valley-window-care-truck.webp URL with the contextually accurate night shot.
const nightShot = '"/images/portfolio/permanent-lighting-night-suamico.webp"';

// Find the precise blocks and do a safe string replacement on the image line.
rawData = rawData.replace(/"permanent-led-lighting": \{[\s\S]*?image: "(.*?)"/, match => {
    return match.replace(/"(.*?)"$/, nightShot);
});

rawData = rawData.replace(/"residential-permanent-led-lighting": \{[\s\S]*?image: "(.*?)"/, match => {
    return match.replace(/"(.*?)"$/, nightShot);
});

rawData = rawData.replace(/"commercial-permanent-led-lighting": \{[\s\S]*?image: "(.*?)"/, match => {
    return match.replace(/"(.*?)"$/, nightShot);
});

fs.writeFileSync(filePath, rawData, 'utf8');
console.log(`Successfully remediated mismatched lighting assets in serviceContent.tsx.`);
