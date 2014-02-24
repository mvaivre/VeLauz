var module = angular.module('custom_map_directive', []); 


module.directive('customMap', function() {
  return {
    restrict: 'A',   
    scope: {
      map: '=customMapMap' 
    },
    link: function(scope, element, attrs) { //(element c'est l'élement sur lequel ta directive se trouve)
      //(ici tu plantes tous ce dont tu as besoin...)
      var map = scope.map;

      var view = map.getView();

      map.setTarget(element[0]); //donnes un target à ta map
    }
  };    
});