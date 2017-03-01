'use strict';

const morgan = require('morgan');
const createError = require('http-errors');
const debug = require('debug')('drink:server');
const express = require('express');
const app = express();
const drinkRouter = require('./router/drink-router.js');
const cors = require('./lib/cors-middleware.js');
const errors = require('./lib/error-middleware.js');
const PORT = process.env.PORT || 3000;


app.use(morgan('dev'));
app.use(cors);
app.use(drinkRouter);
app.use(errors);
app.listen(PORT, function(){
  console.log(`Server up and running on port: ${PORT}`);
});
