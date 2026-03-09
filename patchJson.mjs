import fs from 'fs';
import path from 'path';

const targetJsonPath = path.join(process.cwd(), 'src', 'data', 'serviceAreasContent.json');

const stringReplacements = [
    { target: '/site-gallery/roof1.jpg', rep: '/images/portfolio/roof-cleaning.webp' },
    { target: '/site-gallery/roof2.jpg', rep: '/images/portfolio/roof-cleaning.webp' },
    { target: '/site-gallery/house1.jpg', rep: '/images/portfolio/house-wash-before-after.webp' },
    { target: '/site-gallery/concrete1.jpg', rep: '/images/portfolio/concrete-cleaning.webp' },
    { target: '/site-gallery/window1.jpg', rep: '/images/portfolio/window-cleaning-before-after.JPG.webp' },
    { target: '/site-gallery/gutter1.jpg', rep: '/images/portfolio/gutter-cleaning.webp' },
    { target: '/site-gallery/xmas1.jpg', rep: '/images/portfolio/permanent-lights.webp' },
    { target: '/site-gallery/led1.jpg', rep: '/images/portfolio/permanent-lights.webp' },
    { target: '/site-gallery/pressure1.jpg', rep: '/images/portfolio/pressure-washing.webp' },
    { target: '/site-gallery/hood1.jpg', rep: '/images/portfolio/building-washing.webp' },
    { target: '/site-gallery/job1.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/job2.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/job3.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/AuthenticCrewTruck1.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/authentic-window-cleaners-in-green-bay-scaled.jpeg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/authentic-IMG_5510.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/authentic-IMG_3952.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: 'https://valleywindowcare.com/_next/image?url=%2Fsite-gallery%2Fjob2.jpg&w=1920&q=85', rep: 'https://valleywindowcare.com/images/portfolio/valley-window-care-truck.webp'}
];

if (fs.existsSync(targetJsonPath)) {
    let content = fs.readFileSync(targetJsonPath, 'utf8');
    let modified = false;

    for (const { target, rep } of stringReplacements) {
        if (content.includes(target)) {
            content = content.split(target).join(rep);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(targetJsonPath, content, 'utf8');
        console.log('✅ Purged .jpg and injected .webp -> ' + targetJsonPath);
    } else {
        console.log('No matches found in Json.');
    }
} else {
    console.log('File not found.');
}
