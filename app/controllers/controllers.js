'use strict';

var VeLauz = angular.module('map_main_controller',[]);


//The application main controller
VeLauz.controller('mapMainController', ['$scope', function($scope) {
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
		center: ol.proj.transform([6.65, 46.50], 'EPSG:4326', 'EPSG:3857'),
		zoom: 12
	}),
	ol3Logo: false
});

$scope.map = map;
}]);



