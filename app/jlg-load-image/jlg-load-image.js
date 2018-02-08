const app = angular.module('jlg-load-image', []);

app.service('loadImage', function LoadImage($q) {
	'ngInject';
	this.load = function loadImage(url) {
		return $q(function(resolve, reject) {
			angular.element('<img/>').attr('src', url).on('load', function(e) {
				const width = this.width;
				const height = this.height;
				angular.element(this).remove();
				resolve({
					url,
					width,
					height
				});
			});
		});
	};
});
