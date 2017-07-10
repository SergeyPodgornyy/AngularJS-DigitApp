digitApp.factory('about', ['$http', function($http) {
    return $http.get('template/about.json')
            .success(function(data) {
                return data;
            })
            .error(function(err){
                return err;
            });
}]);
