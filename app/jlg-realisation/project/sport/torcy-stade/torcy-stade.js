import textHtml from './text.html';

export const state = {
	data: {
		title: `Stade Fremoy à Torcy`,
		description: `Aménagement d’un local associatif « Club House », Stade Fremoy à Torcy`,
		image: {
			main: 'img/photo/project/sport/torcy-stade/parallax.jpg',
			mainPortrait: 'img/photo/project/sport/torcy-stade/parallax.jpg',
			trios: [
				[{
					url: 'img/photo/project/sport/torcy-stade/01.jpg',
					caption: `Avant le projet`
				}, {
					url: 'img/photo/project/sport/torcy-stade/02.jpg',
					caption: 'Projet proposé'
				}, {
					url: 'img/photo/project/sport/torcy-stade/03.jpg',
					caption: 'Projet réalisé'
				}]
			]
		},
		moa: {
			name: 'Ville de Torcy (77)',
			url: 'http://www.ville-torcy.fr/',
		},
		interventions: [{
			year: 2015,
			title: `Aménagement d’un local associatif « Club House », Stade Fremoy`,
			missions: [
				'Etude',
				'Autorisation de travaux'
			],
			price: '100 000 Euros HT'
		}],
		text: textHtml,
		client: {
			name: 'Torcy',
			zip: 77200,
			type: 'Mairie',
		}
	}
};
