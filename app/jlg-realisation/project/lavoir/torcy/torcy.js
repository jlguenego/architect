
import textHtml from './text.html';

export const state = {
	data: {
		title: `Lavoir communal de Torcy `,
		description: `Restauration du lavoir communal de Torcy`,
		image: {
			thumbnail: 'img/photo/project/lavoir/torcy/lavoir.jpg',
			main: 'img/photo/project/lavoir/torcy/lavoir.jpg',
			others: [
				'img/photo/project/lavoir/torcy/lavoir.jpg',
				'img/photo/project/lavoir/torcy/lavoir.jpg',
			]
		},
		moa: {
			name: 'Ville de Torcy (77)',
			url: 'http://www.ville-torcy.fr/',
		},
		interventions: [
			{
				year: '2009',
				title: `Restauration du lavoir communal`,
				missions: [
					'Etudes',
					'Autorisation de travaux'
				],
			}
		],
		text: textHtml,
	}
};

