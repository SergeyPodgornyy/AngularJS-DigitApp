digitApp.directive('aboutTab', function() { 
  return { 
    restrict: 'E', 
    templateUrl: 'js/directives/aboutTab.html',
    controller  : function () {
				this.tab = 1;

				this.isSet = function (checkTab) {
					return this.tab === checkTab;
				};

				this.setTab = function (activeTab) {
					this.tab = activeTab;
				};
	},
	controllerAs: "tab" 
  }; 
});