import textHtml from './text.html';

export const state = {
	data: {
		title: `Château de Bombon`,
		description: `Réfection des toitures du pavillon d’entrée`,
		image: {
			main: 'img/photo/project/chateau/bombon/chateau.jpg',
			mainPortrait: 'img/photo/project/chateau/bombon/chateau.jpg',
			others: [
				'img/photo/project/chateau/bombon/chateau.jpg',
				'img/photo/project/chateau/bombon/chateau.jpg',
			]
		},
		moa: {
			name: 'privée',
		},
		interventions: [{
				year: 2016,
				title: `Réfection des toitures du pavillon d’entrée`,
				missions: [
					'Etude',
					'Autorisation de travaux'
				],
			},
			{
				year: 2013,
				title: `Réfection des toitures du pavillon d’entrée`,
				missions: [
					'Etude Préalable'
				],
			}
		],
		classement: 'Inscrit MH',
		text: textHtml,
		client: 'privé'
	}
};
