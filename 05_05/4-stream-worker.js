const { ReadableStream } = require('node:stream/web');
const { Worker } = require('node:worker_threads');


const readable = new ReadableStream({
    start(controller) {
        Array.from({ length: 100}, (data, i) => controller.enqueue(`line number ${i + 1}`));
        controller.close();
    }
});

const worker = new Worker('./worker.js', {
    workerData: readable,
    transferList: [readable] 
});
