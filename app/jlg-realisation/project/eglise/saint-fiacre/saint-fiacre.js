import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint-Fiacre à Saint-Fiacre`,
		description: `Eglise Saint-Fiacre à Saint-Fiacre`,
		image: {
			main: 'img/photo/project/eglise/saint-fiacre/parallax.jpg',
			mainPortrait: 'img/photo/project/eglise/saint-fiacre/parallax-portrait.jpg',
			trios: [
				[{
					url: 'img/photo/project/eglise/saint-fiacre/01.jpg',
					caption: ``
				}, {
					url: 'img/photo/project/eglise/saint-fiacre/02.jpg',
					caption: ``
				}, {
					url: 'img/photo/project/eglise/saint-fiacre/03.jpg',
					caption: ``
				}]
			]
		},
		moa: {
			name: 'Commune de Saint-Fiacre (77)',
		},
		interventions: [{
				year: 2016,
				ongoing: true,
				title: `Restauration du clocher et des sols de l’église`,
				missions: [
					'Maîtrise d’œuvre'
				],
				price: '130 000 € HT'
			},
			{
				year: 2015,
				title: `Etude préalable`
			}
		],
		text: textHtml,
		client: {
			name: 'Saint-Fiacre',
			zip: 77470,
			type: 'Mairie',
		}
	}
};
