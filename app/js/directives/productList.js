digitApp.directive('productList', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/productList.html'
    };
});
