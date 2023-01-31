const fs = require('fs/promises');

const files = [ './file1.md', './abc.md', './file2.md']

files.forEach(async (file) => {
    try {
        const data = await fs.readFile(file, { encoding: 'ajdf'});
        console.log(data.toString())
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`The file "${file}" doesn't exists.`);
        } else {
            //console.log(`Something went wrong by reading the file ${file}`);
            console.log(error.message);
            // throw error;
        }

    }
});