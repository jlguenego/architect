import textHtml from './text.html';

export const state = {
	data: {
		title: `Abbaye du Lys de Dammarie les Lys`,
		description: `Restauration et mise en valeur des vestiges de l’ancienne abbaye`,
		image: {
			main: 'img/photo/project/abbaye/dammarie-les-lys/abbaye.jpg',
			mainPortrait: 'img/photo/project/abbaye/dammarie-les-lys/abbaye.jpg',
			others: [
				'img/photo/project/abbaye/dammarie-les-lys/abbaye.jpg',
				'img/photo/project/abbaye/dammarie-les-lys/abbaye.jpg',
			]
		},
		moa: {
			name: 'Ville de Dammarie les Lys (77)',
			url: 'http://www.mairie-dammarie-les-lys.fr/',
		},
		interventions: [
			{
				year: '2016 - en cours',
				title: `Restauration et mise en valeur des vestiges de l’ancienne abbaye`,
				missions: [
					'Etude préalable',
				],
			},
		],
		classement: 'Classé MH',
		text: textHtml,
	}
};


