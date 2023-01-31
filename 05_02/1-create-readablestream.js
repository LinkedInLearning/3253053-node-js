const {  ReadableStream } = require('node:stream/web');

const readable = new ReadableStream({
    start(controller) {},
    pull(controller) {},
    cancel(reason) {},
    type:'bytes'
});
