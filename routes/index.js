var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    limit = 40;
    query = {};
   
    if (req.param('limit') != undefined) {
        limit = req.param('limit');
    }

    if (req.param('q') != undefined) {
        query = {$or: [{title: req.param('q')},{url: req.param('q')}]};
    }

    query = models.Source.find(query).limit(limit);

    query.sort('name');
    query.select('title');
    query.select('date');
    query.select('url');

    query.exec(function (err, results) {
        if (err) throw err;
        res.render('index', {title: '[FWB] The Fake Web Database', data: results});
    });
});

router.get('/submit', function (req, res){
    res.render('submit', {title: 'FWB - Fake Web Database' });
});

router.post('/submit', function(req, res) {
    newSource = {
        title: req.param('title'), 
        url: req.param('url'),
        date: Date.now() 
    };

    models.Source.create(newSource, function (err, doc) {
        if (err) return next(err);
        res.redirect('/');
    });
   
});

module.exports = router;
