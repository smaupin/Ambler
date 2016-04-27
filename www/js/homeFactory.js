angular.module('ambler')
.factory('homeService', homeService);

function homeService() {
	var factory = {};

	factory.list = [];

	factory.catchLocation = function(e) {
    console.log("e = " + e); // works
		factory.list.push(e);
		console.log("factory.list = " + factory.list);

  };//closes factory.catchLocation

	return factory;
}//closes function homeService
