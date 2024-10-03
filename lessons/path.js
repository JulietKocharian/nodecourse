const path = require('path');

console.log('joined path', path.join(__dirname, '...', '..'));
const fullPath = path.resolve(__dirname, 'first', 'second', 'third.js');
console.log('fullpfullpathfullpathath', fullPath);
console.log('parsed path', path.parse(fullPath));
console.log('file separator, platform specific', path.sep);
console.log('checks if absolute or not', path.isAbsolute(fullPath));
console.log('base name', path.basename(fullPath));
console.log('extension of file', path.extname(fullPath));


const siteUrl = 'https://www.youtube.com/watch?v=243pQXC5Ebs&t=846s';

const url = new URL(siteUrl);


console.log('url: ', url);

