angular.module('ambler')
.factory('homeService', homeService);

homeService.$inject = [];

function homeService() {
	var factory = {};
	factory.locations = [];
  console.log("homeService is connected!");

	return factory;
}
