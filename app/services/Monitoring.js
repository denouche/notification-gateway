'use strict';

var q = require('q');

function send(message) {
    var deferred = q.defer();
    deferred.resolve();
    return deferred.promise;
}

exports.send = send;


