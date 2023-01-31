const { ReadableStream } = require('node:stream/web');

const readable = new ReadableStream({
    start(controller) {
        controller.enqueue('My première ligne');
        controller.enqueue('My seconde ligne');
        controller.close();
    }
});
(async () => {
    const reader = readable.getReader();
    try {
        while(true) {
            const { value, done } = await reader.read();
            if (done) break;
            console.log(value);
        }
    } finally {
        reader.releaseLock()
    }
})();