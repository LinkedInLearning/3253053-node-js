require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');


const {  routes } = require('./src/routes/imageRoutes');

const app = express();
const port = 3001;

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

routes(app);

app.listen(port, () => console.log(`The server is running on port http://localhost:${port}`));