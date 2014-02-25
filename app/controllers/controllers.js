var module = angular.module('map_main_controller',[]);


//document.addEventListener("deviceready", createMap, false); //to work with PhoneGap (hopefully)
function createMap() {

	

	return map;
};

//The application main controller
module.controller('mapMainController', ['$scope', function($scope, Plateform) {
// The main controller creates the OpenLayers map object. The map object
// is central, as most directives/components need a reference to it.
	var map = new ol.Map({
		layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM()
		})
		],
		renderer: 'canvas',
		view: new ol.View2D({
			center: ol.proj.transform([6.63, 56.52], 'EPSG:4326', 'EPSG:3857'),
			zoom: 7
		}),
		ol3Logo: false
	});

	$scope.map = map;
}]);



