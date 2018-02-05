import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Martin de Moussy-le-Vieux`,
		description: `Restauration du clocher - Eglise Saint Martin de Moussy-le-Vieux`,
		image: {
			main: 'img/photo/project/eglise/moussy-le-vieux/parallax.jpg',
			mainPortrait: 'img/photo/project/eglise/moussy-le-vieux/parallax-portrait.jpg',
			trios: [
				[{
					url: 'img/photo/project/eglise/moussy-le-vieux/01.jpg',
					caption: `Carte postale ancienne`
				}, {
					url: 'img/photo/project/eglise/moussy-le-vieux/02.jpg',
					caption: `Eglise avant restauration du clocher`
				}, {
					url: 'img/photo/project/eglise/moussy-le-vieux/03.jpg',
					caption: `Lizica faisant le relevé`
				}],
				[{
					url: 'img/photo/project/eglise/moussy-le-vieux/04.jpg',
					caption: `Echaffaudage du clocher`
				}, {
					url: 'img/photo/project/eglise/moussy-le-vieux/05.jpg',
					caption: `Après restauration du clocher`
				}, {
					url: 'img/photo/project/eglise/moussy-le-vieux/06.jpg',
					caption: `Horloge du clocher restaurée`
				}]
			]
		},
		moa: {
			name: 'Commune de Moussy-le-Vieux (77)',
			url: 'http://www.moussy-le-vieux.fr/',
		},
		interventions: [{
				year: 2015,
				title: `Restauration du clocher`,
				missions: [
					'Maîtrise d\'oeuvre'
				],
				price: '83 000 € HT'
			},
			{
				year: 2014,
				title: `Etude préalable`,
			}
		],
		classement: 'Inscrit MH',
		text: textHtml,
		client: {
			name: 'Moussy-le-Vieux',
			zip: 77230,
			type: 'Mairie',
		}
	}
};
