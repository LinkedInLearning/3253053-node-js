const { ReadableStream } = require('node:stream/web');

const readable = new ReadableStream({
    start(controller) {
        controller.enqueue('My première ligne');
        controller.enqueue('My seconde ligne');
        controller.close();
    }
});

(async () => {
    for await (const data of readable) {
        console.log(data);
    }
})();