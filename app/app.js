/*Here are defined the MAIN module, routes and controller driving the app*/
/*The other controllers/directives/factories can be found in the app folder*/

//Global module, containing the other modules
var VeLauz = angular.module('VeLauz', [
	'ionic',
	'main_controller',
	'services',
	'map_directive',
	'geolocation_directive',
  'signal_controller'
	]);


/*
VeLauz.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "home.html",
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "about.html",
      controller: 'AboutCtrl'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "contact.html"
    })

    // if none of the above are matched, go to this one
    $urlRouterProvider.otherwise("/home");
})
*/