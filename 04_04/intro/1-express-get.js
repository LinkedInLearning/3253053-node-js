app.get('/products', (req, res) => {
  // Gérer les requêtes.
});

app.post('/products', (req, res) => {
    // Gérer les requêtes.
});

app.get('/tickets', (req, res) => {
    res.send('Tickets not found');
    
    res.json({ id: 1, name: "My first ticket" });
});