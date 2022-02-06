(function () {
'use strict';

	angular.module('MenuApp').component('categoryList', {
		templateUrl: 'html/category.component.template.html',
		bindings: {
			items: '<'										// one-way data binding on items
		}
	});
})();

