const {  get_products } =  require('./services/products');
const express = require('express');

const app = express();
const port = 3002;
app.listen(port, () => console.log(`MyApp listening on port ${port}!`));

// Routes

app.get('/', (req, res) => res.send('Welcome to MyApp application!'));
app.get('/products', async (req, res) => res.json(await get_products()));