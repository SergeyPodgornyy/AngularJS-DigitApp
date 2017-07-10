var digitApp = angular.module('digitApp', ['ngRoute', 'prodAnimations']);

digitApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'template/home.html'
        })
        .when('/about', {
            controller: 'AboutCtrl',
            templateUrl: 'template/about.html'
        })
        .when('/contact', {
            controller: 'ContactCtrl',
            templateUrl: 'template/contact.html'
        })
        .when('/phones/:phoneId', {
        	controller: 'PhoneCtrl',
            templateUrl: 'template/phone-detail.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

/* Filter */
digitApp.filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});