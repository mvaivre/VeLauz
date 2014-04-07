angular.module('map_controller', ['ionic'])

.controller('mapController', function ($scope) {
	$scope.navTitle = "Vélauz";

	$scope.leftButtons = [{
		type: 'button icon ion-navicon',
		tap: function(e) {
			$scope.sideMenuController.toggleLeft();
		}
	}];

	$scope.rightButtons = [{
		type: 'button icon ion-alert-circled',
		tap: function(e) {
			openSignal();
		}
	}];
})