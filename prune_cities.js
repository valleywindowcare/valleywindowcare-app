const fs = require('fs');

const allCitiesToRemove = [
  'ledgeview', 'menasha', 'kaukauna', 'suamico', 'allouez', 
  'ashwaubenon', 'bellevue', 'shawano', 'manitowoc', 'hobart', 
  'greenville', 'sherwood', 'combined-locks', 'egg-harbor', 
  'sturgeon-bay', 'fish-creek', 'sister-bay', 'ephraim'
];

function removeObjectBlock(text, keyPattern) {
    let result = text;
    for (const city of allCitiesToRemove) {
        let regex = new RegExp(keyPattern(city));
        let match;
        while ((match = regex.exec(result)) !== null) {
            let startIndex = match.index;
            let braceStart = result.indexOf('{', startIndex);
            if (braceStart === -1) break;
            
            let brackets = 1;
            let i = braceStart + 1;
            while (i < result.length && brackets > 0) {
                if (result[i] === '{') brackets++;
                if (result[i] === '}') brackets--;
                i++;
            }
            
            // Eat trailing whitespace and comma
            let endIdx = i;
            while(endIdx < result.length && (result[endIdx] === ' ' || result[endIdx] === '\n' || result[endIdx] === '\r')) {
                endIdx++;
            }
            if (result[endIdx] === ',') endIdx++;
            
            result = result.substring(0, startIndex) + result.substring(endIdx);
            break;
        }
    }
    return result;
}

// 1. Process cityData.ts
let cityDataText = fs.readFileSync('src/data/cityData.ts', 'utf8');
cityDataText = removeObjectBlock(cityDataText, (city) => `\\s*"${city}"\\s*:\\s*\\{`);
fs.writeFileSync('src/data/cityData.ts', cityDataText);
console.log('Processed cityData.ts');

// 2. Process cityContent.ts
let cityContentText = fs.readFileSync('src/data/cityContent.ts', 'utf8');
cityContentText = removeObjectBlock(cityContentText, (city) => `\\{\\s*id:\\s*"${city}"`);
fs.writeFileSync('src/data/cityContent.ts', cityContentText);
console.log('Processed cityContent.ts');
