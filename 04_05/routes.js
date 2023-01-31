const {isAuthorized} = require('./auth');
exports.basicRoutes =  (app) => {
    
    app.get('/', (req, res) => res.end("GET request called."));
    app.post('/', (req, res) => res.end("POST request called."));
    app.put('/', (req, res) => res.end("PUT request called."));
    app.delete('/', (req, res) => res.end("DELETE request called."));
};

exports.imagesRoutes = (app) => {
    app.route('/images')
        .get((req, res) => res.send('GET request called!'))
        .post((req, res) => res.send('POST request called!'))
    ;
};


exports.imageRouteMiddleware = (app) => {
    app.route('/images/public')
        .get(
            (req, res, next) => next(),
            (req, res, next) => res.send('GET basic image middleware')
        );

    app.route('/images/private')
        .all(function (req, res, next) {
            if (!isAuthorized(req.headers)) {
                res.status(401);
                res.send('You canot access this images.');
            } else {
                next();
            }
        })
        .get((req, res, next) => res.send(`GET request is Authorized for user ${req.headers.username}`))
        .post((req, res, next) => res.send(`POST request is Authorized for user ${req.headers.username}`))
};