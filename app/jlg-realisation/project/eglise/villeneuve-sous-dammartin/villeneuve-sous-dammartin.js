import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint-Pierre et Saint-Paul de Villeneuve-sous-Dammartin`,
		description: `Eglise Saint-Pierre et Saint-Paul de Villeneuve-sous-Dammartin`,
		image: {
			main: 'img/photo/project/eglise/villeneuve-sous-dammartin/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/villeneuve-sous-dammartin/eglise.jpg',
			others: [
				'img/photo/project/eglise/villeneuve-sous-dammartin/eglise.jpg',
				'img/photo/project/eglise/villeneuve-sous-dammartin/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Villeneuve-sous-Dammartin (77)',
			url: 'http://www.villeneuve-sous-dammartin.fr/',
		},
		interventions: [{
				year: '2015 - 2017',
				title: `Restauration du bas-côté nord`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '310 000 € HT'
			},
			{
				year: '2013 - 2015',
				title: `Restauration du clocher`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '350 000 € HT'
			},
			{
				year: 2012,
				title: `Etude Préalable`,
			}
		],
		text: textHtml,
		client: {
			name: 'Villeneuve-sous-Dammartin',
			zip: 77230,
			type: 'Mairie',
		}
	}
};
