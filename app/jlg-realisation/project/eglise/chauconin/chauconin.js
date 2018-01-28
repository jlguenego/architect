import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Saturnin de Chauconin`,
		description: `Restauration du transept - Eglise Saint Saturnin de Chauconin`,
		image: {
			main: 'img/photo/project/eglise/chauconin/saint-saturnin.jpg',
			mainPortrait: 'img/photo/project/eglise/chauconin/saint-saturnin.jpg',
			trios: [[{
				url: 'img/photo/project/eglise/chauconin/01.jpg',
				caption: 'Coupe'
			}, {
				url: 'img/photo/project/eglise/chauconin/02.jpg',
				caption: 'Côté sud après intervention'
			}, {
				url: 'img/photo/project/eglise/chauconin/03.jpg',
				caption: 'Côté est pendant intervention'
			}]]
		},
		moa: {
			name: 'Mairie de Chauconin-Neufmontiers (77)',
			url: 'http://chauconin-neufmontiers.fr/',
		},
		interventions: [{
				year: 2012,
				title: `Restauration du transept`,
				missions: [
					'Maîtrise d\'oeuvre'
				],
				price: '303 000 € HT'
			},
			{
				year: 2007,
				title: `Travaux d'urgence`,
				missions: [
					'Maîtrise d\'oeuvre'
				],
				price: '15 000 € HT'
			},
			{
				year: 2006,
				title: `Etude préalable`,
			}
		],
		classement: 'Inscrit MH',
		text: textHtml,
	}
};
