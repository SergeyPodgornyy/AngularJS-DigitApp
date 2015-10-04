digitApp.controller('AboutCtrl', ['$scope', 'about', '$location', function ($scope, about, $location) {
	about.success(function(data){
	  $scope.projects = data;
	});
}]);