digitApp.controller('MainCtrl', ['$scope', 'phones', function ($scope, phones) {
  phones.success(function(data){
    $scope.phones = data;
  });

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
}]);