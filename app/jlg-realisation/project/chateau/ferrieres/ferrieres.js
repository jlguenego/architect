import textHtml from './text.html';

export const state = {
	data: {
		title: `Château de Ferrières-en-Brie`,
		description: `
Restauration des parements extérieurs ainsi que de tous les intérieurs. Réaffectation du château`,
		image: {
			thumbnail: 'img/photo/project/chateau/ferrieres/thumbnail.jpg',
			main: 'img/photo/project/chateau/ferrieres/ferrieres.jpg',
			others: [
				'img/photo/project/chateau/ferrieres/ferrieres.jpg',
				'img/photo/project/chateau/ferrieres/ferrieres.jpg',
			]
		},
		moa: {
			name: 'privée',
		},
		interventions: [
			{
				year: '2013-2015',
				title: `Restauration complète et réaménagement du château de la famille Rothschild 
				en vue de l’ouverture d’une école d’hôtellerie, de gastronomie et de luxe`,
				missions: [
					'Complète',
				],
				price: '10 000 000 € HT'
			}
		],
		classement: 'Classé MH',
		text: textHtml,
	}
};

