```
setImmediate(() => console.log('Set immediate.'));
setTimeout(() =>  console.log('Set timeout.'), (200));
process.nextTick(() => console.log('process next tick.'));
console.log(`Logging started ...`);
```