var express = require('express');
var router = express.Router();
var fs = require('fs');

var memes;
fs.readdir('public/storage/memes', function(err, items) {
    memes = items;
})

/* GET memes page. */
router.get('/', function(req, res, next) {
    console.log(memes);
    res.render('index', {
        title: 'Memes',
        memes: memes
    });
});

module.exports = router;
