angular.module('ambler.controllers', [])  

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
	var options = {enableHighAccuracy: true}; //timeout: 10000,
	 
  //GEOLOCATION
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    
    //LAT/LONG FOR GEOLOCATION & OTHER PINS
    var userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        ferryLoc = new google.maps.LatLng(37.795800, -122.393459),
        bobaLoc = new google.maps.LatLng(37.789987, -122.407287);

    //SETS HOW MAP WILL APPEAR WHEN LOADED
    var mapOptions = {
      center: userLoc,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    //INJECTS MAP WITH "mapOtions" SETTINGS INTO #ID DIV IN HTML
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
      
      //DROPS PIN ON CURRENT LOCATION (GEOLOCATION)
      var userPin = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: userLoc
      });      
     
      var userWindow = new google.maps.InfoWindow({
        content: "Here I am!"
      });

      //DROPS PIN ON 2ND+ LOCATION
      var ferryPin = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: ferryLoc
      });

      var ferryWindow = new google.maps.InfoWindow({
        content: "Ferry Building"
      });

      var bobaPin = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: bobaLoc
      });

      var bobaWindow = new google.maps.InfoWindow({
        content: "Boba Guys"
      });
     
      //CLICK LISTENERS FOR PIN INFO WINDOWS
      google.maps.event.addListener(userPin, 'click', function () {
        userWindow.open($scope.map, userPin);
      });

      google.maps.event.addListener(ferryPin, 'click', function () {
        ferryWindow.open($scope.map, ferryPin);
      });

      google.maps.event.addListener(bobaPin, 'click', function () {
        bobaWindow.open($scope.map, bobaPin);
      });

      //WALKING DIRECTIONS

    }); //closes addListenerOnce

    //ERROR IF USER DOES NOT ALLOW GEOLOCATION
  }, function(error){
    console.log("Could not get location");
  });

}); //CLOSES MapCtrl