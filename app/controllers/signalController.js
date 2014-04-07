angular.module('signal_controller', ['ionic'])

.controller('signalController', function($scope, $ionicModal) {

  // Load the modal from the given template URL
  $ionicModal.fromTemplateUrl('app/partials/signalProblem.html', function(modal) {
    $scope.modal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });


  $scope.openSignal = function() {
    $scope.modal.show();
  };
  $scope.closeSignal = function() {
    $scope.modal.hide();
  };

  //Be sure to cleanup the modal
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});