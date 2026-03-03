const cheerio = require('cheerio');
fetch('https://valleywindowcare.com/blog', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
    }
})
    .then(r => r.text())
    .then(t => {
        const $ = cheerio.load(t);
        const links = new Set();
        $('a').each((i, el) => {
            const h = $(el).attr('href');
            if (h && h.includes('valleywindowcare.com')) links.add(h);
        });
        console.log(Array.from(links));
    });
