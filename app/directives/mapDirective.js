'use strict';

var VeLauz = angular.module('map_directive', []); 


VeLauz.directive('customMap', function(phonegapReady) {
  return {
    restrict: 'A',   
    scope: {
      map: '=' 
    },
    link: function(scope, element, attrs) { 
      var map = scope.map;
      var view = map.getView();

      map.setTarget(element[0]); //donnes un target à ta map


    }
  }   
});