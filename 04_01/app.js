const { createServer, request,  }  = require('node:http');

const requestListener = (req, res) => res.end('Welcome to Node.JS application');

// L'objet server est un EventEmitter et émet l'évènement [request] à chaque connection.
//const server = createServer(requestListener);
const server = createServer();

server.on('request', requestListener);
server.listen(8082);