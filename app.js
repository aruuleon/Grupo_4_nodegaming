const express = require('express');
const path = require('path');
const mainRouter = require('./src/routes/main');
const productsRouter = require('./src/routes/products');
const usersRouter = require('./src/routes/users');
const app = express();

app.use(express.static('public'));
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('server on');
});