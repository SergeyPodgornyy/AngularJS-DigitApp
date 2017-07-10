digitApp.controller('MainCtrl', ['$scope', 'phones', '$location', function ($scope, phones, $location) {
  // console.log('$location.url() - ', $location.url());
  // 	//return whole url
  // console.log('$location.path() - ', $location.path());
  // 	//return folder path
  // console.log('$location.search() - ', $location.search());
  // 	//can find attributes and value after "?" sign
  // console.log('$location.hash() - ', $location.hash());
  // 	//where we should go and using service $anchorScroll move to necessary part

    phones.success(function(data){
        $scope.phones = data;
    });
}]);
