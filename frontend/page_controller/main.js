script(src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js")

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.firstName = "John";
	$scope.lastName = "Doe";
});