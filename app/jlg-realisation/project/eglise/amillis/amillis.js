import textHtml from './text.html';

export const state = {
	data: {
		title: `Eglise Sainte Flodoberthe et Saint Pierre d’Amillis`,
		description: `Eglise Sainte Flodoberthe et Saint Pierre d’Amillis`,
		image: {
			main: 'img/photo/project/eglise/amillis/eglise.jpg',
			mainPortrait: 'img/photo/project/eglise/amillis/eglise.jpg',
			trios: [
				[{
					url: 'img/photo/project/eglise/amillis/01.jpg',
					caption: `Pendant travaux`
				}, {
					url: 'img/photo/project/eglise/amillis/02.jpg',
					caption: 'Réfection couverture'
				}, {
					url: 'img/photo/project/eglise/amillis/03.jpg',
					caption: 'Réfection parements extérieurs'
				}]
			]
		},
		moa: {
			name: 'Commune de Amillis (77)',
		},
		interventions: [{
			year: '2016',
			ongoing: true,
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
