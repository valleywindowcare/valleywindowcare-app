const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'serviceContent.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const processUpdate = `
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],`;

const keywordInjections = {
    // Commercial
    "building-washing": {
        descSearch: /<p className="mb-4">Restoring the building washing/,
        descReplace: '<p className="mb-4">Restoring the building washing',
        addDesc: ' We specialize in comprehensive industrial building washing Oshkosh and Fox Valley businesses trust to maintain professional curb appeal.'
    },
    "apartment-hoa-cleaning": {
       descSearch: /<p className="mb-4">Restoring the apartment hoa cleaning/,
       descReplace: '<p className="mb-4">Restoring the apartment hoa cleaning',
       addDesc: ' We offer premier HOA exterior maintenance Green Bay property managers rely on to preserve community standards and property values.'
    },
    "restaurant-drive-thru-cleaning": {
       descSearch: /<p className="mb-4">Restoring the restaurant drive-thru cleaning/,
       descReplace: '<p className="mb-4">Restoring the restaurant drive-thru cleaning',
       addDesc: ' As your dedicated restaurant drive-thru cleaning service, we obliterate heavy grease, oil slicks, and bio-waste to secure health compliance.'
    },
    "gas-station-cleaning": {
       descSearch: /<p className="mb-4">Restoring the gas station cleaning/,
       descReplace: '<p className="mb-4">Restoring the gas station cleaning',
       addDesc: ' Our rigorous gas station canopy washing and concrete degreasing ensures a safe, brilliantly lit environment that attracts late-night commuters.'
    },
    // Residential
    "soft-wash": {
       descSearch: /<p className="mb-4">Restoring the soft wash/,
       descReplace: '<p className="mb-4">Restoring the soft wash',
       addDesc: ' Our eco-friendly roof soft wash technology safely neutralizes Gloeocapsa Magma algae without stripping damaging UV granules.'
    },
    "roof-cleaning": {
       descSearch: /<p className="mb-4">Professional Roof Cleaning utilizes/,
       descReplace: '<p className="mb-4">Professional Roof Cleaning utilizes',
       addDesc: ' Our eco-friendly roof soft wash system guarantees maximum lifespan preservation.'
    },
    "fence-cleaning": {
       descSearch: /<p className="mb-4">Restoring the fence cleaning/,
       descReplace: '<p className="mb-4">Restoring the fence cleaning',
       addDesc: ' We guarantee safe cedar fence cleaning entirely free of splintering or grain destruction, alongside brilliant white vinyl restorations.'
    },
    "window-cleaning": {
       descSearch: /vegetation completely safe\./,
       descReplace: 'vegetation completely safe.',
       addDesc: ' We are experts in hard water stain removal for windows throughout Northeast Wisconsin, restoring crystal-clear visibility.'
    },
    "solar-panel-cleaning": {
       descSearch: /restoring optimal kilowatt production capacity\./,
       descReplace: 'restoring optimal kilowatt production capacity.',
       addDesc: ' Maximize your energy returns with our dedicated solar panel efficiency cleaning Wisconsin residents rely on for optimized kilowatt capture.'
    }
};

// 1. Inject the 3-step process globally
content = content.replace(/process:\s*\[\s*"[^"]+",\s*"[^"]+",\s*"[^"]+"\s*\],/g, processUpdate.trim());

// 2. Inject Keywords
for (const [key, rules] of Object.entries(keywordInjections)) {
    // We locate the specific object block
    const blockRegex = new RegExp(`("${key}":\\s*\\{[\\s\\S]*?description:\\s*\\(|"${key}":\\s*\\{[\\s\\S]*?)(<section className="eeat-service-block">[\\s\\S]*?</section>)`, 'm');
    
    content = content.replace(blockRegex, (match, prefix, section) => {
        let newSection = section;
        if (rules.descSearch.test(newSection)) {
            newSection = newSection.replace(rules.descSearch, rules.descReplace + rules.addDesc);
        } else {
            console.log(`Failed to find target text for ${key}`);
        }
        return prefix + newSection;
    });
}

fs.writeFileSync(filePath, content);
console.log('Script execution complete.');
