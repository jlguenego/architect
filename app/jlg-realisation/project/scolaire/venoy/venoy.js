
import textHtml from './text.html';

export const state = {
	data: {
		title: `Laboratoire d’analyses sensorielles au Lycée La Brosse`,
		description: `Réalisation d’un laboratoire d’analyses sensorielles au Lycée La Brosse à Venoy`,
		image: {
			main: 'img/photo/project/scolaire/venoy/venoy.jpg',
			mainPortrait: 'img/photo/project/scolaire/venoy/venoy.jpg',
			trios: [[{
				url: 'img/photo/project/scolaire/venoy/01.jpg',
				caption: 'Image 1'
			}, {
				url: 'img/photo/project/scolaire/venoy/02.jpg',
				caption: 'Image 2'
			}, {
				url: 'img/photo/project/scolaire/venoy/03.jpg',
				caption: 'Image 3'
			}]]
		},
		moa: {
			name: 'Conseil régional de Bourgogne (21)',
			url: 'https://www.bourgognefranchecomte.fr/',
		},
		interventions: [
			{
				year: 2010,
				title: `Réalisation d’un laboratoire d’analyses sensorielles au Lycée La Brosse`,
				missions: [
					'Maîtrise d’œuvre',
					'OPC'
				],
				price: '315 000 € HT'
			}
		],
		text: textHtml,
		client: {
			name: `Conseil régional de Bourgogne`,
			zip: 21000,
			type: 'Public Autres',
		}
	}
};

