const https = require('node:https');
const fs = require('node:fs');

//server: <http.Server>
const server = https. createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
});

server.on('request', 
    // req: <http.IncomingMessage>
    // res: <http.ServerResponse>
    (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Welcome the to HTTPS module.')
});
server.listen(443);