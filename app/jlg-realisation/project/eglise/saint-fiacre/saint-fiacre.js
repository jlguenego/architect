import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint-Fiacre à Saint-Fiacre`,
		description: `Eglise Saint-Fiacre à Saint-Fiacre`,
		image: {
			main: 'img/photo/project/eglise/saint-fiacre/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/saint-fiacre/eglise.jpg',
			others: [
				'img/photo/project/eglise/saint-fiacre/eglise.jpg',
				'img/photo/project/eglise/saint-fiacre/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Saint-Fiacre (77)',
		},
		interventions: [
			{
				year: 2016,
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
	}
};

