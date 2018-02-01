import textHtml from './text.html';

export const state = {
	data: {
		title: `Marché d’Approvisionnement de Longjumeau`,
		description: `Réhabilitation du Marché d’Approvisionnement à Longjumeau`,
		image: {
			main: 'img/photo/project/marche-couvert/longjumeau/marche.jpg',
			mainPortrait: 'img/photo/project/marche-couvert/longjumeau/marche.jpg',
			trios: [
				[{
					url: 'img/photo/project/marche-couvert/longjumeau/01.jpg',
					caption: 'Façades'
				}, {
					url: 'img/photo/project/marche-couvert/longjumeau/02.jpg',
					caption: 'Avant travaux'
				}, {
					url: 'img/photo/project/marche-couvert/longjumeau/03.jpg',
					caption: 'Après travaux'
				}]
			]
		},
		moa: {
			name: 'Ville de Longjumeau (91)',
			url: 'http://www.longjumeau.fr/',
		},
		interventions: [{
			year: 2012,
			title: `Réhabilitation du Marché d’Approvisionnement`,
			missions: [
				'Maîtrise d’œuvre',
				'OPC'
			],
			price: '457 495 € HT'
		}],
		text: textHtml,
		client: {
			name: `Longjumeau`,
			zip: 91160,
			type: 'Mairie',
		}
	}
};
