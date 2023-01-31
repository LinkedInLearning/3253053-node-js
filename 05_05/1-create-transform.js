const { TransformStream } = require("node:stream/web");

const tranform = new TransformStream({
    start(controller) { },
    transform(chunk, controller) { },
    flush(controller) { },
})

