import fs from 'fs';
import path from 'path';

const dynPath = path.join(process.cwd(), 'src', 'app', 'services', '[service]', 'page.tsx');

let content = fs.readFileSync(dynPath, 'utf8');

// The `multi_replace_file_content` failed, so we'll do an explicit Node replacement to remove the secondary `categoryFallbacks` definition holding up the build.

// We want to delete the secondary definition explicitly.
// We can find it by looking for the second occurrence or just targeting the exact string block.
// Let's use string splitting to keep the first one and delete the second.

const targetBlock = `    const categoryFallbacks: Record<string, string> = {
        "roof-clean": "/images/portfolio/roof-cleaning.webp",
        "roof-cleaning": "/images/portfolio/roof-cleaning.webp",    
        "house-washing": "/images/portfolio/house-wash-before-after.webp",
        "gutter-cleaning": "/images/portfolio/gutter-cleaning.webp",
        "concrete-cleaning": "/images/portfolio/concrete-cleaning.webp",
        "window-cleaning": "/images/portfolio/window-cleaning-before-after.JPG.webp",
        "christmas-lighting": "/images/portfolio/permanent-lights.webp",
        "permanent-led-lighting": "/images/portfolio/permanent-lights.webp",
        "pressure-washing": "/images/portfolio/pressure-washing.webp",
        "commercial-roof-cleaning": "/images/portfolio/roof-cleaning.webp",
        "building-washing": "/images/portfolio/building-washing.webp",
        "hood-vent-cleaning": "/images/portfolio/building-washing.webp",
        "commercial-hood-cleaning": "/images/portfolio/building-washing.webp",
        "commercial-hood-vent": "/images/portfolio/building-washing.webp",
        "commercial-awning": "/images/portfolio/awning-cleaning.webp",
        "commercial-awning-cleaning": "/images/portfolio/awning-cleaning.webp",    
        "drive-way-cleaning": "/images/portfolio/drive-way-cleaning.webp",
        "driveway-cleaning": "/images/portfolio/drive-way-cleaning.webp",
        "residential-rust-removal": "/images/portfolio/rust-removal-before-after.webp",
        "solar-panel": "/images/portfolio/valley-window-care-truck.webp",
        "solar-panel-cleaning": "/images/portfolio/valley-window-care-truck.webp",
        "soft-washing": "/images/portfolio/soft-washing.webp",
        "soft-wash": "/images/portfolio/soft-washing.webp"
    };`;

const blocks = content.split(targetBlock);

if (blocks.length > 2) {
    // Keep the first block and everything before it, drop the second instance.
    content = blocks[0] + targetBlock + blocks[1] + blocks.slice(2).join('');
}

fs.writeFileSync(dynPath, content, 'utf8');
console.log('✅ Secondary `categoryFallbacks` constant dropped from the ServiceGenericPage AST scope.');
