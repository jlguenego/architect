import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Georges à Monthyon`,
		description: `Restauration de la toiture - Eglise Saint Georges à Monthyon`,
		image: {
			main: 'img/photo/project/eglise/monthyon/monthyon-eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/monthyon/monthyon-eglise.jpg',
			trios: [
				[{
					url: 'img/photo/project/eglise/monthyon/01.jpg',
					caption: 'Coupe'
				}, {
					url: 'img/photo/project/eglise/monthyon/02.jpg',
					caption: 'Façade de l\'église'
				}, {
					url: 'img/photo/project/eglise/monthyon/03.jpg',
					caption: 'Intérieur de l\'église'
				}]
			]
		},
		moa: {
			name: 'Commune de Monthyon (77)',
			url: 'http://www.monthyon.fr/',
		},
		interventions: [{
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
		client: {
			name: 'Monthyon',
			zip: 77122,
			type: 'Mairie',
		}
	}
};
