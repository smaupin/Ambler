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

	factory.hold = [];

	factory.sendChosen = function(e) {
		console.log("e should be CHOSEN, and it is " + e);
		factory.hold.push(e);
		console.log("factory.hold = " + factory.hold);
	}

	return factory;
}//closes function homeService
