//index.js

//write a rule to say hello
//when I hit /hello

var Express = require('express');

const motivations = require('motivations');
const pickone = require('pick-one');
console.log(pickone(motivations));


var app = Express();

app.get('/hello', function(request, response) {
	console.log("request to 'hello");
	var motivation = pickone(motivations);
	response.send(motivation);

})

module.exports = app;

