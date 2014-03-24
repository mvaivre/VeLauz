/*Here are defined the MAIN module, routes and controller driving the app*/
/*The other controllers/directives/factories can be found in the app folder*/

//Global module, containing the other modules
var VeLauz = angular.module('VeLauz', [
	'ionic',
	'main_controllers',
  'signal_controller',
  'menu_service',
	'urlutils_service',
	'map_directive',
	'geolocation_directive',
  'record_directive'
	])

.config(function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

//Define constants

.constant('globalOptions', {
  serviceUrl:  '/' //ToDo
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('map', {
      url: "/map",
      templateUrl: "app/partials/map.html",
      controller: 'mapController'
    })
    .state('tracks', {
      url: "/tracks",
      templateUrl: "app/partials/tracks.html",
      controller: 'tracksController'
    })
    .state('problems', {
      url: "/problems",
      templateUrl: "userProblems.html",
      controller: 'problemsController'
    })

    // if none of the above are matched, go to this one
    $urlRouterProvider.otherwise("/map");
})
