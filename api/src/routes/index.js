const { Router } = require('express');
const routes = Router();

routes.use('/recipe')
routes.use('/ingredients')
routes.use('/user')

module.exports = routes;