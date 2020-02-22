var express = require('express');
var app = express();

// app.use(express.static(__dirname));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    express.static(__dirname);
    // Pass to next layer of middleware
    next();
});

app.get('/', function (req, res) {
    res.sendFile('/index.html', { root : __dirname});
});

app.get('/login', function (req, res) {
    res.sendFile('/views/login.html', { root : __dirname});
});

app.get('/cart', function (req, res) {
    res.sendFile('/views/cart.html', { root : __dirname});
});

app.get('/category', function (req, res) {
    res.sendFile('/views/category.html', { root : __dirname});
});

app.get('/category/:tagId', function (req, res) {
    res.sendFile('/views/category.html', { root : __dirname});
});

app.get('/product', function (req, res) {
    res.sendFile('/views/product.html', { root : __dirname});
});

app.get('/product/:tagId', function (req, res) {
    res.sendFile('/views/product.html', { root : __dirname});
});

app.get('/admin-orders', function (req, res) {
    res.sendFile('/views/admin-orders.html', { root : __dirname});
});

app.get('/admin-products-group', function (req, res) {
    res.sendFile('/views/admin-products-group.html', { root : __dirname});
});

app.get('/admin-products', function (req, res) {
    res.sendFile('/views/admin-products.html', { root : __dirname});
});

app.get('/admin-users', function (req, res) {
    res.sendFile('/views/admin-users.html', { root : __dirname});
});

var server = app.listen(process.env.PORT || 3000, '0.0.0.0', function() {
    var host = process.env.HOST;
    var port = process.env.PORT;

    console.log('Aplikacja nasłuchuje na http://' + host + ':' + port);

});
