notification-gateway
====================

A little Node.JS application that allow to send SMS or Email notifications


SMS
---

You need to have a 3G dongle correctly configured on your computer.

To send SMS this application will use the "gammu-smsd-inject" command, so you need to install gammu-smsd it and to configure it correctly for the user which will run the application (typically configure /etc/gammu-smsdrc and add your user to the 'gammu' group).

Email
-----

To send emails this application will use the "mutt" command, so you need to install it and to configure it correctly for the user which will run the application (typically configure ~/.muttrc for your SMTP configuration).

Examples
--------

```
curl -s -X POST -H 'Content-Type: application/json' --data '{"message":"Hello, World!", "recipient":"0607080900"}' http://127.0.0.1:3000/notification/sms
```

```
curl -s -X POST -H 'Content-Type: application/json' --data '{"message":"Hello, World!", "recipient":"email@example.org"}' http://127.0.0.1:3000/notification/email
```
