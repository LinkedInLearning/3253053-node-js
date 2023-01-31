const express = require('express');
const {basicRoutes, imagesRoutes, imageRouteMiddleware} = require('./routes');

const app = express();
const port = 3001;

// app.get('/', (req, res) => res.end("Welcome to this tutorial."));
app.listen(port, () => console.log(`MyApp listening on http://localhost:${port}`));

basicRoutes(app);
imagesRoutes(app);
imageRouteMiddleware(app);
