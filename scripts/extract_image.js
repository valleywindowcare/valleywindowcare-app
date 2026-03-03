const fs = require('fs');
const https = require('https');

// Extract the image sent in the user's latest message prompt
// The absolute easiest way is to download the image from the URL provided in the prompt OR
// since the user just attached it to the chat, it might be in an .gemini or .antigravity temp folder.
// Let's search the /.gemini/antigravity/brain directory for recent image files.
