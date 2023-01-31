const {  WritableStream } = require('node:stream/web');

const stream = new WritableStream({
    write(chunk) {
      console.log(chunk);
    },
});

(async ()=> {

  const writer = stream.getWriter();
  try {
    await writer?.write('Hello World');
  } finally {
    writer.releaseLock();
  }
})();