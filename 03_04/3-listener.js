const myEvent  = require('./2-emitter').EventEmitter;
myEvent.on('new_product', (item) => console.log(`\t > Product ${item} added.`))