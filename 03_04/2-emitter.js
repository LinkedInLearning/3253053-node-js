const readLine = require('node:readline/promises');
const { EventEmitter } = require('node:events');

const myEvent = new EventEmitter();

/**
 * Add products Car
 */
const addProducts = async () => {
    const rl = readLine.createInterface({ input: process.stdin,  output: process.stdout });

    while(((await rl.question('Add new product ? (Y/N)')) .toLowerCase() == 'y')) {
        const item = await rl.question('product name: \n');
        if (!item || !item.length) 
            console.log('Invalid product.');
        else
            myEvent.emit('new_product', item);
    }
    myEvent.emit('finish');
    rl.close();
}
(async () => await addProducts())();

exports.EventEmitter = myEvent;

