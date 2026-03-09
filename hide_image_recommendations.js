const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src', 'data', 'blogData.ts');

try {
    let content = fs.readFileSync(targetFile, 'utf8');

    // This regex matches "**📸 Image Recommendations:**" and everything after it until a line ONLY containing a backtick or comma (end of the template literal)
    // Wait, let's just use replace with a callback on all instances of Image Recommendations
    const regex = /\*\*📸 Image Recommendations:\*\*([\s\S]*?)(?=\n`)/g;

    const newContent = content.replace(regex, (match, p1) => {
        // Wrap the whole matched block in an HTML comment block
        return `<!-- \n**📸 Image Recommendations:**${p1}\n-->`;
    });

    if (newContent !== content) {
        fs.writeFileSync(targetFile, newContent, 'utf8');
        console.log('✅ Successfully wrapped Image Recommendations in HTML comments inside blogData.ts');
    } else {
        console.log('⚠️ No Image Recommendations blocks found to replace, or they are already commented out.');
    }

} catch (err) {
    console.error('Error processing blogData.ts:', err);
}
