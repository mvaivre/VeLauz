'use strict';

var VeLauz = angular.module('map_main_controller',[]);


//The application main controller
VeLauz.controller('mapMainController', function ($scope, phonegapReady) {
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

	var view = map.getView(); // Actual view

	var geolocation = new ol.Geolocation();
	geolocation.bindTo('projection', view);

	//-----Activate location on click ----- //
	$scope.locate = function() {

		geolocation.setTracking(true); // Activate geolocation

		var dest = geolocation.getPosition();

		if (dest) {
			var source = view.getCenter();
			var pan = ol.animation.pan({
				duration: 200,
				source: source
			});

			map.beforeRender(pan);
			view.setCenter(dest);
		}

		// Create marker 
		var marker = new ol.Overlay({
			element:  $('<i class="icon ion-location"></i>'),
			positioning: 'center-center',
			stopEvent: false
		});
		map.addOverlay(marker);

		// bind the marker position to the device location.
		marker.bindTo('position', geolocation);

	}

		//Update user position and marker when the position changes
	geolocation.on('change:position', function(evt) {
		$scope.locate(); // Reload function
		//markPosition();
	});


});


