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


var controllers = requireDir(__dirname + '/controllers', {recurse: true});

for(var controller in controllers) {
    controllers[controller](apiApp);
}

module.exports = apiApp;
