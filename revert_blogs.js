const fs = require('fs');

const FILE_PATH = 'src/data/blogData.ts';

// Read the current state of blogData.ts
let blogDataRaw = fs.readFileSync(FILE_PATH, 'utf-8');

// The new pages were injected with id: "legacy-page-<slug>" instead of the standard format
// Since they were all appended at the very end (before the closing ];), we can find the first 
// occurrence of 'legacy-page-' and slice the string before that object starts

// We know they were all appended in one big string block. Let's find the start of the first injected block.
const firstInjectedIndex = blogDataRaw.indexOf('  {\n    id: "legacy-page-');

if (firstInjectedIndex !== -1) {
    // Keep everything up to this point, but we need to ensure the array closes cleanly.
    // The previous item ends with `    }\n`. We just need to append `];`
    let restoredContent = blogDataRaw.substring(0, firstInjectedIndex);
    // Let's make sure it closes the array properly
    if (!restoredContent.trim().endsWith('];')) {
        restoredContent = restoredContent.trimEnd() + '\n];\n';
    }
    
    fs.writeFileSync(FILE_PATH, restoredContent, 'utf-8');
    console.log('✅ Successfully reverted blogData.ts to its previous state by removing all legacy-page objects.');
} else {
    // If we can't find it easily by string index, let's use a regex to replace all legacy-page blocks
    // Since this might be tricky, let's assume the string split works based on what we just injected.
    console.log('❌ Could not find the start of the legacy-page injections based on the expected string format.');
}

