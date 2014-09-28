var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/productlist', function (req, res) {
    var Product = req.Product;
    console.log("entered");
    Product.find(function(err,products) {
        if(err) {
            return console.error(err);
        }
        res.json(products);
    })
});


/* POST to addProduct. */
router.post('/addProduct', function (req, res) {
    var Product = req.Product;
    var product = req.body;
    user.save(function (err,product) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    })
});

/* DELETE to deleteProduct. */
router.post('/deleteproduct/:id', function (req, res) {
    var Product = req.Product;
    var productToDelete = req.params.id;
    Product.remove({id: productToDelete},function(err) {
        res.send(
            (err === 1) ? {msg: ''} : {msg: 'error: ' + err}
        );
    });
});

module.exports = router;
