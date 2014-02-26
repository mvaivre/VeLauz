'use strict';

var VeLauz = angular.module('custom_map_directive', []); 


VeLauz.directive('customMap', function() {
  return {
    restrict: 'A',   
    scope: {
      map: '=customMapMap' 
    },
    link: function(scope, element, attrs) { 
      var map = scope.map;
      var view = map.getView();

      map.setTarget(element[0]); //donnes un target à ta map

      //----------------- Geolocation -----------------//
      var btnElt = element.children()[0];// First div (button)

      var geolocationZooming = false;
      var overlay = null;
      var currentResolution = null;
      var currentAccuracy = null;

      var geolocation = new ol.Geolocation({
        trackingOptions: {
          maximumAge: 10000,
          enableHighAccuracy: true,
          timeout: 600000
        }
      });

    }
  }   
});