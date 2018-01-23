import textHtml from './text.html';

export const state = {
	data: {
		title: `Construction d’un hangar de stockage et bureaux à Chambly`,
		description: `Construction d’un hangar de stockage et bureaux à Chambly`,
		image: {
			main: 'img/photo/project/tertiaire/chambly/tertiaire.jpg',
			mainPortrait: 'img/photo/project/tertiaire/chambly/tertiaire.jpg',
			others: [
				'img/photo/project/tertiaire/chambly/tertiaire.jpg',
				'img/photo/project/tertiaire/chambly/tertiaire.jpg',
			]
		},
		moa: {
			name: 'Ville de Chambly (60)',
			url: 'http://www.ville-chambly.fr/',
		},
		interventions: [
			{
				year: '2017 – en cours',
				missions: [
					'Maîtrise d\'oeuvre'
				],
				price: '480 000 € HT'
			}
		],
		text: textHtml,
	}
};
