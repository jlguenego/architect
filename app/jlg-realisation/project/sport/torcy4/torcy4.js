
import textHtml from './text.html';

export const state = {
	data: {
		title: `Stade Fremoy à Torcy`,
		description: `Aménagement d’un local associatif « Club House », Stade Fremoy à Torcy`,
		image: {
			main: 'img/photo/project/sport/torcy4/torcy4.jpg',
			mainPortrait: 'img/photo/project/sport/torcy4/torcy4.jpg',
			others: [
				'img/photo/project/sport/torcy4/torcy4.jpg',
				'img/photo/project/sport/torcy4/torcy4.jpg',
			]
		},
		moa: {
			name: 'Ville de Torcy (77)',
			url: 'http://www.ville-torcy.fr/',
		},
		interventions: [
			{
				year: 2015,
				title: `Aménagement d’un local associatif « Club House », Stade Fremoy`,
				missions: [
					'Etude',
					'Autorisation de travaux'
				],
				price: '100 000 Euros HT'
			}
		],
		text: textHtml,
	}
};

