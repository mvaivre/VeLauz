 
var module = angular.module('customMapDirective', []);
 
module.directive('customMap', function() {
  return {
          restrict: 'A',   
          scope: {
            map: '=map' 
          },
          link: function(scope, element, attrs) { //(element c'est l'élement sur lequel ta directive se trouve)
            //(ici tu plantes tous ce dont tu as besoin...)


            map.setTarget(element[0]); //donnes un target à ta map
          };
        });      