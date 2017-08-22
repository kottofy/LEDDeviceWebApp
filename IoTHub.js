'use strict';

var Client = require('azure-iothub').Client;
var Message = require('azure-iot-common').Message;

var connectionString = process.env["connectionString"];
var targetDevice = process.env["targetDevice"];

var serviceClient = Client.fromConnectionString(connectionString);

function printResultFor(op) {
    return function printResult(err, res) {
        if (err) console.log(op + ' error: ' + err.toString()); 
        if (res) console.log(op + ' status: ' + res.constructor.name);
    };
}

function receiveFeedback(err, receiver) {
    receiver.on('message', function (msg) {
        console.log('Feedback message:')
        console.log(msg.getData().toString('utf-8'));
    }); 
}

module.exports = {
    sendMessage: function(color) {
        serviceClient.open(function (err) {
            if (err) {
                console.error('Could not connect: ' + err.message);
            } else {
                console.log('Service client connected');
                serviceClient.getFeedbackReceiver(receiveFeedback);
                // var message = new Message(color.toString());
                var message = new Message(JSON.stringify({
                    deviceId: 'LEDDevice',
                    color: color
                }));                
                message.ack = 'full';
                console.log('Sending message: ' + message.getData());
                serviceClient.send(targetDevice, message, printResultFor('send'));
            }
        });
    }
};

