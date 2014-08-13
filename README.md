notification-gateway
====================

A little Node.JS application that allow to send SMS or Email notifications


SMS
---

You need to have a 3G dongle correctly configured on your computer.

To send SMS this application will use the "gammu" command, so you need to install it and to configure it correctly for the user which will run the application.

Email
-----

To send emails this application will use the "mutt" command, so you need to install it and to configure it correctly for the user which will run the application.

Examples
--------

```
curl -s -X POST -H 'Content-Type: application/json' --data '{"message":"Hello, World!", "recipient":"0649810250"}' http://127.0.0.1:3000/notification/sms
```

```
curl -s -X POST -H 'Content-Type: application/json' --data '{"message":"Hello, World!", "recipient":"email@example.org"}' http://127.0.0.1:3000/notification/email
```
