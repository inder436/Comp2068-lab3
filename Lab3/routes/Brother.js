'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    if (req.query)
        var name1 = "Brother";

    res.render('Brother', { name: name1 });
});

module.exports = router;