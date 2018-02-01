import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Denis à Le Thillay`,
		description: `Eglise Saint Denis à Le Thillay`,
		image: {
			main: 'img/photo/project/eglise/le-thillay/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/le-thillay/eglise.jpg',
			others: [
				'img/photo/project/eglise/le-thillay/eglise.jpg',
				'img/photo/project/eglise/le-thillay/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune du Le Thillay (95)',
			url: 'http://www.mairie-le-thillay.fr/',
		},
		interventions: [{
				year: '2016',
				ongoing: true,
				title: `Restauration du chevet`,
				missions: [
					'Maîtrise d’œuvre'
				],
				price: '100 000 € HT'
			},
			{
				year: 2016,
				title: 'Etude préalable'
			}
		],
		text: textHtml,
		client: {
			name: 'Le Thillay',
			zip: 95500,
			type: 'Mairie',
		}
	}
};
