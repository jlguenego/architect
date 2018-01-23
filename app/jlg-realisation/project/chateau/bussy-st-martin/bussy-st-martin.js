import textHtml from './text.html';

export const state = {
	data: {
		title: `Château de Rentilly à Bussy-Saint-Martin`,
		description: `Réfection des toitures du pavillon d’entrée`,
		image: {
			main: 'img/photo/project/chateau/bussy-st-martin/chateau.jpg',
			mainPortrait: 'img/photo/project/chateau/bussy-st-martin/chateau.jpg',
			others: [
				'img/photo/project/chateau/bussy-st-martin/chateau.jpg',
				'img/photo/project/chateau/bussy-st-martin/chateau.jpg',
			]
		},
		moa: {
			name: 'Communauté d’agglomération de Marne et Gondoire',
			url: 'http://www.marneetgondoire.fr/'
		},
		interventions: [
			{
				year: 2010,
				title: `Travaux de sécurisation du château de Rentilly `,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '388 500 € HT'
			},
			{
				year: 2008,
				title: `Restauration des menuiseries des pavillons d’entrée du parc`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '150 000 € HT'
			}
		],
		classement: 'Inscrit MH',
		text: textHtml,
	}
};

