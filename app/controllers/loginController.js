// http://jpenny.im/pyramid_auth_angular.html

angular.module('login', []).config(['$httpProvider', function($httpProvider){
  $httpProvider.responseInterceptors.push([
    '$rootScope', '$q',
    function(scope, $q) {
      return function(promise) {
        return promise.then(success, error);
      };
      function success(response) {
        return response;
      }
      function error(response) {
        if ((response.status === 403) ||
            ((response.config.method === 'JSONP') && (response.status === 0))) {
          var deferred = $q.defer();
          scope.failedRequests.push({
            config: response.config,
            deferred: deferred
          });
          scope.$broadcast('event:loginRequired');
          return deferred.promise;
        } else {
          return $q.reject(response);
        }
      }
    }
  ]);
}])
.run (['$rootScope', '$compile', '$http', '$modal',
      function($rootScope, $compile, $http, $modal){
  $rootScope.failedRequests = [];
  $rootScope.loggedIn = false;
  var m;  // slot for modal
  $rootScope.$on('event:loginRequired', function() {
    m = $modal.open({backdrop: true,
                          templateUrl: 'partials/login.html',
                          controller: LoginController});
  });
  $rootScope.$on('event:loginSuccess', function() {
    m.close();
    for (var i=0; i<$rootScope.failedRequests.length; i++) {
      var request = $rootScope.failedRequests[i];
      $http(request.config)
        .then(function(response) {
          request.deferred.resolve(response);
        });
    }
    $rootScope.failedRequests = [];
  });
}]);

function LoginController($scope, $http, $modal, $rootScope) {
  $scope.dta = {login: '', password: '', errorMessage: ''};
  $scope.login = function() {
    var params =  {login: $scope.dta.login,
        password: $scope.dta.password};
    $http({method: 'POST', url: '/scrap/login', params: params})
      .success(function(data, status, error, config) {
        if (data === 'OK') {
          $rootScope.$broadcast('event:loginSuccess');
        } else {
          $scope.dta.errorMessage = 'Invalid login or password';
        }
      })
      .error(function(data, status, error, config) {
          $scope.dta.errorMessage = 'Backend problem login in.  Contact IT.';
          $rootScope.$broadcast('event:loginRequired');
      });
  };
}
LoginController.inject = ['$scope', '$http', '$modal', '$rootScope'];