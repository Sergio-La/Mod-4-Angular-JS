(function () {
'use strict';

angular.module('Data').service('MenuDataService', MenuDataService);     // Declare the 'MenuDataService' on the 'Data' module


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
	var service = this;

	var items = [];
	var ApiBasePath = "https://davids-restaurant.herokuapp.com"

	//Service method
	service.getAllCategories = function() {
		// retrieve the menu items via $http
		return $http({ method: "GET", url: (ApiBasePath + "/categories.json")})
			.then ( function( response ) {
				return response.data;
			});
	};

	service.getItemsForCategory = function (categoryShortName) {
		var response = $http({
		method: "GET",
		url: (ApiBasePath + "/menu_items.json"),
		params: {
			category: categoryShortName
		}
    });
    return response;
  };

}

})();


