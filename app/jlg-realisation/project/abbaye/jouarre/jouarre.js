import textHtml from './text.html';

export const state = {
	data: {
		title: `Crypte de l’Abbaye de Jouarre`,
		description: `
this is the meta description...`,
		image: {
			thumbnail: 'img/photo/project/jouarre/crypte.jpg',
			main: 'img/photo/project/jouarre/crypte.jpg',
			others: [
				'img/photo/project/chauconin/saint-saturnin.jpg',
				'img/photo/project/chauconin/saint-saturnin.jpg',
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

