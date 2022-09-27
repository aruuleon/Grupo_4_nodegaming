const express = require('express');
const app = express();
const session = require('express-session');

const mainRouter = require('./src/routes/main');
const productsRouter = require('./src/routes/products');
const usersRouter = require('./src/routes/users');

/*** RUTAS DE API ***/
const apiProductsRouter = require('./src/routes/api/products');
const apiUsersRouter = require('./src/routes/api/users');

const methodOverride =  require('method-override');
const { post } = require('./src/routes/main');
const cookieParser = require('cookie-parser');
const userLoggedMiddleware = require('./src/middlewares/users/userLoggedMiddleware');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({secret: 'secret', resave: false, saveUninitialized: false,}));
app.use(cookieParser());
app.use(userLoggedMiddleware);

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

/*** USANDO LA RUTA API PRODUCTS ***/
app.use('/api/products', apiProductsRouter)
app.use('/api/users', apiUsersRouter)

app.set('view engine', 'ejs');

app.listen(3001, () => {
    console.log('server on');
});