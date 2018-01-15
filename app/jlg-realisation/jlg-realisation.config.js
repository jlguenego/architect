import realisationHtml from './tmpl/realisation.html';

import chauconinTextHtml from './tmpl/chauconin/text.html';

export const config = ($stateProvider) => {
	'ngInject';

	$stateProvider.state({
		name: 'chauconin',
		url: '/realisations/chauconin',
		template: realisationHtml,
		controller: function($state) {
			this.data = $state.$current.data;
		},
		controllerAs: '$ctrl',
		data: {
			title: `Eglise Saint Saturnin de Chauconin`,
			description: `
this is the meta description...`,
			image: {
				main: 'img/photo/realisations/chauconin/saint-saturnin.jpg',
				others: [
					'img/photo/realisations/chauconin/saint-saturnin.jpg',
					'img/photo/realisations/chauconin/saint-saturnin.jpg',
				]
			},
			client: {
				name: 'Mairie de Chauconin-Neufmontiers (77)',
				url: 'http://chauconin-neufmontiers.fr/',
			},
			price: '300 000 Euros HT',
			text: chauconinTextHtml,
		}
	});

};
