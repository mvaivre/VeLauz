'use strict';

angular.module('record_directive', [])

.directive('recordTrack', function(phonegapReady) {
 return {
    restrict: 'A',
    templateUrl: 'app/partials/record.html',
    scope: {
      map: '=recordMap'
    },
    link: function(scope, element, attrs) {
		var map = scope.map;
		var view = map.getView();

		scope.record = function() {
		}
    }
  }   
});