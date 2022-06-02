const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('server on');
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'))
})

app.get('/producto', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})





