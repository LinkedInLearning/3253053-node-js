const { UpdateImage } = require('../data/mongoose');
const { addImage, getImages, getImage, RemoveImage } = require('../services/imageService')

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
        .all((req, res, next) => next())
        .get(async(req, res) => {
            let result = await getImage(req.params.id);
            res.json(result);
        })
        .put(async (req, res) => {
            let result = await UpdateImage(req.params.id, req.body);
            res.json(result);
        })
        .delete(async (req, res) => {
            let result = await RemoveImage(req.params.id, req.body);
            res.json(result);
        });
};

exports.routes = routes;