const myEvent  = require('./2-emitter').EventEmitter;

const products = [];

myEvent.on('new_product', (item) => {
    products.push(item);
    console.log(`\t > Total products: ${products.length}.`);
});

myEvent.on('finish', () => {
    console.log(`\nProducts overview (${products.length}):\n-------------`);
    if (!products.length) {
        return console.log(`\t > There no product have been added.`);
    }
    products.forEach((element, idx) => {
        console.log(`${idx +1}. ${element}`);
    });
});