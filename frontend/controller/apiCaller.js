/**
 * Created by kristian on 5.5.2016.
 */
var querystring = require('querystring');
var https = require('https');

var host = 'https://developers.zomato.com/api/v2.1';
var apiKey = 'c8c3348fe90d2d59d73cb8f4bde9c8f6';
var sessionId = null;

function apiCaller(id){
    this.id = id;
}


apiCaller.performRequest = function (endpoint, data, success) {
    var method = 'GET';
    var dataString = JSON.stringify(data);
    var headers = {};

    endpoint += '?' + querystring.stringify(data);

    var options = {
        host: host,
        path: endpoint,
        method: method,
        headers: headers
    };

    var req = https.request(options, function(res) {
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('data', function(data) {
            responseString += data;
        });

        res.on('end', function() {
            console.log(responseString);
            var responseObject = JSON.parse(responseString);
            success(responseObject);
        });
    });

    req.write(dataString);
    req.end();

}
module.exports = apiCaller;