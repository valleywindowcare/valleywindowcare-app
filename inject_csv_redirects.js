const fs = require('fs');
const path = require('path');

const csvPath = path.join(process.cwd(), 'redirect_map_v3.csv');
const configPath = path.join(process.cwd(), 'next.config.ts');

if (!fs.existsSync(csvPath)) {
    console.error(`❌ Could not find ${csvPath}`);
    process.exit(1);
}

const csvData = fs.readFileSync(csvPath, 'utf8');
const configData = fs.readFileSync(configPath, 'utf8');

const lines = csvData.trim().split('\n');
lines.shift(); // skip header

const redirectMap = {};

lines.forEach(line => {
    const parts = line.split(',');
    if (parts.length >= 3) {
        let oldUrl = parts[0].trim();
        let newUrl = parts[1].trim();

        oldUrl = oldUrl.replace('https://valleywindowcare.com', '');
        newUrl = newUrl.replace('http://localhost:3000', '');
        newUrl = newUrl.replace('http://localhost:3006', '');

        if (!oldUrl.startsWith('/')) oldUrl = '/' + oldUrl;
        if (!newUrl.startsWith('/')) newUrl = '/' + newUrl;

        // CRITICAL FIX: Strip trailing slashes from both URLs so Next.js exact-matching logic works natively
        if (oldUrl.endsWith('/') && oldUrl.length > 1) oldUrl = oldUrl.slice(0, -1);
        if (newUrl.endsWith('/') && newUrl.length > 1) newUrl = newUrl.slice(0, -1);

        if (oldUrl !== newUrl) {
            redirectMap[oldUrl] = newUrl;
        }
    }
});

let newMapString = 'const legacyToNestedMap: Record<string, string> = {\n';
for (const [key, val] of Object.entries(redirectMap)) {
    newMapString += `  "${key}": "${val}",\n`;
}
newMapString += '};\n';

const startMarker = 'const legacyToNestedMap: Record<string, string> = {';
const startIndex = configData.indexOf(startMarker);
const endMarker = 'const nextConfig: NextConfig = {';
const endIndex = configData.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const updatedConfigData = configData.substring(0, startIndex) + Object.keys(redirectMap).length === 0 ? "" : newMapString + '\n' + configData.substring(endIndex);
    fs.writeFileSync(configPath, updatedConfigData, 'utf8');
    console.log(`✅ Stripped trailing slashes and re-injected ${Object.keys(redirectMap).length} clean redirects into next.config.ts`);
} else {
    console.error('❌ Could not find legacyToNestedMap or nextConfig markers in next.config.ts');
}
