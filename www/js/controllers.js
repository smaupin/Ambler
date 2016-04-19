angular.module('ambler.controllers', [])

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
	var options = {timeout: 10000, enableHighAccuracy: true};
	 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    
    //THIS SETS LAT/LONG GEOLOCATION
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    //INPUTS MAP WITH MAP OPTIONS INTO DIV.ID MAP
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //WAIT UNTIL MAP IS LOADED
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
     
      var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng
      });      
     
      var infoWindow = new google.maps.InfoWindow({
          content: "Here I am!"
      });
     
      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
      });

    });


 
  }, function(error){
    console.log("Could not get location");
  });


});