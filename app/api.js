'use strict';

var express = require('express'),
    apiApp = express(),
    requireDir = require('require-dir'),
    logger = require('util'),
    bodyParser = require('body-parser');

apiApp.use(bodyParser.json());

apiApp.all('/*', function (req, res, next) {
    logger.log(req.method + ' ' + req.url);
    next();
});

apiApp.use(function(err, req, res, next) {
    logger.error('Error while calling ' + req.method + ' ' + req.url);
    logger.error(logger.inspect(req.headers));
    logger.error(logger.inspect(req.body));
    logger.error('Error is:');
    logger.error(logger.inspect(err));
    logger.error(err.status);
    logger.error(err.stack);
    res.send(500);
});



var controllers = requireDir(__dirname + '/controllers', {recurse: true});

for(var controller in controllers) {
    controllers[controller](apiApp);
}

module.exports = apiApp;
