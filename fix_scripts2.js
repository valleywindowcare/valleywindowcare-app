const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 7; i++) {
    const filePath = path.join(__dirname, `rewrite_batch_${i}.js`);
    if (fs.existsSync(filePath)) {
        let text = fs.readFileSync(filePath, 'utf8');
        // Update the regex to use an unambiguous lookahead for imagePath
        text = text.replace(
            /const regex = new RegExp\(.*?'g'\);/g,
            'const regex = new RegExp(`(slug:\\\\s*"${slug}"[\\\\s\\\\S]*?content:\\\\s*\\\`)([\\\\s\\\\S]*?)(?=\\\`,\\\\s*imagePath:)`, "g");'
        );
        // And update the replacement payload to not include the backtick in p3, since p3 is now a positive lookahead
        text = text.replace(
            /text = text\.replace\(regex, \(match, p1, p2, p3\) => p1 \+ '\\n' \+ newContent \+ '\\n' \+ p3\);/g,
            "text = text.replace(regex, (match, p1, p2) => p1 + '\\n' + newContent + '\\n');"
        );
        fs.writeFileSync(filePath, text);
        console.log(`✅ Robust Regex Patched: rewrite_batch_${i}.js`);
    }
}
