const express = require('express');
const mainRouter = require('./src/routes/main');
const productsRouter = require('./src/routes/products');
const usersRouter = require('./src/routes/users');
const methodOverride =  require('method-override');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('server on');
});