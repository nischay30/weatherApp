const Router = require('express').Router();

const city = require('./cityName');

Router.use(require('body-parser').json());
Router.get('/city/:cityName', city);

module.exports = Router;
