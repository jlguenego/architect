
import textHtml from './text.html';

export const state = {
	data: {
		title: `Ecole de Poincy`,
		description: `Réhabilitation de l’école à Poincy`,
		image: {
			main: 'img/photo/project/scolaire/poincy/ecole.jpg',
			mainPortrait: 'img/photo/project/scolaire/poincy/ecole.jpg',
			trios: [[{
				url: 'img/photo/project/scolaire/poincy/01.jpg',
				caption: 'Image 1'
			}, {
				url: 'img/photo/project/scolaire/poincy/02.jpg',
				caption: 'Image 2'
			}, {
				url: 'img/photo/project/scolaire/poincy/03.jpg',
				caption: 'Image 3'
			}]]
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

