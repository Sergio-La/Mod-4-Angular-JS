(function () {
'use strict';

angular.module('Data').controller('ItemsListController', ItemsListController);

	ItemsListController.$inject = ['items'];
	function ItemsListController(items) {
  		var itemsList = this;
  		console.log('ItemsListController()');

		itemsList.items = items.data.menu_items;
		console.log(itemsList);
	}

})();


