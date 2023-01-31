const { readFile } = require('fs').promises;

async function run() {
    const data = await readFile(__filename);
    console.log(`----- --- START ----------\n${data.toString('utf-8')}\n-------- END ------\n`);
}
run()
console.log('Starting ...');