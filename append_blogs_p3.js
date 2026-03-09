import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const currentDir = process.cwd();
const dataFilePath = path.join(currentDir, 'src', 'data', 'blogData.ts');
let dumpFilePath = path.join(currentDir, 'wp_posts_dump.json');

// Check desktop if not in current
if (!fs.existsSync(dumpFilePath)) {
  dumpFilePath = path.join(process.env.HOME || '/Users/james', 'Desktop', 'wp_posts_dump.json');
}

if (!fs.existsSync(dumpFilePath)) {
  console.error(`❌ Could not find wp_posts_dump.json in ${currentDir} or Desktop. Please verify file location.`);
  process.exit(1);
}

console.log(`✅ Found JSON dump at: ${dumpFilePath}`);

// 1. Read the JSON Dump
const rawJson = fs.readFileSync(dumpFilePath, 'utf-8');
const wpPosts = JSON.parse(rawJson);

// 2. Read existing blogData.ts
let blogDataRaw = fs.readFileSync(dataFilePath, 'utf-8');

// Use a regex to extract existing slugs
const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
const existingSlugs = new Set();
let match;

while ((match = slugRegex.exec(blogDataRaw)) !== null) {
  existingSlugs.add(match[1]);
}

console.log(`🔍 Found ${existingSlugs.size} existing posts in blogData.ts`);

// 3. Process WP Posts and find new ones
let numAdded = 0;
let newEntriesString = '';

wpPosts.forEach(post => {
  const slug = post.slug;
  if (!existingSlugs.has(slug)) {
    // Escape quotes in title
    let title = post.title?.rendered || 'Untitled Post';
    title = title
      .replace(/&amp;/g, '&')
      .replace(/&#8211;/g, '-')
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8216;/g, "'")
      .replace(/'/g, "\\'");

    // Format content safely
    let content = post.content?.rendered || '';
    // Basic escape for template literal
    content = content.replace(/`/g, '\\`').replace(/\\/g, '\\\\').replace(/\$/g, '\\$');

    // Format Date
    let dateStr = post.date || new Date().toISOString();
    let formattedDate = new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const category = "Company News";

    // Build the object string
    const newEntry = `  {
    id: "legacy-post-${slug}",
    title: '${title}',
    excerpt: 'Read the full guide on ${title.replace(/'/g, "\\'")}.',
    date: '${formattedDate}',
    category: '${category}',
    slug: '${slug}',
    imagePath: '/site-gallery/roof1.jpg',
    content: \`${content}\`
  },
`;
    newEntriesString += newEntry;
    existingSlugs.add(slug); // prevent duplicates within the same file
    numAdded++;
  }
});

if (numAdded === 0) {
  console.log('✅ No new posts found to append. All slugs already exist in blogData.ts!');
} else {
  // 4. Inject into the array
  const insertIndex = blogDataRaw.lastIndexOf('];');
  if (insertIndex !== -1) {
    const newContent = blogDataRaw.slice(0, insertIndex) + newEntriesString + blogDataRaw.slice(insertIndex);
    fs.writeFileSync(dataFilePath, newContent, 'utf-8');
    console.log(`🎉 Successfully appended ${numAdded} NEW posts to blogData.ts!`);
  } else {
    console.error('❌ Could not find the closing "];" in blogData.ts to append new posts.');
  }
}

// 5. Cleanup
try {
  fs.unlinkSync(dumpFilePath);
  console.log(`🧹 Cleaned up ${dumpFilePath}`);
} catch (e) {
  console.warn(`⚠️ Could not delete ${dumpFilePath}:`, e.message);
}
