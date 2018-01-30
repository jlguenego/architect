
import textHtml from './text.html';

export const state = {
	data: {
		title: `L’Orangerie du domaine de Villiers-en-Bière`,
		description: `Restauration de l’Orangerie du domaine de Villiers-en-Bière`,
		image: {
			main: 'img/photo/project/serre/villiers-en-biere/serre.jpg',
			mainPortrait: 'img/photo/project/serre/villiers-en-biere/serre.jpg',
			trios: [[{
				url: 'img/photo/project/serre/villiers-en-biere/01.jpg',
				caption: 'Image 1'
			}, {
				url: 'img/photo/project/serre/villiers-en-biere/02.jpg',
				caption: 'Image 2'
			}, {
				url: 'img/photo/project/serre/villiers-en-biere/03.jpg',
				caption: 'Image 3'
			}]]
		},
		moa: {
			name: 'Commune de Villiers-en-Bière (77)',
			url: 'http://www.mairievilliersenbiere.fr/',
		},
		interventions: [
			{
				year: '2017 – en cours',
				title: `Restauration de l’Orangerie du domaine de Villiers-en-Bière`,
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


