var express = require('express');
var router = express.Router();

/* GET frontpage. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Forsiden'
    });
});


module.exports = router;
