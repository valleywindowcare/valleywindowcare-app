const fs = require('fs');

let content = fs.readFileSync('next.config.ts', 'utf8');
const legacyMatch = content.match(/const legacyToNestedMap[^=]*=\s*\{([^}]+)\};/);
if (legacyMatch) {
    let lines = legacyMatch[1].split('\n');
    let conflicts = [];
    lines.forEach(line => {
        if(line.includes('": "')) {
            let parts = line.split('": "');
            let source = parts[0].replace(/['"]/g, '').trim();
            let dest = parts[1].replace(/['",]/g, '').trim();
            // check localhost
            if(dest.includes('localhost')) {
                console.log(`FOUND LOCALHOST: ${source} -> ${dest}`);
            }
            if(source === dest) {
                console.log(`INFINITE LOOP: ${source} -> ${dest}`);
            }
            if(`${source}/` === dest || source === `${dest}/`) {
                console.log(`TRAILING SLASH LOOP CONFLICT: ${source} -> ${dest}`);
            }
        }
    });

    console.log("legacy map check complete.");
} else {
    console.log("Could not parse legacy map.");
}

// Check CSV
let csv = fs.readFileSync('redirect_map_v3.csv', 'utf8');
let csvLines = csv.split('\n');
let localhostCount = 0;
let newCsvLines = [];
csvLines.forEach((line, index) => {
    if (index === 0) { newCsvLines.push(line); return; }
    if(line.includes('localhost')) {
        localhostCount++;
        // Replace http://localhost:3000 or http://localhost:3006
        line = line.replace(/http:\/\/localhost:\d+/g, '');
    }
    newCsvLines.push(line);
});

console.log(`Found ${localhostCount} localhost domains in CSV.`);
fs.writeFileSync('redirect_map_v3_clean.csv', newCsvLines.join('\n'));
