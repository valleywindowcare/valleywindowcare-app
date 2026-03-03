import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

function processFiles() {
    if (!fs.existsSync(POSTS_DIR)) return;

    const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

    files.forEach((file, index) => {
        let content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');

        // Extract Frontmatter and Body
        const matterMatch = content.match(/^(---[\s\S]+?---)\n([\s\S]*)$/);
        if (!matterMatch) return;

        const frontmatter = matterMatch[1];
        let body = matterMatch[2];

        // 1. Nuke the HTML Junk: Strip all lingering <div>, <span>, and fusion-builder text.
        body = body.replace(/<\/?div[^>]*>/g, '');
        body = body.replace(/<\/?span[^>]*>/g, '');
        body = body.replace(/\[\/?fusion_[^\]]+\]/g, '');

        // Let's also strip any other aggressive leftover HTML blocks, except native Markdown formatting.
        body = body.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

        // 2. GEO Hyper-Local Linking Priority 1 & 2
        // Priority 1: In the first 100 words, hyperlink 'Valley Window Care and Exterior Cleaning' to Green Bay or Appleton
        const lines = body.split('\n');
        let boundPrimary = false;

        for (let i = 0; i < lines.length; i++) {
            if (!boundPrimary && lines[i].includes('**Valley Window Care and Exterior Cleaning')) {
                const targetCity = (index % 2 === 0) ? "[Valley Window Care and Exterior Cleaning](/service-areas/green-bay)" : "[Valley Window Care and Exterior Cleaning](/service-areas/appleton)";
                lines[i] = lines[i].replace(/\*\*Valley Window Care and Exterior Cleaning/g, `**${targetCity}`);
                boundPrimary = true;
            }

            // Priority 2: If the post explicitly mentions Shawano or De Pere, ensure specific city routes are linked contextually in the 'Answer Capsule'.
            if (i < 3 && !lines[i].includes('(/service-areas/shawano)') && !lines[i].includes('(/service-areas/de-pere)')) {
                if (lines[i].toLowerCase().includes('shawano')) {
                    lines[i] = lines[i].replace(/shawano/i, '[Shawano](/service-areas/shawano)');
                }
                if (lines[i].toLowerCase().includes('de pere') || lines[i].toLowerCase().includes('depere')) {
                    lines[i] = lines[i].replace(/de pere|depere/i, '[De Pere](/service-areas/de-pere)');
                }
            }
        }
        body = lines.join('\n');

        // 3. James Voss Signature Correction
        // Strip out any broken variations
        body = body.replace(/\*By James Voss\*/g, '');
        body = body.replace(/By James Voss – Valley Window Care and Exterior Cleaning/g, '');

        const officialSignature = `\n\n*By James Voss – Valley Window Care and Exterior Cleaning*`;

        const finalContent = `${frontmatter}\n${body.trim()}${officialSignature}\n`;

        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
        console.log(`✅ Nuked HTML & Injected Tables/Signatures into: ${file}`);
    });
}

processFiles();
