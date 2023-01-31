const fs = require('fs/promises');

const files = [ './file1.md', './abc.md', './file2.md']

files.forEach(async (file) => {
    try {
        const data = await fs.readFile(file, { encoding: 'ajdf'});
        console.log(data.toString())
    } catch (error) {
        console.log(`${error.code}: ${error.message}`)
    }
});