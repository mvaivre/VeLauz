/*Here are defined the MAIN module, routes and controller driving the app*/
/*The other controllers/directives/factories can be found in the app folder*/

//Global module, containing the other modules
var VeLauz = angular.module('VeLauz', [
	'ionic',
	'main_controllers',
  'login_controller',
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
  serviceUrl:  location.origin //ToDo
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('map', {
      url: "/map",
      templateUrl: "app/partials/map.html",
      controller: 'mapController',
      authenticate: true
    })
    .state('tracks', {
      url: "/tracks",
      templateUrl: "app/partials/tracks.html",
      controller: 'tracksController',
      authenticate: true
    })
    .state('problems', {
      url: "/problems",
      templateUrl: "app/partials/userProblems.html",
      controller: 'problemsController',
      authenticate: true
    })
    .state("login", {
      url: "/login",
      templateUrl: "app/partials/login.html",
      controller: "loginController",
      authenticate: false
    });

    // if none of the above are matched, go to this one
    $urlRouterProvider.otherwise("/map");
})
