'use strict';

// Here are the controllers defining navigation behaviour, animations... and the map !
angular.module('main_controllers',['ionic'])


.controller('mainController', function ($scope, phonegapReady) {
	
	// The map object is central, as several directive/service could reference it. 

	var map = new ol.Map({
		layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM({
				url: 'http://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png' //PhoneGap support
			})
		})
		],
		renderer: 'dom',
		view: new ol.View2D({
			center: ol.proj.transform([6.634, 46.519], 'EPSG:4326', 'EPSG:3857'),
			zoom: 12
		}),
		ol3Logo: false,
		controls: []
	});

	$scope.map = map;

})

.controller('menuController', function ($scope, $location, $ionicSideMenuDelegate, menuService) {
    // "menuService" is a service returning mock data (services.js)
    $scope.list = menuService.all();

    $scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};

    $scope.goTo = function(page) {
    	console.log('Going to ' + page);
    	$ionicSideMenuDelegate.toggleLeft();
    	$location.url('/' + page + '/');
    };
})


.controller('tracksController', function ($scope) {
	

});