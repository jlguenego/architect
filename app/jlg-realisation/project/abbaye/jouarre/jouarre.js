import textHtml from './text.html';

export const state = {
	data: {
		title: `Crypte de l’Abbaye de Jouarre`,
		description: `Réfection des parements extérieurs - Crypte de l’Abbaye de Jouarre`,
		image: {
			thumbnail: 'img/photo/project/abbaye/jouarre/thumbnail.jpg',
			main: 'img/photo/project/abbaye/jouarre/crypte.jpg',
			mainPortrait: 'img/photo/project/abbaye/jouarre/crypte.jpg',
			others: [
				'img/photo/project/abbaye/jouarre/crypte.jpg',
				'img/photo/project/abbaye/jouarre/crypte.jpg',
			]
		},
		moa: {
			name: 'Ville de Jouarre (77)',
			url: 'http://www.jouarre.fr/',
		},
		interventions: [
			{
				year: 2016,
				title: `Réfection des parements extérieurs`,
				missions: [
					'Etude',
					'AT'
				],
				price: '145 360 € HT'
			},
			{
				year: 2015,
				title: `Etude préalable`
			}
		],
		classement: 'Classé MH',
		text: textHtml,
	}
};

