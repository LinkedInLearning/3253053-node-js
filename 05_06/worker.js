const { workerData: stream } = require('worker_threads');

const reader = stream.getReader();
reader.read().then(console.log);