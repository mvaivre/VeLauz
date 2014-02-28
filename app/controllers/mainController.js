'use strict';


var VeLauz = angular.module('main_controller',[]);


VeLauz.controller('mainController', function ($scope, phonegapReady) {
	
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


	// ----- Defines the animations provided by the Ionic framework ----- //
	$scope.toggleMenu = function() {
		$scope.sideMenuController.toggleLeft();
	};

	// ----- Define the list on the left ----- //
	$scope.items = ['Carte', 'Mes trajets', 'Problèmes signalés', 'Statistiques','Evènements PRO VELO', 'Contact', 'Déconnexion'];




});