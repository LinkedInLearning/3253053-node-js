const { EventEmitter } = require('node:events');

const myEvent = new EventEmitter();

myEvent.emit('start');
myEvent.on('start', () => console.log('Application is started ...'));





