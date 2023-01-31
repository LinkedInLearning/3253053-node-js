const { Readable, Writable } = require('node:stream');
const {  ReadableStream, WritableStream } = require('node:stream/web');

const readableStream = new ReadableStream({
    start(controller) {
        controller.enqueue('Readable stram');
    }
});

const writableStream = new WritableStream({
    write(chunk) {
        console.log('writable stream', chunk);
    },
});


const readable = Readable.fromWeb(readableStream, { encoding: 'utf8', objectMode: true })
const writable = Writable.fromWeb(writableStream, { encoding: 'utf8', objectMode: true }); 
readable.pipe(writable);


