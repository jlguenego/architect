import projectHtml from '../../tmpl/project.html';

import chauconinTextHtml from './text.html';

export const state = {
	name: 'varennes',
	url: '/realisations/varennes',
	template: projectHtml,
	controller: function($state) {
        'ngInject';
		this.data = $state.$current.data;
	},
	controllerAs: '$ctrl',
	data: {
		title: `Eglise Saint Lambert de Varennes-sur-Seine`,
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
};
