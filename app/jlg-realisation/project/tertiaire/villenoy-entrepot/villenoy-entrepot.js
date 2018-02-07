import textHtml from './text.html';

export const state = {
	data: {
		priority: 999,
		title: `Construction d’un entrepôt et bureaux à Villenoy (2)`,
		description: `Construction d’un entrepôt et bureaux à Villenoy`,
		image: {
			main: 'img/photo/project/tertiaire/villenoy-entrepot/parallax.jpg',
			mainPortrait: 'img/photo/project/tertiaire/villenoy-entrepot/parallax-portrait.jpg',
			trios: [[{
				url: 'img/photo/project/tertiaire/villenoy-entrepot/01.jpg',
				caption: `Avant projet`
			}, {
				url: 'img/photo/project/tertiaire/villenoy-entrepot/02.jpg',
				caption: `Volet paysager`
			}, {
				url: 'img/photo/project/tertiaire/villenoy-entrepot/03.jpg',
				caption: `Après travaux`
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

