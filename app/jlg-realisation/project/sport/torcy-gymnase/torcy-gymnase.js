
import textHtml from './text.html';

export const state = {
	data: {
		title: `Gymnase Jean Moulin à Torcy`,
		description: `Aménagement d’un local associatif Club House, Gymnase Jean Moulin à Torcy`,
		image: {
			main: 'img/photo/project/sport/torcy/gymnase.jpg',
			mainPortrait: 'img/photo/project/sport/torcy/gymnase.jpg',
			others: [
				'img/photo/project/sport/torcy/gymnase.jpg',
				'img/photo/project/sport/torcy/gymnase.jpg',
			]
		},
		moa: {
			name: 'Ville de Torcy (77)',
			url: 'http://www.ville-torcy.fr/',
		},
		interventions: [
			{
				year: 2016,
				title: `Aménagement d’un local associatif « Club House »`,
				missions: [
					'Etude',
					'Autorisation de travaux'
				],
				price: '110 000 Euros HT'
			}
		],
		text: textHtml,
	}
};
