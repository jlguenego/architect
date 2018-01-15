import './jlg-realisation.scss';

import { jlgThumbnail } from './jlg-thumbnail.component.js';

const app = angular.module('jlg-realisation', []);



const context = require.context('./projects', true, /\.js$/);
context.keys().forEach(function(key) {
	const obj = context(key);
	app.config(($stateProvider) => {
		'ngInject';
		$stateProvider.state(obj.state);
	});
});

app.component('jlgThumbnail', jlgThumbnail);
