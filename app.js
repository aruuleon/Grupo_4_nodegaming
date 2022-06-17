const express = require('express');
const path = require('path');
const mainRouter = require('./src/routes/mainRouter');
const app = express();

app.use(express.static('public'));
app.use('/', mainRouter);

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('server on');
});