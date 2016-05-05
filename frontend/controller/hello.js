var express = require('express');
var app = express();

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
