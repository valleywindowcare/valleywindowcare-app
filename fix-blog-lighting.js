const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'blogData.ts');
let rawData = fs.readFileSync(filePath, 'utf8');

// The verified images commanded
const verifiedBodyShot = '"/images/portfolio/permanent-lighting.webp"';

// Regex replacement function to specifically target the "Permanent Lighting" blog objects
// and forcefully overwrite whatever image path they currently hold.

rawData = rawData.replace(/(slug:\s*"permanent-led-smart-lighting-solutions-in-green-bay-wi",[\s\S]*?image:\s*)"([^"]+)"/, `$1${verifiedBodyShot}`);
rawData = rawData.replace(/(slug:\s*"safely-decorate-roof-christmas-permanent-lighting-appleton",[\s\S]*?image:\s*)"([^"]+)"/, `$1${verifiedBodyShot}`);
rawData = rawData.replace(/(slug:\s*"smart-permanent-led-holiday-roof-lighting-door-county",[\s\S]*?image:\s*)"([^"]+)"/, `$1${verifiedBodyShot}`);


fs.writeFileSync(filePath, rawData, 'utf8');
console.log(`Successfully hardcoded lighting assets into the specific Permanent Lighting blog objects.`);
