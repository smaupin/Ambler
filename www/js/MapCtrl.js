angular.module('ambler')

.controller('SplashCtrl', function($scope, $state, dataService) {
  $scope.start = function () {
    $state.go('home');
  };
})// SplashCtrl

.controller('HomeCtrl', function($scope, dataService) {
  $scope.locations = dataService.locations;
  console.log($scope.locations);
  // // input and autocomplete used to search address in google maps
  // var input = document.getElementById('address');
  // // var options = {c
  // //   bounds: defaultBounds,
  // //   types: ['establishment']
  // // };
  // // startAdd = new google.maps.places.Autocomplete(input);
  // // google.maps.event.addDomListener(window, "load", initMap);
  // $scope.submit = function() {
  //   if (startAdd) {
  //     // use address
  //     // console.log(new google.maps.places.Autocomplete(input));
  //     // console.log(startAdd);
  //     // console.log(startAdd.gm_bindings_.types["7"].Rd["R"]);
  //     console.log(startAdd.gm_bindings_.types["7"].Rd); // then place: - formatted_address
  //     // console.log(typeof startAdd.gm_bindings_.types["7"].Rd);
  //     // console.log(startAdd.gm_bindings_.types["7"].Rd['$']);
  //     // console.log(startAdd.gm_bindings_.types["7"].Rd['R']);
  //     // console.log(startAdd.gm_bindings_.types["7"].Rd['T']);***
  //     // console.log(startAdd.gm_bindings_.types["7"].Rd['U']);
  //     // console.log(startAdd.gm_bindings_.types["7"].Rd['V']);
  //     // console.log(startAdd.gm_bindings_.types["7"].Rd['gm_bindings_']);
  //     // console.log(startAdd.gm_bindings_.types["7"].Rd['formattedPrediction']);
  //     // console.log(startAdd.gm_bindings_.types["7"].Rd['gm_bindings_']);
  //     // console.log(startAdd.gm_bindings_.types["7"].Rd.['place']);***
  //     // when the dot/bracket notation above gives us 'formatted address' save it as a variable
  //     startPoint = "225 Bush St, San Francisco, CA 94104, USA"; // for the time being, this is hardcoded, instead of the code from the console log.
  //     // console.log(startPoint);
  //   }
  //   else {
  //     console.log("please input address");
  //   }
  // };
})// HomeCtrl

.controller('CheckCtrl', function($scope, $state, dataService) {
  $scope.locations = dataService.locations;
  // console.log($scope.locations);

  $scope.goAmble = function () {
    $state.go('map');
  };

  findFiveClosest();
  // console.log("closest = " + closest);

  var selection = [];

  // loops through places given in the array 'closest' and matches them with records in the dataFactory
  for (i=0; i < closest.length; i++) {
    shortList = $scope.locations[[closest[i][0]]-1];
    selection.push(shortList);
  } 
  $scope.selections = selection;

  function findFiveClosest() {

    var hardcodedPoint = new google.maps.LatLng(17.790941, -122); //******** NEED TO CONNECT TO GEOLOCATION SOMEHOW ********//

    closest = findClosestN(hardcodedPoint,10);
        closest = closest.splice(0,5);
  }

  function findClosestN(pt,numberOfResults) {
     var closest = [];

     for (var i = 0; i < $scope.locations.length; i++) {
       tempPoint = new google.maps.LatLng($scope.locations[i].lat, $scope.locations[i].lng);
       $scope.locations[i].distance = google.maps.geometry.spherical.computeDistanceBetween(pt,tempPoint);
      myNewObject = [$scope.locations[i].id, $scope.locations[i].distance];
       closest.push(myNewObject);
     }
     closest.sort(sortByDist);
     return closest;
  }

  function sortByDist(a,b) {
     return (a[1] - b[1]);
  }
})


.controller('MapCtrl', function($scope, $state, dataService) { //$cordovaGeolocation

  $scope.locations = dataService.locations;
  console.log($scope.locations);

  var directionsDisplay,
      directionsService = new google.maps.DirectionsService(),
      map;
  var mapOptions,
      userPin,
      wayPoints = [],
      userLoc,
      geocoder = new google.maps.Geocoder();

  //GEOLOCATION -- init map with geolocation as center of map
  navigator.geolocation.getCurrentPosition(function(position) {
    userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    mapOptions = {
      zoom:13,
      center: userLoc,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.getUserLoc = function () {
      console.log(userLoc);
      // $state.go('view');
    };

    initMap();
  });

  // // init map with a given address as center location.
  // var address = "1011 Stratford, Olathe, KS"
  //
  // getCoordinates(address, function(coords) {
  //   var mapOptions = {
  //     zoom: 16,
  //     center: new google.maps.LatLng(coords[0], coords[1]),
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //
  //   initMap();
  // })
  // function initMap() {
  //   mapOptions = mapOptions;
  //   $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  //   directionsDisplay = new google.maps.DirectionsRenderer({map: $scope.map});
  //   var stepDisplay = new google.maps.InfoWindow();

  function initMap() {
    // var stepDisplay = new google.maps.InfoWindow();
    mapOptions = mapOptions;
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    directionsDisplay = new google.maps.DirectionsRenderer({map: $scope.map});
    // google.maps.event.addDomListener(window, "load", initialize);

  // userPin = new google.maps.Marker({
  //   position: userLoc,
  //   map: $scope.map,
  //   animation: google.maps.Animation.DROP,
  //   infoWindow: new google.maps.InfoWindow({
  //     content: "That's Me!"
  //   }),
  // });

  // google.maps.event.addListener(userPin, 'click', function () {
  //   userPin.infoWindow.open($scope.map, userPin);
  // });

    directionsDisplay.setMap($scope.map);

    calcAndDisplayRoute(directionsDisplay, directionsService, wayPoints, map);
  }//CLOSES initMap

  function calcAndDisplayRoute(directionsDisplay, directionsService, wayPoints, map) {
    var start = userLoc, //ideally geolocation or search field
        end = new google.maps.LatLng(37.795800, -122.393459); //ideally last point in wayPoints array
        wayPoints = [{location: {"lat": 37.796997, "lng": -122.400033}, stopover: true},
                     {location: {"lat": 37.794097, "lng": -122.404925}, stopover: true},
                     // {location: {"lat": 37.783115, "lng": -122.389071}, stopover: true},
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
  }//CLOSES calcAndDisplayRoute

});//MapCtrl
