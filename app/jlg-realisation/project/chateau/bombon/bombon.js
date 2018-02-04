import textHtml from './text.html';

export const state = {
	data: {
		title: `Château de Bombon`,
		description: `Réfection des toitures du pavillon d’entrée`,
		image: {
			main: 'img/photo/project/chateau/bombon/parallax.jpg',
			mainPortrait: 'img/photo/project/chateau/bombon/parallax.jpg',
			trios: [
				[{
					url: 'img/photo/project/chateau/bombon/01.jpg',
					caption: `Juste avant la fin de la restauration`
				}, {
					url: 'img/photo/project/chateau/bombon/02.jpg',
					caption: 'Façades'
				}, {
					url: 'img/photo/project/chateau/bombon/03.jpg',
					// eslint-disable-next-line
					caption: 'Entrée du château'
				}]
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
