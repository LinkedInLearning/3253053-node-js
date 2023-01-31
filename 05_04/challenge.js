const { ReadableStream } = require("node:stream/web");

const readableStream = new ReadableStream({ 
    async start(controller) {
        Array.from({ length: 100}, (data, i) => 
            controller.enqueue(`Line number ${i + 1}\n`)
        );
        controller.close();
    },
  });
  
  const filename = 'result.txt'

// CHALLENGE
// Chainer les données provenant de la constante readable dans le fichier `${filename}`.
