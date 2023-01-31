const { addImage, getImages, getImage } = require('../services/imageService')

const routes = (app) => {
    app.route('/images')
    .all(function (req, res, next) {
        next();
    })
    .get(async (req, res) => {
        let result = await getImages();
        res.json(result);
    })
    .post(async (req, res) => {
        let data = req.body;
        let result = await addImage(data);
        res.json(result)
    });

    app.route('/images/:id')
    .get(async(req, res) => {
        let result = await getImage(req.params.id);
        res.json(result);
    })
    .delete((req, res) => 
        res.send('DELETE request successful!')
    ); 
};

exports.routes = routes;