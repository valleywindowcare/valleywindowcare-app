import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const servicesDir = path.join(__dirname, 'src', 'app', 'services');
const serviceAreasDir = path.join(__dirname, 'src', 'app', 'service-areas');

// Criteria for "Slop"
function isSlop(folderName) {
    if (folderName === '[service]' || folderName === '[city]' || folderName === 'blog') return false;
    
    // Core short-form we WANT to explicitly keep (even if we renamed them before, we must preserve their short names when we restore them)
    // For now we just purge the obvious long-form slops
    
    const slopKeywords = [
        'green-bay', 'wisconsin', 'appleton', 'valley-window-care', 'near-you', '-in-'
    ];
    
    for (const keyword of slopKeywords) {
        if (folderName.includes(keyword)) {
            return true;
        }
    }
    
    return false;
}

let deletedCount = 0;

function purgeDirectory(baseDir) {
    if (!fs.existsSync(baseDir)) return;
    
    const folders = fs.readdirSync(baseDir).filter(f => {
        const fullPath = path.join(baseDir, f);
        return fs.statSync(fullPath).isDirectory();
    });
    
    for (const folder of folders) {
        if (isSlop(folder)) {
            const tgt = path.join(baseDir, folder);
            fs.rmSync(tgt, { recursive: true, force: true });
            console.log(`Purged Slop: ${tgt}`);
            deletedCount++;
        }
    }
}

console.log("Starting Slop Purge...");
purgeDirectory(servicesDir);
purgeDirectory(serviceAreasDir);
console.log(`Finished. Deleted ${deletedCount} slop directories.`);
