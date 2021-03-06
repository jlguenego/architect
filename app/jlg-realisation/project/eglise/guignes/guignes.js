import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Jacques le Mineur de Guignes`,
		description: `Eglise Saint Jacques le Mineur de Guignes`,
		image: {
			main: 'img/photo/project/eglise/guignes/parallax.jpg',
			mainPortrait: 'img/photo/project/eglise/guignes/parallax-portrait.jpg',
			trios: [
				[{
					url: 'img/photo/project/eglise/guignes/01.jpg',
					caption: `Dessins d'architecture`
				}, {
					url: 'img/photo/project/eglise/guignes/02.jpg',
					caption: `Intérieur`
				}, {
					url: 'img/photo/project/eglise/guignes/03.jpg',
					caption: `Exterieur`
				}]
			]
		},
		moa: {
			name: 'Commune de Guignes (77)',
			url: 'http://www.ville-guignes.fr/',
		},
		interventions: [{
				year: '2016',
				ongoing: true,
				title: `Restauration de la toiture de l’église`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				// price: '430 300 € HT'
			},
			{
				year: 2016,
				title: `Etude préalable`,
			},
		],
		classement: ' Inscrit MH',
		text: textHtml,
		client: {
			name: 'Guignes',
			zip: 77390,
			type: 'Mairie',
		}
	}
};
