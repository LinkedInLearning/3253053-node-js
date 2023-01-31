const { createServer, request,  }  = require('node:http');

const requestListener = (req, res) => {
    console.dir(res.header);
    res.end('Welcome to Node.JS application');
};


//const server = createServer(requestListener);
const server = createServer();
server.on('request', requestListener);

server.listen(8082);