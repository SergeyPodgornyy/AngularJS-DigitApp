digitApp.controller('MainCtrl', function ($scope, $http) {
  $http.get('phones/phones.json').success(function(data, status, headers, config){
    console.log('This is data: ',data,'\n\nThis is status: ', status,'\n\nThis is headers: ',headers,'\n\nThis is config: ',config);
    $scope.phones = data;
  }).error(function(err){
    return err;
  });

  // $http.get(url, [config]);
  // $http.post(url, data, [config]);
  // $http.put(url, data, [config]);
  // $http.patch(url, data, [config]);
  // $http.delete(url, data, [config]);
  // $http.head(url, data, [config]);
  // $http.jsonp(url, data, [config]);

  //url - url adress where we send request
  //data - data for sending in request body
  //config - JS Object which consist additional set up parameters

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