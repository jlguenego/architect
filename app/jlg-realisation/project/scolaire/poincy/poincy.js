
import textHtml from './text.html';

export const state = {
	data: {
		title: `Ecole de Poincy`,
		description: `Réhabilitation de l’école à Poincy`,
		image: {
			thumbnail: 'img/photo/project/scolaire/poincy/ecole.jpg',
			main: 'img/photo/project/scolaire/poincy/ecole.jpg',
			mainPortrait: 'img/photo/project/scolaire/poincy/ecole.jpg',
			others: [
				'img/photo/project/scolaire/poincy/ecole.jpg',
				'img/photo/project/scolaire/poincy/ecole.jpg',
			]
		},
		moa: {
			name: 'Commune de Poincy (77)',
			url: 'http://www.poincy.fr/',
		},
		interventions: [
			{
				year: 2016,
				title: `Réhabilitation de l’école`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '420 000 € HT'
			}
		],
		text: textHtml,
	}
};

