/*Here are defined the MAIN module, routes and controller driving the app*/
/*The other controllers/directives/factories can be found in the app folder*/

//Global module, containing the other modules
var VeLauz = angular.module('VeLauz', [
	'ionic',
	'map_main_controller',
	'services',
	'custom_map_directive'
	]);

//VeLauz.config(function ($compileProvider){
//	$compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
//});

//This controller defines the animations provided by the Ionic framework
VeLauz.controller('ionicController', function($scope) {

	$scope.toggleMenu = function() {
		$scope.sideMenuController.toggleLeft();
	};

});
