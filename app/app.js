/*Here are defined the MAIN module, routes and controller driving the app*/
/*The other controllers/directives/factories can be found in the app folder*/

//Global module, containing the other modules
var VeLauz = angular.module('VeLauz', [
	'ionic',
  'ngCookies',
  'ui.router',
	'main_controllers',
  'login',
  'signal_controller',
  'menu_service',
  'urlutils_service',
  'map_controller',
  'map_directive',
  'geolocation_directive',
  'record_directive'
  ])

.config(function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

//Define constants

.constant('globalOptions', {
  serviceUrl:  location.origin 
})

// Source of auth process :
//https://github.com/fnakstad/angular-client-side-auth/blob/master/client/js/app.js  -> thank you very much !

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  var access = routingConfig.accessLevels;

  // Public routes
  $stateProvider
  .state('public', {
    abstract: true,
    template: "<ui-view/>",
    data: {
      access: access.public
    }
  })
  .state('public.404', {
    url: '/404/',
    templateUrl: 'app/partials/404.html'
  })
  .state('public.login', {
    url: '/login/',
    templateUrl: 'app/partials/login.html',
    controller: 'loginController'
  })
  .state('public.register', {
    url: '/register/',
    templateUrl: 'register',
    controller: 'registerController'
  });

  // Loged in user routes
  $stateProvider
  .state('user', {
    abstract: true,
    template: "<ui-view/>",
    data: {
      access: access.user
    }
  })
  .state('user.map', {
    url: '/map/',
    templateUrl: 'app/partials/private/map.html',
    controller: 'mapController'
  })
  .state('user.tracks', {
    url: '/tracks/',
    templateUrl: 'app/partials/private/tracks.html'
  });

  //$urlRouterProvider.otherwise('/404');

  // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
  $urlRouterProvider.rule(function($injector, $location) {
    if($location.protocol() === 'file')
      return;

    var path = $location.path()
      // Note: misnomer. This returns a query object, not a search string
      , search = $location.search()
      , params
      ;

      // check to see if the path already ends in '/'
      if (path[path.length - 1] === '/') {
        return;
      }

      // If there was no search string / query params, return with a `/`
      if (Object.keys(search).length === 0) {
        return path + '/';
      }

      // Otherwise build the search string and return a `/?` prefix
      params = [];
      angular.forEach(search, function(v, k){
        params.push(k + '=' + v);
      });
      return path + '/?' + params.join('&');
    });

  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push(function($q, $location) {
    return {
      'responseError': function(response) {
        if(response.status === 401 || response.status === 403) {
          $location.path('/login');
        }
        return $q.reject(response);
      }
    };
  });

}])


.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {

  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
    if (!Auth.authorize(toState.data.access)) {
      $rootScope.error = "Seems like you tried accessing a route you don't have access to...";
      event.preventDefault();

      if(fromState.url === '^') {
        if(Auth.isLoggedIn()) {
          $state.go('user.map');
        } else {
          $rootScope.error = null;
          $state.go('public.login');
        }
      }
    }
  });

}]);

