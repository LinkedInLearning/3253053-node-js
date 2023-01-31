const { TransformStream } = require("node:stream/web");

const transform = new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.toUpperCase());
    }
  });
  
  const writer = transform.writable.getWriter();
  const reader = transform.readable.getReader();

(async () => {
    try {
        Array.from({length: 10}, (v, n) => writer.write(`line number is: ${n + 1}`));
        while(true) {
            const { value, done } = await reader.read();
            if (done) break;
            console.log(value);
        }
    } finally {
        writer.releaseLock();
    }
})();
