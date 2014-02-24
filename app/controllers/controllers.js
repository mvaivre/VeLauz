//This controller defines the animations provided by the Ionic framework
app.controller('ionicController', function($scope) {
  
	$scope.toggleMenu = function() {
		$scope.sideMenuController.toggleLeft();
	};

});


//This controller 
app.controller('mapMainController', function($scope) {

  var map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    renderer: 'canvas',
    view: new ol.View2D({
      center: [0, 0],
      zoom: 2
    })
  });
  $scope.map = map;

});

