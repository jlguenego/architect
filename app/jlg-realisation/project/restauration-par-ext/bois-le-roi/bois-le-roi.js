
import textHtml from './text.html';

export const state = {
	data: {
		title: `Mairie de Bois le Roi`,
		description: `Rénovation extérieure et intérieure Mairie à Bois le Roi`,
		image: {
			thumbnail: 'img/photo/project/lavoir/torcy/lavoir.jpg',
			main: 'img/photo/project/lavoir/torcy/lavoir.jpg',
			mainPortrait: 'img/photo/project/lavoir/torcy/lavoir.jpg',
			others: [
				'img/photo/project/lavoir/torcy/lavoir.jpg',
				'img/photo/project/lavoir/torcy/lavoir.jpg',
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
					'Etudes',
					'Autorisation de travaux'
				],
				price: '350 000 € HT'
			}
		],
		text: textHtml,
	}
};

// Rénovation extérieure et intérieure Mairie à Bois le Roi (77) 
// Maîtrise d’ouvrage : Ville de Bois le Roi (77)
// 2017
// Mission de Maîtrise d’œuvre / Montant des travaux : 350 000 € HT

