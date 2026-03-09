const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'services', '[service]', 'page.tsx');
let rawData = fs.readFileSync(filePath, 'utf8');

// The new verified image the user commanded
const verifiedNightShot = '"/images/portfolio/permanent-lighting-night-suamico.webp"';

// Find the precise mappings in the categoryFallbacks object and forcefully replace the old asset
rawData = rawData.replace(/"christmas-lighting": "(.*?)"/, `"christmas-lighting": ${verifiedNightShot}`);
rawData = rawData.replace(/"permanent-led-lighting": "(.*?)"/, `"permanent-led-lighting": ${verifiedNightShot}`);
rawData = rawData.replace(/"residential-permanent-led-lighting": "(.*?)"/, `"residential-permanent-led-lighting": ${verifiedNightShot}`);

fs.writeFileSync(filePath, rawData, 'utf8');
console.log(`Successfully hardcoded the verified lighting hero asset into [service]/page.tsx fallback mappings.`);
