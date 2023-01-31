const fs = require('fs/promises');

const files = [ './file1.md', './abc.md', './file2.md']

files.forEach(async (file) => {
    console.log(file);
    const data = await fs.readFile(file);
    console.log(data.toString())
});