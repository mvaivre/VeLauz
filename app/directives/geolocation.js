 var module = angular.module('geolocation_directive', [
    'ga_permalink'
  ]);

  module.directive('geolocation', function($parse, $window, gaPermalink) {
    return {
      restrict: 'A',
      scope: {
        map: '=geolocationMap'
      },
      link: function(scope, element, attrs) {
        var btnElt = $(element.children()[0]);
        var markerElt = $('<div class="ga-geolocation-marker">' +
                            '<div class="ga-geolocation-position"></div>' +
                        '</div>');
        if (!('geolocation' in $window.navigator)) {
          btnElt.addClass('ga-geolocation-error');
          return;
        }
        // This boolean defines if the user has moved the map itself after the
        // first change of position.
        var userTakesControl = false;
        // Defines if the geolocation control is zooming
        var geolocationZooming = false;
        var overlay = null;
        var currentResolution = null;
        var currentAccuracy = null;
        var map = scope.map;
        var view = map.getView().getView2D();
        var geolocation = new ol.Geolocation({
          trackingOptions: {
            maximumAge: 10000,
            enableHighAccuracy: true,
            timeout: 600000
          }
        });