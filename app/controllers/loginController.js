//http://jpenny.im/pyramid_auth_angular.html
//

angular.module('login_controller', [])

.controller('loginController',$scope, $http, $modal, $rootScope) {
  $scope.dta = {userid: '', password: '', errorMessage: ''};
  $scope.login = function() {
    var params =  {userid: $scope.dta.userid,
        password: $scope.dta.password};
    $http({method: 'POST', url: '/scrap/login', params: params})
      .success(function(data, status, error, config) {
        if (data === 'OK') {
          $rootScope.$broadcast('event:loginSuccess');
        } else {
          $scope.dta.errorMessage = 'Login ou mot de passe invalide !';
        }
      })
      .error(function(data, status, error, config) {
          $scope.dta.errorMessage = 'Backend problem login in.  Contact IT.';
          $rootScope.$broadcast('event:loginRequired');
      });
  };
}
LoginController.inject = ['$scope', '$http', '$modal', '$rootScope'];