import projectHtml from '../../tmpl/project.html';

import chauconinTextHtml from './text.html';

export const state = {
	name: 'moussy-le-vieux',
	template: projectHtml,
	controller: function($state) {
        'ngInject';
		this.data = $state.$current.data;
	},
	controllerAs: '$ctrl',
	data: {
		title: `Eglise Saint Martin de Moussy-le-Vieux`,
		description: `
this is the meta description...`,
		image: {
			main: 'img/photo/project/chauconin/saint-saturnin.jpg',
			others: [
				'img/photo/project/chauconin/saint-saturnin.jpg',
				'img/photo/project/chauconin/saint-saturnin.jpg',
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
