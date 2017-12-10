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

//TODO WHY DO I HAVE TWO ROUTES FOR THE SAME THING BRAIN!?
router.post('/', function (req, res) {
    console.log("rainbow: " + req.body.rainbow);

    if (req.body.rainbow == "rainbow") {
        iothub.sendMessage("rainbow");
    }
    else if (req.body.rainbow == "rainbowCycle") {
        iothub.sendMessage("rainbowCycle");
    }
    else if(req.body.rainbow == "rgb") {
        console.log("sending rgb");
        iothub.sendMessage("rgb");
    }
    else if(req.body.rainbow == "stop") {
        console.log("sending stop");        
        iothub.sendMessage("stop");
    }
    else if(req.body.rainbow == "holiday") {
        console.log("sending holiday");        
        iothub.sendMessage("holiday");
    }
    else {
        console.log("sending solid color");

        var rgb = {
            red: req.body.red,
            green: req.body.green,
            blue: req.body.blue
        };

        console.log("color: " + JSON.stringify(rgb));
        iothub.sendMessage(rgb);
    }

    res.render('colors', { title: 'Colors' });
});

module.exports = router;

