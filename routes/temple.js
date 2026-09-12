const routes = require('express').Router();
const temples = require('../controllers/temple.js');

routes.get(
  '/',
  /* #swagger.parameters['apiKey'] = {
       in: 'header',
       description: 'API key required to read temples',
       required: true,
       type: 'string'
  } */
  temples.findAll
);
routes.get(
  '/:temple_id',
  /* #swagger.parameters['apiKey'] = {
       in: 'header',
       description: 'API key required to read temples',
       required: true,
       type: 'string'
  } */
  temples.findOne
);

routes.post('/', temples.create);

routes.put('/:temple_id', temples.update);
routes.delete('/:temple_id', temples.delete);

module.exports = routes;
