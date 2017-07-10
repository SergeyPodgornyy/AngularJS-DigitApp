digitApp.factory('phones', ['$http', function($http) {
    return $http.get('phones/phones.json')
            .success(function(data) {
                return data;
            })
            .error(function(err) {
                return err;
            });
}]);
