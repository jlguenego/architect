import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Martin à Sammeron`,
		description: `Eglise Saint Martin à Sammeron`,
		image: {
			main: 'img/photo/project/eglise/sammeron/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/sammeron/eglise.jpg',
			others: [
				'img/photo/project/eglise/sammeron/eglise.jpg',
				'img/photo/project/eglise/sammeron/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Sammeron (77)',
			url: 'http://www.sammeron.fr/',
		},
		interventions: [
			{
				year: 2014,
				title: `Restauration du bas-côté sud`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '168 000 € HT'
			},
			{
				year: 2006,
				title: `Etude préalable`
			}
		],
		classement: ' Inscrit MH',
		text: textHtml,
	}
};

