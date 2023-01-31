const http = require('http');

const server = http.createServer((req, res) => {
    res.end(`Bienvenue dans "L'essentiel de Node.JS".\n`);
});

server.listen(8081, () => {
    console.log("Le serveur est en cours d'exécution ...");
});

