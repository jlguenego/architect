import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint-Pierre et Saint-Paul de Villeneuve-sous-Dammartin`,
		description: `Eglise Saint-Pierre et Saint-Paul de Villeneuve-sous-Dammartin`,
		image: {
			main: 'img/photo/project/eglise/villeneuve-sous-dammartin/parallax.jpg',
			mainPortrait: 'img/photo/project/eglise/villeneuve-sous-dammartin/parallax-portrait.jpg',
			trios: [
				[{
					url: 'img/photo/project/eglise/villeneuve-sous-dammartin/01.jpg',
					caption: `Clocher avant travaux`
				}, {
					url: 'img/photo/project/eglise/villeneuve-sous-dammartin/02.jpg',
					caption: `Clocher pendant travaux`
				}, {
					url: 'img/photo/project/eglise/villeneuve-sous-dammartin/03.jpg',
					caption: `Clocher après travaux`
				}],
				[{
					url: 'img/photo/project/eglise/villeneuve-sous-dammartin/04.jpg',
					caption: `Bas côté avant travaux`
				}, {
					url: 'img/photo/project/eglise/villeneuve-sous-dammartin/05.jpg',
					caption: `Bas côté après travaux`
				}, {
					url: 'img/photo/project/eglise/villeneuve-sous-dammartin/06.jpg',
					caption: `Perspective ̀d'artiste (Lizica DEMETRESCU)`
				}]
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
