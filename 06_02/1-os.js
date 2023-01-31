const os = require('node:os');

console.log(`Platform: ${os.platform}`);
console.log(`CPU Architecture: ${os.arch}`);
console.log(`Numbers of CPU cores: ${os.cpus().length}`);
console.log(`User home directory: ${os.homedir()}`);
console.log(`line 1 ${os.EOL}line 2 ${os.EOL}line 3`);
console.log(os.cpus());