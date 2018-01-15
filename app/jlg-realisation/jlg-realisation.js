import './jlg-realisation.scss';
import html from './tmpl/jlg-thumbnail.html';

import { config } from './jlg-realisation.config.js';

const app = angular.module('jlg-realisation', []);
app.config(config);

app.component('jlgThumbnail', {
	bindings: {
		href: '<',
		src: '<',
		caption: '<',
	},
	template: html,
	controller: function() {
		this.$onInit = () => {
		};
	},
});
