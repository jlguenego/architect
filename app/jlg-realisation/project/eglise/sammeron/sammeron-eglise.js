import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Martin à Sammeron`,
		description: `Eglise Saint Martin à Sammeron`,
		image: {
			main: 'img/photo/project/eglise/sammeron/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/sammeron/eglise.jpg',
			trios: [[{
				url: 'img/photo/project/eglise/sammeron/01.jpg',
				caption: ''
			}, {
				url: 'img/photo/project/eglise/sammeron/02.jpg',
				caption: ''
			}, {
				url: 'img/photo/project/eglise/sammeron/03.jpg',
				caption: ''
			}]]
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

