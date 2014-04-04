angular.module('menu_service', [])


.factory('menuService', function() {

  var menuItems = [
      { text: 'Carte', iconClass: 'icon ion-map', link: 'map'},
      { text: 'Mes parcours', iconClass: 'icon ion-flag', link: 'tracks'},
      { text: 'Problèmes signalés', iconClass: 'icon ion-alert-circled', link: 'userProblems'},
      { text: 'Evènements PRO VELO', iconClass: 'icon ion-calendar', link: 'proVelo'},
      { text: 'Contact', iconClass: 'icon ion-email', link: 'contact'},
      { text: 'Déconnexion', iconClass: 'icon ion-power', link: 'logout'}
  ];

  return {
    all: function() {
      return menuItems;
    }
  }
});