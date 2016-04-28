angular.module('ambler')

.controller('SplashCtrl', function($scope, $state, dataService) {
  $scope.start = function () {
    $state.go('home');
  };
})// SplashCtrl

.controller('HomeCtrl', function($scope, $state, dataService, homeService, $ionicSideMenuDelegate) {
  $scope.locations = dataService.locations;
  // input and autocomplete used to search address in google maps
  var input = document.getElementById('address');
  var coordinates;

  startAdd = new google.maps.places.Autocomplete(input);
  // google.maps.event.addDomListener(window, "load", initMap);
  $scope.submit = function() {
    if (startAdd.gm_bindings_.types["7"].Rd.T.length > 0) { // this just makes sure they typed *something*

      // use address
      // console.log("startAdd = " + startAdd);
      // console.log(startAdd.gm_bindings_.types["7"].Rd['gm_bindings_'].place["4"].Rd.input); // THANK YOU ISOM

      // when the dot/bracket notation above gives us 'formatted address' save it as a variable
      // startPoint = "225 Bush St, San Francisco, CA 94104, USA"; // for the time being, this is hardcoded, instead of the code from the console log.
      startPoint = startAdd.gm_bindings_.types["7"].Rd['gm_bindings_'].place["4"].Rd.input; // sets startPoint as the address String.
      // console.log("startPoint = " + startPoint); // works
    }
    else {
      console.log("Not Found: please retype address");
    }

    function getCoordinates (address, callback) {
        var coordinates;
        var geocoder = new google.maps.Geocoder();
        if (geocoder) {
          geocoder.geocode({ address: address}, function (results, status) {
            // console.log("Results = " + results);
            var coords_obj = results[0].geometry.location;
            var coords_address = results[0].formatted_address;
            coordinates = [coords_obj.lat(), coords_obj.lng()];

            callback(coordinates);
          });
        }
    } // close getCoordinates function

    // This function will take the string address found in the autocomplete from Home page and return coordinates,
    // then it will take the coordinates, feed them to the homeFactory.js homeService and change the page to check.html
    getCoordinates(startPoint, function(coordinates) {
    		console.log("coordinates = " + coordinates);
        homeService.catchLocation(coordinates);
        $state.go('check');
    	});
  }; //closes $scope.submit
})// HomeCtrl

.controller('CheckCtrl', function($scope, $state, dataService, homeService, $ionicSideMenuDelegate) {
  $scope.locations = dataService.locations;
  // $scope.spot = {};
  $scope.$back = function() {
    window.history.back();
  };
  // console.log($scope.locations);

  $scope.goAmble = function() {
    $state.go('map');
    console.log($scope.chosen);
  };

  // $scope.toggleRight = function() {
  //   $ionicSideMenuDelegate.toggleRight();
  // };

  findFiveClosest();
  // console.log("closest = " + closest);

  var spots = [];

  // loops through places given in the array 'closest' and matches them with records in the dataFactory
  for (i=0; i < closest.length; i++) {
    shortList = $scope.locations[[closest[i][0]]-1];
    spots.push(shortList);
  }
  $scope.spots = spots; //THIS IS OUR ARRAY 5 CLOSEST POINTS

  $scope.chosenSpots = homeService.hold[0];

  $scope.chosen = [];

  $scope.toggleChosen = function toggleChosen(spot) {
    var idx = $scope.chosen.indexOf(spot);
    // console.log(spotName + " has been checked");

    // is currently selected
    if (idx > -1) {
      $scope.chosen.splice(idx, 1);
      console.log(spot.name + " has been spliced out of chosen");
    }

    // is newly selected
    else {
      $scope.chosen.push(spot);
      console.log(spot.name + " has been pushed into chosen");
    }

    homeService.sendChosen($scope.chosen);

  };


  $scope.seeSpot = function(spot) {
    console.log(spot);
    $state.go('spot', {"spot": spot});

    homeService.sendSpot(spot);


    // $scope.spot = spot;
    // $scope.spot = ($scope.selection).getById($stateParams.id);
  };

  $scope.spot = homeService.display[0];

  function findFiveClosest() {
    // var hardcodedPoint = new google.maps.LatLng(17.790941, -122); //******** NEED TO CONNECT TO GEOLOCATION AND START ADDRESS SOMEHOW ********//
    var centerPoint = new google.maps.LatLng(homeService.list[0][0], homeService.list[0][1]);
    // console.log("centerPoint = " + centerPoint);
    // console.log("homeService.list = " + homeService.list);

    closest = findClosestN(centerPoint,10);
        closest = closest.splice(0,5);
  }//closes findFiveClosest

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
  } // closes findClosestN

  function sortByDist(a,b) {
     return (a[1] - b[1]);
  }//closes sortByDist
}) //closes CheckCtrl

.controller('MapCtrl', function($scope, $state, dataService, homeService, $ionicSideMenuDelegate) { //$cordovaGeolocation
  // $state.go("check")
  $scope.locations = dataService.locations;
  // console.log($scope.locations);

  $scope.$back = function() {
    window.history.back();
  };

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

    // This will trigger on the use current location button and then capture those lat and lng and trnsfer page to check.html with them in tow.
    $scope.getUserLoc = function () {
      // console.log(userLoc);
      // console.log(userLoc.lat());
      // console.log(userLoc.lng());
      userLocObj = [userLoc.lat(), userLoc.lng()];
      homeService.catchLocation(userLocObj);
      $state.go('check');
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

    // vvvvvv commented out lines are for the end and start being identical -- making it a loop vvv
    var start = new google.maps.LatLng(homeService.list[0][0], homeService.list[0][1]),
        end = new google.maps.LatLng(homeService.list[0][0], homeService.list[0][1]), // same as start - loop.
        wayPoints = [];

    // var start = new google.maps.LatLng(homeService.list[0][0], homeService.list[0][1]),
    //     // end = new google.maps.LatLng(37.795800, -122.393459), //ideally last point in wayPoints array
    //     end = new google.maps.LatLng(homeService.hold[homeService.hold.length-1][0], homeService.hold[homeService.hold.length-1][1]), //ideally last point in wayPoints array
    //     wayPoints = [];

        // console.log("calcAndDisplayRoute thinks userLoc is " + userLoc);
        // console.log("calcAndDisplayRoute thinks coordinates is " + coordinates);


        for (i=0; i<homeService.hold[0].length; i+=1) {
          // console.log(chosen[i].lat, chosen[i].lng + "lat and lng");
          wayPoints.push({location: {"lat": homeService.hold[0][i].lat, "lng": homeService.hold[0][i].lng}, stopover: true});
        }

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
      }//closes else
    });//closes directionsService.route
  }//CLOSES calcAndDisplayRoute

});
