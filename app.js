var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// database
var mongoose = require('mongoose');

var Schema = '';
var userSchema = '';
var Product = '';
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection.error:'));
db.once('open', function () {
    // Create your schemas and models here.
    Schema = mongoose.Schema;
    productSchema = new Schema({
        name: String,
        description: String,
        category: String,
        price: Number
    });
    Product = mongoose.model('Product', productSchema, 'productList');
});
mongoose.connect('mongodb://localhost:27017/nodetest2');

var app = express();

// make our db accessible to our router
app.use(function (req, res, next) {
    req.Product = Product;
    next();
});

var routes = require('./routes/index');
var products = require('./routes/products');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/products', products);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
