"use strict";
// Control the views
console.log("MushroomCtrl");
let arrayOfMushrooms = [];

app.controller("MushroomCtrl", function($scope, MushroomDirectory){
        // this is like the module exports (FlavorFactory)
        // $scope means it will be tied to html
    console.log("duddee");
	MushroomDirectory.getMushrooms()
	.then(function(itemCollection){
        $scope.mushroom = itemCollection;
        console.log("what are the mushrooms", $scope.mushroom);
     });
//      this is a direct command.


});