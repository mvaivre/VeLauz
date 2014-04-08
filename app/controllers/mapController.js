angular.module('map_controller', ['ionic'])

.controller('mapController', function ($scope, $ionicModal) {

	// Load the modal to add a new problem
	$ionicModal.fromTemplateUrl('app/partials/signalProblem.html', function(modal) {
	    $scope.modal = modal;
	}, {
	    scope: $scope,
	    animation: 'slide-in-up'
	});


	$scope.openSignal = function() {
	    $scope.modal.show();
	};
	$scope.closeSignal = function() {
	    $scope.modal.hide();
	};

	//Be sure to cleanup the modal
	$scope.$on('$destroy', function() {
	    $scope.modal.remove();
	});
});