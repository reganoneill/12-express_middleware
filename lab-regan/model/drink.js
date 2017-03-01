'use strict';

const uuid = require('node-uuid');
const createError = require('http-errors');
const debug = require('debug')('drink:drink');
const storage = require('../lib/storage.js');

const Drink = module.exports = function(temp, size, name){
  debug('drink constructor');
  if(!temp) throw createError(400, 'expected temp');
  if(!size) throw createError(400, 'expected size');
  if(!name) throw createError(400, 'expected name');
  this.id = uuid.v1();
  this.name = name;
  this.size = size;
  this.temp = temp;
};

Drink.createDrink = function(_drink){
  debug('createDrink');
  try {
    let drink = new Drink(_drink.temp, _drink.size, _drink.name);
    return storage.createItem('drink', drink);
  } catch(err) {
    return Promise.reject(err);
  }
};

Drink.fetchDrink = function(id){
  debug('fetchDrink');
  return storage.fetchItem('drink', id);
};

Drink.deleteDrink = function(id){
  debug('deleteDrink');
  return storage.deleteItem('drink', id);
};

Drink.fetchIDs = function(){
  debug('fetchIDs');
  storage.availIDs('drink');
};

Drink.updateDrink = function(id, _drink){
  debug('updateDrink');
  return storage.fetchItem('drink', id)
  .catch(err => Promise.reject(createError(404, err.message)))
  .then( bev => {
    for(var key in bev){
      if(key === 'id') continue;
      if(_drink[key]) bev[key] = _drink[key];
    }
    return storage.createItem('drink', bev);
  });
};
