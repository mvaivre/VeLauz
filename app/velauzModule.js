/*Here are defined the MAIN module, routes and controller driving the app*/
/*The other controllers/directives/factories can be found in the app folder*/

//Global module, containing the other modules
var VeLauz = angular.module('VeLauz', [
	'ionic',
	'main_controller',
	'services',
	'map_directive',
	'geolocation_directive'
	]);


//This controller defines the animations provided by the Ionic framework
VeLauz.controller('ionicController', function($scope) {

	$scope.toggleMenu = function() {
		$scope.sideMenuController.toggleLeft();
	};

});
