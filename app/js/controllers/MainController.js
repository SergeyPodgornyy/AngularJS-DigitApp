digitApp.controller('MainCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
 	 'status': true},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
 	 'status': false},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
 	 'status': true}
  ];
  $scope.title = 'Phones';
  $scope.sortField = undefined;
  $scope.reverse = false;
  $scope.sort = function(fieldName){
  	if($scope.sortField === fieldName){
  		$scope.reverse = !$scope.reverse;
  	} else {
  		$scope.sortField = fieldName;
  		$scope.reverse = false;
  	}
  };
  $scope.isSortUp = function(fieldName){
  	return $scope.sortField === fieldName && !$scope.reverse;
  }
  $scope.isSortDown = function(fieldName){
  	return $scope.sortField === fieldName && $scope.reverse;
  }
});