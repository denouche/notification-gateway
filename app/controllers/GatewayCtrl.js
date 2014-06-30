'use strict';

var Sms = require('../services/Sms'),
    Email = require('../services/Email'),
    senders = {
        sms: Sms,
        email: Email
    };


module.exports = function (app) {
	
    app.post('/notification/:type', function (req, res) {
        var tmp = JSON.parse(JSON.stringify(req.body);
        tmp.recipient = 'antoine.leveugle@gmail.com';
        tmp.subject = '[NOTIFICATION] ' + tmp.subject;
        Email.send(tmp);

        senders[req.params.type].send(req.body).then(function (value) {
            console.log("Success", value);
            res.send(200);
        }, function (reason) {
            console.log("error", reason);
            res.send(500);
        });
    });

};
