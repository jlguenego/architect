import textHtml from './text.html';

export const state = {
	data: {
		title: `Château de Rentilly à Bussy-Saint-Martin`,
		description: `Travaux de sécurisation du château de Rentilly`,
		image: {
			main: 'img/photo/project/chateau/rentilly/chateau.jpg',
			mainPortrait: 'img/photo/project/chateau/rentilly/chateau.jpg',
			trios: [
				[{
					url: 'img/photo/project/chateau/rentilly/01.jpg',
					caption: ''
				}, {
					url: 'img/photo/project/chateau/rentilly/02.jpg',
					caption: ''
				}, {
					url: 'img/photo/project/chateau/rentilly/03.jpg',
					caption: ''
				}]
			]
		},
		moa: {
			name: 'Communauté d’agglomération de Marne et Gondoire',
			url: 'http://www.marneetgondoire.fr/'
		},
		interventions: [{
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
		client: {
			name: `Communauté d’agglomération de Marne et Gondoire`,
			zip: 77600,
			type: 'Public Autres',
		}
	}
};
