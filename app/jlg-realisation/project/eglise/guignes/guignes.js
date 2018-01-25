import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Saint Jacques le Mineur de Guignes`,
		description: `Eglise Saint Jacques le Mineur de Guignes`,
		image: {
			main: 'img/photo/project/eglise/guignes/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/guignes/eglise.jpg',
			others: [
				'img/photo/project/eglise/guignes/eglise.jpg',
				'img/photo/project/eglise/guignes/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Guignes (77)',
			url: 'http://www.ville-guignes.fr/',
		},
		interventions: [
			{
				year: '2016 – En cours',
				title: `Restauration de la toiture de l’église`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '430 300 € HT'
			},
			{
				year: 2016,
				title: `Etude préalable`,
			},
		],
		classement: ' Inscrit MH',
		text: textHtml,
	}
};
