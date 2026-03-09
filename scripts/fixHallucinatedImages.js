const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/data/serviceContent.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const replacements = {
    '"/gallery/audit-replacements/audit-1772396198919-559.webp"': '"/images/portfolio/roof-cleaning.webp"',
    '"/gallery/audit-replacements/audit-1772396199209-761.webp"': '"/images/portfolio/window-cleaning.webp"',
    '"/gallery/audit-replacements/audit-1772396199144-839.webp"': '"/images/portfolio/concrete-cleaning.webp"',
    '"/gallery/audit-replacements/audit-1772396198989-55.webp"': '"/images/portfolio/house-washing.webp"', // house washing
    '"/gallery/audit-replacements/audit-1772396199340-596.webp"': '"/images/portfolio/pressure-washing.webp"',
    '"/gallery/audit-replacements/audit-1772396199073-938.webp"': '"/images/portfolio/gutter-cleaning.webp"',
    '"/gallery/audit-replacements/audit-1772396199818-211.webp"': '"/images/portfolio/paver-cleaning.webp"',
    '"/gallery/audit-replacements/audit-1772396199407-371.webp"': '"/images/portfolio/building-washing.webp"',
    '"/gallery/commercial-pressure-wash/Commercial-power-washing-company-320x202.webp"': '"/images/portfolio/commerical-pressure-wash.webp"',
    '"/gallery/permanent-lighting/Patio-Deck-Lighting.webp"': '"/images/portfolio/permanent-lighting.webp"',
    '"/gallery/permanent-lighting/Patio-Deck-Lighting-2048x1026.webp"': '"/images/portfolio/permanent-lights.webp"',
    '"/gallery/audit-replacements/audit-1772396199475-474.webp"': '"/images/portfolio/roof-clean.webp"',
    '"/gallery/audit-replacements/audit-1772396199544-473.webp"': '"/images/portfolio/commerical-pressure-wash.webp"',
    '"/gallery/geo-appleton-hoa-services-18.webp"': '"/images/portfolio/building-wash.webp"',
    '"/gallery/audit-replacements/audit-1772396199611-289.webp"': '"/images/portfolio/fence-cleaning.webp"',
    '"/gallery/audit-replacements/audit-1772396199679-817.webp"': '"/images/portfolio/deck-cleaning.webp"',
    '"/gallery/audit-replacements/audit-1772396199746-444.webp"': '"/images/portfolio/solar-panel-cleaning.webp"',
    '"/gallery/audit-replacements/audit-1772396199880-139.webp"': '"/images/portfolio/store-front-cleaning.webp"',
    '"/gallery/commercial-permanent-lighting/commercial-permanent-lighting-green-bay.webp"': '"/images/portfolio/forever-lights.webp"'
};

for (const [hallucinated, real] of Object.entries(replacements)) {
    content = content.replace(new RegExp(hallucinated, 'g'), real);
}

const customReplacements = [
    { target: '"graffiti-removal": {', findRegex: /image:\s*".*?"/, replaceStr: 'image: "/images/portfolio/graffiti-removal.jpg.webp"' },
    { target: '"apartment-exterior-cleaning": {', findRegex: /image:\s*".*?"/, replaceStr: 'image: "/images/portfolio/building-wash-copy.webp"' },
    { target: '"premium-drive-thru-cleaning": {', findRegex: /image:\s*".*?"/, replaceStr: 'image: "/images/portfolio/drive-through-cleaning.webp"' },
    { target: '"parking-lot-and-garage-cleaning": {', findRegex: /image:\s*".*?"/, replaceStr: 'image: "/images/portfolio/parking-lot-cleaning-before-after.webp"' },
    { target: '"chewing-gum-removal": {', findRegex: /image:\s*".*?"/, replaceStr: 'image: "/images/portfolio/patio-cleaning.webp"' },
    { target: '"gas-station-cleaning": {', findRegex: /image:\s*".*?"/, replaceStr: 'image: "/images/portfolio/drive-through-cleaning-before-after-copy-2.webp"' },
    { target: '"post-construction-cleanup": {', findRegex: /image:\s*".*?"/, replaceStr: 'image: "/images/portfolio/post-construction-cleaning.webp"' },
    { target: '"commercial-hood-cleaning": {', findRegex: /image:\s*".*?"/, replaceStr: 'image: "/images/portfolio/hood-vent-cleaning.webp"' },
    { target: '"hood-vent-cleaning": {', findRegex: /image:\s*".*?"/, replaceStr: 'image: "/images/portfolio/hood-vent-cleaning.webp"' }
];

customReplacements.forEach(rep => {
    const startIndex = content.indexOf(rep.target);
    if (startIndex !== -1) {
        const endIndex = content.indexOf('},', startIndex);
        if (endIndex !== -1) {
            let block = content.substring(startIndex, endIndex);
            block = block.replace(rep.findRegex, rep.replaceStr);
            content = content.substring(0, startIndex) + block + content.substring(endIndex);
        }
    }
});

// Final specific sweep for any remaining '/images/portfolio/commercial-cleaning.webp' if it breaks rules
content = content.replace(new RegExp('"/images/portfolio/commercial-cleaning.webp"', 'g'), '"/images/portfolio/building-washing.webp"');

fs.writeFileSync(targetFile, content, 'utf8');
console.log("Successfully remapped 32 hallucinated paths to verified /images/portfolio/*.webp assets.");
