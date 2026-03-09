import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'src', 'app');

function updateGallery() {
    const galleryPath = path.join(baseDir, 'gallery', 'page.tsx');
    if (!fs.existsSync(galleryPath)) return;

    let content = fs.readFileSync(galleryPath, 'utf8');

    // We only need to inject the newly processed ones safely into the array
    const newEntries = `
    { src: "/images/portfolio/commercial-cleaning.webp", title: "Commercial Exterior Cleaning", category: "Commercial", alt: "Commercial exterior soft washing and cleaning" },
    { src: "/images/portfolio/deck-cleaning.webp", title: "Deck Cleaning & Restoration", category: "House Washing", alt: "Professional wood deck cleaning and restoration" },
    { src: "/images/portfolio/drive-through-cleaning-before-after-copy-2.webp", title: "Drive-Through Cleaning Before & After", category: "Commercial", alt: "Before and after commercial drive-through cleaning" },
    { src: "/images/portfolio/drive-through-cleaning-copy.webp", title: "Drive-Through Pressure Washing", category: "Commercial", alt: "Commercial drive-through pressure washing" },
    { src: "/images/portfolio/drive-through-cleaning.webp", title: "Drive-Through Cleaning", category: "Commercial", alt: "Drive-through concrete cleaning" },
    { src: "/images/portfolio/estimate-meeting.webp", title: "In-Person Project Estimate", category: "Commercial", alt: "On-site exterior cleaning project estimate" },
    { src: "/images/portfolio/garage-cleaning-before-after.webp", title: "Garage Floor Cleaning", category: "Concrete Cleaning", alt: "Before and after garage floor cleaning" },
    { src: "/images/portfolio/hood-vent-cleaning.webp", title: "Commercial Hood Vent Cleaning", category: "Commercial", alt: "Restaurant hood vent cleaning" },
    { src: "/images/portfolio/house-washing.webp", title: "Residential House Washing", category: "House Washing", alt: "Residential house washing" },
    { src: "/images/portfolio/parking-lot-cleaning-before-after.webp", title: "Parking Lot Cleaning", category: "Commercial", alt: "Before and after parking lot cleaning" },
    { src: "/images/portfolio/parking-lot-cleaning-before-and-after.webp", title: "Commercial Parking Lot Washing", category: "Commercial", alt: "Commercial parking lot washing before and after" },
    { src: "/images/portfolio/restuarnt-cleaning.webp", title: "Restaurant Exterior Cleaning", category: "Commercial", alt: "Restaurant exterior washing" },
    { src: "/images/portfolio/roof-cleaning-copy-3.webp", title: "Residential Roof Soft Washing", category: "Roof Cleaning", alt: "Residential roof soft washing" },
    { src: "/images/portfolio/rust-removal.webp", title: "Rust Stain Removal", category: "House Washing", alt: "Rust stain removal from exterior" },
    { src: "/images/portfolio/solar-panel-cleaning.webp", title: "Solar Panel Cleaning", category: "Window Cleaning", alt: "Professional solar panel cleaning" },
    { src: "/images/portfolio/window-cleaning-copy.webp", title: "Residential Window Washing", category: "Window Cleaning", alt: "Residential window washing" },
    { src: "/images/portfolio/window-cleaning.webp", title: "Commercial Window Cleaning", category: "Window Cleaning", alt: "Commercial window cleaning" }`;

    const insertionPoint = content.lastIndexOf('];');
    
    // Safety check in case it's already there
    if (!content.includes('commercial-cleaning.webp')) {
       let prefix = content.slice(0, insertionPoint);
       // Check if there's a trailing comma at the end of the last item
       if (!prefix.trim().endsWith(',')) {
           prefix = prefix.replace(/\}$/, "},"); 
           // actually, the list ends with } so appending a comma is necessary if it's the last token before ];
           // We will just do a simple replace of } before ];
           prefix = prefix.replace(/\}\s*$/, "},");
       }
       
       content = prefix + newEntries + '\n];' + content.slice(insertionPoint + 2);
       fs.writeFileSync(galleryPath, content, 'utf8');
       console.log('✅ Updated Gallery Array with new semantic items.');
    }
}

function updateHeroConfigs(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Add new generic fallback images to `getDeterministicHero`
    // The previous array has 6 items. We will inject a few more premium newly captured shots.
    const newHeroImages = `,
        "/images/portfolio/house-washing.webp",
        "/images/portfolio/commercial-cleaning.webp",
        "/images/portfolio/deck-cleaning.webp"`;
        
    // Specifically target the deterministic array
    const targetArrayStr = `"/images/portfolio/valley-window-care-truck.webp"
    ]`;
    
    if (content.includes(targetArrayStr) && !content.includes('house-washing.webp')) {
        content = content.replace(targetArrayStr, `"/images/portfolio/valley-window-care-truck.webp"${newHeroImages}\n    ]`);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(\`✅ Updated Deterministic Hero Rotation Array in \${filePath}\`);
    } else {
        // Handle slightly different formatting just in case
        const regex = /"\/images\/portfolio\/valley-window-care-truck\.webp"\s*\]/g;
        if (content.match(regex) && !content.includes('commercial-cleaning.webp')) {
             content = content.replace(regex, `"/images/portfolio/valley-window-care-truck.webp"${newHeroImages}\n    ]`);
             fs.writeFileSync(filePath, content, 'utf8');
             console.log(\`✅ Patched Deterministic Hero Rotation in \${filePath}\`);
        }
    }
}

updateGallery();
updateHeroConfigs(path.join(baseDir, 'service-areas', '[city]', 'page.tsx'));
updateHeroConfigs(path.join(baseDir, 'service-areas', '[city]', '[service]', 'page.tsx'));
updateHeroConfigs(path.join(baseDir, 'services', '[service]', 'page.tsx'));
