var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function (req, res) {
    var db = req.db;
    db.collection('userlist').find().toArray(function (err, items) {
        res.json(items);
    });
});


/* POST to addUser. */
router.post('/addUser', function (req, res) {
    var db = req.db;
    db.collection('userlist').insert(req.body, function (err, result) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    });
});

/* DELETE to deleteUser. */
router.post('/deleteuser/:id', function (req, res) {
    var db = req.db;
    var userToDelete = req.params.id;
    db.collection('userlist').removeById(userToDelete, function (err, result) {
        res.send(
            (err === 1) ? {msg: ''} : {msg: 'error: ' + err}
        );
    });
});

module.exports = router;
