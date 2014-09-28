'use strict';

var exec = require('child_process').exec,
    logger = require('util'),
    q = require('q');

function send(message) {
    var text = message.message.replace("'", "'\\''"),
        subject = message.subject.replace("'", "'\\''"),
        command = "MESSAGE='" + text + "'; SUBJECT='" + subject + "'; echo \"$MESSAGE\" | mutt -s \"$SUBJECT\" " + message.recipient,
        deferred = q.defer();

    var child = exec(command, function (error, stdout, stderr) {
        if (error !== null) {
            logger.error('exec error: ' + error);
            logger.error('exec stderr: ' + stderr);
            logger.error('exec stdout: ' + stdout);
            logger.error('exec command was: ' + command);
            deferred.reject(new Error(error));
        }
        else {
            deferred.resolve();
        }
    });
    return deferred.promise;
}

exports.send = send;


