import fs from 'fs';
import path from 'path';

const dynPath = path.join(process.cwd(), 'src', 'app', 'services', '[service]', 'page.tsx');

let content = fs.readFileSync(dynPath, 'utf8');

// I need to explicitly strip the `exactBgImage` line from inside generateMetadata.
content = content.replace(/const exactBgImage.*?valley-window-care-truck\.webp";/g, '');

fs.writeFileSync(dynPath, content, 'utf8');
console.log('✅ Final syntax purge complete.');
