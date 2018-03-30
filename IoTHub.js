var Client = require('azure-iothub').Client;
var Message = require('azure-iot-common').Message;

var connectionString = process.env["connectionString"];
var targetDevice = process.env["targetDevice"];

const deviceId = 'LEDDevice';

module.exports = {
    sendMessage: function (message) {
        var client = Client.fromConnectionString(connectionString);

        client.open(function (err) {
            if (err) {
                console.log('Could not connect: ' + err.message);
            } else {
                console.log('Client connected');
                client.getFeedbackReceiver(receiveFeedback);
                console.log('Sending message: ' + message.getData() + " to " + deviceId);
                client.send(targetDevice, message, printResultFor('send'));
            }
        });
    },

    generateMessage: function (color) {
        var message = new Message(JSON.stringify({
            deviceId: deviceId,
            color: color
        }));
        message.ack = 'full';
        console.log('Generated message: ' + message.getData());
        return message;
    }
}

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
