const fs = require('fs');
const http = require('http');

const csvPath = 'redirect_map_v3.csv';
const logFailuresPath = 'redirect_failures.log';

if (!fs.existsSync(csvPath)) {
    console.error(`❌ Could not find ${csvPath}`);
    process.exit(1);
}

const csvData = fs.readFileSync(csvPath, 'utf8');
const lines = csvData.trim().split('\n');
lines.shift(); // skip header

// Prepare testing queue
const redirectsToTest = [];

lines.forEach(line => {
    const parts = line.split(',');
    if (parts.length >= 3) {
        let oldUrl = parts[0].trim().replace('https://valleywindowcare.com', '');
        let newUrl = parts[1].trim().replace('http://localhost:3000', '').replace('http://localhost:3006', '');

        if (!oldUrl.startsWith('/')) oldUrl = '/' + oldUrl;
        if (!newUrl.startsWith('/')) newUrl = '/' + newUrl;
        
        if (oldUrl.endsWith('/') && oldUrl.length > 1) oldUrl = oldUrl.slice(0, -1);
        if (newUrl.endsWith('/') && newUrl.length > 1) newUrl = newUrl.slice(0, -1);

        if (oldUrl !== newUrl) {
            redirectsToTest.push({ oldUrl, expectedNew: newUrl });
        }
    }
});

console.log(`🔍 Starting validation for ${redirectsToTest.length} configured redirects...`);

const results = {
    success: 0,
    failures: [],
};

const PORT = 3000;

function checkRedirect(item, index) {
    return new Promise((resolve) => {
        // Use 127.0.0.1 instead of localhost which sometimes resolves differently
        const options = {
            hostname: '127.0.0.1',
            port: PORT,
            path: item.oldUrl,
            method: 'GET',
            headers: {
                'User-Agent': 'Redirect-Validator/1.0',
                'Host': 'localhost:3000'
            }
        };

        const req = http.request(options, (res) => {
            const statusCode = res.statusCode;
            const locationHeader = res.headers['location'];
            
            let matchedDest = false;
            if (locationHeader) {
               matchedDest = locationHeader === item.expectedNew || 
                             locationHeader === `http://localhost:3000${item.expectedNew}` ||
                             locationHeader === item.expectedNew + '/' ||
                             locationHeader === `http://localhost:3000${item.expectedNew}/` ||
                             locationHeader === item.expectedNew.replace(/\/$/, '') ||
                             locationHeader.split('?')[0] === item.expectedNew.split('?')[0]; 
            }

            if ((statusCode === 301 || statusCode === 308) && matchedDest) {
                results.success++;
                process.stdout.write('✅');
            } else {
                results.failures.push({
                    expectedOld: item.oldUrl,
                    expectedNew: item.expectedNew,
                    actualStatus: statusCode,
                    actualLocation: locationHeader || 'NONE'
                });
                process.stdout.write('❌');
            }
            res.on('data', () => {});
            res.on('end', resolve);
        });

        req.on('error', (e) => {
            // Check if it's connection refused (server might be down)
            if (e.code === 'ECONNREFUSED') {
                console.error(`\n🚨 SERVER DOWN: Could not connect to http://127.0.0.1:${PORT}. Make sure 'npm run dev' is running.`);
                process.exit(1);
            }
            results.failures.push({
                expectedOld: item.oldUrl,
                expectedNew: item.expectedNew,
                actualStatus: 'ERROR',
                actualLocation: e.code || e.message
            });
            process.stdout.write('❌');
            resolve();
        });

        // Add timeout
        req.setTimeout(5000, () => {
             results.failures.push({
                expectedOld: item.oldUrl,
                expectedNew: item.expectedNew,
                actualStatus: 'TIMEOUT',
                actualLocation: 'NONE'
            });
            process.stdout.write('❌');
            req.abort();
            resolve();
        });

        req.end();
    });
}

async function runTests() {
    for (let i = 0; i < redirectsToTest.length; i++) {
        await checkRedirect(redirectsToTest[i], i);
        // Larger delay to let Next.js breathe
        await new Promise(r => setTimeout(r, 50));
    }

    console.log('\n\n--- 📊 REDIRECT REPORT ---');
    console.log(`✅ Passed: ${results.success} / ${redirectsToTest.length}`);
    
    if (results.failures.length > 0) {
        console.log(`❌ Failed: ${results.failures.length} / ${redirectsToTest.length}\n`);
        
        fs.writeFileSync(logFailuresPath, JSON.stringify(results.failures, null, 2));
        console.log(`📝 Full failure log written to ${logFailuresPath}`);
        
        console.log('Reviewing Top 5 Failures:');
        results.failures.slice(0, 5).forEach(f => {
            console.log(`  -> URL: ${f.expectedOld}`);
            console.log(`     Expected: ${f.expectedNew}`);
            console.log(`     Received: HTTP ${f.actualStatus} (Location: ${f.actualLocation})\n`);
        });
        
    } else {
        console.log('🏆 All SEO Redirects are executing flawlessly with Permanent status codes!');
    }
}

// Check server status first implicitly via the first request catching ECONNREFUSED
runTests();
