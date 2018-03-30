'use strict';
var express = require('express');
var router = express.Router();

var iothub = require('../IoTHub.js');

/* GET colors page. */
router.get('/', function (req, res) {
    res.render('colors', { title: 'Colors' });
});

router.post('/', function (req, res) {
    res.render('colors', { title: 'Colors' });
});

module.exports = router;
