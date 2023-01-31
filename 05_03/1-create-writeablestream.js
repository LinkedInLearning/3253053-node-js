const {  WritableStream } = require('node:stream/web');

const writable = new WritableStream({
    start(controller) { },
    write(chunk, controller) { },
    close(controller) { },
    abort(controller) { }
});