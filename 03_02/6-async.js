const fs = require('fs').promises;
const  parse = require('path').parse;

async function run() {
    const fileContent = await fs.readFile(__filename);
    const info = parse(__filename)
    const newfile = `${info.dir}\\${info.name} (copy).${info.ext}`;
    await fs.writeFile(newfile, fileContent);
}

run();