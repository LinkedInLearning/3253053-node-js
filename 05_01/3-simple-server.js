const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const input = fs.createReadStream('./data.txt');
    input.pipe(res);
});
server.listen(3000);