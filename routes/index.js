'use strict';
var express = require('express');
var router = express.Router();
var iothub = require('../IoTHub.js');

/* GET colors page. */
router.get('/', function (req, res) {
    res.render('colors', { title: 'Colors' });
});

router.post('/', function (req, res) {
    var method = req.body.method;
    
    console.log("method: " + method);

    if (method == "rainbow") {
        iothub.sendMessage("rainbow");
    }
    else if (method == "rainbowCycle") {
        iothub.sendMessage("rainbowCycle");
    }
    else if (method == "rgbWipeCycle") {
        console.log("sending rgbWipeCycle");
        iothub.sendMessage("rgbWipeCycle");
    }
    else if (method == "stop") {
        console.log("sending stop");
        iothub.sendMessage("stop");
    }
    else if (method == "holidayWipe") {
        console.log("sending holidayWipe");
        iothub.sendMessage("holidayWipe");
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

