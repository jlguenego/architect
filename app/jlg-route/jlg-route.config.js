import accueilHtml from './tmpl/accueil.html';
import clientsHtml from './tmpl/clients.html';
import contactHtml from './tmpl/contact.html';

export function config($locationProvider, $stateProvider, $urlRouterProvider) {
	'ngInject';
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider.state({
		name: 'accueil',
		url: '/',
		template: accueilHtml,
		data: {
			// see index.html
		}
	});
	$stateProvider.state({
		name: 'clients',
		url: '/clients',
		template: clientsHtml,
		controller: 'ClientCtrl',
		controllerAs: '$ctrl',
		data: {
			title: `Nos clients.`,
			description: `Cabinet d'architecture DEMETRESCU - GUENEGO: liste de nos clients.`,
		}
	});
	
	$stateProvider.state({
		name: 'contact',
		url: '/contact',
		template: contactHtml,
		data: {
			title: 'Contactez-nous.',
			description: `
Adresse du Cabinet d'architecture: 99 rue de Paris, Batiment A - 1er étage. 77200 TORCY. Ile de France.`,
		}
	});

}
