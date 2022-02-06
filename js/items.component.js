(function () {
'use strict';

	angular.module('MenuApp').component('itemsList', {
		templateUrl: 'html/items.component.template.html',
		bindings: {
			items: '<'										// one-way data binding on items
		}
	});
})();

