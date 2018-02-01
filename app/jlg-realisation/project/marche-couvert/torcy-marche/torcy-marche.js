import textHtml from './text.html';

export const state = {
	data: {
		title: `Marché couvert et réorganisation des extérieurs à Torcy`,
		description: `Réhabilitation du Marché couvert et réorganisation des extérieurs à torcy`,
		image: {
			main: 'img/photo/project/marche-couvert/torcy/marche.jpg',
			mainPortrait: 'img/photo/project/marche-couvert/torcy/marche.jpg',
			others: [
				'img/photo/project/marche-couvert/torcy/marche.jpg',
				'img/photo/project/marche-couvert/torcy/marche.jpg',
			]
		},
		moa: {
			name: 'Ville de Torcy (77)',
			url: 'http://www.ville-torcy.fr/',
		},
		interventions: [{
			year: 2009,
			title: `Réhabilitation du Marché couvert et réorganisation des extérieurs`,
			missions: [
				'Maîtrise d’œuvre',
				'OPC'
			],
			price: '450 000 € HT'
		}],
		text: textHtml,
		client: {
			name: 'Torcy',
			zip: 77200,
			type: 'Mairie',
		}
	}
};
