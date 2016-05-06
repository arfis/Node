

var beautify = function(data){
	var jsonContent = JSON.parse(data);
	console.log(jsonContent);
	console.log(jsonContent.restaurants.length);
	var array = [];
	for(var i = 0; i < jsonContent.restaurants.length; i++){
		console.log(jsonContent.restaurants[i].restaurant.name);
		array.push(jsonContent.restaurants[i].restaurant.name)
	}
	console.log('this is the array: ' + array);
	return array;
}

module.exports.beautify = beautify;