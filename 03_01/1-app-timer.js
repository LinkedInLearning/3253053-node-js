const fs = require('fs');

function readDocument(callback) {
    fs.readFile(__filename, callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;
  
    console.log(`${delay}ms have passed since I was scheduled`);
  }, 100);

console.log('waiting ...');
readDocument((err, buffer) => {
    console.log(buffer.toString());
});
