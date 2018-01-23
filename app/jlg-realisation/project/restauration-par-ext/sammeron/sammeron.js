
import textHtml from './text.html';

export const state = {
	data: {
		title: `Mairie et Ecole de Sammeron`,
		description: `Restauration des façades Mairie et Ecole à Sammeron`,
		image: {
			main: 'img/photo/project/restauration-par-ext/sammeron/mairie.jpg',
			mainPortrait: 'img/photo/project/restauration-par-ext/sammeron/mairie.jpg',
			others: [
				'img/photo/project/restauration-par-ext/sammeron/mairie.jpg',
				'img/photo/project/restauration-par-ext/sammeron/mairie.jpg',
			]
		},
		moa: {
			name: 'Commune de Sammeron (77)',
			url: 'http://www.ville-boisleroi.fr/',
		},
		interventions: [
			{
				year: 2012,
				title: `Restauration des façades Mairie et Ecole`,
				missions: [
					'Maîtrise d’œuvre'
				],
				price: '147 500 € HT'
			}
		],
		text: textHtml,
	}
};



