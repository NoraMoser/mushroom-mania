
"use strict";

var app = angular.module("mushroom-mania", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/all-the-shit.html',
		controller: 'MushroomCtrl'
	}).
	otherwise('/option');
});


// routeProvider looks at URL, and displays content based on that