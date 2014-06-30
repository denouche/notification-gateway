'use strict';

var exec = require('child_process').exec,
    logger = require('util'),
    q = require('q');

function send(message) {
    console.log(message);
    var command = "echo '" + message.message + "' | mutt -s '" + message.subject + "' " + message.recipient,
        deferred = q.defer();

    logger.log("WILL EXECUTE: " + command);

    var child = exec(command, function (error, stdout, stderr) {
        if (error !== null) {
            logger.log('exec error: ' + error);
        }
        deferred.resolve();
    });
    return deferred.promise;
}

exports.send = send;


