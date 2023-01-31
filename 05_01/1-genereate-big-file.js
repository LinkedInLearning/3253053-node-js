const fs = require('fs');
const file = fs.createWriteStream('./data.txt');
for (let i= 0; i <= 1e6; i++) {
    let text = `${i}This is an exemple of a simple writable stream.`;
    file.write(text);
}
file.end();