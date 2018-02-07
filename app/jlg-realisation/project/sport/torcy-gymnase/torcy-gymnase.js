import textHtml from './text.html';

export const state = {
	data: {
		title: `Gymnase Jean Moulin à Torcy`,
		description: `Aménagement d’un local associatif Club House, Gymnase Jean Moulin à Torcy`,
		image: {
			main: 'img/photo/project/sport/torcy/parallax.jpg',
			mainPortrait: 'img/photo/project/sport/torcy/parallax-portrait.jpg',
			trios: [
				[{
					url: 'img/photo/project/sport/torcy/01.jpg',
					caption: `Avant travaux`
				}, {
					url: 'img/photo/project/sport/torcy/02.jpg',
					caption: `Avant travaux`
				}, {
					url: 'img/photo/project/sport/torcy/03.jpg',
					caption: `Avant travaux`
				}],
				[{
					url: 'img/photo/project/sport/torcy/04.jpg',
					caption: `Après travaux - extérieur`
				}, {
					url: 'img/photo/project/sport/torcy/05.jpg',
					caption: `Après travaux - extérieur`
				}, {
					url: 'img/photo/project/sport/torcy/06.jpg',
					caption: `Après travaux - intérieur`
				}],
				[{
					url: 'img/photo/project/sport/torcy/07.jpg',
					caption: `Après travaux - intérieur`
				}]
			]
		},
		moa: {
			name: 'Ville de Torcy (77)',
			url: 'http://www.ville-torcy.fr/',
		},
		interventions: [{
			year: 2016,
			title: `Aménagement d’un local associatif « Club House »`,
			missions: [
				'Etude',
				'Autorisation de travaux'
			],
			price: '110 000 Euros HT'
		}],
		text: textHtml,
		client: {
			name: 'Torcy',
			zip: 77200,
			type: 'Mairie',
		}
	}
};
