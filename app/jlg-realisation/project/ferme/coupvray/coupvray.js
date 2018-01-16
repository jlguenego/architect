
import textHtml from './text.html';

export const state = {
	data: {
		title: `Ferme du couvent de Coupvray`,
		description: `Restauration de la Maison de Maître - Ferme du couvent de Coupvray`,
		image: {
			thumbnail: 'img/photo/project/ferme/coupvray/thumbnail.jpg',
			main: 'img/photo/project/ferme/coupvray/ferme.jpg',
			mainPortrait: 'img/photo/project/ferme/coupvray/ferme.jpg',
			others: [
				'img/photo/project/ferme/coupvray/ferme.jpg',
				'img/photo/project/ferme/coupvray/ferme.jpg',
			]
		},
		moa: {
			name: 'Commune de Coupvray (77)',
			url: 'http://www.coupvray.fr/',
		},
		interventions: [
			{
				year: '2016 - En cours',
				title: `Restauration de la Maison de Maître`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '332 000 € HT'
			},
			{
				year: '2015 - En cours',
				title: `Restauration d’une partie de l’aile Ouest avec création d’une chaufferie bio-masse`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '432 000 € HT'
			},
			{
				year: '2013 - 2014',
				title: `Travaux de confortation de l’aile Sud`,
				missions: [
					'Maîtrise d\'oeuvre',
					'OPC'
				],
				price: '389 000 € HT'
			}

		],
		classement: 'Inscrit MH',
		text: textHtml,
	}
};


