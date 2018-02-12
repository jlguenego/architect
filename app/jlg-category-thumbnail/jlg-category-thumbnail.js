import jlgCategoryThumbnailHtml from './jlg-category-thumbnail.html';
import './jlg-category-thumbnail.scss';

const app = angular.module('jlg-category-thumbnail', []);

app.component('jlgCategoryThumbnail', {
	template: jlgCategoryThumbnailHtml,
	bindings: {
		label: '<',
		image: '<',
		state: '<',
	},
	controller: function JLGCategoryThumbnailCtrl($scope, $element, $q, loadImage) {

	}
});
