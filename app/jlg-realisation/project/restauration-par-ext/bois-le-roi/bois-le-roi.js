
import textHtml from './text.html';

export const state = {
	data: {
		title: `Mairie de Bois le Roi`,
		description: `Rénovation extérieure et intérieure Mairie à Bois le Roi`,
		image: {
			main: 'img/photo/project/restauration-par-ext/bois-le-roi/mairie.jpg',
			mainPortrait: 'img/photo/project/restauration-par-ext/bois-le-roi/mairie.jpg',
			others: [
				'img/photo/project/restauration-par-ext/bois-le-roi/mairie.jpg',
				'img/photo/project/restauration-par-ext/bois-le-roi/mairie.jpg',
			]
		},
		moa: {
			name: 'Ville de Bois le Roi (77)',
			url: 'http://www.ville-boisleroi.fr/',
		},
		interventions: [
			{
				year: '2017',
				title: `Rénovation extérieure et intérieure mairie`,
				missions: [
					'Maîtrise d’œuvre'
				],
				price: '350 000 € HT'
			}
		],
		text: textHtml,
	}
};


