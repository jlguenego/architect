import jlgPhotoThumbnailHtml from './jlg-photo-thumbnail.html';
import './jlg-photo-thumbnail.scss';

const app = angular.module('jlg-photo-thumbnail', []);

app.component('jlgPhotoThumbnail', {
	template: jlgPhotoThumbnailHtml,
	bindings: {
		url: '<',
		caption: '<',
	}
});