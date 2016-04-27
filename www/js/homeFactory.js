angular.module('ambler')
.factory('homeService', homeService);









// homeService.$inject = [];
//
function homeService() {
	var factory = {};

	factory.list = [];

	factory.catchLocation = function(e) {
    console.log("e = " + e); // works
		factory.list.push(e);
		console.log("factory.list = " + factory.list);
// //     factory.enteredAddress = e;
// //     // userLocLatLng = e;
// // 		return factory.enteredAddress;
  };


//   // factory.enteredAddy = enteredAddress;
//
//   // factory.userLocLL = userLocLatLng;
//
  // factory.homeServiceVar = "WOKKA WOKKA";
  // console.log("homeService is connected!");
//
// 	// var caughtAddress = {};
	//
	// caughtAddress.list = [];
	//
  // homeservice.add = function(message){
  //   caughtAddress.list.push(e);
  // };


	return factory;
}
