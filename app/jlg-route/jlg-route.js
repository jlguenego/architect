import { config } from './jlg-route.config.js';
import '../jlg-seo/jlg-seo.js';

const app = angular.module('jlg-route', ['ui.router', 'jlg-seo']);

app.config(config);

app.run(($transitions, seoConfig) => {

	$transitions.onSuccess({}, function(transition) {
		angular.element(document.body).removeClass(transition.from().name);
		angular.element(document.body).addClass(transition.to().name);
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
});
