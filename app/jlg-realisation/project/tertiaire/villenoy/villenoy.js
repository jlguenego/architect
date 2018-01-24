import textHtml from './text.html';

export const state = {
	data: {
		title: `Construction d’un entrepôt et bureaux à Villenoy`,
		description: `Construction d’un entrepôt et bureaux à Villenoy`,
		image: {
			main: 'img/photo/project/tertiaire/villenoy/villenoy.jpg',
			mainPortrait: 'img/photo/project/tertiaire/villenoy/villenoy.jpg',
			others: [
				'img/photo/project/tertiaire/villenoy/villenoy.jpg',
				'img/photo/project/tertiaire/villenoy/villenoy.jpg',
			]
		},
		moa: {
			name: 'privée',
		},
		interventions: [
			{
				year: 2015,
				title: 'Construction d’un entrepôt et bureaux à Villenoy',
				missions: [
					'Etudes',
					'Autorisation de travaux'
				],
				price: '470 000 € HT'
			}
		],
		text: textHtml,
	}
};

