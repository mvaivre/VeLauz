'use strict';

var VeLauz = angular.module('map_main_controller',[]);


//The application main controller
VeLauz.controller('mapMainController', function ($scope, geolocation) {
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
		center: ol.proj.transform([6.634, 46.519], 'EPSG:4326', 'EPSG:3857'),
		zoom: 12
	}),
	ol3Logo: false,
	controls: []
});

$scope.map = map;

//--------------- Geolocation ---------------//


var geolocation = new ol.Geolocation();
// take the projection to use from the map's view
geolocation.bindTo('projection', map.getView());
// listen to changes in position
geolocation.on('change:position', function(evt) {
  window.console.log(geolocation.getPosition());
});

});


