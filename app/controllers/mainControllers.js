'use strict';

// Here are the controllers defining navigation behaviour, animations... and the map !
angular.module('main_controllers',[])


.controller('mainController', function ($scope, phonegapReady) {
	
	// The map object is central, as several directive/service could reference it. 

	var map = new ol.Map({
		layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM()
		})
		],
		renderer: 'canvas',
		view: new ol.View2D({
			center: ol.proj.transform([6.634, 46.519], 'EPSG:4326', 'EPSG:3857'),
			zoom: 12
		}),
		ol3Logo: false,
		controls: []
	});

	$scope.map = map;


	// ----- Defines the animations provided by the Ionic framework ----- //
	/*$scope.toggleMenu = function() {
		$scope.sideMenuController.toggleLeft();
	};
*/
	// ----- Define the list on the left ----- //
	//$scope.items = ['Carte', 'Mes trajets', 'Problèmes signalés', 'Statistiques','Evènements PRO VELO', 'Contact', 'Déconnexion'];

})

.controller('menuController', function ($scope, $location, menuService) {
    // "menuService" is a service returning mock data (services.js)
    $scope.list = menuService.all();

    $scope.goTo = function(page) {
    	console.log('Going to ' + page);
    	$scope.sideMenuController.toggleLeft();
    	$location.url('/' + page);
    };
})



.controller('mapController', function ($scope) {
	$scope.navTitle = "Carte Velauz";

	$scope.leftButtons = [{
		type: 'button icon ion-navicon',
		tap: function(e) {
			$scope.sideMenuController.toggleLeft();
		}
	}];

	$scope.rightButtons = [{
		type: 'button icon ion-alert-circled',
		tap: function(e) {
			openModal();
		}
	}];
})


.controller('tracksController', function ($scope) {
	$scope.navTitle = "Mes parcours";

	$scope.leftButtons = [{
		type: 'button icon ion-navicon',
		tap: function(e) {
			$scope.sideMenuController.toggleLeft();
		}
	}];

	$scope.rightButtons = [];

})