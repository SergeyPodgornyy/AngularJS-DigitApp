digitApp.controller('PhoneCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;

    var url = 'phones/'+$routeParams.phoneId+'.json';

    $http.get(url).success(function(data) {
        $scope.phone = data;
        $scope.mainImageUrl = data.images[0];
        $scope.prices = data.prices;
    });

    $scope.toggleActive = function(s){
        s.active = !s.active;
    };

    // Helper method for calculating the total price

    $scope.total = function(){
        var total = 0;

        // Use $scope.prices[0].price in future

        // Use the angular forEach helper method to
        // loop through the services array:

        angular.forEach($scope.prices, function(s){
            if (s.active) {
                total+= s.price;
            }
        });

        return total;
    };

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}]);