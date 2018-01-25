
import textHtml from './text.html';

export const state = {
	data: {
		title: `Laboratoire d’analyses sensorielles au Lycée « La Brosse »`,
		description: `Réalisation d’un laboratoire d’analyses sensorielles au Lycée « La Brosse » à Venoy`,
		image: {
			main: 'img/photo/project/scolaire/venoy/venoy.jpg',
			mainPortrait: 'img/photo/project/scolaire/venoy/venoy.jpg',
			others: [
				'img/photo/project/scolaire/venoy/venoy.jpg',
				'img/photo/project/scolaire/venoy/venoy.jpg',
			]
		},
		moa: {
			name: 'Conseil Régional de Bourgogne (21)',
			url: 'https://www.bourgognefranchecomte.fr/',
		},
		interventions: [
			{
				year: 2010,
				title: `Réalisation d’un laboratoire d’analyses sensorielles au Lycée « La Brosse »`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '315 000 € HT'
			}
		],
		text: textHtml,
	}
};

