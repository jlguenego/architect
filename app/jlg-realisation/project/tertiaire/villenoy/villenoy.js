import textHtml from './text.html';

export const state = {
	data: {
		title: `Construction d’un entrepôt et bureaux à Villenoy`,
		description: `Construction d’un entrepôt et bureaux à Villenoy`,
		image: {
			main: 'img/photo/project/tertiaire/villenoy/parallax.jpg',
			mainPortrait: 'img/photo/project/tertiaire/villenoy/parallax-portrait.jpg',
			trios: [[{
				url: 'img/photo/project/tertiaire/villenoy/01.jpg',
				caption: `Avant projet`
			}, {
				url: 'img/photo/project/tertiaire/villenoy/02.jpg',
				caption: `Volet paysager`
			}, {
				url: 'img/photo/project/tertiaire/villenoy/03.jpg',
				caption: `Après projet`
			}]]
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
		client: 'privé',
	}
};

