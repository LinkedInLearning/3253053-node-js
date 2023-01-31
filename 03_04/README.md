```
const { EventEmitter } = require('node:events');
const ```
const { EventEmitter } = require('node:events');
const myEmitter = new EventEmitter();
myEmitter.emit('connection', process.env['USER'] ?? process.env['USERNAME']);
myEmitter.on('connection', 
    (content) => console.log(`"${content}" is connected.`));
```myEmitter = new EventEmitter();
myEmitter.emit('connection', process.env['USER'] ?? process.env['USERNAME']);
myEmitter.on('connection', 
    (content) => console.log(`"${content}" is connected.`));
```

De l'```Event loop```