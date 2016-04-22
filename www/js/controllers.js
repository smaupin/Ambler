angular.module('ambler.controllers', [])  

.controller('MapCtrl', function($scope, $state) { //$cordovaGeolocation

  //GEOLOCATION
  navigator.geolocation.getCurrentPosition(function(position) {
    var userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var userPin = new google.maps.Marker({
      position: userLoc,
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      infoWindow: new google.maps.InfoWindow({
        content: "That's Me!"
      }),
    });

    google.maps.event.addListener(userPin, 'click', function () {
      userPin.infoWindow.open($scope.map, userPin);
    });     
  });

  var directionsDisplay,
      directionsService = new google.maps.DirectionsService(),
      map,
      infoWindow;

  function initMap() {
    directionsDisplay = new google.maps.DirectionsRenderer();

    var mapOptions = {
      zoom:14,
      center: GA, //user location
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    var ferryPin = new google.maps.Marker({
      position: new google.maps.LatLng(37.795800, -122.393459),
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      infoWindow: new google.maps.InfoWindow({
        content: "Ferry Building"
      }),
    });

    var bobaPin = new google.maps.Marker({
      position: new google.maps.LatLng(37.789987, -122.407287),
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      infoWindow: new google.maps.InfoWindow({
        content: "Boba Guys"
      }),
    });

    google.maps.event.addListener(ferryPin, 'click', function () {
      ferryPin.infoWindow.open($scope.map, ferryPin);
    });

    google.maps.event.addListener(bobaPin, 'click', function () {
      bobaPin.infoWindow.open($scope.map, bobaPin);
    });

    directionsDisplay.setMap(map);
  }

  // function calcRoute() {
  //   var start = document.getElementById("start").value, //geolocation or search field
  //       end = document.getElementById("end").value; //last point in wayPoints array
  //       wayPoints = [];

  //   var request = {
  //     origin:start,
  //     destination:end,
  //     travelMode: google.maps.TravelMode.DRIVING
  //   };
  //   directionsService.route(request, function(result, status) {
  //     if (status == google.maps.DirectionsStatus.OK) {
  //       directionsDisplay.setDirections(result);
  //     }
  //   });
  // }

  initMap();

});










  // var options = {enableHighAccuracy: true}; //timeout: 10000,
   
  //GEOLOCATION
  // $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    
    //LAT/LONG FOR GEOLOCATION & WOTHER PINS
  //   var userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
  //       ferryLoc = new google.maps.LatLng(37.795800, -122.393459),
  //       bobaLoc = new google.maps.LatLng(37.789987, -122.407287);

  //   //SETS HOW MAP WILL APPEAR WHEN LOADED
  //   var mapOptions = {
  //     center: userLoc,
  //     zoom: 14,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
 
  //   //INJECTS MAP WITH "mapOtions" SETTINGS INTO #ID DIV IN HTML
  //   $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //   google.maps.event.addListenerOnce($scope.map, 'idle', function(){
      
  //     //DROPS PIN ON CURRENT LOCATION (GEOLOCATION)
  //     var userPin = new google.maps.Marker({
  //       map: $scope.map,
  //       animation: google.maps.Animation.DROP,
  //       position: userLoc
  //     });      
     
  //     var userWindow = new google.maps.InfoWindow({
  //       content: "Here I am!"
  //     });

  //     //DROPS PIN ON 2ND+ LOCATION
  //     var ferryPin = new google.maps.Marker({
  //       map: $scope.map,
  //       animation: google.maps.Animation.DROP,
  //       position: ferryLoc
  //     });

  //     var ferryWindow = new google.maps.InfoWindow({
  //       content: "Ferry Building"
  //     });

  //     var bobaPin = new google.maps.Marker({
  //       map: $scope.map,
  //       animation: google.maps.Animation.DROP,
  //       position: bobaLoc
  //     });

  //     var bobaWindow = new google.maps.InfoWindow({
  //       content: "Boba Guys"
  //     });
     
  //     //CLICK LISTENERS FOR PIN INFO WINDOWS
  //     google.maps.event.addListener(userPin, 'click', function () {
  //       userWindow.open($scope.map, userPin);
  //     });

  //     google.maps.event.addListener(ferryPin, 'click', function () {
  //       ferryWindow.open($scope.map, ferryPin);
  //     });

  //     google.maps.event.addListener(bobaPin, 'click', function () {
  //       bobaWindow.open($scope.map, bobaPin);
  //     });

  //     //WALKING DIRECTIONS

  //   }); //closes addListenerOnce

  //   //ERROR IF USER DOES NOT ALLOW GEOLOCATION
  // }, function(error){
  //   console.log("Could n get location");
  // });