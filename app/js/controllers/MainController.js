digitApp.controller('MainCtrl', ['$scope', 'phones', function ($scope, phones) {
  phones.success(function(data){
    $scope.phones = data;
  });
}]);