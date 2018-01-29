import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Notre Dame en l’Assomption à Bernay-Vilbert`,
		description: `Eglise Notre Dame en l’Assomption à Bernay-Vilbert`,
		image: {
			main: 'img/photo/project/eglise/bernay-vilbert/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/bernay-vilbert/eglise.jpg',
			trios: [[{
				url: 'img/photo/project/eglise/bernay-vilbert/01.jpg',
				caption: 'Coupe'
			}, {
				url: 'img/photo/project/eglise/bernay-vilbert/02.jpg',
				caption: ''
			}, {
				url: 'img/photo/project/eglise/bernay-vilbert/03.jpg',
				caption: ''
			}]]
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

