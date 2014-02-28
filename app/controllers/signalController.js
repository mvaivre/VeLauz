VeLauz = angular.module('signal_controller', []);

VeLauz.controller('signalController', function($scope, $ionicModal) {

  // Load the modal from the given template URL
  $ionicModal.fromTemplateUrl('app/partials/signalProblem.html', function(modal) {
    $scope.modal = modal;
  }, {
    // Use our scope for the scope of the modal to keep it simple
    scope: $scope,
    // The animation we want to use for the modal entrance
    animation: 'slide-in-up'
  });


  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Be sure to cleanup the modal
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
});