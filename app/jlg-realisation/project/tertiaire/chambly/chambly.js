import textHtml from './text.html';

export const state = {
	data: {
		title: `Construction d’un hangar de stockage et bureaux à Chambly`,
		description: `Construction d’un hangar de stockage et bureaux à Chambly`,
		image: {
			main: 'img/photo/project/tertiaire/chambly/chambly.jpg',
			mainPortrait: 'img/photo/project/tertiaire/chambly/chambly.jpg',
			others: [
				'img/photo/project/tertiaire/chambly/chambly.jpg',
				'img/photo/project/tertiaire/chambly/chambly.jpg',
			]
		},
		moa: {
			name: 'Ville de Chambly (60)',
			url: 'http://www.ville-chambly.fr/',
		},
		interventions: [{
			year: '2017 – en cours',
			title: 'Construction d’un hangar de stockage et bureaux',
			missions: [
				'Maîtrise d\'oeuvre'
			],
			price: '480 000 € HT'
		}],
		text: textHtml,
		client: {
			name: 'Chambly',
			zip: 60230,
			type: 'Mairie',
		}
	}
};
