
import textHtml from './text.html';

export const state = {
	data: {
		title: `Lycée « Vauban » à Auxerre`,
		description: `Restauration des lucarnes du lycée « Vauban » à Auxerre`,
		image: {
			main: 'img/photo/project/restauration-par-ext/auxerre/auxerre.jpg',
			mainPortrait: 'img/photo/project/restauration-par-ext/auxerre/auxerre.jpg',
			others: [
				'img/photo/project/restauration-par-ext/auxerre/auxerre.jpg',
				'img/photo/project/restauration-par-ext/auxerre/auxerre.jpg',
			]
		},
		moa: {
			name: 'Conseil Régional de Bourgogne (21)',
			url: 'https://www.bourgognefranchecomte.fr/',
		},
		interventions: [
			{
				year: 2011,
				title: `Restauration des lucarnes du lycée « Vauban »`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '250 000 € HT'
			}
		],
		text: textHtml,
	}
};


