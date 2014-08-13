'use strict';

var logger = require('util'),
    senders = {
        sms: require('../services/Sms'),
        email: require('../services/Email')
    };


module.exports = function (app) {
	
    app.post('/notification/:type', function (req, res) {
        senders[req.params.type].send(req.body).then(function (value) {
            res.send(200);
        }, function (reason) {
            logger.error("error", reason);
            res.send(500);
        });
    });

};
