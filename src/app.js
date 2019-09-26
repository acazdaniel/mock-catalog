const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const catalogRoute = require('./routes/catalogRoute');
const itemRoute = require('./routes/itemRoute');
const itemsRoute = require('./routes/itemsRoute');
app.use('/', index);
app.use('/products', catalogRoute);
app.use('/users', itemRoute);
app.use('/items', itemsRoute)
module.exports = app;
