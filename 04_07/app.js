const config = require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');

const {  routes } = require('./src/routes/imageRoutes');

const app = express();
const port = 3001;

app.use(bodyParser.json())

routes(app);

app.listen(port, () => console.log(`The server is running on port http://localhost:${port}`));