import textHtml from './text.html';

export const state = {
	data: {
		title: `Construction d’un entrepôt et bureaux à Villenoy`,
		description: `Construction d’un entrepôt et bureaux à Villenoy`,
		image: {
			main: 'img/photo/project/tertiaire/villenoy-entrepot/entrepot.jpg',
			mainPortrait: 'img/photo/project/tertiaire/villenoy-entrepot/entrepot.jpg',
			trios: [[{
				url: 'img/photo/project/tertiaire/villenoy-entrepot/01.jpg',
				caption: 'Image 1'
			}, {
				url: 'img/photo/project/tertiaire/villenoy-entrepot/02.jpg',
				caption: 'Image 2'
			}]]
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
		client: 'privé',
	}
};

