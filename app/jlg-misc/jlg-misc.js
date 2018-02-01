const app = angular.module('jlg-misc', []);

app.service('misc', function Misc() {
	this.toSlug = function(text) {
		return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
			.replace(/ /g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
	};
});
