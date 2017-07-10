digitApp.directive('aboutTab', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/aboutTab.html',
        controller: function () {
            this.tab = 1;

            this.isSet = function (checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function (activeTab) {
                this.tab = activeTab;
            };

            this.currentIndex = 0;
            this.setCurrent = function (current) {
                this.currentIndex = current || 0;
            };
       },
       controllerAs: "tab"
    };
});
