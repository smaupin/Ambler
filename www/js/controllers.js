angular.module('ambler.controllers', [])

.controller('MapCtrl', function($scope, $state) { //$cordovaGeolocation

  var directionsDisplay,
      directionsService = new google.maps.DirectionsService(),
      map;
  var mapOptions,
      userPin,
      wayPoints = [],
      userLoc;

  //GEOLOCATION
  navigator.geolocation.getCurrentPosition(function(position) {
    userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    mapOptions = {
      zoom:13,
      center: userLoc,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    initMap();
  });

  function initMap() {
    mapOptions = mapOptions;
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    directionsDisplay = new google.maps.DirectionsRenderer({map: $scope.map});
    var stepDisplay = new google.maps.InfoWindow();


    // userPin = new google.maps.Marker({
    //   position: userLoc,
    //   map: $scope.map,
    //   animation: google.maps.Animation.DROP,
    //   infoWindow: new google.maps.InfoWindow({
    //     content: "That's Me!"
    //   }),
    // });

    // var ferryPin = new google.maps.Marker({
    //   position: new google.maps.LatLng(37.795800, -122.393459),
    //   map: $scope.map,
    //   animation: google.maps.Animation.DROP,
    //   infoWindow: new google.maps.InfoWindow({
    //     content: "Ferry Building"
    //   }),
    // });

    // var bobaPin = new google.maps.Marker({
    //   position: new google.maps.LatLng(37.789987, -122.407287),
    //   map: $scope.map,
    //   animation: google.maps.Animation.DROP,
    //   infoWindow: new google.maps.InfoWindow({
    //     content: "Boba Guys"
    //   }),
    // });

    // google.maps.event.addListener(userPin, 'click', function () {
    //   userPin.infoWindow.open($scope.map, userPin);
    // });

    // google.maps.event.addListener(ferryPin, 'click', function () {
    //   ferryPin.infoWindow.open($scope.map, ferryPin);
    // });

    // google.maps.event.addListener(bobaPin, 'click', function () {
    //   bobaPin.infoWindow.open($scope.map, bobaPin);
    // });

    directionsDisplay.setMap($scope.map);

    calcAndDisplayRoute(directionsDisplay, directionsService, wayPoints, map);
  }

  function calcAndDisplayRoute(directionsDisplay, directionsService, wayPoints, map) {
    var start = userLoc, //ideally geolocation or search field
        end = new google.maps.LatLng(37.795800, -122.393459); //ideally last point in wayPoints array
        wayPoints = [{location: {"lat": 37.796997, "lng": -122.400033}, stopover: true},
                     {location: {"lat": 37.794097, "lng": -122.404925}, stopover: true},
                     {location: {"lat": 37.783115, "lng": -122.389071}, stopover: true},
                     {location: {"lat": 37.794920, "lng": -122.397313}, stopover: true}];

    var request = {
      origin: start,
      destination: end,
      waypoints: wayPoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.WALKING
    };

    directionsService.route(request, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        // console.log("direction route is good to go");
      } else {
        window.alert('Directions request failed due to ' + status);
        // console.log("cannot display route");
      }
    });
  }


}) //MapCtrl

.controller('HomeCtrl', ['$scope', function($scope) {
  // input and autocomplete used to search address in google maps
  var input = document.getElementById('address');
  // var options = {
  //   bounds: defaultBounds,
  //   types: ['establishment']
  // };

  startAdd = new google.maps.places.Autocomplete(input);

  $scope.submit = function() {
    if (startAdd) {
      // use address
      // console.log(new google.maps.places.Autocomplete(input));
      // console.log(startAdd);
      // console.log(startAdd.gm_bindings_.types["7"].Rd["R"]);
      console.log(startAdd.gm_bindings_.types["7"].Rd); // then place: - formatted_address
      // console.log(typeof startAdd.gm_bindings_.types["7"].Rd);
      // console.log(startAdd.gm_bindings_.types["7"].Rd['$']);
      // console.log(startAdd.gm_bindings_.types["7"].Rd['R']);
      // console.log(startAdd.gm_bindings_.types["7"].Rd['T']);***
      // console.log(startAdd.gm_bindings_.types["7"].Rd['U']);
      // console.log(startAdd.gm_bindings_.types["7"].Rd['V']);
      // console.log(startAdd.gm_bindings_.types["7"].Rd['gm_bindings_']);
      // console.log(startAdd.gm_bindings_.types["7"].Rd['formattedPrediction']);
      // console.log(startAdd.gm_bindings_.types["7"].Rd['gm_bindings_']);
      // console.log(startAdd.gm_bindings_.types["7"].Rd.['place']);***
      // when the dot/bracket notation above gives us 'formatted address' save it as a variable
      startPoint = "225 Bush St, San Francisco, CA 94104, USA" // for the time being, this is hardcoded, instead of the code from the console log.
      // console.log(startPoint);

    }
    else {
      console.log("please input address")
    }
  }
}]); // homeCtrl

// BELOW IS THE EXAMPLE FROM THE ANGULAR DOCS
    // .controller('ExampleController', ['$scope', function($scope) {
    //   $scope.list = [];
    //   $scope.text = 'hello';
    //   $scope.submit = function() {
    //     if ($scope.text) {
    //       $scope.list.push(this.text);
    //       $scope.text = '';
    //     }
    //   };
    // }]);

// .controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
//       // $scope.list = [];
//       // $scope.text = 'hello';
//       $scope.submit = function(address) {
//         console.log("homectrl works")
//         // if ($scope.text) {
//           // $scope.list.push(this.text);
//           // $scope.text = '';
//         // }
//       };
//     }]); // homeCtrl








//////////////// ITERATION 1 CODE (W/ CORDOVA) //////////////////

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
  //   console.log("Could not get location");
  // });
