import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outPath = path.join(process.cwd(), 'public/coming-soon-placeholder.png');
const svgBuffer = Buffer.from(
    '<svg width="1200" height="675" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="0" y="0" width="1200" height="675" fill="#e2e8f0" />' +
    '<text x="600" y="337" font-family="Arial" font-size="64" fill="#64748b" text-anchor="middle" font-weight="bold">Gallery Coming Soon</text>' +
    '</svg>'
);

async function makePlaceholder() {
    await sharp(svgBuffer)
        .blur(1)
        .toFile(outPath);
    console.log('Created coming-soon-placeholder.png securely.');
}

makePlaceholder().catch(console.error);
