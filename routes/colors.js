'use strict';
var express = require('express');
var router = express.Router();

var iothub = require('../IoTHub.js');

/* GET colors page. */
router.get('/', function (req, res) {
    res.render('colors', { title: 'Colors' });
});

//TODO WHY DO I HAVE TWO ROUTES FOR THE SAME THING BRAIN!?
router.post('/', function (req, res) {
    // console.log("rainbow: " + req.body.rainbow);

    // if(req.body.rainbow == "start") {
    //     console.log("sending start");
    //     iothub.sendMessage("start");
    // }
    // else if (req.body.rainbow == "rainbow"){
    //     console.log("sending rainbow");                
    //     iothub.sendMessage("rainbow");
    // }
    // else if(req.body.rainbow == "rainbowCycle") {
    //     console.log("sending rainbowCycle");                
    //     iothub.sendMessage("rainbowCycle");
    // }
    // else if(req.body.rainbow == "stop") {
    //     console.log("sending stop");        
    //     iothub.sendMessage("stop");
    // }
    // else {
    //     console.log("ELSE");
        
    //     var rgb = {
    //         red: req.body.red,
    //         green: req.body.green,
    //         blue : req.body.blue
    //     };

    //     if (rgb.red == '') {
    //         console.log("empty");
    //     }
    //     else {
    //         console.log("color: " + JSON.stringify(rgb));
    //         iothub.sendMessage(rgb);
    //     }
    // }
   
    res.render('colors', { title: 'Colors' });
});

module.exports = router;
