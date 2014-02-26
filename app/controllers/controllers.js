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

//Geolocalisation

$scope.getLocation = function () {
	function onSuccess(position) {
		alert('Latitude: '              + position.coords.latitude          + '\n' +
			'Longitude: '             + position.coords.longitude         + '\n' +
			'Altitude: '              + position.coords.altitude          + '\n' +
			'Accuracy: '              + position.coords.accuracy          + '\n' +
			'Altitude Accuracy: '     + position.coords.altitudeAccuracy  + '\n' +
			'Heading: '               + position.coords.heading           + '\n' +
			'Speed: '                 + position.coords.speed             + '\n' +
			'Timestamp: '             + position.timestamp                + '\n');
	};

	function onError() {
		alert('Impossible de déterminer ta position !');
	};

	navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

});


