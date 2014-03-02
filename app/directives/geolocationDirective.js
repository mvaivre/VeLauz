angular.module('geolocation_directive', [])

.directive('geolocation', function(phonegapReady) {
  return {
    restrict: 'A',
    templateUrl: 'app/partials/geolocation.html',
    scope: {
      map: '=geolocationMap'
    },
    link: function(scope, element, attrs) {
      var map = scope.map;
      var view = map.getView(); // Actual view

      var geolocation = new ol.Geolocation({
        trackingOptions: {
          maximumAge: 10000,
          enableHighAccuracy: true,
          timeout: 600000
        }
      });
      geolocation.bindTo('projection', view);

      // ------- Create marker ------- // 
      var marker = new ol.Overlay({
        element:  $('<i class="icon ion-location"></i>'),
        positioning: 'bottom-center',
        stopEvent: false
      });

      // bind the marker position to the device location.
      marker.bindTo('position', geolocation);
      map.addOverlay(marker);

      //-----Activate location on click, and center view on user ----- //
      scope.locate = function() {

        geolocation.setTracking(true); // Activate geolocation

        var dest = geolocation.getPosition();

        if (dest) {
          var source = view.getCenter(); 
          var pan = ol.animation.pan({
            duration: 200,
            source: source
          });

          map.beforeRender(pan);
          view.setCenter(dest);
        }

      }

       //Update marker when the position changes (NECESSARY ? TEST WITHOUT)
      geolocation.on('change:position', function(evt) {
        marker.bindTo('position', geolocation);
      });

      }

    }
  });