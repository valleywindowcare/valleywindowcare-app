const blogs = require('./src/data/blogContent.json');
console.log(blogs.map(b => b.slug));
