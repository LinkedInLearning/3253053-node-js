const { 
    ReadableStream, 
    WritableStream, 
    TransformStream } = require("node:stream/web");
    const readableStream = new ReadableStream({
        start(controller) {
            Array.from({ length: 100}, (data, i) => controller.enqueue(`line number ${i + 1}`));
            controller.close();
        }
    });    

    const writableWebStream = new WritableStream({
        write(chunk)  { console.log(`WRITE DATA: ${chunk}\n`) },
        close() { console.log(`WritableStream is closed.` ); }
    });

    const transform = new TransformStream({
        transform(chunk, controller) {
          controller.enqueue(chunk.toUpperCase());
        }
    });

    (async () => {
        await readableStream.pipeThrough(transform).pipeTo(writableWebStream);
    })();
    