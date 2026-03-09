const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 7; i++) {
    const filePath = path.join(__dirname, `rewrite_batch_${i}.js`);
    if (fs.existsSync(filePath)) {
        let text = fs.readFileSync(filePath, 'utf8');
        text = text.replace(
            /text\s*=\s*text\.replace\(regex,\s*`\$1\\n\$\{newContent\}\\n\$3`\);/g,
            "text = text.replace(regex, (match, p1, p2, p3) => p1 + '\\n' + newContent + '\\n' + p3);"
        );
        fs.writeFileSync(filePath, text);
        console.log(`✅ Patched rewrite_batch_${i}.js`);
    }
}
