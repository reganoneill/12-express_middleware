'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const debug = require('debug')('drink:drink-router');
const Drink = require('../model/drink.js');
const drinkRouter = new Router();

drinkRouter.post('/api/drink', jsonParser, function(req, res, next){
  debug('POST: /api/drink');
  Drink.createDrink(req.body)
  .then( drink => res.json(drink))
  .catch( err => next(err));
});

drinkRouter.get('/api/drink/:id', function(req, res, next){
  debug('GET: /api/drink/:id');
  Drink.fetchDrink(req.params.id)
  .then( drink => res.json(drink))
  .catch(err => next(err));
});

drinkRouter.get('/api/drink', function(req, res, next){
  debug('GET: /api/drink');
  Drink.fetchIDs()
  .then( ids => res.json(ids))
  .catch( next );
});

drinkRouter.put('/api/drink', jsonParser, function(req, res, next){
  debug('PUT: /api/drink');
  Drink.updateDrink(req.query.id, req.body)
  .then( bev => res.json(bev))
  .catch( next );
});

module.exports = drinkRouter;
