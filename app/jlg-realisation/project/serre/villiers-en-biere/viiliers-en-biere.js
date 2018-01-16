
import textHtml from './text.html';

export const state = {
	data: {
		title: `L’Orangerie du domaine de Villiers en Bière`,
		description: `Restauration de l’Orangerie du domaine de Villiers en Bière`,
		image: {
			thumbnail: 'img/photo/project/serre/villiers-en-biere/serre.jpg',
			main: 'img/photo/project/serre/villiers-en-biere/serre.jpg',
			others: [
				'img/photo/project/serre/villiers-en-biere/serre.jpg',
				'img/photo/project/serre/villiers-en-biere/serre.jpg',
			]
		},
		moa: {
			name: 'Commune de Villiers en Bière (77)',
			url: 'http://www.mairievilliersenbiere.fr/',
		},
		interventions: [
			{
				year: '2017 – en cours',
				title: `Restauration de l’Orangerie du domaine de Villiers en Bière`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '150 000 € HT'
			}
		],
		text: textHtml,
	}
};


