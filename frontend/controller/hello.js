var express = require('express');
var apiCall = require('./apiCaller');
var app = express();
var call = new apiCall(1);
var apiKey = 'c8c3348fe90d2d59d73cb8f4bde9c8f6';

app.set('view engine', 'jade');
app.set('views','../views');

app.get('/', function (req, res) {

	
	res.render('index', { title: 'Hey', message: 'Hello there!'});  
});

app.get('/who', function (req, res) {
	res.render('test', { title: 'Hey', message: 'Hello there!', about: 'whats going on'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
