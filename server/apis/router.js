const Router = require('express').Router();

const city = require('./cityName');

//Check initial Route
Router.get('/', (req, res) => {
 res.status(200).send('ok');
});

Router.use(require('body-parser').json());
Router.get('/city/:cityName', city);

module.exports = Router;
