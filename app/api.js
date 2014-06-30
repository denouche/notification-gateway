'use strict';

var express = require('express'),
    apiApp = express(),
    requireDir = require('require-dir'),
    logger = require('util'),
    bodyParser = require('body-parser');

apiApp.use(bodyParser.json());

var controllers = requireDir(__dirname + '/controllers', {recurse: true});

for(var controller in controllers) {
    controllers[controller](apiApp);
}

module.exports = apiApp;
