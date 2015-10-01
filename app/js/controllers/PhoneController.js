digitApp.controller('PhoneCtrl', ['$scope', '$http', '$location', 'phones', '$routeParams', function ($scope, $http, phones, $location, $routeParams) {
	$scope.phoneId = $routeParams.phoneId;

	var url = 'phones/'+$routeParams.phoneId+'.json';

	  $http.get(url).success(function(data) {
	    $scope.phone = data;
	    $scope.mainImageUrl = data.images[0];
	  });

	  $scope.setImage = function(imageUrl) {
	    $scope.mainImageUrl = imageUrl;
	  }
}]);