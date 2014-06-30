'use strict';

var Sms = require('../services/Sms'),
    Email = require('../services/Email'),
    senders = {
        sms: Sms,
        email: Email
    };


module.exports = function (app) {
	
    app.post('/notification/:type', function (req, res) {
        senders[req.params.type].send(req.body).then(function (value) {
            console.log("Success", value);
            res.send(200);
        }, function (reason) {
            console.log("error", reason);
            res.send(500);
        });
    });

};
