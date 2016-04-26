// angular.module('ambler')

// .controller('ViewCtrl', function($scope) {

// 	// // FOR EACH LOOP VERSION
	// $scope.locations.forEach(function (location) {
	// 	// array_of_spots.push($scope.locations[i].address);
	// 	getCoordinates(location.address, function(coordinates) {
	// 		console.log(coordinates)
	// 	});
	// });

// 	array_of_spots = [];
// 	i = 0;
// 	$scope.locations.forEach(function(location) {
// 		// console.log("address found " + $scope.locations[i].address + " i = " + (i));
// 		array_of_spots.push($scope.locations[i].address);
// 		// console.log(location.address);
// 		i = i+1;
// 	});
// 	console.log(array_of_spots);

// // for (j=0; j<array_of_spots.length; j+=1) {
// 	getCoordinates(array_of_spots[i], function(coordinates) {
// 		console.log(coordinates);
// 	});
// }

	// function getCoordinates (address, callback) {
	// 	// for (i in address) {
	// 		var coordinates;
	// 		var geocoder = new google.maps.Geocoder();
	// 		if (geocoder) {
	// 			geocoder.geocode({ address: address}, function (results, status) {
	// 				// console.log(results);
	// 				var coords_obj = results[0].geometry.location;
	// 				var coords_address = results[0].formatted_address;
	// 				coordinates = [coords_obj.lat(), coords_obj.lng(), coords_address];

	// 				callback(coordinates);
	// 			});
	// 		}

	// 	// };
 //  } // close getCoordinates function

// }); //ViewCtrl