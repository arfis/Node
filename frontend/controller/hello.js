var express = require('express');
var apiCall = require('./apiCaller');
var app = express();
var call = new apiCall(1);
var apiKey = 'c8c3348fe90d2d59d73cb8f4bde9c8f6';

app.set('view engine', 'jade');
app.set('views','../views');

app.get('/', function (req, res) 
{
	var result;
	
	apiCall.performRequest('/api/v2.1/cities?city_ids=2','',function(data){
		res.render('index', { title: 'Hey', message: data});  
	});
	var tResult = apiCall.test();
	
	console.log('test result is: ' + tResult);
	console.log('this is the result:' + result);
});

app.get('/who', function (req, res) 
{
	res.render('test', { title: 'Hey', message: 'Hello there!', about: 'whats going on'});
});

app.listen(3000, function () 
{
  console.log('Example app listening on port 3000!');
});
