angular.module('VeLauz', ['ionic'])

.controller('VelauzControl', function($scope) {

  
	$scope.toggleMenu = function() {
		$scope.sideMenuController.toggleLeft();
	};

	var contentEl = document.getElementById('content');
	var content = new ionic.views.SideMenuContent({
	  el: contentEl,
	  drag-content: "false"
	});

	var leftMenuEl = document.getElementById('menu-left');
	var leftMenu = new ionic.views.SideMenu({
	  el: leftMenuEl,
	  width: 270
	});


	var sm = new ionic.controllers.SideMenuController({
	  content: content,
	  left: leftMenu
	});

});

