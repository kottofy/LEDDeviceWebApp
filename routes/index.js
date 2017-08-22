'use strict';
var express = require('express');
var router = express.Router();
var iothub = require('../IoTHub.js');

// /* GET home page. */
// router.get('/', function (req, res) {
//     // iothub.sendMessage();
//     res.render('index', { title: 'LED Device' });
// });

/* GET colors page. */
router.get('/', function (req, res) {
    res.render('colors', { title: 'Colors' });
});

router.post('/', function (req, res) {
    console.log("rainbow: " + req.body.rainbow);

    // TODO - not working for rainbow and rainbow cycle
    if (req.body.rainbow == "rainbow"){
        iothub.sendMessage("rainbow");
    }
    else if(req.body.rainbow == "rainbowCycle") {
        iothub.sendMessage("rainbowCycle");
    }
    else {
        var rgb = {
            'red': req.body.red,
            'green': req.body.green,
            'blue' : req.body.blue
        };

        if (JSON.stringify == "{}") {
            console.log("empty");
        }
        else {
            console.log("color: " + JSON.stringify(rgb));
            iothub.sendMessage(rgb);
        }
    }
   
    res.render('colors', { title: 'Colors' });
});

module.exports = router;

