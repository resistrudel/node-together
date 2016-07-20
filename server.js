// server.js

var port = process.env.PORT || "8000";
var host = process.env.HOST || "0.0.0.0";
var Express = require('express');

var app = Express();

var rules = require('./app');
app.use(rules);
app.listen(port, host);

console.log("Yay it worked!");