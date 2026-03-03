const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/serviceAreasContent.json', 'utf8'));

const usageCounts = {};
let excessFound = false;

data.forEach(item => {
    if (item.headerImage) {
        usageCounts[item.headerImage] = (usageCounts[item.headerImage] || 0) + 1;
    }
});

for (const [img, count] of Object.entries(usageCounts)) {
    if (count > 3) {
        console.error(`❌ VIOLATION: Image ${img} used ${count} times.`);
        excessFound = true;
    }
}

if (!excessFound) {
    console.log("✅ RULE OF 3 AUDIT PASSED: No image is used more than 3 times across all 868 Service Area routes.");
} else {
    process.exit(1);
}
