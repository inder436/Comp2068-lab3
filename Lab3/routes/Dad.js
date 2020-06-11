'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    if (req.query)
        var name = "Dad";

    res.render('Dad', { name: name });
});

module.exports = router;