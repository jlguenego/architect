import jlgPhotoThumbnailHtml from './jlg-photo-thumbnail.html';
import './jlg-photo-thumbnail.scss';

import '../jlg-load-image/jlg-load-image.js';

const app = angular.module('jlg-photo-thumbnail', ['jlg-load-image']);

app.component('jlgPhotoThumbnail', {
	template: jlgPhotoThumbnailHtml,
	bindings: {
		url: '<',
		caption: '<',
	},
	controller: function JLGPhotoThumbnailCtrl($scope, $element, $q, loadImage) {
		this.state = 0;

		$scope.$watch('$ctrl.state', () => {
			if (this.state === 0) {
				$element.removeClass('active');
			} else {
				$element.addClass('active');
			}
		});

		this.$onInit = () => {

			loadImage.load(this.url).then(images => {
				$element.addClass('loaded');
			});
		};
	}
});
