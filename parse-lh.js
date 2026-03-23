const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./initial-lighthouse-report.json', 'utf8'));

console.log('=== Performance Score ===');
console.log(data.categories.performance.score * 100);

console.log('\n=== LCP ===');
console.log(data.audits['largest-contentful-paint'].displayValue);

console.log('\n=== LCP Element ===');
const lcpElement = data.audits['largest-contentful-paint-element'];
if(lcpElement && lcpElement.details && lcpElement.details.items && lcpElement.details.items.length > 0) {
  console.log(lcpElement.details.items[0].node.snippet);
}

console.log('\n=== Render-Blocking Resources ===');
const rbr = data.audits['render-blocking-resources'];
if(rbr && rbr.details && rbr.details.items) {
  rbr.details.items.forEach(i => console.log(i.url));
}

console.log('\n=== Unoptimized Images ===');
const opt = data.audits['uses-optimized-images'];
if(opt && opt.details && opt.details.items) {
  opt.details.items.forEach(i => console.log(i.url));
}

console.log('\n=== Offscreen Images (Need Lazy Load) ===');
const offscreen = data.audits['offscreen-images'];
if(offscreen && offscreen.details && offscreen.details.items) {
  offscreen.details.items.forEach(i => console.log(i.node ? i.node.snippet : i.url));
}
