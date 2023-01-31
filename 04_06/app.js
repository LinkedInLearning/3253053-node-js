const config = require('dotenv').config();
const express = require('express');
const {  routes } = require('./src/routes/imageRoutes');
require('./src/data/mongodb');
const app = express();
const port = 3001;


routes(app);

app.listen(port, () => console.log(`The server is running on port http://localhost:${port}`));