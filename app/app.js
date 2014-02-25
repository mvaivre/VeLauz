/*Here are defined the MAIN module, routes and controller driving the app*/
/*The other controllers/directives/factories can be found in the app folder*/

//We're manually bootstrapping Angular when PhoneGap fires the 'ondeviceready' event.
var velauz = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
    },

    onDeviceReady: function() {
        angular.element(document).ready(function() {
            angular.bootstrap(document);
        });
    },
};

//Global module, containing the other modules
var module= angular.module('VeLauz', [
	'ionic',
	'map_main_controller',
	'custom_map_directive'
	]);


//This controller defines the animations provided by the Ionic framework
module.controller('ionicController', function($scope) {
  
	$scope.toggleMenu = function() {
		$scope.sideMenuController.toggleLeft();
	};

});
