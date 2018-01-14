import accueilHtml from './tmpl/accueil.html';
import clientsHtml from './tmpl/clients.html';
import realisationsHtml from './tmpl/realisations.html';
import contactHtml from './tmpl/contact.html';

const app = angular.module('jlg-route', ['ui.router']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider.state({
		name: 'accueil',
		url: '/',
		template: accueilHtml,
		data: {
			title: `Cabinet d'architecture DEMETRESCU - GUÉNÉGO.`,
			description: `
Cabinet d'Architecture de Seine et Marne, à Torcy.
Architectes du patrimoine, HMONP, DPLG.
Etude préalable, Permis de construire, Elaboration de cahier des charges, Maîtrise d'oeuvre.
Dialogue avec administrations, DRAC, ABF, CAUE.
Restauration, réhabilitation de patrimoine anciens: Eglises Chateau Granges Ecoles.`,
		}
	});
	$stateProvider.state({
		name: 'clients',
		url: '/clients',
		template: clientsHtml,
		data: {
			title: `CADG: nos clients.`,
			description: `Cabinet d'architecture DEMETRESCU - GUENEGO: liste de nos clients.`,
		}
	});
	$stateProvider.state({
		name: 'realisations',
		url: '/realisations',
		template: realisationsHtml,
		data: {
			title: `CADG: nos réalisations.`,
			description: `
Cabinet d'architecture DEMETRESCU - GUENEGO: liste de nos réalisations.
Projet architecturaux réalisé par nos architectes du patrimoine.
Eglises, Chateaux, Granges, Ecoles, Remparts, Lavoir, Mairies,
Logements collectifs, Promotions immobilières, maisons individuelles`,
		}
	});
	$stateProvider.state({
		name: 'contact',
		url: '/contact',
		template: contactHtml,
		data: {
			title: 'CADG: Contactez-nous.',
			description: `
Adresse du Cabinet d'architecture: 99 rue de Paris, Batiment A - 1er étage. 77200 TORCY. Ile de France.`,
		}
	});
	
});

app.run(($transitions) => {
	$transitions.onSuccess({}, function(transition) {
		angular.element(document.body).removeClass(transition.from().name);
		angular.element(document.body).addClass(transition.to().name);
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
});
