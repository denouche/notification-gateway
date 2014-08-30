'use strict';

var logger = require('util'),
    senders = {
        sms: require('../services/Sms'),
        email: require('../services/Email')
    };


module.exports = function (app) {
	
    app.get('/notification/monitoring', function (req, res) {
        res.send(200);
    });

    app.post('/notification/:type', function (req, res) {
        if(req.params.type && senders[req.params.type]) {
            senders[req.params.type].send(req.body).then(function (value) {
                res.send(200);
            }, function (reason) {
                logger.error("error");
                logger.error(reason);
                res.send(500);
            });
        }
        else {
            res.send(500);
        }
    });

};
