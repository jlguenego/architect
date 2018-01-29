import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglises de Louan-Villegruis-Fontaine`,
		description: `Eglises de Louan-Villegruis-Fontaine`,
		image: {
			main: 'img/photo/project/eglise/louan-villegruis-fontaine/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/louan-villegruis-fontaine/eglise.jpg',
			trios: [[{
				url: 'img/photo/project/eglise/louan-villegruis-fontaine/01.jpg',
				caption: 'Avant restauration'
			}, {
				url: 'img/photo/project/eglise/louan-villegruis-fontaine/02.jpg',
				caption: 'Après restauration'
			}, {
				url: 'img/photo/project/eglise/louan-villegruis-fontaine/03.jpg',
				caption: 'L\'église de Louan'
			}]]
		},
		moa: {
			name: 'Commune de Louan-Villegruis-Fontaine (77)',
			url: 'http://www.louan-villegruis-fontaine.fr/',
		},
		interventions: [
			{
				year: 2013,
				title: `Restauration de l’église de Louan`,
				missions: [
					'Maîtrise d’œuvre'
				],
				price: '54 000 € HT'
			},
			{
				year: 2012,
				title: `Réfection de l’installation électrique de l’église de Villegruis`,
				missions: [
					'Maîtrise d’œuvre'
				],
				price: '10 500 € HT'
			},
			{
				year: 2010,
				title: `Restauration de la voûte en bois de l’église de Fontaine`,
				missions: [
					'Maîtrise d’œuvre'
				],
				price: '62 000 € HT'
			},
			{
				year: 2009,
				title: 'Etude préalable'
			}
		],
		text: textHtml,
	}
};

