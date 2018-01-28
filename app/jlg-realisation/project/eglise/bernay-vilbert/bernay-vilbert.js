import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Notre Dame en l’Assomption à Bernay-Vilbert`,
		description: `Eglise Notre Dame en l’Assomption à Bernay-Vilbert`,
		image: {
			main: 'img/photo/project/eglise/bernay-vilbert/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/bernay-vilbert/eglise.jpg',
			others: [
				'img/photo/project/eglise/bernay-vilbert/eglise.jpg',
				'img/photo/project/eglise/bernay-vilbert/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Bernay-Vilbert (77)',
			url: 'http://bernay-vilbert.fr/',
		},
		interventions: [
			{
				year: 2014,
				title: `Réfection des parements intérieurs et travaux d’électricité`,
				missions: [
					'Maîtrise d’œuvre'
				],
				price: '68 400 € HT'
			},
			{
				year: 2008,
				title: 'Etude préalable'
			}
		],
		text: textHtml,
	}
};

