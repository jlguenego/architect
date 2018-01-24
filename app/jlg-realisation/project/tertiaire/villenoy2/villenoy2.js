import textHtml from './text.html';

export const state = {
	data: {
		title: `Construction d’un entrepôt et bureaux à Villenoy`,
		description: `Construction d’un entrepôt et bureaux à Villenoy`,
		image: {
			main: 'img/photo/project/tertiaire/villenoy2/villenoy2.jpg',
			mainPortrait: 'img/photo/project/tertiaire/villenoy2/villenoy2.jpg',
			others: [
				'img/photo/project/tertiaire/villenoy2/villenoy2.jpg',
				'img/photo/project/tertiaire/villenoy2/villenoy2.jpg',
			]
		},
		moa: {
			name: 'privée',
		},
		interventions: [
			{
				year: 2014,
				title: 'Construction d’un entrepôt et bureaux à Villenoy',
				missions: [
					'Etudes',
					'Autorisation de travaux'
				],
				price: '500 000 € HT'
			}
		],
		text: textHtml,
	}
};

