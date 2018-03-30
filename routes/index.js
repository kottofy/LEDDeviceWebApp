'use strict';
var express = require('express');
var router = express.Router();
var iothub = require('../IoTHub.js');
var storage = require('../Storage.js');

/* GET colors page. */
router.get('/', function (req, res) {
    res.render('colors', { title: 'Colors' });
});

router.post('/', function (req, res) {
    var method = req.body.method;
    var message =  "";
    
    console.log("method: " + method);

    if (method == "rainbow") {
        message = method;
    }
    else if (method == "rainbowCycle") {
        message = method;        
    }
    else if (method == "rgbWipeCycle") {
        message = method;        
    }
    else if (method == "stop") {
        message = method;        
    }
    else if (method == "holidayWipe") {
        message = method;        
    }
    else {
        var rgb = {
            red: req.body.red,
            green: req.body.green,
            blue: req.body.blue
        };
        console.log("color: " + JSON.stringify(rgb));
        message = rgb;
    }

    if (message !== "")
    {
        var iotHubMessage = iothub.generateMessage(message);
        iothub.sendMessage(iotHubMessage);
        storage.storeMessage(iotHubMessage.getData());       
    }

    res.render('colors', { title: 'Colors' });
});

module.exports = router;