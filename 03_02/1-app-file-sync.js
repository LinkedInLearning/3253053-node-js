const fs = require('fs');

const content = fs.readFileSync(__filename);
console.log(content.toString('utf-8'));
console.log('Logging started ...');
