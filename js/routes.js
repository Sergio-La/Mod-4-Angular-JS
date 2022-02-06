(function () {

	angular.module('Data',['ui.router']);
	angular.module('Data').config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		// Redirect to tab 1 if no other URL matches
		$urlRouterProvider.otherwise('/');											// default to '/' if requested route cannot be found

		// Set up UI states
		$stateProvider
			.state( 'home', { url: '/', templateUrl: 'html/home.html' })										// definition of the 'home' state '/'
			.state(	'categories', { url: '/categories',
									templateUrl: 'html/categories.template.html',
									controller: 'CategoryListController as categoryList',
									resolve: {
										items: [ 'MenuDataService', function(MenuDataService) { return MenuDataService.getAllCategories(); }]
									}})		// definition of the 'category' state
			
			.state('items', { url: '/items/{categoryId}', 
							  templateUrl: 'html/items.template.html',
							  controller: "ItemsListController as itemList",
							  resolve: {
								items: [ '$stateParams', 'MenuDataService', function($stateParams, MenuDataService) { 
																				console.log('here' + $stateParams.categoryId ); 
																				// return MenuDataService.getAllCategories()
																				return MenuDataService.getItemsForCategory( $stateParams.categoryId );
																			}]
				  	}});
      }

})();
