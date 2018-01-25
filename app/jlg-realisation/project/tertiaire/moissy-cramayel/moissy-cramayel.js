import textHtml from './text.html';

export const state = {
	data: {
		title: `Hôtel de Police Municipale à Moissy-Cramayel`,
		description: `Réhabilitation de l’Hôtel de Police Municipale à Moissy-Cramayel`,
		image: {
			main: 'img/photo/project/tertiaire/moissy-cramayel/moissy-cramayel.jpg',
			mainPortrait: 'img/photo/project/tertiaire/moissy-cramayel/moissy-cramayel.jpg',
			others: [
				'img/photo/project/tertiaire/moissy-cramayel/moissy-cramayel.jpg',
				'img/photo/project/tertiaire/moissy-cramayel/moissy-cramayel.jpg',
			]
		},
		moa: {
			name: 'Ville de Moissy-Cramayel (77)',
			url: 'http://www.moissy-cramayel.fr/'
		},
		interventions: [
			{
				year: 2012,
				title: 'Réhabilitation de l’Hôtel de Police Municipale à Moissy-Cramayel',
				missions: [
					'Maîtrise d’œuvre',
				],
				price: '506 000 € HT'
			}
		],
		text: textHtml,
	}
};
