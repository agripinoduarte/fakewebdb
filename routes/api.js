var express = require('express');
var router = express.Router();

router.get('/api/getSources',  function(req, res) {
    if (req.param('limit') == undefined) {
        limit = 40;
    }
    
    query = models.Source.find({}).limit(limit);

    query.sort('title');
    query.select('title');
    query.select('date');
    query.select('url');

    query.exec(function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});

module.exports = router;