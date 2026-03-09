const fs = require('fs');

let content = fs.readFileSync('src/data/blogData.ts', 'utf8');

const postSections = content.split('  {');

for (let i = 1; i < postSections.length; i++) {
  if (!postSections[i].includes('imagePath:')) {
    postSections[i] = postSections[i].replace(/    slug: '([^']+)',\n/, "    slug: '$1',\n    imagePath: '/site-gallery/roof1.jpg',\n");
  }
}

content = postSections.join('  {');

fs.writeFileSync('src/data/blogData.ts', content, 'utf8');
