import jlgPhotoThumbnailHtml from './jlg-photo-thumbnail.html';
import './jlg-photo-thumbnail.scss';

const app = angular.module('jlg-photo-thumbnail', []);

app.component('jlgPhotoThumbnail', {
	template: jlgPhotoThumbnailHtml,
	bindings: {
		url: '<',
		caption: '<',
	},
	controller: function JLGPhotoThumbnailCtrl($scope, $element) {
		this.state = 0;
		$scope.$watch('$ctrl.state', () => {
			if (this.state === 0) {
				$element.removeClass('active');
			} else {
				$element.addClass('active');
			}
		});
	}
});