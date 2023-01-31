const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function run() {
    const data = await readFileAsync(__filename);
    console.log(`File content\n------------\n${data.toString('utf-8')}`);
}

run();
console.log('Starting ...');