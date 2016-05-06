var express = require('express');
var apiCall = require('./apiCaller');
var parser = require('./utilParser');
var app = express();
var apiKey = 'c8c3348fe90d2d59d73cb8f4bde9c8f6';

app.set('view engine', 'jade');
app.set('views','../views');


app.get('/', function (req, res) 
{
	console.log(req.query.name);
	var result;
	apiCall.performRequest('/api/v2.1/search?entity_id=111&entity_type=city&q=name%3D%22priatelia%22&count=10','',function(data){
		var data = parser.beautify(data);
		console.log(data);
		res.render('homeContent', { title: 'Hey', message: JSON.stringify(data)}); 
	});
	
	//apiCall.performRequest('/api/v2.1/cities?city_ids=2','',function(data){
		//res.render('homeContent', { title: 'Hey', message: data});  
	//});

});

app.get('/who', function (req, res) 
{
	res.render('test', { title: 'Hey', message: 'Hello there!', about: 'whats going on'});
});

app.listen(3000, function () 
{
  console.log('Example app listening on port 3000!');
});
