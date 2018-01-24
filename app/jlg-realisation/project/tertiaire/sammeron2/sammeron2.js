import textHtml from './text.html';

export const state = {
	data: {
		title: `Ateliers communaux à Sammeron`,
		description: `Construction des ateliers communaux à Sammeron`,
		image: {
			main: 'img/photo/project/tertiaire/sammeron/sammeron2.jpg',
			mainPortrait: 'img/photo/project/tertiaire/sammeron/sammeron2.jpg',
			others: [
				'img/photo/project/tertiaire/sammeron/sammeron2.jpg',
				'img/photo/project/tertiaire/sammeron/sammeron2.jpg',
			]
		},
		moa: {
			name: 'Commune de Sammeron (77)',
			url: 'http://www.sammeron.fr/',
		},
		interventions: [
			{
				year: '2017 – en cours',
				title: `Construction des ateliers communaux à Sammeron`,
				missions: [
					'Maîtrise d\'oeuvre'
				],
				price: '280 000 € HT'
			}
		],
		text: textHtml,
	}
};

