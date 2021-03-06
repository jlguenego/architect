import { config } from './jlg-route.config.js';
import '../jlg-seo/jlg-seo.js';
import '../jlg-clients/jlg-clients.js';

const app = angular.module('jlg-route', ['ui.router', 'jlg-seo', 'jlg-clients']);

app.config(config);
app.run((seoConfig) => {
	seoConfig.titlePrefix = 'Cabinet d\'architecture DEMETRESCU - GUÉNÉGO';
});

app.run(($rootScope) => {
	$rootScope.now = new Date();
});

app.run(($rootScope, $transitions, $state) => {

	$transitions.onStart({}, function(trans) {
		angular.element(document.body).removeClass('loading');
	});

	$transitions.onSuccess({}, function(transition) {
		angular.element(document.body).removeClass(transition.from().name);
		angular.element(document.body).addClass(transition.to().name);
		// this should be managed by ui router... :(
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		angular.element(document.body).addClass('loading');

	});

	$rootScope.gotoState = function(to, params) {
		$state.go(to, params);
	};
});
