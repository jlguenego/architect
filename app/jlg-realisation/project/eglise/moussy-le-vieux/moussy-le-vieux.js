import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Martin de Moussy-le-Vieux`,
		description: `Restauration du clocher - Eglise Saint Martin de Moussy-le-Vieux`,
		image: {
			thumbnail: 'img/photo/project/eglise/moussy-le-vieux/thumbnail.jpg',
			main: 'img/photo/project/eglise/moussy-le-vieux/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/moussy-le-vieux/eglise.jpg',
			others: [
				'img/photo/project/eglise/moussy-le-vieux/eglise.jpg',
				'img/photo/project/eglise/moussy-le-vieux/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Moussy-le-Vieux (77)',
			url: 'http://www.moussy-le-vieux.fr/',
		},
		interventions: [
			{
				year: 2015,
				title: `Restauration du clocher`,
				missions: [
					'Maîtrise d\'oeuvre'
				],
				price: '83 000 € HT'
			},
			{
				year: 2014,
				title: `Etude préalable`,
			}
		],
		classement: 'Inscrit MH',
		text: textHtml,
	}
};


