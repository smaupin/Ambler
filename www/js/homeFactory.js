angular.module('ambler')
.factory('homeService', homeService);

homeService.$inject = [];

function homeService() {
	var factory = {};
	factory.catchAddress = function(e) {
    // console.log("e = " + e); // works
    // enteredAddress = e;
    // userLocLatLng = e;
  };
  // factory.enteredAddy = enteredAddress;

  // factory.userLocLL = userLocLatLng;

  factory.homeServiceVar = "WOKKA WOKKA";
  // console.log("homeService is connected!");




	return factory;
}
