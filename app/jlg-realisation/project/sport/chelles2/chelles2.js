
import textHtml from './text.html';

export const state = {
	data: {
		title: `Halle tennistique « Maurice Machoel » à Chelles`,
		description: `Réhabilitation de la Halle tennistique « Maurice Machoel » à Chelles`,
		image: {
			main: 'img/photo/project/sport/chelles/tennis.jpg',
			mainPortrait: 'img/photo/project/sport/chelles/tennis.jpg',
			others: [
				'img/photo/project/sport/chelles/tennis.jpg',
				'img/photo/project/sport/chelles/tennis.jpg',
			]
		},
		moa: {
			name: 'Ville de Chelles (77)',
			url: 'http://www.chelles.fr/',
		},
		interventions: [
			{
				year: 2015,
				title: `Réhabilitation de la Halle tennistique « Maurice Machoel »`,
				missions: [
					'Etude'
				],
				price: '300 000 Euros HT'
			}
		],
		text: textHtml,
	}
};

