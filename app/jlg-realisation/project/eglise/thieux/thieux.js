import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint-Médard à Thieux`,
		description: `Eglise Saint-Médard à Thieux`,
		image: {
			main: 'img/photo/project/eglise/thieux/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/thieux/eglise.jpg',
			others: [
				'img/photo/project/eglise/thieux/eglise.jpg',
				'img/photo/project/eglise/thieux/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Thieux (77)',
		},
		interventions: [{
			year: 2016,
			title: `Etude préalable`
		}],
		text: textHtml,
		client: {
			name: 'Thieux',
			zip: 77230,
			type: 'Mairie',
		}
	}
};
