const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');

const mainRouter = require('./src/routes/main');
const productsRouter = require('./src/routes/products');
const usersRouter = require('./src/routes/users');

/*** RUTAS DE API ***/
const productsRouterAPI = require('./src/routes/api/products');
const usersRouterAPI = require('./src/routes/api/users');
const categoriesRouterAPI = require('./src/routes/api/categories');
const brandsRouterAPI = require('./src/routes/api/brands');

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
app.use(cors());

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.use('/api/products', productsRouterAPI);
app.use('/api/users', usersRouterAPI);
app.use('/api/categories', categoriesRouterAPI);
app.use('/api/brands', brandsRouterAPI);

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('server on');
});