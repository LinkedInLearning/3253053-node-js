const fs = require('fs');
const  parse = require('path').parse;

fs.readFile(__filename, (err, content) => {
    const info = parse(__filename)
    const newfile = `${info.dir}\\${info.name} (copy).${info.ext}`;

    fs.write(newfile, content, (err, nbr, data) => {
        
    })
});
console.log('Starting ...');