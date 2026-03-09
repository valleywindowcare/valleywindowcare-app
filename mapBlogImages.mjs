import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src', 'data', 'blogData.ts');
let content = fs.readFileSync(file, 'utf8');

// The Goal is to algorithmically replace `imagePath: "/images/services/window-cleaning.jpg"` etc.
// With an explicitly mapped semantic .webp path based on the post Title/Category.

const imageRules = [
    { match: /Hiring Window Cleaners/i, img: "/images/portfolio/window-cleaning.webp" },
    { match: /Measure.*?Windows/i, img: "/images/portfolio/window-cleaning-before-after.jpg.webp" },
    { match: /Pressure Washing A Deck/i, img: "/images/portfolio/deck-cleaning.webp" },
    { match: /Restore and Maintain Your Pavers/i, img: "/images/portfolio/paver-sealing.webp" },
    { match: /Gutter Cleaning Services/i, img: "/images/portfolio/gutter-cleaning.webp" },
    { match: /Roof Cleaning Services|safely remove moss/i, img: "/images/portfolio/roof-cleaning.webp" },
    // Category Fallbacks to prevent duplicate adjacent visuals
    { category: "Roof Cleaning", img: "/images/portfolio/roof-clean.webp" },
    { category: "Window Cleaning", img: "/images/portfolio/window-cleaning-copy.webp" },
    { category: "Gutter Cleaning", img: "/images/portfolio/gutter-cleaning.jpg.webp" },
    { category: "Soft Washing", img: "/images/portfolio/soft-washing.webp" },
    { category: "Pressure Washing", img: "/images/portfolio/pressure-washing.webp" },
    { category: "Paver & Concrete Care", img: "/images/portfolio/concrete-cleaning.webp" },
    { category: "Permanent Lighting", img: "/images/portfolio/forever-lights.webp" },
    { category: "General Maintenance", img: "/images/portfolio/valley-window-care-truck.webp" },
    { category: "Commercial Services", img: "/images/portfolio/commercial-cleaning.webp" }
];

// We need to parse block by block. A regex replacement is safest here.
// Regex looks for `title: "...",` ... `category: "...",` ... `imagePath: "...",`

const blocks = content.split('id: "');
let modifiedContent = blocks[0]; // The header / exports

for (let i = 1; i < blocks.length; i++) {
    let block = 'id: "' + blocks[i];
    
    // Extract title
    const titleMatch = block.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : '';
    
    // Extract category
    const catMatch = block.match(/category:\s*"([^"]+)"/);
    const category = catMatch ? catMatch[1] : '';

    let selectedImage = "/images/portfolio/valley-window-care-truck.webp"; // Ultimate fallback

    // 1. Check strict Title matches first
    let found = false;
    for (const rule of imageRules) {
        if (rule.match && rule.match.test(title)) {
            selectedImage = rule.img;
            found = true;
            break;
        }
    }

    // 2. Check Category fallbacks with modulo staggering to prevent duplicates
    if (!found) {
        // We have multiple images per category conceptually. Let's hardcode a few variations
        if (category === "Window Cleaning") {
             const alts = ["/images/portfolio/window-cleaning-copy.webp", "/images/portfolio/window-cleaning-before-after.jpg.webp", "/images/portfolio/window-cleaning.webp"];
             selectedImage = alts[i % alts.length];
        } else if (category === "Roof Cleaning") {
             const alts = ["/images/portfolio/roof-clean.webp", "/images/portfolio/roof-cleaning.webp", "/images/portfolio/roof-cleaning-copy-3.webp"];
             selectedImage = alts[i % alts.length];
        } else if (category === "Soft Washing" || category === "House Washing") {
             const alts = ["/images/portfolio/soft-washing.webp", "/images/portfolio/house-wash-before-after.webp", "/images/portfolio/oxidation-removal.webp", "/images/portfolio/house-washing.webp"];
             selectedImage = alts[i % alts.length];
        } else if (category === "Paver & Concrete Care" || category === "Concrete Cleaning") {
             const alts = ["/images/portfolio/concrete-cleaning.webp", "/images/portfolio/paver-cleaning.webp", "/images/portfolio/oil-stain-removal.webp"];
             selectedImage = alts[i % alts.length];
        } else if (category === "Pressure Washing") {
             const alts = ["/images/portfolio/pressure-washing.webp", "/images/portfolio/drive-way-cleaning.webp", "/images/portfolio/patio-cleaning.webp"];
             selectedImage = alts[i % alts.length];
        } else if (category === "Commercial Services") {
             const alts = ["/images/portfolio/commercial-cleaning.webp", "/images/portfolio/building-wash.webp", "/images/portfolio/store-front-cleaning.webp"];
             selectedImage = alts[i % alts.length];
        } else {
             // Basic category loop
             for (const rule of imageRules) {
                 if (rule.category === category) {
                     selectedImage = rule.img;
                     break;
                 }
             }
        }
    }

    // Replace imagePath
    block = block.replace(/imagePath:\s*"[^"]+"/, \`imagePath: "\${selectedImage}"\`);
    
    modifiedContent += block;
}

fs.writeFileSync(file, modifiedContent, 'utf8');

// Output verification format
console.log('✅ Remapped images successfully. Sample output:');
const lines = modifiedContent.split('\\n');
let count = 0;
for(let i=0; i<lines.length; i++) {
   if(lines[i].includes('title:')) {
      const t = lines[i].split('"')[1];
      // seek forward for imagePath
      let img = "";
      for(let j=i+1; j<i+10; j++) {
         if(lines[j] && lines[j].includes('imagePath:')) {
             img = lines[j].split('"')[1]; break;
         }
      }
      if(img && count < 6) {
         console.log(\`- \${t} -> \${img}\`);
         count++;
      }
   }
}
