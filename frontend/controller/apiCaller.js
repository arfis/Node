/**
 * Created by kristian on 5.5.2016.
 */
var querystring = require('querystring');
var https = require('https');

var host = 'developers.zomato.com';
var apiKey = 'c8c3348fe90d2d59d73cb8f4bde9c8f6';
var apiHeader = "user-key";

https.globalAgent.maxSockets = 100;
function apiCaller(id){
    this.id = id;
}

var performRequest = function (endpoint, data,reqCallback) 
{
    var method = 'GET';
    var dataString = JSON.stringify(data);
    var headers = {'Accept':"application/json"
					,'user-key':apiKey};

    var options = {
        host: host,
        path: endpoint,
        method: method,
        headers: headers
    };
		
    https.request(options, function(res) {
        console.log('statusCode: ', res.statusCode);
        res.setEncoding('utf-8');
		
        var responseString = '';

        res.on('data', function(data) {
          responseString += data;
          console.info('GET result:\n');
					//console.info(data);
					reqCallback(data);
          console.info('\n\nCall completed');
        });
		
		res.on('success', function(data) {
            console.log('result' + data);
			console.info('\n\nCall completed');
        });
		 
		 res.on('error', function(e)
    {
        // Call callback function with the error object which comes from the response
		console.log('this err:' + e);
        callback(e, null);
    });
    }).end();
}

var test = function()
{
	return 'test';
}

function login(){
    call.performRequest("/cities" , "q=New%20York",{
        api_key_id: apiKey
    },function(data) {
        sessionId = data.result.id;
        console.log('Logged in:', sessionId);
    });
}

module.exports = apiCaller;
module.exports.performRequest = performRequest;
module.exports.test = test;