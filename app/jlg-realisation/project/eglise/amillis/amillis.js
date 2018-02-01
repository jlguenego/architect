import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Sainte Flodoberthe et Saint Pierre d’Amillis`,
		description: `Eglise Sainte Flodoberthe et Saint Pierre d’Amillis`,
		image: {
			main: 'img/photo/project/eglise/amillis/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/amillis/eglise.jpg',
			others: [
				'img/photo/project/eglise/amillis/eglise.jpg',
				'img/photo/project/eglise/amillis/eglise.jpg',
			]
		},
		moa: {
			name: 'Commune de Amillis (77)',
		},
		interventions: [{
			year: '2016 – En cours',
			title: `Restauration des parements extérieurs de l’église`,
			missions: [
				'Maîtrise d\'oeuvre',
				'OPC'
			],
			price: '230 000 € HT'
		}],
		classement: ' Inscrit MH',
		text: textHtml,
		client: {
			name: 'Amillis',
			zip: 77120,
			type: 'Mairie',
		}
	}
};
