//index.js

//write a rule to say hello
//when I hit /hello

var Express = require('express');
var app = Express();

app.get('/hello', function(request, response) {
	console.log("request to 'hello");
	response.send("Hello!");

})

module.exports = app;
