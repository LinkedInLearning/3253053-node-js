
const routes = (app) => {
    app.route('/images')
    .get(async (req, res) => {
        res.send('GET request successful!')
    })
    .post((req, res) => {
        
        res.send('POST request successful!')
    });

    app.route('/images/:id')
    .put((req, res) => 
        res.send('PUT request successful!')
    )
    .delete((req, res) => 
        res.send('DELETE request successful!')
    ); 
};

exports.routes = routes;