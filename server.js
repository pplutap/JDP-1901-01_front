var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.static(__dirname));

// app.use(function (req, res, next) {
//
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');
//
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     express.static(__dirname);
//     // Pass to next layer of middleware
//     next();
// });

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', cors(), function (req, res) {
    res.sendFile('/index.html', { root : __dirname});
});

app.get('/login', cors(), function (req, res) {
    res.sendFile('/views/login.html', { root : __dirname});
});

app.get('/cart', cors(), function (req, res) {
    res.sendFile('/views/cart.html', { root : __dirname});
});

app.get('/category', cors(), function (req, res) {
    res.sendFile('/views/category.html', { root : __dirname});
});

app.get('/category/:tagId', cors(), function (req, res) {
    res.sendFile('/views/category.html', { root : __dirname});
});

app.get('/product', cors(), function (req, res) {
    res.sendFile('/views/product.html', { root : __dirname});
});

app.get('/product/:tagId', cors(), function (req, res) {
    res.sendFile('/views/product.html', { root : __dirname});
});

app.get('/admin-orders', cors(), function (req, res) {
    res.sendFile('/views/admin-orders.html', { root : __dirname});
});

app.get('/admin-products-group', cors(), function (req, res) {
    res.sendFile('/views/admin-products-group.html', { root : __dirname});
});

app.get('/admin-products', cors(), function (req, res) {
    res.sendFile('/views/admin-products.html', { root : __dirname});
});

app.get('/admin-users', cors(), function (req, res) {
    res.sendFile('/views/admin-users.html', { root : __dirname});
});

var server = app.listen(process.env.PORT || 3000, '0.0.0.0', function() {
    var host = process.env.HOST;
    var port = process.env.PORT;

    console.log('Aplikacja nasłuchuje na http://' + host + ':' + port);

});
