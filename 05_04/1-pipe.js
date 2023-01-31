const { ReadableStream, WritableStream } = require("node:stream/web");

const readableStream = new ReadableStream({
    start(controller) {
        Array.from({ length: 100}, (data, i) => 
            controller.enqueue(`Line number ${i + 1}`)
        );
        controller.close();
    }
});
const writableWebStream = new WritableStream({
    write(chunk)  {
        console.log(`WRITE DATA: ${chunk}`) 
    },
    close() { 
        console.log(`WritableStream is closed.` )
    }
});

(async () => {
    await readableStream.pipeTo(writableWebStream);
})();