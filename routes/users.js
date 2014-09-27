var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function (req, res) {
    var User = req.User;
    console.log("entered");
    User.find(function(err,users) {
        if(err) {
            return console.error(err);
        }
        res.json(users);
    })
});


/* POST to addUser. */
router.post('/addUser', function (req, res) {
    var User = req.User;
    var user = req.body;
    user.save(function (err,user) {
        res.send(
            (err === null) ? {msg: ''} : {msg: err}
        );
    })
});

/* DELETE to deleteUser. */
router.post('/deleteuser/:id', function (req, res) {
    var User = req.User;
    var userToDelete = req.params.id;
    User.remove({id: userToDelete},function(err) {
        res.send(
            (err === 1) ? {msg: ''} : {msg: 'error: ' + err}
        );
    });
});

module.exports = router;
