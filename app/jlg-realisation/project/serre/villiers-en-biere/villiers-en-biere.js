
import textHtml from './text.html';

export const state = {
	data: {
		title: `L’Orangerie du domaine de Villiers-en-Bière`,
		description: `Restauration de l’orangerie du domaine de Villiers-en-Bière`,
		image: {
			main: 'img/photo/project/serre/villiers-en-biere/serre.jpg',
			mainPortrait: 'img/photo/project/serre/villiers-en-biere/serre.jpg',
			trios: [[{
				url: 'img/photo/project/serre/villiers-en-biere/01.jpg',
				caption: 'Plan du relevé'
			}, {
				url: 'img/photo/project/serre/villiers-en-biere/02.jpg',
				caption: `Extérieur de l'orangerie`
			}, {
				url: 'img/photo/project/serre/villiers-en-biere/03.jpg',
				caption: `Intérieur de l'orangerie`
			}]]
		},
		moa: {
			name: 'Commune de Villiers-en-Bière (77)',
			url: 'http://www.mairievilliersenbiere.fr/',
		},
		interventions: [
			{
				year: '2017',
				ongoing: true,
				title: `Restauration de l’Orangerie du domaine de Villiers-en-Bière`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '150 000 € HT'
			}
		],
		text: textHtml,
		client: {
			name: `Villiers-en-Bière`,
			zip: 77190,
			type: 'Mairie',
		}
	}
};


