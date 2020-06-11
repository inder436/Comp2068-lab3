'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    if (req.query)
        var name = "Mom";

    res.render('Mom', { name: name });
});

module.exports = router;