const fs = require('fs');

fs.readFile(__filename, (err, content) => {
    console.log(content.toString('utf-8'))
});
console.log('Starting ...');