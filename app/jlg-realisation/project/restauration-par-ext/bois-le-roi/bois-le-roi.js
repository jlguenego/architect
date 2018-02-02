import textHtml from './text.html';

export const state = {
	data: {
		title: `Mairie de Bois-le-roi`,
		description: `Rénovation extérieure et intérieure Mairie à Bois-le-roi`,
		image: {
			main: 'img/photo/project/restauration-par-ext/bois-le-roi/parallax.jpg',
			mainPortrait: 'img/photo/project/restauration-par-ext/bois-le-roi/parallax.jpg',
			trios: [
				[{
					url: 'img/photo/project/restauration-par-ext/bois-le-roi/01.jpg',
					caption: 'Façade principale - après travaux'
				}, {
					url: 'img/photo/project/restauration-par-ext/bois-le-roi/02.jpg',
					caption: 'Façade arrière - après travaux'
				}, {
					url: 'img/photo/project/restauration-par-ext/bois-le-roi/03.jpg',
					caption: `Intérieur - après travaux`
				}],
				[{
					url: 'img/photo/project/restauration-par-ext/bois-le-roi/04.jpg',
					caption: 'Façade principale - avant travaux'
					
				}, {
					url: 'img/photo/project/restauration-par-ext/bois-le-roi/05.jpg',
					caption: `Façade arrière - avant travaux`
					
				}, {
					url: 'img/photo/project/restauration-par-ext/bois-le-roi/06.jpg',
					caption: 'Intérieur - avant travaux'
				}]
			]
		},
		moa: {
			name: 'Ville de Bois-le-roi (77)',
			url: 'http://www.ville-boisleroi.fr/',
		},
		interventions: [{
			year: '2017',
			title: `Rénovation extérieure et intérieure mairie`,
			missions: [
				'Maîtrise d’œuvre'
			],
			price: '350 000 € HT'
		}],
		text: textHtml,
		client: {
			name: `Bois-le-Roi`,
			zip: 77590,
			type: 'Mairie',
		}
	}
};
