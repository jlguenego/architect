import realisationHtml from './tmpl/realisation.html';

export const config = ($stateProvider) => {
	'ngInject';

	$stateProvider.state({
		name: 'chauconin',
		url: '/realisations/chauconin',
		template: realisationHtml,
		controller: function($state) {

		},
		data: {
			title: `CADG: nos réalisations.`,
			description: `
Cabinet d'architecture DEMETRESCU - GUENEGO: liste de nos réalisations.
Projet architecturaux réalisé par nos architectes du patrimoine.
Eglises, Chateaux, Granges, Ecoles, Remparts, Lavoir, Mairies,
Logements collectifs, Promotions immobilières, maisons individuelles`,
		}
	});

};
