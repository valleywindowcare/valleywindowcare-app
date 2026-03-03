const fs = require('fs');
const file = 'src/data/blogContent.json';
let blogs = JSON.parse(fs.readFileSync(file, 'utf8'));

const slugToImage = {
    "permanent-lighting-green-bay-wi": "/gallery/Permanent-Holiday-Lighting.webp",
    "window-cleaning": "/gallery/Window_cleaning_company-scaled.jpeg",
    "diy-paver-patio-cleaning-solutions-with-household-products": "/gallery/Gyo75oBXIAAeZMT.jpg",
    "what-does-pressure-washing-cost-in-wisconsin": "/gallery/Green-bay-pressure-washing-scaled.jpg",
    "how-to-restore-and-maintain-your-pavers-a-complete-guide-to-paver-cleaning-and-sealing-cloned": "/gallery/IMG_5459.jpg",
    "roof-cleaning-prices-near-you": "/gallery/Roof-Cleaning-in-green-bay.png",
    "how-to-safely-remove-moss-from-roof-shingles": "/gallery/Roof_Cleaning_Company_in_Appleton-scaled.jpg",
    "gutter-cleaning-green-bay-home-maintenance": "/gallery/IMG_1013.jpg",
    "green-bay-power-washing-signs": "/gallery/House-washing-company-in-suamico-wi-1-scaled.jpg",
    "eco-friendly-exterior-cleaning-green-bay": "/gallery/IMG_5602.jpg",
    "how-often-should-you-clean-your-roof": "/gallery/Roof_cleaning_company_Green_bay-scaled.jpg",
    "the-best-way-to-clean-outside-windows-in-5-steps": "/gallery/window-cleaning-6.jpg",
    "exterior-house-cleaning-checklist": "/gallery/window-cleaning-2.jpg",
    "how-to-safely-decorate-your-roof-for-christmas-diy-tips-for-a-festive-stylish-holiday-home": "/gallery/holiday2.webp",
    "why-tap-water-leaves-window-streaks": "/gallery/window-cleaning-5.jpg",
    "hiring-a-window-cleaner-guide": "/gallery/window-cleaning-8.jpg",
    "how-to-measure-windows-for-blinds": "/gallery/window-cleaning-2.jpg",
    "what-are-gutter-guards-and-do-they-work": "/gallery/IMG_1013.jpg",
    "when-to-hire-someone-to-clean-your-gutters": "/gallery/IMG_1013.jpg",
    "green-bay-pressure-washing-services": "/gallery/Green-bay-pressure-washing-scaled.jpg",
    "pressure-washing-a-deck-the-dos-and-donts": "/gallery/IMG_5511.jpg",
    "power-washing-green-bay": "/gallery/Green-bay-pressure-washing-scaled.jpg"
};

blogs.forEach(b => {
    if(slugToImage[b.slug]) {
        b.image = slugToImage[b.slug];
    }
});

fs.writeFileSync(file, JSON.stringify(blogs, null, 2));
console.log("Updated blogContent.json");
