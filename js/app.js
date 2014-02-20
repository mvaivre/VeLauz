angular.module('VeLauz', ['ionic'])

.controller('VelauzControl', function($scope) {
	$scope.tasks = [
		{ title: 'Collect coins' },
		{ title: 'Eat mushrooms' },
		{ title: 'Get high enough to grab the flag' },
		{ title: 'Find the Princess' }
	];
  
	$scope.toggleMenu = function() {
		$scope.sideMenuController.toggleLeft();
	};

});