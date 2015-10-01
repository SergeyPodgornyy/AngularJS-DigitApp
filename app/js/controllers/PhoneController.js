digitApp.controller('PhoneCtrl', ['$scope', '$location', 'phones', '$routeParams', function ($scope, phones, $location, $routeParams) {
	$scope.phoneId = $routeParams.phoneId;
}]);