import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Martin à Iverny`,
		description: `Eglise Saint Martin à Iverny`,
		image: {
			main: 'img/photo/project/eglise/iverny/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/iverny/eglise.jpg',
			others: [
				'img/photo/project/eglise/iverny/eglise.jpg',
				'img/photo/project/eglise/iverny/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Iverny (77)',
			url: 'http://www.iverny.fr/',
		},
		interventions: [
			{
				year: '2016 – en cours',
				title: `Restauration des parements intérieurs et réfection de l’installation electrique et de chauffage`,
				missions: [
					'Maîtrise d’œuvre'
				],
				price: '300 000 € HT'
			}
		],
		text: textHtml,
	}
};

