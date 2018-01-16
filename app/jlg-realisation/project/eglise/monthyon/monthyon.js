
import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Georges à Monthyon`,
		description: `Restauration de la toiture - Eglise Saint Georges à Monthyon`,
		image: {
			thumbnail: 'img/photo/project/eglise/monthyon/thumbnail.jpg',
			main: 'img/photo/project/eglise/monthyon/monthyon-eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/monthyon/monthyon-eglise.jpg',
			others: [
				'img/photo/project/eglise/monthyon/monthyon-eglise.jpg',
				'img/photo/project/eglise/monthyon/monthyon-eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Monthyon (77)',
			url: 'http://www.monthyon.fr/',
		},
		interventions: [
			{
				year: 2010,
				title: `Restauration de la toiture`,
				missions: [
					'Maîtrise d\'oeuvre'
				],
				price: '370 000 € HT'
			},
			{
				year: 2007,
				title: `Etude préalable`,
			}
		],
		text: textHtml,
	}
};
